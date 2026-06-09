/*
  Parental Controls Page — Everything Apple
  Design: Apple.com product page aesthetic
  - Alternating pure black/white sections
  - Interactive feature tabs
  - Real Apple screenshots
  - Scroll-triggered reveal animations
  Built by Cory Hepler
*/
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
      <img src={IMGS.parental.childSafety} alt="Child Safety — Parental Controls in iOS 27" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 25%" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.88) 80%, rgba(0,0,0,0.96) 100%)" }} />
      <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "max(80px, env(safe-area-inset-bottom))", paddingLeft: "max(22px, env(safe-area-inset-left))", paddingRight: "max(22px, env(safe-area-inset-right))", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <div style={{ maxWidth: "680px" }}>
          <p className="animate-fade-in" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2997ff", marginBottom: "16px", animationDelay: "0.1s" }}>iOS 27 — New Feature</p>
          <h1 className="apple-headline-hero animate-fade-in delay-200" style={{ color: "#f5f5f7", marginBottom: "20px" }}>Parental Controls.<br />Designed for families.</h1>
          <p className="animate-fade-in delay-300" style={{ fontSize: "clamp(17px, 2.2vw, 21px)", color: "rgba(245,245,247,0.75)", lineHeight: 1.5, marginBottom: "36px", maxWidth: "520px", letterSpacing: "-0.022em" }}>
            iOS 27 gives parents unprecedented tools to manage screen time, content, communication, and Apple Watch supervision — all from one place.
          </p>
          <div className="animate-fade-in delay-400" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#features" className="apple-btn apple-btn-blue">Explore features</a>
            <Link href="/wwdc-2026"><span className="apple-btn apple-btn-outline-white">WWDC 2026</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Interactive feature tabs
const TABS = [
  {
    id: "screen-time",
    label: "Screen Time",
    title: "Set daily limits for every app.",
    body: "Screen Time gives you a complete picture of how your child uses their device. Set daily limits for specific apps or app categories, schedule downtime when the device is locked, and see detailed weekly reports.",
    img: IMGS.parental.screenTime,
  },
  {
    id: "child-accounts",
    label: "Child Accounts",
    title: "A safe space for kids.",
    body: "Create a dedicated Child Account for your child with age-appropriate content filters, communication limits, and privacy protections built in from the start. No setup required — it just works.",
    img: IMGS.parental.screen1,
  },
  {
    id: "communication",
    label: "Communication Safety",
    title: "Know who your child talks to.",
    body: "Communication Safety uses on-device intelligence to detect sensitive content in Messages, FaceTime, and AirDrop. Parents can set approved contacts and receive alerts when unknown people try to reach their child.",
    img: IMGS.parental.screen2,
  },
  {
    id: "apple-watch",
    label: "Apple Watch",
    title: "Keep kids safe with Apple Watch.",
    body: "Apple Watch for kids lets parents set up a watch without an iPhone. Parents can see their child's location, set communication limits, and receive alerts — all from their own iPhone.",
    img: IMGS.watchKids.screen1,
  },
];

function InteractiveTabs() {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal({ threshold: 0.06 });
  return (
    <section id="features" className="apple-section section-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>Features</p>
          <h2 className="apple-headline reveal reveal-delay-1" style={{ color: "#1d1d1f" }}>Everything parents need.</h2>
        </div>

        {/* Tab bar */}
        <div className="reveal reveal-delay-2" style={{ display: "flex", gap: "0", borderBottom: "1px solid rgba(0,0,0,0.1)", marginBottom: "60px", overflowX: "auto" }}>
          {TABS.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              style={{
                background: "none",
                border: "none",
                borderBottom: active === i ? "2px solid #0071e3" : "2px solid transparent",
                padding: "16px 24px",
                fontSize: "15px",
                fontWeight: active === i ? 600 : 400,
                color: active === i ? "#0071e3" : "#6e6e73",
                cursor: "pointer",
                letterSpacing: "-0.022em",
                whiteSpace: "nowrap",
                transition: "color 0.2s ease, border-color 0.2s ease",
                fontFamily: "inherit",
                marginBottom: "-1px",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="apple-feature-row">
          <div>
            <h3 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.003em", lineHeight: 1.1, marginBottom: "20px" }}>
              {TABS[active].title}
            </h3>
            <p style={{ fontSize: "17px", color: "#6e6e73", lineHeight: 1.6, letterSpacing: "-0.022em", maxWidth: "440px" }}>
              {TABS[active].body}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              key={active}
              src={TABS[active].img}
              alt={TABS[active].title}
              style={{ width: "100%", maxWidth: "420px", display: "block", animation: "fadeIn 0.4s ease" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const FEATURE_SECTIONS = [
  {
    label: "Screen Time",
    title: "Every minute, accounted for.",
    body: "Screen Time shows you exactly how your child spends their time on their device. See which apps they use most, how many notifications they receive, and how often they pick up their device. Set daily limits that automatically lock apps when the time is up.",
    img: IMGS.parental.screenTime,
    dark: false,
  },
  {
    label: "Content & Privacy",
    title: "Age-appropriate content. Always.",
    body: "Content & Privacy Restrictions let you control what your child can see, download, and purchase. Block explicit content in Apple Music, restrict web browsing to approved sites, and prevent in-app purchases — all with a single passcode.",
    img: IMGS.parental.screen3,
    dark: true,
  },
  {
    label: "Location Sharing",
    title: "Always know where they are.",
    body: "Family Sharing lets parents see their child's real-time location on a map. Set up location alerts to be notified when your child arrives at school, leaves a friend's house, or goes somewhere unexpected.",
    img: IMGS.parental.ios1,
    dark: false,
  },
  {
    label: "Communication Safety",
    title: "Safe from the start.",
    body: "Communication Safety uses on-device machine learning to detect sensitive images and content before they're seen. Parents receive alerts, and children are shown resources to help them understand what happened. All processing happens on-device — Apple never sees the content.",
    img: IMGS.parental.screen4,
    dark: true,
  },
];

function FeatureSections() {
  return (
    <>
      {FEATURE_SECTIONS.map((feature, i) => {
        const imageLeft = i % 2 === 1;
        return (
          <RevealSection key={i} className={`apple-section ${feature.dark ? "section-black" : "section-white"}`}>
            <div className="apple-content-wide">
              <div className="apple-feature-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
                <div style={{ order: imageLeft ? 1 : 0 }}>
                  <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>{feature.label}</p>
                  <h2 className="apple-headline reveal reveal-delay-1" style={{ color: feature.dark ? "#f5f5f7" : "#1d1d1f", marginBottom: "20px" }}>{feature.title}</h2>
                  <p className="apple-lead reveal reveal-delay-2" style={{ color: feature.dark ? "rgba(245,245,247,0.7)" : "#6e6e73", maxWidth: "480px" }}>{feature.body}</p>
                </div>
                <div className="reveal-scale" style={{ order: imageLeft ? 0 : 1, display: "flex", justifyContent: "center" }}>
                  <img src={feature.img} alt={feature.title} style={{ width: "100%", maxWidth: "420px", display: "block" }} />
                </div>
              </div>
            </div>
          </RevealSection>
        );
      })}
    </>
  );
}

// Apple Watch for Kids section
function AppleWatchKids() {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <section className="apple-section section-offwhite" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>New in iOS 27</p>
          <h2 className="apple-headline reveal reveal-delay-1" style={{ color: "#1d1d1f", marginBottom: "20px" }}>Apple Watch for kids.</h2>
          <p className="apple-lead reveal reveal-delay-2" style={{ color: "#6e6e73", maxWidth: "560px", margin: "0 auto" }}>
            For the first time, kids can use Apple Watch independently — without an iPhone. Parents control everything from their own device.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", background: "rgba(0,0,0,0.06)" }} className="reveal reveal-delay-3">
          {[IMGS.watchKids.screen1, IMGS.watchKids.screen2, IMGS.watchKids.screen3, IMGS.watchKids.screen4].map((src, i) => (
            <img key={i} src={src} alt={`Apple Watch for kids ${i + 1}`} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block" }} />
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(0,0,0,0.06)", marginTop: "2px" }}>
          {[
            { title: "Location sharing", body: "Parents always know where their child is, in real time." },
            { title: "Communication limits", body: "Set approved contacts — kids can only call and message approved people." },
            { title: "Emergency SOS", body: "Kids can always call emergency services, even if communication is restricted." },
          ].map((item, i) => (
            <div key={i} className="reveal" style={{ background: "#fff", padding: "36px 28px", transitionDelay: `${i * 0.1}s` }}>
              <h3 style={{ fontSize: "19px", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.002em", marginBottom: "12px" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", color: "#6e6e73", lineHeight: 1.57 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Full feature list
const ALL_FEATURES = [
  { cat: "Screen Time", items: ["Daily app limits", "Downtime scheduling", "Always-allowed apps", "Weekly usage reports"] },
  { cat: "Content Filters", items: ["Age-appropriate ratings", "Web content filtering", "Explicit content blocking", "App Store restrictions"] },
  { cat: "Communication", items: ["Approved contacts list", "Unknown sender alerts", "FaceTime restrictions", "AirDrop controls"] },
  { cat: "Privacy", items: ["Location sharing", "App tracking controls", "Microphone/camera access", "Data sharing limits"] },
  { cat: "Apple Watch", items: ["Independent kid setup", "Parent-controlled contacts", "Real-time location", "Emergency SOS always on"] },
  { cat: "Family Sharing", items: ["Up to 6 family members", "Shared subscriptions", "Purchase approval", "iCloud family storage"] },
];

function FullFeatureList() {
  const ref = useScrollReveal({ threshold: 0.06 });
  return (
    <section className="apple-section section-black" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>Complete feature list</p>
          <h2 className="apple-headline reveal reveal-delay-1" style={{ color: "#f5f5f7" }}>Everything in one place.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(255,255,255,0.08)" }}>
          {ALL_FEATURES.map((group, i) => (
            <div key={i} className="reveal" style={{ background: "#000", padding: "40px 32px", transitionDelay: `${(i % 3) * 0.08}s` }}>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2997ff", marginBottom: "20px" }}>{group.cat}</p>
              {group.items.map((item, j) => (
                <p key={j} style={{ fontSize: "15px", color: "rgba(245,245,247,0.7)", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", letterSpacing: "-0.022em", lineHeight: 1.4 }}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Setup() {
  const ref = useScrollReveal({ threshold: 0.1 });
  return (
    <section className="apple-section section-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content" style={{ textAlign: "center" }}>
        <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>Getting started</p>
        <h2 className="apple-headline reveal reveal-delay-1" style={{ color: "#1d1d1f", marginBottom: "20px" }}>Set up in minutes.</h2>
        <p className="apple-lead reveal reveal-delay-2" style={{ color: "#6e6e73", maxWidth: "560px", margin: "0 auto 48px" }}>
          Parental Controls in iOS 27 are available on any iPhone, iPad, or Apple Watch. Requires iOS 27 on parent and child devices.
        </p>
        <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/ios-27"><span className="apple-btn apple-btn-blue">Learn about iOS 27</span></Link>
          <Link href="/siri-ai"><span className="apple-btn apple-btn-outline-dark">Siri AI</span></Link>
        </div>
      </div>
    </section>
  );
}

export default function ParentalControls() {
  return (
    <div style={{ background: "#000" }}>
      <Navbar />
      <Hero />
      <InteractiveTabs />
      <FeatureSections />
      <AppleWatchKids />
      <FullFeatureList />
      <Setup />
      <Footer />
    </div>
  );
}
