/* =============================================================
   WWDC 2026 Page — Everything Apple
   Every announcement, real photos, deep editorial.
   Apple.com design language. Zero emojis.
   Built by Cory Hepler
   ============================================================= */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import { useSearch } from "../App";
import Footer from "../components/Footer";
import { IMGS } from "../lib/imageManifest";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => el.classList.add("visible"), delay); obs.unobserve(el); } }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="fade-in-up">{children}</div>;
}

const ANNOUNCEMENTS = [
  {
    id: "siri-ai", label: "Siri AI", tag: "Biggest Announcement", dark: true,
    title: "The new Siri. Finally, truly intelligent.",
    summary: "Apple completely rebuilt Siri from the ground up using its own large language models. The new Siri understands context, remembers previous conversations, and can take actions across your entire device. It now has a dedicated app, supports text input, and works on all Apple platforms.",
    details: ["Dedicated Siri app for the first time ever","Conversational memory across sessions","On-screen awareness — show Siri anything on your screen","Multi-step task execution inside any app","Available on iPhone, iPad, Mac, Apple Watch, Apple TV, HomePod","Private Cloud Compute for complex requests","Siri AI waitlist opens today","Full rollout with iOS 27 this fall"],
    img: IMGS.siri.screen1, href: "/siri-ai",
  },
  {
    id: "ios27", label: "iOS 27", tag: "Major Release", dark: false,
    title: "Liquid Glass. The biggest redesign since iOS 7.",
    summary: "iOS 27 introduces the Liquid Glass design language — a translucent, dynamic visual system that responds to your wallpaper, ambient light, and content. Every surface, every animation, every interaction has been rebuilt. This is not a refresh. It is a reinvention.",
    details: ["Liquid Glass UI across all system apps","Dynamic Island redesigned with contextual animations","New home screen widget system with live data","Improved multitasking on iPhone Pro models","Redesigned Control Center with customizable modules","New Camera app with AI scene detection","Improved Messages with AI-powered smart replies","Available for iPhone 11 and later this fall"],
    img: IMGS.ios27.homeScreen5, href: "/ios-27",
  },
  {
    id: "parental", label: "Parental Controls", tag: "Cory Hepler Pick", dark: true,
    title: "The most powerful parental tools Apple has ever built.",
    summary: "iOS 27 delivers a complete overhaul of Screen Time and parental controls. Parents can now set granular communication limits, schedule downtime automatically, monitor content across all apps, and get weekly reports on their child device usage. A new Family Checklist walks parents through every safety setting step by step.",
    details: ["Family Checklist — guided setup for all parental settings","Communication Limits — control calls, texts, FaceTime by contact","Screen Distance alerts when device is held too close","Improved Downtime scheduling with exceptions","Content and Privacy restrictions redesigned","Communication Safety detects sensitive images in Messages","App Store purchase approval with one tap","Location sharing improvements in Find My","Weekly Screen Time reports for parents","Works across iPhone, iPad, Mac, and Apple Watch"],
    img: IMGS.parental.screenTime, href: "/parental-controls",
  },
  {
    id: "macos", label: "macOS Golden Gate", tag: "Mac Update", dark: false,
    title: "The Mac gets Liquid Glass and Siri AI.",
    summary: "macOS Golden Gate brings the Liquid Glass design language to the Mac, along with full Siri AI integration, Apple Intelligence writing tools, and a redesigned menu bar. The update is named after the Golden Gate Bridge and represents a new era for the Mac.",
    details: ["Liquid Glass design across all system apps","Siri AI with full on-screen awareness on Mac","Apple Intelligence writing tools in every text field","Redesigned menu bar with dynamic modules","New Finder with AI-powered search","Improved Stage Manager with better window management","iPhone Mirroring improvements","Available for all Apple Silicon Macs and Intel Macs from 2019"],
    img: IMGS.macos.hero, href: "/macos-golden-gate",
  },
  {
    id: "apple-intelligence", label: "Apple Intelligence", tag: "AI Platform", dark: true,
    title: "AI that knows you. Private by design.",
    summary: "Apple Intelligence expands to 50+ countries and adds dozens of new features. Writing tools now work in every app. Image generation gets a major upgrade. Priority notifications use AI to surface what matters most. And Private Cloud Compute ensures your data never leaves your control.",
    details: ["Expanding to 50+ countries and regions","Writing tools in every app on every platform","Image Playground with new styles and subjects","Genmoji — create custom emoji from text","Priority notifications with AI-powered ranking","Smart Reply in Mail and Messages","Photo cleanup tool powered by AI","Private Cloud Compute for complex AI tasks","New AI features in Safari and Spotlight"],
    img: IMGS.intelligence.writing2, href: "/apple-intelligence",
  },
  {
    id: "watchos", label: "watchOS 12", tag: "watchOS", dark: false,
    title: "Apple Watch for Kids. A new era for the wrist.",
    summary: "watchOS 12 introduces Apple Watch for Kids mode, a completely redesigned experience for children that gives parents full control while giving kids independence. New watch faces, health features, and Siri AI integration round out the update.",
    details: ["Apple Watch for Kids mode — new dedicated experience","Parents control apps, contacts, and location from iPhone","New animated watch faces designed for kids","Siri AI on Apple Watch with on-wrist awareness","Improved crash detection and fall detection","New Vitals app for daily health summaries","Training Load feature for athletes","Available for Apple Watch Series 4 and later"],
    img: IMGS.watchKids.screen1, href: "/watchos-12",
  },
  {
    id: "timcook", label: "Tim Cook", tag: "Breaking", dark: true,
    title: "Tim Cook delivers his final WWDC keynote as CEO.",
    summary: "Tim Cook opened WWDC 2026 with a message that surprised the entire tech world. After 15 years as Apple CEO, Cook announced he would be stepping down later this year. He called it the right time to pass the torch. John Ternus, Apple hardware chief, will become the new CEO in September 2026.",
    details: ["Cook praised developers for enriching people lives","John Ternus becomes the new CEO in September 2026","Cook remains as Executive Chairman of Apple board","Cook tenure spanned iPhone, iPad, Apple Watch, and Apple Silicon eras","Apple grew from $300 billion to $3 trillion under Cook","The best is still ahead — Cook final message to developers"],
    img: IMGS.wwdc.timCookCnet, href: "/wwdc-2026",
  },
];

export default function WWDC() {
  const { openSearch } = useSearch();
  return (
    <div>
      <Navbar onSearchOpen={openSearch} />

      {/* Hero */}
      <section style={{ position: "relative", height: "90svh", minHeight: "560px", overflow: "hidden", background: "#000" }}>
        <img src={IMGS.wwdc.appleParkStage} alt="WWDC 2026 Apple Park stage" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", opacity: 1 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.85) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 22px 80px", maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "12px" }}>June 9, 2026 — Apple Park, Cupertino</p>
          <h1 className="apple-headline-hero" style={{ color: "#fff", marginBottom: "20px" }}>WWDC 2026.<br />All systems glow.</h1>
          <p style={{ fontSize: "clamp(17px, 2.2vw, 21px)", color: "rgba(255,255,255,0.75)", maxWidth: "600px", lineHeight: 1.55, marginBottom: "36px" }}>
            Tim Cook took the stage at Apple Park for the last time as CEO and delivered the most consequential WWDC in a decade. Siri AI. iOS 27. macOS Golden Gate. Parental Controls. Apple Intelligence for everyone.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#announcements" style={{ display: "inline-block", background: "#0071e3", color: "#fff", padding: "13px 26px", borderRadius: "980px", fontSize: "16px", fontWeight: 500, textDecoration: "none" }}>All announcements</a>
            <a href="#gallery" style={{ display: "inline-block", color: "rgba(255,255,255,0.85)", padding: "13px 0", fontSize: "16px", fontWeight: 400, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)" }}>Event gallery</a>
          </div>
        </div>
      </section>

      {/* Quick nav */}
      <div style={{ background: "#1d1d1f", borderBottom: "1px solid rgba(255,255,255,0.1)", position: "sticky", top: "44px", zIndex: 100, overflowX: "auto" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px", display: "flex" }}>
          {ANNOUNCEMENTS.map(ann => (
            <a key={ann.id} href={`#${ann.id}`} style={{ display: "inline-block", padding: "14px 18px", fontSize: "12px", color: "rgba(255,255,255,0.6)", textDecoration: "none", whiteSpace: "nowrap", borderBottom: "2px solid transparent", transition: "all 0.2s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderBottomColor = "#0071e3"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent"; }}>
              {ann.label}
            </a>
          ))}
        </div>
      </div>

      {/* Tim Cook intro */}
      <section style={{ background: "#1d1d1f", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="feature-grid-responsive">
            <FadeIn>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "12px" }}>Tim Cook</p>
              <h2 className="apple-headline-section" style={{ color: "#f5f5f7", marginBottom: "24px" }}>A farewell from the CEO who changed everything.</h2>
              <p style={{ fontSize: "17px", color: "rgba(245,245,247,0.7)", lineHeight: 1.7, marginBottom: "20px" }}>
                Tim Cook opened WWDC 2026 with a message that surprised the entire tech world. After 15 years as Apple CEO, Cook announced he would be stepping down later this year, handing the reins to John Ternus. He called it "the right time to pass the torch."
              </p>
              <p style={{ fontSize: "17px", color: "rgba(245,245,247,0.7)", lineHeight: 1.7 }}>
                Under Cook, Apple grew from a $300 billion company to the first $3 trillion company in history. He oversaw the iPhone 4S through iPhone 17, the Apple Watch, AirPods, Apple Silicon, Apple Vision Pro, and now Siri AI.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <div style={{ borderRadius: "20px", overflow: "hidden" }}>
                <img src={IMGS.wwdc.timCookCnet} alt="Tim Cook at WWDC 2026" style={{ width: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <p style={{ fontSize: "12px", color: "rgba(245,245,247,0.4)", marginTop: "10px", textAlign: "center" }}>Tim Cook delivers his final WWDC keynote. Photo: CNET</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <div id="announcements">
        {ANNOUNCEMENTS.map((ann, idx) => (
          <section key={ann.id} id={ann.id} style={{ background: ann.dark ? "#000" : "#fff", padding: "100px 0" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="feature-grid-responsive">
                <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                  <FadeIn>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3" }}>{ann.label}</span>
                      <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: ann.dark ? "rgba(245,245,247,0.4)" : "#6e6e73", background: ann.dark ? "rgba(255,255,255,0.08)" : "#f5f5f7", padding: "2px 8px", borderRadius: "4px" }}>{ann.tag}</span>
                    </div>
                    <h2 className="apple-headline-feature" style={{ color: ann.dark ? "#f5f5f7" : "#1d1d1f", marginBottom: "20px" }}>{ann.title}</h2>
                    <p style={{ fontSize: "17px", color: ann.dark ? "rgba(245,245,247,0.65)" : "#6e6e73", lineHeight: 1.7, marginBottom: "28px" }}>{ann.summary}</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                      {ann.details.map((d) => (
                        <li key={d} style={{ fontSize: "15px", color: ann.dark ? "rgba(245,245,247,0.55)" : "#6e6e73", padding: "8px 0", borderBottom: `1px solid ${ann.dark ? "rgba(255,255,255,0.06)" : "#f0f0f0"}`, display: "flex", alignItems: "flex-start", gap: "10px" }}>
                          <span style={{ color: "#0071e3", fontWeight: 700, flexShrink: 0 }}>—</span>{d}
                        </li>
                      ))}
                    </ul>
                    <Link href={ann.href}>
                      <span style={{ display: "inline-block", color: "#0071e3", fontSize: "17px", fontWeight: 500, cursor: "pointer" }}>Deep dive into {ann.label}</span>
                    </Link>
                  </FadeIn>
                </div>
                <div style={{ order: idx % 2 === 0 ? 1 : 0 }}>
                  <FadeIn delay={100}>
                    <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: ann.dark ? "0 20px 60px rgba(0,0,0,0.5)" : "0 20px 60px rgba(0,0,0,0.12)" }}>
                      <img src={ann.img} alt={ann.title} style={{ width: "100%", objectFit: "cover", display: "block", maxHeight: "500px" }} />
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Gallery */}
      <section id="gallery" style={{ background: "#f5f5f7", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "8px" }}>Event Gallery</p>
            <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "48px" }}>Real photos from WWDC 2026.</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "12px" }}>
            {[
              { src: IMGS.wwdc.appleParkStage, cap: "Apple Park outdoor stage" },
              { src: IMGS.wwdc.appleParkoOutdoor, cap: "Developers at Apple Park" },
              { src: IMGS.wwdc.timCookCnet, cap: "Tim Cook on stage — CNET" },
              { src: IMGS.wwdc.timCookInc, cap: "Tim Cook — Inc. Magazine" },
              { src: IMGS.wwdc.stageInterior, cap: "Steve Jobs Theater interior" },
              { src: IMGS.siri.screen1, cap: "Siri AI new interface" },
              { src: IMGS.ios27.homeScreen5, cap: "iOS 27 Liquid Glass" },
              { src: IMGS.macos.hero, cap: "macOS Golden Gate" },
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div style={{ borderRadius: "14px", overflow: "hidden", position: "relative", aspectRatio: "16/9", background: "#e5e5ea" }}>
                  <img src={p.src} alt={p.cap} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.65))", padding: "20px 12px 10px" }}>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.85)" }}>{p.cap}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
