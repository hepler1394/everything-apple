/*
  WWDCBanner — Everything Apple
  Design: Apple.com announcement bar aesthetic
  - Fixed thin black bar at top of viewport
  - Sets --banner-height CSS variable so Navbar can offset itself
  - Pulsing red live dot + session title + "See all" CTA
  - Dismissible with X button (persists via sessionStorage)
  - Smooth slide-up exit animation
  Built by Cory Hepler
*/
import { useState, useEffect } from "react";
import { Link } from "wouter";

const BANNER_KEY = "wwdc-banner-dismissed-v3";
const BANNER_HEIGHT = 44;

export default function WWDCBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(BANNER_KEY);
    if (!dismissed) {
      setVisible(true);
      document.documentElement.style.setProperty("--banner-height", `${BANNER_HEIGHT}px`);
    } else {
      document.documentElement.style.setProperty("--banner-height", "0px");
    }
    setMounted(true);
  }, []);

  function dismiss() {
    setVisible(false);
    document.documentElement.style.setProperty("--banner-height", "0px");
    sessionStorage.setItem(BANNER_KEY, "1");
  }

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        height: `${BANNER_HEIGHT}px`,
        background: "#111",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: visible ? "translateY(0)" : `translateY(-${BANNER_HEIGHT}px)`,
        transition: "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "0 max(22px, env(safe-area-inset-left))",
        width: "100%",
        position: "relative",
      }}>
        {/* Live dot */}
        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", flexShrink: 0 }}>
          <span style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "#ff3b30",
            display: "inline-block",
            animation: "pulse-red 1.8s ease-in-out infinite",
            flexShrink: 0,
          }} />
          <span style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#ff3b30",
          }}>Live</span>
        </span>

        {/* Session info */}
        <span style={{
          fontSize: "13px",
          color: "rgba(245,245,247,0.82)",
          letterSpacing: "-0.01em",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          maxWidth: "calc(100vw - 200px)",
        }}>
          WWDC 2026 — iOS 27, Siri AI, macOS Golden Gate &amp; more
        </span>

        {/* CTA */}
        <Link href="/wwdc-2026">
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "13px",
            fontWeight: 500,
            color: "#2997ff",
            letterSpacing: "-0.01em",
            flexShrink: 0,
            cursor: "pointer",
            transition: "opacity 0.2s ease",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            See all
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginTop: "1px" }}>
              <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>

        {/* Dismiss */}
        <button
          onClick={dismiss}
          aria-label="Dismiss banner"
          style={{
            position: "absolute",
            right: "max(14px, env(safe-area-inset-right))",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            color: "rgba(245,245,247,0.35)",
            transition: "color 0.2s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "rgba(245,245,247,0.75)")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,245,247,0.35)")}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
