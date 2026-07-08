/*
 * ClassicNav — the Aqua / early-2000s Apple.com tab bar.
 * Brushed-metal chrome, folder-style tabs, the six-color Apple logo,
 * and a secondary text sub-nav. Shown only in the "classic" theme.
 */

import { Link, useLocation } from "wouter";
import { Search } from "lucide-react";
import { primaryNav, secondaryNav } from "@/lib/navLinks";
import ThemePicker from "./ThemePicker";
import AppleLogo6 from "./AppleLogo6";

interface Props {
  onSearchOpen?: () => void;
}

export default function ClassicNav({ onSearchOpen }: Props) {
  const [location] = useLocation();

  return (
    <nav
      aria-label="Primary"
      style={{
        position: "fixed",
        top: "var(--banner-height, 0px)",
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
    >
      {/* Row 1 — brushed-metal tab bar */}
      <div className="aqua-metalbar">
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "6px 16px 0",
            display: "flex",
            alignItems: "flex-end",
            gap: "10px",
          }}
        >
          {/* Apple logo tab → home */}
          <Link href="/">
            <span
              className="aqua-tab"
              aria-current={location === "/" ? "page" : undefined}
              aria-label="Home"
              style={{ padding: "5px 12px" }}
            >
              <AppleLogo6 size={17} />
            </span>
          </Link>

          {/* Scrolling tab strip */}
          <div
            className="aqua-tabstrip"
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "2px",
              flex: 1,
              overflowX: "auto",
              overflowY: "hidden",
              scrollbarWidth: "none",
            }}
          >
            {primaryNav.map((link) => {
              const active = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <span className="aqua-tab" aria-current={active ? "page" : undefined}>
                    {link.label}
                    {link.isNew && !active && (
                      <span
                        aria-hidden
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#e03a3e",
                          boxShadow: "0 0 4px rgba(224,58,62,0.6)",
                          display: "inline-block",
                        }}
                      />
                    )}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "2px", paddingBottom: "3px", flexShrink: 0 }}>
            <button
              onClick={onSearchOpen}
              aria-label="Search"
              style={{
                background: "none",
                border: "none",
                color: "#303036",
                padding: "5px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                opacity: 0.75,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
            >
              <Search size={15} aria-hidden />
            </button>
            <ThemePicker />
          </div>
        </div>
      </div>

      {/* Row 2 — secondary text sub-nav (era-correct) */}
      <div
        style={{
          background: "linear-gradient(to bottom, #eef0f3 0%, #e3e5ea 100%)",
          borderBottom: "1px solid #b9bac2",
          boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
        }}
      >
        <div
          className="aqua-subnav"
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "4px 18px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            overflowX: "auto",
            scrollbarWidth: "none",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ fontSize: "11px", fontWeight: 700, color: "#8a8b93", letterSpacing: "0.02em" }}>
            Everything Apple
          </span>
          {secondaryNav.map((link) => (
            <Link key={link.href} href={link.href} aria-current={location === link.href ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .aqua-tabstrip::-webkit-scrollbar,
        .aqua-subnav::-webkit-scrollbar { display: none; }
      `}</style>
    </nav>
  );
}
