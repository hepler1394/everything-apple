/* =============================================================
   BackToTop — Global sticky scroll-to-top button
   Fades in after 400px scroll. Works on every page.
   Design: Apple-style circular button, glassmorphism tint.
   ============================================================= */

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "24px",
        zIndex: 900,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.18)",
        background: hovered
          ? "rgba(255,255,255,0.22)"
          : "rgba(255,255,255,0.10)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Fade + scale transition
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered ? "scale(1.08)" : "scale(1)"
          : "scale(0.85) translateY(8px)",
        transition:
          "opacity 0.28s cubic-bezier(0.23,1,0.32,1), transform 0.28s cubic-bezier(0.23,1,0.32,1), background 0.18s ease",
        pointerEvents: visible ? "auto" : "none",
        // Active press feel
      }}
      onMouseDown={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.94)";
      }}
      onMouseUp={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = hovered
          ? "scale(1.08)"
          : "scale(1)";
      }}
    >
      {/* Upward chevron SVG */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <path
          d="M4 11.5L9 6.5L14 11.5"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
