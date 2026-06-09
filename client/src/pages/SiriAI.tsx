/*
  Siri AI Page — Everything Apple
  Design: Apple.com product page aesthetic
  - Full-width theater video player (WWDC "Meet the new Siri" session)
  - Alternating pure black/white sections
  - Massive SF Pro typography
  - Scroll-triggered reveal animations
  - No card borders, no hard blocks
  Built by Cory Hepler
*/
import { Link } from "wouter";
import { IMGS } from "../lib/imageManifest";
import useScrollReveal from "../hooks/useScrollReveal";

function RevealSection({ children, className = "", style = {} }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={className} style={style}>
      {children}
    </section>
  );
}

function Hero() {
  return (
    <section style={{ position: "relative", height: "100svh", minHeight: "600px", maxHeight: "1000px", overflow: "hidden", background: "#000" }}>
      <img src={IMGS.siri.hero} alt="New Siri AI interface" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 30%" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.88) 85%, rgba(0,0,0,0.96) 100%)" }} />
      <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "max(80px, env(safe-area-inset-bottom))", paddingLeft: "max(22px, env(safe-area-inset-left))", paddingRight: "max(22px, env(safe-area-inset-right))", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <div style={{ maxWidth: "680px" }}>
          <p className="animate-fade-in" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2997ff", marginBottom: "16px", animationDelay: "0.1s" }}>Apple Intelligence</p>
          <h1 className="apple-headline-hero animate-fade-in delay-200" style={{ color: "#f5f5f7", marginBottom: "20px" }}>Introducing<br />Siri AI.</h1>
          <p className="animate-fade-in delay-300" style={{ fontSize: "clamp(17px, 2.2vw, 21px)", color: "rgba(245,245,247,0.75)", lineHeight: 1.5, marginBottom: "36px", maxWidth: "520px", letterSpacing: "-0.022em" }}>
            Truly helpful. Truly yours. The most capable AI assistant Apple has ever built — powered by Apple Intelligence, grounded in your context, private at every step.
          </p>
          <div className="animate-fade-in delay-400" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#theater" className="apple-btn apple-btn-blue">Watch the video</a>
            <Link href="/apple-intelligence"><span className="apple-btn apple-btn-outline-white">Apple Intelligence</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TheaterVideo() {
  return (
    <section id="theater" style={{ background: "#000", padding: "80px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2997ff", marginBottom: "16px" }}>WWDC 2026</p>
          <h2 className="apple-headline" style={{ color: "#f5f5f7", marginBottom: "16px" }}>Meet the new Siri.</h2>
          <p className="apple-lead" style={{ color: "rgba(245,245,247,0.7)", maxWidth: "560px", margin: "0 auto" }}>Watch the full WWDC 2026 session introducing Siri AI and Apple Intelligence.</p>
        </div>
        <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", background: "#111", borderRadius: "12px", overflow: "hidden", marginBottom: "32px" }}>
          <iframe src="https://www.youtube.com/embed/hF8swzNR1-o?rel=0&modestbranding=1&color=white" title="WWDC 2026 Keynote — Apple Intelligence and Siri AI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", background: "#111", borderRadius: "10px", overflow: "hidden" }}>
            <iframe src="https://www.youtube.com/embed/Uhc2-a_y9x4?rel=0&modestbranding=1&color=white" title="WWDC 2026 Recap" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} />
          </div>
          <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", background: "#111", borderRadius: "10px", overflow: "hidden" }}>
            <iframe src="https://www.youtube.com/embed/yl2jsIoMfDU?rel=0&modestbranding=1&color=white" title="Platforms State of the Union" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} />
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <p style={{ fontSize: "12px", color: "rgba(245,245,247,0.4)", letterSpacing: "-0.01em" }}>WWDC 2026 Keynote · Platforms State of the Union · Official Apple videos</p>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { label: "Conversational AI", title: "Siri that actually understands you.", body: "The new Siri can follow multi-turn conversations, remember context from earlier in your session, and understand what you mean — not just what you say. Ask follow-up questions naturally, just like talking to a person.", img: IMGS.siri.screen1, dark: true },
  { label: "On-Device Privacy", title: "Your data stays on your device.", body: "Apple Intelligence processes your requests on-device using the A18 Pro chip. Your conversations, your photos, your messages — they never leave your iPhone. Private Cloud Compute handles complex requests without Apple ever seeing your data.", img: IMGS.siri.screen2, dark: false },
  { label: "Siri App", title: "A dedicated Siri app. Finally.", body: "For the first time, Siri has its own app. Open it to type or talk, see your conversation history, and access Siri's full capabilities. It's the most powerful interface Apple has ever built for AI assistance.", img: IMGS.siri.screen3, dark: true },
  { label: "Cross-App Intelligence", title: "Siri works across every app.", body: "Ask Siri to find that photo from your trip last summer, then send it to a friend in Messages, then add a reminder about it — all in one continuous conversation. Siri now has deep access to every app on your iPhone.", img: IMGS.siri.screen4, dark: false },
];

function FeatureSections() {
  return (
    <>
      {FEATURES.map((feature, i) => {
        const imageLeft = i % 2 === 1;
        return (
          <RevealSection key={i} className={`apple-section ${feature.dark ? "section-black" : "section-white"}`}>
            <div className="apple-content-wide">
              <div className="apple-feature-row" style={{ gap: "clamp(32px, 6vw, 80px)" }}>
                <div className="feature-text" style={{ order: imageLeft ? 1 : 0 }}>
                  <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>{feature.label}</p>
                  <h2 className={`apple-headline ${imageLeft ? 'reveal-right' : 'reveal-left'} reveal-delay-1`} style={{ color: feature.dark ? "#f5f5f7" : "#1d1d1f", marginBottom: "20px" }}>{feature.title}</h2>
                  <p className="apple-lead reveal reveal-delay-2" style={{ color: feature.dark ? "rgba(245,245,247,0.7)" : "#6e6e73", maxWidth: "480px" }}>{feature.body}</p>
                </div>
                <div className={`feature-image ${imageLeft ? 'reveal-left' : 'reveal-right'}`} style={{ order: imageLeft ? 0 : 1, display: "flex", justifyContent: "center" }}>
                  <img src={feature.img} alt={feature.title} className="animate-float" style={{ width: "100%", maxWidth: "360px", display: "block", filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.25))" }} />
                </div>
              </div>
            </div>
          </RevealSection>
        );
      })}
    </>
  );
}

const CAPABILITIES = [
  { title: "Type or talk", body: "Use Siri by voice or text — whichever is more convenient in the moment." },
  { title: "Persistent memory", body: "Siri remembers your preferences, routines, and past requests across sessions." },
  { title: "Writing assistance", body: "Draft emails, messages, and documents with Siri's writing tools in any app." },
  { title: "Photo intelligence", body: "Find any photo by describing it. Siri understands the content of your images." },
  { title: "App actions", body: "Siri can take actions inside third-party apps — not just Apple's own apps." },
  { title: "Notification summary", body: "Siri reads and summarizes your notifications so you never miss what matters." },
  { title: "Visual Intelligence", body: "Point your camera at anything and ask Siri about it. Powered by on-device AI." },
  { title: "Personal context", body: "Siri understands your calendar, contacts, and messages to give relevant answers." },
  { title: "Private Cloud Compute", body: "Complex requests are handled by Apple's secure cloud with zero data retention." },
];

function CapabilitiesGrid() {
  const ref = useScrollReveal({ threshold: 0.06 });
  return (
    <section className="apple-section section-offwhite" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>Capabilities</p>
          <h2 className="apple-headline reveal reveal-delay-1" style={{ color: "#1d1d1f" }}>Everything Siri can do.</h2>
        </div>
        <div className="mobile-two-col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(0,0,0,0.06)" }}>
          {CAPABILITIES.map((cap, i) => (
            <div key={i} className="reveal" style={{ background: "#fff", padding: "40px 32px", transitionDelay: `${(i % 3) * 0.08}s` }}>
              <h3 style={{ fontSize: "19px", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.002em", marginBottom: "12px" }}>{cap.title}</h3>
              <p style={{ fontSize: "14px", color: "#6e6e73", lineHeight: 1.57, letterSpacing: "-0.01em" }}>{cap.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScreenshotsGallery() {
  const ref = useScrollReveal({ threshold: 0.06 });
  return (
    <section className="apple-section section-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 className="apple-subheadline reveal" style={{ color: "#1d1d1f" }}>See Siri AI in action.</h2>
        </div>
        <div className="mobile-two-col" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
          {[IMGS.siri.screen1, IMGS.siri.screen2, IMGS.siri.screen3, IMGS.siri.screen4, IMGS.siri.screen5].map((src, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <img src={src} alt={`Siri AI screenshot ${i + 1}`} style={{ width: "100%", aspectRatio: "9/16", objectFit: "cover", display: "block", borderRadius: "8px" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Availability() {
  const ref = useScrollReveal({ threshold: 0.1 });
  return (
    <section className="apple-section section-black" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content" style={{ textAlign: "center" }}>
        <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>Availability</p>
        <h2 className="apple-headline reveal reveal-delay-1" style={{ color: "#f5f5f7", marginBottom: "20px" }}>Coming later this year.</h2>
        <p className="apple-lead reveal reveal-delay-2" style={{ color: "rgba(245,245,247,0.7)", maxWidth: "560px", margin: "0 auto 48px" }}>
          Siri AI requires iPhone 15 Pro or later, or any iPhone 16 or 17 model. Available in English first, with more languages coming in 2027.
        </p>
        <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/iphones"><span className="apple-btn apple-btn-white">See compatible iPhones</span></Link>
          <Link href="/apple-intelligence"><span className="apple-btn apple-btn-outline-white">Apple Intelligence</span></Link>
        </div>
      </div>
    </section>
  );
}

function RelatedPages() {
  const ref = useScrollReveal({ threshold: 0.1 });
  return (
    <section className="apple-section-sm section-offwhite" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content">
        <div style={{ display: "flex", gap: "2px", background: "rgba(0,0,0,0.06)" }}>
          {[
            { label: "Apple Intelligence", href: "/apple-intelligence", img: IMGS.intelligence.overview },
            { label: "Parental Controls", href: "/parental-controls", img: IMGS.parental.screenTime },
            { label: "iOS 27", href: "/ios-27", img: IMGS.ios27.hero },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{ flex: 1 }}>
              <div className="reveal" style={{ background: "#fff", overflow: "hidden", cursor: "pointer", transitionDelay: `${i * 0.1}s` }}
                onMouseEnter={e => { const img = e.currentTarget.querySelector("img"); if (img) (img as HTMLImageElement).style.transform = "scale(1.05)"; }}
                onMouseLeave={e => { const img = e.currentTarget.querySelector("img"); if (img) (img as HTMLImageElement).style.transform = "scale(1)"; }}
              >
                <div style={{ overflow: "hidden" }}>
                  <img src={item.img} alt={item.label} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }} />
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <p style={{ fontSize: "17px", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.022em" }}>{item.label}</p>
                  <p style={{ fontSize: "14px", color: "#0071e3", marginTop: "4px" }}>Learn more</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SiriAI() {
  return (
    <div style={{ background: "#000" }}>
      <Hero />
      <TheaterVideo />
      <FeatureSections />
      <CapabilitiesGrid />
      <ScreenshotsGallery />
      <Availability />
      <RelatedPages />
    </div>
  );
}
