/* =============================================================
   WWDC 2026 Page — Apple.com design language
   Full-bleed sections, alternating black/white, no emojis
   Built by Cory Hepler
   ============================================================= */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Footer from "../components/Footer";

const IMGS = {
  hero: "/manus-storage/wwdc26-techradar_44670303.jpg",
  timCook: "/manus-storage/tim-cook-wwdc26_adf55bac.png",
  siriAI: "/manus-storage/ios27-siri-ai-macrumors_9c505084.jpg",
  ios27: "/manus-storage/ios27-features_b971ec0e.jpg",
  macos: "/manus-storage/macos-golden-gate-macrumors_a351e6d8.jpg",
  appleIntel: "/manus-storage/apple-intelligence-overview_bfebb74e.png",
  parental: "/manus-storage/parental-controls-1_bc44df2a.png",
  wwdcStage: "/manus-storage/wwdc-keynote-stage_eaa33eea.jpg",
  wwdcPark: "/manus-storage/wwdc-apple-park_e3bfe199.jpg",
  siriWaitlist: "/manus-storage/siri-ai-waitlist_a27ae709.jpg",
  ios27official: "/manus-storage/ios27-official_890885e1.jpg",
  macosGG: "/manus-storage/macos-golden-gate_b41710ba.jpg",
};

function FadeSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="fade-in-up">{children}</div>;
}

const announcements = [
  {
    id: "siri-ai",
    label: "Siri AI",
    title: "Your AI assistant. More personal. More powerful.",
    body: "Siri AI is powered by Apple Intelligence and more helpful than ever. Ask open-ended questions, brainstorm ideas, and engage in natural back-and-forth conversations. A new dedicated Siri app brings all your conversations together across iPhone, iPad, Mac, Apple Watch, and Apple Vision Pro.",
    details: [
      "Natural conversational back-and-forth with memory across sessions",
      "Personal context — Siri finds photos, emails, and notes by description",
      "App actions in Messages, Music, Reminders, Camera, and more",
      "Visual Intelligence expands to iPad, Mac, and Apple Vision Pro",
      "Dedicated Siri app with pinned conversations synced via iCloud",
      "Write with Siri in any text field — drafts, feedback, style matching",
      "Customizable voice: pitch, speed, tone, and accent",
    ],
    img: IMGS.siriAI,
    href: "/siri-ai",
    cta: "Siri AI deep dive",
    dark: true,
  },
  {
    id: "ios27",
    label: "iOS 27",
    title: "Liquid Glass. Redesigned from the ground up.",
    body: "iOS 27 introduces the Liquid Glass design language — a new visual system that brings exceptional readability, uniform refraction, and improved contrast across every app and system interface. Combined with next-generation Apple Intelligence, iOS 27 is the most significant update in years.",
    details: [
      "Liquid Glass design language with improved refraction and contrast",
      "Apps launch up to 30% faster than iOS 26",
      "Photos load up to 70% faster after being taken",
      "AirDrop transfers up to 80% faster",
      "Rebuilt Spotlight, Photos, and Mail search engines",
      "Notify Me in Safari — monitor web pages for changes",
      "Messages one-tap suggestions for reminders and notes",
    ],
    img: IMGS.ios27,
    href: "/wwdc-2026#ios27",
    cta: "Explore iOS 27",
    dark: false,
  },
  {
    id: "macos",
    label: "macOS Golden Gate",
    title: "The Mac. Elevated by intelligence.",
    body: "macOS Golden Gate brings the full power of Siri AI and Apple Intelligence to the Mac. Visual Intelligence arrives on Mac for the first time, letting you search, ask questions, and take action using the content on your screen. Named after San Francisco's iconic landmark.",
    details: [
      "Siri AI integrated into Spotlight on Mac",
      "Visual Intelligence via keyboard shortcut — act on screen content",
      "Siri AI context menus — control-click any image or text",
      "Finder file transfers up to 5x faster with external drives",
      "New design refinements across all system apps",
      "Full Apple Intelligence integration across the platform",
      "AFM Cloud Pro — Gemini Frontier quality via Google partnership",
    ],
    img: IMGS.macos,
    href: "/wwdc-2026#macos",
    cta: "Explore macOS Golden Gate",
    dark: true,
  },
  {
    id: "parental",
    label: "Child Safety",
    title: "Features that are easy and intuitive to use.",
    body: "Apple announced the most comprehensive overhaul of parental controls in the company's history. New Screen Time schedules, expert-guided time allowances, age-based app filtering, and Communication Safety that now detects gore and violence in addition to nudity.",
    details: [
      "Child Accounts — one-tap setup with age-appropriate protections",
      "Setup Assistant — choose exactly which apps kids can access",
      "Ask to Browse — kids need parental approval for new websites",
      "Communication Safety now blocks gore and violent content",
      "Time Allowances for Entertainment, Games, and Social Media",
      "Daily Schedules — control app access by time of day",
      "Expert-backed daily time recommendations built in",
    ],
    img: IMGS.parental,
    href: "/parental-controls",
    cta: "Explore Parental Controls",
    dark: false,
  },
  {
    id: "ai",
    label: "Apple Intelligence",
    title: "Next-generation intelligence in every app.",
    body: "Apple Intelligence expands its reach across all platforms and apps. Second-generation Apple Foundation Models, next-generation photo editing with Spatial Reframing, AI writing tools in every text field, and Visual Intelligence now available on iPad, Mac, and Apple Vision Pro.",
    details: [
      "Second generation Apple Foundation Models (AFM)",
      "AFM understands speech, text, and images simultaneously",
      "Private Cloud Compute expanded — data never stored by Apple",
      "Spatial Reframing — AI adjusts photo composition after the fact",
      "Shot expansion — extend the edges of any photo",
      "Home app uses AI to analyze security camera clips",
      "Passwords app uses AI agents to fix insecure passwords automatically",
    ],
    img: IMGS.appleIntel,
    href: "/wwdc-2026#ai",
    cta: "Explore Apple Intelligence",
    dark: true,
  },
  {
    id: "timcook",
    label: "Tim Cook",
    title: "Tim Cook's final WWDC as CEO.",
    body: "Tim Cook delivered an emotional farewell message to developers at his last WWDC as Apple's chief executive. Cook steps down as CEO in September 2026, with John Ternus — Apple's hardware chief — set to take over. Cook will remain as Executive Chairman of Apple's board.",
    details: [
      "Cook praised developers for enriching people's lives",
      "John Ternus, hardware chief, becomes the new CEO in September 2026",
      "Cook remains as Executive Chairman of Apple's board",
      "Cook was not replaced on stage — Ternus not featured at WWDC",
      "Apple stock initially rose but slid during the keynote",
      "Cook's tenure spanned the iPhone, iPad, Apple Watch, and Apple Silicon eras",
      "The best is still ahead — Cook's final message to Apple developers",
    ],
    img: IMGS.timCook,
    href: "/wwdc-2026#timcook",
    cta: "Read the full story",
    dark: false,
  },
];

export default function WWDC() {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          overflow: "hidden",
          paddingBottom: "80px",
        }}
      >
        <img
          src={IMGS.hero}
          alt="WWDC 2026"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 22px",
            maxWidth: "780px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "16px",
            }}
          >
            Worldwide Developers Conference
          </div>
          <h1
            className="apple-headline-hero"
            style={{ color: "#f5f5f7", marginBottom: "20px" }}
          >
            WWDC 2026.
          </h1>
          <p
            className="apple-body-large"
            style={{ color: "rgba(255,255,255,0.7)", marginBottom: "16px" }}
          >
            Six platforms. Siri AI. Parental Controls. Apple Intelligence. Everything Apple announced at the biggest developer conference of the year.
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "-0.01em",
              marginBottom: "36px",
            }}
          >
            June 9, 2026 &mdash; Apple Park, Cupertino
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://www.apple.com/apple-events/"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-primary"
            >
              Watch the keynote
            </a>
            <Link href="/siri-ai">
              <span className="apple-btn-secondary-dark" style={{ cursor: "pointer" }}>
                Siri AI
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick Nav ── */}
      <section style={{ background: "#1d1d1f" }}>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.1)" }} />
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            padding: "0 22px",
            display: "flex",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {announcements.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                padding: "16px 20px",
                fontSize: "12px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                borderBottom: "2px solid transparent",
                transition: "color 0.2s ease, border-color 0.2s ease",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#f5f5f7";
                e.currentTarget.style.borderBottomColor = "#0071e3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                e.currentTarget.style.borderBottomColor = "transparent";
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.1)" }} />
      </section>

      {/* ── Announcement Sections ── */}
      {announcements.map((item, idx) => (
        <section
          key={item.id}
          id={item.id}
          style={{
            background: item.dark ? "#000" : "#ffffff",
            padding: "100px 0",
          }}
        >
          <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
            <FadeSection>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "60px",
                  alignItems: "center",
                }}
                className="feature-grid-responsive"
              >
                {/* Text — alternates left/right */}
                <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#0071e3",
                      marginBottom: "16px",
                    }}
                  >
                    {item.label}
                  </div>
                  <h2
                    className="apple-headline-section"
                    style={{
                      color: item.dark ? "#f5f5f7" : "#1d1d1f",
                      marginBottom: "20px",
                    }}
                  >
                    {item.title}
                  </h2>
                  <p
                    className="apple-body-large"
                    style={{
                      color: item.dark ? "rgba(255,255,255,0.65)" : "#6e6e73",
                      marginBottom: "28px",
                    }}
                  >
                    {item.body}
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0" }}>
                    {item.details.map((detail, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          padding: "10px 0",
                          borderTop: i === 0 ? `1px solid ${item.dark ? "rgba(255,255,255,0.1)" : "#d2d2d7"}` : "none",
                          borderBottom: `1px solid ${item.dark ? "rgba(255,255,255,0.1)" : "#d2d2d7"}`,
                        }}
                      >
                        <span
                          style={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            background: "#0071e3",
                            marginTop: "8px",
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color: item.dark ? "rgba(255,255,255,0.7)" : "#6e6e73",
                            lineHeight: 1.5,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {item.href.startsWith("/") && !item.href.includes("#") ? (
                    <Link href={item.href}>
                      <span className="apple-btn-primary" style={{ cursor: "pointer" }}>
                        {item.cta}
                      </span>
                    </Link>
                  ) : (
                    <a
                      href="https://www.apple.com/newsroom/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-btn-primary"
                    >
                      {item.cta}
                    </a>
                  )}
                </div>

                {/* Image */}
                <div
                  style={{
                    order: idx % 2 === 0 ? 1 : 0,
                    borderRadius: "18px",
                    overflow: "hidden",
                    aspectRatio: "4/5",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </FadeSection>
          </div>
        </section>
      ))}

      {/* ── Photo Gallery ── */}
      <section style={{ background: "#000", padding: "100px 0" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              From the Event
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "48px" }}
            >
              WWDC 2026 Photos
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2px",
              }}
              className="photo-grid-responsive"
            >
              {[IMGS.wwdcStage, IMGS.wwdcPark, IMGS.siriWaitlist, IMGS.ios27official, IMGS.macosGG, IMGS.timCook].map((src, i) => (
                <div
                  key={i}
                  style={{
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    borderRadius: i === 0 ? "18px 0 0 0" : i === 2 ? "0 18px 0 0" : i === 3 ? "0 0 0 18px" : i === 5 ? "0 0 18px 0" : "0",
                  }}
                >
                  <img
                    src={src}
                    alt={`WWDC 2026 photo ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── All Platforms ── */}
      <section style={{ background: "#1d1d1f", padding: "100px 0" }}>
        <FadeSection>
          <div
            style={{
              maxWidth: "980px",
              margin: "0 auto",
              padding: "0 22px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
              }}
            >
              All Platforms
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", marginBottom: "20px" }}
            >
              Every platform. Updated.
            </h2>
            <p
              className="apple-body-large"
              style={{ color: "rgba(255,255,255,0.6)", marginBottom: "60px" }}
            >
              iOS 27, macOS Golden Gate, iPadOS 27, watchOS 12, tvOS 27, and visionOS 3.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "18px",
                overflow: "hidden",
              }}
              className="platforms-grid-responsive"
            >
              {[
                { name: "iOS 27", sub: "iPhone" },
                { name: "iPadOS 27", sub: "iPad" },
                { name: "macOS Golden Gate", sub: "Mac" },
                { name: "watchOS 12", sub: "Apple Watch" },
                { name: "tvOS 27", sub: "Apple TV" },
                { name: "visionOS 3", sub: "Apple Vision Pro" },
              ].map((p) => (
                <div
                  key={p.name}
                  style={{
                    background: "#1d1d1f",
                    padding: "40px 24px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(16px, 2vw, 22px)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "#f5f5f7",
                      marginBottom: "6px",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {p.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── Sources ── */}
      <section style={{ background: "#000", padding: "60px 0" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "40px" }} />
          <div
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "16px",
            }}
          >
            Sources
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { label: "Apple Newsroom", href: "https://www.apple.com/newsroom/" },
              { label: "9to5Mac", href: "https://9to5mac.com" },
              { label: "MacRumors", href: "https://macrumors.com" },
              { label: "The Verge", href: "https://theverge.com" },
              { label: "TechRadar", href: "https://techradar.com" },
              { label: "CNBC", href: "https://cnbc.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "8px 16px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "980px",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  transition: "color 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#f5f5f7";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .feature-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .feature-grid-responsive > div {
            order: unset !important;
          }
          .platforms-grid-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .photo-grid-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .platforms-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
