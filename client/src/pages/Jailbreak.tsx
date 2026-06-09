/* =============================================================
   Jailbreak Page — Apple.com design language
   Compatibility checker, tools, sideloading — no emojis
   Built by Cory Hepler
   ============================================================= */

import { useState, useEffect, useRef } from "react";

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
    { ios: "iOS 18.0 – 18.7.1 (A8–A11)", status: "jailbreakable", tool: "palera1n", toolUrl: "https://palera.in", notes: "iPhone X and older. Semi-tethered. Requires macOS or Linux to boot." },
    { ios: "iOS 18.0 – 18.7.1 (A12+)", status: "partial", notes: "No rootless jailbreak for A12+ on iOS 18 yet. TrollStore available on select builds." },
    { ios: "iOS 18.8+", status: "not-jailbreakable", notes: "No public jailbreak. Do not update if you want to jailbreak." },
  ],
  "iOS 17": [
    { ios: "iOS 17.0 – 17.7.10 (A8–A11)", status: "jailbreakable", tool: "palera1n", toolUrl: "https://palera.in", notes: "A8–A11 chip iPhones. Semi-tethered. Requires macOS or Linux." },
    { ios: "iOS 17.0 – 17.7.10 (A12+)", status: "partial", notes: "No rootless jailbreak for A12+ on iOS 17. TrollStore available on some builds." },
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
  const [toolTypeFilter, setToolTypeFilter] = useState<string>("All");
  const [toolStatusFilter, setToolStatusFilter] = useState<string>("All");
  const [sideloadPlatformFilter, setSideloadPlatformFilter] = useState<string>("All");
  const [sideloadDifficultyFilter, setSideloadDifficultyFilter] = useState<string>("All");

  const entries = compatibilityData[selectedVersion] || [];

  const filteredJailbreakTools = jailbreakTools.filter((t) => {
    const typeMatch = toolTypeFilter === "All" || t.type === toolTypeFilter;
    const statusMatch = toolStatusFilter === "All" || t.status === toolStatusFilter;
    return typeMatch && statusMatch;
  });

  const filteredSideloadTools = sideloadTools.filter((t) => {
    const platformMatch = sideloadPlatformFilter === "All" || t.platforms.includes(sideloadPlatformFilter);
    const difficultyMatch = sideloadDifficultyFilter === "All" || t.difficulty === sideloadDifficultyFilter;
    return platformMatch && difficultyMatch;
  });

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section
        style={{
          background: "#000",
          padding: "60px 22px 80px",
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
              style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "40px" }}
            >
              The tools that make it possible.
            </h2>
            {/* Filter dropdowns */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Type</label>
                <select
                  value={toolTypeFilter}
                  onChange={(e) => setToolTypeFilter(e.target.value)}
                  style={{ background: "#1d1d1f", color: "#f5f5f7", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", padding: "8px 14px", fontSize: "14px", cursor: "pointer", outline: "none" }}
                >
                  <option value="All">All Types</option>
                  <option value="Semi-tethered">Semi-tethered</option>
                  <option value="Rootless">Rootless</option>
                  <option value="Untethered">Untethered</option>
                </select>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Status</label>
                <select
                  value={toolStatusFilter}
                  onChange={(e) => setToolStatusFilter(e.target.value)}
                  style={{ background: "#1d1d1f", color: "#f5f5f7", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", padding: "8px 14px", fontSize: "14px", cursor: "pointer", outline: "none" }}
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Maintained">Maintained</option>
                  <option value="Legacy">Legacy</option>
                </select>
              </div>
            </div>
            {filteredJailbreakTools.length === 0 && (
              <p style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: "15px", padding: "40px 0" }}>No tools match the selected filters.</p>
            )}
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
              {filteredJailbreakTools.map((tool) => (
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
            {/* Sideload filter dropdowns */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Platform</label>
                <select
                  value={sideloadPlatformFilter}
                  onChange={(e) => setSideloadPlatformFilter(e.target.value)}
                  style={{ background: "#000", color: "#f5f5f7", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", padding: "8px 14px", fontSize: "14px", cursor: "pointer", outline: "none" }}
                >
                  <option value="All">All Platforms</option>
                  <option value="Windows">Windows</option>
                  <option value="macOS">macOS</option>
                  <option value="On-device">On-device</option>
                </select>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Difficulty</label>
                <select
                  value={sideloadDifficultyFilter}
                  onChange={(e) => setSideloadDifficultyFilter(e.target.value)}
                  style={{ background: "#000", color: "#f5f5f7", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", padding: "8px 14px", fontSize: "14px", cursor: "pointer", outline: "none" }}
                >
                  <option value="All">All Levels</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                </select>
              </div>
            </div>
            {filteredSideloadTools.length === 0 && (
              <p style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: "15px", padding: "40px 0" }}>No tools match the selected filters.</p>
            )}
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
              {filteredSideloadTools.map((tool) => (
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

      {/* ── Popular Tweaks ── */}
      <section style={{ background: "#000", padding: "100px 0" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px", textAlign: "center" }}>Most Recommended</div>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "16px" }}>Popular tweaks from r/jailbreak.</h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", textAlign: "center", maxWidth: "600px", margin: "0 auto 60px", letterSpacing: "-0.022em", lineHeight: 1.5 }}>The most upvoted and recommended tweaks from the jailbreak community. Requires a jailbroken device with Sileo or Zebra.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", background: "rgba(255,255,255,0.08)", borderRadius: "18px", overflow: "hidden" }} className="sideload-grid-responsive">
              {[
                { name: "Dopamine", category: "Jailbreak", desc: "The rootless jailbreak for A12+ on iOS 15–16. Stable, actively maintained, and compatible with most tweaks.", repo: "ellekit.space", stars: "9.8k" },
                { name: "Crane", category: "UI", desc: "Liquid Glass-style blur effects for the home screen and app switcher. One of the most-downloaded tweaks of 2025.", repo: "havoc.app", stars: "4.2k" },
                { name: "Notchification", category: "Notifications", desc: "Turns the Dynamic Island into a notification hub. Animated alerts, custom colors, and per-app rules.", repo: "chariz.com", stars: "3.1k" },
                { name: "Filza", category: "File Manager", desc: "Full filesystem access. Browse, edit, and manage every file on your device. Essential for power users.", repo: "tigisoftware.com", stars: "8.7k" },
                { name: "NewTerm 3", category: "Terminal", desc: "A full SSH-capable terminal emulator for iOS. Tab support, custom themes, and hardware keyboard support.", repo: "chariz.com", stars: "5.3k" },
                { name: "Palert", category: "Alerts", desc: "Replaces the default iOS alert style with a cleaner, more modern design. Highly customizable.", repo: "havoc.app", stars: "2.8k" },
                { name: "BatteryBuddy", category: "Battery", desc: "Adds a cute animated character to your status bar that reacts to your battery level. Fan favorite.", repo: "chariz.com", stars: "6.1k" },
                { name: "Prysm", category: "Control Center", desc: "Completely redesigns Control Center with a floating panel, custom modules, and gesture controls.", repo: "havoc.app", stars: "3.9k" },
                { name: "TrollStore", category: "Sideloading", desc: "Permanent IPA installer for supported iOS versions. No re-signing, no expiry. The gold standard.", repo: "github.com/opa334", stars: "15.2k" },
              ].map((tweak) => (
                <div key={tweak.name} style={{ background: "#000", padding: "32px 28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.025em", color: "#f5f5f7", margin: 0 }}>{tweak.name}</h3>
                    <span style={{ fontSize: "11px", color: "#0071e3", padding: "3px 8px", border: "1px solid rgba(0,113,227,0.3)", borderRadius: "980px", whiteSpace: "nowrap", marginLeft: "8px" }}>{tweak.category}</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.5, letterSpacing: "-0.01em", marginBottom: "16px" }}>{tweak.desc}</p>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", letterSpacing: "-0.01em" }}>{tweak.repo} &bull; {tweak.stars} stars</div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── TrollStore Support Table ── */}
      <section style={{ background: "#1d1d1f", padding: "100px 0" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px", textAlign: "center" }}>TrollStore</div>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "16px" }}>Permanent sideloading without jailbreak.</h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", textAlign: "center", maxWidth: "600px", margin: "0 auto 40px", letterSpacing: "-0.022em", lineHeight: 1.5 }}>TrollStore installs IPAs permanently using a CoreTrust bug. Apps never expire. Check if your device is supported below.</p>
            <div style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "18px", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: "16px", padding: "12px 24px", background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>iOS Version</span>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Devices</span>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Status</span>
              </div>
              {[
                { version: "iOS 14.0 – 16.6.1", devices: "All devices", status: "Supported", color: "#30d158" },
                { version: "iOS 16.7 – 17.0", devices: "A12+ (iPhone XS+)", status: "Supported", color: "#30d158" },
                { version: "iOS 17.0.1 – 17.4", devices: "A12+ (iPhone XS+)", status: "Partial", color: "#ff9f0a" },
                { version: "iOS 17.4.1+", devices: "All devices", status: "Not Supported", color: "rgba(255,255,255,0.3)" },
                { version: "iOS 18.x", devices: "All devices", status: "Not Supported", color: "rgba(255,255,255,0.3)" },
              ].map((row, i, arr) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: "16px", padding: "20px 24px", borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", alignItems: "center" }}>
                  <div style={{ fontSize: "15px", fontWeight: 500, color: "#f5f5f7", letterSpacing: "-0.022em" }}>{row.version}</div>
                  <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", letterSpacing: "-0.01em" }}>{row.devices}</div>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: row.color, whiteSpace: "nowrap" }}>{row.status}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "24px", textAlign: "center" }}>
              <a href="https://github.com/opa334/TrollStore" target="_blank" rel="noopener noreferrer" style={{ fontSize: "15px", color: "#0071e3", textDecoration: "none", fontWeight: 400, letterSpacing: "-0.022em" }}>TrollStore on GitHub &rsaquo;</a>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Reddit Community ── */}
      <section style={{ background: "#1d1d1f", padding: "100px 0" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px", marginBottom: "40px" }}>
              <div>
                <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px" }}>Community</div>
                <h2 className="apple-headline-section" style={{ color: "#f5f5f7" }}>From r/jailbreak.</h2>
              </div>
              <a href="https://www.reddit.com/r/jailbreak/" target="_blank" rel="noopener noreferrer" style={{ color: "#0071e3", fontSize: "15px", fontWeight: 500, textDecoration: "none", letterSpacing: "-0.022em" }}>Visit r/jailbreak</a>
            </div>
            <div style={{ display: "grid", gap: "1px", background: "rgba(255,255,255,0.08)", borderRadius: "18px", overflow: "hidden" }}>
              {[
                { sub: "r/jailbreak", title: "iOS 18.4.1 jailbreak status — Dopamine working on A15 and below", url: "https://www.reddit.com/r/jailbreak/", upvotes: "2.4k", comments: "312", time: "6 hours ago" },
                { sub: "r/jailbreak", title: "Weekly thread: What are you using? Share your setup", url: "https://www.reddit.com/r/jailbreak/", upvotes: "1.8k", comments: "847", time: "2 days ago" },
                { sub: "r/jailbreak", title: "palera1n 2.0 released — major update for A9–A11 devices", url: "https://www.reddit.com/r/jailbreak/", upvotes: "5.1k", comments: "623", time: "1 week ago" },
                { sub: "r/jailbreak", title: "TrollStore 2 — everything you need to know", url: "https://www.reddit.com/r/jailbreak/", upvotes: "9.2k", comments: "1.1k", time: "2 weeks ago" },
                { sub: "r/sideloaded", title: "AltStore PAL now available in the EU — no 7-day limit", url: "https://www.reddit.com/r/sideloaded/", upvotes: "3.7k", comments: "289", time: "1 month ago" },
                { sub: "r/sideloaded", title: "Best apps to sideload in 2026 — the definitive list", url: "https://www.reddit.com/r/sideloaded/", upvotes: "6.3k", comments: "742", time: "3 weeks ago" },
                { sub: "r/jailbreak", title: "iOS 27 jailbreak — what we know so far", url: "https://www.reddit.com/r/jailbreak/", upvotes: "4.5k", comments: "531", time: "1 day ago" },
                { sub: "r/jailbreak", title: "Beginner guide: How to jailbreak your iPhone in 2026", url: "https://www.reddit.com/r/jailbreak/", upvotes: "12.4k", comments: "2.1k", time: "1 month ago" },
              ].map((thread, i) => (
                <a key={i} href={thread.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: "block", background: "#1d1d1f", padding: "24px 28px", textDecoration: "none", transition: "background 0.15s ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#2c2c2e"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#1d1d1f"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "12px", fontWeight: 600, color: "#0071e3", letterSpacing: "0.04em", marginBottom: "6px" }}>{thread.sub}</div>
                      <div style={{ fontSize: "16px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.022em", lineHeight: 1.4, marginBottom: "8px" }}>{thread.title}</div>
                      <div style={{ display: "flex", gap: "16px", fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                        <span>{thread.upvotes} upvotes</span>
                        <span>{thread.comments} comments</span>
                        <span>{thread.time}</span>
                      </div>
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "18px", flexShrink: 0 }}>&#8250;</div>
                  </div>
                </a>
              ))}
            </div>
            <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {["r/jailbreak", "r/sideloaded", "r/TrollStore", "r/iPhone", "r/apple"].map(sub => (
                <a key={sub} href={`https://www.reddit.com/${sub}/`} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-block", background: "#2c2c2e", color: "rgba(255,255,255,0.7)", padding: "10px 18px", borderRadius: "980px", fontSize: "13px", fontWeight: 500, textDecoration: "none", letterSpacing: "-0.01em", border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.2s ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#0071e3"; (e.currentTarget as HTMLElement).style.color = "#0071e3"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
                >{sub}</a>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>


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
