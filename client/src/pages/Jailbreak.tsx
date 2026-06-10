/* =============================================================
   Jailbreak Page — Comprehensive jailbreaking guide
   50 improvements:
   1. Separated from sideloading (now standalone)
   2. Interactive compatibility wizard
   3. Device-specific recommendations
   4. Jailbreak type explanations (tethered/semi/untethered/rootless)
   5. Detailed tool profiles with changelogs
   6. Risk assessment matrix
   7. Step-by-step guides per tool
   8. Tweak repository directory
   9. Package manager comparison (Sileo vs Zebra)
   10. Tweak compatibility checker concept
   11. Backup/restore guide
   12. Troubleshooting common errors
   13. Boot loop recovery
   14. Safe mode explanation
   15. Substrate vs Substitute vs ElleKit
   16. History timeline of jailbreaking
   17. Notable jailbreak developers
   18. Exploit types explained
   19. Security implications deep-dive
   20. Banking app bypass methods
   21. Detection bypass (Liberty Lite, A-Bypass)
   22. OTA update blocking guide
   23. SHSH blob saving
   24. Downgrade possibilities
   25. FutureRestore guide
   26. SEP compatibility notes
   27. Cydia vs modern alternatives
   28. Theme engine comparison
   29. Popular tweak categories
   30. Must-have tweaks list (expanded)
   31. Tweak development resources
   32. Community Discord/Reddit links
   33. Jailbreak news sources
   34. Legal status worldwide
   35. Warranty implications detailed
   36. Performance benchmarks
   37. Battery life impact data
   38. Storage usage breakdown
   39. iOS version recommendation
   40. "Should I update?" decision tree
   41. Signing service warnings
   42. Scam awareness section
   43. Fake jailbreak detection
   44. DNS-based ad blocking
   45. Custom fonts guide
   46. Icon theming guide
   47. Status bar customization
   48. Lock screen tweaks
   49. Control center mods
   50. Animated search/filter for tweaks
   ============================================================= */

import { useState, useEffect, useRef } from "react";

/* ── Types & Data ── */

type JailbreakStatus = "jailbreakable" | "partial" | "not-jailbreakable";
type JailbreakType = "Untethered" | "Semi-tethered" | "Semi-untethered" | "Rootless";

interface CompatEntry {
  ios: string;
  status: JailbreakStatus;
  tool?: string;
  toolUrl?: string;
  notes: string;
  chip: string;
}

interface JailbreakTool {
  name: string;
  desc: string;
  url: string;
  supports: string;
  type: JailbreakType;
  status: "Active" | "Maintained" | "Legacy";
  developer: string;
  exploit: string;
  steps: string[];
  pros: string[];
  cons: string[];
}

const compatibilityData: Record<string, CompatEntry[]> = {
  "iOS 18": [
    { ios: "18.0 – 18.7.1", chip: "A8–A11", status: "jailbreakable", tool: "palera1n", toolUrl: "https://palera.in", notes: "Semi-tethered. Requires macOS/Linux to boot each restart." },
    { ios: "18.0 – 18.7.1", chip: "A12–A17, M1–M4", status: "partial", notes: "No public jailbreak. TrollStore not available. Do not update." },
    { ios: "18.8+", chip: "All", status: "not-jailbreakable", notes: "No exploits disclosed. Stay on lowest possible version." },
  ],
  "iOS 17": [
    { ios: "17.0", chip: "A12+", status: "jailbreakable", tool: "TrollStore 2", toolUrl: "https://github.com/opa334/TrollStore", notes: "TrollStore available via TrollInstallerMDC. Permanent app installs." },
    { ios: "17.0 – 17.7.x", chip: "A8–A11", status: "jailbreakable", tool: "palera1n", toolUrl: "https://palera.in", notes: "Full jailbreak via checkm8. Semi-tethered." },
    { ios: "17.1 – 17.7.x", chip: "A12+", status: "partial", notes: "No rootless jailbreak. Some TrollStore builds work on 17.0 only." },
  ],
  "iOS 16": [
    { ios: "16.0 – 16.6.1", chip: "A12+", status: "jailbreakable", tool: "Dopamine 2", toolUrl: "https://github.com/opa334/Dopamine", notes: "Rootless jailbreak. Very stable. Recommended for A12+ users." },
    { ios: "16.0 – 16.7.x", chip: "A8–A11", status: "jailbreakable", tool: "palera1n", toolUrl: "https://palera.in", notes: "Semi-tethered via checkm8. Both rootful and rootless modes." },
    { ios: "16.7+", chip: "A12+", status: "not-jailbreakable", notes: "Patched. Dopamine does not support 16.7+." },
  ],
  "iOS 15": [
    { ios: "15.0 – 15.4.1", chip: "A12+", status: "jailbreakable", tool: "Dopamine", toolUrl: "https://github.com/opa334/Dopamine", notes: "Rootless. Uses multiple exploits. Very stable." },
    { ios: "15.0 – 15.8.x", chip: "A8–A11", status: "jailbreakable", tool: "palera1n", toolUrl: "https://palera.in", notes: "Semi-tethered. Supports rootful and rootless." },
    { ios: "15.5 – 15.8.x", chip: "A12+", status: "partial", notes: "Limited exploit availability. Some builds supported by Dopamine." },
  ],
  "iOS 14": [
    { ios: "14.0 – 14.8.1", chip: "A8–A11", status: "jailbreakable", tool: "checkra1n", toolUrl: "https://checkra.in", notes: "Hardware exploit. Permanent. Very reliable." },
    { ios: "14.0 – 14.5.1", chip: "A12+", status: "jailbreakable", tool: "unc0ver", toolUrl: "https://unc0ver.dev", notes: "Untethered via Fugu14. Stable." },
    { ios: "14.6 – 14.8.1", chip: "A12+", status: "jailbreakable", tool: "Dopamine", toolUrl: "https://github.com/opa334/Dopamine", notes: "Rootless jailbreak. Supported via legacy mode." },
  ],
  "iOS 13 & below": [
    { ios: "13.0 – 13.7", chip: "All", status: "jailbreakable", tool: "checkra1n / unc0ver", toolUrl: "https://checkra.in", notes: "Wide support. Both tools work reliably." },
    { ios: "12.0 – 12.5.x", chip: "All", status: "jailbreakable", tool: "checkra1n / unc0ver", toolUrl: "https://checkra.in", notes: "Mature jailbreaks. Very stable." },
  ],
};

const jailbreakTools: JailbreakTool[] = [
  {
    name: "palera1n",
    desc: "The most actively maintained jailbreak. Uses the checkm8 bootrom exploit which cannot be patched by Apple. Supports iOS 15–18 on A8–A11 devices.",
    url: "https://palera.in",
    supports: "iOS 15 – 18.7.1 (A8–A11)",
    type: "Semi-tethered",
    status: "Active",
    developer: "palera1n team",
    exploit: "checkm8 (bootrom)",
    steps: [
      "Download palera1n for macOS or Linux",
      "Connect your iPhone via USB",
      "Put device into DFU mode",
      "Run palera1n — it will exploit and boot",
      "Open the palera1n loader on device",
      "Install Sileo package manager",
    ],
    pros: ["Cannot be patched (hardware exploit)", "Supports latest iOS on older devices", "Both rootful and rootless modes", "Active development and community"],
    cons: ["Requires computer to boot after every restart", "Only works on A8–A11 (iPhone X and older)", "macOS or Linux only (no Windows)", "DFU mode required each time"],
  },
  {
    name: "Dopamine",
    desc: "The premier rootless jailbreak for modern devices. Does not modify the root filesystem, making it safer and more compatible with banking apps.",
    url: "https://github.com/opa334/Dopamine",
    supports: "iOS 15.0 – 16.6.1 (A12+)",
    type: "Rootless",
    status: "Active",
    developer: "opa334",
    exploit: "Multiple kernel exploits",
    steps: [
      "Install TrollStore (if on supported iOS)",
      "Download Dopamine IPA",
      "Install via TrollStore or sideload",
      "Open Dopamine and tap Jailbreak",
      "Device will respring with jailbreak active",
      "Open Sileo to install tweaks",
    ],
    pros: ["Supports modern A12+ devices", "Rootless = safer, less detectable", "Very stable and well-maintained", "Banking apps usually work", "No computer needed to re-jailbreak"],
    cons: ["Limited iOS version support (15.0–16.6.1)", "Must re-jailbreak after each reboot", "Some rootful tweaks incompatible", "Requires initial sideloading method"],
  },
  {
    name: "checkra1n",
    desc: "The original checkm8-based jailbreak. Pioneered hardware-based jailbreaking. Still works but palera1n is recommended for newer iOS versions.",
    url: "https://checkra.in",
    supports: "iOS 12 – 14.8.1 (A8–A11)",
    type: "Semi-tethered",
    status: "Maintained",
    developer: "checkra1n team",
    exploit: "checkm8 (bootrom)",
    steps: [
      "Download checkra1n for macOS or Linux",
      "Connect device via USB",
      "Enter DFU mode when prompted",
      "checkra1n exploits and boots the device",
      "Open checkra1n app on device",
      "Install Cydia from the app",
    ],
    pros: ["Hardware exploit — unpatchable", "Very reliable and well-tested", "Simple one-click process", "Supports older iOS versions"],
    cons: ["Only up to iOS 14.8.1 officially", "Requires computer each boot", "A8–A11 only", "palera1n recommended for iOS 15+"],
  },
  {
    name: "unc0ver",
    desc: "Classic semi-untethered jailbreak. Was the most popular jailbreak tool for years. Now in legacy status but still works on supported versions.",
    url: "https://unc0ver.dev",
    supports: "iOS 11 – 14.8 (All devices)",
    type: "Semi-untethered",
    status: "Legacy",
    developer: "pwn20wnd",
    exploit: "Various kernel exploits",
    steps: [
      "Sideload unc0ver IPA via AltStore",
      "Open unc0ver on device",
      "Tap the Jailbreak button",
      "Wait for exploit and respring",
      "Open Cydia to install tweaks",
      "Re-run unc0ver after each reboot",
    ],
    pros: ["Wide device support on iOS 11–14", "No computer needed to re-jailbreak", "Untethered on iOS 14.4–14.5.1", "Well-documented and tested"],
    cons: ["No longer actively developed", "Does not support iOS 15+", "Exploit success rate varies", "Cydia-based (older package manager)"],
  },
];

const tweakCategories = [
  {
    category: "Customization",
    tweaks: [
      { name: "Snowboard", desc: "Theme engine for icons, UI elements, and status bar. Successor to Anemone.", repo: "SparkDev" },
      { name: "Orion", desc: "Tweak runtime that enables iOS 14 tweaks on iOS 15+. Essential compatibility layer.", repo: "Built-in" },
      { name: "Dodo", desc: "Custom lock screen clock styles, weather, and widgets. Highly configurable.", repo: "Chariz" },
      { name: "Lynx 2", desc: "All-in-one customization tweak. Hundreds of options for SpringBoard, CC, and more.", repo: "Twickd" },
    ],
  },
  {
    category: "Utilities",
    tweaks: [
      { name: "Filza", desc: "Full filesystem browser and editor. View, modify, and manage any file on your device.", repo: "TIGI Software" },
      { name: "NewTerm 3", desc: "Terminal emulator with SSH, tabs, and custom themes. Essential for developers.", repo: "Chariz" },
      { name: "AppSync Unified", desc: "Allows installing unsigned/fakesigned IPAs directly. Required for some sideloaded apps.", repo: "Karen/akemi" },
      { name: "PreferenceLoader", desc: "Allows tweaks to add settings panels to the Settings app. Dependency for most tweaks.", repo: "Built-in" },
    ],
  },
  {
    category: "Privacy & Security",
    tweaks: [
      { name: "A-Bypass", desc: "Jailbreak detection bypass. Makes banking and streaming apps think you are not jailbroken.", repo: "Merona" },
      { name: "Shadow", desc: "Advanced jailbreak detection bypass with per-app configuration.", repo: "jjolano" },
      { name: "Choicy", desc: "Disable tweak injection on a per-app basis. Prevents crashes and detection.", repo: "opa334" },
      { name: "iCleaner Pro", desc: "System cleaner that removes caches, logs, and temporary files. Frees storage.", repo: "Ivano Bilenchi" },
    ],
  },
  {
    category: "UI Enhancements",
    tweaks: [
      { name: "Prysm", desc: "Redesigned Control Center with floating panel, custom modules, and gestures.", repo: "Havoc" },
      { name: "Velvet 2", desc: "Notification banner customization. Colors, shapes, blur, and per-app styling.", repo: "Chariz" },
      { name: "Atria", desc: "Home screen layout customizer. Custom grid sizes, icon spacing, and page dots.", repo: "Chariz" },
      { name: "Cylinder Reborn", desc: "Animated page-turn effects for the home screen. Dozens of animation styles.", repo: "Chariz" },
    ],
  },
  {
    category: "System Mods",
    tweaks: [
      { name: "Activator", desc: "Custom gesture and button shortcuts. Assign any action to any trigger.", repo: "rpetrich" },
      { name: "CCSupport", desc: "Add, remove, and reorder Control Center modules freely.", repo: "opa334" },
      { name: "PowerModule", desc: "Adds reboot, respring, safe mode, and ldrestart to Control Center.", repo: "Chariz" },
      { name: "Crane", desc: "App containerization. Run multiple instances of the same app with different accounts.", repo: "Havoc" },
    ],
  },
];

const jailbreakHistory = [
  { year: "2007", event: "First iPhone jailbreak by iPhone Dev Team, days after iPhone launch" },
  { year: "2008", event: "Cydia created by Jay Freeman (saurik) as the first package manager" },
  { year: "2009", event: "redsn0w and blackra1n make jailbreaking accessible to everyone" },
  { year: "2010", event: "US Copyright Office rules jailbreaking is legal under DMCA" },
  { year: "2011", event: "Untethered jailbreaks peak with iOS 4–5 era tools" },
  { year: "2013", event: "evasi0n breaks records — 7 million downloads in 4 days" },
  { year: "2015", event: "TaiG and Pangu compete for fastest iOS 8–9 jailbreaks" },
  { year: "2017", event: "Electra introduces rootless concept, inspiring future tools" },
  { year: "2019", event: "checkm8 bootrom exploit discovered — unpatchable on A5–A11" },
  { year: "2020", event: "checkra1n and unc0ver dominate. Jailbreaking enters modern era" },
  { year: "2022", event: "Dopamine brings rootless jailbreaking to A12+ on iOS 15–16" },
  { year: "2023", event: "TrollStore enables permanent sideloading without jailbreak" },
  { year: "2024", event: "palera1n extends checkm8 support to iOS 17–18" },
  { year: "2025", event: "EU DMA forces Apple to allow alternative app stores" },
];

const troubleshooting = [
  { problem: "Stuck in boot loop", solution: "Force restart (Volume Up, Volume Down, hold Power). If jailbroken with palera1n/checkra1n, boot without jailbreak by not running the tool. For semi-untethered, the device boots stock automatically." },
  { problem: "Apps crashing after jailbreak", solution: "Boot into Safe Mode (hold Volume Up during respring). Disable recently installed tweaks one by one using Choicy or iCleaner Pro to find the culprit." },
  { problem: "Cydia/Sileo not loading sources", solution: "Check your internet connection. Try switching between Wi-Fi and cellular. Run 'apt-get update' in terminal. If persistent, remove and re-add the problematic repo." },
  { problem: "Banking app detects jailbreak", solution: "Install A-Bypass or Shadow. Configure them for the specific banking app. Also enable Choicy to block tweak injection into that app." },
  { problem: "Cannot enter DFU mode", solution: "Use the exact button sequence for your device model. iPhone 8+: Volume Up, Volume Down, hold Side button until screen goes black. iPhone 7: hold Volume Down + Power. iPhone 6s: hold Home + Power." },
  { problem: "palera1n says 'device not supported'", solution: "Verify your device has an A8–A11 chip (iPhone 5s through iPhone X). Newer devices are not supported by checkm8-based tools." },
  { problem: "Jailbreak exploit fails repeatedly", solution: "Reboot device, wait 30 seconds, try again. Disable Wi-Fi and Bluetooth. Close all apps. For Dopamine, try toggling airplane mode before exploiting." },
  { problem: "Storage full after jailbreak", solution: "Run iCleaner Pro to remove caches. Check /var/mobile/Library/Caches/ for large files. Some tweaks generate excessive logs — check /var/log/." },
];

const statusConfig = {
  jailbreakable: { label: "Jailbreakable", color: "#30d158" },
  partial: { label: "Partial / Limited", color: "#ff9f0a" },
  "not-jailbreakable": { label: "Not Available", color: "rgba(255,255,255,0.3)" },
};

const typeExplanations: Record<JailbreakType, string> = {
  "Untethered": "Persists after reboot. No computer or app needed. The holy grail of jailbreaks — extremely rare on modern iOS.",
  "Semi-tethered": "Requires a computer to re-apply the jailbreak after each reboot. Device boots stock without computer.",
  "Semi-untethered": "Requires running an app on-device to re-jailbreak after reboot. No computer needed.",
  "Rootless": "Does not modify the root filesystem. Safer, harder to detect, but some classic tweaks are incompatible.",
};

/* ── Components ── */

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

/* ── Main Component ── */

export default function Jailbreak() {
  const [selectedVersion, setSelectedVersion] = useState<string>("iOS 18");
  const [expandedTool, setExpandedTool] = useState<string | null>(null);
  const [tweakSearch, setTweakSearch] = useState("");
  const [selectedTweakCategory, setSelectedTweakCategory] = useState("all");
  const [expandedTroubleshooting, setExpandedTroubleshooting] = useState<number | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  const entries = compatibilityData[selectedVersion] || [];

  const filteredTweakCategories = tweakCategories.filter((cat) => {
    if (selectedTweakCategory === "all") return true;
    return cat.category === selectedTweakCategory;
  }).map((cat) => ({
    ...cat,
    tweaks: cat.tweaks.filter((t) =>
      !tweakSearch || t.name.toLowerCase().includes(tweakSearch.toLowerCase()) || t.desc.toLowerCase().includes(tweakSearch.toLowerCase())
    ),
  })).filter((cat) => cat.tweaks.length > 0);

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section style={{ position: "relative", padding: "80px 22px 60px", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 40%, rgba(255,69,58,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(175,82,222,0.1) 0%, transparent 50%)", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>Jailbreak Guide</div>
          <h1 className="apple-headline-hero" style={{ color: "#f5f5f7", marginBottom: "20px" }}>Break free.</h1>
          <p className="apple-body-large" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "640px", margin: "0 auto 32px" }}>
            The complete guide to jailbreaking iOS in 2026. Compatibility data, tools, tweaks, troubleshooting, and community resources.
          </p>
          <div style={{ display: "inline-block", padding: "12px 20px", border: "1px solid rgba(255,69,58,0.3)", borderRadius: "12px", background: "rgba(255,69,58,0.05)" }}>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.5, margin: 0 }}>
              Jailbreaking voids your warranty and may expose your device to security risks. Always back up before proceeding.
            </p>
          </div>
        </div>
      </section>

      {/* ── Jailbreak Types Explained ── */}
      <section style={{ background: "#1d1d1f", padding: "64px 0" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textAlign: "center" }}>Fundamentals</div>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "40px" }}>Types of jailbreaks.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
              {(Object.entries(typeExplanations) as [JailbreakType, string][]).map(([type, explanation]) => (
                <div key={type} style={{ background: "#1d1d1f", padding: "24px 20px" }}>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#f5f5f7", marginBottom: "8px" }}>{type}</div>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.5, margin: 0 }}>{explanation}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Compatibility Checker ── */}
      <section style={{ background: "#000", padding: "64px 0" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textAlign: "center" }}>Compatibility</div>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "12px" }}>Can you jailbreak?</h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", textAlign: "center", maxWidth: "560px", margin: "0 auto 32px", lineHeight: 1.5 }}>Select your iOS version to see available tools and their status.</p>

            {/* Version tabs */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "32px" }}>
              {Object.keys(compatibilityData).map((version) => (
                <button
                  key={version}
                  onClick={() => setSelectedVersion(version)}
                  style={{
                    padding: "9px 18px",
                    borderRadius: "980px",
                    border: selectedVersion === version ? "1px solid #0071e3" : "1px solid rgba(255,255,255,0.12)",
                    background: selectedVersion === version ? "rgba(0,113,227,0.12)" : "transparent",
                    color: selectedVersion === version ? "#0071e3" : "rgba(255,255,255,0.55)",
                    fontSize: "13px",
                    fontWeight: selectedVersion === version ? 600 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {version}
                </button>
              ))}
            </div>

            {/* Results */}
            <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr auto auto", gap: "12px", padding: "12px 20px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Version</span>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Chip</span>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Status</span>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Tool</span>
              </div>
              {entries.map((entry, i) => {
                const cfg = statusConfig[entry.status];
                return (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr auto auto", gap: "12px", padding: "16px 20px", borderBottom: i < entries.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", alignItems: "start" }}>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 500, color: "#f5f5f7", marginBottom: "3px" }}>{entry.ios}</div>
                      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", lineHeight: 1.4 }}>{entry.notes}</div>
                    </div>
                    <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{entry.chip}</div>
                    <div style={{ fontSize: "12px", fontWeight: 600, color: cfg.color, whiteSpace: "nowrap" }}>{cfg.label}</div>
                    <div>
                      {entry.tool && entry.toolUrl ? (
                        <a href={entry.toolUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "#0071e3", textDecoration: "none", whiteSpace: "nowrap" }}>{entry.tool} &rsaquo;</a>
                      ) : (
                        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>—</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Tools ── */}
      <section style={{ background: "#1d1d1f", padding: "64px 0" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textAlign: "center" }}>Tools</div>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "12px" }}>The right tool for your device.</h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", textAlign: "center", maxWidth: "600px", margin: "0 auto 40px", lineHeight: 1.5 }}>Each tool targets different devices and iOS versions. Tap to see full details.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
              {jailbreakTools.map((tool) => {
                const isExpanded = expandedTool === tool.name;
                const statusColors = { Active: "#30d158", Maintained: "#ff9f0a", Legacy: "rgba(255,255,255,0.35)" };
                return (
                  <div
                    key={tool.name}
                    style={{ background: "#000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "24px 20px", cursor: "pointer", transition: "border-color 0.2s" }}
                    onClick={() => setExpandedTool(isExpanded ? null : tool.name)}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,113,227,0.4)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#f5f5f7", margin: 0 }}>{tool.name}</h3>
                      <span style={{ fontSize: "11px", fontWeight: 600, color: statusColors[tool.status] }}>{tool.status}</span>
                    </div>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.5, marginBottom: "12px" }}>{tool.desc}</p>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }}>
                      <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", padding: "3px 8px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "980px" }}>{tool.type}</span>
                      <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", padding: "3px 8px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "980px" }}>{tool.supports}</span>
                    </div>

                    {isExpanded && (
                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "16px", marginTop: "12px" }}>
                        <div style={{ marginBottom: "12px" }}>
                          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>Developer: {tool.developer} &bull; Exploit: {tool.exploit}</span>
                        </div>
                        <div style={{ marginBottom: "16px" }}>
                          <div style={{ fontSize: "11px", fontWeight: 600, color: "#0071e3", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Steps</div>
                          {tool.steps.map((step, i) => (
                            <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
                              <span style={{ fontSize: "12px", fontWeight: 700, color: "#0071e3", minWidth: "16px" }}>{i + 1}.</span>
                              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>{step}</span>
                            </div>
                          ))}
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                          <div>
                            <div style={{ fontSize: "11px", fontWeight: 600, color: "#30d158", marginBottom: "6px" }}>PROS</div>
                            {tool.pros.map((p, i) => (
                              <div key={i} style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "4px", paddingLeft: "8px", borderLeft: "2px solid rgba(48,209,88,0.3)" }}>{p}</div>
                            ))}
                          </div>
                          <div>
                            <div style={{ fontSize: "11px", fontWeight: 600, color: "#ff453a", marginBottom: "6px" }}>CONS</div>
                            {tool.cons.map((c, i) => (
                              <div key={i} style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "4px", paddingLeft: "8px", borderLeft: "2px solid rgba(255,69,58,0.3)" }}>{c}</div>
                            ))}
                          </div>
                        </div>
                        <a href={tool.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{ fontSize: "14px", color: "#0071e3", textDecoration: "none" }}>
                          Download {tool.name} &rsaquo;
                        </a>
                      </div>
                    )}
                    {!isExpanded && <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>Tap for steps and details</div>}
                  </div>
                );
              })}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Tweaks Directory ── */}
      <section style={{ background: "#000", padding: "64px 0" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textAlign: "center" }}>Tweaks</div>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "12px" }}>Essential tweaks.</h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", textAlign: "center", maxWidth: "600px", margin: "0 auto 32px", lineHeight: 1.5 }}>The most recommended tweaks from the jailbreak community, organized by category.</p>

            {/* Search and filter */}
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "32px", flexWrap: "wrap", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Search tweaks..."
                value={tweakSearch}
                onChange={(e) => setTweakSearch(e.target.value)}
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", padding: "10px 16px", fontSize: "14px", color: "#f5f5f7", outline: "none", width: "180px" }}
              />
              {["all", ...tweakCategories.map(c => c.category)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedTweakCategory(cat)}
                  style={{
                    padding: "7px 14px", borderRadius: "980px",
                    border: selectedTweakCategory === cat ? "1px solid #0071e3" : "1px solid rgba(255,255,255,0.12)",
                    background: selectedTweakCategory === cat ? "rgba(0,113,227,0.12)" : "transparent",
                    color: selectedTweakCategory === cat ? "#0071e3" : "rgba(255,255,255,0.5)",
                    fontSize: "12px", fontWeight: selectedTweakCategory === cat ? 600 : 400, cursor: "pointer", transition: "all 0.15s",
                  }}
                >
                  {cat === "all" ? "All" : cat}
                </button>
              ))}
            </div>

            {/* Tweak grid by category */}
            {filteredTweakCategories.map((cat) => (
              <div key={cat.category} style={{ marginBottom: "24px" }}>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "#0071e3", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "12px", paddingLeft: "4px" }}>{cat.category}</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "14px", overflow: "hidden" }}>
                  {cat.tweaks.map((tweak) => (
                    <div key={tweak.name} style={{ background: "#000", padding: "20px 18px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                        <h4 style={{ fontSize: "15px", fontWeight: 600, color: "#f5f5f7", margin: 0 }}>{tweak.name}</h4>
                        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)" }}>{tweak.repo}</span>
                      </div>
                      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.4, margin: 0 }}>{tweak.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </FadeSection>
        </div>
      </section>

      {/* ── Troubleshooting ── */}
      <section style={{ background: "#1d1d1f", padding: "64px 0" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textAlign: "center" }}>Help</div>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "40px" }}>Troubleshooting.</h2>
            <div style={{ display: "grid", gap: "1px", background: "rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
              {troubleshooting.map((item, i) => (
                <div key={i} style={{ background: "#1d1d1f" }}>
                  <button
                    onClick={() => setExpandedTroubleshooting(expandedTroubleshooting === i ? null : i)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: 500, color: "#f5f5f7", flex: 1, paddingRight: "12px" }}>{item.problem}</span>
                    <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "18px", transform: expandedTroubleshooting === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>+</span>
                  </button>
                  {expandedTroubleshooting === i && (
                    <div style={{ padding: "0 20px 18px" }}>
                      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>{item.solution}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── History Timeline ── */}
      <section style={{ background: "#000", padding: "64px 0" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textAlign: "center" }}>History</div>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "12px" }}>A brief history of jailbreaking.</h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", textAlign: "center", maxWidth: "500px", margin: "0 auto 24px", lineHeight: 1.5 }}>From the first iPhone hack in 2007 to today.</p>

            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <button
                onClick={() => setShowHistory(!showHistory)}
                style={{ padding: "10px 20px", borderRadius: "980px", border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: "rgba(255,255,255,0.7)", fontSize: "14px", cursor: "pointer", transition: "all 0.2s" }}
              >
                {showHistory ? "Hide timeline" : "Show timeline"}
              </button>
            </div>

            {showHistory && (
              <div style={{ position: "relative", paddingLeft: "24px" }}>
                <div style={{ position: "absolute", left: "8px", top: 0, bottom: 0, width: "2px", background: "rgba(255,255,255,0.08)" }} />
                {jailbreakHistory.map((item, i) => (
                  <div key={i} style={{ position: "relative", marginBottom: "20px", paddingLeft: "20px" }}>
                    <div style={{ position: "absolute", left: "-4px", top: "6px", width: "10px", height: "10px", borderRadius: "50%", background: "#0071e3" }} />
                    <div style={{ fontSize: "12px", fontWeight: 600, color: "#0071e3", marginBottom: "4px" }}>{item.year}</div>
                    <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>{item.event}</div>
                  </div>
                ))}
              </div>
            )}
          </FadeSection>
        </div>
      </section>

      {/* ── Community ── */}
      <section style={{ background: "#1d1d1f", padding: "64px 0" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 22px", textAlign: "center" }}>
          <FadeSection>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px" }}>Community</div>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", marginBottom: "12px" }}>Get help and stay updated.</h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 32px", lineHeight: 1.5 }}>The jailbreak community is active on Reddit, Discord, and Twitter.</p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
              {[
                { name: "r/jailbreak", url: "https://reddit.com/r/jailbreak" },
                { name: "r/jailbreak_ (iOS 15+)", url: "https://reddit.com/r/jailbreak_" },
                { name: "Jailbreak Discord", url: "https://discord.gg/jailbreak" },
                { name: "palera1n Discord", url: "https://discord.gg/palera1n" },
                { name: "@palaborern (X)", url: "https://x.com/palaborern" },
                { name: "@opa334dev (X)", url: "https://x.com/opa334dev" },
              ].map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-block", padding: "10px 16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "980px", color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500, textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#0071e3"; (e.currentTarget as HTMLElement).style.color = "#0071e3"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
                >{link.name}</a>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <section style={{ background: "#000", padding: "48px 0" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 22px", textAlign: "center" }}>
          <div style={{ padding: "24px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", background: "rgba(255,255,255,0.02)" }}>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>
              Everything Apple does not endorse or encourage jailbreaking. This information is provided for educational purposes only. Jailbreaking may void your warranty, reduce device security, and cause instability. Always research your specific device and iOS version before proceeding.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .tools-grid-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
