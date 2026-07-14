/*
 * Gallery — Everything Apple
 * Design: Apple.com aesthetic — dark, full-bleed, minimal chrome
 * Typography: SF Pro system stack, tight tracking, large display sizes
 * Layout: Masonry-style grid with category filter bar
 * Built by Cory Hepler
 */

import { useState, useCallback, useEffect } from "react";
import IMGS from "@/lib/imageManifest";
import { graveyardMedia } from "@/data/graveyardMedia";

interface GalleryImage {
  id: number;
  src: string;
  cat: string;
  title: string;
  contain?: boolean; // transparent product shots → contain, not cover
}

// ── All gallery images organized by category ──
const BASE_IMAGES: GalleryImage[] = [
  // WWDC 2026
  { id: 1, src: IMGS.wwdc.stageInterior, cat: "WWDC 2026", title: "WWDC 2026 Keynote Stage" },
  { id: 2, src: IMGS.wwdc.appleParkoOutdoor, cat: "WWDC 2026", title: "Apple Park Outdoor Stage" },
  { id: 3, src: IMGS.wwdc.appleParkStage, cat: "WWDC 2026", title: "WWDC 2026 Opening" },
  { id: 4, src: IMGS.wwdc.timCookCnet, cat: "WWDC 2026", title: "Tim Cook at WWDC 2026" },
  { id: 5, src: IMGS.wwdc.timCookInc, cat: "WWDC 2026", title: "Tim Cook Keynote" },
  { id: 6, src: IMGS.wwdc.stage1, cat: "WWDC 2026", title: "WWDC 2026 Stage" },

  // Siri AI
  { id: 10, src: "https://files.manuscdn.com/user_upload_by_module/session_file/94533962/NpJbJmLKMRkOoAFW.jpg", cat: "Siri AI", title: "Siri AI Hero" },
  { id: 11, src: "https://files.manuscdn.com/user_upload_by_module/session_file/94533962/irnPJCyAIBacMRVy.jpg", cat: "Siri AI", title: "Siri AI Chat Interface" },
  { id: 12, src: "https://files.manuscdn.com/user_upload_by_module/session_file/94533962/dzOYJdVTZEiKENuF.jpg", cat: "Siri AI", title: "Siri AI Spotlight" },
  { id: 13, src: "https://files.manuscdn.com/user_upload_by_module/session_file/94533962/UQXBebAUeOwxKTJA.jpg", cat: "Siri AI", title: "Siri AI Visual Intelligence on Mac" },
  { id: 14, src: "https://files.manuscdn.com/user_upload_by_module/session_file/94533962/mtjgiAeYtZKHIwSe.jpg", cat: "Siri AI", title: "Siri AI Visual Intelligence on iPad" },
  { id: 15, src: "https://files.manuscdn.com/user_upload_by_module/session_file/94533962/IfqdvilbNXCDaLHb.jpg", cat: "Siri AI", title: "Siri AI Ask About Images" },
  { id: 16, src: "https://files.manuscdn.com/user_upload_by_module/session_file/94533962/GpqjbjRFZyIEOoDF.jpg", cat: "Siri AI", title: "Siri AI World Knowledge" },
  { id: 17, src: "https://files.manuscdn.com/user_upload_by_module/session_file/94533962/IQtSEhzFOTGhGCCc.jpg", cat: "Siri AI", title: "Siri AI Personal Context" },
  { id: 18, src: "https://files.manuscdn.com/user_upload_by_module/session_file/94533962/SwRYIyDETQFTOFGJ.jpg", cat: "Siri AI", title: "Siri AI Helpful Tips" },
  { id: 19, src: "https://files.manuscdn.com/user_upload_by_module/session_file/94533962/GhExvXqaYNAqnOsY.jpg", cat: "Siri AI", title: "Siri AI on Vision Pro" },

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
  { id: 145, src: IMGS.sideload.altstore1, cat: "Sideloading", title: "AltStore Sideloading" },
  { id: 146, src: IMGS.sideload.altstore2, cat: "Sideloading", title: "AltStore Interface" },
  { id: 147, src: IMGS.sideload.altstore4, cat: "Sideloading", title: "Sideload Apps" },
  { id: 148, src: IMGS.sideload.altstore5, cat: "Sideloading", title: "TrollStore" },

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

// The original device cutouts had checkerboard pixels baked into the files.
// Use real archival photography here instead of disguising damaged assets.
const ARCHIVE_IMAGES: GalleryImage[] = [
  { id: 2000, src: graveyardMedia["newton-messagepad"].images[0], cat: "Apple Archive", title: "Newton MessagePad" },
  { id: 2001, src: graveyardMedia["emate-300"].images[0], cat: "Apple Archive", title: "eMate 300" },
  { id: 2002, src: graveyardMedia.pippin.images[0], cat: "Apple Archive", title: "Bandai Apple Pippin" },
  { id: 2003, src: graveyardMedia["twentieth-anniversary-mac"].images[0], cat: "Apple Archive", title: "20th Anniversary Macintosh" },
  { id: 2004, src: graveyardMedia["imac-g3"].images[1], cat: "Apple Archive", title: "iMac G3 running Mac OS" },
  { id: 2005, src: graveyardMedia["power-mac-g4-cube"].images[1], cat: "Apple Archive", title: "Power Mac G4 Cube" },
  { id: 2006, src: graveyardMedia.xserve.images[1], cat: "Apple Archive", title: "Xserve" },
  { id: 2010, src: graveyardMedia["ipod-classic"].images[0], cat: "iPod Archive", title: "iPod Classic" },
  { id: 2011, src: graveyardMedia["ipod-hifi"].images[0], cat: "iPod Archive", title: "iPod Hi-Fi" },
  { id: 2012, src: graveyardMedia["ipod-socks"].images[0], cat: "iPod Archive", title: "iPod Socks" },
  { id: 2020, src: graveyardMedia.isight.images[0], cat: "Apple Archive", title: "iSight camera" },
  { id: 2021, src: graveyardMedia.airport.images[0], cat: "Apple Archive", title: "AirPort base station" },
];

const ALL_IMAGES: GalleryImage[] = [...ARCHIVE_IMAGES, ...BASE_IMAGES];

const CATEGORIES = [
  "All",
  "Apple Archive",
  "iPod Archive",
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
  "Sideloading",
  "Apple Silicon",
  "watchOS 12",
  "Apple",
];

function navBtn(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    [side]: "20px",
    transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.1)",
    border: "none",
    color: "#f5f5f7",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    fontSize: "28px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inherit",
    lineHeight: 1,
    paddingBottom: "4px",
  };
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"fit" | "detail" | "tilt">("fit");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const filtered = activeCategory === "All"
    ? ALL_IMAGES
    : ALL_IMAGES.filter((img) => img.cat === activeCategory);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setViewMode("fit");
    setTilt({ x: 0, y: 0 });
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const lightboxImg = lightboxIndex === null ? null : filtered[lightboxIndex] ?? null;
  const related = lightboxImg ? filtered.filter((image) => image.cat === lightboxImg.cat).slice(0, 14) : [];

  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  // Keyboard controls for the lightbox: Esc to close, arrows to navigate
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));
      else if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, filtered.length, closeLightbox]);

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
            {ALL_IMAGES.length} curated images — clean product photography, Apple history, WWDC, Siri, Apple Intelligence, and more. No damaged checkerboard cutouts.
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
          className="gallery-grid"
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
              aria-pressed={activeCategory === cat}
              aria-label={cat === "All" ? "Show all photos" : `Filter by ${cat}`}
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
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.title}`}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(i); } }}
              style={{
                position: "relative",
                aspectRatio: "4/3",
                overflow: "hidden",
                cursor: "pointer",
                background: img.contain
                  ? "radial-gradient(circle at 50% 44%, rgba(92,112,255,.24), transparent 48%), linear-gradient(145deg, #151820, #08090d)"
                  : "rgba(29,29,31,0.85)",
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
                decoding="async"
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  height: "100%",
                  objectFit: img.contain ? "contain" : "cover",
                  padding: img.contain ? "16px" : 0,
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
                  el.style.display = "none";
                  const fallback = el.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="gallery-image-fallback" style={{ display: "none", position: "absolute", inset: 0, zIndex: 1, alignItems: "center", justifyContent: "center", padding: 24, textAlign: "center", color: "rgba(255,255,255,.62)", fontSize: 13 }}>
                Image temporarily unavailable<br />Open for the rest of this collection
              </div>
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
          aria-live="polite"
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
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImg.title}
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 20050,
            background: "rgba(2,3,7,0.88)",
            backdropFilter: "blur(24px) saturate(120%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            cursor: "zoom-out",
          }}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close"
            style={{
              position: "absolute", top: "20px", right: "20px",
              zIndex: 3, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,.14)", color: "#f5f5f7",
              width: "44px", height: "44px", borderRadius: "50%", fontSize: "20px",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "inherit", lineHeight: 1,
            }}
          >
            &#x2715;
          </button>

          {/* Prev / Next */}
          {filtered.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)); }}
                aria-label="Previous image"
                style={navBtn("left")}
              >&#x2039;</button>
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length)); }}
                aria-label="Next image"
                style={navBtn("right")}
              >&#x203A;</button>
            </>
          )}

          <div className="gallery-lightbox-panel"
            onClick={(e) => e.stopPropagation()}
            style={{ width: "min(1120px, 92vw)", maxHeight: "92vh", overflowY: "auto", cursor: "default", border: "1px solid rgba(255,255,255,.13)", borderRadius: 28, background: "rgba(17,18,24,.82)", boxShadow: "0 40px 120px rgba(0,0,0,.55)" }}
          >
            <div
              className="gallery-lightbox-stage"
              onPointerMove={(event) => {
                if (viewMode !== "tilt") return;
                const rect = event.currentTarget.getBoundingClientRect();
                setTilt({
                  x: -(((event.clientY - rect.top) / rect.height) - .5) * 12,
                  y: (((event.clientX - rect.left) / rect.width) - .5) * 16,
                });
              }}
              onPointerLeave={() => setTilt({ x: 0, y: 0 })}
              style={{ position: "relative", height: "min(62vh, 620px)", overflow: "hidden", display: "grid", placeItems: "center", background: "radial-gradient(circle at 50% 45%, rgba(92,112,255,.22), transparent 42%), radial-gradient(circle at 70% 35%, rgba(255,63,170,.12), transparent 34%), #07080c", borderRadius: "28px 28px 0 0" }}
            >
              <img
                src={lightboxImg.src}
                alt={lightboxImg.title}
                style={{
                  width: "100%", height: "100%", objectFit: "contain", display: "block",
                  padding: lightboxImg.contain ? "clamp(26px, 5vw, 62px)" : "12px",
                  transform: viewMode === "detail" ? "scale(1.55)" : viewMode === "tilt" ? `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(.92)` : "scale(1)",
                  filter: lightboxImg.contain ? "drop-shadow(0 28px 32px rgba(0,0,0,.48))" : "none",
                  transition: viewMode === "tilt" ? "transform .08s linear" : "transform .35s cubic-bezier(.2,.8,.2,1)",
                }}
              />
              <div className="gallery-view-modes" style={{ position: "absolute", left: "50%", bottom: 16, transform: "translateX(-50%)", display: "flex", gap: 4, padding: 4, border: "1px solid rgba(255,255,255,.14)", borderRadius: 999, background: "rgba(0,0,0,.46)", backdropFilter: "blur(18px)" }}>
                {(["fit", "detail", "tilt"] as const).map((mode) => (
                  <button key={mode} type="button" onClick={() => setViewMode(mode)} style={{ border: 0, borderRadius: 999, padding: "7px 12px", background: viewMode === mode ? "#fff" : "transparent", color: viewMode === mode ? "#050507" : "rgba(255,255,255,.72)", fontSize: 12, fontWeight: 650, cursor: "pointer", textTransform: "capitalize" }}>
                    {mode === "tilt" ? "Tilt view" : mode}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ padding: "20px 22px 22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <div style={{ color: "rgba(255,255,255,.45)", fontSize: 10, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 5 }}>{lightboxImg.cat}</div>
                  <div style={{ fontSize: "clamp(19px, 3vw, 28px)", fontWeight: 700, color: "#fff", letterSpacing: "-.025em" }}>{lightboxImg.title}</div>
                </div>
                <span style={{ color: "rgba(255,255,255,0.42)", fontSize: 12 }}>{lightboxIndex !== null ? `${lightboxIndex + 1} / ${filtered.length}` : ""}</span>
              </div>

              {related.length > 1 && (
                <div className="gallery-related" style={{ display: "flex", gap: 8, overflowX: "auto", marginTop: 18, paddingBottom: 4 }}>
                  {related.map((image) => {
                    const index = filtered.findIndex((item) => item.id === image.id);
                    return (
                      <button key={image.id} type="button" onClick={() => { setLightboxIndex(index); setViewMode("fit"); }} aria-label={`View ${image.title}`} style={{ width: 86, height: 62, flex: "0 0 auto", padding: 0, overflow: "hidden", borderRadius: 10, border: image.id === lightboxImg.id ? "2px solid #fff" : "1px solid rgba(255,255,255,.14)", background: "#08090d", opacity: image.id === lightboxImg.id ? 1 : .62, cursor: "pointer" }}>
                        <img src={image.src} alt="" loading="lazy" style={{ width: "100%", height: "100%", objectFit: image.contain ? "contain" : "cover", padding: image.contain ? 6 : 0 }} />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}


      <style>{`
        @media (max-width: 600px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
          .gallery-lightbox { padding: 0 !important; align-items: flex-end !important; }
          .gallery-lightbox-panel { width: 100vw !important; max-height: 94vh !important; border-radius: 26px 26px 0 0 !important; }
          .gallery-lightbox-stage { height: 54vh !important; border-radius: 26px 26px 0 0 !important; }
          .gallery-view-modes button { padding: 7px 10px !important; }
          .gallery-overlay { opacity: .82 !important; background: linear-gradient(to top, rgba(0,0,0,.8), transparent 58%) !important; }
        }
        .gallery-related::-webkit-scrollbar { display: none; }
        @media (prefers-reduced-motion: reduce) {
          .gallery-grid > div, .gallery-grid img { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
}
