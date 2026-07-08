#!/usr/bin/env node
// Daily news fetcher for everything-apple.
// Fetches Apple news + sideloading + jailbreak feeds (RSS/Atom), parses them with
// plain string/regex (no dependencies), categorizes, de-dupes, caps, and writes
// client/public/data/news.json. A single failed feed never crashes the run.
//
// Run: node scripts/fetch-news.mjs

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = join(__dirname, '..', 'client', 'public', 'data', 'news.json');

const UA = 'everything-apple-bot/1.0';
const FETCH_TIMEOUT_MS = 20000;

// Feed definitions. `category` is the default bucket; news items may be
// re-bucketed by keyword below.
const FEEDS = [
  { url: 'https://9to5mac.com/feed/', source: '9to5Mac', category: 'news' },
  { url: 'https://feeds.macrumors.com/MacRumors-All', source: 'MacRumors', category: 'news' },
  { url: 'https://www.theverge.com/rss/apple/index.xml', source: 'The Verge', category: 'news' },
  { url: 'https://old.reddit.com/r/sideloadly/.rss', source: 'r/sideloadly', category: 'sideloading' },
  { url: 'https://old.reddit.com/r/AltStore/.rss', source: 'r/AltStore', category: 'sideloading' },
  { url: 'https://old.reddit.com/r/jailbreak/.rss', source: 'r/jailbreak', category: 'jailbreak' },
];

const SOURCES = ['9to5Mac', 'MacRumors', 'The Verge', 'r/sideloadly', 'r/AltStore', 'r/jailbreak'];

const CAPS = { news: 30, sideloading: 15, jailbreak: 15 };

// Keyword => bucket. Applied only to items that start life in the "news" bucket.
const JAILBREAK_KW = ['jailbreak', 'palera1n', 'dopamine', 'trollstore'];
const SIDELOAD_KW = ['sideload', 'altstore', 'sidestore', 'livecontainer'];

// ---------- tiny deterministic hash (FNV-1a, 32-bit, hex) ----------
function fnv1a(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    // 32-bit FNV prime multiply via shifts to stay in integer range
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

// ---------- text helpers ----------
function decodeEntities(s) {
  if (!s) return '';
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => {
      try { return String.fromCodePoint(parseInt(n, 10)); } catch { return ''; }
    })
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => {
      try { return String.fromCodePoint(parseInt(n, 16)); } catch { return ''; }
    })
    .replace(/&amp;/g, '&');
}

function stripHtml(s) {
  if (!s) return '';
  return decodeEntities(s)
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function summarize(s, len = 180) {
  const clean = stripHtml(s);
  if (clean.length <= len) return clean;
  return clean.slice(0, len).replace(/\s+\S*$/, '').trim() + '…';
}

// Extract the first capture of the first matching tag.
function tag(block, name) {
  const re = new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)</${name}>`, 'i');
  const m = block.match(re);
  return m ? m[1] : '';
}

// Find an <link .../> (Atom self-closing) or <link>text</link> (RSS).
function extractLink(block) {
  // Atom: <link href="..." rel="alternate"/> — prefer rel="alternate" or no rel.
  const atomLinks = [...block.matchAll(/<link\b([^>]*)\/?>(?:<\/link>)?/gi)];
  let alt = '';
  let first = '';
  for (const [, attrs] of atomLinks) {
    const href = (attrs.match(/href\s*=\s*"([^"]*)"/i) || attrs.match(/href\s*=\s*'([^']*)'/i));
    if (!href) continue;
    const rel = attrs.match(/rel\s*=\s*"([^"]*)"/i);
    if (!first) first = href[1];
    if (!rel || /alternate/i.test(rel[1])) { alt = href[1]; break; }
  }
  if (alt) return decodeEntities(alt).trim();
  if (first) return decodeEntities(first).trim();
  // RSS: <link>https://...</link>
  const rss = tag(block, 'link');
  return decodeEntities(rss).trim();
}

function extractDate(block) {
  const raw =
    tag(block, 'pubDate') ||
    tag(block, 'published') ||
    tag(block, 'updated') ||
    tag(block, 'dc:date') ||
    '';
  const clean = decodeEntities(raw).trim();
  if (!clean) return '';
  const d = new Date(clean);
  return isNaN(d.getTime()) ? '' : d.toISOString();
}

function extractImage(block) {
  // media:content / media:thumbnail url attr
  let m =
    block.match(/<media:content\b[^>]*\burl\s*=\s*"([^"]+)"/i) ||
    block.match(/<media:thumbnail\b[^>]*\burl\s*=\s*"([^"]+)"/i);
  if (m) return decodeEntities(m[1]).trim();
  // enclosure with image type
  m = block.match(/<enclosure\b[^>]*\burl\s*=\s*"([^"]+)"[^>]*>/i);
  if (m && /\.(jpg|jpeg|png|gif|webp)/i.test(m[1])) return decodeEntities(m[1]).trim();
  // first <img src> anywhere in content/description
  const content =
    tag(block, 'content:encoded') || tag(block, 'description') || tag(block, 'content') || tag(block, 'summary');
  const decoded = decodeEntities(content);
  m = decoded.match(/<img\b[^>]*\bsrc\s*=\s*"([^"]+)"/i);
  if (m) return m[1].trim();
  return '';
}

function extractSummary(block) {
  const raw =
    tag(block, 'description') ||
    tag(block, 'summary') ||
    tag(block, 'content:encoded') ||
    tag(block, 'content') ||
    '';
  return summarize(raw);
}

function extractTitle(block) {
  return stripHtml(tag(block, 'title'));
}

// Split a feed body into item blocks (RSS <item>, Atom <entry>).
function splitItems(xml) {
  let blocks = [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map((m) => m[0]);
  if (blocks.length === 0) {
    blocks = [...xml.matchAll(/<entry\b[\s\S]*?<\/entry>/gi)].map((m) => m[0]);
  }
  return blocks;
}

function categorize(defaultCategory, title, summary) {
  if (defaultCategory !== 'news') return defaultCategory;
  const hay = `${title} ${summary}`.toLowerCase();
  if (JAILBREAK_KW.some((k) => hay.includes(k))) return 'jailbreak';
  if (SIDELOAD_KW.some((k) => hay.includes(k))) return 'sideloading';
  return 'news';
}

async function fetchFeed(feed) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(feed.url, {
      headers: { 'User-Agent': UA, Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*' },
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const blocks = splitItems(xml);
    const items = [];
    for (const block of blocks) {
      const title = extractTitle(block);
      const link = extractLink(block);
      if (!title || !link) continue;
      const summary = extractSummary(block);
      const category = categorize(feed.category, title, summary);
      items.push({
        id: fnv1a(link),
        title,
        link,
        source: feed.source,
        category,
        date: extractDate(block) || new Date().toISOString(),
        summary,
        image: extractImage(block) || '',
      });
    }
    return items;
  } finally {
    clearTimeout(timer);
  }
}

function readPrevious() {
  try {
    const prev = JSON.parse(readFileSync(OUT_PATH, 'utf8'));
    if (prev && Array.isArray(prev.items)) return prev.items;
  } catch {
    /* no previous file / invalid — ignore */
  }
  return [];
}

async function main() {
  const results = await Promise.allSettled(FEEDS.map((f) => fetchFeed(f)));

  const collected = [];
  let anySuccess = false;
  results.forEach((r, i) => {
    if (r.status === 'fulfilled') {
      anySuccess = true;
      collected.push(...r.value);
    } else {
      console.warn(`[warn] feed failed: ${FEEDS[i].url} -> ${r.reason && r.reason.message ? r.reason.message : r.reason}`);
    }
  });

  // De-duplicate by link (keep first seen).
  const byLink = new Map();
  for (const item of collected) {
    if (!byLink.has(item.link)) byLink.set(item.link, item);
  }
  const items = [...byLink.values()];

  // Previous file contents, bucketed — used as a per-category fallback so a
  // transient single-feed failure (e.g. a reddit 429) does not wipe an entire
  // category from the site until the next successful daily run.
  const prevItems = readPrevious();
  const prevBuckets = { news: [], sideloading: [], jailbreak: [] };
  for (const item of prevItems) {
    const cat = prevBuckets[item.category] ? item.category : 'news';
    prevBuckets[cat].push(item);
  }

  // Bucket fresh items.
  const buckets = { news: [], sideloading: [], jailbreak: [] };
  for (const item of items) {
    const cat = buckets[item.category] ? item.category : 'news';
    buckets[cat].push(item);
  }

  // Sort newest-first, cap, and fall back to previous data per empty category.
  const flat = [];
  let preserved = 0;
  for (const cat of ['news', 'sideloading', 'jailbreak']) {
    if (buckets[cat].length === 0 && prevBuckets[cat].length > 0) {
      buckets[cat] = prevBuckets[cat];
      preserved += 1;
    }
    buckets[cat].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    buckets[cat] = buckets[cat].slice(0, CAPS[cat]);
    flat.push(...buckets[cat]);
  }
  if (!anySuccess) console.warn('[warn] every feed failed this run; serving previous data.');
  if (preserved > 0) console.warn(`[warn] ${preserved} categor${preserved === 1 ? 'y' : 'ies'} had no fresh items; preserved previous data for them.`);

  const payload = {
    updated: new Date().toISOString(),
    sources: SOURCES,
    items: flat,
  };

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, JSON.stringify(payload, null, 2) + '\n', 'utf8');

  console.log(
    `[ok] wrote ${flat.length} items -> news=${buckets.news.length} sideloading=${buckets.sideloading.length} jailbreak=${buckets.jailbreak.length}`
  );
}

main().catch((err) => {
  // Last-resort guard: never leave the process hanging without a valid file.
  console.error('[error] unexpected failure:', err && err.message ? err.message : err);
  try {
    const prev = readPrevious();
    const payload = { updated: new Date().toISOString(), sources: SOURCES, items: prev };
    mkdirSync(dirname(OUT_PATH), { recursive: true });
    writeFileSync(OUT_PATH, JSON.stringify(payload, null, 2) + '\n', 'utf8');
    console.error('[error] wrote fallback file preserving previous items.');
  } catch (e) {
    console.error('[error] could not write fallback file:', e && e.message ? e.message : e);
  }
  process.exitCode = 0; // do not fail the CI job
});
