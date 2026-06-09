/*
 * Navbar — Everything Apple
 * DESIGN.md spec: 44px height, fog (#f5f5f7) bg, 12px SF Pro Text nav links
 * Azure (#0071e3) Buy CTA — sole permission-to-act color
 * Transitions to semi-opaque white on scroll
 * Mobile: hamburger opens full-screen overlay
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, X, Sun, Moon } from "lucide-react";

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
  { href: "/jailbreak", label: "Jailbreak" },
  { href: "/community", label: "Community" },
];

interface NavbarProps {
  onSearchOpen?: () => void;
}

export default function Navbar({ onSearchOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [location] = useLocation();

  // Persist theme
  useEffect(() => {
    const saved = localStorage.getItem("ea-theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("ea-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("ea-theme", "light");
    }
  };

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

  // DESIGN.md: fog bg, transitions to semi-opaque on scroll
  const navBg = isDark
    ? (scrolled ? "rgba(0,0,0,0.92)" : "rgba(0,0,0,0.72)")
    : (scrolled ? "rgba(245,245,247,0.92)" : "rgba(245,245,247,0.82)");

  const textColor = isDark ? "rgba(245,245,247,0.9)" : "#1d1d1f";
  const textMuted = isDark ? "rgba(245,245,247,0.6)" : "rgba(29,29,31,0.6)";
  const borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

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
          {/* Logo — SF Pro Display 17px 700 */}
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
              }}
            >
              Everything Apple
            </span>
          </Link>

          {/* Desktop nav links — 12px SF Pro Text */}
          <div
            className="nav-desktop-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0px",
              overflow: "hidden",
              flex: 1,
              justifyContent: "center",
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
                      color: active ? textColor : textMuted,
                      padding: "4px 8px",
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                      transition: "color 0.1s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontFamily: "var(--font-sf-pro-text, system-ui)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = textColor;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = active ? textColor : textMuted;
                    }}
                  >
                    {link.label}
                    {link.isNew && !active && (
                      <span style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#0071e3",
                        display: "inline-block",
                        flexShrink: 0,
                        marginBottom: "5px",
                      }} />
                    )}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right side: Search, Theme, Buy CTA */}
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

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Light mode" : "Dark mode"}
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
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Buy CTA — Azure, sole CTA color per DESIGN.md */}
            <Link href="/iphones">
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "#0071e3",
                  color: "#ffffff",
                  borderRadius: "999px",
                  padding: "5px 14px",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  fontFamily: "var(--font-sf-pro-text, system-ui)",
                  textDecoration: "none",
                  transition: "background-color 0.1s ease",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#0077ed"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#0071e3"; }}
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
                }}>Everything Apple</span>
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
                      color: active ? "#0071e3" : textColor,
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
                        textTransform: "uppercase",
                        color: "#0071e3",
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
                color: location === "/" ? "#0071e3" : textColor,
                fontFamily: "var(--font-sf-pro-display, system-ui)",
              }}>Home</div>
            </Link>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              style={{
                marginTop: "24px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 0",
                background: "none",
                border: "none",
                fontSize: "17px",
                fontWeight: 400,
                color: textColor,
                cursor: "pointer",
                fontFamily: "var(--font-sf-pro-text, system-ui)",
                width: "100%",
                letterSpacing: "-0.022em",
              }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .nav-hamburger { display: none !important; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
