/*
 * Gallery — Everything Apple
 * Design: Apple.com aesthetic — dark, full-bleed, minimal chrome
 * Typography: SF Pro system stack, tight tracking, large display sizes
 * Layout: Masonry-style grid with category filter bar
 * Built by Cory Hepler
 */

import { useState, useCallback } from "react";
import IMGS from "@/lib/imageManifest";

// ── All gallery images organized by category ──
const ALL_IMAGES = [
  // WWDC 2026
  { id: 1, src: IMGS.wwdc.stageInterior, cat: "WWDC 2026", title: "WWDC 2026 Keynote Stage" },
  { id: 2, src: IMGS.wwdc.appleParkoOutdoor, cat: "WWDC 2026", title: "Apple Park Outdoor Stage" },
  { id: 3, src: IMGS.wwdc.appleParkStage, cat: "WWDC 2026", title: "WWDC 2026 Opening" },
  { id: 4, src: IMGS.wwdc.timCookCnet, cat: "WWDC 2026", title: "Tim Cook at WWDC 2026" },
  { id: 5, src: IMGS.wwdc.timCookInc, cat: "WWDC 2026", title: "Tim Cook Keynote" },
  { id: 6, src: IMGS.wwdc.stage1, cat: "WWDC 2026", title: "WWDC 2026 Stage" },

  // Siri AI
  { id: 10, src: "/manus-storage/Apple-Siri-AI-hero-260608_587455d3.jpg", cat: "Siri AI", title: "Siri AI Hero" },
  { id: 11, src: "/manus-storage/Apple-Siri-app-chat-260608_0ba17d39.jpg", cat: "Siri AI", title: "Siri AI Chat Interface" },
  { id: 12, src: "/manus-storage/Apple-Siri-AI-Spotlight-integration-260608_34a24073.jpg", cat: "Siri AI", title: "Siri AI Spotlight" },
  { id: 13, src: "/manus-storage/Apple-Siri-AI-Visual-Intelligence-on-Mac-260608_efcc3546.jpg", cat: "Siri AI", title: "Siri AI Visual Intelligence on Mac" },
  { id: 14, src: "/manus-storage/Apple-Siri-AI-Visual-Intelligence-on-iPad-260608_f89a1f5d.jpg", cat: "Siri AI", title: "Siri AI Visual Intelligence on iPad" },
  { id: 15, src: "/manus-storage/Apple-Siri-AI-ask-about-images-260608_8d690c64.jpg", cat: "Siri AI", title: "Siri AI Ask About Images" },
  { id: 16, src: "/manus-storage/Apple-Siri-AI-world-knowledge-260608_7a563c8b.jpg", cat: "Siri AI", title: "Siri AI World Knowledge" },
  { id: 17, src: "/manus-storage/Apple-Siri-AI-personal-context-and-suggestions-260608_13d511dd.jpg", cat: "Siri AI", title: "Siri AI Personal Context" },
  { id: 18, src: "/manus-storage/Apple-Siri-AI-helpful-tips-and-suggestions-260608_34a7ffea.jpg", cat: "Siri AI", title: "Siri AI Helpful Tips" },
  { id: 19, src: "/manus-storage/Apple-Siri-AI-on-Apple-Vision-Pro-260608_2ff44e7d.jpg", cat: "Siri AI", title: "Siri AI on Vision Pro" },

  // Apple Intelligence
  { id: 20, src: IMGS.intelligence.overview, cat: "Apple Intelligence", title: "Apple Intelligence Overview" },
  { id: 21, src: IMGS.intelligence.writing1, cat: "Apple Intelligence", title: "Writing Tools" },
  { id: 22, src: IMGS.intelligence.writing2, cat: "Apple Intelligence", title: "Writing Tools Interface" },
  { id: 23, src: IMGS.intelligence.writing3, cat: "Apple Intelligence", title: "Smart Reply" },
  { id: 24, src: IMGS.intelligence.writing4, cat: "Apple Intelligence", title: "Priority Notifications" },
  { id: 25, src: IMGS.intelligence.writing5, cat: "Apple Intelligence", title: "AI Features" },
  { id: 26, src: IMGS.intelligence.features1, cat: "Apple Intelligence", title: "Apple Intelligence Features" },
  { id: 27, src: IMGS.intelligence.features2, cat: "Apple Intelligence", title: "Image Intelligence" },
  { id: 28, src: IMGS.intelligence.features3, cat: "Apple Intelligence", title: "Private Cloud Compute" },
  { id: 29, src: IMGS.intelligence.features4, cat: "Apple Intelligence", title: "On-Device AI" },
  { id: 30, src: IMGS.intelligence.features5, cat: "Apple Intelligence", title: "Apple Intelligence Privacy" },

  // Parental Controls
  { id: 40, src: IMGS.parental.screen1, cat: "Parental Controls", title: "Screen Time Controls" },
  { id: 41, src: IMGS.parental.screen2, cat: "Parental Controls", title: "Family Sharing" },
  { id: 42, src: IMGS.parental.screen3, cat: "Parental Controls", title: "Communication Safety" },
  { id: 43, src: IMGS.parental.screen4, cat: "Parental Controls", title: "App Limits" },
  { id: 44, src: IMGS.parental.screen5, cat: "Parental Controls", title: "Downtime Schedule" },
  { id: 45, src: IMGS.parental.ios1, cat: "Parental Controls", title: "iOS 27 Parental Controls" },
  { id: 46, src: IMGS.parental.ios2, cat: "Parental Controls", title: "Screen Time Dashboard" },
  { id: 47, src: IMGS.parental.ios4, cat: "Parental Controls", title: "Content Restrictions" },
  { id: 48, src: IMGS.parental.ios5, cat: "Parental Controls", title: "Family Setup" },

  // iOS 27
  { id: 50, src: IMGS.ios27.homeScreen1, cat: "iOS 27", title: "iOS 27 Home Screen" },
  { id: 51, src: IMGS.ios27.homeScreen2, cat: "iOS 27", title: "iOS 27 Widgets" },
  { id: 52, src: IMGS.ios27.homeScreen3, cat: "iOS 27", title: "iOS 27 Liquid Glass" },
  { id: 53, src: IMGS.ios27.homeScreen4, cat: "iOS 27", title: "iOS 27 Design" },
  { id: 54, src: IMGS.ios27.homeScreen5, cat: "iOS 27", title: "iOS 27 Interface" },

  // macOS Golden Gate
  { id: 60, src: IMGS.macos.screen1, cat: "macOS Golden Gate", title: "macOS Golden Gate Desktop" },
  { id: 61, src: IMGS.macos.screen2, cat: "macOS Golden Gate", title: "macOS Golden Gate Finder" },
  { id: 62, src: IMGS.macos.screen3, cat: "macOS Golden Gate", title: "macOS Golden Gate Menu Bar" },
  { id: 63, src: IMGS.macos.screen4, cat: "macOS Golden Gate", title: "macOS Golden Gate Apps" },
  { id: 64, src: IMGS.macos.screen5, cat: "macOS Golden Gate", title: "macOS Golden Gate Features" },

  // iPhones — 17
  { id: 70, src: IMGS.iphone17.pro1, cat: "iPhone 17", title: "iPhone 17 Pro" },
  { id: 71, src: IMGS.iphone17.pro2, cat: "iPhone 17", title: "iPhone 17 Pro — Side View" },
  { id: 72, src: IMGS.iphone17.pro3, cat: "iPhone 17", title: "iPhone 17 Pro — Colors" },
  { id: 73, src: IMGS.iphone17.pro4, cat: "iPhone 17", title: "iPhone 17 Pro Max" },
  { id: 74, src: IMGS.iphone17.pro5, cat: "iPhone 17", title: "iPhone 17 Standard" },
  { id: 75, src: IMGS.iphone17.air, cat: "iPhone 17", title: "iPhone Air" },

  // iPhones — 16
  { id: 80, src: IMGS.iphone16.proMax1, cat: "iPhone 16", title: "iPhone 16 Pro Max" },
  { id: 81, src: IMGS.iphone16.proMax2, cat: "iPhone 16", title: "iPhone 16 Pro Max — Back" },
  { id: 82, src: IMGS.iphone16.proMax3, cat: "iPhone 16", title: "iPhone 16 Pro Max — Colors" },
  { id: 83, src: IMGS.iphone16.pro1, cat: "iPhone 16", title: "iPhone 16 Pro" },
  { id: 84, src: IMGS.iphone16.pro2, cat: "iPhone 16", title: "iPhone 16 Pro — Side" },
  { id: 85, src: IMGS.iphone16.standard1, cat: "iPhone 16", title: "iPhone 16" },
  { id: 86, src: IMGS.iphone16.standard2, cat: "iPhone 16", title: "iPhone 16 — Colors" },
  { id: 87, src: IMGS.iphone16.standard3, cat: "iPhone 16", title: "iPhone 16 — Back" },

  // iPhones — 15
  { id: 90, src: IMGS.iphone15.proMax1, cat: "iPhone 15", title: "iPhone 15 Pro Max" },
  { id: 91, src: IMGS.iphone15.proMax2, cat: "iPhone 15", title: "iPhone 15 Pro Max — Titanium" },
  { id: 92, src: IMGS.iphone15.proMax3, cat: "iPhone 15", title: "iPhone 15 Pro Max — Back" },
  { id: 93, src: IMGS.iphone15.pro1, cat: "iPhone 15", title: "iPhone 15 Pro" },
  { id: 94, src: IMGS.iphone15.pro2, cat: "iPhone 15", title: "iPhone 15 Pro — Colors" },
  { id: 95, src: IMGS.iphone15.pro3, cat: "iPhone 15", title: "iPhone 15 Pro — Side" },

  // iPhones — 14
  { id: 100, src: IMGS.iphone14.proMax1, cat: "iPhone 14", title: "iPhone 14 Pro Max" },
  { id: 101, src: IMGS.iphone14.proMax2, cat: "iPhone 14", title: "iPhone 14 Pro Max — Deep Purple" },
  { id: 102, src: IMGS.iphone14.pro1, cat: "iPhone 14", title: "iPhone 14 Pro" },
  { id: 103, src: IMGS.iphone14.pro2, cat: "iPhone 14", title: "iPhone 14 Pro — Gold" },
  { id: 104, src: IMGS.iphone14.standard1, cat: "iPhone 14", title: "iPhone 14" },
  { id: 105, src: IMGS.iphone14.standard2, cat: "iPhone 14", title: "iPhone 14 — Colors" },

  // iPhones — 13
  { id: 110, src: IMGS.iphone13.proMax1, cat: "iPhone 13", title: "iPhone 13 Pro Max" },
  { id: 111, src: IMGS.iphone13.pro1, cat: "iPhone 13", title: "iPhone 13 Pro" },
  { id: 112, src: IMGS.iphone13.pro2, cat: "iPhone 13", title: "iPhone 13 Pro — Sierra Blue" },

  // iPhones — 12
  { id: 120, src: IMGS.iphone12.proMax1, cat: "iPhone 12", title: "iPhone 12 Pro Max" },
  { id: 121, src: IMGS.iphone12.standard1, cat: "iPhone 12", title: "iPhone 12" },
  { id: 122, src: IMGS.iphone12.standard2, cat: "iPhone 12", title: "iPhone 12 — Colors" },

  // iPhones — 11
  { id: 130, src: IMGS.iphone11.proMax1, cat: "iPhone 11", title: "iPhone 11 Pro Max" },
  { id: 131, src: IMGS.iphone11.standard1, cat: "iPhone 11", title: "iPhone 11" },
  { id: 132, src: IMGS.iphone11.standard2, cat: "iPhone 11", title: "iPhone 11 — Colors" },

  // Jailbreak
  { id: 140, src: IMGS.jailbreak.dopamine1, cat: "Jailbreak", title: "Dopamine Jailbreak" },
  { id: 141, src: IMGS.jailbreak.dopamine2, cat: "Jailbreak", title: "Dopamine Interface" },
  { id: 142, src: IMGS.jailbreak.dopamine3, cat: "Jailbreak", title: "Jailbreak Tweaks" },
  { id: 143, src: IMGS.jailbreak.dopamine4, cat: "Jailbreak", title: "Sileo Package Manager" },
  { id: 144, src: IMGS.jailbreak.dopamine5, cat: "Jailbreak", title: "Jailbreak Setup" },
  { id: 145, src: IMGS.sideload.altstore1, cat: "Jailbreak", title: "AltStore Sideloading" },
  { id: 146, src: IMGS.sideload.altstore2, cat: "Jailbreak", title: "AltStore Interface" },
  { id: 147, src: IMGS.sideload.altstore4, cat: "Jailbreak", title: "Sideload Apps" },
  { id: 148, src: IMGS.sideload.altstore5, cat: "Jailbreak", title: "TrollStore" },

  // Apple Silicon
  { id: 150, src: IMGS.silicon.m4chip1, cat: "Apple Silicon", title: "M4 Chip" },
  { id: 151, src: IMGS.silicon.m4chip2, cat: "Apple Silicon", title: "M4 Die Shot" },
  { id: 152, src: IMGS.silicon.m4chip3, cat: "Apple Silicon", title: "M4 Architecture" },
  { id: 153, src: IMGS.silicon.m4chip4, cat: "Apple Silicon", title: "Apple Silicon Performance" },
  { id: 154, src: IMGS.silicon.m4chip5, cat: "Apple Silicon", title: "M4 Chip Detail" },

  // Apple Watch Kids
  { id: 160, src: IMGS.watchKids.screen1, cat: "watchOS 12", title: "Apple Watch for Kids" },
  { id: 161, src: IMGS.watchKids.screen2, cat: "watchOS 12", title: "Kids Watch Face" },
  { id: 162, src: IMGS.watchKids.screen3, cat: "watchOS 12", title: "Family Setup" },
  { id: 163, src: IMGS.watchKids.screen4, cat: "watchOS 12", title: "Kids Activity" },
  { id: 164, src: IMGS.watchKids.screen5, cat: "watchOS 12", title: "watchOS 12 Features" },

  // Apple Places
  { id: 170, src: IMGS.places.applePark1, cat: "Apple", title: "Apple Park Aerial" },
  { id: 171, src: IMGS.places.applePark2, cat: "Apple", title: "Apple Park Campus" },
  { id: 172, src: IMGS.places.appleStore1, cat: "Apple", title: "Apple Store Fifth Avenue" },
  { id: 173, src: IMGS.places.appleStore2, cat: "Apple", title: "Apple Store NYC" },
  { id: 174, src: IMGS.places.appleStore3, cat: "Apple", title: "Apple Store Interior" },
  { id: 175, src: IMGS.places.appleStore4, cat: "Apple", title: "Apple Store Design" },
];

const CATEGORIES = [
  "All",
  "WWDC 2026",
  "Siri AI",
  "Apple Intelligence",
  "Parental Controls",
  "iOS 27",
  "macOS Golden Gate",
  "iPhone 17",
  "iPhone 16",
  "iPhone 15",
  "iPhone 14",
  "iPhone 13",
  "iPhone 12",
  "iPhone 11",
  "Jailbreak",
  "Apple Silicon",
  "watchOS 12",
  "Apple",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  const filtered = activeCategory === "All"
    ? ALL_IMAGES
    : ALL_IMAGES.filter((img) => img.cat === activeCategory);

  const openLightbox = useCallback((src: string, title: string) => {
    setLightboxImg({ src, title });
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImg(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <div style={{ background: "#000000", minHeight: "100vh", color: "#f5f5f7" }}>

      {/* ── Hero ── */}
      <section style={{ paddingTop: "60px", paddingBottom: "48px", textAlign: "center" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
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
            Photo Gallery
          </div>
          <h1
            style={{
              fontSize: "clamp(40px, 7vw, 80px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#f5f5f7",
              marginBottom: "20px",
            }}
          >
            Everything Apple.
            <br />
            <span style={{ color: "rgba(255,255,255,0.45)" }}>In one place.</span>
          </h1>
          <p
            style={{
              fontSize: "19px",
              fontWeight: 400,
              letterSpacing: "-0.022em",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.6)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {ALL_IMAGES.length} photos spanning WWDC 2026, every iPhone from 11 to 17, Siri AI, Apple Intelligence, Parental Controls, and more.
          </p>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <div
        style={{
          position: "sticky",
          top: "44px",
          zIndex: 40,
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "0 22px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            gap: "4px",
            overflowX: "auto",
            padding: "12px 0",
            scrollbarWidth: "none",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                flexShrink: 0,
                padding: "7px 14px",
                borderRadius: "980px",
                border: "none",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                transition: "all 0.15s ease",
                background: activeCategory === cat ? "#f5f5f7" : "rgba(255,255,255,0.08)",
                color: activeCategory === cat ? "#000" : "rgba(255,255,255,0.65)",
                fontFamily: "inherit",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Gallery Grid ── */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "32px 22px 64px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "12px",
          }}
        >
          {filtered.map((img, i) => (
            <div
              key={img.id}
              onClick={() => openLightbox(img.src, img.title)}
              style={{
                position: "relative",
                aspectRatio: "4/3",
                overflow: "hidden",
                cursor: "pointer",
                background: "rgba(29,29,31,0.85)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                animation: `fadeInUp 0.4s cubic-bezier(0.23, 1, 0.32, 1) ${Math.min(i * 0.03, 0.5)}s both`,
                transition: "box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.4)";
                el.style.transform = "translateY(-4px) scale(1.01)";
                const img = el.querySelector("img") as HTMLImageElement;
                if (img) img.style.transform = "scale(1.06)";
                const overlay = el.querySelector(".gallery-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
                el.style.transform = "translateY(0) scale(1)";
                const img = el.querySelector("img") as HTMLImageElement;
                if (img) img.style.transform = "scale(1)";
                const overlay = el.querySelector(".gallery-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "0";
              }}
            >
              {/* Skeleton loader */}
              <div
                className="skeleton"
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 0,
                  borderRadius: "14px",
                }}
              />
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s ease",
                  display: "block",
                  opacity: 0,
                }}
                onLoad={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.opacity = "1";
                  const skeleton = el.previousElementSibling as HTMLElement;
                  if (skeleton) skeleton.style.display = "none";
                }}
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.opacity = "0.3";
                }}
              />
              {/* Glassmorphism hover overlay */}
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
                  opacity: 0,
                  transition: "opacity 0.25s ease",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                  borderRadius: "14px",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "10px",
                    padding: "8px 12px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.55)",
                      marginBottom: "3px",
                    }}
                  >
                    {img.cat}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#f5f5f7",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.3,
                    }}
                  >
                    {img.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "17px" }}>No images in this category yet.</p>
          </div>
        )}

        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            fontSize: "13px",
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "-0.01em",
          }}
        >
          Showing {filtered.length} of {ALL_IMAGES.length} photos
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxImg && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            cursor: "zoom-out",
          }}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "#f5f5f7",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "inherit",
              lineHeight: 1,
            }}
          >
            &#x2715;
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90vw", maxHeight: "90vh", cursor: "default" }}
          >
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: "8px",
                display: "block",
              }}
            />
            <div
              style={{
                marginTop: "16px",
                textAlign: "center",
                fontSize: "15px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "-0.015em",
              }}
            >
              {lightboxImg.title}
            </div>
          </div>
        </div>
      )}


      <style>{`
        @media (max-width: 600px) {
          div[style*="minmax(280px"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
