/* =============================================================
   Jailbreak Page — Apple.com design language
   Compatibility checker, tools, sideloading — no emojis
   Built by Cory Hepler
   ============================================================= */

import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";

type JailbreakStatus = "jailbreakable" | "partial" | "not-jailbreakable";

interface CompatEntry {
  ios: string;
  status: JailbreakStatus;
  tool?: string;
  toolUrl?: string;
  notes: string;
}

const compatibilityData: Record<string, CompatEntry[]> = {
  "iOS 18": [
    { ios: "iOS 18.0 – 18.3.2", status: "jailbreakable", tool: "palera1n", toolUrl: "https://palera.in", notes: "A8–A11 chip iPhones only (iPhone X and older). Semi-tethered." },
    { ios: "iOS 18.4 – 18.5", status: "partial", tool: "palera1n (beta)", toolUrl: "https://palera.in", notes: "Limited device support. Check palera1n compatibility list." },
    { ios: "iOS 18.6+", status: "not-jailbreakable", notes: "No public jailbreak available yet." },
  ],
  "iOS 17": [
    { ios: "iOS 17.0 – 17.6.1", status: "jailbreakable", tool: "palera1n", toolUrl: "https://palera.in", notes: "A8–A11 chip iPhones. Semi-tethered. Requires macOS or Linux." },
    { ios: "iOS 17.7+", status: "partial", notes: "Limited support. Check latest palera1n releases." },
  ],
  "iOS 16": [
    { ios: "iOS 16.0 – 16.7.x", status: "jailbreakable", tool: "palera1n", toolUrl: "https://palera.in", notes: "A8–A11 chip iPhones. Semi-tethered jailbreak." },
    { ios: "iOS 16.0 – 16.6.1 (A12+)", status: "jailbreakable", tool: "Dopamine", toolUrl: "https://github.com/opa334/Dopamine", notes: "A12+ chip iPhones. Rootless jailbreak. Very stable." },
  ],
  "iOS 15": [
    { ios: "iOS 15.0 – 15.8.x", status: "jailbreakable", tool: "palera1n", toolUrl: "https://palera.in", notes: "A8–A11 chip iPhones." },
    { ios: "iOS 15.0 – 15.4.1 (A12+)", status: "jailbreakable", tool: "Dopamine", toolUrl: "https://github.com/opa334/Dopamine", notes: "A12+ iPhones. Rootless." },
  ],
  "iOS 14": [
    { ios: "iOS 14.0 – 14.8.1", status: "jailbreakable", tool: "checkra1n", toolUrl: "https://checkra.in", notes: "A8–A11 chip iPhones only. Semi-tethered." },
    { ios: "iOS 14.0 – 14.5 (A12+)", status: "jailbreakable", tool: "unc0ver", toolUrl: "https://unc0ver.dev", notes: "A12+ iPhones. Untethered. Very stable." },
  ],
  "iOS 13": [
    { ios: "iOS 13.0 – 13.7", status: "jailbreakable", tool: "checkra1n / unc0ver", toolUrl: "https://checkra.in", notes: "Wide device support. Both checkra1n and unc0ver work." },
  ],
};

const jailbreakTools = [
  {
    name: "palera1n",
    desc: "The most actively maintained jailbreak tool. Supports A8–A11 devices on iOS 15–18. Semi-tethered. Requires a computer to boot.",
    url: "https://palera.in",
    supports: "iOS 15 – 18.3.2 (A8–A11)",
    type: "Semi-tethered",
    status: "Active",
  },
  {
    name: "Dopamine",
    desc: "Rootless jailbreak for A12+ devices. Extremely stable. Does not modify the root filesystem, making it safer and more compatible with apps.",
    url: "https://github.com/opa334/Dopamine",
    supports: "iOS 15.0 – 16.6.1 (A12+)",
    type: "Rootless",
    status: "Active",
  },
  {
    name: "checkra1n",
    desc: "Hardware-based jailbreak exploiting the checkm8 bootrom vulnerability. Permanent and very reliable for supported devices.",
    url: "https://checkra.in",
    supports: "iOS 12 – 14.8.1 (A8–A11)",
    type: "Semi-tethered",
    status: "Maintained",
  },
  {
    name: "unc0ver",
    desc: "Classic untethered jailbreak. Supports a wide range of iOS versions and devices. Stable and well-tested.",
    url: "https://unc0ver.dev",
    supports: "iOS 11 – 14.8 (A12+)",
    type: "Untethered",
    status: "Legacy",
  },
];

const sideloadTools = [
  {
    name: "AltStore",
    desc: "The most popular sideloading tool. Install apps via your Apple ID without a computer after initial setup. Free with 3-app limit.",
    url: "https://altstore.io",
    platforms: "Windows, macOS",
    difficulty: "Easy",
    free: true,
  },
  {
    name: "Sideloadly",
    desc: "Feature-rich sideloading tool. Supports tweaked apps, game emulators, and custom IPAs. Requires re-signing every 7 days with a free Apple ID.",
    url: "https://sideloadly.io",
    platforms: "Windows, macOS",
    difficulty: "Easy",
    free: true,
  },
  {
    name: "SideStore",
    desc: "Open-source AltStore alternative that runs entirely on-device after initial setup. No computer needed for refreshing apps.",
    url: "https://sidestore.io",
    platforms: "On-device",
    difficulty: "Medium",
    free: true,
  },
  {
    name: "TrollStore",
    desc: "Permanent sideloading for supported iOS versions. Apps never expire and do not need refreshing. Works on specific iOS versions only.",
    url: "https://github.com/opa334/TrollStore",
    platforms: "On-device",
    difficulty: "Medium",
    free: true,
  },
  {
    name: "Scarlet",
    desc: "On-device app installer with a large library of tweaked apps and games. No computer required. Certificate-based signing.",
    url: "https://usescarlet.com",
    platforms: "On-device",
    difficulty: "Easy",
    free: true,
  },
  {
    name: "ESign",
    desc: "On-device IPA installer and signer. Import your own certificates or use the built-in signing service. Supports custom repos.",
    url: "https://esign.yyyue.xyz",
    platforms: "On-device",
    difficulty: "Medium",
    free: true,
  },
];

function FadeSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="fade-in-up">{children}</div>;
}

const statusConfig = {
  jailbreakable: { label: "Jailbreakable", color: "#30d158" },
  partial: { label: "Partial", color: "#ff9f0a" },
  "not-jailbreakable": { label: "Not Available", color: "rgba(255,255,255,0.3)" },
};

export default function Jailbreak() {
  const [selectedVersion, setSelectedVersion] = useState<string>("iOS 18");

  const entries = compatibilityData[selectedVersion] || [];

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section
        style={{
          background: "#000",
          padding: "140px 22px 80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "16px",
          }}
        >
          Jailbreak and Sideloading
        </div>
        <h1
          className="apple-headline-hero"
          style={{ color: "#f5f5f7", marginBottom: "20px" }}
        >
          Jailbreak Guide.
        </h1>
        <p
          className="apple-body-large"
          style={{ color: "rgba(255,255,255,0.65)", maxWidth: "600px", margin: "0 auto 40px" }}
        >
          Check if your iOS version can be jailbroken. Find the right tools, download links, and sideloading apps — all in one place.
        </p>
        <div
          style={{
            display: "inline-block",
            padding: "12px 20px",
            border: "1px solid rgba(255,153,10,0.4)",
            borderRadius: "12px",
            background: "rgba(255,153,10,0.06)",
            maxWidth: "600px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.5,
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Jailbreaking voids your warranty and may expose your device to security risks. Proceed only if you understand the implications. Always back up your device before attempting.
          </p>
        </div>
      </section>

      {/* ── Compatibility Checker ── */}
      <section style={{ background: "#1d1d1f", padding: "80px 0" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              Compatibility Checker
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "40px" }}
            >
              Select your iOS version.
            </h2>

            {/* Version selector */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: "40px",
              }}
            >
              {Object.keys(compatibilityData).map((version) => (
                <button
                  key={version}
                  onClick={() => setSelectedVersion(version)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "980px",
                    border: selectedVersion === version ? "1px solid #0071e3" : "1px solid rgba(255,255,255,0.15)",
                    background: selectedVersion === version ? "rgba(0,113,227,0.15)" : "transparent",
                    color: selectedVersion === version ? "#0071e3" : "rgba(255,255,255,0.6)",
                    fontSize: "14px",
                    fontWeight: selectedVersion === version ? 600 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {version}
                </button>
              ))}
            </div>

            {/* Results table */}
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "18px",
                overflow: "hidden",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto auto",
                  gap: "16px",
                  padding: "12px 24px",
                  background: "rgba(255,255,255,0.04)",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Version</span>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Status</span>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Tool</span>
              </div>

              {entries.map((entry, i) => {
                const cfg = statusConfig[entry.status];
                return (
                  <div key={i}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto auto",
                        gap: "16px",
                        padding: "20px 24px",
                        borderBottom: i < entries.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                        alignItems: "start",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "15px", fontWeight: 500, color: "#f5f5f7", letterSpacing: "-0.022em", marginBottom: "4px" }}>
                          {entry.ios}
                        </div>
                        <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.4, letterSpacing: "-0.01em" }}>
                          {entry.notes}
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: cfg.color,
                          whiteSpace: "nowrap",
                          paddingTop: "2px",
                        }}
                      >
                        {cfg.label}
                      </div>
                      <div style={{ paddingTop: "2px" }}>
                        {entry.tool && entry.toolUrl ? (
                          <a
                            href={entry.toolUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontSize: "12px",
                              color: "#0071e3",
                              textDecoration: "none",
                              whiteSpace: "nowrap",
                              fontWeight: 400,
                            }}
                          >
                            {entry.tool} &rsaquo;
                          </a>
                        ) : (
                          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>—</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Jailbreak Tools ── */}
      <section style={{ background: "#000", padding: "100px 0" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              Jailbreak Tools
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "60px" }}
            >
              The tools that make it possible.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "2px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "18px",
                overflow: "hidden",
              }}
              className="tools-grid-responsive"
            >
              {jailbreakTools.map((tool) => (
                <div
                  key={tool.name}
                  style={{
                    background: "#000",
                    padding: "36px 32px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "12px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        letterSpacing: "-0.025em",
                        color: "#f5f5f7",
                        margin: 0,
                      }}
                    >
                      {tool.name}
                    </h3>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        color: tool.status === "Active" ? "#30d158" : tool.status === "Maintained" ? "#0071e3" : "rgba(255,255,255,0.35)",
                        padding: "3px 8px",
                        border: `1px solid ${tool.status === "Active" ? "rgba(48,209,88,0.3)" : tool.status === "Maintained" ? "rgba(0,113,227,0.3)" : "rgba(255,255,255,0.1)"}`,
                        borderRadius: "980px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tool.status}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.5,
                      letterSpacing: "-0.022em",
                      marginBottom: "20px",
                    }}
                  >
                    {tool.desc}
                  </p>
                  <div style={{ marginBottom: "8px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Supports</span>
                    <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>{tool.supports}</div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Type</span>
                    <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>{tool.type}</div>
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "14px",
                      color: "#0071e3",
                      textDecoration: "none",
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Download {tool.name} &rsaquo;
                  </a>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Sideload Tools ── */}
      <section style={{ background: "#1d1d1f", padding: "100px 0" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              Sideloading
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "20px" }}
            >
              Install apps without jailbreaking.
            </h2>
            <p
              className="apple-body-large"
              style={{ color: "rgba(255,255,255,0.6)", textAlign: "center", marginBottom: "60px" }}
            >
              Sideloading lets you install apps that are not in the App Store without jailbreaking your device. These tools work on any iOS version.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "18px",
                overflow: "hidden",
              }}
              className="sideload-grid-responsive"
            >
              {sideloadTools.map((tool) => (
                <div
                  key={tool.name}
                  style={{
                    background: "#1d1d1f",
                    padding: "32px 28px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      letterSpacing: "-0.025em",
                      color: "#f5f5f7",
                      marginBottom: "8px",
                    }}
                  >
                    {tool.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.5,
                      letterSpacing: "-0.01em",
                      marginBottom: "20px",
                    }}
                  >
                    {tool.desc}
                  </p>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.5)",
                        padding: "3px 8px",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "980px",
                      }}
                    >
                      {tool.platforms}
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.5)",
                        padding: "3px 8px",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "980px",
                      }}
                    >
                      {tool.difficulty}
                    </span>
                    {tool.free && (
                      <span
                        style={{
                          fontSize: "11px",
                          color: "#30d158",
                          padding: "3px 8px",
                          border: "1px solid rgba(48,209,88,0.25)",
                          borderRadius: "980px",
                        }}
                      >
                        Free
                      </span>
                    )}
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "14px",
                      color: "#0071e3",
                      textDecoration: "none",
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Get {tool.name} &rsaquo;
                  </a>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── What is Jailbreaking ── */}
      <section style={{ background: "#000", padding: "100px 0" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              What is Jailbreaking
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "40px" }}
            >
              Understand before you start.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "18px",
                overflow: "hidden",
                marginBottom: "32px",
              }}
              className="tools-grid-responsive"
            >
              {[
                {
                  title: "What it does",
                  items: [
                    "Removes Apple's software restrictions",
                    "Allows installing apps outside the App Store",
                    "Enables system-level customization",
                    "Unlocks features Apple does not allow",
                  ],
                },
                {
                  title: "What to know",
                  items: [
                    "Voids your Apple warranty",
                    "May cause instability or crashes",
                    "Security risks from untrusted packages",
                    "Some banking apps may stop working",
                  ],
                },
              ].map((col) => (
                <div key={col.title} style={{ background: "#000", padding: "32px 28px" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#0071e3",
                      marginBottom: "16px",
                    }}
                  >
                    {col.title}
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {col.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontSize: "14px",
                          color: "rgba(255,255,255,0.65)",
                          padding: "8px 0",
                          borderBottom: "1px solid rgba(255,255,255,0.07)",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.4,
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div
              style={{
                padding: "20px 24px",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.6,
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                Everything Apple does not endorse or encourage jailbreaking. This information is provided for educational purposes only. Always research your specific device and iOS version before proceeding.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .tools-grid-responsive {
            grid-template-columns: 1fr !important;
          }
          .sideload-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
