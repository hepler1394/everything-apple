/* =============================================================
   Footer — Everything Apple
   Theme-aware (dark/light/siri/red), updated links for sideloading split
   ============================================================= */

import { Link } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";

const footerColumns = [
  {
    heading: "WWDC 2026",
    links: [
      { label: "All Announcements", href: "/wwdc-2026", external: false as const },
      { label: "Siri AI", href: "/siri-ai", external: false as const },
      { label: "iOS 27", href: "/ios-27", external: false as const },
      { label: "macOS Golden Gate", href: "/macos-golden-gate", external: false as const },
      { label: "watchOS 12", href: "/watchos-12", external: false as const },
      { label: "Apple Intelligence", href: "/apple-intelligence", external: false as const },
    ],
  },
  {
    heading: "iPhones",
    links: [
      { label: "All iPhones", href: "/iphones", external: false as const },
      { label: "iPhone History", href: "/iphone-timeline", external: false as const },
      { label: "Compare Models", href: "/compare", external: false as const },
      { label: "Apple Silicon", href: "/apple-silicon", external: false as const },
      { label: "Gallery", href: "/gallery", external: false as const },
    ],
  },
  {
    heading: "Tools & Guides",
    links: [
      { label: "Sideloading Guide", href: "/sideloading", external: false as const },
      { label: "Jailbreak Guide", href: "/jailbreak", external: false as const },
      { label: "Parental Controls", href: "/parental-controls", external: false as const },
      { label: "Reddit Community", href: "/community", external: false as const },
      { label: "r/jailbreak", href: "https://reddit.com/r/jailbreak", external: true },
      { label: "r/sideloaded", href: "https://reddit.com/r/sideloaded", external: true },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Apple Newsroom", href: "https://www.apple.com/newsroom/", external: true },
      { label: "9to5Mac", href: "https://9to5mac.com", external: true },
      { label: "MacRumors", href: "https://macrumors.com", external: true },
      { label: "Apple Developer", href: "https://developer.apple.com", external: true },
      { label: "AltStore", href: "https://altstore.io", external: true },
    ],
  },
];

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark" || theme === "siri" || theme === "red";

  const bg = isDark ? "#1d1d1f" : "#f5f5f7";
  const divider = isDark ? "rgba(255,255,255,0.08)" : "#d2d2d7";
  const headingColor = isDark ? "rgba(255,255,255,0.85)" : "#1d1d1f";
  const linkColor = isDark ? "rgba(255,255,255,0.45)" : "#6e6e73";
  const linkHover = isDark ? "rgba(255,255,255,0.85)" : "#1d1d1f";
  const accentHover = theme === "siri" ? "#bf5af2" : theme === "red" ? "#ff453a" : "#0071e3";

  return (
    <footer style={{ background: bg }}>
      <div style={{ height: "1px", background: divider }} />

      <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
        {/* Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "32px",
            padding: "40px 0 32px",
          }}
        >
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: headingColor,
                  marginBottom: "12px",
                }}
              >
                {col.heading}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map((link) => (
                  <li key={link.label} style={{ marginBottom: "8px" }}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "12px",
                          color: linkColor,
                          textDecoration: "none",
                          lineHeight: 1.5,
                          transition: "color 0.15s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = accentHover)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href}>
                        <span
                          style={{
                            fontSize: "12px",
                            color: linkColor,
                            textDecoration: "none",
                            lineHeight: 1.5,
                            cursor: "pointer",
                            transition: "color 0.15s ease",
                          }}
                          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = linkHover)}
                          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = linkColor)}
                        >
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: "1px", background: divider }} />

        {/* Bottom */}
        <div style={{ padding: "16px 0 24px" }}>
          <p
            style={{
              fontSize: "12px",
              color: linkColor,
              margin: "0 0 8px 0",
              lineHeight: 1.5,
            }}
          >
            Copyright &copy; {new Date().getFullYear()} Everything Apple. Built by{" "}
            <strong style={{ color: headingColor, fontWeight: 600 }}>Cory Hepler</strong>.
            Not affiliated with Apple Inc. All product names, logos, and brands are property of their respective owners.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {[
              { label: "Apple.com", href: "https://www.apple.com" },
              { label: "Apple Newsroom", href: "https://www.apple.com/newsroom/" },
              { label: "r/apple", href: "https://reddit.com/r/apple" },
              { label: "9to5Mac", href: "https://9to5mac.com" },
              { label: "MacRumors", href: "https://macrumors.com" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "12px",
                  color: linkColor,
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = accentHover)}
                onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
