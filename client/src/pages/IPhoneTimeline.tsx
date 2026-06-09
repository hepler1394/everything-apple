/* =============================================================
   iPhone History Timeline — Every model from iPhone 11 to 17
   Interactive horizontal timeline with real photos and full specs
   Apple.com design language — no emojis
   Built by Cory Hepler
   ============================================================= */

import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSearch } from "../App";

interface PhoneModel {
  id: string;
  name: string;
  year: number;
  chip: string;
  display: string;
  camera: string;
  battery: string;
  colors: string[];
  startingPrice: string;
  ios: string;
  maxIOS: string;
  highlight: string;
  image: string;
  isNew?: boolean;
}

const iPhoneModels: PhoneModel[] = [
  {
    id: "iphone-11",
    name: "iPhone 11",
    year: 2019,
    chip: "A13 Bionic",
    display: "6.1-inch Liquid Retina HD",
    camera: "Dual 12MP (Wide + Ultra Wide)",
    battery: "Up to 17 hours video",
    colors: ["Black", "White", "Product Red", "Yellow", "Purple", "Green"],
    startingPrice: "$499 (discontinued)",
    ios: "iOS 13",
    maxIOS: "iOS 18",
    highlight: "Introduced Night Mode and Ultra Wide camera to the mainstream lineup.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-black-select-2019?wid=940&hei=1112&fmt=png-alpha",
  },
  {
    id: "iphone-11-pro",
    name: "iPhone 11 Pro",
    year: 2019,
    chip: "A13 Bionic",
    display: "5.8-inch Super Retina XDR",
    camera: "Triple 12MP (Wide + Ultra Wide + Telephoto)",
    battery: "Up to 18 hours video",
    colors: ["Space Gray", "Silver", "Gold", "Midnight Green"],
    startingPrice: "$999 (discontinued)",
    ios: "iOS 13",
    maxIOS: "iOS 18",
    highlight: "First iPhone with a triple-camera system and ProMotion-class display.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha",
  },
  {
    id: "iphone-12",
    name: "iPhone 12",
    year: 2020,
    chip: "A14 Bionic",
    display: "6.1-inch Super Retina XDR",
    camera: "Dual 12MP (Wide + Ultra Wide)",
    battery: "Up to 17 hours video",
    colors: ["Black", "White", "Product Red", "Blue", "Green", "Purple"],
    startingPrice: "$599 (discontinued)",
    ios: "iOS 14",
    maxIOS: "iOS 18",
    highlight: "First iPhone with 5G and the return of flat-edge design with Ceramic Shield.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha",
  },
  {
    id: "iphone-12-pro",
    name: "iPhone 12 Pro",
    year: 2020,
    chip: "A14 Bionic",
    display: "6.1-inch Super Retina XDR",
    camera: "Triple 12MP + LiDAR Scanner",
    battery: "Up to 17 hours video",
    colors: ["Graphite", "Silver", "Gold", "Pacific Blue"],
    startingPrice: "$999 (discontinued)",
    ios: "iOS 14",
    maxIOS: "iOS 18",
    highlight: "Introduced LiDAR Scanner for AR and ProRAW photography.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-pacific-blue-select?wid=940&hei=1112&fmt=png-alpha",
  },
  {
    id: "iphone-13",
    name: "iPhone 13",
    year: 2021,
    chip: "A15 Bionic",
    display: "6.1-inch Super Retina XDR",
    camera: "Dual 12MP with Cinematic mode",
    battery: "Up to 19 hours video",
    colors: ["Midnight", "Starlight", "Blue", "Pink", "Product Red", "Green"],
    startingPrice: "$699",
    ios: "iOS 15",
    maxIOS: "iOS 18",
    highlight: "Cinematic mode, smaller notch, and massive battery life improvements.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-select-2021?wid=940&hei=1112&fmt=png-alpha",
  },
  {
    id: "iphone-13-pro",
    name: "iPhone 13 Pro",
    year: 2021,
    chip: "A15 Bionic",
    display: "6.1-inch ProMotion 120Hz",
    camera: "Triple 12MP with macro photography",
    battery: "Up to 22 hours video",
    colors: ["Graphite", "Gold", "Silver", "Sierra Blue", "Alpine Green"],
    startingPrice: "$999",
    ios: "iOS 15",
    maxIOS: "iOS 18",
    highlight: "First iPhone with ProMotion 120Hz adaptive display and macro photography.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-sierra-blue-select?wid=940&hei=1112&fmt=png-alpha",
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    year: 2022,
    chip: "A15 Bionic",
    display: "6.1-inch Super Retina XDR",
    camera: "Dual 12MP with Action mode",
    battery: "Up to 20 hours video",
    colors: ["Midnight", "Starlight", "Blue", "Purple", "Product Red", "Yellow"],
    startingPrice: "$699",
    ios: "iOS 16",
    maxIOS: "iOS 18",
    highlight: "Emergency SOS via satellite, Crash Detection, and Action mode video.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select-202209?wid=940&hei=1112&fmt=png-alpha",
  },
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    year: 2022,
    chip: "A16 Bionic",
    display: "6.1-inch Always-On ProMotion 120Hz",
    camera: "48MP main + Triple system",
    battery: "Up to 23 hours video",
    colors: ["Space Black", "Silver", "Gold", "Deep Purple"],
    startingPrice: "$999",
    ios: "iOS 16",
    maxIOS: "iOS 18",
    highlight: "Dynamic Island replaces the notch. First 48MP camera. Always-On display.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-deep-purple-select?wid=940&hei=1112&fmt=png-alpha",
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    year: 2023,
    chip: "A16 Bionic",
    display: "6.1-inch Super Retina XDR Dynamic Island",
    camera: "48MP main + 12MP Ultra Wide",
    battery: "Up to 20 hours video",
    colors: ["Black", "Blue", "Green", "Yellow", "Pink"],
    startingPrice: "$699",
    ios: "iOS 17",
    maxIOS: "iOS 18",
    highlight: "Dynamic Island comes to the standard model. USB-C replaces Lightning.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-blue-select?wid=940&hei=1112&fmt=png-alpha",
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    year: 2023,
    chip: "A17 Pro",
    display: "6.1-inch ProMotion Always-On",
    camera: "48MP main + 12MP Ultra Wide + 12MP 3x Telephoto",
    battery: "Up to 23 hours video",
    colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
    startingPrice: "$999",
    ios: "iOS 17",
    maxIOS: "iOS 18",
    highlight: "Titanium frame, Action Button, USB 3 speeds, and A17 Pro chip.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-natural-titanium-select?wid=940&hei=1112&fmt=png-alpha",
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    year: 2024,
    chip: "A18",
    display: "6.1-inch Super Retina XDR",
    camera: "48MP Fusion + 12MP Ultra Wide",
    battery: "Up to 22 hours video",
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
    startingPrice: "$799",
    ios: "iOS 18",
    maxIOS: "iOS 18+",
    highlight: "Camera Control button, Apple Intelligence, and A18 chip.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-black-select?wid=940&hei=1112&fmt=png-alpha",
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    year: 2024,
    chip: "A18 Pro",
    display: "6.3-inch ProMotion Always-On",
    camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
    battery: "Up to 27 hours video",
    colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
    startingPrice: "$999",
    ios: "iOS 18",
    maxIOS: "iOS 18+",
    highlight: "Largest Pro display ever, 4K 120fps video, and Camera Control.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-desert-titanium-select?wid=940&hei=1112&fmt=png-alpha",
  },
  {
    id: "iphone-17",
    name: "iPhone 17",
    year: 2025,
    chip: "A19",
    display: "6.1-inch ProMotion 120Hz",
    camera: "48MP Fusion + 12MP Ultra Wide",
    battery: "Up to 24 hours video",
    colors: ["Black", "White", "Sky Blue", "Rose", "Mint"],
    startingPrice: "$799 (expected)",
    ios: "iOS 19",
    maxIOS: "iOS 19+",
    highlight: "ProMotion comes to the standard model. Thinner design with aluminum band.",
    image: "https://images.macrumors.com/t/IKqJGDCDGECiWDNJjJJHLNHFJUo=/1600x/article-new/2025/01/iphone-17-mockup.jpg",
    isNew: true,
  },
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    year: 2025,
    chip: "A19 Pro",
    display: "6.3-inch ProMotion Always-On",
    camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
    battery: "Up to 30 hours video",
    colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Rose Titanium"],
    startingPrice: "$1,099 (expected)",
    ios: "iOS 19",
    maxIOS: "iOS 19+",
    highlight: "Slimmest Pro ever. Larger display. Advanced Apple Intelligence features.",
    image: "https://images.macrumors.com/t/IKqJGDCDGECiWDNJjJJHLNHFJUo=/1600x/article-new/2025/01/iphone-17-pro-mockup.jpg",
    isNew: true,
  },
];

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

export default function IPhoneTimeline() {
  const { openSearch } = useSearch();
  const [selectedPhone, setSelectedPhone] = useState<PhoneModel>(iPhoneModels[iPhoneModels.length - 1]);
  const [yearFilter, setYearFilter] = useState<string>("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const years = ["All", ...Array.from(new Set(iPhoneModels.map((m) => m.year.toString()))).sort((a, b) => Number(b) - Number(a))];
  const filteredModels = yearFilter === "All" ? iPhoneModels : iPhoneModels.filter((m) => m.year.toString() === yearFilter);

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Navbar onSearchOpen={openSearch} />

      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(180deg, #1d1d1f 0%, #000 100%)", padding: "140px 22px 80px", textAlign: "center" }}>
        <FadeIn>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>
            iPhone History
          </p>
          <h1 className="apple-headline-hero" style={{ color: "#f5f5f7", marginBottom: "20px" }}>
            Every iPhone.<br />iPhone 11 to 17.
          </h1>
          <p className="apple-body-large" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "600px", margin: "0 auto" }}>
            A complete visual encyclopedia of every iPhone released since 2019. Tap any model to see full specifications, colors, and iOS compatibility.
          </p>
        </FadeIn>
      </section>

      {/* ── Year filter ── */}
      <section style={{ background: "#000", padding: "0 22px 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "16px" }}>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setYearFilter(year)}
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

      {/* ── Timeline horizontal scroll ── */}
      <section style={{ background: "#000", paddingBottom: "80px" }}>
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            padding: "0 22px 24px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {filteredModels.map((phone, i) => (
            <FadeIn key={phone.id} delay={i * 40}>
              <button
                onClick={() => setSelectedPhone(phone)}
                style={{
                  flexShrink: 0,
                  width: "160px",
                  background: selectedPhone.id === phone.id ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)",
                  border: selectedPhone.id === phone.id ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  padding: "20px 16px",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  textAlign: "center",
                  position: "relative",
                }}
                onMouseEnter={(e) => { if (selectedPhone.id !== phone.id) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; }}
                onMouseLeave={(e) => { if (selectedPhone.id !== phone.id) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
              >
                {phone.isNew && (
                  <span style={{ position: "absolute", top: "10px", right: "10px", fontSize: "9px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0071e3", background: "rgba(0,113,227,0.15)", padding: "2px 6px", borderRadius: "4px" }}>
                    NEW
                  </span>
                )}
                <img
                  src={phone.image}
                  alt={phone.name}
                  style={{ width: "80px", height: "100px", objectFit: "contain", marginBottom: "12px" }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.015em", marginBottom: "4px" }}>{phone.name}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>{phone.year}</div>
              </button>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Selected phone detail ── */}
      {selectedPhone && (
        <section style={{ background: "#1d1d1f", padding: "80px 22px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <FadeIn>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="phone-detail-grid">
                {/* Image */}
                <div style={{ textAlign: "center" }}>
                  <img
                    src={selectedPhone.image}
                    alt={selectedPhone.name}
                    style={{ maxWidth: "300px", width: "100%", height: "400px", objectFit: "contain" }}
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.src = `https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=80`;
                    }}
                  />
                </div>
                {/* Specs */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                    <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: 0 }}>
                      {selectedPhone.year}
                    </p>
                    {selectedPhone.isNew && (
                      <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#0071e3", background: "rgba(0,113,227,0.15)", padding: "3px 8px", borderRadius: "6px" }}>
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
                      { label: "Starting iOS", value: selectedPhone.ios },
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
                      Available Colors
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
                {[...iPhoneModels].reverse().map((phone, i) => (
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
                      {phone.isNew && <span style={{ fontSize: "9px", fontWeight: 700, color: "#0071e3", marginRight: "6px", letterSpacing: "0.06em", textTransform: "uppercase" }}>NEW</span>}
                      {phone.name}
                    </td>
                    <td style={{ padding: "16px", fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{phone.year}</td>
                    <td style={{ padding: "16px", fontSize: "13px", color: "rgba(255,255,255,0.7)", whiteSpace: "nowrap" }}>{phone.chip}</td>
                    <td style={{ padding: "16px", fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "180px" }}>{phone.display}</td>
                    <td style={{ padding: "16px", fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "180px" }}>{phone.camera}</td>
                    <td style={{ padding: "16px", fontSize: "13px", color: "rgba(255,255,255,0.6)", whiteSpace: "nowrap" }}>{phone.battery}</td>
                    <td style={{ padding: "16px", fontSize: "13px", color: phone.maxIOS.includes("18") ? "#30d158" : "rgba(255,255,255,0.5)", fontWeight: 500 }}>{phone.maxIOS}</td>
                    <td style={{ padding: "16px", fontSize: "13px", color: "rgba(255,255,255,0.7)", whiteSpace: "nowrap" }}>{phone.startingPrice}</td>
                  </tr>
                ))}
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

      <Footer />
    </div>
  );
}
