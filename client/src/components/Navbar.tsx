/*
 * Navbar — Everything Apple
 * Uses ThemeContext for multi-theme support (light/dark/siri/red)
 * ThemePicker dropdown replaces simple toggle
 * Active underline indicator, bigger "new" dots with glow
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import ThemePicker from "./ThemePicker";

const navLinks = [
  { href: "/wwdc-2026", label: "WWDC 2026", isNew: true },
  { href: "/siri-ai", label: "Siri AI", isNew: true },
  { href: "/parental-controls", label: "Parental Controls" },
  { href: "/ios-27", label: "iOS 27", isNew: true },
  { href: "/macos-golden-gate", label: "macOS" },
  { href: "/apple-intelligence", label: "Intelligence" },
  { href: "/watchos-12", label: "watchOS 12" },
  { href: "/compare", label: "Compare", isNew: true },
  { href: "/iphones", label: "iPhones" },
  { href: "/iphone-timeline", label: "iPhone History" },
  { href: "/apple-silicon", label: "Apple Silicon" },
  { href: "/gallery", label: "Gallery" },
  { href: "/sideloading", label: "Sideloading", isNew: true },
  { href: "/jailbreak", label: "Jailbreak" },
  { href: "/community", label: "Community" },
];

interface NavbarProps {
  onSearchOpen?: () => void;
}

export default function Navbar({ onSearchOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme } = useTheme();

  const isDark = theme !== "light" && theme !== "blue";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg = isDark
    ? (scrolled ? "rgba(0,0,0,0.92)" : "rgba(0,0,0,0.72)")
    : (scrolled ? "rgba(245,245,247,0.92)" : "rgba(245,245,247,0.82)");

  const textColor = isDark ? "rgba(245,245,247,0.9)" : "#1d1d1f";
  const textMuted = isDark ? "rgba(245,245,247,0.6)" : "rgba(29,29,31,0.6)";
  const borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  // Accent color is fully theme-driven via the --brand CSS variable
  const accentColor = "var(--brand)";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: "var(--banner-height, 0px)",
          left: 0,
          right: 0,
          zIndex: 9999,
          height: "44px",
          background: navBg,
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: `1px solid ${borderColor}`,
          transition: "top 0.3s ease, background 0.344s ease, border-color 0.344s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 22px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px",
          }}
        >
          {/* Logo */}
          <Link href="/">
            <span
              style={{
                fontSize: "17px",
                fontWeight: 700,
                letterSpacing: "-0.022em",
                color: textColor,
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "color 0.344s ease",
                textDecoration: "none",
                fontFamily: "var(--font-sf-pro-display, system-ui)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0px",
              }}
            >
              Everything{" "}
              <span className="rainbow-border-word" style={{
                position: "relative",
                padding: "0 3px",
              }}>
                <span className="rainbow-border-inner" />
                Apple
              </span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div
            className="nav-desktop-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1px",
              overflowX: "auto",
              overflowY: "hidden",
              flex: 1,
              justifyContent: "flex-start",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              padding: "0 4px",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0, #000 14px, #000 calc(100% - 14px), transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0, #000 14px, #000 calc(100% - 14px), transparent 100%)",
            }}
          >
            {navLinks.map((link) => {
              const active = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <span
                    className="nav-item-link"
                    style={{
                      fontSize: "12px",
                      fontWeight: active ? 600 : 400,
                      letterSpacing: "-0.01em",
                      color: active ? accentColor : textMuted,
                      padding: "4px 8px",
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontFamily: "var(--font-sf-pro-text, system-ui)",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = textColor;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = active ? accentColor : textMuted;
                    }}
                  >
                    {link.label}
                    {link.isNew && !active && (
                      <span style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: accentColor,
                        display: "inline-block",
                        flexShrink: 0,
                        marginBottom: "5px",
                        boxShadow: `0 0 6px ${accentColor}`,
                        animation: "dotPulse 2s ease-in-out infinite",
                      }} />
                    )}
                    {/* Active underline */}
                    {active && (
                      <span style={{
                        position: "absolute",
                        bottom: "-2px",
                        left: "8px",
                        right: "8px",
                        height: "2px",
                        borderRadius: "1px",
                        background: accentColor,
                        boxShadow: `0 0 4px ${accentColor}`,
                      }} />
                    )}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right side: Search, ThemePicker, Buy CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
            {/* Search icon */}
            <button
              onClick={onSearchOpen}
              aria-label="Search"
              style={{
                background: "none",
                border: "none",
                color: textColor,
                padding: "6px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "opacity 0.1s ease",
                opacity: 0.7,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
            >
              <Search size={15} />
            </button>

            {/* Theme picker */}
            <ThemePicker />

            {/* Buy CTA */}
            <Link href="/iphones">
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: accentColor,
                  color: "#ffffff",
                  borderRadius: "999px",
                  padding: "5px 14px",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  fontFamily: "var(--font-sf-pro-text, system-ui)",
                  textDecoration: "none",
                  transition: "background-color 0.1s ease, transform 0.1s ease",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)"; }}
              >
                Buy
              </span>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              className="nav-hamburger"
              style={{
                background: "none",
                border: "none",
                color: textColor,
                padding: "6px",
                borderRadius: "6px",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            background: isDark ? "rgba(0,0,0,0.97)" : "rgba(245,245,247,0.97)",
            backdropFilter: "blur(40px) saturate(200%)",
            WebkitBackdropFilter: "blur(40px) saturate(200%)",
            paddingTop: "calc(var(--banner-height, 0px) + 52px)",
            overflowY: "auto",
            animation: "fadeIn 0.2s ease both",
          }}
        >
          <div style={{ padding: "12px 22px 60px" }}>
            {/* Logo row */}
            <div style={{
              padding: "12px 0 20px",
              borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
              marginBottom: "8px",
            }}>
              <Link href="/">
                <span style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  letterSpacing: "-0.022em",
                  color: textColor,
                  fontFamily: "var(--font-sf-pro-display, system-ui)",
                  display: "inline-flex",
                  alignItems: "center",
                }}>Everything{" "}<span className="rainbow-border-word" style={{ position: "relative", padding: "0 3px" }}><span className="rainbow-border-inner" />Apple</span></span>
              </Link>
            </div>

            {/* All nav links */}
            {navLinks.map((link, i) => {
              const active = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <div
                    style={{
                      padding: "14px 0",
                      borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
                      fontSize: "19px",
                      fontWeight: active ? 600 : 400,
                      letterSpacing: "-0.022em",
                      color: active ? accentColor : textColor,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontFamily: "var(--font-sf-pro-display, system-ui)",
                      animation: `fadeInUp 0.3s ease ${i * 0.025}s both`,
                    }}
                  >
                    {link.label}
                    {link.isNew && !active && (
                      <span style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase" as const,
                        color: accentColor,
                      }}>New</span>
                    )}
                  </div>
                </Link>
              );
            })}

            {/* Home link */}
            <Link href="/">
              <div style={{
                padding: "14px 0",
                borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
                fontSize: "19px",
                fontWeight: location === "/" ? 600 : 400,
                letterSpacing: "-0.022em",
                color: location === "/" ? accentColor : textColor,
                fontFamily: "var(--font-sf-pro-display, system-ui)",
              }}>Home</div>
            </Link>

            {/* Theme picker in mobile menu */}
            <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}` }}>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: textMuted, marginBottom: "12px" }}>Theme</div>
              <ThemePicker />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .nav-desktop-links::-webkit-scrollbar { display: none; }
        @media (max-width: 900px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .nav-hamburger { display: none !important; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }

        /* Rainbow "Apple" — thin neon glow that hugs the letters (no pill border) */
        .rainbow-border-word {
          position: relative;
          background: linear-gradient(90deg, #ff2d55, #ff9500, #ffcc00, #34c759, #00d4ff, #5856d6, #af52de, #ff2d55);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rainbowTextShift 4s linear infinite;
          /* Thin multi-layer neon glow following the glyph edges */
          filter:
            drop-shadow(0 0 1px rgba(255,255,255,0.55))
            drop-shadow(0 0 3px rgba(120,200,255,0.45))
            drop-shadow(0 0 6px rgba(180,90,230,0.30));
        }
        /* Legacy ring element neutralized — glow now lives on the text itself */
        .rainbow-border-inner,
        .rainbow-border-inner::before,
        .rainbow-border-inner::after {
          display: none !important;
          content: none !important;
        }
        @keyframes rainbowTextShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </>
  );
}
