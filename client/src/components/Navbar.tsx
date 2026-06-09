/* =============================================================
   Navbar — Apple.com global navigation design
   44px height | SF Pro system font | 12px links
   Frosted glass dark by default, transitions to light on scroll
   No emojis, no colored badges, no rounded pill containers
   ============================================================= */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, X } from "lucide-react";

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
  { href: "/apple-silicon", label: "Apple Silicon" },
  { href: "/jailbreak", label: "Jailbreak" },
  { href: "/community", label: "Community" },
  { href: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

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

  const isDark = !scrolled;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          height: "44px",
          background: scrolled
            ? "rgba(255,255,255,0.85)"
            : "rgba(22,22,23,0.8)",
          backdropFilter: "saturate(180%) blur(20px)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
          transition: "background 0.3s ease, border-color 0.3s ease",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 22px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "44px",
          }}
        >
          {/* Logo */}
          <Link href="/">
            <span
              style={{
                fontSize: "17px",
                fontWeight: 600,
                letterSpacing: "-0.022em",
                color: isDark ? "#f5f5f7" : "#1d1d1f",
                textDecoration: "none",
                transition: "color 0.3s ease",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Everything Apple
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            className="hidden lg:flex"
            style={{ alignItems: "center", gap: "28px" }}
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    color:
                      location === link.href
                        ? isDark ? "#ffffff" : "#1d1d1f"
                        : isDark ? "rgba(255,255,255,0.7)" : "#6e6e73",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href="https://www.apple.com/newsroom/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center" }}
              aria-label="Search"
            >
              <Search
                style={{
                  width: "15px",
                  height: "15px",
                  color: isDark ? "rgba(255,255,255,0.8)" : "#1d1d1f",
                  transition: "color 0.3s ease",
                }}
              />
            </a>

            {/* Mobile toggle */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                display: "flex",
                alignItems: "center",
                color: isDark ? "rgba(255,255,255,0.8)" : "#1d1d1f",
                transition: "color 0.3s ease",
              }}
            >
              {menuOpen
                ? <X style={{ width: "18px", height: "18px" }} />
                : <Menu style={{ width: "18px", height: "18px" }} />
              }
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
            background: "rgba(22,22,23,0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            paddingTop: "44px",
            overflowY: "auto",
          }}
        >
          <div style={{ padding: "0 22px" }}>
            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.1)",
                margin: "20px 0",
              }}
            />
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href}>
                <div
                  style={{
                    padding: "18px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    opacity: 0,
                    animation: `navFadeIn 0.3s ease forwards ${i * 40}ms`,
                  }}
                >
                  <span
                    style={{
                      fontSize: "21px",
                      fontWeight: 600,
                      letterSpacing: "-0.022em",
                      color: location === link.href ? "#0071e3" : "#f5f5f7",
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.3)",
                      fontSize: "17px",
                      fontWeight: 300,
                    }}
                  >
                    &rsaquo;
                  </span>
                </div>
              </Link>
            ))}
            <div style={{ height: "40px" }} />
          </div>
        </div>
      )}

      {/* Spacer to push content below fixed nav */}
      <div style={{ height: "44px" }} />

      <style>{`
        @keyframes navFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
