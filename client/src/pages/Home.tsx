/*
  Home Page — Everything Apple
  Design: Apple.com exact aesthetic
  - Pure black/white alternating sections, no gradients, no card borders
  - Massive SF Pro typography with tight letter-spacing
  - Scroll-triggered reveal animations via useScrollReveal
  - Floating product images, no shadows, no containers
  - Mobile-first, iPhone-optimized
  Built by Cory Hepler
*/
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IMGS } from "../lib/imageManifest";
import LatestNews from "../components/LatestNews";
import useScrollReveal from "../hooks/useScrollReveal";

// ── Scroll reveal wrapper ──────────────────────────────────────
function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </div>
  );
}

// ── Hero — full-bleed black, cinematic WWDC photo ──────────────
function Hero() {
  return (
    <section style={{
      position: "relative",
      height: "100svh",
      minHeight: "600px",
      maxHeight: "1100px",
      overflow: "hidden",
      background: "#000",
    }}>
      <img
        src="/manus-storage/tim-cook-wwdc26-portrait_7485b05e.jpg"
        alt="Tim Cook at WWDC 2026 keynote"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "50% 18%",
        }}
        onError={(e) => {
          (e.target as HTMLImageElement).src = IMGS.wwdc.keynote1;
        }}
      />
      {/* Gradient: transparent top → heavy black bottom */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.82) 80%, rgba(0,0,0,0.96) 100%)",
      }} />
      {/* Content — bottom-anchored */}
      <div style={{
        position: "relative",
        zIndex: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: "max(80px, env(safe-area-inset-bottom))",
        paddingLeft: "max(22px, env(safe-area-inset-left))",
        paddingRight: "max(22px, env(safe-area-inset-right))",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
      }}>
        <div style={{ maxWidth: "680px" }}>
          <p className="animate-fade-in" style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#2997ff",
            marginBottom: "16px",
            animationDelay: "0.1s",
          }}>
            June 9, 2026 — WWDC 2026
          </p>
          <h1 className="apple-headline-hero animate-fade-in delay-200" style={{
            color: "#f5f5f7",
            marginBottom: "20px",
            lineHeight: 1.04,
          }}>
            Everything Apple<br />announced.
          </h1>
          <p className="animate-fade-in delay-300" style={{
            fontSize: "clamp(17px, 2.2vw, 21px)",
            color: "rgba(245,245,247,0.75)",
            lineHeight: 1.5,
            marginBottom: "36px",
            maxWidth: "520px",
            letterSpacing: "-0.022em",
          }}>
            Siri AI. Parental Controls. iOS 27. macOS Golden Gate. The biggest Apple event of the year, covered in full.
          </p>
          <div className="animate-fade-in delay-400" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/wwdc-2026">
              <span className="apple-btn apple-btn-blue" style={{ fontSize: "17px" }}>
                See all announcements
              </span>
            </Link>
            <Link href="/siri-ai">
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#f5f5f7",
                fontSize: "17px",
                letterSpacing: "-0.022em",
                paddingTop: "12px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(245,245,247,0.35)",
                transition: "border-color 0.2s ease",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(245,245,247,0.7)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(245,245,247,0.35)")}
              >
                Siri AI deep dive
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Featured spotlight — Siri AI (black section) ──────────────
function SiriSpotlight() {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <section className="apple-section section-black" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
          className="apple-feature-row"
        >
          {/* Text */}
          <div>
            <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>Siri AI</p>
            <h2 className="apple-headline reveal reveal-delay-1" style={{ color: "#f5f5f7", marginBottom: "20px" }}>
              The new Siri.<br />Truly intelligent.
            </h2>
            <p className="apple-lead reveal reveal-delay-2" style={{ color: "rgba(245,245,247,0.7)", marginBottom: "32px", maxWidth: "480px" }}>
              Powered by Apple Intelligence, the new Siri understands context, remembers your preferences, and can take action across every app on your iPhone.
            </p>
            <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/siri-ai">
                <span className="apple-btn apple-btn-blue">Learn more</span>
              </Link>
              <Link href="/apple-intelligence">
                <span className="apple-btn apple-btn-outline-white">Apple Intelligence</span>
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="reveal-scale" style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={IMGS.siri.screen1}
              alt="New Siri AI interface on iPhone"
              style={{
                width: "100%",
                maxWidth: "420px",
                borderRadius: "0",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Parental Controls spotlight (white section) ────────────────
function ParentalSpotlight() {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <section className="apple-section section-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
          className="apple-feature-row"
        >
          {/* Image — left on desktop */}
          <div className="reveal-scale" style={{ display: "flex", justifyContent: "center", order: 0 }}>
            <img
              src={IMGS.parental.screenTime}
              alt="Parental Controls Screen Time on iPhone"
              style={{
                width: "100%",
                maxWidth: "420px",
                borderRadius: "0",
                display: "block",
              }}
            />
          </div>
          {/* Text — right on desktop */}
          <div style={{ order: 1 }}>
            <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>Parental Controls</p>
            <h2 className="apple-headline reveal reveal-delay-1" style={{ color: "#1d1d1f", marginBottom: "20px" }}>
              Parents, you're<br />finally in control.
            </h2>
            <p className="apple-lead reveal reveal-delay-2" style={{ color: "#6e6e73", marginBottom: "32px", maxWidth: "480px" }}>
              iOS 27 gives parents unprecedented tools to manage screen time, content filters, communication limits, and Apple Watch supervision — all from one place.
            </p>
            <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/parental-controls">
                <span className="apple-btn apple-btn-blue">Explore features</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── iOS 27 spotlight (off-white section) ──────────────────────
function IOS27Spotlight() {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <section className="apple-section section-offwhite" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content" style={{ textAlign: "center" }}>
        <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>iOS 27</p>
        <h2 className="apple-headline reveal reveal-delay-1" style={{ color: "#1d1d1f", marginBottom: "20px" }}>
          Liquid Glass.<br />The biggest redesign since iOS 7.
        </h2>
        <p className="apple-lead reveal reveal-delay-2" style={{ color: "#6e6e73", marginBottom: "48px", maxWidth: "580px", margin: "0 auto 48px" }}>
          Apple's most dramatic visual overhaul in over a decade. Every surface, every animation, every interaction — reimagined.
        </p>
        <div className="reveal-scale reveal-delay-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", maxWidth: "900px", margin: "0 auto 40px" }}>
          {[IMGS.ios27.homeScreen1, IMGS.ios27.homeScreen2, IMGS.ios27.homeScreen3].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`iOS 27 home screen design ${i + 1}`}
              style={{ width: "100%", aspectRatio: "9/16", objectFit: "cover", display: "block" }}
            />
          ))}
        </div>
        <div className="reveal reveal-delay-4">
          <Link href="/ios-27">
            <span className="apple-btn apple-btn-blue">Explore iOS 27</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── iPhone lineup (black section) ─────────────────────────────
function IPhoneLineup() {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <section className="apple-section section-black" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content" style={{ textAlign: "center" }}>
        <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>iPhone</p>
        <h2 className="apple-headline reveal reveal-delay-1" style={{ color: "#f5f5f7", marginBottom: "16px" }}>
          iPhone 17 is here.
        </h2>
        <p className="apple-lead reveal reveal-delay-2" style={{ color: "rgba(245,245,247,0.7)", marginBottom: "48px", maxWidth: "520px", margin: "0 auto 48px" }}>
          Thinner. Faster. Smarter. The iPhone 17 lineup redefines what a smartphone can be.
        </p>
        <div className="reveal-scale reveal-delay-3" style={{ marginBottom: "40px" }}>
          <img
            src={IMGS.iphone17.pro1}
            alt="iPhone 17 Pro lineup"
            style={{ width: "100%", maxWidth: "800px", margin: "0 auto", display: "block" }}
          />
        </div>
        <div className="reveal reveal-delay-4" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/iphones">
            <span className="apple-btn apple-btn-white">Explore all iPhones</span>
          </Link>
          <Link href="/iphone-timeline">
            <span className="apple-btn apple-btn-outline-white">iPhone history</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── WWDC 2026 recap (white section) ───────────────────────────
function WWDCRecap() {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <section className="apple-section section-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>WWDC 2026</p>
          <h2 className="apple-headline reveal reveal-delay-1" style={{ color: "#1d1d1f", marginBottom: "20px" }}>
            Every announcement,<br />in one place.
          </h2>
          <p className="apple-lead reveal reveal-delay-2" style={{ color: "#6e6e73", maxWidth: "560px", margin: "0 auto" }}>
            From iOS 27 to macOS Golden Gate, watchOS 12 to Apple Silicon — we covered it all live from Apple Park.
          </p>
        </div>

        {/* 2x2 grid of announcements */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2px",
          background: "rgba(0,0,0,0.06)",
        }}>
          {[
            { label: "iOS 27", title: "Liquid Glass redesign", img: IMGS.ios27.hero, href: "/ios-27" },
            { label: "macOS Golden Gate", title: "The Mac, reimagined", img: IMGS.macos.hero, href: "/macos-golden-gate" },
            { label: "Apple Intelligence", title: "AI that works for you", img: IMGS.intelligence.overview, href: "/apple-intelligence" },
            { label: "watchOS 12", title: "Health, elevated", img: IMGS.watchKids.screen1, href: "/watchos-12" },
          ].map((item, i) => (
            <Link key={i} href={item.href}>
              <div className="reveal" style={{
                position: "relative",
                overflow: "hidden",
                background: "#fff",
                cursor: "pointer",
              }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1.04)";
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                />
                <div style={{ padding: "24px 28px" }}>
                  <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0071e3", marginBottom: "8px" }}>{item.label}</p>
                  <p style={{ fontSize: "21px", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.002em" }}>{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/wwdc-2026">
            <span className="apple-btn apple-btn-blue">See full WWDC 2026 coverage</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Apple Intelligence (black section) ────────────────────────
function IntelligenceSection() {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <section className="apple-section section-black" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
          className="apple-feature-row"
        >
          <div>
            <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>Apple Intelligence</p>
            <h2 className="apple-headline reveal reveal-delay-1" style={{ color: "#f5f5f7", marginBottom: "20px" }}>
              AI that's built<br />for privacy.
            </h2>
            <p className="apple-lead reveal reveal-delay-2" style={{ color: "rgba(245,245,247,0.7)", marginBottom: "32px", maxWidth: "480px" }}>
              Apple Intelligence runs on-device, keeping your data private. Writing tools, image generation, priority notifications — all powered by the world's most personal AI.
            </p>
            <Link href="/apple-intelligence">
              <span className="apple-btn apple-btn-blue reveal reveal-delay-3">Explore Apple Intelligence</span>
            </Link>
          </div>
          <div className="reveal-scale">
            <img
              src={IMGS.intelligence.features1}
              alt="Apple Intelligence features"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Jailbreak & Sideload teaser (off-white section) ────────────
function JailbreakTeaser() {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <section className="apple-section-sm section-offwhite" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2px",
          background: "rgba(0,0,0,0.06)",
        }}>
          {[
            {
              label: "Jailbreak",
              title: "iOS 27 jailbreak status",
              sub: "Dopamine, Palera1n, and every tool — updated daily.",
              href: "/jailbreak",
              img: IMGS.jailbreak.dopamine1,
            },
            {
              label: "Sideloading",
              title: "Install any app without the App Store",
              sub: "AltStore, Sideloadly, TrollStore — complete guides.",
              href: "/jailbreak",
              img: IMGS.sideload.altstore1,
            },
          ].map((item, i) => (
            <Link key={i} href={item.href}>
              <div className="reveal" style={{
                background: "#fff",
                overflow: "hidden",
                cursor: "pointer",
              }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1.04)";
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                />
                <div style={{ padding: "28px 32px" }}>
                  <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0071e3", marginBottom: "8px" }}>{item.label}</p>
                  <h3 style={{ fontSize: "21px", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.002em", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", color: "#6e6e73", lineHeight: 1.5 }}>{item.sub}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Latest News (white section) ────────────────────────────────
function NewsSection() {
  const ref = useScrollReveal({ threshold: 0.06 });
  return (
    <section className="apple-section section-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{ marginBottom: "48px" }}>
          <p className="apple-eyebrow reveal" style={{ marginBottom: "12px" }}>Latest News</p>
          <h2 className="apple-subheadline reveal reveal-delay-1" style={{ color: "#1d1d1f" }}>
            From 9to5Mac &amp; MacRumors
          </h2>
        </div>
        <div className="reveal reveal-delay-2">
          <LatestNews />
        </div>
      </div>
    </section>
  );
}

// ── More pages teaser (black section) ─────────────────────────
function MorePages() {
  const ref = useScrollReveal({ threshold: 0.08 });
  const pages = [
    { label: "macOS Golden Gate", href: "/macos-golden-gate", img: IMGS.macos.screen1 },
    { label: "Apple Silicon", href: "/apple-silicon", img: IMGS.silicon.m4chip1 },
    { label: "watchOS 12", href: "/watchos-12", img: IMGS.watchKids.screen2 },
    { label: "Gallery", href: "/gallery", img: IMGS.places.applePark1 },
    { label: "Community", href: "/community", img: IMGS.places.appleStore2 },
    { label: "iPhone Timeline", href: "/iphone-timeline", img: IMGS.iphone16.proMax1 },
  ];
  return (
    <section className="apple-section section-offwhite" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{ marginBottom: "48px", textAlign: "center" }}>
          <h2 className="apple-subheadline reveal" style={{ color: "#1d1d1f" }}>Explore everything.</h2>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2px",
          background: "rgba(0,0,0,0.06)",
        }}
          className="reveal reveal-delay-1"
        >
          {pages.map((page, i) => (
            <Link key={i} href={page.href}>
              <div style={{
                position: "relative",
                overflow: "hidden",
                background: "#fff",
                cursor: "pointer",
              }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1.06)";
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector("img");
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                <img
                  src={page.img}
                  alt={page.label}
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "40px 20px 20px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                }}>
                  <p style={{ color: "#f5f5f7", fontSize: "17px", fontWeight: 600, letterSpacing: "-0.022em" }}>{page.label}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Credit bar ─────────────────────────────────────────────────
function CreditBar() {
  return (
    <section style={{ background: "#f5f5f7", padding: "40px 22px", textAlign: "center" }}>
      <p style={{ fontSize: "12px", color: "#6e6e73", letterSpacing: "-0.01em" }}>
        Everything Apple is an independent fan site. Built by{" "}
        <span style={{ color: "#1d1d1f", fontWeight: 500 }}>Cory Hepler</span>.
        Not affiliated with Apple Inc.
      </p>
    </section>
  );
}

// ── Main export ────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ background: "#fff" }}>
      <Navbar />
      <Hero />
      <SiriSpotlight />
      <ParentalSpotlight />
      <IOS27Spotlight />
      <IPhoneLineup />
      <WWDCRecap />
      <IntelligenceSection />
      <JailbreakTeaser />
      <NewsSection />
      <MorePages />
      <CreditBar />
      <Footer />
    </div>
  );
}
