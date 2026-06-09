/* =============================================================
   iOS 27 Page — Everything Apple
   Liquid Glass design language, full feature coverage.
   Apple.com design language. Zero emojis.
   Built by Cory Hepler
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { IMGS } from "../lib/imageManifest";
import IOS27FeaturePills from "../components/IOS27FeaturePills";

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
  { title: "Liquid Glass Design", desc: "A translucent, dynamic visual system that responds to your wallpaper, ambient light, and content. Every surface refracts light like real glass. Every element has depth and dimension.", img: IMGS.ios27.homeScreen1 },
  { title: "Dynamic Island 2.0", desc: "The Dynamic Island has been completely redesigned. It now expands contextually to show live activities, sports scores, navigation, and music — all without opening an app.", img: IMGS.ios27.homeScreen2 },
  { title: "New Widget System", desc: "Widgets now support live data, interactive controls, and real-time updates. You can resize them freely on the home screen and stack them in new ways.", img: IMGS.ios27.homeScreen3 },
  { title: "Redesigned Control Center", desc: "Control Center has been rebuilt from scratch. Modules are fully customizable, can be resized, and now support third-party app controls for the first time.", img: IMGS.ios27.homeScreen4 },
  { title: "AI Camera App", desc: "The Camera app uses Apple Intelligence to identify scenes, suggest settings, and automatically frame your shot. It also detects text in photos for instant copy and search.", img: IMGS.ios27.homeScreen5 },
  { title: "Smart Replies in Messages", desc: "Messages now suggests contextually aware replies based on the conversation. It can draft full responses, schedule messages, and remind you to follow up.", img: IMGS.ios27.features },
];

const COMPATIBILITY = [
  { model: "iPhone 11", chip: "A13 Bionic", compatible: true },
  { model: "iPhone 11 Pro", chip: "A13 Bionic", compatible: true },
  { model: "iPhone 11 Pro Max", chip: "A13 Bionic", compatible: true },
  { model: "iPhone SE (2nd gen)", chip: "A13 Bionic", compatible: true },
  { model: "iPhone 12", chip: "A14 Bionic", compatible: true },
  { model: "iPhone 12 Mini", chip: "A14 Bionic", compatible: true },
  { model: "iPhone 12 Pro", chip: "A14 Bionic", compatible: true },
  { model: "iPhone 12 Pro Max", chip: "A14 Bionic", compatible: true },
  { model: "iPhone 13", chip: "A15 Bionic", compatible: true },
  { model: "iPhone 13 Mini", chip: "A15 Bionic", compatible: true },
  { model: "iPhone 13 Pro", chip: "A15 Bionic", compatible: true },
  { model: "iPhone 13 Pro Max", chip: "A15 Bionic", compatible: true },
  { model: "iPhone SE (3rd gen)", chip: "A15 Bionic", compatible: true },
  { model: "iPhone 14", chip: "A15 Bionic", compatible: true },
  { model: "iPhone 14 Plus", chip: "A15 Bionic", compatible: true },
  { model: "iPhone 14 Pro", chip: "A16 Bionic", compatible: true },
  { model: "iPhone 14 Pro Max", chip: "A16 Bionic", compatible: true },
  { model: "iPhone 15", chip: "A16 Bionic", compatible: true },
  { model: "iPhone 15 Plus", chip: "A16 Bionic", compatible: true },
  { model: "iPhone 15 Pro", chip: "A17 Pro", compatible: true },
  { model: "iPhone 15 Pro Max", chip: "A17 Pro", compatible: true },
  { model: "iPhone 16", chip: "A18", compatible: true },
  { model: "iPhone 16 Plus", chip: "A18", compatible: true },
  { model: "iPhone 16 Pro", chip: "A18 Pro", compatible: true },
  { model: "iPhone 16 Pro Max", chip: "A18 Pro", compatible: true },
  { model: "iPhone 17", chip: "A19", compatible: true },
  { model: "iPhone 17 Plus", chip: "A19", compatible: true },
  { model: "iPhone 17 Pro", chip: "A19 Pro", compatible: true },
  { model: "iPhone 17 Pro Max", chip: "A19 Pro", compatible: true },
  { model: "iPhone Air", chip: "A18", compatible: true },
];

export default function IOS27() {
  const [filter, setFilter] = useState<"all" | "compatible">("all");
  return (
    <div>

      {/* Hero */}
      <section style={{ background: "#000", padding: "80px 0 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "16px" }}>iOS 27</p>
            <h1 className="apple-headline-hero" style={{ color: "#f5f5f7", marginBottom: "24px" }}>Liquid Glass.<br />Redesigned from<br />the ground up.</h1>
            <p style={{ fontSize: "21px", color: "rgba(245,245,247,0.7)", lineHeight: 1.55, marginBottom: "40px" }}>
              iOS 27 is the most significant update to iPhone software since iOS 7 in 2013. The Liquid Glass design language transforms every surface, every animation, and every interaction on your iPhone.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#features" style={{ display: "inline-block", background: "#0071e3", color: "#fff", padding: "14px 28px", borderRadius: "980px", fontSize: "17px", fontWeight: 500, textDecoration: "none" }}>Explore features</a>
              <a href="#compatibility" style={{ display: "inline-block", color: "rgba(255,255,255,0.8)", padding: "14px 0", fontSize: "17px", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)" }}>Check compatibility</a>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={200}>
          <div style={{ maxWidth: "1000px", margin: "48px auto 0", padding: "0 22px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
            {[IMGS.ios27.homeScreen1, IMGS.ios27.homeScreen2, IMGS.ios27.homeScreen3, IMGS.ios27.homeScreen4, IMGS.ios27.homeScreen5].map((src, i) => (
              <div key={i} style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "9/19.5", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
                <img src={src} alt={`iOS 27 screenshot ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* What is Liquid Glass */}
      <section style={{ background: "#fff", padding: "72px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="feature-grid-responsive">
            <FadeIn>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "12px" }}>Design Language</p>
              <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "24px" }}>What is Liquid Glass?</h2>
              <p style={{ fontSize: "17px", color: "#6e6e73", lineHeight: 1.7, marginBottom: "20px" }}>
                Liquid Glass is Apple's new visual design system that replaces the flat, opaque surfaces of iOS 16 through iOS 26. Every UI element — buttons, cards, menus, toolbars — now uses a translucent material that refracts and blurs the content behind it, creating a sense of physical depth.
              </p>
              <p style={{ fontSize: "17px", color: "#6e6e73", lineHeight: 1.7, marginBottom: "20px" }}>
                The system adapts dynamically to your wallpaper. If your wallpaper is warm and orange, the glass tints warm. If it is dark and moody, the glass darkens. The entire interface feels alive and responsive.
              </p>
              <p style={{ fontSize: "17px", color: "#6e6e73", lineHeight: 1.7 }}>
                Apple says Liquid Glass was inspired by the physical properties of glass found throughout Apple's retail stores and product design — the same material philosophy that shaped the iPhone's original design in 2007.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
                <img src={IMGS.ios27.macworld} alt="iOS 27 Liquid Glass design" style={{ width: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section id="features" style={{ background: "#f5f5f7", padding: "72px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "8px" }}>Features</p>
            <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "48px" }}>Everything that is new in iOS 27.</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <IOS27FeaturePills />
          </FadeIn>
        </div>
      </section>

      {/* Performance numbers */}
      <section style={{ background: "#000", padding: "72px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "8px" }}>Performance</p>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", marginBottom: "60px" }}>iOS 27 is the fastest iOS ever.</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2px" }}>
            {[
              { stat: "30%", label: "Faster app launches" },
              { stat: "70%", label: "Faster photo loading" },
              { stat: "80%", label: "Faster AirDrop" },
              { stat: "2x", label: "Faster Spotlight search" },
              { stat: "5x", label: "Faster Finder file transfers on Mac" },
              { stat: "40%", label: "Better battery efficiency on iPhone 16" },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 60}>
                <div style={{ background: "#1d1d1f", padding: "40px 28px", textAlign: "center" }}>
                  <p style={{ fontSize: "clamp(40px, 5vw, 60px)", fontWeight: 700, color: "#f5f5f7", letterSpacing: "-0.04em", marginBottom: "8px" }}>{item.stat}</p>
                  <p style={{ fontSize: "14px", color: "rgba(245,245,247,0.5)", lineHeight: 1.4 }}>{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility table */}
      <section id="compatibility" style={{ background: "#fff", padding: "72px 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "8px" }}>Compatibility</p>
            <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "16px" }}>Is your iPhone compatible?</h2>
            <p style={{ fontSize: "17px", color: "#6e6e73", marginBottom: "40px" }}>iOS 27 supports every iPhone from iPhone 11 onward. That is every device with an A13 Bionic chip or later.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <div style={{ border: "1px solid #d2d2d7", borderRadius: "16px", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 100px", background: "#f5f5f7", padding: "12px 20px", borderBottom: "1px solid #d2d2d7" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#6e6e73", textTransform: "uppercase", letterSpacing: "0.06em" }}>Model</span>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#6e6e73", textTransform: "uppercase", letterSpacing: "0.06em" }}>Chip</span>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#6e6e73", textTransform: "uppercase", letterSpacing: "0.06em" }}>iOS 27</span>
              </div>
              {COMPATIBILITY.map((row, i) => (
                <div key={row.model} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 100px", padding: "14px 20px", borderBottom: i < COMPATIBILITY.length - 1 ? "1px solid #f0f0f0" : "none", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <span style={{ fontSize: "15px", color: "#1d1d1f", fontWeight: 500 }}>{row.model}</span>
                  <span style={{ fontSize: "14px", color: "#6e6e73" }}>{row.chip}</span>
                  <span style={{ fontSize: "14px", color: row.compatible ? "#34c759" : "#ff3b30", fontWeight: 600 }}>{row.compatible ? "Yes" : "No"}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related */}
      <section style={{ background: "#f5f5f7", padding: "56px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#1d1d1f", marginBottom: "32px" }}>Also from WWDC 2026</h2>
          </FadeIn>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {[
              { label: "Siri AI", href: "/siri-ai" },
              { label: "Parental Controls", href: "/parental-controls" },
              { label: "macOS Golden Gate", href: "/macos-golden-gate" },
              { label: "Apple Intelligence", href: "/apple-intelligence" },
              { label: "watchOS 12", href: "/watchos-12" },
              { label: "Full WWDC 2026 Coverage", href: "/wwdc-2026" },
            ].map(link => (
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
