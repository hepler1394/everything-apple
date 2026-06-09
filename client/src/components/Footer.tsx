/* =============================================================
   Footer — Apple.com footer design
   Light gray (#f5f5f7) | 12px links | Multi-column grid
   No emojis, no icons, no colored elements
   ============================================================= */

import { Link } from "wouter";

const footerColumns = [
  {
    heading: "WWDC 2026",
    links: [
      { label: "All Announcements", href: "/wwdc-2026", external: false as const },
      { label: "Siri AI", href: "/siri-ai", external: false as const },
      { label: "Parental Controls", href: "/parental-controls", external: false as const },
      { label: "iOS 27", href: "/wwdc-2026#ios27", external: false as const },
      { label: "macOS Golden Gate", href: "/wwdc-2026#macos", external: false as const },
      { label: "Apple Intelligence", href: "/wwdc-2026#ai", external: false as const },
    ],
  },
  {
    heading: "iPhones",
    links: [
      { label: "iPhone 17 Series", href: "/iphones#iphone17", external: false as const },
      { label: "iPhone 16 Series", href: "/iphones#iphone16", external: false as const },
      { label: "iPhone 15 Series", href: "/iphones#iphone15", external: false as const },
      { label: "iPhone 14 Series", href: "/iphones#iphone14", external: false as const },
      { label: "iPhone 11 to 13", href: "/iphones#older", external: false as const },
      { label: "Compare Models", href: "/iphones", external: false as const },
    ],
  },
  {
    heading: "Tools",
    links: [
      { label: "Jailbreak Guide", href: "/jailbreak", external: false as const },
      { label: "Sideload Tools", href: "/jailbreak#sideload", external: false as const },
      { label: "iOS Compatibility", href: "/jailbreak#checker", external: false as const },
      { label: "Reddit Community", href: "/community", external: false as const },
      { label: "Apple Newsroom", href: "https://www.apple.com/newsroom/", external: true },
      { label: "r/jailbreak", href: "https://reddit.com/r/jailbreak", external: true },
    ],
  },
  {
    heading: "Everything Apple",
    links: [
      { label: "Home", href: "/", external: false as const },
      { label: "WWDC 2026", href: "/wwdc-2026", external: false as const },
      { label: "Siri AI Deep Dive", href: "/siri-ai", external: false as const },
      { label: "Parental Controls", href: "/parental-controls", external: false as const },
      { label: "Community Hub", href: "/community", external: false as const },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#f5f5f7" }}>
      <div style={{ height: "1px", background: "#d2d2d7" }} />

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
                  color: "#1d1d1f",
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
                          color: "#6e6e73",
                          textDecoration: "none",
                          lineHeight: 1.5,
                          transition: "color 0.15s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#1d1d1f")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#6e6e73")}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href}>
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#6e6e73",
                            textDecoration: "none",
                            lineHeight: 1.5,
                            cursor: "pointer",
                            transition: "color 0.15s ease",
                          }}
                          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#1d1d1f")}
                          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6e6e73")}
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

        <div style={{ height: "1px", background: "#d2d2d7" }} />

        {/* Bottom */}
        <div style={{ padding: "16px 0 24px" }}>
          <p
            style={{
              fontSize: "12px",
              color: "#6e6e73",
              margin: "0 0 8px 0",
              lineHeight: 1.5,
            }}
          >
            Copyright &copy; {new Date().getFullYear()} Everything Apple. Built by{" "}
            <strong style={{ color: "#1d1d1f", fontWeight: 600 }}>Cory Hepler</strong>.
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
                  color: "#6e6e73",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0071e3")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6e6e73")}
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
