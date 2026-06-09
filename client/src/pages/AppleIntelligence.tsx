/* =============================================================
   Apple Intelligence Page — Everything Apple
   Full coverage of Apple Intelligence from WWDC 2026.
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

const CATEGORIES = [
  {
    title: "Writing Tools",
    dark: false,
    img: IMGS.intelligence.writing1,
    features: [
      { name: "Rewrite", desc: "Change the tone of any text — casual, professional, friendly, or concise — with one tap." },
      { name: "Proofread", desc: "Fix grammar, spelling, and clarity issues across any app on iPhone, iPad, and Mac." },
      { name: "Summarize", desc: "Get the key points from any email, article, document, or web page instantly." },
      { name: "Smart Reply", desc: "Contextually aware reply suggestions in Mail and Messages based on the full conversation." },
    ],
  },
  {
    title: "Image Intelligence",
    dark: true,
    img: IMGS.intelligence.writing2,
    features: [
      { name: "Image Playground", desc: "Generate custom images in seconds from text descriptions. New styles include illustration, animation, and photorealistic." },
      { name: "Genmoji", desc: "Create a custom emoji of anyone — yourself, your friends, your pets — from a text description or photo." },
      { name: "Photo Cleanup", desc: "Remove unwanted objects from photos with AI that understands context and fills in the background naturally." },
      { name: "Spatial Reframing", desc: "AI adjusts the composition of any photo after the fact — straighten horizons, reframe subjects, extend edges." },
    ],
  },
  {
    title: "Siri AI Integration",
    dark: false,
    img: IMGS.intelligence.features1,
    features: [
      { name: "Personal Context", desc: "Siri AI can search your photos, emails, messages, and notes using natural language descriptions." },
      { name: "App Actions", desc: "Siri can take actions inside any app — not just built-in Apple apps. Third-party developers can integrate Siri AI." },
      { name: "On-Screen Awareness", desc: "Siri sees what is on your screen and can answer questions or take action based on the content." },
      { name: "Conversational Memory", desc: "Siri remembers context from previous conversations so you never have to repeat yourself." },
    ],
  },
  {
    title: "Notification Intelligence",
    dark: true,
    img: IMGS.intelligence.features2,
    features: [
      { name: "Priority Notifications", desc: "AI ranks your notifications by importance and surfaces the ones that need your attention first." },
      { name: "Notification Summaries", desc: "Groups of notifications from the same app are summarized into a single, readable sentence." },
      { name: "Focus Filters", desc: "Apple Intelligence learns your Focus modes and automatically suggests new filters based on your behavior." },
      { name: "Reduce Interruptions", desc: "A new Focus mode powered by AI that only allows truly urgent notifications to break through." },
    ],
  },
];

export default function AppleIntelligence() {
  return (
    <div>

      {/* Hero */}
      <section style={{ background: "#000", padding: "120px 0 100px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "16px" }}>Apple Intelligence</p>
            <h1 className="apple-headline-hero" style={{ color: "#f5f5f7", marginBottom: "24px" }}>AI that is built<br />for you. Private<br />by design.</h1>
            <p style={{ fontSize: "21px", color: "rgba(245,245,247,0.7)", lineHeight: 1.55, marginBottom: "40px" }}>
              Apple Intelligence is the personal intelligence system that understands you. It uses on-device processing to keep your data private — and when it needs more power, Private Cloud Compute handles it without Apple ever seeing your data.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#features" style={{ display: "inline-block", background: "#0071e3", color: "#fff", padding: "14px 28px", borderRadius: "980px", fontSize: "17px", fontWeight: 500, textDecoration: "none" }}>Explore features</a>
              <a href="#privacy" style={{ display: "inline-block", color: "rgba(255,255,255,0.8)", padding: "14px 0", fontSize: "17px", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)" }}>Privacy architecture</a>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={150}>
          <div style={{ maxWidth: "1000px", margin: "80px auto 0", padding: "0 22px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
            {[IMGS.intelligence.writing1, IMGS.intelligence.writing3, IMGS.intelligence.features1, IMGS.intelligence.features3].map((src, i) => (
              <div key={i} style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "3/4", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}>
                <img src={src} alt={`Apple Intelligence ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Overview */}
      <section style={{ background: "#fff", padding: "100px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 22px", textAlign: "center" }}>
          <FadeIn>
            <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "24px" }}>What is Apple Intelligence?</h2>
            <p style={{ fontSize: "19px", color: "#6e6e73", lineHeight: 1.65, marginBottom: "20px" }}>
              Apple Intelligence is not a single feature. It is a platform — a set of AI capabilities built into iOS 27, iPadOS 27, and macOS Golden Gate that work together to make your devices smarter and more useful.
            </p>
            <p style={{ fontSize: "17px", color: "#6e6e73", lineHeight: 1.65, marginBottom: "20px" }}>
              Unlike cloud-based AI services, Apple Intelligence runs primarily on your device. The Apple Neural Engine in every A17 Pro, A18, and M-series chip is purpose-built for this kind of on-device AI processing.
            </p>
            <p style={{ fontSize: "17px", color: "#6e6e73", lineHeight: 1.65 }}>
              For tasks that require more compute, Apple uses Private Cloud Compute — a system where your request is processed on Apple servers using hardware that Apple cannot access, and the data is never stored or used for training.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Feature categories */}
      <div id="features">
        {CATEGORIES.map((cat, idx) => (
          <section key={cat.title} style={{ background: cat.dark ? "#000" : "#f5f5f7", padding: "100px 0" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="feature-grid-responsive">
                <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                  <FadeIn>
                    <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "12px" }}>{cat.title}</p>
                    <h2 className="apple-headline-section" style={{ color: cat.dark ? "#f5f5f7" : "#1d1d1f", marginBottom: "32px" }}>{cat.title}</h2>
                    <div style={{ display: "grid", gap: "20px" }}>
                      {cat.features.map(f => (
                        <div key={f.name} style={{ borderLeft: "2px solid #0071e3", paddingLeft: "16px" }}>
                          <h3 style={{ fontSize: "17px", fontWeight: 700, color: cat.dark ? "#f5f5f7" : "#1d1d1f", marginBottom: "6px" }}>{f.name}</h3>
                          <p style={{ fontSize: "15px", color: cat.dark ? "rgba(245,245,247,0.55)" : "#6e6e73", lineHeight: 1.6 }}>{f.desc}</p>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                </div>
                <div style={{ order: idx % 2 === 0 ? 1 : 0 }}>
                  <FadeIn delay={100}>
                    <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: cat.dark ? "0 20px 60px rgba(0,0,0,0.5)" : "0 20px 60px rgba(0,0,0,0.1)" }}>
                      <img src={cat.img} alt={cat.title} style={{ width: "100%", objectFit: "cover", display: "block", maxHeight: "500px" }} />
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Privacy section */}
      <section id="privacy" style={{ background: "#1d1d1f", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "12px" }}>Privacy</p>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", marginBottom: "16px" }}>Your data stays yours.</h2>
            <p style={{ fontSize: "19px", color: "rgba(245,245,247,0.65)", marginBottom: "60px", maxWidth: "700px" }}>
              Apple Intelligence is built on a foundation of privacy. Most processing happens on your device. When it needs the cloud, Private Cloud Compute ensures Apple cannot see your data.
            </p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2px" }}>
            {[
              { title: "On-Device Processing", desc: "The vast majority of Apple Intelligence features run entirely on your device using the Apple Neural Engine. Your data never leaves your iPhone, iPad, or Mac." },
              { title: "Private Cloud Compute", desc: "For complex requests that need more compute, Apple uses Private Cloud Compute — servers that process your request without storing it or making it accessible to Apple." },
              { title: "No Data Collection", desc: "Apple does not use your personal data to train Apple Intelligence models. Your requests are not logged, stored, or analyzed by Apple." },
              { title: "Opt-In ChatGPT", desc: "ChatGPT integration is entirely opt-in. You are always asked before your request is sent to OpenAI, and you can disable it entirely in Settings." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 60}>
                <div style={{ background: "#000", padding: "40px 28px" }}>
                  <h3 style={{ fontSize: "19px", fontWeight: 700, color: "#f5f5f7", marginBottom: "12px" }}>{item.title}</h3>
                  <p style={{ fontSize: "15px", color: "rgba(245,245,247,0.55)", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Device support */}
      <section style={{ background: "#fff", padding: "100px 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "8px" }}>Device Support</p>
            <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "16px" }}>Which devices support Apple Intelligence?</h2>
            <p style={{ fontSize: "17px", color: "#6e6e73", marginBottom: "40px" }}>Apple Intelligence requires an A17 Pro chip or later on iPhone, any M-series chip on iPad and Mac.</p>
          </FadeIn>
          <FadeIn delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              {[
                { device: "iPhone 15 Pro", note: "A17 Pro" },
                { device: "iPhone 15 Pro Max", note: "A17 Pro" },
                { device: "iPhone 16 / Plus", note: "A18" },
                { device: "iPhone 16 Pro / Max", note: "A18 Pro" },
                { device: "iPhone 17 / Plus", note: "A19" },
                { device: "iPhone 17 Pro / Max", note: "A19 Pro" },
                { device: "iPhone Air", note: "A18" },
                { device: "iPad Pro (M1+)", note: "M1 or later" },
                { device: "iPad Air (M1+)", note: "M1 or later" },
                { device: "All Apple Silicon Macs", note: "M1 or later" },
              ].map((item, i) => (
                <div key={item.device} style={{ background: "#f5f5f7", borderRadius: "14px", padding: "20px" }}>
                  <p style={{ fontSize: "15px", fontWeight: 600, color: "#1d1d1f", marginBottom: "4px" }}>{item.device}</p>
                  <p style={{ fontSize: "13px", color: "#6e6e73" }}>{item.note}</p>
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
            {[{ label: "Siri AI", href: "/siri-ai" }, { label: "iOS 27", href: "/ios-27" }, { label: "macOS Golden Gate", href: "/macos-golden-gate" }, { label: "Parental Controls", href: "/parental-controls" }, { label: "Full WWDC 2026 Coverage", href: "/wwdc-2026" }].map(link => (
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

      {/* Official WWDC 2026 Videos */}
      <section style={{ background: "#000", padding: "100px 0" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0071e3", marginBottom: "16px" }}>Official Video</div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#f5f5f7", marginBottom: "20px", lineHeight: 1.05 }}>Watch the WWDC 2026 Keynote</h2>
            <p style={{ fontSize: "17px", color: "rgba(245,245,247,0.65)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>See every Apple Intelligence announcement directly from the source.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div style={{ borderRadius: "18px", overflow: "hidden", background: "#1d1d1f" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe src="https://www.youtube.com/embed/hF8swzNR1-o" title="WWDC 2026 Keynote" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
              </div>
              <div style={{ padding: "20px 24px" }}>
                <div style={{ fontSize: "12px", color: "#0071e3", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>Apple</div>
                <div style={{ fontSize: "17px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.022em" }}>WWDC 2026 Keynote</div>
                <div style={{ fontSize: "13px", color: "rgba(245,245,247,0.5)", marginTop: "6px" }}>Introducing Siri AI and Apple Intelligence</div>
              </div>
            </div>
            <div style={{ borderRadius: "18px", overflow: "hidden", background: "#1d1d1f" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe src="https://www.youtube.com/embed/wpBgdV0hx0w" title="WWDC 2026 Everything Apple Announced" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
              </div>
              <div style={{ padding: "20px 24px" }}>
                <div style={{ fontSize: "12px", color: "#0071e3", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>Full Recap</div>
                <div style={{ fontSize: "17px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.022em" }}>Everything Apple Announced</div>
                <div style={{ fontSize: "13px", color: "rgba(245,245,247,0.5)", marginTop: "6px" }}>New Siri AI, Apple Intelligence, iOS 27 and more</div>
              </div>
            </div>
            <div style={{ borderRadius: "18px", overflow: "hidden", background: "#1d1d1f" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe src="https://www.youtube.com/embed/yl2jsIoMfDU" title="WWDC26 Platforms State of the Union" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
              </div>
              <div style={{ padding: "20px 24px" }}>
                <div style={{ fontSize: "12px", color: "#0071e3", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>Developer</div>
                <div style={{ fontSize: "17px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.022em" }}>Platforms State of the Union</div>
                <div style={{ fontSize: "13px", color: "rgba(245,245,247,0.5)", marginTop: "6px" }}>Deep technical dive into Apple Intelligence APIs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
