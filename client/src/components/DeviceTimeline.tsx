/* =============================================================
   DeviceTimeline — generic dark history timeline for any device
   line (Apple Watch, iPod, …). Strip + detail panel + spec table,
   driven by a DeviceModel[] and an image resolver.
   ============================================================= */

import { useState, useRef, useEffect } from "react";
import type { DeviceModel } from "../data/deviceTypes";
import DeviceSwitcher from "./DeviceSwitcher";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1)" }}>
      {children}
    </div>
  );
}

interface Props {
  eyebrow: string;
  lineTop: string;
  lineBottom: string;
  blurb: string;
  models: DeviceModel[];
  imageFor: (id: string) => string | null;
}

export default function DeviceTimeline({ eyebrow, lineTop, lineBottom, blurb, models, imageFor }: Props) {
  const [selected, setSelected] = useState<DeviceModel>(models[models.length - 1]);
  const [yearFilter, setYearFilter] = useState<string>("All");

  const years = ["All", ...Array.from(new Set(models.map((m) => m.year.toString()))).sort((a, b) => Number(b) - Number(a))];
  const filtered = yearFilter === "All" ? models : models.filter((m) => m.year.toString() === yearFilter);
  const specLabels = models[0]?.specs.map((s) => s.label) ?? [];

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "linear-gradient(180deg, #1d1d1f 0%, #000 100%)", padding: "56px 22px 40px", textAlign: "center" }}>
        <FadeIn>
          <DeviceSwitcher />
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>
            {eyebrow}
          </p>
          <h1 className="apple-headline-hero" style={{ color: "#f5f5f7", marginBottom: "20px" }}>
            {lineTop}<br />{lineBottom}
          </h1>
          <p className="apple-body-large" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "640px", margin: "0 auto" }}>
            {blurb}
          </p>
        </FadeIn>
      </section>

      {/* Year filter */}
      <section style={{ background: "#000", padding: "0 22px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "16px" }}>
            {years.map((year) => (
              <button key={year} onClick={() => setYearFilter(year)} style={{
                padding: "8px 18px", borderRadius: "980px", border: "none", fontSize: "13px", fontWeight: 500,
                cursor: "pointer", transition: "all 0.2s ease",
                background: yearFilter === year ? "#f5f5f7" : "rgba(255,255,255,0.08)",
                color: yearFilter === year ? "#000" : "rgba(255,255,255,0.6)",
              }}>{year}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Strip */}
      <section style={{ background: "#000", paddingBottom: "48px" }}>
        <div style={{ display: "flex", gap: "16px", overflowX: "auto", padding: "0 22px 24px", scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
          {filtered.map((m, i) => {
            const img = imageFor(m.id);
            return (
              <FadeIn key={m.id} delay={i * 30}>
                <button onClick={() => setSelected(m)} style={{
                  flexShrink: 0, width: "160px",
                  background: selected.id === m.id ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)",
                  border: selected.id === m.id ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px", padding: "20px 16px", cursor: "pointer", transition: "all 0.25s ease",
                  textAlign: "center", position: "relative",
                }}
                  onMouseEnter={(e) => { if (selected.id !== m.id) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; }}
                  onMouseLeave={(e) => { if (selected.id !== m.id) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
                >
                  {m.isNew && (
                    <span style={{ position: "absolute", top: "10px", right: "10px", fontSize: "9px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--brand)", background: "rgba(var(--brand-rgb),0.15)", padding: "2px 6px", borderRadius: "4px" }}>NEW</span>
                  )}
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "120px", marginBottom: "12px" }}>
                    {img && <img src={img} alt={`${m.name} — ${m.year}`} loading="lazy" decoding="async" style={{ height: "118px", width: "auto", maxWidth: "100%", objectFit: "contain" }} />}
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.015em", marginBottom: "4px" }}>{m.name}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>{m.year}</div>
                </button>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Detail */}
      {selected && (
        <section style={{ background: "#1d1d1f", padding: "80px 22px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <FadeIn>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="device-detail-grid">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "380px" }}>
                  {imageFor(selected.id) && <img src={imageFor(selected.id) as string} alt={`${selected.name} — ${selected.year}`} loading="lazy" decoding="async" style={{ height: "380px", width: "auto", maxWidth: "100%", objectFit: "contain" }} />}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                    <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: 0 }}>{selected.year}</p>
                    {selected.isNew && <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--brand)", background: "rgba(var(--brand-rgb),0.15)", padding: "3px 8px", borderRadius: "6px" }}>NEW</span>}
                  </div>
                  <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#f5f5f7", margin: "0 0 16px" }}>{selected.name}</h2>
                  <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5, letterSpacing: "-0.022em", marginBottom: "40px" }}>{selected.highlight}</p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "32px" }}>
                    {selected.specs.map((spec) => (
                      <div key={spec.label} style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "16px" }}>
                        <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "6px" }}>{spec.label}</div>
                        <div style={{ fontSize: "14px", color: "#f5f5f7", letterSpacing: "-0.015em", lineHeight: 1.4 }}>{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <span style={{ fontSize: "22px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.025em" }}>{selected.priceLabel}</span>
                  </div>

                  {selected.tags && selected.tags.length > 0 && (
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "10px" }}>Highlights</div>
                      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                        {selected.tags.map((tag) => (
                          <span key={tag} style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.06)", padding: "4px 10px", borderRadius: "980px", border: "1px solid rgba(255,255,255,0.1)" }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Table */}
      <section style={{ background: "#000", padding: "100px 22px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", overflowX: "auto" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px", textAlign: "center" }}>Compare</p>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "60px" }}>The full lineup.</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "760px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  {["Model", "Year", ...specLabels, "Price"].map((h) => (
                    <th key={h} style={{ padding: "12px 16px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", textAlign: "left" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...models].reverse().map((m) => (
                  <tr key={m.id} onClick={() => setSelected(m)} style={{
                    borderBottom: "1px solid rgba(255,255,255,0.06)", cursor: "pointer",
                    background: selected.id === m.id ? "rgba(255,255,255,0.04)" : "transparent", transition: "background 0.2s ease",
                  }}
                    onMouseEnter={(e) => { if (selected.id !== m.id) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; }}
                    onMouseLeave={(e) => { if (selected.id !== m.id) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >
                    <td style={{ padding: "16px", fontSize: "14px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.015em", whiteSpace: "nowrap" }}>
                      {m.isNew && <span style={{ fontSize: "9px", fontWeight: 700, color: "var(--brand)", marginRight: "6px", letterSpacing: "0.06em", textTransform: "uppercase" }}>NEW</span>}
                      {m.name}
                    </td>
                    <td style={{ padding: "16px", fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{m.year}</td>
                    {specLabels.map((label) => (
                      <td key={label} style={{ padding: "16px", fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "200px" }}>
                        {m.specs.find((s) => s.label === label)?.value ?? "—"}
                      </td>
                    ))}
                    <td style={{ padding: "16px", fontSize: "13px", color: "rgba(255,255,255,0.7)", whiteSpace: "nowrap" }}>{m.priceLabel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .device-detail-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
