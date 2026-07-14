/* =============================================================
   iPhone History Timeline — every iPhone from 2007 to today
   Interactive 3D timeline with transparent vector product art + full specs.
   The renders stay sharp at every size and never carry baked image backgrounds.
   ============================================================= */

import { useState, useRef, useEffect } from "react";
import PhoneRender from "../components/PhoneRender";
import DeviceSwitcher from "../components/DeviceSwitcher";
import DeviceStageCarousel from "../components/DeviceStageCarousel";
import { iPhoneModels, type PhoneModel } from "../data/iphoneHistory";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }
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

/** Transparent vector product art — no baked checkerboards or white image tiles. */
function PhoneVisual({ model, size }: { model: PhoneModel; size: number }) {
  return <PhoneRender modelId={model.id} size={size} />;
}

const defaultModel = iPhoneModels[iPhoneModels.length - 1];

export default function IPhoneTimeline() {
  const [selectedPhone, setSelectedPhone] = useState<PhoneModel>(defaultModel);
  const [yearFilter, setYearFilter] = useState<string>("All");

  const years = ["All", ...Array.from(new Set(iPhoneModels.map((m) => m.year.toString()))).sort((a, b) => Number(b) - Number(a))];
  const filteredModels = yearFilter === "All" ? iPhoneModels : iPhoneModels.filter((m) => m.year.toString() === yearFilter);

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(180deg, #1d1d1f 0%, #000 100%)", padding: "56px 22px 48px", textAlign: "center" }}>
        <FadeIn>
          <DeviceSwitcher />
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>
            iPhone History
          </p>
          <h1 className="apple-headline-hero" style={{ color: "#f5f5f7", marginBottom: "20px" }}>
            Every iPhone.<br />2007 to today.
          </h1>
          <p className="apple-body-large" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "640px", margin: "0 auto" }}>
            A complete visual encyclopedia of every iPhone ever made — {iPhoneModels.length} models across {new Set(iPhoneModels.map((m) => m.year)).size} years. Tap any model for full specs, colors, and iOS support.
          </p>
        </FadeIn>
      </section>

      {/* ── Year filter ── */}
      <section style={{ background: "#000", padding: "0 22px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "16px" }}>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setYearFilter(year)}
                aria-pressed={yearFilter === year}
                style={{
                  padding: "8px 18px",
                  borderRadius: "980px",
                  border: "none",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  background: yearFilter === year ? "#f5f5f7" : "rgba(255,255,255,0.08)",
                  color: yearFilter === year ? "#000" : "rgba(255,255,255,0.6)",
                }}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Floating 3D device stage ── */}
      <section style={{ background: "#000", padding: "0 16px 48px" }}>
        <DeviceStageCarousel
          items={filteredModels}
          activeId={selectedPhone.id}
          onSelect={setSelectedPhone}
          ariaLabel="Every iPhone model"
          renderVisual={(phone, size) => <PhoneVisual model={phone} size={size} />}
        />
      </section>

      {/* ── Selected phone detail ── */}
      {selectedPhone && (
        <section style={{ background: "#1d1d1f", padding: "80px 22px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <FadeIn>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="phone-detail-grid">
                {/* Image */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "420px" }}>
                  <PhoneVisual model={selectedPhone} size={420} />
                </div>
                {/* Specs */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                    <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: 0 }}>
                      {selectedPhone.year}
                    </p>
                    {selectedPhone.isNew && (
                      <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--brand)", background: "rgba(var(--brand-rgb),0.15)", padding: "3px 8px", borderRadius: "6px" }}>
                        NEW
                      </span>
                    )}
                  </div>
                  <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#f5f5f7", margin: "0 0 16px" }}>
                    {selectedPhone.name}
                  </h2>
                  <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5, letterSpacing: "-0.022em", marginBottom: "40px" }}>
                    {selectedPhone.highlight}
                  </p>

                  {/* Specs grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "32px" }}>
                    {[
                      { label: "Chip", value: selectedPhone.chip },
                      { label: "Display", value: selectedPhone.display },
                      { label: "Camera", value: selectedPhone.camera },
                      { label: "Battery", value: selectedPhone.battery },
                      { label: "Launch OS", value: selectedPhone.ios },
                      { label: "Max iOS", value: selectedPhone.maxIOS },
                    ].map((spec) => (
                      <div key={spec.label} style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "16px" }}>
                        <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "6px" }}>
                          {spec.label}
                        </div>
                        <div style={{ fontSize: "14px", color: "#f5f5f7", letterSpacing: "-0.015em", lineHeight: 1.4 }}>
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Starting price */}
                  <div style={{ marginBottom: "24px" }}>
                    <span style={{ fontSize: "22px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.025em" }}>
                      {selectedPhone.startingPrice}
                    </span>
                  </div>

                  {/* Colors */}
                  <div>
                    <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "10px" }}>
                      Launch Colors
                    </div>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {selectedPhone.colors.map((color) => (
                        <span key={color} style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.06)", padding: "4px 10px", borderRadius: "980px", border: "1px solid rgba(255,255,255,0.1)" }}>
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Full comparison table ── */}
      <section style={{ background: "#000", padding: "100px 22px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", overflowX: "auto" }}>
          <FadeIn>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px", textAlign: "center" }}>
              Compare
            </p>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "60px" }}>
              Full specifications table.
            </h2>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "800px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  {["Model", "Year", "Chip", "Display", "Camera", "Battery", "Max iOS", "Price"].map((h) => (
                    <th key={h} style={{ padding: "12px 16px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", textAlign: "left" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...iPhoneModels].reverse().map((phone) => {
                  const current = phone.maxIOS.includes("26") || phone.maxIOS.includes("18+");
                  return (
                    <tr
                      key={phone.id}
                      onClick={() => setSelectedPhone(phone)}
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        cursor: "pointer",
                        background: selectedPhone.id === phone.id ? "rgba(255,255,255,0.04)" : "transparent",
                        transition: "background 0.2s ease",
                      }}
                      onMouseEnter={(e) => { if (selectedPhone.id !== phone.id) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; }}
                      onMouseLeave={(e) => { if (selectedPhone.id !== phone.id) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                    >
                      <td style={{ padding: "16px", fontSize: "14px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.015em", whiteSpace: "nowrap" }}>
                        {phone.isNew && <span style={{ fontSize: "9px", fontWeight: 700, color: "var(--brand)", marginRight: "6px", letterSpacing: "0.06em", textTransform: "uppercase" }}>NEW</span>}
                        {phone.name}
                      </td>
                      <td style={{ padding: "16px", fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{phone.year}</td>
                      <td style={{ padding: "16px", fontSize: "13px", color: "rgba(255,255,255,0.7)", whiteSpace: "nowrap" }}>{phone.chip}</td>
                      <td style={{ padding: "16px", fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "180px" }}>{phone.display}</td>
                      <td style={{ padding: "16px", fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "180px" }}>{phone.camera}</td>
                      <td style={{ padding: "16px", fontSize: "13px", color: "rgba(255,255,255,0.6)", whiteSpace: "nowrap" }}>{phone.battery}</td>
                      <td style={{ padding: "16px", fontSize: "13px", color: current ? "#30d158" : "rgba(255,255,255,0.5)", fontWeight: 500 }}>{phone.maxIOS}</td>
                      <td style={{ padding: "16px", fontSize: "13px", color: "rgba(255,255,255,0.7)", whiteSpace: "nowrap" }}>{phone.startingPrice}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </FadeIn>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .phone-detail-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        div::-webkit-scrollbar { display: none; }
      `}</style>

    </div>
  );
}
