/* =============================================================
   LatestNews — Live RSS feed from 9to5Mac, MacRumors, The Verge
   Fetches via rss2json API (no CORS issues), Apple.com design
   Built by Cory Hepler
   ============================================================= */

import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
  source: string;
  sourceColor: string;
}

const FEEDS = [
  {
    url: "https://9to5mac.com/feed/",
    source: "9to5Mac",
    color: "#0071e3",
  },
  {
    url: "https://feeds.macrumors.com/MacRumors-All",
    source: "MacRumors",
    color: "#e8272a",
  },
  {
    url: "https://www.theverge.com/rss/apple/index.xml",
    source: "The Verge",
    color: "#ff3b30",
  },
];

function timeAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diff = Math.floor((now - then) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
}

async function fetchFeed(feed: typeof FEEDS[0]): Promise<NewsItem[]> {
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}&api_key=public&count=8`;
  const res = await fetch(apiUrl);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (data.status !== "ok") throw new Error("Feed error");
  return (data.items || []).slice(0, 8).map((item: any) => ({
    title: item.title || "",
    link: item.link || item.guid || "#",
    pubDate: item.pubDate || "",
    description: stripHtml(item.description || item.content || ""),
    thumbnail: item.thumbnail || item.enclosure?.link || "",
    source: feed.source,
    sourceColor: feed.color,
  }));
}

export default function LatestNews() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSource, setActiveSource] = useState<string>("All");
  const [error, setError] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark" || theme === "siri" || theme === "red";
  const sectionBg = isDark ? "#1d1d1f" : "#f5f5f7";
  const cardBg = isDark ? "#2c2c2e" : "#fff";
  const textPrimary = isDark ? "#f5f5f7" : "#1d1d1f";
  const textSecondary = isDark ? "rgba(245,245,247,0.6)" : "#6e6e73";
  const skeletonBg = isDark ? "#3a3a3c" : "#e0e0e5";
  const tabBg = isDark ? "#3a3a3c" : "#e0e0e5";
  const tabActiveBg = isDark ? "#f5f5f7" : "#1d1d1f";
  const tabActiveColor = isDark ? "#1d1d1f" : "#fff";
  const tabColor = isDark ? "#f5f5f7" : "#1d1d1f";
  const cardBorder = isDark ? "1px solid rgba(255,255,255,0.06)" : "none";

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);

    Promise.allSettled(FEEDS.map(fetchFeed))
      .then((results) => {
        if (cancelled) return;
        const all: NewsItem[] = [];
        results.forEach((r) => {
          if (r.status === "fulfilled") all.push(...r.value);
        });
        // Sort by date descending
        all.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
        if (all.length === 0) setError(true);
        setItems(all);
        setLoading(false);
      })
      .catch(() => {
        if (!cancelled) { setError(true); setLoading(false); }
      });

    return () => { cancelled = true; };
  }, []);

  const sources = ["All", ...FEEDS.map((f) => f.source)];
  const filtered = activeSource === "All" ? items : items.filter((i) => i.source === activeSource);

  return (
    <section style={{ background: sectionBg, padding: "80px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: theme === "siri" ? "#bf5af2" : theme === "red" ? "#ff453a" : "#0071e3", marginBottom: "10px" }}>
              Live Feed
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", color: textPrimary, lineHeight: 1.1, margin: 0 }}>
              Latest Apple News
            </h2>
          </div>
          {/* Source filter tabs */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {sources.map((src) => (
              <button
                key={src}
                onClick={() => setActiveSource(src)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "980px",
                  border: "none",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  background: activeSource === src ? tabActiveBg : tabBg,
                  color: activeSource === src ? tabActiveColor : tabColor,
                }}
              >
                {src}
              </button>
            ))}
          </div>
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ background: cardBg, borderRadius: "18px", overflow: "hidden", height: "320px", animation: "pulse 1.5s ease-in-out infinite", border: cardBorder }}>
                <div style={{ height: "180px", background: skeletonBg }} />
                <div style={{ padding: "20px" }}>
                  <div style={{ height: "12px", background: skeletonBg, borderRadius: "6px", marginBottom: "10px", width: "40%" }} />
                  <div style={{ height: "16px", background: skeletonBg, borderRadius: "6px", marginBottom: "8px" }} />
                  <div style={{ height: "16px", background: skeletonBg, borderRadius: "6px", width: "80%" }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ fontSize: "17px", color: textSecondary }}>
              Unable to load live news feed. Check back shortly.
            </p>
            <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
              {FEEDS.map((f) => (
                <a key={f.source} href={f.url.replace("/feed/", "").replace("/rss/", "").replace("feeds.", "www.")} target="_blank" rel="noopener noreferrer"
                  style={{ display: "block", background: cardBg, borderRadius: "14px", padding: "24px", textDecoration: "none", border: cardBorder || "1px solid " + skeletonBg }}>
                  <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: f.color, marginBottom: "8px" }}>{f.source}</div>
                  <div style={{ fontSize: "15px", color: textPrimary, fontWeight: 500 }}>Visit {f.source} directly</div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* News grid */}
        {!loading && !error && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {filtered.slice(0, 12).map((item, i) => (
              <a
                key={`${item.link}-${i}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  style={{
                    background: cardBg,
                    borderRadius: "18px",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s ease",
                    boxShadow: isDark ? "0 2px 12px rgba(0,0,0,0.3)" : "0 2px 12px rgba(0,0,0,0.06)",
                    border: cardBorder,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                  }}
                >
                  {/* Thumbnail */}
                  <div style={{ height: "180px", background: skeletonBg, overflow: "hidden", flexShrink: 0 }}>
                    {item.thumbnail ? (
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #1d1d1f 0%, #3a3a3c 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "32px", color: "rgba(255,255,255,0.2)", fontWeight: 700, letterSpacing: "-0.04em" }}>
                          {item.source.slice(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div style={{ padding: "20px 22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: item.sourceColor }}>
                        {item.source}
                      </span>
                      <span style={{ fontSize: "11px", color: "#8e8e93" }}>
                        {timeAgo(item.pubDate)}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.022em", lineHeight: 1.35, color: textPrimary, margin: "0 0 10px", flex: 1 }}>
                      {item.title}
                    </h3>
                    {item.description && (
                      <p style={{ fontSize: "13px", color: textSecondary, lineHeight: 1.5, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {item.description}
                      </p>
                    )}
                  </div>
                </article>
              </a>
            ))}
          </div>
        )}

        {/* View all links */}
        {!loading && !error && (
          <div style={{ display: "flex", gap: "24px", justifyContent: "center", marginTop: "48px", flexWrap: "wrap" }}>
            {FEEDS.map((f) => (
              <a key={f.source} href={f.url.replace("/feed/", "").replace("feeds.", "www.").replace("-All", "")} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "15px", color: f.color, textDecoration: "none", fontWeight: 500, letterSpacing: "-0.01em", borderBottom: `1px solid ${f.color}`, paddingBottom: "2px" }}>
                More from {f.source}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
