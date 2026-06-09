/* =============================================================
   Parental Controls Page — Apple.com design language
   Full-bleed sections, alternating black/white, no emojis
   Built by Cory Hepler
   ============================================================= */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Footer from "../components/Footer";

const IMGS = {
  hero: "/manus-storage/parental-controls-3_4cb3aaed.jpg",
  setup: "/manus-storage/parental-controls-1_bc44df2a.png",
  timeAllowance: "/manus-storage/parental-controls-2_11679b41.jpg",
  schedule: "/manus-storage/screen-time-schedule_68338638.jpg",
  childSafety: "/manus-storage/child-safety-apple_bc997a94.jpg",
  overview: "/manus-storage/parental-controls-4_58011541.png",
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
    label: "Child Accounts",
    title: "One setup. Everything protected.",
    body: "Set up a Child Account and instantly enable age-appropriate protections across iPhone, iPad, and Mac. The new Setup Assistant walks you through choosing exactly which apps your child can access from day one, with parental approval required for anything new.",
    img: IMGS.setup,
    dark: true,
  },
  {
    label: "Screen Time Schedules",
    title: "The right amount of time. At the right time.",
    body: "Create custom Screen Time schedules for school days, weekends, and homework time. Set different rules for different times of day — apps that are available during free time can be automatically restricted during school hours and bedtime.",
    img: IMGS.schedule,
    dark: false,
  },
  {
    label: "Time Allowances",
    title: "Expert-guided recommendations built in.",
    body: "New Time Allowances let you set daily limits for Entertainment, Games, and Social Media separately. Apple has partnered with child development experts to build recommended daily time limits directly into the setup flow — so you always have a trusted starting point.",
    img: IMGS.timeAllowance,
    dark: true,
  },
  {
    label: "Communication Safety",
    title: "Protection from harmful content.",
    body: "Communication Safety now detects nudity, gore, and violent content in Messages, FaceTime, AirDrop, and third-party apps. When sensitive content is detected, it is automatically blurred and children are given resources to talk to a trusted adult.",
    img: IMGS.childSafety,
    dark: false,
  },
];

const allFeatures = [
  {
    cat: "Setup",
    items: [
      "Child Accounts with one-tap age-appropriate protections",
      "Setup Assistant for choosing allowed apps",
      "Ask to Browse — parental approval for new websites",
      "Parental approval required for new app downloads",
    ],
  },
  {
    cat: "Screen Time",
    items: [
      "Custom schedules for school days and weekends",
      "Homework time mode with limited app access",
      "Bedtime mode with automatic restrictions",
      "Pause device use instantly from your iPhone",
    ],
  },
  {
    cat: "Time Allowances",
    items: [
      "Separate limits for Entertainment, Games, Social Media",
      "Expert-backed daily time recommendations by age",
      "Carry-over unused time to the next day",
      "Bonus time requests from child to parent",
    ],
  },
  {
    cat: "Communication Safety",
    items: [
      "Detects nudity in photos and videos",
      "Detects gore and violent content",
      "Works in Messages, FaceTime, and AirDrop",
      "Resources provided to talk to a trusted adult",
    ],
  },
  {
    cat: "Location",
    items: [
      "Find My location sharing with family",
      "Arrival and departure alerts",
      "Apple Watch For Your Kids — independence without an iPhone",
      "Location history for the past 24 hours",
    ],
  },
  {
    cat: "App Controls",
    items: [
      "Age-based app filtering by App Store rating",
      "Block specific apps or app categories",
      "Restrict in-app purchases",
      "Content restrictions for music, TV, and web",
    ],
  },
];

export default function ParentalControls() {
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
          alt="Parental Controls"
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
            WWDC 2026 — Child Safety
          </div>
          <h1
            className="apple-headline-hero"
            style={{ color: "#f5f5f7", marginBottom: "20px" }}
          >
            Parental Controls.
          </h1>
          <p
            className="apple-body-large"
            style={{ color: "rgba(255,255,255,0.7)", marginBottom: "36px" }}
          >
            Features that are easy and intuitive to use. The most powerful parental tools Apple has ever built.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://www.apple.com/child-safety/"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-primary"
            >
              Apple Child Safety page
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
              The biggest Screen Time overhaul ever.
            </h2>
            <p
              className="apple-body-large"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Apple has completely redesigned parental controls from the ground up. New Child Accounts, Screen Time schedules, expert-guided time allowances, and Communication Safety that now detects gore and violence — all in one place, easy to set up in minutes.
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

      {/* ── All Features ── */}
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
              Complete Feature List
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "60px" }}
            >
              Everything parents need.
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
              {allFeatures.map((group) => (
                <div
                  key={group.cat}
                  style={{
                    background: "#1d1d1f",
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

      {/* ── Apple Watch For Kids ── */}
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
              New Product
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", marginBottom: "20px" }}
            >
              Apple Watch For Your Kids.
            </h2>
            <p
              className="apple-body-large"
              style={{ color: "rgba(255,255,255,0.65)", marginBottom: "32px" }}
            >
              A new Apple Watch experience designed specifically for children. Kids get independence — they can make calls, send messages, and share their location with family — without needing an iPhone. Parents stay in control of who they can contact.
            </p>
            <a
              href="https://www.apple.com/apple-watch/"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-primary"
            >
              Learn about Apple Watch
            </a>
          </div>
        </FadeSection>
      </section>

      {/* ── How to Set Up ── */}
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
              Getting Started
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "60px" }}
            >
              Set up in minutes.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "18px",
                overflow: "hidden",
              }}
              className="steps-grid-responsive"
            >
              {[
                { step: "1", title: "Open Settings", body: "Go to Settings on your iPhone and tap Screen Time." },
                { step: "2", title: "Add Child", body: "Tap Set Up Screen Time for Family and add your child's Apple Account." },
                { step: "3", title: "Choose Apps", body: "The Setup Assistant walks you through which apps to allow." },
                { step: "4", title: "Set Schedules", body: "Create schedules for school, bedtime, and free time." },
              ].map((s) => (
                <div
                  key={s.step}
                  style={{
                    background: "#1d1d1f",
                    padding: "36px 24px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "40px",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      color: "rgba(255,255,255,0.15)",
                      marginBottom: "12px",
                      lineHeight: 1,
                    }}
                  >
                    {s.step}
                  </div>
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: 600,
                      letterSpacing: "-0.022em",
                      color: "#f5f5f7",
                      marginBottom: "8px",
                    }}
                  >
                    {s.title}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.5,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.body}
                  </div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Official WWDC 2026 Videos */}
      <section style={{ background: "#000", padding: "100px 0" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0071e3", marginBottom: "16px" }}>Official Video</div>
              <h2 className="apple-headline-section" style={{ color: "#f5f5f7", marginBottom: "20px" }}>Watch the WWDC 2026 Keynote</h2>
              <p style={{ fontSize: "17px", color: "rgba(245,245,247,0.65)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>See every Parental Controls and Screen Time announcement directly from Apple.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              <div style={{ borderRadius: "18px", overflow: "hidden", background: "#1d1d1f" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe src="https://www.youtube.com/embed/hF8swzNR1-o" title="WWDC 2026 Keynote" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <div style={{ fontSize: "12px", color: "#0071e3", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>Apple</div>
                  <div style={{ fontSize: "17px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.022em" }}>WWDC 2026 Keynote</div>
                  <div style={{ fontSize: "13px", color: "rgba(245,245,247,0.5)", marginTop: "6px" }}>Introducing Siri AI, Parental Controls, iOS 27 and more</div>
                </div>
              </div>
              <div style={{ borderRadius: "18px", overflow: "hidden", background: "#1d1d1f" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe src="https://www.youtube.com/embed/Uhc2-a_y9x4" title="WWDC 2026 in 13 Minutes" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <div style={{ fontSize: "12px", color: "#0071e3", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>Recap</div>
                  <div style={{ fontSize: "17px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.022em" }}>WWDC 2026 in 13 Minutes</div>
                  <div style={{ fontSize: "13px", color: "rgba(245,245,247,0.5)", marginTop: "6px" }}>Every announcement including Parental Controls and Screen Time</div>
                </div>
              </div>
              <div style={{ borderRadius: "18px", overflow: "hidden", background: "#1d1d1f" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe src="https://www.youtube.com/embed/yl2jsIoMfDU" title="WWDC26 Platforms State of the Union" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <div style={{ fontSize: "12px", color: "#0071e3", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>Developer</div>
                  <div style={{ fontSize: "17px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.022em" }}>Platforms State of the Union</div>
                  <div style={{ fontSize: "13px", color: "rgba(245,245,247,0.5)", marginTop: "6px" }}>Deep dive into Screen Time API and Family Controls</div>
                </div>
              </div>
            </div>
          </FadeSection>
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
          .features-list-responsive {
            grid-template-columns: 1fr !important;
          }
          .steps-grid-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .steps-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
