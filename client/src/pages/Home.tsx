/*
 * Home — Everything Apple
 * DESIGN.md: Fog (#f5f5f7) canvas, white cards 28px radius, no box-shadows
 * Typography: SF Pro Display 700 at 80-96px display, negative tracking
 * CTA: Azure (#0071e3) exclusively — sole permission-to-act color
 * Sections: fog/white alternating bands, no explicit dividers
 * Motion: 0.344s ease reveals, float animations on product images
 */

import { useRef } from "react";
import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";
import { IMGS } from "@/lib/imageManifest";
import ShareButton from "@/components/ShareButton";

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  const parallaxRef = useParallax(0.35);

  return (
    <section
      style={{
        position: "relative",
        background: "#f5f5f7",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingTop: "0",
      }}
    >
      {/* Full-bleed hero image with parallax */}
      <div
        ref={parallaxRef as React.RefObject<HTMLDivElement>}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/94533962/IrcmaAvABxPZOHvd.webp"
          alt="Golden Gate Bridge at dusk — Everything Apple"
          style={{
            width: "100%",
            height: "115%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
        {/* Gradient overlay — bottom-up so text is readable */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
        }} />
      </div>

      {/* Hero text — bottom-aligned like Apple.com product hero */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
          padding: "0 22px 80px",
          margin: "0 auto",
        }}
      >
        {/* Eyebrow */}
        <p style={{
          fontFamily: "var(--font-sf-pro-text, system-ui)",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.7)",
          marginBottom: "16px",
          animation: "fadeInUp 0.6s ease 0.1s both",
        }}>
          June 9, 2026 — WWDC 2026
        </p>

        {/* Display headline — 96px, weight 700, tracking -2.11px */}
        <h1
          style={{
            fontFamily: "var(--font-sf-pro-display, system-ui)",
            fontSize: "clamp(48px, 7.5vw, 88px)",
            fontWeight: 700,
            letterSpacing: "-2.11px",
            lineHeight: 1.04,
            color: "#ffffff",
            marginBottom: "20px",
            maxWidth: "700px",
            animation: "fadeInUp 0.6s ease 0.2s both",
          }}
        >
          Everything Apple<br />announced.
        </h1>

        {/* Subheading — 20px, weight 300 */}
        <p style={{
          fontFamily: "var(--font-sf-pro-text, system-ui)",
          fontSize: "clamp(17px, 2vw, 20px)",
          fontWeight: 300,
          letterSpacing: "-0.2px",
          lineHeight: 1.4,
          color: "rgba(255,255,255,0.8)",
          marginBottom: "32px",
          maxWidth: "520px",
          animation: "fadeInUp 0.6s ease 0.3s both",
        }}>
          Siri AI. Parental Controls. iOS 27. macOS Golden Gate.<br />
          The biggest Apple event of the year, covered in full.
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          alignItems: "center",
          animation: "fadeInUp 0.6s ease 0.4s both",
        }}>
          <Link href="/wwdc-2026">
            <span className="btn-primary" style={{ fontSize: "17px", padding: "12px 22px" }}>
              See all announcements
            </span>
          </Link>
          <Link href="/siri-ai">
            <span style={{
              fontFamily: "var(--font-sf-pro-text, system-ui)",
              fontSize: "17px",
              fontWeight: 400,
              letterSpacing: "-0.1px",
              color: "rgba(255,255,255,0.85)",
              paddingBottom: "2px",
              borderBottom: "1px solid rgba(255,255,255,0.4)",
              textDecoration: "none",
              transition: "border-color 0.1s ease, color 0.1s ease",
            }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#fff";
                (e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(255,255,255,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)";
                (e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(255,255,255,0.4)";
              }}
            >
              Siri AI deep dive
            </span>
          </Link>
          <ShareButton
            title="Everything Apple — WWDC 2026"
            text="Every Apple announcement from WWDC 2026 — iOS 27, Siri AI, macOS Golden Gate & more."
          />
        </div>
      </div>
    </section>
  );
}

// ─── Siri Spotlight — dark stage section ─────────────────────────────────────
function SiriSpotlight() {
  const ref = useScrollReveal({ threshold: 0.1 });
  return (
    <section
      className="section-dark section-pad-lg"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="page-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 3fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="feature-row-responsive"
        >
          {/* Text — left */}
          <div className="feature-text">
            <p className="t-eyebrow reveal" style={{ marginBottom: "16px" }}>Siri AI</p>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-sf-pro-display, system-ui)",
                fontSize: "clamp(40px, 5.5vw, 64px)",
                fontWeight: 700,
                letterSpacing: "-0.9px",
                lineHeight: 1.07,
                color: "#f5f5f7",
                marginBottom: "20px",
              }}
            >
              The new Siri.<br />Truly intelligent.
            </h2>
            <p
              className="reveal reveal-delay-2"
              style={{
                fontFamily: "var(--font-sf-pro-text, system-ui)",
                fontSize: "17px",
                fontWeight: 300,
                letterSpacing: "-0.1px",
                lineHeight: 1.47,
                color: "rgba(245,245,247,0.7)",
                marginBottom: "32px",
                maxWidth: "400px",
              }}
            >
              Powered by Apple Intelligence, the new Siri understands context, remembers your preferences, and can take action across every app on your iPhone.
            </p>
            <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/siri-ai">
                <span className="btn-primary" style={{ fontSize: "17px", padding: "12px 22px" }}>
                  Learn more
                </span>
              </Link>
              <Link href="/apple-intelligence">
                <span className="btn-dark" style={{ fontSize: "17px", padding: "12px 22px", border: "1px solid rgba(255,255,255,0.2)" }}>
                  Apple Intelligence
                </span>
              </Link>
            </div>
          </div>

          {/* Image — right, floating */}
          <div
            className="feature-img reveal-right"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={IMGS.siri.screen1}
              alt="Siri AI interface on iPhone"
              className="animate-float"
              style={{
                width: "100%",
                maxWidth: "380px",
                height: "auto",
                borderRadius: "28px",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── iOS 27 — fog section with white cards ────────────────────────────────────
function IOS27Section() {
  const ref = useScrollReveal({ threshold: 0.08 });
  const features = [
    { title: "Liquid Glass", body: "A new material that dynamically adapts to any background, bringing depth and translucency to every surface." },
    { title: "Dynamic Island 2.0", body: "Expanded to show more at a glance — Live Activities, notifications, and controls in a single gesture." },
    { title: "AI Photo Editing", body: "Clean Up, Generative Fill, and intelligent scene understanding built directly into Photos." },
    { title: "Smarter Widgets", body: "Widgets that update in real-time and respond to your context — location, time, and habits." },
  ];

  return (
    <section
      className="section-fog section-pad-lg"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="page-container">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="t-eyebrow reveal" style={{ marginBottom: "12px" }}>iOS 27</p>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-sf-pro-display, system-ui)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-0.9px",
              lineHeight: 1.07,
              color: "#1d1d1f",
              marginBottom: "16px",
            }}
          >
            Liquid Glass.<br />Redesigned from the ground up.
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontFamily: "var(--font-sf-pro-text, system-ui)",
              fontSize: "20px",
              fontWeight: 300,
              letterSpacing: "-0.2px",
              lineHeight: 1.4,
              color: "#707070",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            The most significant redesign in iPhone history. Available this fall.
          </p>
        </div>

        {/* 2-col feature layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: "10px",
            alignItems: "start",
          }}
          className="feature-row-responsive"
        >
          {/* Left: hero image */}
          <div className="reveal-zoom">
            <img
              src={IMGS.ios27.homeScreen1}
              alt="iOS 27 Liquid Glass home screen"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "28px",
                display: "block",
              }}
            />
          </div>

          {/* Right: feature cards stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`card reveal reveal-delay-${i + 1}`}
                style={{ padding: "28px" }}
              >
                <h3 style={{
                  fontFamily: "var(--font-sf-pro-display, system-ui)",
                  fontSize: "24px",
                  fontWeight: 600,
                  letterSpacing: "-0.36px",
                  lineHeight: 1.29,
                  color: "#1d1d1f",
                  marginBottom: "8px",
                }}>{f.title}</h3>
                <p style={{
                  fontFamily: "var(--font-sf-pro-text, system-ui)",
                  fontSize: "17px",
                  fontWeight: 400,
                  letterSpacing: "-0.1px",
                  lineHeight: 1.47,
                  color: "#707070",
                  margin: 0,
                }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="reveal" style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/ios-27">
            <span className="btn-primary" style={{ fontSize: "17px", padding: "12px 22px" }}>
              Explore iOS 27
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Parental Controls — white section ────────────────────────────────────────
function ParentalSection() {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <section
      className="section-snow section-pad-lg"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="page-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="feature-row-responsive"
        >
          {/* Image — left */}
          <div className="feature-img reveal-left" style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={IMGS.parental.screenTime}
              alt="Screen Time parental controls"
              className="animate-float-slow"
              style={{
                width: "100%",
                maxWidth: "420px",
                height: "auto",
                borderRadius: "28px",
                display: "block",
              }}
            />
          </div>

          {/* Text — right */}
          <div className="feature-text">
            <p className="t-eyebrow reveal" style={{ marginBottom: "16px" }}>Parental Controls</p>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-sf-pro-display, system-ui)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                letterSpacing: "-0.9px",
                lineHeight: 1.07,
                color: "#1d1d1f",
                marginBottom: "20px",
              }}
            >
              Your family.<br />Your rules.
            </h2>
            <p
              className="reveal reveal-delay-2"
              style={{
                fontFamily: "var(--font-sf-pro-text, system-ui)",
                fontSize: "17px",
                fontWeight: 400,
                letterSpacing: "-0.1px",
                lineHeight: 1.47,
                color: "#707070",
                marginBottom: "32px",
                maxWidth: "400px",
              }}
            >
              iOS 27 brings the most powerful parental controls ever — Screen Time scheduling, app limits, communication safety, and location sharing all in one place.
            </p>
            <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/parental-controls">
                <span className="btn-primary" style={{ fontSize: "17px", padding: "12px 22px" }}>
                  Learn more
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── iPhone 17 — dark stage with product finish gradients ────────────────────
function IPhone17Stage() {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: "linear-gradient(184deg, rgb(29,29,31) 0%, rgb(50,50,55) 40%, rgb(29,29,31) 100%)",
        padding: "120px 0",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div className="page-container">
        <p className="t-eyebrow reveal" style={{ marginBottom: "12px", color: "rgba(245,245,247,0.6)" }}>iPhone 17</p>
        <h2
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "var(--font-sf-pro-display, system-ui)",
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 700,
            letterSpacing: "-0.9px",
            lineHeight: 1.07,
            color: "#f5f5f7",
            marginBottom: "16px",
          }}
        >
          The thinnest iPhone ever.
        </h2>
        <p
          className="reveal reveal-delay-2"
          style={{
            fontFamily: "var(--font-sf-pro-text, system-ui)",
            fontSize: "20px",
            fontWeight: 300,
            letterSpacing: "-0.2px",
            lineHeight: 1.4,
            color: "rgba(245,245,247,0.7)",
            marginBottom: "48px",
          }}
        >
          5.5mm. A19 Pro chip. Camera Control. Starting at $799.
        </p>

        {/* Product image — full bleed, floating */}
        <div className="reveal-zoom" style={{ marginBottom: "48px" }}>
          <img
            src={IMGS.iphone17.pro1}
            alt="iPhone 17 Pro"
            className="animate-float"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              display: "block",
              margin: "0 auto",
              borderRadius: "28px",
            }}
          />
        </div>

        {/* Color swatches */}
        <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "40px" }}>
          {[
            { color: "#e3e4e5", label: "Silver" },
            { color: "#e8d0d0", label: "Blush" },
            { color: "#dddc8c", label: "Citrus" },
            { color: "#596680", label: "Indigo" },
          ].map((s) => (
            <div
              key={s.label}
              title={s.label}
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "999px",
                background: s.color,
                border: "2px solid rgba(255,255,255,0.3)",
                cursor: "pointer",
                transition: "transform 0.1s ease, border-color 0.1s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.15)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
              }}
            />
          ))}
        </div>

        <div className="reveal reveal-delay-4" style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/iphones">
            <span className="btn-primary" style={{ fontSize: "17px", padding: "12px 22px" }}>
              Buy iPhone 17
            </span>
          </Link>
          <Link href="/iphones">
            <span className="btn-dark" style={{ fontSize: "17px", padding: "12px 22px", border: "1px solid rgba(255,255,255,0.2)" }}>
              Learn more
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── WWDC Highlights — fog section with white cards ───────────────────────────
function WWDCHighlights() {
  const ref = useScrollReveal({ threshold: 0.06 });
  const highlights = [
    {
      label: "WWDC 2026",
      title: "Every announcement, in one place.",
      body: "iOS 27, macOS Golden Gate, watchOS 12, visionOS 3, and the new Siri — everything from the keynote.",
      href: "/wwdc-2026",
      img: IMGS.wwdc.appleParkStage,
    },
    {
      label: "macOS Golden Gate",
      title: "Mac gets Liquid Glass.",
      body: "macOS Golden Gate brings the iOS 27 design language to the Mac, with a completely redesigned menu bar and system UI.",
      href: "/macos-golden-gate",
      img: IMGS.macos.screen1,
    },
    {
      label: "Apple Intelligence",
      title: "AI that knows you.",
      body: "Writing tools, image generation, priority notifications, and a smarter Siri — all on-device, all private.",
      href: "/apple-intelligence",
      img: IMGS.intelligence.overview,
    },
  ];

  return (
    <section
      className="section-fog section-pad-lg"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="page-container">
        <div style={{ marginBottom: "48px" }}>
          <p className="t-eyebrow reveal" style={{ marginBottom: "12px" }}>WWDC 2026</p>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-sf-pro-display, system-ui)",
              fontSize: "clamp(32px, 4.5vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.6px",
              lineHeight: 1.1,
              color: "#1d1d1f",
            }}
          >
            The biggest Apple event of the year.
          </h2>
        </div>

        {/* 3-col card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
          }}
          className="mobile-single-col"
        >
          {highlights.map((h, i) => (
            <Link key={h.href} href={h.href}>
              <div
                className={`card reveal reveal-delay-${i + 1}`}
                style={{
                  padding: 0,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.344s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <img
                  src={h.img}
                  alt={h.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "24px" }}>
                  <p style={{
                    fontFamily: "var(--font-sf-pro-text, system-ui)",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#0071e3",
                    marginBottom: "8px",
                  }}>{h.label}</p>
                  <h3 style={{
                    fontFamily: "var(--font-sf-pro-display, system-ui)",
                    fontSize: "24px",
                    fontWeight: 600,
                    letterSpacing: "-0.36px",
                    lineHeight: 1.29,
                    color: "#1d1d1f",
                    marginBottom: "8px",
                  }}>{h.title}</h3>
                  <p style={{
                    fontFamily: "var(--font-sf-pro-text, system-ui)",
                    fontSize: "17px",
                    fontWeight: 400,
                    letterSpacing: "-0.1px",
                    lineHeight: 1.47,
                    color: "#707070",
                    margin: 0,
                  }}>{h.body}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Jailbreak + Sideload — white section, 2-col cards ───────────────────────
function JailbreakTeaser() {
  const ref = useScrollReveal({ threshold: 0.06 });
  return (
    <section
      className="section-snow section-pad"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="page-container">
        <div style={{ marginBottom: "48px" }}>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-sf-pro-display, system-ui)",
              fontSize: "clamp(32px, 4.5vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.6px",
              lineHeight: 1.1,
              color: "#1d1d1f",
            }}
          >
            Beyond the App Store.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
          }}
          className="mobile-single-col"
        >
          {/* Jailbreak card */}
          <Link href="/jailbreak">
            <div
              className="card-fog reveal"
              style={{
                padding: "40px 32px",
                cursor: "pointer",
                transition: "transform 0.344s ease",
                height: "100%",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <p style={{
                fontFamily: "var(--font-sf-pro-text, system-ui)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#0071e3",
                marginBottom: "12px",
              }}>Jailbreak</p>
              <h3 style={{
                fontFamily: "var(--font-sf-pro-display, system-ui)",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.6px",
                lineHeight: 1.1,
                color: "#1d1d1f",
                marginBottom: "12px",
              }}>iOS 27<br />jailbreak status</h3>
              <p style={{
                fontFamily: "var(--font-sf-pro-text, system-ui)",
                fontSize: "17px",
                fontWeight: 400,
                letterSpacing: "-0.1px",
                lineHeight: 1.47,
                color: "#707070",
                marginBottom: "24px",
              }}>Dopamine, Palera1n, and every tool — updated daily.</p>
              <span style={{
                fontFamily: "var(--font-sf-pro-text, system-ui)",
                fontSize: "17px",
                fontWeight: 400,
                color: "#0066cc",
                letterSpacing: "-0.1px",
              }}>Check status ›</span>
            </div>
          </Link>

          {/* Sideloading card */}
          <Link href="/sideloading">
            <div
              className="card-dark reveal reveal-delay-1"
              style={{
                padding: "40px 32px",
                cursor: "pointer",
                transition: "transform 0.344s ease",
                height: "100%",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <p style={{
                fontFamily: "var(--font-sf-pro-text, system-ui)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(245,245,247,0.5)",
                marginBottom: "12px",
              }}>Sideloading</p>
              <h3 style={{
                fontFamily: "var(--font-sf-pro-display, system-ui)",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.6px",
                lineHeight: 1.1,
                color: "#f5f5f7",
                marginBottom: "12px",
              }}>Install any app without the App Store</h3>
              <p style={{
                fontFamily: "var(--font-sf-pro-text, system-ui)",
                fontSize: "17px",
                fontWeight: 400,
                letterSpacing: "-0.1px",
                lineHeight: 1.47,
                color: "rgba(245,245,247,0.6)",
                marginBottom: "24px",
              }}>AltStore, Sideloadly, TrollStore — complete guides.</p>
              <span style={{
                fontFamily: "var(--font-sf-pro-text, system-ui)",
                fontSize: "17px",
                fontWeight: 400,
                color: "rgba(245,245,247,0.7)",
                letterSpacing: "-0.1px",
              }}>Read guide ›</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Compare Phones — fog section ────────────────────────────────────────────
function CompareTeaser() {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <section
      className="section-fog section-pad"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="page-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 3fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="feature-row-responsive"
        >
          {/* Text */}
          <div className="feature-text">
            <p className="t-eyebrow reveal" style={{ marginBottom: "16px" }}>Compare</p>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-sf-pro-display, system-ui)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                letterSpacing: "-0.9px",
                lineHeight: 1.07,
                color: "#1d1d1f",
                marginBottom: "20px",
              }}
            >
              iPhone vs.<br />the world.
            </h2>
            <p
              className="reveal reveal-delay-2"
              style={{
                fontFamily: "var(--font-sf-pro-text, system-ui)",
                fontSize: "17px",
                fontWeight: 400,
                letterSpacing: "-0.1px",
                lineHeight: 1.47,
                color: "#707070",
                marginBottom: "32px",
                maxWidth: "380px",
              }}
            >
              Compare iPhone 17 Pro against Samsung, Google, Nothing, OPPO, and OnePlus — specs, price, and camera in one interactive table.
            </p>
            <div className="reveal reveal-delay-3">
              <Link href="/compare">
                <span className="btn-primary" style={{ fontSize: "17px", padding: "12px 22px" }}>
                  Compare phones
                </span>
              </Link>
            </div>
          </div>

          {/* Stacked phone images */}
          <div
            className="feature-img reveal-right"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
              alignItems: "end",
            }}
          >
            <img
              src={IMGS.iphone17.pro1}
              alt="iPhone 17 Pro"
              style={{ width: "100%", height: "auto", borderRadius: "20px", display: "block" }}
            />
            <img
              src={IMGS.iphone17.pro2}
              alt="iPhone 17 Pro"
              style={{ width: "100%", height: "auto", borderRadius: "20px", display: "block", transform: "translateY(-20px)" }}
            />
            <img
              src={IMGS.iphone17.pro3}
              alt="iPhone 17 Pro"
              style={{ width: "100%", height: "auto", borderRadius: "20px", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Explore More — white section, 4-col grid ────────────────────────────────
function ExploreGrid() {
  const ref = useScrollReveal({ threshold: 0.06 });
  const pages = [
    { label: "macOS Golden Gate", href: "/macos-golden-gate", img: IMGS.macos.screen1 },
    { label: "Apple Silicon", href: "/apple-silicon", img: IMGS.silicon.m4chip1 },
    { label: "watchOS 12", href: "/watchos-12", img: IMGS.watchKids.screen2 },
    { label: "Gallery", href: "/gallery", img: IMGS.places.applePark1 },
    { label: "Community", href: "/community", img: IMGS.places.appleStore1 },
    { label: "iPhone History", href: "/iphone-timeline", img: IMGS.iphone16.proMax1 },
    { label: "Phone Comparison", href: "/compare", img: IMGS.iphone17.pro1 },
    { label: "Jailbreak", href: "/jailbreak", img: IMGS.ios27.homeScreen2 },
    { label: "Sideloading", href: "/sideloading", img: IMGS.iphone17.pro2 },
  ];

  return (
    <section
      className="section-snow section-pad-lg"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="page-container">
        <div style={{ marginBottom: "48px", textAlign: "center" }}>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-sf-pro-display, system-ui)",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              letterSpacing: "-0.6px",
              lineHeight: 1.17,
              color: "#1d1d1f",
            }}
          >
            Explore everything.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
          className="mobile-two-col"
        >
          {pages.map((page, i) => (
            <Link key={page.href} href={page.href}>
              <div
                className={`card-fog reveal reveal-delay-${(i % 4) + 1}`}
                style={{
                  padding: 0,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.344s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <img
                  src={page.img}
                  alt={page.label}
                  style={{ width: "100%", height: "160px", objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "16px 20px 20px" }}>
                  <p style={{
                    fontFamily: "var(--font-sf-pro-display, system-ui)",
                    fontSize: "17px",
                    fontWeight: 600,
                    letterSpacing: "-0.1px",
                    color: "#1d1d1f",
                    margin: 0,
                  }}>{page.label}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Home page footer removed — using global Footer component from App.tsx

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <SiriSpotlight />
      <IOS27Section />
      <ParentalSection />
      <IPhone17Stage />
      <WWDCHighlights />
      <JailbreakTeaser />
      <CompareTeaser />
      <ExploreGrid />
    </>
  );
}
