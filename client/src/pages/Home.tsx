/* =============================================================
   Home Page — Everything Apple
   Apple.com design language: cinematic hero, real WWDC 2026 photos,
   massive content grid, zero emojis, SF Pro system font.
   Built by Cory Hepler
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IMGS } from "../lib/imageManifest";

// ── Intersection-observer fade-in ──────────────────────────────
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => el.classList.add("visible"), delay); obs.unobserve(el); } }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className={`fade-in-up ${className}`}>{children}</div>;
}

// ── Breaking news ticker ───────────────────────────────────────
const TICKER_ITEMS = [
  "WWDC 2026 — Siri AI announced with dedicated app and conversational intelligence",
  "WWDC 2026 — iOS 27 introduces Liquid Glass design language across all platforms",
  "WWDC 2026 — macOS Golden Gate revealed with new Siri integration",
  "WWDC 2026 — Parental Controls overhaul gives parents full control",
  "WWDC 2026 — Apple Intelligence expands to 50+ countries",
  "WWDC 2026 — Tim Cook delivers final WWDC keynote as CEO",
  "WWDC 2026 — watchOS 12 brings Apple Watch for Kids mode",
  "WWDC 2026 — visionOS 3 adds spatial computing for education",
  "iOS 27 — Liquid Glass UI redesign is the biggest visual change since iOS 7",
  "Siri AI — Now understands context, memory, and multi-step tasks",
  "iPhone 17 — Available now starting at $799",
  "iPhone Air — The thinnest iPhone ever at 5.5mm",
];

function BreakingTicker() {
  const [offset, setOffset] = useState(0);
  const tickerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame: number;
    let pos = 0;
    const speed = 0.5;
    const animate = () => {
      pos -= speed;
      const el = tickerRef.current;
      if (el) {
        const halfWidth = el.scrollWidth / 2;
        if (Math.abs(pos) >= halfWidth) pos = 0;
        el.style.transform = `translateX(${pos}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{ background: "#000", overflow: "hidden", height: "36px", display: "flex", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div ref={tickerRef} style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap", willChange: "transform" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", fontSize: "12px", color: "rgba(255,255,255,0.75)", letterSpacing: "0.01em", paddingRight: "60px" }}>
            <span style={{ color: "#0071e3", fontWeight: 600, marginRight: "10px", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>WWDC 2026</span>
            {item.replace(/^WWDC 2026 — /, "").replace(/^iOS 27 — /, "").replace(/^Siri AI — /, "").replace(/^iPhone [0-9A-Za-z ]+ — /, "")}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Hero section ───────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ position: "relative", height: "100svh", minHeight: "600px", maxHeight: "1000px", overflow: "hidden", background: "#000" }}>
      {/* Real WWDC 2026 Apple Park outdoor stage photo */}
      <img
        src={IMGS.wwdc.timCookCnet}
        alt="Tim Cook at WWDC 2026 keynote"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", opacity: 0.55 }}
        onError={(e) => { (e.target as HTMLImageElement).src = IMGS.wwdc.stageInterior; }}
      />
      {/* Gradient overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.85) 100%)" }} />
      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "80px", paddingLeft: "max(22px, env(safe-area-inset-left))", paddingRight: "max(22px, env(safe-area-inset-right))", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ maxWidth: "700px" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "16px" }}>June 9, 2026</p>
          <h1 className="apple-headline-hero" style={{ color: "#fff", marginBottom: "20px" }}>
            WWDC 2026.<br />Everything,<br />announced.
          </h1>
          <p style={{ fontSize: "clamp(17px, 2.5vw, 21px)", color: "rgba(255,255,255,0.8)", lineHeight: 1.5, marginBottom: "36px", maxWidth: "560px" }}>
            Siri AI. Parental Controls. iOS 27. macOS Golden Gate. The biggest Apple event of the year, covered in full.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/wwdc-2026">
              <span style={{ display: "inline-block", background: "#0071e3", color: "#fff", padding: "14px 28px", borderRadius: "980px", fontSize: "17px", fontWeight: 500, letterSpacing: "-0.01em", cursor: "pointer", transition: "background 0.2s ease" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#0077ed")}
                onMouseLeave={e => (e.currentTarget.style.background = "#0071e3")}>
                See all announcements
              </span>
            </Link>
            <Link href="/siri-ai">
              <span style={{ display: "inline-block", color: "#fff", padding: "14px 0", fontSize: "17px", fontWeight: 400, letterSpacing: "-0.01em", cursor: "pointer", borderBottom: "1px solid rgba(255,255,255,0.4)" }}>
                Siri AI deep dive
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section label ──────────────────────────────────────────────
function SectionLabel({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: light ? "#0071e3" : "#0071e3", marginBottom: "8px" }}>{text}</p>
  );
}

// ── Featured stories grid ──────────────────────────────────────
const FEATURED = [
  {
    label: "Siri AI",
    title: "The new Siri is here. And it actually understands you.",
    sub: "Conversational intelligence, memory, and a dedicated app — this is the Siri Apple promised years ago.",
    img: IMGS.siri.screen1,
    href: "/siri-ai",
    dark: true,
  },
  {
    label: "Parental Controls",
    title: "Parents, you're finally in control.",
    sub: "iOS 27 gives parents unprecedented tools to manage screen time, content, and communication.",
    img: IMGS.parental.screenTime,
    href: "/parental-controls",
    dark: false,
  },
  {
    label: "iOS 27",
    title: "Liquid Glass. The biggest redesign since iOS 7.",
    sub: "Every surface, every animation, every interaction — rebuilt from scratch.",
    img: IMGS.ios27.homeScreen5,
    href: "/ios-27",
    dark: true,
  },
  {
    label: "macOS Golden Gate",
    title: "The Mac gets Siri AI and a stunning new look.",
    sub: "Golden Gate brings the Liquid Glass design language and Apple Intelligence to every Mac.",
    img: IMGS.macos.hero,
    href: "/macos-golden-gate",
    dark: false,
  },
];

function FeaturedGrid() {
  return (
    <section style={{ background: "#f5f5f7", padding: "80px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
        <FadeIn>
          <SectionLabel text="Top Stories" />
          <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "48px" }}>Everything from WWDC 2026.</h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {FEATURED.map((story, i) => (
            <FadeIn key={story.href} delay={i * 80}>
              <Link href={story.href}>
                <div style={{ borderRadius: "18px", overflow: "hidden", background: story.dark ? "#1d1d1f" : "#fff", cursor: "pointer", transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s ease", boxShadow: "0 2px 20px rgba(0,0,0,0.08)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(0,0,0,0.15)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 20px rgba(0,0,0,0.08)"; }}>
                  <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                    <img src={story.img} alt={story.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
                  </div>
                  <div style={{ padding: "24px" }}>
                    <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0071e3", marginBottom: "8px" }}>{story.label}</p>
                    <h3 style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", color: story.dark ? "#f5f5f7" : "#1d1d1f", marginBottom: "10px" }}>{story.title}</h3>
                    <p style={{ fontSize: "15px", color: story.dark ? "rgba(245,245,247,0.6)" : "#6e6e73", lineHeight: 1.5 }}>{story.sub}</p>
                    <p style={{ marginTop: "16px", fontSize: "15px", color: "#0071e3", fontWeight: 500 }}>Read more</p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Siri AI spotlight ──────────────────────────────────────────
function SiriSpotlight() {
  return (
    <section style={{ background: "#000", padding: "120px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <FadeIn>
            <SectionLabel text="Siri AI" />
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", marginBottom: "24px" }}>
              The most capable Siri ever built.
            </h2>
            <p style={{ fontSize: "19px", color: "rgba(245,245,247,0.7)", lineHeight: 1.6, marginBottom: "20px" }}>
              Siri AI is not an update. It is a complete reimagining. Built on Apple's own large language models, the new Siri understands context across your entire device, remembers what you told it last week, and can take real actions inside any app.
            </p>
            <p style={{ fontSize: "17px", color: "rgba(245,245,247,0.55)", lineHeight: 1.6, marginBottom: "36px" }}>
              For the first time, Siri has its own dedicated app. You can type to it, speak to it, or show it your screen. It works across iPhone, iPad, Mac, Apple Watch, Apple TV, and HomePod.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/siri-ai">
                <span style={{ display: "inline-block", background: "#0071e3", color: "#fff", padding: "14px 28px", borderRadius: "980px", fontSize: "17px", fontWeight: 500, cursor: "pointer" }}>
                  Full Siri AI breakdown
                </span>
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[IMGS.siri.screen1, IMGS.siri.screen2, IMGS.siri.screen3, IMGS.siri.screen4].map((src, i) => (
                <div key={i} style={{ borderRadius: "14px", overflow: "hidden", aspectRatio: "9/16" }}>
                  <img src={src} alt={`Siri AI screenshot ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
      <style>{`@media(max-width:768px){.siri-grid{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
    </section>
  );
}

// ── Parental Controls spotlight ────────────────────────────────
function ParentalSpotlight() {
  const features = [
    { title: "Communication Limits", desc: "Control exactly who your child can call, text, and FaceTime." },
    { title: "Screen Distance", desc: "iPhone detects when your child holds the device too close and alerts them." },
    { title: "Downtime Scheduling", desc: "Set daily schedules for when apps are available — automatically." },
    { title: "Content & Privacy", desc: "Block adult content, restrict purchases, and manage privacy settings." },
    { title: "Family Checklist", desc: "A new guided setup walks parents through every safety setting." },
    { title: "Location Sharing", desc: "Always know where your child is with improved Find My integration." },
  ];
  return (
    <section style={{ background: "#fff", padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
        <FadeIn>
          <SectionLabel text="Parental Controls" />
          <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "16px" }}>
            Built for families. Designed for peace of mind.
          </h2>
          <p style={{ fontSize: "19px", color: "#6e6e73", lineHeight: 1.6, marginBottom: "60px", maxWidth: "640px" }}>
            iOS 27 delivers the most comprehensive set of parental tools Apple has ever shipped. Every feature Cory Hepler highlighted from WWDC — and more.
          </p>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "60px" }}>
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 60}>
              <div style={{ background: "#f5f5f7", borderRadius: "18px", padding: "32px", height: "100%" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1d1d1f", marginBottom: "10px", letterSpacing: "-0.02em" }}>{f.title}</h3>
                <p style={{ fontSize: "15px", color: "#6e6e73", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={200}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
            {[IMGS.parental.screen1, IMGS.parental.screenTime, IMGS.parental.childSafety, IMGS.parental.techcrunch].map((src, i) => (
              <div key={i} style={{ borderRadius: "14px", overflow: "hidden", aspectRatio: "4/3" }}>
                <img src={src} alt={`Parental controls screenshot ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={280}>
          <div style={{ marginTop: "48px", textAlign: "center" }}>
            <Link href="/parental-controls">
              <span style={{ display: "inline-block", background: "#1d1d1f", color: "#f5f5f7", padding: "14px 32px", borderRadius: "980px", fontSize: "17px", fontWeight: 500, cursor: "pointer" }}>
                Complete Parental Controls guide
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ── iPhone lineup strip ────────────────────────────────────────
function IPhoneStrip() {
  const models = [
    { name: "iPhone 17 Pro Max", year: "2025", img: IMGS.iphone17.pro1, href: "/iphones" },
    { name: "iPhone 17 Pro", year: "2025", img: IMGS.iphone17.pro2, href: "/iphones" },
    { name: "iPhone 17", year: "2025", img: IMGS.iphone17.standard, href: "/iphones" },
    { name: "iPhone Air", year: "2025", img: IMGS.iphone17.airNew, href: "/iphones" },
    { name: "iPhone 16 Pro Max", year: "2024", img: IMGS.iphone16.proMax1, href: "/iphones" },
    { name: "iPhone 16 Pro", year: "2024", img: IMGS.iphone16.pro1, href: "/iphones" },
    { name: "iPhone 15 Pro Max", year: "2023", img: IMGS.iphone15.proMax1, href: "/iphones" },
    { name: "iPhone 14 Pro Max", year: "2022", img: IMGS.iphone14.proMax1, href: "/iphones" },
  ];
  return (
    <section style={{ background: "#000", padding: "100px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
        <FadeIn>
          <SectionLabel text="iPhone Encyclopedia" />
          <h2 className="apple-headline-section" style={{ color: "#f5f5f7", marginBottom: "16px" }}>
            Every iPhone. Every detail.
          </h2>
          <p style={{ fontSize: "19px", color: "rgba(245,245,247,0.6)", marginBottom: "48px" }}>
            From iPhone 11 to iPhone 17 — full specs, real photos, pricing, and iOS compatibility for every model.
          </p>
        </FadeIn>
        <div style={{ display: "flex", gap: "16px", overflowX: "auto", paddingBottom: "16px", scrollSnapType: "x mandatory" }}>
          {models.map((m, i) => (
            <FadeIn key={m.name} delay={i * 50}>
              <Link href={m.href}>
                <div style={{ minWidth: "200px", scrollSnapAlign: "start", cursor: "pointer" }}>
                  <div style={{ borderRadius: "14px", overflow: "hidden", background: "#1d1d1f", aspectRatio: "3/4", marginBottom: "12px" }}>
                    <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
                  </div>
                  <p style={{ fontSize: "15px", fontWeight: 600, color: "#f5f5f7", marginBottom: "4px" }}>{m.name}</p>
                  <p style={{ fontSize: "13px", color: "rgba(245,245,247,0.5)" }}>{m.year}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={300}>
          <div style={{ marginTop: "48px" }}>
            <Link href="/iphones">
              <span style={{ display: "inline-block", color: "#0071e3", fontSize: "17px", fontWeight: 500, cursor: "pointer" }}>
                See all iPhones — iPhone 11 through 17
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ── Apple Intelligence section ─────────────────────────────────
function AppleIntelligenceSection() {
  return (
    <section style={{ background: "#f5f5f7", padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <FadeIn delay={80}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {[IMGS.intelligence.writing1, IMGS.intelligence.writing2, IMGS.intelligence.features1, IMGS.intelligence.features2].map((src, i) => (
                <div key={i} style={{ borderRadius: "12px", overflow: "hidden", aspectRatio: "4/3" }}>
                  <img src={src} alt={`Apple Intelligence ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn>
            <SectionLabel text="Apple Intelligence" />
            <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "24px" }}>
              AI that is built for you. Private by design.
            </h2>
            <p style={{ fontSize: "17px", color: "#6e6e73", lineHeight: 1.7, marginBottom: "20px" }}>
              Apple Intelligence is the personal intelligence system that understands you. It uses on-device processing to keep your data private — and when it needs more power, Private Cloud Compute sends requests to Apple servers without Apple ever seeing your data.
            </p>
            <p style={{ fontSize: "17px", color: "#6e6e73", lineHeight: 1.7, marginBottom: "36px" }}>
              Writing tools, image generation, priority notifications, smart replies, and Siri AI — all powered by Apple Intelligence, all private.
            </p>
            <Link href="/apple-intelligence">
              <span style={{ display: "inline-block", color: "#0071e3", fontSize: "17px", fontWeight: 500, cursor: "pointer" }}>
                Explore Apple Intelligence
              </span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ── WWDC real photos gallery ───────────────────────────────────
function WWDCGallery() {
  const photos = [
    { src: IMGS.wwdc.appleParkStage, caption: "Apple Park outdoor stage — WWDC 2026" },
    { src: IMGS.wwdc.appleParkoOutdoor, caption: "Developers gather at Apple Park" },
    { src: IMGS.wwdc.timCookCnet, caption: "Tim Cook delivers his final WWDC keynote" },
    { src: IMGS.wwdc.timCookInc, caption: "Tim Cook at WWDC 2026 — Inc. Magazine" },
    { src: IMGS.wwdc.stageInterior, caption: "The Steve Jobs Theater interior" },
  ];
  return (
    <section style={{ background: "#000", padding: "100px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
        <FadeIn>
          <SectionLabel text="WWDC 2026 Gallery" />
          <h2 className="apple-headline-section" style={{ color: "#f5f5f7", marginBottom: "48px" }}>
            Real photos from Apple Park.
          </h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "auto auto", gap: "12px" }}>
          {photos.map((p, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div style={{ borderRadius: "14px", overflow: "hidden", gridColumn: i === 0 ? "1" : "auto", gridRow: i === 0 ? "1 / 3" : "auto", position: "relative" }}>
                <img src={p.src} alt={p.caption} style={{ width: "100%", height: i === 0 ? "100%" : "200px", objectFit: "cover", display: "block", minHeight: "200px" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", padding: "20px 16px 14px" }}>
                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)" }}>{p.caption}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={300}>
          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <Link href="/wwdc-2026">
              <span style={{ display: "inline-block", color: "#0071e3", fontSize: "17px", fontWeight: 500, cursor: "pointer" }}>
                Full WWDC 2026 coverage
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ── Quick links bar ────────────────────────────────────────────
const QUICK_LINKS = [
  { label: "Jailbreak Checker", sub: "Is your iPhone jailbreakable?", href: "/jailbreak", img: IMGS.jailbreak.dopamine1 },
  { label: "Sideload Tools", sub: "AltStore, TrollStore, Sideloadly", href: "/jailbreak", img: IMGS.sideload.altstore2 },
  { label: "Reddit Community", sub: "r/apple, r/jailbreak & more", href: "/community", img: IMGS.places.applePark1 },
  { label: "Apple Silicon", sub: "M4, M4 Pro, M4 Max chips", href: "/apple-silicon", img: IMGS.silicon.m4chip2 },
];

function QuickLinks() {
  return (
    <section style={{ background: "#fff", padding: "80px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
        <FadeIn>
          <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "48px" }}>
            More from Everything Apple.
          </h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {QUICK_LINKS.map((link, i) => (
            <FadeIn key={link.href + link.label} delay={i * 70}>
              <Link href={link.href}>
                <div style={{ borderRadius: "18px", overflow: "hidden", background: "#f5f5f7", cursor: "pointer", transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}>
                  <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                    <img src={link.img} alt={link.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "20px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1d1d1f", marginBottom: "6px" }}>{link.label}</h3>
                    <p style={{ fontSize: "14px", color: "#6e6e73" }}>{link.sub}</p>
                    <p style={{ marginTop: "12px", fontSize: "15px", color: "#0071e3", fontWeight: 500 }}>Explore</p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Apple Park feature ─────────────────────────────────────────
function AppleParkFeature() {
  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: "500px" }}>
      <img src={IMGS.places.applePark1} alt="Apple Park aerial view" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 100%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto", padding: "100px 22px" }}>
        <FadeIn>
          <SectionLabel text="About" />
          <h2 className="apple-headline-section" style={{ color: "#f5f5f7", marginBottom: "20px", maxWidth: "500px" }}>
            Built by Cory Hepler.
          </h2>
          <p style={{ fontSize: "19px", color: "rgba(245,245,247,0.75)", lineHeight: 1.6, maxWidth: "480px", marginBottom: "32px" }}>
            Everything Apple is the most comprehensive independent Apple resource on the web. Real news, real photos, real specs — no paywalls, no ads, no fluff.
          </p>
          <p style={{ fontSize: "15px", color: "rgba(245,245,247,0.5)" }}>
            Covering WWDC 2026, iOS 27, Siri AI, every iPhone, jailbreak tools, and everything in between.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

// ── Main export ────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ background: "#fff" }}>
      <Navbar />
      <BreakingTicker />
      <Hero />
      <FeaturedGrid />
      <SiriSpotlight />
      <ParentalSpotlight />
      <IPhoneStrip />
      <AppleIntelligenceSection />
      <WWDCGallery />
      <QuickLinks />
      <AppleParkFeature />
      <Footer />
    </div>
  );
}
