/*
  Compare Page — Everything Apple
  Design: Apple.com dark product page aesthetic
  - Pure black background with dramatic lighting
  - 3D CSS perspective transforms on phone images (drag/touch to rotate)
  - Sticky spec comparison table with category grouping
  - Animated phone entrance from bottom
  - Mobile-first: horizontal scroll for comparison table
  Built by Cory Hepler
*/
import { useState, useRef, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShareButton from "../components/ShareButton";
import useScrollReveal from "../hooks/useScrollReveal";

// ── Phone Data ─────────────────────────────────────────────────────────────
interface Phone {
  id: string;
  brand: string;
  name: string;
  tagline: string;
  image: string;
  color: string; // brand accent color
  price: string;
  priceNote?: string;
  specs: Record<string, string>;
}

const PHONES: Phone[] = [
  {
    id: "iphone-17-pro",
    brand: "Apple",
    name: "iPhone 17 Pro",
    tagline: "Titanium. Intelligence. Pro.",
    image: "/manus-storage/iphone-17-pro_22d71d29.jpg",
    color: "#2997ff",
    price: "$999",
    priceNote: "Starting",
    specs: {
      display: "6.3\" Super Retina XDR OLED, 2622×1206, 460 ppi",
      chip: "Apple A19 Pro (3nm)",
      ram: "8 GB",
      storage: "128 GB – 1 TB",
      mainCamera: "48 MP Fusion, f/1.78",
      ultraWide: "48 MP, f/2.2",
      telephoto: "12 MP 5× optical zoom",
      frontCamera: "12 MP TrueDepth",
      video: "4K 120fps ProRes, Log video",
      battery: "3,274 mAh",
      charging: "30W MagSafe, 15W Qi2",
      os: "iOS 27",
      build: "Titanium frame, textured matte glass",
      weight: "199 g",
      dimensions: "149.6 × 71.5 × 8.25 mm",
      ip: "IP68 (6m/30min)",
      connectivity: "5G, Wi-Fi 7, Bluetooth 5.4, UWB",
      biometrics: "Face ID",
      ai: "Apple Intelligence, Siri AI",
    },
  },
  {
    id: "samsung-s25-ultra",
    brand: "Samsung",
    name: "Galaxy S25 Ultra",
    tagline: "Galaxy AI. Built for power.",
    image: "/manus-storage/samsung-s25-ultra_e3f940e9.jpg",
    color: "#1428a0",
    price: "$1,299",
    priceNote: "Starting",
    specs: {
      display: "6.9\" Dynamic AMOLED 2X, 3088×1440, 505 ppi",
      chip: "Snapdragon 8 Elite (3nm)",
      ram: "12 GB",
      storage: "256 GB – 1 TB",
      mainCamera: "200 MP, f/1.7, OIS",
      ultraWide: "50 MP, f/1.9",
      telephoto: "50 MP 5× + 10 MP 3× optical zoom",
      frontCamera: "12 MP",
      video: "8K 30fps, 4K 120fps",
      battery: "5,000 mAh",
      charging: "45W wired, 15W wireless",
      os: "Android 15, One UI 7",
      build: "Titanium frame, Corning Gorilla Armor 2",
      weight: "218 g",
      dimensions: "162.8 × 77.6 × 8.2 mm",
      ip: "IP68",
      connectivity: "5G, Wi-Fi 7, Bluetooth 5.4, UWB",
      biometrics: "Ultrasonic fingerprint, Face unlock",
      ai: "Galaxy AI, Google Gemini",
    },
  },
  {
    id: "pixel-9-pro",
    brand: "Google",
    name: "Pixel 9 Pro",
    tagline: "Google AI. In your pocket.",
    image: "/manus-storage/pixel-9-pro_b87d92c8.png",
    color: "#4285f4",
    price: "$999",
    priceNote: "Starting",
    specs: {
      display: "6.3\" LTPO OLED, 2856×1280, 495 ppi",
      chip: "Google Tensor G4 (4nm)",
      ram: "16 GB",
      storage: "128 GB – 1 TB",
      mainCamera: "50 MP, f/1.68, OIS",
      ultraWide: "48 MP, f/1.7",
      telephoto: "48 MP 5× optical zoom",
      frontCamera: "10.5 MP",
      video: "4K 60fps, 8K 30fps",
      battery: "4,700 mAh",
      charging: "37W wired, 23W wireless",
      os: "Android 15",
      build: "Polished aluminum frame, matte glass",
      weight: "199 g",
      dimensions: "152.1 × 71.9 × 8.5 mm",
      ip: "IP68",
      connectivity: "5G, Wi-Fi 7, Bluetooth 5.3, UWB",
      biometrics: "Under-display fingerprint, Face unlock",
      ai: "Gemini, Google AI features",
    },
  },
  {
    id: "nothing-phone-3",
    brand: "Nothing",
    name: "Nothing Phone (3)",
    tagline: "Transparent. Distinctive.",
    image: "/manus-storage/nothing-phone-3_d37fbe37.jpg",
    color: "#e8e8e8",
    price: "$799",
    priceNote: "Est.",
    specs: {
      display: "6.7\" LTPO AMOLED, 2800×1260, 460 ppi",
      chip: "Snapdragon 8s Gen 4 (3nm)",
      ram: "12 GB",
      storage: "256 GB – 512 GB",
      mainCamera: "50 MP, f/1.88, OIS",
      ultraWide: "50 MP, f/2.2",
      telephoto: "50 MP 3× optical zoom",
      frontCamera: "32 MP",
      video: "4K 60fps",
      battery: "5,000 mAh",
      charging: "65W wired, 15W wireless",
      os: "Nothing OS 4.0 (Android 15)",
      build: "Transparent back, aluminum frame, Glyph Interface",
      weight: "190 g",
      dimensions: "160.8 × 75.2 × 8.3 mm",
      ip: "IP54",
      connectivity: "5G, Wi-Fi 7, Bluetooth 5.4",
      biometrics: "Side fingerprint, Face unlock",
      ai: "Essential Space AI, ChatGPT",
    },
  },
  {
    id: "oppo-find-x8-pro",
    brand: "OPPO",
    name: "Find X8 Pro",
    tagline: "Hasselblad. Perfected.",
    image: "/manus-storage/oppo-find-x8-pro_c70d4ca5.png",
    color: "#ff5a00",
    price: "$1,099",
    priceNote: "Starting",
    specs: {
      display: "6.78\" LTPO AMOLED, 2780×1264, 450 ppi",
      chip: "MediaTek Dimensity 9400 (3nm)",
      ram: "16 GB",
      storage: "256 GB – 1 TB",
      mainCamera: "50 MP Hasselblad, f/1.6, OIS",
      ultraWide: "50 MP, f/2.0",
      telephoto: "50 MP 3× + 50 MP 6× optical zoom",
      frontCamera: "32 MP",
      video: "4K 120fps, LOG video",
      battery: "5,910 mAh",
      charging: "80W SUPERVOOC, 50W wireless",
      os: "ColorOS 15 (Android 15)",
      build: "Vegan leather / ceramic back, titanium frame",
      weight: "218 g",
      dimensions: "162.4 × 76.0 × 8.2 mm",
      ip: "IP69",
      connectivity: "5G, Wi-Fi 7, Bluetooth 5.4, NFC",
      biometrics: "Under-display fingerprint, 3D Face unlock",
      ai: "AndesGPT, Google Gemini",
    },
  },
  {
    id: "oneplus-13",
    brand: "OnePlus",
    name: "OnePlus 13",
    tagline: "Hasselblad. Never Settle.",
    image: "/manus-storage/oneplus-13_6b042efb.webp",
    color: "#eb0029",
    price: "$899",
    priceNote: "Starting",
    specs: {
      display: "6.82\" LTPO AMOLED, 3168×1440, 510 ppi",
      chip: "Snapdragon 8 Elite (3nm)",
      ram: "12 GB – 24 GB",
      storage: "256 GB – 1 TB",
      mainCamera: "50 MP Hasselblad, f/1.6, OIS",
      ultraWide: "50 MP, f/2.0",
      telephoto: "50 MP 3× optical zoom",
      frontCamera: "32 MP",
      video: "4K 120fps, LOG video",
      battery: "6,000 mAh",
      charging: "100W SUPERVOOC, 50W wireless",
      os: "OxygenOS 15 (Android 15)",
      build: "Nano-ceramic glass, aluminum frame",
      weight: "210 g",
      dimensions: "162.9 × 76.0 × 8.5 mm",
      ip: "IP69",
      connectivity: "5G, Wi-Fi 7, Bluetooth 5.4, NFC",
      biometrics: "Under-display fingerprint, Face unlock",
      ai: "Google Gemini, OnePlus AI",
    },
  },
];

const SPEC_CATEGORIES = [
  { label: "Price", key: "price" },
  { label: "Display", key: "display" },
  { label: "Chip", key: "chip" },
  { label: "RAM", key: "ram" },
  { label: "Storage", key: "storage" },
  { label: "Main Camera", key: "mainCamera" },
  { label: "Ultra-Wide", key: "ultraWide" },
  { label: "Telephoto", key: "telephoto" },
  { label: "Front Camera", key: "frontCamera" },
  { label: "Video", key: "video" },
  { label: "Battery", key: "battery" },
  { label: "Charging", key: "charging" },
  { label: "OS", key: "os" },
  { label: "Build", key: "build" },
  { label: "Weight", key: "weight" },
  { label: "Dimensions", key: "dimensions" },
  { label: "IP Rating", key: "ip" },
  { label: "Connectivity", key: "connectivity" },
  { label: "Biometrics", key: "biometrics" },
  { label: "AI Features", key: "ai" },
];

// ── 3D Phone Card ──────────────────────────────────────────────────────────
function Phone3DCard({ phone, isSelected, onSelect }: {
  phone: Phone;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotX = useRef(0);
  const rotY = useRef(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const animFrame = useRef<number>(0);

  const applyTransform = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotX.current}deg) rotateY(${rotY.current}deg)`;
  }, []);

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastX.current = e.clientX;
    lastY.current = e.clientY;
  };

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastX.current;
    const dy = e.clientY - lastY.current;
    lastX.current = e.clientX;
    lastY.current = e.clientY;
    rotY.current = Math.max(-35, Math.min(35, rotY.current + dx * 0.4));
    rotX.current = Math.max(-20, Math.min(20, rotX.current - dy * 0.3));
    cancelAnimationFrame(animFrame.current);
    animFrame.current = requestAnimationFrame(applyTransform);
  }, [applyTransform]);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    // Spring back to center
    const springBack = () => {
      rotX.current *= 0.88;
      rotY.current *= 0.88;
      applyTransform();
      if (Math.abs(rotX.current) > 0.1 || Math.abs(rotY.current) > 0.1) {
        animFrame.current = requestAnimationFrame(springBack);
      } else {
        rotX.current = 0;
        rotY.current = 0;
        applyTransform();
      }
    };
    animFrame.current = requestAnimationFrame(springBack);
  }, [applyTransform]);

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    lastX.current = e.touches[0].clientX;
    lastY.current = e.touches[0].clientY;
  };

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - lastX.current;
    const dy = e.touches[0].clientY - lastY.current;
    lastX.current = e.touches[0].clientX;
    lastY.current = e.touches[0].clientY;
    rotY.current = Math.max(-35, Math.min(35, rotY.current + dx * 0.5));
    rotX.current = Math.max(-20, Math.min(20, rotX.current - dy * 0.35));
    cancelAnimationFrame(animFrame.current);
    animFrame.current = requestAnimationFrame(applyTransform);
    e.preventDefault();
  }, [applyTransform]);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
      cancelAnimationFrame(animFrame.current);
    };
  }, [onMouseMove, onMouseUp, onTouchMove]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        cursor: "grab",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* 3D phone image */}
      <div
        ref={cardRef}
        style={{
          width: "160px",
          height: "320px",
          position: "relative",
          transition: isDragging.current ? "none" : "transform 0.05s ease",
          willChange: "transform",
          filter: isSelected
            ? `drop-shadow(0 0 40px ${phone.color}55) drop-shadow(0 20px 60px rgba(0,0,0,0.6))`
            : "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
        }}
      >
        <img
          src={phone.image}
          alt={`${phone.brand} ${phone.name}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            pointerEvents: "none",
            transition: "filter 0.3s ease",
          }}
          draggable={false}
        />
        {/* Reflection */}
        <div style={{
          position: "absolute",
          bottom: "-40px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "40px",
          background: `radial-gradient(ellipse, ${phone.color}30 0%, transparent 70%)`,
          filter: "blur(8px)",
        }} />
      </div>

      {/* Phone info */}
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: phone.color,
          marginBottom: "4px",
        }}>
          {phone.brand}
        </div>
        <div style={{
          fontSize: "18px",
          fontWeight: 600,
          letterSpacing: "-0.022em",
          color: "#f5f5f7",
          marginBottom: "4px",
        }}>
          {phone.name}
        </div>
        <div style={{
          fontSize: "13px",
          color: "rgba(245,245,247,0.5)",
          marginBottom: "12px",
          letterSpacing: "-0.01em",
        }}>
          {phone.tagline}
        </div>
        <div style={{
          fontSize: "22px",
          fontWeight: 700,
          letterSpacing: "-0.022em",
          color: "#f5f5f7",
        }}>
          {phone.price}
          {phone.priceNote && (
            <span style={{ fontSize: "13px", fontWeight: 400, color: "rgba(245,245,247,0.5)", marginLeft: "4px" }}>
              {phone.priceNote}
            </span>
          )}
        </div>
      </div>

      {/* Select toggle */}
      <button
        onClick={onSelect}
        style={{
          padding: "8px 20px",
          borderRadius: "980px",
          border: `1.5px solid ${isSelected ? phone.color : "rgba(255,255,255,0.2)"}`,
          background: isSelected ? phone.color : "transparent",
          color: isSelected ? "#fff" : "rgba(245,245,247,0.7)",
          fontSize: "13px",
          fontWeight: 500,
          cursor: "pointer",
          transition: "all 0.2s ease",
          letterSpacing: "-0.01em",
        }}
      >
        {isSelected ? "Selected" : "Compare"}
      </button>
    </div>
  );
}

// ── Comparison Table ───────────────────────────────────────────────────────
function ComparisonTable({ phones }: { phones: Phone[] }) {
  if (phones.length === 0) return (
    <div style={{
      textAlign: "center",
      padding: "80px 20px",
      color: "rgba(245,245,247,0.4)",
      fontSize: "17px",
    }}>
      Select 2–4 phones above to compare specs
    </div>
  );

  return (
    <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
      <table style={{
        width: "100%",
        minWidth: `${Math.max(600, phones.length * 200)}px`,
        borderCollapse: "collapse",
      }}>
        <thead>
          <tr>
            <th style={{
              width: "160px",
              minWidth: "120px",
              padding: "16px 20px",
              textAlign: "left",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(245,245,247,0.4)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              background: "#0a0a0a",
              position: "sticky",
              left: 0,
              zIndex: 2,
            }}>
              Spec
            </th>
            {phones.map(phone => (
              <th key={phone.id} style={{
                padding: "16px 20px",
                textAlign: "center",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                background: "#0a0a0a",
              }}>
                <div style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: phone.color,
                  marginBottom: "2px",
                }}>{phone.brand}</div>
                <div style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "-0.022em",
                  color: "#f5f5f7",
                }}>{phone.name}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SPEC_CATEGORIES.map((cat, i) => (
            <tr key={cat.key} style={{
              background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
            }}>
              <td style={{
                padding: "14px 20px",
                fontSize: "13px",
                fontWeight: 500,
                color: "rgba(245,245,247,0.55)",
                letterSpacing: "-0.01em",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "#000",
                position: "sticky",
                left: 0,
                zIndex: 1,
              }}>
                {cat.label}
              </td>
              {phones.map(phone => {
                const value = cat.key === "price"
                  ? `${phone.price}${phone.priceNote ? ` ${phone.priceNote}` : ""}`
                  : phone.specs[cat.key] || "—";
                return (
                  <td key={phone.id} style={{
                    padding: "14px 20px",
                    fontSize: "13px",
                    color: "rgba(245,245,247,0.85)",
                    letterSpacing: "-0.01em",
                    textAlign: "center",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    lineHeight: 1.5,
                  }}>
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function Compare() {
  useScrollReveal();
  const [selectedIds, setSelectedIds] = useState<string[]>(["iphone-17-pro", "samsung-s25-ultra"]);

  const togglePhone = (id: string) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(p => p !== id);
      }
      if (prev.length >= 4) {
        // Replace oldest selection
        return [...prev.slice(1), id];
      }
      return [...prev, id];
    });
  };

  const selectedPhones = PHONES.filter(p => selectedIds.includes(p.id));

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        paddingTop: "calc(var(--banner-height, 0px) + 52px + 80px)",
        paddingBottom: "60px",
        textAlign: "center",
        background: "#000",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <div className="reveal" style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#2997ff",
            marginBottom: "16px",
          }}>
            Flagship Comparison 2025
          </div>
          <h1 className="reveal delay-100" style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 700,
            letterSpacing: "-0.022em",
            color: "#f5f5f7",
            lineHeight: 1.05,
            marginBottom: "20px",
          }}>
            The best phones.<br />Side by side.
          </h1>
          <p className="reveal delay-200" style={{
            fontSize: "19px",
            color: "rgba(245,245,247,0.6)",
            letterSpacing: "-0.022em",
            lineHeight: 1.6,
            marginBottom: "32px",
          }}>
            Drag to rotate. Select up to 4 phones. Compare every spec that matters.
          </p>
          <div className="reveal delay-300" style={{ display: "flex", justifyContent: "center" }}>
            <ShareButton title="Flagship Phone Comparison 2025" text="Compare iPhone 17 Pro vs Samsung Galaxy S25 Ultra vs Google Pixel 9 Pro and more" dark={true} />
          </div>
        </div>
      </section>

      {/* 3D Phone Carousel */}
      <section style={{
        background: "#000",
        padding: "20px 0 80px",
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
      }}>
        <div style={{
          display: "flex",
          gap: "40px",
          padding: "40px 60px",
          minWidth: "max-content",
          margin: "0 auto",
          justifyContent: "center",
        }}>
          {PHONES.map(phone => (
            <Phone3DCard
              key={phone.id}
              phone={phone}
              isSelected={selectedIds.includes(phone.id)}
              onSelect={() => togglePhone(phone.id)}
            />
          ))}
        </div>
        <p style={{
          textAlign: "center",
          fontSize: "12px",
          color: "rgba(245,245,247,0.3)",
          letterSpacing: "-0.01em",
          marginTop: "8px",
        }}>
          Drag each phone to rotate in 3D
        </p>
      </section>

      {/* Comparison Table */}
      <section style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "0 0 120px",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {/* Table header */}
          <div style={{
            padding: "40px 24px 24px",
            display: "flex",
            alignItems: "baseline",
            gap: "12px",
          }}>
            <h2 style={{
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "-0.022em",
              color: "#f5f5f7",
            }}>
              Spec Comparison
            </h2>
            <span style={{
              fontSize: "14px",
              color: "rgba(245,245,247,0.4)",
            }}>
              {selectedPhones.length} phone{selectedPhones.length !== 1 ? "s" : ""} selected
            </span>
          </div>

          <ComparisonTable phones={selectedPhones} />
        </div>
      </section>

      {/* Verdict section */}
      {selectedPhones.length >= 2 && (
        <section style={{
          background: "#0a0a0a",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "80px 24px",
        }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 className="reveal" style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.022em",
              color: "#f5f5f7",
              marginBottom: "40px",
              textAlign: "center",
            }}>
              Our Take
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}>
              {[
                {
                  title: "Best for iPhone users",
                  winner: "iPhone 17 Pro",
                  reason: "The tightest hardware-software integration, Apple Intelligence, and the best video camera system on any phone.",
                  color: "#2997ff",
                },
                {
                  title: "Best camera versatility",
                  winner: "Samsung Galaxy S25 Ultra",
                  reason: "200 MP main sensor, quad telephoto system, and S Pen make it the most capable camera phone for professionals.",
                  color: "#1428a0",
                },
                {
                  title: "Best AI experience",
                  winner: "Google Pixel 9 Pro",
                  reason: "Native Gemini integration, Magic Eraser, and Best Take are the most seamless AI photo tools available.",
                  color: "#4285f4",
                },
                {
                  title: "Best value",
                  winner: "OnePlus 13",
                  reason: "100W charging, 6,000 mAh battery, and Snapdragon 8 Elite at $899 is the best performance-per-dollar flagship.",
                  color: "#eb0029",
                },
              ].map((verdict, i) => (
                <div key={i} className="reveal" style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  padding: "28px",
                  animationDelay: `${i * 0.1}s`,
                }}>
                  <div style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: verdict.color,
                    marginBottom: "8px",
                  }}>
                    {verdict.title}
                  </div>
                  <div style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    letterSpacing: "-0.022em",
                    color: "#f5f5f7",
                    marginBottom: "10px",
                  }}>
                    {verdict.winner}
                  </div>
                  <div style={{
                    fontSize: "14px",
                    color: "rgba(245,245,247,0.6)",
                    lineHeight: 1.6,
                    letterSpacing: "-0.01em",
                  }}>
                    {verdict.reason}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
