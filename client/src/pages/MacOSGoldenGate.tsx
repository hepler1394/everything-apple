/* =============================================================
   macOS Golden Gate Page — Everything Apple
   Full coverage of macOS 16 Golden Gate from WWDC 2026.
   Apple.com design language. Zero emojis.
   Built by Cory Hepler
   ============================================================= */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { IMGS } from "../lib/imageManifest";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => el.classList.add("visible"), delay); obs.unobserve(el); } }, { threshold: 0.06 });
    obs.observe(el); return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="fade-in-up">{children}</div>;
}

const FEATURES = [
  { title: "Siri AI on Mac", desc: "Siri AI comes to the Mac with full on-screen awareness. Press the keyboard shortcut and Siri can see, understand, and act on anything visible on your screen — documents, images, web pages, code." },
  { title: "Liquid Glass Design", desc: "macOS Golden Gate brings the Liquid Glass visual language to every system app. The menu bar, Dock, Finder, and all built-in apps have been redesigned with translucent materials and depth." },
  { title: "Apple Intelligence Writing Tools", desc: "Every text field on macOS now has access to Apple Intelligence writing tools. Rewrite, proofread, summarize, and change tone — right-click any selected text in any app." },
  { title: "New Finder", desc: "Finder has been rebuilt with AI-powered search that understands natural language. Ask for 'photos from my trip to Japan last summer' and Finder finds them across your entire Mac." },
  { title: "Redesigned Menu Bar", desc: "The menu bar now features dynamic modules that expand to show live information — music controls, timers, Focus status, and third-party app integrations." },
  { title: "iPhone Mirroring 2.0", desc: "iPhone Mirroring gets a major upgrade. You can now use your iPhone apps in full-screen on your Mac, with drag-and-drop between iPhone and Mac for files, photos, and text." },
  { title: "Stage Manager Improvements", desc: "Stage Manager has been redesigned based on user feedback. Windows snap more intelligently, groups are easier to manage, and external display support is significantly improved." },
  { title: "Universal Control Enhancements", desc: "Universal Control now supports up to 5 devices simultaneously and includes improved cursor tracking, better keyboard shortcut sharing, and support for Apple Vision Pro." },
  { title: "5x Faster File Transfers", desc: "Finder file transfers to external drives are up to 5x faster in macOS Golden Gate, thanks to improved I/O scheduling and better use of Apple Silicon's memory bandwidth." },
];

const COMPATIBILITY = [
  { model: "MacBook Air (M1, 2020)", compatible: true },
  { model: "MacBook Air (M2, 2022)", compatible: true },
  { model: "MacBook Air (M3, 2024)", compatible: true },
  { model: "MacBook Pro (M1, 2020)", compatible: true },
  { model: "MacBook Pro (M1 Pro/Max, 2021)", compatible: true },
  { model: "MacBook Pro (M2 Pro/Max, 2023)", compatible: true },
  { model: "MacBook Pro (M3 Pro/Max, 2023)", compatible: true },
  { model: "MacBook Pro (M4 Pro/Max, 2024)", compatible: true },
  { model: "Mac mini (M1, 2020)", compatible: true },
  { model: "Mac mini (M2, 2023)", compatible: true },
  { model: "Mac mini (M4, 2024)", compatible: true },
  { model: "Mac Studio (M1 Ultra, 2022)", compatible: true },
  { model: "Mac Studio (M2 Ultra, 2023)", compatible: true },
  { model: "Mac Studio (M4 Ultra, 2025)", compatible: true },
  { model: "Mac Pro (M2 Ultra, 2023)", compatible: true },
  { model: "iMac (M1, 2021)", compatible: true },
  { model: "iMac (M3, 2023)", compatible: true },
  { model: "iMac (M4, 2024)", compatible: true },
  { model: "MacBook Pro (Intel, 2019)", compatible: true },
  { model: "MacBook Pro (Intel, 2018 or earlier)", compatible: false },
  { model: "iMac (Intel, 2019)", compatible: true },
  { model: "iMac (Intel, 2017 or earlier)", compatible: false },
];

export default function MacOSGoldenGate() {
  return (
    <div>

      {/* Hero */}
      <section style={{ position: "relative", minHeight: "80svh", overflow: "hidden", background: "#000", display: "flex", alignItems: "flex-end" }}>
        <img src={IMGS.macos.hero} alt="macOS Golden Gate" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", opacity: 1 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto", padding: "0 22px 100px", width: "100%" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "12px" }}>macOS Golden Gate</p>
            <h1 className="apple-headline-hero" style={{ color: "#fff", marginBottom: "20px" }}>The Mac.<br />Elevated by intelligence.</h1>
            <p style={{ fontSize: "clamp(17px, 2.2vw, 21px)", color: "rgba(255,255,255,0.75)", maxWidth: "600px", lineHeight: 1.55, marginBottom: "36px" }}>
              macOS Golden Gate brings the Liquid Glass design language, Siri AI, and Apple Intelligence to every Mac. Named after San Francisco's most iconic landmark, it represents a new era for the Mac.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="#features" style={{ display: "inline-block", background: "#0071e3", color: "#fff", padding: "13px 26px", borderRadius: "980px", fontSize: "16px", fontWeight: 500, textDecoration: "none" }}>Explore features</a>
              <a href="#compatibility" style={{ display: "inline-block", color: "rgba(255,255,255,0.85)", padding: "13px 0", fontSize: "16px", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)" }}>Check compatibility</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Golden Gate */}
      <section style={{ background: "#fff", padding: "100px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 22px", textAlign: "center" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "12px" }}>The Name</p>
            <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "24px" }}>Why Golden Gate?</h2>
            <p style={{ fontSize: "19px", color: "#6e6e73", lineHeight: 1.65, marginBottom: "20px" }}>
              Apple has named macOS releases after California landmarks since macOS Big Sur in 2020. Golden Gate continues that tradition, honoring the iconic bridge that has defined San Francisco's skyline for nearly a century.
            </p>
            <p style={{ fontSize: "17px", color: "#6e6e73", lineHeight: 1.65 }}>
              The name also carries symbolic weight: the Golden Gate Bridge was an engineering marvel of its time, connecting two worlds. macOS Golden Gate connects the Mac to the era of AI — bridging the past and the future of personal computing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Siri AI on Mac spotlight */}
      <section style={{ background: "#000", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="feature-grid-responsive">
            <FadeIn>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "12px" }}>Siri AI on Mac</p>
              <h2 className="apple-headline-section" style={{ color: "#f5f5f7", marginBottom: "24px" }}>See it. Ask it. Done.</h2>
              <p style={{ fontSize: "17px", color: "rgba(245,245,247,0.7)", lineHeight: 1.7, marginBottom: "20px" }}>
                Siri AI on Mac can see your entire screen. Press the keyboard shortcut and ask Siri about anything visible — a document, a photo, a web page, a spreadsheet. Siri understands context and can take action.
              </p>
              <p style={{ fontSize: "17px", color: "rgba(245,245,247,0.7)", lineHeight: 1.7, marginBottom: "20px" }}>
                "Summarize this document and email it to my team." "What is the total in this spreadsheet?" "Find all the photos from this location." Siri AI on Mac handles complex, multi-step requests that span multiple apps.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {["On-screen awareness via keyboard shortcut", "Multi-step task execution across apps", "Natural language file and photo search", "Dictation with real-time correction", "Context menus powered by Siri AI"].map(d => (
                  <li key={d} style={{ fontSize: "15px", color: "rgba(245,245,247,0.55)", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: "10px" }}>
                    <span style={{ color: "#0071e3", fontWeight: 700 }}>—</span>{d}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={100}>
              <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
                <img src={IMGS.macos.cnet} alt="Siri AI on macOS Golden Gate" style={{ width: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section id="features" style={{ background: "#f5f5f7", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "8px" }}>Features</p>
            <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "60px" }}>Everything new in macOS Golden Gate.</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 50}>
                <div style={{ background: "#fff", borderRadius: "18px", padding: "32px", height: "100%", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                  <h3 style={{ fontSize: "19px", fontWeight: 700, color: "#1d1d1f", marginBottom: "10px", letterSpacing: "-0.02em" }}>{f.title}</h3>
                  <p style={{ fontSize: "15px", color: "#6e6e73", lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section id="compatibility" style={{ background: "#fff", padding: "100px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "8px" }}>Compatibility</p>
            <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "16px" }}>Is your Mac compatible?</h2>
            <p style={{ fontSize: "17px", color: "#6e6e73", marginBottom: "40px" }}>macOS Golden Gate supports all Apple Silicon Macs and Intel Macs from 2019 onward.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <div style={{ border: "1px solid #d2d2d7", borderRadius: "16px", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 100px", background: "#f5f5f7", padding: "12px 20px", borderBottom: "1px solid #d2d2d7" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#6e6e73", textTransform: "uppercase", letterSpacing: "0.06em" }}>Model</span>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#6e6e73", textTransform: "uppercase", letterSpacing: "0.06em" }}>macOS 16</span>
              </div>
              {COMPATIBILITY.map((row, i) => (
                <div key={row.model} style={{ display: "grid", gridTemplateColumns: "1fr 100px", padding: "13px 20px", borderBottom: i < COMPATIBILITY.length - 1 ? "1px solid #f0f0f0" : "none", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <span style={{ fontSize: "15px", color: "#1d1d1f", fontWeight: 500 }}>{row.model}</span>
                  <span style={{ fontSize: "14px", color: row.compatible ? "#34c759" : "#ff3b30", fontWeight: 600 }}>{row.compatible ? "Yes" : "No"}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related */}
      <section style={{ background: "#f5f5f7", padding: "80px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#1d1d1f", marginBottom: "32px" }}>Also from WWDC 2026</h2>
          </FadeIn>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {[{ label: "Siri AI", href: "/siri-ai" }, { label: "iOS 27", href: "/ios-27" }, { label: "Parental Controls", href: "/parental-controls" }, { label: "Apple Intelligence", href: "/apple-intelligence" }, { label: "Full WWDC 2026 Coverage", href: "/wwdc-2026" }].map(link => (
              <Link key={link.href} href={link.href}>
                <span style={{ display: "inline-block", background: "#fff", color: "#1d1d1f", padding: "12px 20px", borderRadius: "980px", fontSize: "15px", fontWeight: 500, cursor: "pointer", border: "1px solid #d2d2d7", transition: "all 0.2s ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0071e3"; (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "#0071e3"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.color = "#1d1d1f"; (e.currentTarget as HTMLElement).style.borderColor = "#d2d2d7"; }}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
