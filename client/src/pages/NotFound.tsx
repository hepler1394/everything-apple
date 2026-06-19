import { Link } from "wouter";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/iphone-timeline", label: "iPhone History" },
  { href: "/sideloading", label: "Sideloading Hub" },
  { href: "/gallery", label: "Gallery" },
  { href: "/wwdc-2026", label: "WWDC 2026" },
];

export default function NotFound() {
  return (
    <div style={{
      minHeight: "70vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", textAlign: "center",
      padding: "60px 22px", background: "var(--background)", color: "var(--foreground)",
    }}>
      <div style={{
        fontSize: "clamp(80px, 18vw, 160px)", fontWeight: 700, letterSpacing: "-0.05em",
        lineHeight: 1, color: "var(--brand)",
      }}>404</div>
      <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "12px 0 8px" }}>
        This page took the day off.
      </h1>
      <p style={{ fontSize: "17px", color: "var(--muted-foreground)", maxWidth: "460px", lineHeight: 1.5, margin: "0 0 28px" }}>
        We couldn't find what you were looking for. It may have moved — try one of these instead.
      </p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
        {quickLinks.map((l, i) => (
          <Link key={l.href} href={l.href}>
            <span style={{
              display: "inline-block", padding: "10px 20px", borderRadius: "980px",
              fontSize: "14px", fontWeight: 600, cursor: "pointer", textDecoration: "none",
              background: i === 0 ? "var(--brand)" : "transparent",
              color: i === 0 ? "#fff" : "var(--foreground)",
              border: i === 0 ? "none" : "1px solid var(--border)",
            }}>{l.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
