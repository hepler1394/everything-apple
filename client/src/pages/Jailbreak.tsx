/* =============================================================
   Jailbreak — companion hub to the Sideloading page.
   Current jailbreak status, the tools that still work, and how
   jailbreaking differs from sideloading. Shares the live feed
   (/data/sideloading-feed.json) for status + r/jailbreak news.
   ============================================================= */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { jailbreakTools, type Tool } from "../data/sideloading";

interface SigningRow { version: string; devices: string; signed: boolean; }
interface ReleaseItem { title: string; sub: string; date: string; summary: string; url: string; }
interface Feed { updated: string; nextUpdate: string; signing: SigningRow[]; redditReleases: ReleaseItem[]; }

const statusColor: Record<Tool["status"], string> = {
  Active: "#30d158", Legacy: "#ff9f0a", Discontinued: "#8e8e93",
};

function Section({ children, bg }: { children: React.ReactNode; bg?: string }) {
  return (
    <section style={{ background: bg || "transparent", padding: "72px 22px" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>{children}</div>
    </section>
  );
}
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand)", margin: "0 0 12px" }}>{children}</p>;
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--foreground)", margin: "0 0 14px" }}>{children}</h2>;
}
const chip: React.CSSProperties = { fontSize: "11px", color: "var(--muted-foreground)", background: "rgba(127,127,127,0.12)", padding: "3px 9px", borderRadius: "980px", whiteSpace: "nowrap" };

export default function Jailbreak() {
  const [feed, setFeed] = useState<Feed | null>(null);

  useEffect(() => {
    fetch("/data/sideloading-feed.json").then((r) => r.json()).then(setFeed).catch(() => setFeed(null));
  }, []);

  const jbNews = (feed?.redditReleases || []).filter((r) => r.sub.includes("jailbreak"));

  return (
    <div style={{ minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "linear-gradient(180deg, color-mix(in srgb, var(--brand) 18%, var(--background)) 0%, var(--background) 100%)", padding: "80px 22px 56px", textAlign: "center" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <Eyebrow>The Jailbreak Hub</Eyebrow>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 76px)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--foreground)", margin: "0 0 18px", lineHeight: 1.05 }}>
            Jailbreaking, demystified.
          </h1>
          <p style={{ fontSize: "19px", color: "var(--muted-foreground)", lineHeight: 1.5, maxWidth: "620px", margin: "0 auto 28px" }}>
            What still works, what doesn't, and the tools that matter — kept current with the latest from r/jailbreak.
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#tools" className="btn-primary" style={btnPrimary}>See the tools</a>
            <Link href="/sideloading"><span className="aqua-ghost" style={btnGhost}>← Sideloading hub</span></Link>
          </div>
        </div>
      </section>

      {/* Status banner */}
      <Section>
        <div className="aqua-panel" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "22px", padding: "30px", display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap" }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff453a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0 }}>
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          <div style={{ flex: 1, minWidth: "260px" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "#ff453a", marginBottom: "8px" }}>iOS 26 — No jailbreak</div>
            <p style={{ fontSize: "16px", color: "var(--muted-foreground)", lineHeight: 1.6, margin: 0 }}>
              There is no public jailbreak for any version of iOS 26, and no working exploit chain has been demonstrated on the current iOS 26.5. Research continues — opa334's reimplementation of the DarkSword kernel exploit targets builds up to iOS 26.0.1, but it isn't a complete jailbreak. If you want apps outside the App Store today, <Link href="/sideloading"><span style={{ color: "var(--brand)", fontWeight: 600 }}>sideloading</span></Link> is the answer, not jailbreaking.
            </p>
          </div>
        </div>
      </Section>

      {/* Sideloading vs Jailbreak */}
      <Section bg="color-mix(in srgb, var(--brand) 6%, var(--background))">
        <Eyebrow>First, the difference</Eyebrow>
        <H2>Sideloading vs. jailbreaking</H2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginTop: "20px" }}>
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "20px", padding: "24px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--foreground)", margin: "0 0 10px" }}>Sideloading</h3>
            <p style={{ fontSize: "14px", color: "var(--muted-foreground)", lineHeight: 1.6, margin: 0 }}>
              Installs extra apps using a normal developer/Apple ID signature. Your device stays fully stock and secure — no system files touched. Works on every modern iPhone, including iOS 26. This is what most people want.
            </p>
          </div>
          <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "20px", padding: "24px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--foreground)", margin: "0 0 10px" }}>Jailbreaking</h3>
            <p style={{ fontSize: "14px", color: "var(--muted-foreground)", lineHeight: 1.6, margin: 0 }}>
              Removes Apple's restrictions at the system level for deep tweaks and themes. Requires a kernel exploit, only exists for older iOS, and weakens device security. Powerful, but increasingly rare on modern hardware.
            </p>
          </div>
        </div>
      </Section>

      {/* Tools */}
      <Section>
        <div id="tools" style={{ scrollMarginTop: "70px" }} />
        <Eyebrow>The toolbox</Eyebrow>
        <H2>Jailbreak tools that still matter</H2>
        <p style={{ fontSize: "15px", color: "var(--muted-foreground)", margin: "0 0 28px", maxWidth: "640px" }}>
          Modern jailbreaks live on older firmware. Check your device and iOS version against each tool's support range.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
          {jailbreakTools.map((t) => (
            <a key={t.name} href={t.url} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", flexDirection: "column", gap: "10px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "20px", padding: "22px", textDecoration: "none", transition: "transform 0.15s ease, border-color 0.15s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "var(--brand)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                <span style={{ fontSize: "18px", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.02em" }}>{t.name}</span>
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: statusColor[t.status], background: "color-mix(in srgb, " + statusColor[t.status] + " 16%, transparent)", padding: "3px 8px", borderRadius: "6px", whiteSpace: "nowrap" }}>{t.status}</span>
              </div>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--brand)" }}>{t.tagline}</span>
              <span style={{ fontSize: "14px", color: "var(--muted-foreground)", lineHeight: 1.5 }}>{t.desc}</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                <span style={chip}>{t.computer}</span>
                <span style={chip}>{t.ios}</span>
                {t.open && <span style={chip}>Open source</span>}
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* TrollStore callout */}
      <Section bg="color-mix(in srgb, var(--brand) 6%, var(--background))">
        <div className="aqua-panel" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "22px", padding: "30px" }}>
          <Eyebrow>The middle ground</Eyebrow>
          <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--foreground)", margin: "0 0 10px" }}>TrollStore — permanent installs, no jailbreak</h3>
          <p style={{ fontSize: "16px", color: "var(--muted-foreground)", lineHeight: 1.6, margin: "0 0 14px" }}>
            TrollStore uses a CoreTrust bug to install IPAs permanently with no signing and no 7-day refresh — the best of both worlds. The catch: Apple patched it in iOS 17.0.1, so it only works on iOS 14.0 through 17.0. If you're on a supported version, it's the single best way to install apps.
          </p>
          <a href="https://github.com/opa334/TrollStore" target="_blank" rel="noopener noreferrer" style={btnPrimary}>TrollStore on GitHub</a>
        </div>
      </Section>

      {/* r/jailbreak news */}
      <Section>
        <Eyebrow>From r/jailbreak</Eyebrow>
        <H2>Latest jailbreak news</H2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
          {jbNews.map((r) => (
            <a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "18px 22px", textDecoration: "none" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "baseline", flexWrap: "wrap" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--brand)" }}>{r.sub}</span>
                <span style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>{r.date}</span>
              </div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: "var(--foreground)", margin: "4px 0 6px" }}>{r.title}</div>
              <div style={{ fontSize: "14px", color: "var(--muted-foreground)", lineHeight: 1.5 }}>{r.summary}</div>
            </a>
          ))}
          {jbNews.length === 0 && <span style={{ color: "var(--muted-foreground)" }}>Loading…</span>}
        </div>
        <p style={{ fontSize: "12px", color: "var(--muted-foreground)", marginTop: "16px" }}>
          {feed ? `Updated ${feed.updated} · next refresh ${feed.nextUpdate}.` : ""} For day-to-day chatter, see r/jailbreak directly.
        </p>
      </Section>

    </div>
  );
}

// Base geometry only — .btn-primary supplies the fill (glossy Aqua in classic).
const btnPrimary: React.CSSProperties = {
  display: "inline-block", padding: "11px 22px", fontSize: "15px", fontWeight: 500,
  textDecoration: "none", cursor: "pointer",
};
const btnGhost: React.CSSProperties = {
  display: "inline-block", background: "transparent", color: "var(--foreground)", border: "1px solid var(--border)",
  borderRadius: "980px", padding: "11px 22px", fontSize: "15px", fontWeight: 500, textDecoration: "none", cursor: "pointer",
};
