/*
 * ThemePicker — Color theme selector dropdown
 * Themes: Light, Dark, Siri (purple gradient), Red (dominant red)
 */

import { useState, useRef, useEffect } from "react";
import { useTheme, type ColorTheme } from "@/contexts/ThemeContext";

const themes: { id: ColorTheme; label: string; icon: React.ReactNode; desc: string }[] = [
  {
    id: "light",
    label: "Light",
    desc: "Apple Fog",
    icon: (
      <div style={{
        width: 18, height: 18, borderRadius: "50%",
        background: "#f5f5f7",
        border: "2px solid #d2d2d7",
      }} />
    ),
  },
  {
    id: "dark",
    label: "Dark",
    desc: "Obsidian",
    icon: (
      <div style={{
        width: 18, height: 18, borderRadius: "50%",
        background: "#1d1d1f",
        border: "2px solid #333",
      }} />
    ),
  },
  {
    id: "blue",
    label: "Blue",
    desc: "Classic Azure",
    icon: (
      <div style={{
        width: 18, height: 18, borderRadius: "50%",
        background: "#0071e3",
        border: "2px solid #0a5bb5",
      }} />
    ),
  },
  {
    id: "siri",
    label: "Siri",
    desc: "AI Gradient",
    icon: (
      <div style={{
        width: 18, height: 18, borderRadius: "50%",
        background: "linear-gradient(135deg, #6e3aff 0%, #ff2d55 50%, #ff9500 100%)",
        border: "2px solid rgba(255,255,255,0.2)",
      }} />
    ),
  },
  {
    id: "red",
    label: "Red",
    desc: "Product RED",
    icon: (
      <div style={{
        width: 18, height: 18, borderRadius: "50%",
        background: "#e30b17",
        border: "2px solid #8b0000",
      }} />
    ),
  },
  {
    id: "matcha",
    label: "Matcha",
    desc: "Lime on Green",
    icon: (
      <div style={{
        width: 18, height: 18, borderRadius: "50%",
        background: "linear-gradient(135deg, #9ae600 0%, #11201a 100%)",
        border: "2px solid #1f3a2c",
      }} />
    ),
  },
];

export default function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const currentTheme = themes.find(t => t.id === theme) || themes[0];

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Change theme"
        aria-haspopup="menu"
        aria-expanded={open}
        style={{
          background: "none",
          border: "none",
          padding: "6px",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "opacity 0.15s ease, transform 0.15s ease",
          opacity: 0.85,
          transform: open ? "scale(1.1)" : "scale(1)",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
      >
        {currentTheme.icon}
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Theme"
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            background: "var(--theme-picker-bg, rgba(30,30,30,0.95))",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            border: "1px solid var(--theme-picker-border, rgba(255,255,255,0.12))",
            borderRadius: "14px",
            padding: "6px",
            minWidth: "180px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            animation: "themePickerIn 0.15s cubic-bezier(0.23,1,0.32,1) both",
            zIndex: 10000,
          }}
        >
          {themes.map((t) => {
            const active = theme === t.id;
            return (
              <button
                key={t.id}
                role="menuitemradio"
                aria-checked={active}
                aria-label={`${t.label} theme`}
                onClick={() => { setTheme(t.id); setOpen(false); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  padding: "8px 12px",
                  background: active ? "rgba(255,255,255,0.1)" : "transparent",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "background 0.1s ease",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {t.icon}
                <div>
                  <div style={{
                    fontSize: "13px",
                    fontWeight: active ? 600 : 400,
                    color: "#f5f5f7",
                    lineHeight: 1.3,
                  }}>
                    {t.label}
                  </div>
                  <div style={{
                    fontSize: "11px",
                    color: "rgba(245,245,247,0.5)",
                    lineHeight: 1.3,
                  }}>
                    {t.desc}
                  </div>
                </div>
                {active && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "auto" }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @keyframes themePickerIn {
          from { opacity: 0; transform: scale(0.95) translateY(-4px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
