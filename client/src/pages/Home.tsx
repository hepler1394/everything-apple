/*
 * Home — Everything Apple (nostalgia rebuild, 2026)
 * A love letter to Apple: the Apple-1 hero, the device archive, the Graveyard,
 * and the fastest way into sideloading & jailbreak. No selling, no spec sheets —
 * just the history and the hacks the Apple faithful actually come for.
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { iphoneImage, ipodImage, watchImage } from "@/lib/deviceImages";
import { useTheme } from "@/contexts/ThemeContext";
import AppleTimeMachine from "@/components/AppleTimeMachine";

// The uploaded Apple-1 photograph, background removed, shown as a crisp centered
// museum piece floating on the stage (source is low-res, so it's contained).
const HERO_IMG = "/hero-apple1.png";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const { theme } = useTheme();
  const classic = theme === "classic";
  const [imgOk, setImgOk] = useState(true);

  // Classic = authentic light early-2000s Apple.com stage; other themes = dark museum.
  const heroBg = classic
    ? "linear-gradient(180deg, #fbfbf9 0%, #eceef1 100%)"
    : "radial-gradient(130% 100% at 50% 18%, #4a2f1c 0%, #2b1a10 48%, #140c07 100%)";
  const eyebrowColor = classic ? "#8a7a5c" : "rgba(255,220,180,0.75)";
  const headColor = classic ? "#1d1d1f" : "#fff";
  const subColor = classic ? "#5b5b62" : "rgba(255,255,255,0.85)";
  const imgShadow = classic
    ? "drop-shadow(0 16px 32px rgba(30,30,45,0.22))"
    : "drop-shadow(0 24px 48px rgba(0,0,0,0.6))";

  return (
    <section
      style={{
        position: "relative",
        minHeight: "min(90vh, 820px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
        padding: "56px 22px 64px",
        background: heroBg,
      }}
    >
      {/* Classic: fine pinstripe like the old apple.com. Dark themes: warm vignette. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: classic
            ? "repeating-linear-gradient(180deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, rgba(0,0,0,0.02) 1px, rgba(0,0,0,0.02) 3px)"
            : "radial-gradient(80% 55% at 50% 42%, rgba(255,214,150,0.10) 0%, rgba(0,0,0,0) 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "900px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: eyebrowColor, marginBottom: "14px" }}>
          Est. 1976 · The Apple Museum
        </p>
        <h1
          style={{
            fontFamily: "var(--font-classic-serif, Georgia, serif)",
            fontSize: "clamp(46px, 8vw, 96px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 0.98,
            color: headColor,
            margin: "0 0 28px",
            textShadow: classic ? "none" : "0 2px 30px rgba(0,0,0,0.5)",
          }}
        >
          <span className="rainbow-word">Everything</span> <span className="apple-word">Apple</span><span className="blink-dot" aria-hidden>.</span>
        </h1>

        {/* The artifact — contained so it stays crisp, on a soft pedestal glow */}
        {imgOk && (
          <div style={{ position: "relative", margin: "0 auto 30px", width: "fit-content" }}>
            <img
              src={HERO_IMG}
              alt="The Apple-1, hand-built in 1976 — where Everything Apple begins"
              onError={() => setImgOk(false)}
              style={{
                display: "block",
                width: "min(440px, 82vw)",
                height: "auto",
                borderRadius: "8px",
                filter: imgShadow,
                imageRendering: "auto",
              }}
            />
            {/* Reflection / pedestal */}
            <div style={{ position: "absolute", left: "10%", right: "10%", bottom: "-26px", height: "40px", background: `radial-gradient(60% 100% at 50% 0%, rgba(0,0,0,${classic ? 0.22 : 0.55}) 0%, rgba(0,0,0,0) 70%)`, filter: "blur(4px)" }} />
          </div>
        )}

        <p style={{ fontSize: "clamp(16px, 2vw, 21px)", fontWeight: 400, lineHeight: 1.45, color: subColor, maxWidth: "600px", margin: "0 auto 30px" }}>
          A love letter to the company that started in a garage. Every device ever made, the ones they
          buried, and the tools to make iOS truly yours — sideloading and jailbreak.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          <Link href="/devices">
            <span className="btn-primary" style={{ fontSize: "16px", padding: "12px 24px" }}>Explore the archive</span>
          </Link>
          <Link href="/blog">
            <span className="btn-primary" style={{ fontSize: "16px", padding: "12px 24px" }}>Latest Apple news</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Sideload + Jailbreak quick access ────────────────────────────────────────
function BeyondTheAppStore() {
  const cards = [
    {
      href: "/sideloading",
      kicker: "Sideloading",
      title: "Install any app, no App Store",
      body: "AltStore, SideStore, TrollStore and LiveContainer — step-by-step guides plus live Apple signing status.",
      dark: false,
    },
    {
      href: "/jailbreak",
      kicker: "Jailbreak",
      title: "Break free of iOS",
      body: "palera1n, Dopamine and every tool that still works in 2026 — with the current status for your iOS version.",
      dark: true,
    },
  ];
  return (
    <section className="section-snow section-pad">
      <div className="page-container">
        <h2 style={{ fontFamily: "var(--font-sf-pro-display, system-ui)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--foreground, #1d1d1f)", margin: "0 0 8px" }}>
          Beyond the App Store.
        </h2>
        <p style={{ fontSize: "17px", color: "var(--muted-foreground, #707070)", margin: "0 0 32px", maxWidth: "560px" }}>
          The whole reason you bookmark a site like this. The fastest way in:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
          {cards.map((c) => (
            <Link key={c.href} href={c.href}>
              <div
                style={{
                  padding: "36px 32px",
                  borderRadius: "16px",
                  cursor: "pointer",
                  height: "100%",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  border: c.dark ? "1px solid #2a2a2e" : "1px solid var(--border, #d5d6dd)",
                  background: c.dark ? "linear-gradient(160deg, #1b1f24 0%, #0d0f12 100%)" : "var(--card, #fff)",
                  color: c.dark ? "#fff" : "var(--foreground, #1d1d1f)",
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 14px 40px rgba(20,30,60,0.16)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
              >
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: c.dark ? "#5aa9ff" : "var(--brand)", margin: "0 0 14px" }}>{c.kicker}</p>
                <h3 style={{ fontFamily: "var(--font-sf-pro-display, system-ui)", fontSize: "26px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 12px" }}>{c.title}</h3>
                <p style={{ fontSize: "15px", lineHeight: 1.5, color: c.dark ? "rgba(255,255,255,0.65)" : "var(--muted-foreground, #707070)", margin: "0 0 20px" }}>{c.body}</p>
                <span style={{ fontSize: "15px", fontWeight: 600, color: c.dark ? "#5aa9ff" : "var(--brand-link, var(--brand))" }}>Open the hub ›</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Latest news teaser (reads the daily JSON) ────────────────────────────────
interface MiniItem { id: string; title: string; link: string; source: string; date: string; }
function LatestNewsTeaser() {
  const [items, setItems] = useState<MiniItem[] | null>(null);
  useEffect(() => {
    let cancelled = false;
    fetch("/data/news.json", { cache: "no-cache" })
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((j) => { if (!cancelled) setItems((j.items || []).slice(0, 5)); })
      .catch(() => { if (!cancelled) setItems([]); });
    return () => { cancelled = true; };
  }, []);
  if (items && items.length === 0) return null;
  return (
    <section className="section-fog section-pad">
      <div className="page-container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", marginBottom: "24px" }}>
          <div>
            <p className="t-eyebrow" style={{ marginBottom: "8px" }}>Live Feed</p>
            <h2 style={{ fontFamily: "var(--font-sf-pro-display, system-ui)", fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--foreground, #1d1d1f)", margin: 0 }}>
              Latest Apple news
            </h2>
          </div>
          <Link href="/blog">
            <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--brand-link, var(--brand))", textDecoration: "none" }}>All news &amp; the desk ›</span>
          </Link>
        </div>
        <div style={{ display: "grid", gap: "2px", borderRadius: "14px", overflow: "hidden", border: "1px solid var(--border, #d5d6dd)" }}>
          {(items ?? Array.from({ length: 5 }).map((_, i) => ({ id: `s${i}`, title: "", link: "#", source: "", date: "" } as MiniItem))).map((it) => (
            <a
              key={it.id}
              href={it.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "16px 20px", background: "var(--card, #fff)", textDecoration: "none", minHeight: "56px" }}
            >
              <span style={{ fontSize: "15px", fontWeight: 500, color: "var(--foreground, #1d1d1f)", lineHeight: 1.35 }}>
                {it.title || <span style={{ display: "inline-block", width: "60%", height: "12px", background: "var(--secondary, #ececf0)", borderRadius: "6px" }} />}
              </span>
              {it.source && <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--muted-foreground, #8a8a8f)", whiteSpace: "nowrap" }}>{it.source}</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Device archive teaser ────────────────────────────────────────────────────
function ArchiveTeaser() {
  const icons = [
    { img: iphoneImage("iphone-2g"), label: "iPhone", year: "2007" },
    { img: ipodImage("ipod-classic-1"), label: "iPod", year: "2001" },
    { img: watchImage("watch-series-0"), label: "Apple Watch", year: "2015" },
  ];
  return (
    <section className="section-snow section-pad">
      <div className="page-container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "36px" }}>
          <div style={{ maxWidth: "620px" }}>
            <p className="t-eyebrow" style={{ marginBottom: "10px" }}>The Device Archive</p>
            <h2 style={{ fontFamily: "var(--font-sf-pro-display, system-ui)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--foreground, #1d1d1f)", margin: "0 0 14px" }}>
              Every model, oldest to newest.
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.5, color: "var(--muted-foreground, #707070)", margin: "0 0 22px" }}>
              Scroll the full run of every iPhone, iPad, Mac, Apple Watch and iPod — the story of each generation.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/devices"><span className="btn-primary" style={{ padding: "11px 22px" }}>Browse the archive</span></Link>
              <Link href="/iphone-timeline"><span style={{ fontSize: "15px", fontWeight: 600, color: "var(--brand-link, var(--brand))", padding: "11px 4px", display: "inline-block" }}>iPhone history ›</span></Link>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
            {icons.map((ic) => (
              <div key={ic.label} className="card-fog" style={{ padding: "20px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <div style={{ height: "160px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {ic.img && <img src={ic.img} alt={ic.label} loading="lazy" style={{ maxHeight: "160px", maxWidth: "100%", objectFit: "contain" }} />}
                </div>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--foreground, #1d1d1f)" }}>{ic.label}</div>
                  <div style={{ fontSize: "12px", color: "var(--muted-foreground, #8a8a8f)" }}>Since {ic.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Graveyard teaser ─────────────────────────────────────────────────────────
function GraveyardTeaser() {
  return (
    <section style={{ background: "linear-gradient(180deg, #16181c 0%, #0c0d0f 100%)", padding: "96px 0" }}>
      <div className="page-container" style={{ textAlign: "center" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", margin: "0 0 16px" }}>
          Rest in peace
        </p>
        <h2 style={{ fontFamily: "var(--font-classic-serif, Georgia, serif)", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, letterSpacing: "-0.01em", color: "#fff", margin: "0 0 16px" }}>
          The <span className="apple-word">Apple</span> Graveyard
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.5, color: "rgba(255,255,255,0.65)", maxWidth: "560px", margin: "0 auto 28px" }}>
          The Newton. The Cube. 3D Touch. The headphone jack. Every product and feature Cupertino quietly put in the ground.
        </p>
        <Link href="/apple-graveyard">
          <span className="btn-primary" style={{ fontSize: "16px", padding: "12px 26px" }}>Pay your respects</span>
        </Link>
      </div>
    </section>
  );
}

// ─── History note ─────────────────────────────────────────────────────────────
function HistoryNote() {
  return (
    <section className="section-fog section-pad-sm">
      <div className="page-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-sf-pro-display, system-ui)", fontSize: "24px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--foreground, #1d1d1f)", margin: "0 0 6px" }}>
            From a garage in Los Altos to your pocket.
          </h2>
          <p style={{ fontSize: "16px", color: "var(--muted-foreground, #707070)", margin: 0 }}>The full Apple story — 1976 to today.</p>
        </div>
        <Link href="/apple-history"><span className="btn-primary" style={{ padding: "11px 22px" }}>Read the history</span></Link>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <AppleTimeMachine />
      <BeyondTheAppStore />
      <LatestNewsTeaser />
      <ArchiveTeaser />
      <GraveyardTeaser />
      <HistoryNote />
    </>
  );
}
