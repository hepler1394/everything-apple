/* =============================================================
   watchOS 12 Page — Everything Apple
   Apple Watch for Kids and all watchOS 12 features.
   Apple.com design language. Zero emojis.
   Built by Cory Hepler
   ============================================================= */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import { useSearch } from "../App";
import Footer from "../components/Footer";
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

export default function WatchOS12() {
  const { openSearch } = useSearch();
  return (
    <div>
      <Navbar onSearchOpen={openSearch} />

      {/* Hero */}
      <section style={{ background: "#000", padding: "120px 0 100px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "16px" }}>watchOS 12</p>
            <h1 className="apple-headline-hero" style={{ color: "#f5f5f7", marginBottom: "24px" }}>Apple Watch<br />for Kids.</h1>
            <p style={{ fontSize: "21px", color: "rgba(245,245,247,0.7)", lineHeight: 1.55, marginBottom: "40px" }}>
              watchOS 12 introduces a completely redesigned experience for children — giving them independence while giving parents full control. Plus Siri AI, new health features, and a redesigned Vitals app.
            </p>
            <a href="#kids" style={{ display: "inline-block", background: "#0071e3", color: "#fff", padding: "14px 28px", borderRadius: "980px", fontSize: "17px", fontWeight: 500, textDecoration: "none" }}>Apple Watch for Kids</a>
          </FadeIn>
        </div>
        <FadeIn delay={150}>
          <div style={{ maxWidth: "700px", margin: "80px auto 0", padding: "0 22px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
            {[IMGS.watchKids.screen1, IMGS.watchKids.screen2, IMGS.watchKids.screen3, IMGS.watchKids.screen4, IMGS.watchKids.screen5].map((src, i) => (
              <div key={i} style={{ borderRadius: "12px", overflow: "hidden", aspectRatio: "1/1.2", boxShadow: "0 16px 40px rgba(0,0,0,0.5)" }}>
                <img src={src} alt={`Apple Watch for Kids ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Apple Watch for Kids */}
      <section id="kids" style={{ background: "#fff", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="feature-grid-responsive">
            <FadeIn>
              <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "12px" }}>Apple Watch for Kids</p>
              <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "24px" }}>A watch designed for the way kids actually use it.</h2>
              <p style={{ fontSize: "17px", color: "#6e6e73", lineHeight: 1.7, marginBottom: "20px" }}>
                Apple Watch for Kids is a new mode in watchOS 12 that transforms the Apple Watch into a device specifically designed for children. The interface is simplified, the watch faces are playful and animated, and parents control everything from their iPhone.
              </p>
              <p style={{ fontSize: "17px", color: "#6e6e73", lineHeight: 1.7, marginBottom: "28px" }}>
                Kids can make calls and send messages to approved contacts, check their Activity rings, use the stopwatch and timer, and access a curated set of apps. Parents can see their child's location, activity, and heart rate at any time.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {[
                  "Simplified interface designed for small hands and young users",
                  "Animated watch faces with customizable characters",
                  "Communication limited to parent-approved contacts",
                  "Location sharing always on for parents",
                  "Activity rings with age-appropriate goals",
                  "SOS and Emergency Calling always available",
                  "Parents manage all settings from iPhone",
                  "Compatible with Apple Watch SE and Series 4 and later",
                ].map(d => (
                  <li key={d} style={{ fontSize: "15px", color: "#6e6e73", padding: "8px 0", borderBottom: "1px solid #f0f0f0", display: "flex", gap: "10px" }}>
                    <span style={{ color: "#0071e3", fontWeight: 700, flexShrink: 0 }}>—</span>{d}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={100}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {[IMGS.watchKids.screen1, IMGS.watchKids.screen2, IMGS.watchKids.screen3, IMGS.watchKids.screen4].map((src, i) => (
                  <div key={i} style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "1/1", boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}>
                    <img src={src} alt={`Apple Watch for Kids ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* All watchOS 12 features */}
      <section style={{ background: "#f5f5f7", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "8px" }}>All Features</p>
            <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "60px" }}>Everything new in watchOS 12.</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { title: "Siri AI on Apple Watch", desc: "Siri AI comes to Apple Watch. Ask complex questions, get contextual answers, and take actions across apps — all from your wrist." },
              { title: "Vitals App Redesign", desc: "The Vitals app has been completely redesigned with a new daily health summary, trend analysis, and AI-powered insights about your health data." },
              { title: "Training Load", desc: "A new metric that measures the cumulative strain of your workouts over time, helping you avoid overtraining and optimize recovery." },
              { title: "Crash Detection Improvements", desc: "Crash Detection is now more accurate and faster, with improved algorithms that reduce false positives while maintaining sensitivity." },
              { title: "Cycle Tracking Updates", desc: "New insights powered by Apple Intelligence help users understand patterns in their cycle data with greater accuracy and context." },
              { title: "New Watch Faces", desc: "Six new watch faces including Liquid Glass, Modular Ultra, and three animated faces designed specifically for Apple Watch for Kids." },
              { title: "Improved Workout Detection", desc: "Apple Watch now automatically detects 15 workout types, up from 8, including rowing, rock climbing, and martial arts." },
              { title: "Sleep Coaching", desc: "A new sleep coaching feature uses your sleep data to provide personalized recommendations for improving sleep quality and consistency." },
            ].map((f, i) => (
              <FadeIn key={f.title} delay={i * 50}>
                <div style={{ background: "#fff", borderRadius: "18px", padding: "28px", height: "100%", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1d1d1f", marginBottom: "10px", letterSpacing: "-0.02em" }}>{f.title}</h3>
                  <p style={{ fontSize: "15px", color: "#6e6e73", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section style={{ background: "#000", padding: "100px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "8px" }}>Compatibility</p>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", marginBottom: "16px" }}>watchOS 12 compatibility</h2>
            <p style={{ fontSize: "17px", color: "rgba(245,245,247,0.6)", marginBottom: "40px" }}>watchOS 12 is compatible with Apple Watch Series 4 and later, and Apple Watch SE (1st generation and later).</p>
          </FadeIn>
          <FadeIn delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2px" }}>
              {[
                { model: "Apple Watch Series 4", compatible: true },
                { model: "Apple Watch Series 5", compatible: true },
                { model: "Apple Watch SE (1st gen)", compatible: true },
                { model: "Apple Watch Series 6", compatible: true },
                { model: "Apple Watch Series 7", compatible: true },
                { model: "Apple Watch SE (2nd gen)", compatible: true },
                { model: "Apple Watch Series 8", compatible: true },
                { model: "Apple Watch Ultra", compatible: true },
                { model: "Apple Watch Series 9", compatible: true },
                { model: "Apple Watch Ultra 2", compatible: true },
                { model: "Apple Watch Series 10", compatible: true },
                { model: "Apple Watch Series 3", compatible: false },
              ].map((row, i) => (
                <div key={row.model} style={{ background: "#1d1d1f", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "14px", color: "#f5f5f7" }}>{row.model}</span>
                  <span style={{ fontSize: "13px", color: row.compatible ? "#34c759" : "#ff3b30", fontWeight: 600 }}>{row.compatible ? "Yes" : "No"}</span>
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
            {[{ label: "Siri AI", href: "/siri-ai" }, { label: "Parental Controls", href: "/parental-controls" }, { label: "iOS 27", href: "/ios-27" }, { label: "Apple Intelligence", href: "/apple-intelligence" }, { label: "Full WWDC 2026 Coverage", href: "/wwdc-2026" }].map(link => (
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

      <Footer />
    </div>
  );
}
