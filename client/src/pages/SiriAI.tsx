/* =============================================================
   Siri AI Page — Apple.com design language
   Full-bleed sections, alternating black/white, no emojis
   Built by Cory Hepler
   ============================================================= */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Footer from "../components/Footer";

const IMGS = {
  hero: "/manus-storage/ios27-siri-ai-macrumors_9c505084.jpg",
  siriWaitlist: "/manus-storage/siri-ai-waitlist_a27ae709.jpg",
  appleIntel: "/manus-storage/apple-intelligence-overview_bfebb74e.png",
  ios27: "/manus-storage/ios27-features_b971ec0e.jpg",
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

const featureSections = [
  {
    label: "Conversations",
    title: "Natural conversations. Back and forth.",
    body: "Ask follow-up questions, change your mind mid-conversation, and get answers that build on what you said before. Siri AI remembers the context of your conversation so you never have to repeat yourself.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=85&auto=format&fit=crop",
    dark: true,
  },
  {
    label: "Personal Context",
    title: "Siri knows your world.",
    body: "Siri AI can search across your messages, emails, photos, notes, and calendar to find exactly what you are looking for. Describe a photo from three years ago and Siri will find it. Ask about a restaurant someone mentioned in a text and Siri will surface it.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=85&auto=format&fit=crop",
    dark: false,
  },
  {
    label: "Visual Intelligence",
    title: "Point. Ask. Act.",
    body: "Point your camera at anything in the real world and Siri AI will tell you what it is, give you more information, and let you take action. Available on iPhone, iPad, Mac, and Apple Vision Pro.",
    img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=900&q=85&auto=format&fit=crop",
    dark: true,
  },
  {
    label: "Writing Tools",
    title: "Write with Siri. Anywhere.",
    body: "Siri AI can write, rewrite, proofread, and summarize text in any app. Match the tone and style of what you have already written. Compose emails, messages, documents, and more with just a few words.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=85&auto=format&fit=crop",
    dark: false,
  },
];

const platforms = [
  { name: "iPhone", detail: "Available on iPhone 15 Pro and later with Apple Intelligence." },
  { name: "iPad", detail: "Available on iPad Pro M1 and later, and iPad Air M1 and later." },
  { name: "Mac", detail: "Available on all Apple Silicon Macs." },
  { name: "Apple Watch", detail: "Available on Apple Watch Series 9 and later." },
  { name: "Apple TV", detail: "Available on Apple TV 4K (3rd generation) and later." },
  { name: "Apple Vision Pro", detail: "Available on all Apple Vision Pro models." },
];

export default function SiriAI() {
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
          alt="Siri AI"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            opacity: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.92) 100%)",
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
            WWDC 2026
          </div>
          <h1
            className="apple-headline-hero"
            style={{ color: "#f5f5f7", marginBottom: "20px" }}
          >
            Siri AI.
          </h1>
          <p
            className="apple-body-large"
            style={{ color: "rgba(255,255,255,0.7)", marginBottom: "36px" }}
          >
            Your AI assistant. More personal. More powerful. More natural than ever before.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://www.apple.com/siri/"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-primary"
            >
              Apple.com Siri page
            </a>
            <Link href="/wwdc-2026">
              <span className="apple-btn-secondary-dark" style={{ cursor: "pointer" }}>
                Back to WWDC 2026
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section style={{ background: "#000", padding: "100px 0" }}>
        <FadeSection>
          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              padding: "0 22px",
              textAlign: "center",
            }}
          >
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", marginBottom: "20px" }}
            >
              A completely new Siri.
            </h2>
            <p
              className="apple-body-large"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Siri AI is powered by Apple Intelligence — Apple's personal intelligence system built into iPhone, iPad, and Mac. It understands you, your apps, and your world. And it does so with the privacy and security that only Apple can deliver.
            </p>
          </div>
        </FadeSection>
      </section>

      {/* ── Feature Sections ── */}
      {featureSections.map((feature, idx) => (
        <section
          key={idx}
          style={{
            background: feature.dark ? "#000" : "#ffffff",
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
                    {feature.label}
                  </div>
                  <h2
                    className="apple-headline-section"
                    style={{
                      color: feature.dark ? "#f5f5f7" : "#1d1d1f",
                      marginBottom: "20px",
                    }}
                  >
                    {feature.title}
                  </h2>
                  <p
                    className="apple-body-large"
                    style={{
                      color: feature.dark ? "rgba(255,255,255,0.65)" : "#6e6e73",
                    }}
                  >
                    {feature.body}
                  </p>
                </div>
                <div
                  style={{
                    order: idx % 2 === 0 ? 1 : 0,
                    borderRadius: "18px",
                    overflow: "hidden",
                    aspectRatio: "4/5",
                  }}
                >
                  <img
                    src={feature.img}
                    alt={feature.label}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </FadeSection>
          </div>
        </section>
      ))}

      {/* ── Dedicated Siri App ── */}
      <section style={{ background: "#1d1d1f", padding: "100px 0" }}>
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
              <div>
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
                  New in iOS 27
                </div>
                <h2
                  className="apple-headline-section"
                  style={{ color: "#f5f5f7", marginBottom: "20px" }}
                >
                  A dedicated Siri app.
                </h2>
                <p
                  className="apple-body-large"
                  style={{ color: "rgba(255,255,255,0.65)", marginBottom: "24px" }}
                >
                  For the first time, Siri has its own dedicated app. Open it to revisit past conversations, continue where you left off, or start a new one. Conversation history syncs privately across all your Apple devices via iCloud.
                </p>
                <p
                  style={{
                    fontSize: "17px",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "-0.022em",
                    lineHeight: 1.5,
                  }}
                >
                  Start a conversation on your Mac, continue it on your iPhone, and finish on your Apple Watch. Everything stays in sync, privately.
                </p>
              </div>
              <div
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  aspectRatio: "4/5",
                }}
              >
                <img
                  src={IMGS.siriWaitlist}
                  alt="Siri AI app"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── All Features ── */}
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
              Everything Siri AI can do
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "60px" }}
            >
              Built for every moment of your day.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "18px",
                overflow: "hidden",
              }}
              className="features-list-responsive"
            >
              {[
                { cat: "Conversations", items: ["Natural back-and-forth dialogue", "Context memory across sessions", "Follow-up questions", "Change your mind mid-conversation"] },
                { cat: "Personal Context", items: ["Search messages and emails", "Find photos by description", "Surface calendar events", "Locate notes and documents"] },
                { cat: "App Actions", items: ["Send messages and emails", "Set reminders and alarms", "Play music and podcasts", "Control smart home devices"] },
                { cat: "Writing Tools", items: ["Draft emails and messages", "Rewrite in different tones", "Proofread and summarize", "Match your writing style"] },
                { cat: "Visual Intelligence", items: ["Identify objects in camera", "Search what you see", "Take action on screen content", "Available on iPhone, iPad, Mac"] },
                { cat: "Privacy", items: ["On-device processing first", "Private Cloud Compute", "Data never stored by Apple", "No advertising profile built"] },
              ].map((group) => (
                <div
                  key={group.cat}
                  style={{
                    background: "#000",
                    padding: "36px 32px",
                  }}
                >
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
                    {group.cat}
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {group.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontSize: "15px",
                          color: "rgba(255,255,255,0.7)",
                          padding: "8px 0",
                          borderBottom: "1px solid rgba(255,255,255,0.08)",
                          letterSpacing: "-0.022em",
                          lineHeight: 1.4,
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Availability ── */}
      <section style={{ background: "#1d1d1f", padding: "100px 0" }}>
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
              Availability
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "20px" }}
            >
              Available on every Apple platform.
            </h2>
            <p
              className="apple-body-large"
              style={{ color: "rgba(255,255,255,0.6)", textAlign: "center", marginBottom: "60px" }}
            >
              Siri AI requires Apple Intelligence, available on devices with A17 Pro, M1, or later chips. Available in English first, with more languages coming in 2026.
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
              {platforms.map((p) => (
                <div
                  key={p.name}
                  style={{
                    background: "#1d1d1f",
                    padding: "36px 28px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "#f5f5f7",
                      marginBottom: "8px",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.5,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.detail}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "24px",
                padding: "20px 24px",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "6px",
                  letterSpacing: "0.02em",
                }}
              >
                Note
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.5,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                Siri AI will not be available in Europe or China at launch due to regulatory requirements. Developer beta is available now. Public release is expected in Fall 2026 alongside new iPhone hardware.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Privacy ── */}
      <section style={{ background: "#000", padding: "100px 0" }}>
        <FadeSection>
          <div
            style={{
              maxWidth: "680px",
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
              Privacy
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", marginBottom: "20px" }}
            >
              AI that protects your privacy.
            </h2>
            <p
              className="apple-body-large"
              style={{ color: "rgba(255,255,255,0.65)", marginBottom: "32px" }}
            >
              Siri AI processes requests on-device whenever possible. When server processing is required, Apple uses Private Cloud Compute — a system that ensures your data is never stored, logged, or used to train models. Apple cannot see your requests.
            </p>
            <a
              href="https://www.apple.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-primary"
            >
              Apple Privacy
            </a>
          </div>
        </FadeSection>
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
          .features-list-responsive {
            grid-template-columns: 1fr !important;
          }
          .platforms-grid-responsive {
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
