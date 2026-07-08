/*
 * Blog / News — the site's news desk.
 * Reads client/public/data/news.json (refreshed daily by a GitHub Action)
 * for the latest Apple, sideloading and jailbreak headlines, and hosts the
 * evergreen editorial posts (WWDC recap, the new Siri, iOS 27) that used to
 * clutter the top nav.
 */

import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";

interface NewsItem {
  id: string;
  title: string;
  link: string;
  source: string;
  category: "news" | "sideloading" | "jailbreak" | string;
  date: string;
  summary: string;
  image: string;
}
interface NewsFile {
  updated: string;
  sources: string[];
  items: NewsItem[];
}

// Evergreen posts — the WWDC/Siri/iOS coverage, now living on the news desk
// instead of the primary navigation.
const POSTS: { href: string; kicker: string; title: string; blurb: string }[] = [
  {
    href: "/wwdc-2026",
    kicker: "Event Recap",
    title: "WWDC 2026: everything Apple announced",
    blurb: "The full keynote in one page — iOS 27, macOS Golden Gate, watchOS 12, visionOS, and the new Siri.",
  },
  {
    href: "/siri-ai",
    kicker: "Deep Dive",
    title: "The new Siri, explained",
    blurb: "Apple Intelligence rebuilt Siri from the ground up. What it can actually do, and how private it is.",
  },
  {
    href: "/ios-27",
    kicker: "Software",
    title: "iOS 27 and the Liquid Glass redesign",
    blurb: "The biggest visual overhaul in iPhone history — features, supported devices, and the release timeline.",
  },
];

const CATS = [
  { id: "all", label: "All" },
  { id: "news", label: "Apple News" },
  { id: "sideloading", label: "Sideloading" },
  { id: "jailbreak", label: "Jailbreak" },
];

function timeAgo(dateStr: string): string {
  const then = new Date(dateStr).getTime();
  if (!then) return "";
  const diff = Math.floor((Date.now() - then) / 1000);
  if (diff < 3600) return `${Math.max(1, Math.floor(diff / 60))}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

const SOURCE_COLORS: Record<string, string> = {
  "9to5Mac": "#1a6ee0",
  MacRumors: "#e8272a",
  "The Verge": "#ff3b30",
};

export default function Blog() {
  const [data, setData] = useState<NewsFile | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [cat, setCat] = useState("all");

  useEffect(() => {
    let cancelled = false;
    fetch("/data/news.json", { cache: "no-cache" })
      .then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
      .then((json: NewsFile) => {
        if (cancelled) return;
        setData(json);
        setStatus(Array.isArray(json.items) && json.items.length ? "ready" : "error");
      })
      .catch(() => { if (!cancelled) setStatus("error"); });
    return () => { cancelled = true; };
  }, []);

  const items = useMemo(() => {
    const all = data?.items ?? [];
    const filtered = cat === "all" ? all : all.filter((i) => i.category === cat);
    return [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [data, cat]);

  return (
    <>
      {/* Hero */}
      <section className="section-snow section-pad-sm">
        <div className="page-container">
          <p className="t-eyebrow" style={{ marginBottom: "12px" }}>The News Desk</p>
          <h1
            style={{
              fontFamily: "var(--font-sf-pro-display, system-ui)",
              fontSize: "clamp(36px, 5.5vw, 60px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "var(--foreground, #1d1d1f)",
              margin: "0 0 16px",
            }}
          >
            Apple news, sideloading &amp; jailbreak.
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.5, color: "var(--muted-foreground, #707070)", maxWidth: "640px", margin: 0 }}>
            The headlines that matter for the Apple faithful — refreshed daily from 9to5Mac, MacRumors and the
            sideloading &amp; jailbreak community. Plus our own deep dives.
            {data?.updated && (
              <span style={{ display: "block", marginTop: "8px", fontSize: "13px", color: "var(--muted-foreground, #8a8a8f)" }}>
                Feed updated {timeAgo(data.updated)}
              </span>
            )}
          </p>
        </div>
      </section>

      {/* Evergreen posts */}
      <section className="section-fog section-pad">
        <div className="page-container">
          <h2 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--foreground, #1d1d1f)", margin: "0 0 20px" }}>
            From the desk
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {POSTS.map((p) => (
              <Link key={p.href} href={p.href}>
                <article
                  className="card"
                  style={{ cursor: "pointer", transition: "transform 0.2s ease", height: "100%" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--brand)", margin: "0 0 10px" }}>{p.kicker}</p>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--foreground, #1d1d1f)", margin: "0 0 8px", lineHeight: 1.25 }}>{p.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.5, color: "var(--muted-foreground, #707070)", margin: 0 }}>{p.blurb}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Live feed */}
      <section className="section-snow section-pad">
        <div className="page-container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", marginBottom: "24px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--foreground, #1d1d1f)", margin: 0 }}>
              Latest headlines
            </h2>
            <div role="tablist" aria-label="Filter news" style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {CATS.map((c) => {
                const active = c.id === cat;
                return (
                  <button
                    key={c.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setCat(c.id)}
                    style={{
                      padding: "7px 16px",
                      borderRadius: "999px",
                      border: "1px solid var(--border, #d5d6dd)",
                      background: active ? "var(--foreground, #1d1d1f)" : "var(--card, #fff)",
                      color: active ? "var(--background, #fff)" : "var(--foreground, #1d1d1f)",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          {status === "loading" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} style={{ height: "150px", borderRadius: "14px", background: "var(--secondary, #ececf0)", animation: "pulse 1.5s ease-in-out infinite" }} />
              ))}
            </div>
          )}

          {status === "error" && (
            <p style={{ fontSize: "16px", color: "var(--muted-foreground, #707070)" }}>
              The live feed is refreshing. Check back shortly, or read directly from{" "}
              <a href="https://9to5mac.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--brand-link, var(--brand))" }}>9to5Mac</a>.
            </p>
          )}

          {status === "ready" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
              {items.map((it) => (
                <a key={it.id} href={it.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <article
                    className="card"
                    style={{ padding: 0, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column", transition: "transform 0.2s ease" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                  >
                    {it.image && (
                      <div style={{ height: "150px", overflow: "hidden", background: "var(--secondary, #ececf0)" }}>
                        <img src={it.image} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      </div>
                    )}
                    <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: SOURCE_COLORS[it.source] || "var(--brand)" }}>{it.source}</span>
                        {it.category !== "news" && (
                          <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--muted-foreground, #8a8a8f)", border: "1px solid var(--border, #d5d6dd)", borderRadius: "4px", padding: "1px 5px" }}>{it.category}</span>
                        )}
                        <span style={{ fontSize: "11px", color: "var(--muted-foreground, #8a8a8f)", marginLeft: "auto" }}>{timeAgo(it.date)}</span>
                      </div>
                      <h3 style={{ fontSize: "16px", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.35, color: "var(--foreground, #1d1d1f)", margin: "0 0 8px" }}>{it.title}</h3>
                      {it.summary && (
                        <p style={{ fontSize: "13px", color: "var(--muted-foreground, #707070)", lineHeight: 1.5, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{it.summary}</p>
                      )}
                    </div>
                  </article>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
