/* =============================================================
   Sideloading — the hub for everything sideloading on iOS.
   Tools, legit downloadable apps, AltStore sources, live Apple
   signing status, recent Reddit releases, and an auto-updating blog.
   Live data: /data/sideloading-feed.json (refreshed every 5 days).
   ============================================================= */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  sideloadTools, legitApps, altstoreSources, type Tool,
  altstoreAddLink, sidestoreAddLink,
} from "../data/sideloading";

interface SigningRow { version: string; devices: string; signed: boolean; }
interface ReleaseItem { title: string; sub: string; date: string; summary: string; url: string; }
interface BlogPost { slug: string; title: string; date: string; summary: string; body: string; }
interface Feed {
  updated: string; nextUpdate: string; note: string;
  signing: SigningRow[]; redditReleases: ReleaseItem[]; blog: BlogPost[];
}

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
  return (
    <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--brand)", margin: "0 0 12px" }}>
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--foreground)", margin: "0 0 14px" }}>
      {children}
    </h2>
  );
}

const chip: React.CSSProperties = {
  fontSize: "11px", color: "var(--muted-foreground)", background: "rgba(127,127,127,0.12)",
  padding: "3px 9px", borderRadius: "980px", whiteSpace: "nowrap",
};

function ToolCard({ t }: { t: Tool }) {
  return (
    <a href={t.url} target="_blank" rel="noopener noreferrer"
      style={{
        display: "flex", flexDirection: "column", gap: "10px",
        background: "var(--card)", border: "1px solid var(--border)", borderRadius: "20px",
        padding: "22px", textDecoration: "none", transition: "transform 0.15s ease, border-color 0.15s ease",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "var(--brand)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--border)"; }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
        <span style={{ fontSize: "18px", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.02em" }}>{t.name}</span>
        <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: statusColor[t.status], background: "color-mix(in srgb, " + statusColor[t.status] + " 16%, transparent)", padding: "3px 8px", borderRadius: "6px", whiteSpace: "nowrap" }}>
          {t.status}
        </span>
      </div>
      <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--brand)" }}>{t.tagline}</span>
      <span style={{ fontSize: "14px", color: "var(--muted-foreground)", lineHeight: 1.5 }}>{t.desc}</span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
        <span style={chip}>{t.computer}</span>
        <span style={chip}>{t.ios}</span>
        {t.open && <span style={chip}>Open source</span>}
      </div>
    </a>
  );
}

const FALLBACK: Feed = {
  updated: "—", nextUpdate: "—", note: "",
  signing: [], redditReleases: [], blog: [],
};

export default function Sideloading() {
  const [feed, setFeed] = useState<Feed>(FALLBACK);
  const [appFilter, setAppFilter] = useState<string>("All");

  useEffect(() => {
    fetch("/data/sideloading-feed.json")
      .then((r) => r.json())
      .then((d: Feed) => setFeed(d))
      .catch(() => setFeed(FALLBACK));
  }, []);

  const categories = ["All", ...Array.from(new Set(legitApps.map((a) => a.category)))];
  const apps = appFilter === "All" ? legitApps : legitApps.filter((a) => a.category === appFilter);

  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "linear-gradient(180deg, color-mix(in srgb, var(--brand) 18%, var(--background)) 0%, var(--background) 100%)", padding: "80px 22px 56px", textAlign: "center" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <Eyebrow>The Sideloading Hub</Eyebrow>
          <h1 style={{ fontSize: "clamp(40px, 7vw, 76px)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--foreground)", margin: "0 0 18px", lineHeight: 1.05 }}>
            Everything sideloading.<br />One place.
          </h1>
          <p style={{ fontSize: "19px", color: "var(--muted-foreground)", lineHeight: 1.5, maxWidth: "620px", margin: "0 auto 28px" }}>
            Every tool, every legit app, live Apple signing status, and the latest from r/sideloaded and r/jailbreak — updated every five days.
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#tools" style={btnPrimary}>Browse tools</a>
            <a href="#apps" style={btnGhost}>Download apps</a>
            <Link href="/jailbreak"><span style={btnGhost}>Jailbreak hub →</span></Link>
          </div>
        </div>
      </section>

      {/* Signing status */}
      <Section>
        <Eyebrow>Live from Apple</Eyebrow>
        <H2>What Apple is signing right now</H2>
        <p style={{ fontSize: "15px", color: "var(--muted-foreground)", margin: "0 0 24px", maxWidth: "640px" }}>
          Apple only signs a couple of iOS builds at a time. You can only restore or downgrade to a <strong style={{ color: "var(--foreground)" }}>signed</strong> version. Snapshot below — verify before restoring.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
          {feed.signing.map((s) => (
            <div key={s.version} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "18px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "17px", fontWeight: 700, color: "var(--foreground)" }}>{s.version}</span>
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: s.signed ? "#30d158" : "#ff453a", background: s.signed ? "rgba(48,209,88,0.15)" : "rgba(255,69,58,0.15)", padding: "4px 10px", borderRadius: "980px" }}>
                  {s.signed ? "Signed" : "Not signed"}
                </span>
              </div>
              <span style={{ fontSize: "13px", color: "var(--muted-foreground)" }}>{s.devices}</span>
            </div>
          ))}
          {feed.signing.length === 0 && <span style={{ color: "var(--muted-foreground)" }}>Loading signing status…</span>}
        </div>
        <p style={{ fontSize: "12px", color: "var(--muted-foreground)", marginTop: "14px" }}>
          Last updated {feed.updated} · next refresh {feed.nextUpdate}. For real-time status, cross-check a dedicated signing tracker.
        </p>
      </Section>

      {/* Tools */}
      <Section bg="color-mix(in srgb, var(--brand) 6%, var(--background))">
        <div id="tools" style={{ scrollMarginTop: "70px" }} />
        <Eyebrow>Installers &amp; signers</Eyebrow>
        <H2>Sideloading tools</H2>
        <p style={{ fontSize: "15px", color: "var(--muted-foreground)", margin: "0 0 28px", maxWidth: "640px" }}>
          How you get apps onto your iPhone without the App Store. Start with AltStore or SideStore, then add LiveContainer to escape the 3-app limit.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
          {sideloadTools.map((t) => <ToolCard key={t.name} t={t} />)}
        </div>
      </Section>

      {/* Apps */}
      <Section>
        <div id="apps" style={{ scrollMarginTop: "70px" }} />
        <Eyebrow>Downloads</Eyebrow>
        <H2>Apps you can sideload</H2>
        <p style={{ fontSize: "15px", color: "var(--muted-foreground)", margin: "0 0 20px", maxWidth: "680px" }}>
          Hand-picked, <strong style={{ color: "var(--foreground)" }}>open-source</strong> apps with official downloads. Every link goes to the developer's own release — no cracked or pirated software.
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "22px" }}>
          {categories.map((c) => (
            <button key={c} onClick={() => setAppFilter(c)} style={{
              padding: "7px 16px", borderRadius: "980px", border: "1px solid var(--border)", cursor: "pointer",
              fontSize: "13px", fontWeight: 500,
              background: appFilter === c ? "var(--brand)" : "transparent",
              color: appFilter === c ? "#fff" : "var(--muted-foreground)",
            }}>{c}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
          {apps.map((a) => (
            <div key={a.name} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "20px", padding: "22px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "18px", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.02em" }}>{a.name}</span>
                <span style={chip}>{a.category}</span>
              </div>
              <span style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>by {a.dev}</span>
              <span style={{ fontSize: "14px", color: "var(--muted-foreground)", lineHeight: 1.5, flex: 1 }}>{a.desc}</span>
              <a href={a.url} target="_blank" rel="noopener noreferrer" style={{ ...btnPrimary, textAlign: "center", marginTop: "6px" }}>Get IPA</a>
            </div>
          ))}
        </div>
      </Section>

      {/* Sources */}
      <Section bg="color-mix(in srgb, var(--brand) 6%, var(--background))">
        <Eyebrow>One-tap setup</Eyebrow>
        <H2>AltStore &amp; SideStore sources</H2>
        <p style={{ fontSize: "15px", color: "var(--muted-foreground)", margin: "0 0 28px", maxWidth: "640px" }}>
          On your iPhone, tap “Add to AltStore / SideStore” to load a source instantly. On desktop, copy the URL into the app.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
          {altstoreSources.map((s) => (
            <div key={s.name} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "20px", padding: "22px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "17px", fontWeight: 700, color: "var(--foreground)" }}>{s.name}</span>
              <span style={{ fontSize: "14px", color: "var(--muted-foreground)", lineHeight: 1.5, flex: 1 }}>{s.desc}</span>
              <code style={{ fontSize: "11px", color: "var(--muted-foreground)", wordBreak: "break-all", background: "rgba(127,127,127,0.1)", padding: "6px 8px", borderRadius: "8px" }}>{s.sourceUrl}</code>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <a href={altstoreAddLink(s.sourceUrl)} style={{ ...btnPrimarySm }}>Add to AltStore</a>
                <a href={sidestoreAddLink(s.sourceUrl)} style={{ ...btnGhostSm }}>SideStore</a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Reddit releases */}
      <Section>
        <Eyebrow>From the community</Eyebrow>
        <H2>Recent releases &amp; news</H2>
        <p style={{ fontSize: "15px", color: "var(--muted-foreground)", margin: "0 0 24px", maxWidth: "640px" }}>
          Highlights from r/sideloaded, r/sideloadly and r/jailbreak — refreshed every five days.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {feed.redditReleases.map((r) => (
            <a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer" style={{
              display: "block", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "16px",
              padding: "18px 22px", textDecoration: "none", transition: "border-color 0.15s ease",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--brand)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
            >
              <div style={{ display: "flex", gap: "10px", alignItems: "baseline", flexWrap: "wrap" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--brand)" }}>{r.sub}</span>
                <span style={{ fontSize: "12px", color: "var(--muted-foreground)" }}>{r.date}</span>
              </div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: "var(--foreground)", margin: "4px 0 6px", letterSpacing: "-0.01em" }}>{r.title}</div>
              <div style={{ fontSize: "14px", color: "var(--muted-foreground)", lineHeight: 1.5 }}>{r.summary}</div>
            </a>
          ))}
          {feed.redditReleases.length === 0 && <span style={{ color: "var(--muted-foreground)" }}>Loading releases…</span>}
        </div>
      </Section>

      {/* Blog */}
      <Section bg="color-mix(in srgb, var(--brand) 6%, var(--background))">
        <Eyebrow>The Sideloading Blog</Eyebrow>
        <H2>Updated every 5 days</H2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "8px" }}>
          {feed.blog.map((p) => (
            <article key={p.slug} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "22px", padding: "30px" }}>
              <div style={{ fontSize: "12px", color: "var(--muted-foreground)", marginBottom: "8px" }}>{p.date}</div>
              <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.02em", margin: "0 0 12px" }}>{p.title}</h3>
              {p.body.split("\n\n").map((para, i) => (
                <p key={i} style={{ fontSize: "16px", color: "var(--muted-foreground)", lineHeight: 1.65, margin: "0 0 14px" }}>{para}</p>
              ))}
            </article>
          ))}
          {feed.blog.length === 0 && <span style={{ color: "var(--muted-foreground)" }}>Loading…</span>}
        </div>
      </Section>

      {/* Disclaimer */}
      <Section>
        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "18px", padding: "24px 28px" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "10px" }}>A note on legality</div>
          <p style={{ fontSize: "14px", color: "var(--muted-foreground)", lineHeight: 1.6, margin: 0 }}>
            Everything Apple links only to official tools and open-source apps. We do not host or link to pirated, cracked, or tweaked copies of paid apps. Sideloading your own apps and open-source software is legitimate; redistributing or using cracked software is not. Some third-party stores (Scarlet, FlekStore) include tweaked apps in their own catalogs — use them responsibly and only with software you're licensed to run. Restoring or downgrading iOS is done at your own risk.
          </p>
        </div>
      </Section>

    </div>
  );
}

const btnPrimary: React.CSSProperties = {
  display: "inline-block", background: "var(--brand)", color: "#fff", borderRadius: "980px",
  padding: "11px 22px", fontSize: "15px", fontWeight: 500, textDecoration: "none", border: "none", cursor: "pointer",
};
const btnPrimarySm: React.CSSProperties = { ...btnPrimary, padding: "8px 16px", fontSize: "13px" };
const btnGhost: React.CSSProperties = {
  display: "inline-block", background: "transparent", color: "var(--foreground)", border: "1px solid var(--border)",
  borderRadius: "980px", padding: "11px 22px", fontSize: "15px", fontWeight: 500, textDecoration: "none", cursor: "pointer",
};
const btnGhostSm: React.CSSProperties = { ...btnGhost, padding: "8px 16px", fontSize: "13px" };
