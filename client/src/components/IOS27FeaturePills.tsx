/*
  IOS27FeaturePills — Everything Apple
  Design: Apple.com interactive feature selector
  - Horizontally scrollable pill row (snap-scroll on mobile)
  - Active pill expands with screenshot + description below
  - Smooth cross-fade between screenshots
  - Touch-friendly: large tap targets, momentum scroll
  Built by Cory Hepler
*/
import { useState, useRef, useEffect } from "react";
import { IMGS } from "../lib/imageManifest";

interface Feature {
  id: string;
  label: string;
  title: string;
  desc: string;
  img: string;
  tag?: string;
}

const FEATURES: Feature[] = [
  {
    id: "liquid-glass",
    label: "Liquid Glass",
    title: "Glass that breathes with your wallpaper.",
    desc: "Every surface in iOS 27 uses a translucent material that refracts and blurs the content behind it. The interface adapts to your wallpaper in real time — warm tones, cool tones, dark and light — creating a sense of physical depth that feels alive.",
    img: IMGS.ios27.homeScreen1,
    tag: "New",
  },
  {
    id: "dynamic-island",
    label: "Dynamic Island 2.0",
    title: "The Dynamic Island, completely reimagined.",
    desc: "Dynamic Island 2.0 expands contextually to show live activities, sports scores, turn-by-turn navigation, and music controls — all without opening an app. It now supports third-party apps and can display two simultaneous activities.",
    img: IMGS.ios27.homeScreen2,
    tag: "Redesigned",
  },
  {
    id: "widgets",
    label: "New Widgets",
    title: "Widgets that actually do things.",
    desc: "Widgets in iOS 27 support live data, interactive controls, and real-time updates. Resize them freely on the home screen, stack them in new ways, and interact with them directly — no need to open the app.",
    img: IMGS.ios27.homeScreen3,
    tag: "Interactive",
  },
  {
    id: "control-center",
    label: "Control Center",
    title: "Your controls, your way.",
    desc: "Control Center has been rebuilt from scratch. Modules are fully customizable, can be resized, and now support third-party app controls for the first time. Add your smart home controls, media apps, and shortcuts.",
    img: IMGS.ios27.homeScreen4,
    tag: "Rebuilt",
  },
  {
    id: "camera",
    label: "AI Camera",
    title: "The camera that sees what you see.",
    desc: "The Camera app uses Apple Intelligence to identify scenes, suggest settings, and automatically frame your shot. It detects text in photos for instant copy, identifies plants and animals, and suggests the best moment to capture.",
    img: IMGS.ios27.homeScreen5,
    tag: "AI",
  },
  {
    id: "messages",
    label: "Smart Messages",
    title: "Messages that think ahead.",
    desc: "Messages now suggests contextually aware replies based on the full conversation. It can draft complete responses, schedule messages for later, remind you to follow up, and summarize long threads you missed.",
    img: IMGS.ios27.features,
    tag: "AI",
  },
  {
    id: "siri",
    label: "Siri AI",
    title: "Siri that understands everything.",
    desc: "The new Siri in iOS 27 can follow multi-turn conversations, take actions across every app, and understand your personal context — your calendar, contacts, photos, and messages — to give answers that are actually useful.",
    img: IMGS.siri.screen1,
    tag: "New",
  },
];

export default function IOS27FeaturePills() {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const pillsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  function selectFeature(i: number) {
    if (i === active || animating) return;
    setPrevActive(active);
    setAnimating(true);
    setActive(i);
    // Scroll pill into view
    const pills = pillsRef.current;
    if (pills) {
      const pill = pills.children[i] as HTMLElement;
      if (pill) {
        pill.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }

  useEffect(() => {
    if (animating) {
      const t = setTimeout(() => {
        setAnimating(false);
        setPrevActive(null);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [animating]);

  const feature = FEATURES[active];

  return (
    <div style={{ width: "100%" }}>
      {/* Pill row */}
      <div
        ref={pillsRef}
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingBottom: "4px",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          paddingLeft: "max(22px, env(safe-area-inset-left))",
          paddingRight: "max(22px, env(safe-area-inset-right))",
          marginLeft: "calc(-1 * max(22px, env(safe-area-inset-left)))",
          marginRight: "calc(-1 * max(22px, env(safe-area-inset-right)))",
        }}
      >
        {FEATURES.map((f, i) => (
          <button
            key={f.id}
            onClick={() => selectFeature(i)}
            style={{
              flexShrink: 0,
              scrollSnapAlign: "start",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "10px 18px",
              borderRadius: "980px",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: 500,
              letterSpacing: "-0.022em",
              transition: "all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              background: i === active ? "#0071e3" : "rgba(0,0,0,0.06)",
              color: i === active ? "#fff" : "#1d1d1f",
              transform: i === active ? "scale(1)" : "scale(0.97)",
              boxShadow: i === active ? "0 4px 16px rgba(0,113,227,0.35)" : "none",
              whiteSpace: "nowrap",
            }}
          >
            {f.label}
            {f.tag && (
              <span style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                padding: "2px 6px",
                borderRadius: "4px",
                background: i === active ? "rgba(255,255,255,0.25)" : "rgba(0,113,227,0.12)",
                color: i === active ? "#fff" : "#0071e3",
              }}>
                {f.tag}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Feature display */}
      <div style={{
        marginTop: "40px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(32px, 6vw, 80px)",
        alignItems: "center",
      }}
        className="apple-feature-row"
      >
        {/* Text — left */}
        <div className="feature-text">
          <h3
            key={`title-${active}`}
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              color: "#1d1d1f",
              letterSpacing: "-0.003em",
              lineHeight: 1.08,
              marginBottom: "20px",
              animation: "fadeInUp 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
            }}
          >
            {feature.title}
          </h3>
          <p
            key={`desc-${active}`}
            style={{
              fontSize: "17px",
              color: "#6e6e73",
              lineHeight: 1.65,
              letterSpacing: "-0.022em",
              maxWidth: "440px",
              animation: "fadeInUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.05s both",
            }}
          >
            {feature.desc}
          </p>
        </div>

        {/* Screenshot — right */}
        <div className="feature-image" style={{ display: "flex", justifyContent: "center" }}>
          <img
            ref={imgRef}
            key={`img-${active}`}
            src={feature.img}
            alt={feature.title}
            style={{
              width: "100%",
              maxWidth: "320px",
              display: "block",
              borderRadius: "28px",
              boxShadow: "0 40px 80px rgba(0,0,0,0.18)",
              animation: "zoomIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
            }}
          />
        </div>
      </div>
    </div>
  );
}
