/* =============================================================
   Apple Silicon Page — Everything Apple
   M4, M4 Pro, M4 Max, M4 Ultra and full chip history.
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

const CHIPS = [
  {
    name: "M4 Ultra",
    year: "2025",
    cpu: "32-core",
    gpu: "80-core",
    neural: "32-core Neural Engine",
    memory: "Up to 192GB unified memory",
    devices: ["Mac Pro (2025)", "Mac Studio (2025)"],
    desc: "The most powerful chip Apple has ever built. Two M4 Max chips connected via Apple UltraFusion, delivering unprecedented performance for the most demanding professional workflows.",
    img: IMGS.silicon.m4chip1,
  },
  {
    name: "M4 Max",
    year: "2024",
    cpu: "16-core",
    gpu: "40-core",
    neural: "16-core Neural Engine",
    memory: "Up to 128GB unified memory",
    devices: ["MacBook Pro 16-inch (2024)", "Mac Studio (2024)"],
    desc: "Extreme performance for video editors, 3D artists, and machine learning researchers. The M4 Max delivers desktop-class performance in a laptop for the first time.",
    img: IMGS.silicon.m4chip2,
  },
  {
    name: "M4 Pro",
    year: "2024",
    cpu: "14-core",
    gpu: "20-core",
    neural: "16-core Neural Engine",
    memory: "Up to 64GB unified memory",
    devices: ["MacBook Pro 14-inch (2024)", "MacBook Pro 16-inch (2024)", "Mac mini (2024)"],
    desc: "Professional performance for developers, photographers, and content creators. The M4 Pro is the sweet spot between efficiency and raw power.",
    img: IMGS.silicon.m4chip3,
  },
  {
    name: "M4",
    year: "2024",
    cpu: "10-core",
    gpu: "10-core",
    neural: "16-core Neural Engine",
    memory: "Up to 32GB unified memory",
    devices: ["MacBook Air (2025)", "iPad Pro (2024)", "iMac (2024)", "Mac mini (2024)"],
    desc: "The foundation of the M4 family. Faster than any Intel Mac ever made, with all-day battery life and the Neural Engine required for Apple Intelligence.",
    img: IMGS.silicon.m4chip4,
  },
];

const CHIP_HISTORY = [
  { name: "M1", year: "2020", note: "The chip that changed everything. First Apple Silicon for Mac." },
  { name: "M1 Pro / Max / Ultra", year: "2021", note: "Professional-grade performance. Introduced the UltraFusion architecture." },
  { name: "M2", year: "2022", note: "Second generation. 18% faster CPU, 35% faster GPU than M1." },
  { name: "M2 Pro / Max / Ultra", year: "2023", note: "Up to 96GB unified memory. Dominated pro workflows." },
  { name: "M3", year: "2023", note: "First 3nm chip. Hardware ray tracing for the first time." },
  { name: "M3 Pro / Max / Ultra", year: "2023-2024", note: "Up to 192GB unified memory in M3 Ultra." },
  { name: "M4", year: "2024", note: "Second-generation 3nm. Built for Apple Intelligence." },
  { name: "M4 Pro / Max / Ultra", year: "2024-2025", note: "Up to 192GB unified memory. Fastest Mac chips ever." },
  { name: "A17 Pro", year: "2023", note: "First 3nm iPhone chip. Required for Apple Intelligence on iPhone." },
  { name: "A18 / A18 Pro", year: "2024", note: "iPhone 16 series. Full Apple Intelligence support." },
  { name: "A19 / A19 Pro", year: "2025", note: "iPhone 17 series. Most powerful iPhone chips ever." },
];

export default function AppleSilicon() {
  const { openSearch } = useSearch();
  return (
    <div>
      <Navbar onSearchOpen={openSearch} />

      {/* Hero */}
      <section style={{ background: "#000", padding: "120px 0 100px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "16px" }}>Apple Silicon</p>
            <h1 className="apple-headline-hero" style={{ color: "#f5f5f7", marginBottom: "24px" }}>The chips that<br />changed computing.</h1>
            <p style={{ fontSize: "21px", color: "rgba(245,245,247,0.7)", lineHeight: 1.55, marginBottom: "40px" }}>
              From M1 to M4 Ultra, from A13 to A19 Pro — Apple Silicon is the foundation of every Apple device. Here is everything you need to know about every chip Apple has ever made.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={150}>
          <div style={{ maxWidth: "900px", margin: "60px auto 0", padding: "0 22px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
            {[IMGS.silicon.m4chip1, IMGS.silicon.m4chip2, IMGS.silicon.m4chip3, IMGS.silicon.m4chip4, IMGS.silicon.m4chip5].map((src, i) => (
              <div key={i} style={{ borderRadius: "14px", overflow: "hidden", aspectRatio: "1/1", boxShadow: "0 16px 40px rgba(0,0,0,0.4)" }}>
                <img src={src} alt={`Apple Silicon M4 chip ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* M4 family */}
      <section style={{ background: "#fff", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "8px" }}>M4 Family</p>
            <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "60px" }}>The M4 chip family, explained.</h2>
          </FadeIn>
          <div style={{ display: "grid", gap: "20px" }}>
            {CHIPS.map((chip, i) => (
              <FadeIn key={chip.name} delay={i * 80}>
                <div style={{ background: "#f5f5f7", borderRadius: "20px", overflow: "hidden", display: "grid", gridTemplateColumns: "300px 1fr", gap: "0" }} className="chip-card-responsive">
                  <div style={{ overflow: "hidden" }}>
                    <img src={chip.img} alt={chip.name} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "200px" }} />
                  </div>
                  <div style={{ padding: "40px" }}>
                    <div style={{ display: "flex", gap: "12px", alignItems: "baseline", marginBottom: "12px" }}>
                      <h3 style={{ fontSize: "28px", fontWeight: 800, color: "#1d1d1f", letterSpacing: "-0.03em" }}>{chip.name}</h3>
                      <span style={{ fontSize: "14px", color: "#6e6e73" }}>{chip.year}</span>
                    </div>
                    <p style={{ fontSize: "15px", color: "#6e6e73", lineHeight: 1.6, marginBottom: "24px" }}>{chip.desc}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px", marginBottom: "20px" }}>
                      {[
                        { label: "CPU", value: chip.cpu },
                        { label: "GPU", value: chip.gpu },
                        { label: "Neural Engine", value: chip.neural },
                        { label: "Memory", value: chip.memory },
                      ].map(spec => (
                        <div key={spec.label} style={{ background: "#fff", borderRadius: "10px", padding: "14px" }}>
                          <p style={{ fontSize: "11px", color: "#6e6e73", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>{spec.label}</p>
                          <p style={{ fontSize: "14px", fontWeight: 600, color: "#1d1d1f" }}>{spec.value}</p>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p style={{ fontSize: "12px", color: "#6e6e73", marginBottom: "8px" }}>Found in:</p>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        {chip.devices.map(d => (
                          <span key={d} style={{ fontSize: "13px", color: "#1d1d1f", background: "#e8e8ed", padding: "4px 10px", borderRadius: "6px" }}>{d}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Chip history timeline */}
      <section style={{ background: "#000", padding: "100px 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "8px" }}>History</p>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", marginBottom: "60px" }}>Every Apple Silicon chip, ever.</h2>
          </FadeIn>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "20px", top: 0, bottom: 0, width: "1px", background: "rgba(255,255,255,0.1)" }} />
            {CHIP_HISTORY.map((chip, i) => (
              <FadeIn key={chip.name} delay={i * 50}>
                <div style={{ display: "flex", gap: "32px", marginBottom: "32px", paddingLeft: "52px", position: "relative" }}>
                  <div style={{ position: "absolute", left: "14px", top: "6px", width: "13px", height: "13px", borderRadius: "50%", background: "#0071e3", border: "2px solid #000" }} />
                  <div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "baseline", marginBottom: "6px" }}>
                      <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#f5f5f7" }}>{chip.name}</h3>
                      <span style={{ fontSize: "13px", color: "rgba(245,245,247,0.4)" }}>{chip.year}</span>
                    </div>
                    <p style={{ fontSize: "15px", color: "rgba(245,245,247,0.55)", lineHeight: 1.6 }}>{chip.note}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Apple Silicon matters */}
      <section style={{ background: "#f5f5f7", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0071e3", marginBottom: "8px" }}>Why It Matters</p>
            <h2 className="apple-headline-section" style={{ color: "#1d1d1f", marginBottom: "60px" }}>What Apple Silicon means for you.</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { title: "All-Day Battery Life", desc: "Apple Silicon is dramatically more power-efficient than Intel chips. MacBook Air with M4 gets up to 18 hours of battery life." },
              { title: "No Fan Required", desc: "The M1, M2, M3, and M4 in MacBook Air run completely fanless. No noise, no heat, no throttling." },
              { title: "Unified Memory", desc: "CPU, GPU, and Neural Engine share the same memory pool. This is why Apple Silicon is so fast — no data copying between chips." },
              { title: "Apple Intelligence", desc: "The Neural Engine in every Apple Silicon chip is purpose-built for AI. It is why Apple Intelligence runs on-device without draining your battery." },
              { title: "iPhone-to-Mac Continuity", desc: "Because iPhone and Mac chips share the same architecture, features like iPhone Mirroring, Universal Clipboard, and Handoff work seamlessly." },
              { title: "Longevity", desc: "Apple Silicon Macs receive macOS updates for longer than Intel Macs. The M1 from 2020 still runs the latest macOS in 2026." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 50}>
                <div style={{ background: "#fff", borderRadius: "18px", padding: "28px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1d1d1f", marginBottom: "10px" }}>{item.title}</h3>
                  <p style={{ fontSize: "15px", color: "#6e6e73", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 22px" }}>
          <FadeIn>
            <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#1d1d1f", marginBottom: "32px" }}>Explore more</h2>
          </FadeIn>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {[{ label: "iPhones", href: "/iphones" }, { label: "Apple Intelligence", href: "/apple-intelligence" }, { label: "WWDC 2026", href: "/wwdc-2026" }, { label: "macOS Golden Gate", href: "/macos-golden-gate" }].map(link => (
              <Link key={link.href} href={link.href}>
                <span style={{ display: "inline-block", background: "#f5f5f7", color: "#1d1d1f", padding: "12px 20px", borderRadius: "980px", fontSize: "15px", fontWeight: 500, cursor: "pointer", border: "1px solid #d2d2d7", transition: "all 0.2s ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0071e3"; (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "#0071e3"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#f5f5f7"; (e.currentTarget as HTMLElement).style.color = "#1d1d1f"; (e.currentTarget as HTMLElement).style.borderColor = "#d2d2d7"; }}>
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
