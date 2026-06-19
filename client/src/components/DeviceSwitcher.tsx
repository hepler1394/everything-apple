/* Pill switcher to move between the device history timelines. */
import { Link, useLocation } from "wouter";

const tabs = [
  { href: "/iphone-timeline", label: "iPhone" },
  { href: "/watch-history", label: "Apple Watch" },
  { href: "/ipod-history", label: "iPod" },
];

export default function DeviceSwitcher() {
  const [location] = useLocation();
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
      {tabs.map((t) => {
        const active = location === t.href;
        return (
          <Link key={t.href} href={t.href}>
            <span aria-current={active ? "page" : undefined} style={{
              display: "inline-block",
              padding: "8px 20px",
              borderRadius: "980px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              background: active ? "#f5f5f7" : "rgba(255,255,255,0.08)",
              color: active ? "#000" : "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}>
              {t.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
