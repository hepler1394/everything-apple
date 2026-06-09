/* =============================================================
   iPhones Page — Apple.com design language
   Every iPhone from 11 to 17, clean grid, no emojis
   Built by Cory Hepler
   ============================================================= */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const IMGS = {
  lineup: "/manus-storage/iphone-lineup-11-17_b4dd07e0.jpg",
  proLineup: "/manus-storage/iphone-pro-lineup_3fdcde73.jpeg",
  iphone11: "/manus-storage/iphone-11_f2cc236a.jpg",
  iphone16Pro: "/manus-storage/iphone-16-pro_2bdde138.jpg",
  iphone16ProMax: "/manus-storage/iphone-16-pro-max_27a4a742.jpg",
  iphone17: "/manus-storage/iphone-17_5b16b84b.png",
  iphone17Pro: "/manus-storage/iphone-17-pro_8a9ea682.png",
  iphoneAir: "/manus-storage/iphone-air_ac6cb200.jpg",
  // Official Apple CDN transparent PNGs
  iphone16Plus: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-plus-pink-select?wid=940&hei=1112&fmt=png-alpha",
  iphone16: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-black-select?wid=940&hei=1112&fmt=png-alpha",
  iphone15ProMax: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=940&hei=1112&fmt=png-alpha",
  iphone15Pro: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-natural-titanium-select?wid=940&hei=1112&fmt=png-alpha",
  iphone15Plus: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select?wid=940&hei=1112&fmt=png-alpha",
  iphone15: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-blue-select?wid=940&hei=1112&fmt=png-alpha",
  iphone14ProMax: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-deep-purple-select?wid=940&hei=1112&fmt=png-alpha",
  iphone14Pro: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-deep-purple-select?wid=940&hei=1112&fmt=png-alpha",
  iphone14Plus: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-plus-blue-select?wid=940&hei=1112&fmt=png-alpha",
  iphone14: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select-202209?wid=940&hei=1112&fmt=png-alpha",
  iphone13ProMax: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-alpine-green-select?wid=940&hei=1112&fmt=png-alpha",
  iphone13Pro: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-sierra-blue-select?wid=940&hei=1112&fmt=png-alpha",
  iphone13: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-select-2021?wid=940&hei=1112&fmt=png-alpha",
  iphone12ProMax: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-pacific-blue-select?wid=940&hei=1112&fmt=png-alpha",
  iphone12Pro: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-pacific-blue-select?wid=940&hei=1112&fmt=png-alpha",
  iphone12: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha",
  iphone11Pro: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha",
};

const FALLBACK = IMGS.iphone16; // safe fallback to a real image

const iphones = [
  {
    id: "iphone17",
    series: "iPhone 17 Series",
    year: "2025",
    tag: "Current",
    models: [
      {
        name: "iPhone 17 Pro Max",
        img: IMGS.iphone17Pro,
        chip: "A19 Pro",
        display: "6.9\" Super Retina XDR OLED",
        camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
        battery: "Up to 33 hrs video",
        storage: "256GB – 1TB",
        colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
        price: "From $1,199",
        ios: "iOS 26 / iOS 27",
        highlights: ["Camera Control button", "ProMotion 1–120Hz", "Action Button", "USB-C 3 (40Gb/s)", "Apple Intelligence"],
      },
      {
        name: "iPhone 17 Pro",
        img: IMGS.iphone17Pro,
        chip: "A19 Pro",
        display: "6.3\" Super Retina XDR OLED",
        camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
        battery: "Up to 27 hrs video",
        storage: "128GB – 1TB",
        colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
        price: "From $999",
        ios: "iOS 26 / iOS 27",
        highlights: ["Camera Control button", "ProMotion 1–120Hz", "Action Button", "USB-C 3", "Apple Intelligence"],
      },
      {
        name: "iPhone 17 Air",
        img: IMGS.iphoneAir,
        chip: "A18",
        display: "6.6\" Super Retina XDR OLED",
        camera: "48MP Fusion + 12MP Ultra Wide",
        battery: "Up to 22 hrs video",
        storage: "128GB – 512GB",
        colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
        price: "From $899",
        ios: "iOS 26 / iOS 27",
        highlights: ["Thinnest iPhone ever (5.5mm)", "Camera Control button", "Action Button", "USB-C", "Apple Intelligence"],
      },
      {
        name: "iPhone 17",
        img: IMGS.iphone17,
        chip: "A18",
        display: "6.1\" Super Retina XDR OLED",
        camera: "48MP Fusion + 12MP Ultra Wide",
        battery: "Up to 22 hrs video",
        storage: "128GB – 512GB",
        colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
        price: "From $799",
        ios: "iOS 26 / iOS 27",
        highlights: ["Camera Control button", "Action Button", "USB-C", "Apple Intelligence", "Dynamic Island"],
      },
    ],
  },
  {
    id: "iphone16",
    series: "iPhone 16 Series",
    year: "2024",
    tag: "2024",
    models: [
      {
        name: "iPhone 16 Pro Max",
        img: IMGS.iphone16ProMax,
        chip: "A18 Pro",
        display: "6.9\" Super Retina XDR OLED",
        camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
        battery: "Up to 33 hrs video",
        storage: "256GB – 1TB",
        colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
        price: "From $1,099",
        ios: "iOS 18 – iOS 27",
        highlights: ["Camera Control button", "ProMotion 1–120Hz", "Action Button", "USB-C 3", "Apple Intelligence"],
      },
      {
        name: "iPhone 16 Pro",
        img: IMGS.iphone16Pro,
        chip: "A18 Pro",
        display: "6.3\" Super Retina XDR OLED",
        camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
        battery: "Up to 27 hrs video",
        storage: "128GB – 1TB",
        colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
        price: "From $999",
        ios: "iOS 18 – iOS 27",
        highlights: ["Camera Control button", "ProMotion 1–120Hz", "Action Button", "USB-C 3", "Apple Intelligence"],
      },
      {
        name: "iPhone 16 Plus",
        img: IMGS.iphone16Plus,
        chip: "A18",
        display: "6.7\" Super Retina XDR OLED",
        camera: "48MP Fusion + 12MP Ultra Wide",
        battery: "Up to 27 hrs video",
        storage: "128GB – 512GB",
        colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
        price: "From $899",
        ios: "iOS 18 – iOS 27",
        highlights: ["Camera Control button", "Action Button", "USB-C", "Apple Intelligence", "Dynamic Island"],
      },
      {
        name: "iPhone 16",
        img: IMGS.iphone16,
        chip: "A18",
        display: "6.1\" Super Retina XDR OLED",
        camera: "48MP Fusion + 12MP Ultra Wide",
        battery: "Up to 22 hrs video",
        storage: "128GB – 512GB",
        colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
        price: "From $799",
        ios: "iOS 18 – iOS 27",
        highlights: ["Camera Control button", "Action Button", "USB-C", "Apple Intelligence", "Dynamic Island"],
      },
    ],
  },
  {
    id: "iphone15",
    series: "iPhone 15 Series",
    year: "2023",
    tag: "2023",
    models: [
      {
        name: "iPhone 15 Pro Max",
        img: IMGS.iphone15ProMax,
        chip: "A17 Pro",
        display: "6.7\" Super Retina XDR OLED",
        camera: "48MP Main + 12MP Ultra Wide + 12MP 5x Telephoto",
        battery: "Up to 29 hrs video",
        storage: "256GB – 1TB",
        colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
        price: "From $899 (refurb)",
        ios: "iOS 17 – iOS 27",
        highlights: ["First titanium iPhone", "Action Button", "USB-C 3", "ProMotion 120Hz", "Apple Intelligence"],
      },
      {
        name: "iPhone 15 Pro",
        img: IMGS.iphone15Pro,
        chip: "A17 Pro",
        display: "6.1\" Super Retina XDR OLED",
        camera: "48MP Main + 12MP Ultra Wide + 12MP 3x Telephoto",
        battery: "Up to 23 hrs video",
        storage: "128GB – 1TB",
        colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
        price: "From $799 (refurb)",
        ios: "iOS 17 – iOS 27",
        highlights: ["First titanium iPhone", "Action Button", "USB-C 3", "ProMotion 120Hz", "Apple Intelligence"],
      },
      {
        name: "iPhone 15 Plus",
        img: IMGS.iphone15Plus,
        chip: "A16 Bionic",
        display: "6.7\" Super Retina XDR OLED",
        camera: "48MP Main + 12MP Ultra Wide",
        battery: "Up to 26 hrs video",
        storage: "128GB – 512GB",
        colors: ["Black", "Blue", "Green", "Yellow", "Pink"],
        price: "From $699 (refurb)",
        ios: "iOS 17 – iOS 27",
        highlights: ["Dynamic Island", "USB-C", "48MP main camera", "Roadside Assistance via Satellite"],
      },
      {
        name: "iPhone 15",
        img: IMGS.iphone15,
        chip: "A16 Bionic",
        display: "6.1\" Super Retina XDR OLED",
        camera: "48MP Main + 12MP Ultra Wide",
        battery: "Up to 20 hrs video",
        storage: "128GB – 512GB",
        colors: ["Black", "Blue", "Green", "Yellow", "Pink"],
        price: "From $599 (refurb)",
        ios: "iOS 17 – iOS 27",
        highlights: ["Dynamic Island", "USB-C", "48MP main camera", "Roadside Assistance via Satellite"],
      },
    ],
  },
  {
    id: "iphone14",
    series: "iPhone 14 Series",
    year: "2022",
    tag: "2022",
    models: [
      {
        name: "iPhone 14 Pro Max",
        img: IMGS.iphone14ProMax,
        chip: "A16 Bionic",
        display: "6.7\" Super Retina XDR OLED",
        camera: "48MP Main + 12MP Ultra Wide + 12MP 3x Telephoto",
        battery: "Up to 29 hrs video",
        storage: "128GB – 1TB",
        colors: ["Deep Purple", "Gold", "Silver", "Space Black"],
        price: "From $699 (refurb)",
        ios: "iOS 16 – iOS 27",
        highlights: ["Dynamic Island introduced", "Always-On Display", "Crash Detection", "Emergency SOS via Satellite"],
      },
      {
        name: "iPhone 14 Pro",
        img: IMGS.iphone14Pro,
        chip: "A16 Bionic",
        display: "6.1\" Super Retina XDR OLED",
        camera: "48MP Main + 12MP Ultra Wide + 12MP 3x Telephoto",
        battery: "Up to 23 hrs video",
        storage: "128GB – 1TB",
        colors: ["Deep Purple", "Gold", "Silver", "Space Black"],
        price: "From $599 (refurb)",
        ios: "iOS 16 – iOS 27",
        highlights: ["Dynamic Island introduced", "Always-On Display", "Crash Detection"],
      },
      {
        name: "iPhone 14 Plus",
        img: IMGS.iphone14Plus,
        chip: "A15 Bionic",
        display: "6.7\" Super Retina XDR OLED",
        camera: "12MP Main + 12MP Ultra Wide",
        battery: "Up to 26 hrs video",
        storage: "128GB – 512GB",
        colors: ["Midnight", "Starlight", "Blue", "Purple", "Red"],
        price: "From $499 (refurb)",
        ios: "iOS 16 – iOS 27",
        highlights: ["Emergency SOS via Satellite", "Crash Detection", "Action Mode video"],
      },
      {
        name: "iPhone 14",
        img: IMGS.iphone14,
        chip: "A15 Bionic",
        display: "6.1\" Super Retina XDR OLED",
        camera: "12MP Main + 12MP Ultra Wide",
        battery: "Up to 20 hrs video",
        storage: "128GB – 512GB",
        colors: ["Midnight", "Starlight", "Blue", "Purple", "Red"],
        price: "From $399 (refurb)",
        ios: "iOS 16 – iOS 27",
        highlights: ["Emergency SOS via Satellite", "Crash Detection", "Action Mode video"],
      },
    ],
  },
  {
    id: "iphone13",
    series: "iPhone 13 Series",
    year: "2021",
    tag: "2021",
    models: [
      {
        name: "iPhone 13 Pro Max",
        img: IMGS.iphone13ProMax,
        chip: "A15 Bionic",
        display: "6.7\" Super Retina XDR OLED",
        camera: "12MP Main + 12MP Ultra Wide + 12MP 3x Telephoto",
        battery: "Up to 28 hrs video",
        storage: "128GB – 1TB",
        colors: ["Alpine Green", "Sierra Blue", "Gold", "Silver", "Graphite"],
        price: "From $399 (refurb)",
        ios: "iOS 15 – iOS 27",
        highlights: ["ProMotion 120Hz", "Macro photography", "Cinematic mode video", "ProRes video"],
      },
      {
        name: "iPhone 13 Pro",
        img: IMGS.iphone13Pro,
        chip: "A15 Bionic",
        display: "6.1\" Super Retina XDR OLED",
        camera: "12MP Main + 12MP Ultra Wide + 12MP 3x Telephoto",
        battery: "Up to 22 hrs video",
        storage: "128GB – 1TB",
        colors: ["Alpine Green", "Sierra Blue", "Gold", "Silver", "Graphite"],
        price: "From $349 (refurb)",
        ios: "iOS 15 – iOS 27",
        highlights: ["ProMotion 120Hz", "Macro photography", "Cinematic mode video"],
      },
      {
        name: "iPhone 13",
        img: IMGS.iphone13,
        chip: "A15 Bionic",
        display: "6.1\" Super Retina XDR OLED",
        camera: "12MP Main + 12MP Ultra Wide",
        battery: "Up to 19 hrs video",
        storage: "128GB – 512GB",
        colors: ["Midnight", "Starlight", "Blue", "Pink", "Red", "Green"],
        price: "From $249 (refurb)",
        ios: "iOS 15 – iOS 27",
        highlights: ["Cinematic mode video", "Improved Night Mode", "Smaller notch"],
      },
    ],
  },
  {
    id: "iphone12",
    series: "iPhone 12 Series",
    year: "2020",
    tag: "2020",
    models: [
      {
        name: "iPhone 12 Pro Max",
        img: IMGS.iphone12ProMax,
        chip: "A14 Bionic",
        display: "6.7\" Super Retina XDR OLED",
        camera: "12MP Main + 12MP Ultra Wide + 12MP 2.5x Telephoto",
        battery: "Up to 20 hrs video",
        storage: "128GB – 512GB",
        colors: ["Pacific Blue", "Gold", "Silver", "Graphite"],
        price: "From $199 (refurb)",
        ios: "iOS 14 – iOS 27",
        highlights: ["5G support", "Ceramic Shield", "MagSafe charging", "OLED display", "LiDAR Scanner"],
      },
      {
        name: "iPhone 12",
        img: IMGS.iphone12,
        chip: "A14 Bionic",
        display: "6.1\" Super Retina XDR OLED",
        camera: "12MP Main + 12MP Ultra Wide",
        battery: "Up to 17 hrs video",
        storage: "64GB – 256GB",
        colors: ["Black", "White", "Red", "Green", "Blue", "Purple"],
        price: "From $149 (refurb)",
        ios: "iOS 14 – iOS 27",
        highlights: ["5G support", "Ceramic Shield", "MagSafe charging", "OLED display"],
      },
    ],
  },
  {
    id: "iphone11",
    series: "iPhone 11 Series",
    year: "2019",
    tag: "2019",
    models: [
      {
        name: "iPhone 11 Pro Max",
        img: IMGS.iphone11Pro,
        chip: "A13 Bionic",
        display: "6.5\" Super Retina XDR OLED",
        camera: "12MP Main + 12MP Ultra Wide + 12MP 2x Telephoto",
        battery: "Up to 20 hrs video",
        storage: "64GB – 512GB",
        colors: ["Space Gray", "Silver", "Gold", "Midnight Green"],
        price: "From $99 (refurb)",
        ios: "iOS 13 – iOS 27",
        highlights: ["Triple camera system", "Night Mode", "4K 60fps video", "Face ID"],
      },
      {
        name: "iPhone 11",
        img: IMGS.iphone11,
        chip: "A13 Bionic",
        display: "6.1\" Liquid Retina LCD",
        camera: "12MP Main + 12MP Ultra Wide",
        battery: "Up to 17 hrs video",
        storage: "64GB – 256GB",
        colors: ["Black", "White", "Red", "Yellow", "Purple", "Green"],
        price: "From $79 (refurb)",
        ios: "iOS 13 – iOS 27",
        highlights: ["Night Mode photography", "4K 60fps video", "Slofie front camera", "Face ID"],
      },
    ],
  },
];

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
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="fade-in-up">{children}</div>;
}

export default function IPhones() {
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);
  const [expandedModel, setExpandedModel] = useState<string | null>(null);

  const displayedSeries = selectedSeries
    ? iphones.filter((s) => s.id === selectedSeries)
    : iphones;

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          overflow: "hidden",
          paddingBottom: "80px",
        }}
      >
        <img
          src={IMGS.lineup}
          alt="iPhone lineup"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.5,
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
            Complete iPhone Encyclopedia
          </div>
          <h1
            className="apple-headline-hero"
            style={{ color: "#f5f5f7", marginBottom: "20px" }}
          >
            Every iPhone.
          </h1>
          <p
            className="apple-body-large"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Real specs, real photos, and iOS compatibility for every iPhone from iPhone 11 to iPhone 17 Pro Max.
          </p>
        </div>
      </section>

      {/* ── Series Filter ── */}
      <section
        style={{
          position: "sticky",
          top: "44px",
          zIndex: 40,
          background: "rgba(0,0,0,0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            padding: "0 22px",
            display: "flex",
            overflowX: "auto",
            scrollbarWidth: "none",
            gap: "4px",
          }}
        >
          <button
            onClick={() => setSelectedSeries(null)}
            style={{
              padding: "14px 16px",
              fontSize: "12px",
              fontWeight: selectedSeries === null ? 600 : 400,
              color: selectedSeries === null ? "#f5f5f7" : "rgba(255,255,255,0.5)",
              background: "none",
              border: "none",
              borderBottom: selectedSeries === null ? "2px solid #0071e3" : "2px solid transparent",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "color 0.2s ease",
              letterSpacing: "-0.01em",
            }}
          >
            All Models
          </button>
          {iphones.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedSeries(s.id === selectedSeries ? null : s.id)}
              style={{
                padding: "14px 16px",
                fontSize: "12px",
                fontWeight: selectedSeries === s.id ? 600 : 400,
                color: selectedSeries === s.id ? "#f5f5f7" : "rgba(255,255,255,0.5)",
                background: "none",
                border: "none",
                borderBottom: selectedSeries === s.id ? "2px solid #0071e3" : "2px solid transparent",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 0.2s ease",
                letterSpacing: "-0.01em",
              }}
            >
              {s.year}
            </button>
          ))}
        </div>
      </section>

      {/* ── iPhone Series ── */}
      <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
        {displayedSeries.map((series) => (
          <section
            key={series.id}
            id={series.id}
            style={{ padding: "80px 0 0" }}
          >
            <FadeSection>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "16px",
                  marginBottom: "40px",
                  flexWrap: "wrap",
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(24px, 4vw, 40px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "#f5f5f7",
                    margin: 0,
                  }}
                >
                  {series.series}
                </h2>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: series.tag === "Current" ? "#0071e3" : "rgba(255,255,255,0.4)",
                    padding: "4px 10px",
                    border: `1px solid ${series.tag === "Current" ? "rgba(0,113,227,0.4)" : "rgba(255,255,255,0.15)"}`,
                    borderRadius: "980px",
                  }}
                >
                  {series.tag}
                </span>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "2px",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  overflow: "hidden",
                }}
              >
                {series.models.map((model) => (
                  <div
                    key={model.name}
                    onClick={() => setExpandedModel(expandedModel === model.name ? null : model.name)}
                    style={{
                      background: "#000",
                      cursor: "pointer",
                      transition: "background 0.2s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#111"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#000"; }}
                  >
                    {/* Image */}
                    <div
                      style={{
                        aspectRatio: "1/1",
                        background: "#111",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={model.img}
                        alt={model.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          padding: "16px",
                          transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                      />
                    </div>

                    {/* Info */}
                    <div style={{ padding: "20px" }}>
                      <h3
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          letterSpacing: "-0.022em",
                          color: "#f5f5f7",
                          margin: "0 0 4px 0",
                        }}
                      >
                        {model.name}
                      </h3>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#0071e3",
                          fontWeight: 500,
                          marginBottom: "4px",
                        }}
                      >
                        {model.chip}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "rgba(255,255,255,0.5)",
                          marginBottom: "8px",
                        }}
                      >
                        {model.display}
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#f5f5f7",
                          marginBottom: "12px",
                        }}
                      >
                        {model.price}
                      </div>

                      {/* Expanded specs */}
                      {expandedModel === model.name && (
                        <div
                          style={{
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                            paddingTop: "16px",
                            marginTop: "4px",
                          }}
                        >
                          {[
                            { label: "Camera", value: model.camera },
                            { label: "Battery", value: model.battery },
                            { label: "Storage", value: model.storage },
                            { label: "Colors", value: model.colors.join(", ") },
                            { label: "iOS Support", value: model.ios },
                          ].map((spec) => (
                            <div key={spec.label} style={{ marginBottom: "10px" }}>
                              <div
                                style={{
                                  fontSize: "11px",
                                  fontWeight: 600,
                                  letterSpacing: "0.06em",
                                  textTransform: "uppercase",
                                  color: "rgba(255,255,255,0.35)",
                                  marginBottom: "2px",
                                }}
                              >
                                {spec.label}
                              </div>
                              <div
                                style={{
                                  fontSize: "13px",
                                  color: "rgba(255,255,255,0.7)",
                                  lineHeight: 1.4,
                                  letterSpacing: "-0.01em",
                                }}
                              >
                                {spec.value}
                              </div>
                            </div>
                          ))}
                          <div style={{ marginTop: "12px" }}>
                            <div
                              style={{
                                fontSize: "11px",
                                fontWeight: 600,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.35)",
                                marginBottom: "8px",
                              }}
                            >
                              Key Features
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                              {model.highlights.map((h) => (
                                <span
                                  key={h}
                                  style={{
                                    fontSize: "11px",
                                    color: "rgba(255,255,255,0.6)",
                                    padding: "3px 8px",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    borderRadius: "980px",
                                  }}
                                >
                                  {h}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      <div
                        style={{
                          marginTop: "12px",
                          fontSize: "12px",
                          color: "#0071e3",
                          fontWeight: 400,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {expandedModel === model.name ? "Show less" : "Show specs"} &rsaquo;
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeSection>
          </section>
        ))}
      </div>

      {/* ── iOS 27 Compatibility ── */}
      <section style={{ background: "#000", padding: "100px 0 80px" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "60px" }} />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "60px",
                alignItems: "start",
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
                  iOS 27
                </div>
                <h2
                  className="apple-headline-section"
                  style={{ color: "#f5f5f7", marginBottom: "20px" }}
                >
                  iOS 27 compatibility.
                </h2>
                <p
                  className="apple-body-large"
                  style={{ color: "rgba(255,255,255,0.65)", marginBottom: "32px" }}
                >
                  iOS 27 is compatible with iPhone 11 and later. All iPhones listed on this page can run iOS 27. Apple Intelligence features require iPhone 15 Pro or later, or any iPhone 16 or 17 model.
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <a
                    href="https://www.apple.com/ios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-btn-primary"
                  >
                    iOS 27 preview
                  </a>
                  <Link href="/jailbreak">
                    <span className="apple-btn-secondary-dark" style={{ cursor: "pointer" }}>
                      Jailbreak checker
                    </span>
                  </Link>
                </div>
              </div>
              <div>
                <div
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "18px",
                    overflow: "hidden",
                  }}
                >
                  {[
                    { model: "iPhone 17 series", ios: "iOS 26 / iOS 27", ai: "Yes" },
                    { model: "iPhone 16 series", ios: "iOS 18 – iOS 27", ai: "Yes" },
                    { model: "iPhone 15 Pro / Pro Max", ios: "iOS 17 – iOS 27", ai: "Yes" },
                    { model: "iPhone 15 / Plus", ios: "iOS 17 – iOS 27", ai: "No" },
                    { model: "iPhone 14 series", ios: "iOS 16 – iOS 27", ai: "No" },
                    { model: "iPhone 13 series", ios: "iOS 15 – iOS 27", ai: "No" },
                    { model: "iPhone 12 series", ios: "iOS 14 – iOS 27", ai: "No" },
                    { model: "iPhone 11 series", ios: "iOS 13 – iOS 27", ai: "No" },
                  ].map((row, i) => (
                    <div
                      key={row.model}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto auto",
                        gap: "16px",
                        padding: "14px 20px",
                        borderBottom: i < 7 ? "1px solid rgba(255,255,255,0.08)" : "none",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", letterSpacing: "-0.01em" }}>
                        {row.model}
                      </span>
                      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", whiteSpace: "nowrap" }}>
                        {row.ios}
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: row.ai === "Yes" ? "#0071e3" : "rgba(255,255,255,0.25)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {row.ai === "Yes" ? "AI" : "—"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>


      <style>{`
        @media (max-width: 768px) {
          .feature-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
