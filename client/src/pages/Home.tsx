/* =============================================================
   Home Page — Apple.com design language
   - Full-bleed hero with cinematic image
   - Alternating black/white sections
   - SF Pro typography, no emojis
   - Apple-style news grid, product previews
   Built by Cory Hepler
   ============================================================= */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Footer from "../components/Footer";

// Unsplash images (high quality, Apple-relevant)
const HERO_BG = "https://images.unsplash.com/photo-1591815302525-756a9bcc3425?w=1800&q=90&auto=format&fit=crop";
const SIRI_IMG = "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=85&auto=format&fit=crop";
const PARENTAL_IMG = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=85&auto=format&fit=crop";
const IPHONE_IMG = "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=900&q=85&auto=format&fit=crop";
const WWDC_STAGE = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=85&auto=format&fit=crop";
const JAILBREAK_IMG = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=85&auto=format&fit=crop";
const COMMUNITY_IMG = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=85&auto=format&fit=crop";

const tickerItems = [
  "WWDC 2026 — Siri AI announced with dedicated app and conversational intelligence",
  "iOS 27 introduces Liquid Glass design language across all platforms",
  "macOS Golden Gate revealed with new Siri AI integration",
  "Parental Controls overhaul — Screen Time schedules, age-based app filtering",
  "Apple Intelligence expands to iPad, Mac, and Apple Vision Pro",
  "Visual Intelligence now available in iPhone Camera with Siri mode",
  "iPhone 17 Pro available in new Cosmic Orange and Deep Blue colors",
  "Apple Watch For Your Kids announced — independence without an iPhone",
];

function useFadeInUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

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
  return (
    <div ref={ref} className="fade-in-up">
      {children}
    </div>
  );
}

export default function Home() {
  const heroRef = useFadeInUp();

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>

      {/* ── Breaking News Ticker ── */}
      <div className="apple-ticker-wrap" style={{ marginTop: 0 }}>
        <div className="apple-ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: "11px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.02em",
              }}
            >
              <span style={{ color: "#0071e3", fontWeight: 600, marginRight: "8px" }}>
                WWDC 2026
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100svh",
          background: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          overflow: "hidden",
          paddingBottom: "80px",
        }}
      >
        {/* Background image */}
        <img
          src={HERO_BG}
          alt="WWDC 2026"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            opacity: 0.55,
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.85) 100%)",
          }}
        />

        {/* Hero text */}
        <div
          ref={heroRef}
          className="fade-in-up visible"
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
              color: "rgba(255,255,255,0.6)",
              marginBottom: "16px",
            }}
          >
            June 9, 2026
          </div>
          <h1
            className="apple-headline-hero"
            style={{ color: "#f5f5f7", marginBottom: "20px" }}
          >
            WWDC 2026.
            <br />
            Everything, announced.
          </h1>
          <p
            className="apple-body-large"
            style={{ color: "rgba(255,255,255,0.7)", marginBottom: "36px", maxWidth: "560px", margin: "0 auto 36px" }}
          >
            Siri AI. Parental Controls. iOS 27. macOS Golden Gate. The biggest Apple event of the year, covered in full.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/wwdc-2026">
              <span className="apple-btn-primary" style={{ cursor: "pointer" }}>
                See all announcements
              </span>
            </Link>
            <Link href="/siri-ai">
              <span
                className="apple-btn-secondary-dark"
                style={{ cursor: "pointer" }}
              >
                Siri AI deep dive
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── News Grid — 4 cards ── */}
      <section style={{ background: "#000", paddingBottom: "2px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2px",
            }}
            className="news-grid-responsive"
          >
            {[
              {
                label: "Siri AI",
                title: "Siri is now a conversational AI assistant.",
                sub: "Natural back-and-forth conversations, personal context, and a dedicated app.",
                img: SIRI_IMG,
                href: "/siri-ai",
              },
              {
                label: "Parental Controls",
                title: "The most powerful parental tools Apple has ever built.",
                sub: "Screen Time schedules, age-based filtering, and Communication Safety.",
                img: PARENTAL_IMG,
                href: "/parental-controls",
              },
              {
                label: "iPhones",
                title: "Every iPhone. From 11 to 17 Pro.",
                sub: "Specs, pricing, colors, and iOS compatibility for every model.",
                img: IPHONE_IMG,
                href: "/iphones",
              },
              {
                label: "Jailbreak",
                title: "Can your iPhone be jailbroken?",
                sub: "Check your iOS version, download tools, and explore sideloading.",
                img: JAILBREAK_IMG,
                href: "/jailbreak",
              },
            ].map((card, i) => (
              <FadeSection key={card.href} delay={i * 80}>
                <Link href={card.href}>
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      aspectRatio: "4/3",
                      cursor: "pointer",
                      display: "block",
                    }}
                    className="news-card-hover"
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1)",
                      }}
                      className="news-card-img"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: "28px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#0071e3",
                          marginBottom: "8px",
                        }}
                      >
                        {card.label}
                      </div>
                      <h3
                        style={{
                          fontSize: "clamp(18px, 2.5vw, 24px)",
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                          color: "#f5f5f7",
                          margin: "0 0 8px 0",
                          lineHeight: 1.1,
                        }}
                      >
                        {card.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "rgba(255,255,255,0.65)",
                          margin: 0,
                          lineHeight: 1.4,
                        }}
                      >
                        {card.sub}
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WWDC Stage Feature ── */}
      <section
        style={{
          background: "#000",
          padding: "2px 0 0",
        }}
      >
        <FadeSection>
          <div
            style={{
              position: "relative",
              width: "100%",
              minHeight: "560px",
              overflow: "hidden",
            }}
          >
            <img
              src={WWDC_STAGE}
              alt="WWDC 2026 Keynote"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                minHeight: "560px",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ padding: "60px 60px", maxWidth: "560px" }}>
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
                  WWDC 2026 Keynote
                </div>
                <h2
                  className="apple-headline-section"
                  style={{ color: "#f5f5f7", marginBottom: "20px" }}
                >
                  Six platforms.
                  <br />
                  One vision.
                </h2>
                <p
                  className="apple-body-large"
                  style={{ color: "rgba(255,255,255,0.65)", marginBottom: "32px" }}
                >
                  iOS 27, macOS Golden Gate, watchOS 12, iPadOS 27, tvOS 27, and visionOS 3. Apple announced the next generation of every platform.
                </p>
                <Link href="/wwdc-2026">
                  <span className="apple-btn-primary" style={{ cursor: "pointer" }}>
                    Full WWDC coverage
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ── Siri AI Feature Section ── */}
      <section style={{ background: "#000", padding: "100px 0" }}>
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
                  Siri AI
                </div>
                <h2
                  className="apple-headline-section"
                  style={{ color: "#f5f5f7", marginBottom: "20px" }}
                >
                  Your AI assistant.
                  <br />
                  More personal.
                  <br />
                  More powerful.
                </h2>
                <p
                  className="apple-body-large"
                  style={{ color: "rgba(255,255,255,0.65)", marginBottom: "32px" }}
                >
                  Siri AI is powered by Apple Intelligence and more helpful than ever. Get more done every day with richer answers, natural conversations, and a new dedicated app.
                </p>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <Link href="/siri-ai">
                    <span className="apple-btn-primary" style={{ cursor: "pointer" }}>
                      Learn more
                    </span>
                  </Link>
                  <Link href="/wwdc-2026#siri">
                    <span className="apple-btn-secondary-dark" style={{ cursor: "pointer" }}>
                      Watch keynote
                    </span>
                  </Link>
                </div>
              </div>
              <div
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  aspectRatio: "4/5",
                }}
              >
                <img
                  src={SIRI_IMG}
                  alt="Siri AI"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Parental Controls Feature Section ── */}
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
              <div
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  aspectRatio: "4/5",
                }}
                className="feature-img-order"
              >
                <img
                  src={PARENTAL_IMG}
                  alt="Parental Controls"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
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
                  Child Safety
                </div>
                <h2
                  className="apple-headline-section"
                  style={{ color: "#f5f5f7", marginBottom: "20px" }}
                >
                  Features that are easy
                  <br />
                  and intuitive to use.
                </h2>
                <p
                  className="apple-body-large"
                  style={{ color: "rgba(255,255,255,0.65)", marginBottom: "32px" }}
                >
                  New Screen Time schedules, age-based app filtering, Communication Safety for nudity and violence detection, and expert-guided time allowances.
                </p>
                <Link href="/parental-controls">
                  <span className="apple-btn-primary" style={{ cursor: "pointer" }}>
                    Explore Parental Controls
                  </span>
                </Link>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── iPhone + Community Row ── */}
      <section style={{ background: "#000", padding: "2px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2px",
            }}
            className="news-grid-responsive"
          >
            {[
              {
                label: "iPhones",
                title: "Every iPhone from 11 to 17 Pro.",
                sub: "Real specs, real photos, real comparisons.",
                img: IPHONE_IMG,
                href: "/iphones",
                cta: "Explore iPhones",
              },
              {
                label: "Community",
                title: "Reddit is talking. We are listening.",
                sub: "Hot threads from r/apple, r/jailbreak, r/iphone and more.",
                img: COMMUNITY_IMG,
                href: "/community",
                cta: "Join the conversation",
              },
            ].map((card) => (
              <FadeSection key={card.href}>
                <Link href={card.href}>
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      minHeight: "480px",
                      cursor: "pointer",
                    }}
                    className="news-card-hover"
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        inset: 0,
                        transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1)",
                      }}
                      className="news-card-img"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: "40px 36px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#0071e3",
                          marginBottom: "10px",
                        }}
                      >
                        {card.label}
                      </div>
                      <h3
                        className="apple-headline-feature"
                        style={{ color: "#f5f5f7", marginBottom: "12px" }}
                      >
                        {card.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "rgba(255,255,255,0.65)",
                          marginBottom: "20px",
                          lineHeight: 1.4,
                        }}
                      >
                        {card.sub}
                      </p>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          color: "rgba(255,255,255,0.9)",
                          fontSize: "15px",
                          fontWeight: 400,
                          letterSpacing: "-0.022em",
                        }}
                      >
                        {card.cta} &rsaquo;
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Built by Cory Hepler ── */}
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
              About This Site
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", marginBottom: "20px" }}
            >
              Built for Apple fans.
              <br />
              By an Apple fan.
            </h2>
            <p
              className="apple-body-large"
              style={{ color: "rgba(255,255,255,0.6)", marginBottom: "8px" }}
            >
              Everything Apple is an independent fan site dedicated to covering Apple news, products, and culture with the depth and design quality that Apple deserves.
            </p>
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "-0.022em",
              }}
            >
              Built by{" "}
              <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
                Cory Hepler
              </strong>
              . Not affiliated with Apple Inc.
            </p>
          </div>
        </FadeSection>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .news-grid-responsive {
            grid-template-columns: 1fr !important;
          }
          .feature-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .feature-img-order {
            order: -1;
          }
        }
        .news-card-hover:hover .news-card-img {
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
}
