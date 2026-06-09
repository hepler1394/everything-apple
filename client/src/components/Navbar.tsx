/*
 * Navbar — Everything Apple
 * Design: iOS 27 Glassmorphism + Apple.com 44px nav
 * Features: Light/Dark toggle, Search trigger, Mobile hamburger
 * No emojis, no colored badges
 * Built by Cory Hepler
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/wwdc-2026", label: "WWDC 2026" },
  { href: "/siri-ai", label: "Siri AI" },
  { href: "/parental-controls", label: "Parental Controls" },
  { href: "/ios-27", label: "iOS 27" },
  { href: "/macos-golden-gate", label: "macOS" },
  { href: "/apple-intelligence", label: "Intelligence" },
  { href: "/watchos-12", label: "watchOS 12" },
  { href: "/iphones", label: "iPhones" },
  { href: "/iphone-timeline", label: "iPhone History" },
  { href: "/apple-silicon", label: "Apple Silicon" },
  { href: "/jailbreak", label: "Jailbreak" },
  { href: "/community", label: "Community" },
  { href: "/gallery", label: "Gallery" },
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

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg = scrolled
    ? "var(--nav-bg)"
    : "rgba(0,0,0,0)";

  const navBorderColor = scrolled ? "var(--nav-border)" : "transparent";
  const textColor = scrolled ? "var(--nav-text)" : "#f5f5f7";
  const textMuted = scrolled ? "var(--nav-text-muted)" : "rgba(255,255,255,0.75)";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          height: "52px",
          background: navBg,
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: `1px solid ${navBorderColor}`,
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
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
                letterSpacing: "-0.03em",
                color: textColor,
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "color 0.3s ease",
                textDecoration: "none",
              }}
            >
              Everything Apple
            </span>
          </Link>

          {/* Desktop nav links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              overflow: "hidden",
              flex: 1,
              justifyContent: "center",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => {
              const active = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: active ? 600 : 400,
                      letterSpacing: "-0.01em",
                      color: active ? textColor : textMuted,
                      padding: "6px 8px",
                      borderRadius: "6px",
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                      transition: "color 0.2s ease, background 0.2s ease",
                      display: "block",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = textColor;
                      if (scrolled) (e.currentTarget as HTMLElement).style.background = "var(--glass-border-subtle)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = active ? textColor : textMuted;
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
            {/* Search */}
            <button
              onClick={onSearchOpen}
              aria-label="Search"
              style={{
                background: "none",
                border: "none",
                color: textColor,
                padding: "8px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s ease, color 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                if (scrolled) (e.currentTarget as HTMLElement).style.background = "var(--glass-border-subtle)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <Search size={16} />
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                background: scrolled ? "var(--glass-bg)" : "rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: `1px solid ${scrolled ? "var(--glass-border-subtle)" : "rgba(255,255,255,0.2)"}`,
                color: textColor,
                padding: "6px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
                cursor: "pointer",
                width: "32px",
                height: "32px",
              }}
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              style={{
                background: "none",
                border: "none",
                color: textColor,
                padding: "8px",
                borderRadius: "8px",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              className="show-mobile"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            background: "var(--glass-bg-strong)",
            backdropFilter: "blur(40px) saturate(200%)",
            WebkitBackdropFilter: "blur(40px) saturate(200%)",
            paddingTop: "60px",
            overflowY: "auto",
            animation: "scaleIn 0.2s cubic-bezier(0.23, 1, 0.32, 1) both",
          }}
        >
          <div style={{ padding: "20px 22px 40px" }}>
            {navLinks.map((link, i) => {
              const active = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <div
                    style={{
                      padding: "14px 0",
                      borderBottom: "1px solid var(--glass-border-subtle)",
                      fontSize: "19px",
                      fontWeight: active ? 600 : 400,
                      letterSpacing: "-0.022em",
                      color: active ? "var(--apple-blue)" : "var(--foreground)",
                      textDecoration: "none",
                      display: "block",
                      animation: `fadeInUp 0.3s cubic-bezier(0.23, 1, 0.32, 1) ${i * 0.03}s both`,
                    }}
                  >
                    {link.label}
                  </div>
                </Link>
              );
            })}

            {/* Theme toggle in mobile menu */}
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
                color: "var(--foreground)",
                cursor: "pointer",
                fontFamily: "inherit",
                width: "100%",
                letterSpacing: "-0.022em",
              }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
              {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
