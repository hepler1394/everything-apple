/*
  Siri AI Page — Everything Apple
  Design: Apple.com product page aesthetic
  - Official Apple Siri AI media (images + MP4 videos)
  - Full-width theater video player (WWDC "Meet the new Siri" session)
  - Alternating pure black/white sections
  - Massive SF Pro typography
  - Scroll-triggered reveal animations
  - No card borders, no hard blocks
  Built by Cory Hepler
*/
import { Link } from "wouter";
import useScrollReveal from "../hooks/useScrollReveal";

// Official Apple Siri AI CDN media
const SIRI_MEDIA = {
  images: {
    hero: "/manus-storage/Apple-Siri-AI-hero-260608_587455d3.jpg",
    appChat: "/manus-storage/Apple-Siri-app-chat-260608_0ba17d39.jpg",
    spotlight: "/manus-storage/Apple-Siri-AI-Spotlight-integration-260608_34a24073.jpg",
    visualMac: "/manus-storage/Apple-Siri-AI-Visual-Intelligence-on-Mac-260608_efcc3546.jpg",
    visualIpad: "/manus-storage/Apple-Siri-AI-Visual-Intelligence-on-iPad-260608_f89a1f5d.jpg",
    askImages: "/manus-storage/Apple-Siri-AI-ask-about-images-260608_8d690c64.jpg",
    worldKnowledge: "/manus-storage/Apple-Siri-AI-world-knowledge-260608_7a563c8b.jpg",
    personalContext: "/manus-storage/Apple-Siri-AI-personal-context-and-suggestions-260608_13d511dd.jpg",
    helpfulTips: "/manus-storage/Apple-Siri-AI-helpful-tips-and-suggestions-260608_34a7ffea.jpg",
    visionPro: "/manus-storage/Apple-Siri-AI-on-Apple-Vision-Pro-260608_2ff44e7d.jpg",
    conversationHistory: "/manus-storage/Apple-Siri-AI-conversation-history-overview-260608_0322d318.jpg",
    architecture: "/manus-storage/Apple-Siri-AI-architecture-diagram-260608_6306ab8c.jpg",
  },
  videos: {
    dynamicIsland: "/manus-storage/Apple-Siri-AI-Dynamic-Island-gesture-260608_95323973.mp4",
    cameraMode: "/manus-storage/Apple-Siri-AI-Siri-mode-in-Camera-260608_2e3af3b7.mp4",
    expressiveVoices: "/manus-storage/Apple-Siri-AI-expressive-voices-260608_572dbef6.mp4",
    personalAssistant: "/manus-storage/Apple-Siri-AI-personal-assistant-260608_9c2ee915.mp4",
    splitBill: "/manus-storage/Apple-Siri-AI-split-a-bill-260608_7c762133.mp4",
    writeInPages: "/manus-storage/Apple-Siri-AI-write-in-Pages-260608_9035e533.mp4",
    appleWatch: "/manus-storage/Apple-Siri-AI-on-Apple-Watch-260608_3a494738.mp4",
  },
};

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
      <img src={SIRI_MEDIA.images.hero} alt="New Siri AI interface" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 30%" }} />
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

// Feature sections using official Apple images
const FEATURES = [
  {
    label: "Conversational AI",
    title: "Siri that actually understands you.",
    body: "The new Siri can follow multi-turn conversations, remember context from earlier in your session, and understand what you mean — not just what you say. Ask follow-up questions naturally, just like talking to a person.",
    img: SIRI_MEDIA.images.appChat,
    dark: true,
  },
  {
    label: "On-Device Privacy",
    title: "Your data stays on your device.",
    body: "Apple Intelligence processes your requests on-device using the A18 Pro chip. Your conversations, your photos, your messages — they never leave your iPhone. Private Cloud Compute handles complex requests without Apple ever seeing your data.",
    img: SIRI_MEDIA.images.personalContext,
    dark: false,
  },
  {
    label: "Spotlight Integration",
    title: "Siri works everywhere you search.",
    body: "Siri AI is now deeply integrated into Spotlight. Search your entire device, the web, and your apps in one place — with intelligent answers, not just links. Ask anything, get real results.",
    img: SIRI_MEDIA.images.spotlight,
    dark: true,
  },
  {
    label: "Cross-App Intelligence",
    title: "Siri works across every app.",
    body: "Ask Siri to find that photo from your trip last summer, then send it to a friend in Messages, then add a reminder about it — all in one continuous conversation. Siri now has deep access to every app on your iPhone.",
    img: SIRI_MEDIA.images.worldKnowledge,
    dark: false,
  },
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
                  <img src={feature.img} alt={feature.title} style={{ width: "100%", maxWidth: "480px", display: "block", borderRadius: "16px", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </RevealSection>
        );
      })}
    </>
  );
}

// Video demos section with Apple MP4 clips
function VideoDemos() {
  const ref = useScrollReveal({ threshold: 0.06 });
  const demos = [
    { title: "Dynamic Island Gesture", desc: "Interact with Siri through the Dynamic Island — a new way to access AI without interrupting your workflow.", src: SIRI_MEDIA.videos.dynamicIsland },
    { title: "Split a Bill", desc: "Ask Siri to split a bill with friends, calculate tips, and send payments — all in one conversation.", src: SIRI_MEDIA.videos.splitBill },
    { title: "Camera Intelligence", desc: "Point your camera at anything and ask Siri about it. Identify plants, translate menus, get nutritional info.", src: SIRI_MEDIA.videos.cameraMode },
    { title: "Write in Pages", desc: "Dictate, edit, and format documents using Siri inside Pages. Your words, your way.", src: SIRI_MEDIA.videos.writeInPages },
    { title: "Expressive Voices", desc: "Siri now speaks with natural intonation, emphasis, and emotion — making every interaction feel more human.", src: SIRI_MEDIA.videos.expressiveVoices },
    { title: "Siri on Apple Watch", desc: "The most powerful Siri yet, now on your wrist. Ask anything, get answers, take action — without your iPhone.", src: SIRI_MEDIA.videos.appleWatch },
  ];

  return (
    <section className="apple-section section-black" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p className="apple-eyebrow reveal" style={{ marginBottom: "16px", color: "#2997ff" }}>In Action</p>
          <h2 className="apple-headline reveal reveal-delay-1" style={{ color: "#f5f5f7" }}>See what Siri AI can do.</h2>
          <p className="apple-lead reveal reveal-delay-2" style={{ color: "rgba(245,245,247,0.6)", maxWidth: "560px", margin: "16px auto 0" }}>Official Apple demos from WWDC 2026.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
          {demos.map((demo, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${(i % 3) * 0.08}s`, borderRadius: "16px", overflow: "hidden", background: "#111" }}>
              <video
                src={demo.src}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }}
              />
              <div style={{ padding: "20px 24px" }}>
                <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.022em", marginBottom: "8px" }}>{demo.title}</h3>
                <p style={{ fontSize: "14px", color: "rgba(245,245,247,0.6)", lineHeight: 1.57 }}>{demo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Visual Intelligence section
function VisualIntelligence() {
  const ref = useScrollReveal({ threshold: 0.06 });
  return (
    <section className="apple-section section-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>Visual Intelligence</p>
          <h2 className="apple-headline reveal reveal-delay-1" style={{ color: "#1d1d1f" }}>See the world through Siri's eyes.</h2>
          <p className="apple-lead reveal reveal-delay-2" style={{ color: "#6e6e73", maxWidth: "560px", margin: "16px auto 0" }}>
            Point your camera at anything — a plant, a menu, a document — and Siri AI will tell you everything about it.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          <div className="reveal" style={{ overflow: "hidden" }}>
            <img src={SIRI_MEDIA.images.visualMac} alt="Siri AI Visual Intelligence on Mac" style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div style={{ padding: "24px 28px", background: "#fff" }}>
              <h3 style={{ fontSize: "19px", fontWeight: 600, color: "#1d1d1f", marginBottom: "8px" }}>On Mac</h3>
              <p style={{ fontSize: "14px", color: "#6e6e73", lineHeight: 1.57 }}>Visual Intelligence comes to macOS Golden Gate. Hover over any image, document, or screen element and ask Siri about it.</p>
            </div>
          </div>
          <div className="reveal reveal-delay-1" style={{ overflow: "hidden" }}>
            <img src={SIRI_MEDIA.images.visualIpad} alt="Siri AI Visual Intelligence on iPad" style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div style={{ padding: "24px 28px", background: "#fff" }}>
              <h3 style={{ fontSize: "19px", fontWeight: 600, color: "#1d1d1f", marginBottom: "8px" }}>On iPad</h3>
              <p style={{ fontSize: "14px", color: "#6e6e73", lineHeight: 1.57 }}>iPadOS 27 brings Visual Intelligence to the large screen. Perfect for research, studying, and creative work.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Screenshots gallery using official Apple images
function ScreenshotsGallery() {
  const ref = useScrollReveal({ threshold: 0.06 });
  const screenshots = [
    { src: SIRI_MEDIA.images.appChat, label: "Chat Interface" },
    { src: SIRI_MEDIA.images.askImages, label: "Ask About Images" },
    { src: SIRI_MEDIA.images.helpfulTips, label: "Helpful Tips" },
    { src: SIRI_MEDIA.images.conversationHistory, label: "Conversation History" },
    { src: SIRI_MEDIA.images.visionPro, label: "Vision Pro" },
  ];
  return (
    <section className="apple-section section-offwhite" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 className="apple-subheadline reveal" style={{ color: "#1d1d1f" }}>See Siri AI in action.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
          {screenshots.map((s, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <img src={s.src} alt={s.label} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", borderRadius: "10px" }} />
              <p style={{ fontSize: "12px", color: "#6e6e73", textAlign: "center", marginTop: "8px", letterSpacing: "-0.01em" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <section className="apple-section section-white" ref={ref as React.RefObject<HTMLElement>}>
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
            { label: "Apple Intelligence", href: "/apple-intelligence", img: SIRI_MEDIA.images.architecture },
            { label: "Parental Controls", href: "/parental-controls", img: SIRI_MEDIA.images.helpfulTips },
            { label: "iOS 27", href: "/ios-27", img: SIRI_MEDIA.images.spotlight },
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
      <VideoDemos />
      <VisualIntelligence />
      <CapabilitiesGrid />
      <ScreenshotsGallery />
      <Availability />
      <RelatedPages />
    </div>
  );
}
