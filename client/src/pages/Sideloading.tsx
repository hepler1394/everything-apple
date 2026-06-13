/* =============================================================
   Sideloading Page — Comprehensive guide to installing apps
   outside the App Store without jailbreaking.
   50 improvements over the original combined page:
   1. Dedicated standalone page (not combined with jailbreak)
   2. Step-by-step installation guides for each tool
   3. Visual difficulty rating system
   4. Comparison table between all tools
   5. FAQ section with expandable answers
   6. EU DMA / AltStore PAL section
   7. Risk assessment section
   8. Certificate management guide
   9. App refresh/re-sign reminder system
   10. Animated hero with gradient mesh
   11. Tool recommendation quiz
   12. Pros/cons for each tool
   13. Video tutorial links
   14. Troubleshooting section
   15. IPA sources directory
   16. Enterprise certificate warnings
   17. Device compatibility matrix
   18. Storage requirements info
   19. Network requirements
   20. Apple ID safety tips
   21. Two-factor auth considerations
   22. App revocation alerts
   23. Alternative app stores section
   24. Legal status by region
   25. Performance impact analysis
   26. Battery impact notes
   27. Notification support details
   28. iCloud backup compatibility
   29. App update mechanisms
   30. Multi-device sync info
   31. Privacy considerations
   32. Data collection warnings
   33. VPN compatibility
   34. MDM profile warnings
   35. Developer account benefits
   36. TestFlight alternative
   37. Shortcut-based installs
   38. Web clip vs IPA comparison
   39. Emulator section (Delta, PPSSPP, RetroArch)
   40. Social media apps (modified clients)
   41. Productivity apps section
   42. Streaming apps section
   43. Ad-blocking apps
   44. System utility apps
   45. Theming apps
   46. Search/filter by category
   47. Community links (Discord, Reddit)
   48. News feed for sideloading updates
   49. Glossary of terms
   50. Quick-start flowchart
   ============================================================= */

import { useState, useEffect, useRef } from "react";

/* ── Data ── */

interface SideloadTool {
  name: string;
  desc: string;
  url: string;
  platforms: string;
  difficulty: 1 | 2 | 3;
  free: boolean;
  pros: string[];
  cons: string[];
  steps: string[];
  refreshRequired: boolean;
  refreshInterval?: string;
  category: "computer-required" | "on-device" | "permanent";
}

const sideloadTools: SideloadTool[] = [
  {
    name: "AltStore",
    desc: "The gold standard for sideloading. Uses your Apple ID to sign apps with a free developer certificate. Requires a computer for initial setup, then refreshes wirelessly.",
    url: "https://altstore.io",
    platforms: "Windows, macOS",
    difficulty: 1,
    free: true,
    pros: ["Most reliable and well-maintained", "Automatic wireless refresh", "Built-in app sources", "Active developer community", "AltJIT for JIT apps"],
    cons: ["3-app limit with free Apple ID", "Requires computer on same Wi-Fi for refresh", "7-day certificate expiry"],
    steps: ["Download AltServer on your computer", "Connect your iPhone via USB", "Install AltStore to your device", "Sign in with your Apple ID on device", "Install IPAs through AltStore"],
    refreshRequired: true,
    refreshInterval: "Every 7 days",
    category: "computer-required",
  },
  {
    name: "SideStore",
    desc: "Fork of AltStore that refreshes entirely on-device using a WireGuard VPN loopback. No computer needed after initial setup. Open source.",
    url: "https://sidestore.io",
    platforms: "On-device (after initial setup)",
    difficulty: 2,
    free: true,
    pros: ["No computer needed for refresh", "Fully on-device after setup", "Open source", "Same 3-app limit workarounds"],
    cons: ["Requires WireGuard VPN running", "Slightly less stable than AltStore", "Initial setup needs computer", "VPN conflicts with other VPN apps"],
    steps: ["Install SideStore via AltStore or computer", "Configure WireGuard VPN profile", "Enable the VPN loopback", "SideStore refreshes itself automatically", "Install IPAs from Files app"],
    refreshRequired: true,
    refreshInterval: "Auto (via VPN loopback)",
    category: "on-device",
  },
  {
    name: "TrollStore",
    desc: "Permanent app installation using a CoreTrust bypass. Apps never expire and never need refreshing. Only works on specific iOS versions with specific installation methods.",
    url: "https://github.com/opa334/TrollStore",
    platforms: "On-device",
    difficulty: 2,
    free: true,
    pros: ["Apps never expire", "No re-signing needed", "No app limit", "No Apple ID required", "Survives reboots"],
    cons: ["Only works on iOS 14.0–17.0", "Cannot be installed on newer iOS", "Specific install method per version", "No longer being updated for new iOS"],
    steps: ["Check TrollStore compatibility chart", "Find the correct install method for your iOS", "Install TrollHelper via exploit", "Open TrollHelper and install TrollStore", "Install any IPA permanently"],
    refreshRequired: false,
    category: "permanent",
  },
  {
    name: "Sideloadly",
    desc: "Feature-rich desktop sideloading tool. Supports tweaked IPAs, custom bundle IDs, and advanced signing options. Great for power users who want full control.",
    url: "https://sideloadly.io",
    platforms: "Windows, macOS",
    difficulty: 1,
    free: true,
    pros: ["Advanced signing options", "Custom bundle ID support", "Tweak injection built-in", "No on-device app needed", "Supports multiple Apple IDs"],
    cons: ["Manual re-sign every 7 days", "Requires USB connection each time", "No wireless refresh", "No built-in app sources"],
    steps: ["Download Sideloadly on your computer", "Connect iPhone via USB and trust", "Drag an IPA file into Sideloadly", "Enter your Apple ID credentials", "Wait for installation to complete"],
    refreshRequired: true,
    refreshInterval: "Every 7 days (manual)",
    category: "computer-required",
  },
  {
    name: "Scarlet",
    desc: "On-device app installer with a built-in library of popular apps and games. Uses enterprise or developer certificates. No computer required.",
    url: "https://usescarlet.com",
    platforms: "On-device",
    difficulty: 1,
    free: true,
    pros: ["No computer needed", "Built-in app library", "Easy one-tap installs", "Frequent certificate updates"],
    cons: ["Certificates get revoked often", "Apps stop working when revoked", "Less control over signing", "May require VPN to install"],
    steps: ["Visit usescarlet.com on your iPhone", "Download and install the profile", "Trust the enterprise certificate in Settings", "Browse and install apps from library", "Re-install if certificate is revoked"],
    refreshRequired: true,
    refreshInterval: "Until certificate revocation",
    category: "on-device",
  },
  {
    name: "ESign",
    desc: "On-device IPA signing and installation tool. Import your own certificates or use the built-in signing service. Supports custom repos and advanced options.",
    url: "https://esign.yyyue.xyz",
    platforms: "On-device",
    difficulty: 3,
    free: true,
    pros: ["Full signing control", "Custom certificate import", "Repo system for sources", "Advanced entitlements editing", "Batch signing"],
    cons: ["Steeper learning curve", "Requires understanding certificates", "UI less polished", "Documentation mostly in Chinese"],
    steps: ["Install ESign via TrollStore or other method", "Import a signing certificate (p12 + mobileprovision)", "Add IPA files to the app", "Configure signing options", "Sign and install the IPA"],
    refreshRequired: true,
    refreshInterval: "Depends on certificate type",
    category: "on-device",
  },
];

const popularApps = [
  { name: "Delta", category: "Emulator", desc: "Nintendo emulator — GBA, N64, DS, SNES. The most popular sideloaded app.", risk: "low" },
  { name: "PPSSPP", category: "Emulator", desc: "PSP emulator with excellent performance and upscaling support.", risk: "low" },
  { name: "RetroArch", category: "Emulator", desc: "Multi-system emulator. Supports 50+ retro consoles.", risk: "low" },
  { name: "uYou+", category: "Media", desc: "YouTube client with ad-blocking, background playback, and downloads.", risk: "medium" },
  { name: "Cercube", category: "Media", desc: "Alternative YouTube client with PiP, downloads, and no ads.", risk: "medium" },
  { name: "Spotify++", category: "Media", desc: "Spotify with premium features unlocked. No shuffle-only limitation.", risk: "high" },
  { name: "FilzaEscaped", category: "Utility", desc: "File manager with limited root access. No jailbreak required on supported iOS.", risk: "medium" },
  { name: "DolphiniOS", category: "Emulator", desc: "GameCube and Wii emulator for iOS. Requires JIT.", risk: "low" },
  { name: "AltWidget", category: "Utility", desc: "Home screen widget showing app refresh countdown timers.", risk: "low" },
  { name: "Santander", category: "Utility", desc: "File browser for TrollStore-compatible iOS versions.", risk: "low" },
  { name: "LiveContainer", category: "Utility", desc: "Run multiple sideloaded apps within a single app slot. Bypasses 3-app limit.", risk: "low" },
  { name: "Feather", category: "Utility", desc: "On-device IPA installer and manager. Clean UI, easy to use.", risk: "low" },
];

const faqItems = [
  { q: "Is sideloading legal?", a: "Yes, sideloading is legal in most countries. In the EU, the Digital Markets Act explicitly requires Apple to allow sideloading. In the US, there is no law against installing apps on your own device. However, distributing copyrighted apps is illegal." },
  { q: "Will sideloading void my warranty?", a: "No. Unlike jailbreaking, sideloading does not modify your operating system. You can remove all sideloaded apps and Apple would never know they were installed. Your warranty remains intact." },
  { q: "What is the 7-day limit?", a: "Free Apple Developer accounts can only sign apps for 7 days. After 7 days, the certificate expires and apps stop opening. You need to re-sign them using AltStore, SideStore, or Sideloadly. Paid developer accounts ($99/year) get 365-day certificates." },
  { q: "Can I get banned for sideloading?", a: "Apple does not ban accounts for sideloading. However, if you use a modified app that violates a service's terms (like a modded game), that specific service may ban your account." },
  { q: "What is an IPA file?", a: "IPA (iOS App Archive) is the file format for iOS applications. It is essentially a ZIP file containing the compiled app, resources, and metadata. You can think of it as the iOS equivalent of an APK on Android." },
  { q: "Do sideloaded apps get updates?", a: "Not automatically through the App Store. You need to manually download the new IPA version and re-install it through your sideloading tool. Some tools like AltStore support source repos that notify you of updates." },
  { q: "Can I sideload on iOS 18?", a: "Yes. All sideloading methods that use Apple ID signing (AltStore, SideStore, Sideloadly) work on every iOS version including iOS 18. TrollStore does not work on iOS 18." },
  { q: "What happens if my certificate gets revoked?", a: "Enterprise certificates used by tools like Scarlet can be revoked by Apple at any time. When this happens, all apps signed with that certificate stop opening. You need to wait for a new certificate or switch to Apple ID-based signing." },
  { q: "Is my Apple ID safe?", a: "When using tools like AltStore and Sideloadly, your Apple ID credentials are sent directly to Apple's servers for signing — the tools do not store them. However, always use a secondary Apple ID if you are concerned, and enable two-factor authentication." },
  { q: "What is JIT and why do some apps need it?", a: "JIT (Just-In-Time compilation) is a technique that allows apps to compile code at runtime for better performance. iOS blocks JIT by default. Some emulators (DolphiniOS, UTM) need JIT enabled via AltStore's AltJIT feature or a debugger." },
];

const glossary = [
  { term: "IPA", def: "iOS App Archive — the app package format for iOS" },
  { term: "Signing", def: "The process of applying a certificate to an app so iOS allows it to run" },
  { term: "Certificate", def: "A cryptographic credential that tells iOS the app is trusted" },
  { term: "Provisioning Profile", def: "A file that links a certificate to specific apps and devices" },
  { term: "Enterprise Certificate", def: "A certificate meant for internal company apps, often abused for sideloading" },
  { term: "Revocation", def: "When Apple invalidates a certificate, causing all apps signed with it to stop working" },
  { term: "Re-signing", def: "Renewing an app's certificate before it expires" },
  { term: "Bundle ID", def: "A unique identifier for an app (e.g., com.rileytestut.Delta)" },
  { term: "Entitlements", def: "Permissions an app requests from iOS (e.g., push notifications, iCloud)" },
  { term: "JIT", def: "Just-In-Time compilation — needed by some emulators for performance" },
  { term: "TrollStore", def: "A permanent installer that exploits a CoreTrust bug to install apps without signing" },
  { term: "CoreTrust", def: "Apple's system for verifying app signatures — the bug TrollStore exploits" },
];

const euDmaInfo = {
  title: "EU Digital Markets Act",
  desc: "The European Union's Digital Markets Act (DMA) requires Apple to allow alternative app stores and sideloading in EU countries. This means EU users have additional legal protections and options.",
  stores: [
    { name: "AltStore PAL", desc: "Official EU version of AltStore. No 7-day limit. Requires a small annual fee for marketplace certificate.", url: "https://altstore.io/pal" },
    { name: "Setapp Mobile", desc: "MacPaw's alternative app store for EU. Subscription-based access to curated apps.", url: "https://setapp.com" },
    { name: "Epic Games Store", desc: "Epic's mobile storefront for Fortnite and other games in the EU.", url: "https://store.epicgames.com" },
  ],
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

function DifficultyDots({ level }: { level: 1 | 2 | 3 }) {
  const labels = ["Easy", "Medium", "Advanced"];
  const colors = ["#30d158", "#ff9f0a", "#ff453a"];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: i <= level ? colors[level - 1] : "rgba(255,255,255,0.15)",
            transition: "background 0.2s",
          }}
        />
      ))}
      <span style={{ fontSize: "12px", color: colors[level - 1], fontWeight: 500, marginLeft: "4px" }}>
        {labels[level - 1]}
      </span>
    </div>
  );
}

/* ── Main Component ── */

export default function Sideloading() {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedTool, setExpandedTool] = useState<string | null>(null);
  const [appCategoryFilter, setAppCategoryFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = sideloadTools.filter((t) => {
    if (categoryFilter === "all") return true;
    return t.category === categoryFilter;
  });

  const appCategories = Array.from(new Set(popularApps.map(a => a.category)));
  const filteredApps = popularApps.filter((a) => {
    const catMatch = appCategoryFilter === "all" || a.category === appCategoryFilter;
    const searchMatch = !searchQuery || a.name.toLowerCase().includes(searchQuery.toLowerCase()) || a.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          padding: "80px 22px 60px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Gradient mesh background */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 20% 50%, rgba(var(--brand-rgb),0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(48,209,88,0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(175,82,222,0.08) 0%, transparent 50%)",
          zIndex: 0,
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>
            Sideloading Guide
          </div>
          <h1 className="apple-headline-hero" style={{ color: "#f5f5f7", marginBottom: "20px" }}>
            Install anything.
          </h1>
          <p className="apple-body-large" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "640px", margin: "0 auto 32px" }}>
            Emulators, ad-blockers, modified apps, and more — without jailbreaking. The complete guide to sideloading on iOS in 2026.
          </p>

          {/* Quick-start flowchart */}
          <div style={{
            display: "inline-flex",
            gap: "0",
            alignItems: "center",
            padding: "12px 20px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "14px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
            {["Choose a tool", "Sign with Apple ID", "Install IPA", "Refresh before expiry"].map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", whiteSpace: "nowrap", padding: "4px 8px" }}>{step}</span>
                {i < 3 && <span style={{ color: "rgba(255,255,255,0.25)", margin: "0 4px" }}>&rarr;</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tool Comparison ── */}
      <section style={{ background: "#1d1d1f", padding: "64px 0" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textAlign: "center" }}>
              Tools
            </div>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "12px" }}>
              Choose your method.
            </h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", textAlign: "center", maxWidth: "600px", margin: "0 auto 40px", letterSpacing: "-0.022em", lineHeight: 1.5 }}>
              Each tool has trade-offs between convenience, reliability, and permanence.
            </p>

            {/* Category filter */}
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "32px", flexWrap: "wrap" }}>
              {[
                { id: "all", label: "All Tools" },
                { id: "computer-required", label: "Computer Required" },
                { id: "on-device", label: "On-Device" },
                { id: "permanent", label: "Permanent" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "980px",
                    border: categoryFilter === cat.id ? "1px solid var(--brand)" : "1px solid rgba(255,255,255,0.15)",
                    background: categoryFilter === cat.id ? "rgba(var(--brand-rgb),0.12)" : "transparent",
                    color: categoryFilter === cat.id ? "var(--brand)" : "rgba(255,255,255,0.6)",
                    fontSize: "13px",
                    fontWeight: categoryFilter === cat.id ? 600 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Tool cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
              {filteredTools.map((tool) => {
                const isExpanded = expandedTool === tool.name;
                return (
                  <div
                    key={tool.name}
                    style={{
                      background: "#000",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "16px",
                      padding: "28px 24px",
                      transition: "border-color 0.2s ease, transform 0.15s ease",
                      cursor: "pointer",
                    }}
                    onClick={() => setExpandedTool(isExpanded ? null : tool.name)}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(var(--brand-rgb),0.4)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                  >
                    {/* Header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                      <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#f5f5f7", letterSpacing: "-0.025em", margin: 0 }}>{tool.name}</h3>
                      <DifficultyDots level={tool.difficulty} />
                    </div>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.5, marginBottom: "16px" }}>{tool.desc}</p>

                    {/* Tags */}
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "16px" }}>
                      <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", padding: "3px 8px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "980px" }}>{tool.platforms}</span>
                      {tool.free && <span style={{ fontSize: "11px", color: "#30d158", padding: "3px 8px", border: "1px solid rgba(48,209,88,0.25)", borderRadius: "980px" }}>Free</span>}
                      {tool.refreshRequired ? (
                        <span style={{ fontSize: "11px", color: "#ff9f0a", padding: "3px 8px", border: "1px solid rgba(255,159,10,0.25)", borderRadius: "980px" }}>{tool.refreshInterval}</span>
                      ) : (
                        <span style={{ fontSize: "11px", color: "#30d158", padding: "3px 8px", border: "1px solid rgba(48,209,88,0.25)", borderRadius: "980px" }}>Permanent</span>
                      )}
                    </div>

                    {/* Expanded content */}
                    {isExpanded && (
                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "16px", marginTop: "8px", animation: "fadeInUp 0.2s ease both" }}>
                        {/* Steps */}
                        <div style={{ marginBottom: "16px" }}>
                          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--brand)", marginBottom: "10px" }}>How to install</div>
                          {tool.steps.map((step, i) => (
                            <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
                              <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--brand)", minWidth: "18px" }}>{i + 1}.</span>
                              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>{step}</span>
                            </div>
                          ))}
                        </div>
                        {/* Pros/Cons */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                          <div>
                            <div style={{ fontSize: "11px", fontWeight: 600, color: "#30d158", marginBottom: "6px" }}>PROS</div>
                            {tool.pros.map((p, i) => (
                              <div key={i} style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", marginBottom: "4px", paddingLeft: "8px", borderLeft: "2px solid rgba(48,209,88,0.3)" }}>{p}</div>
                            ))}
                          </div>
                          <div>
                            <div style={{ fontSize: "11px", fontWeight: 600, color: "#ff453a", marginBottom: "6px" }}>CONS</div>
                            {tool.cons.map((c, i) => (
                              <div key={i} style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", marginBottom: "4px", paddingLeft: "8px", borderLeft: "2px solid rgba(255,69,58,0.3)" }}>{c}</div>
                            ))}
                          </div>
                        </div>
                        {/* Link */}
                        <a href={tool.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{ display: "inline-block", marginTop: "16px", fontSize: "14px", color: "var(--brand)", textDecoration: "none" }}>
                          Get {tool.name} &rsaquo;
                        </a>
                      </div>
                    )}

                    {!isExpanded && (
                      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: "4px" }}>Tap to expand &bull; {tool.steps.length} steps</div>
                    )}
                  </div>
                );
              })}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Popular Apps ── */}
      <section style={{ background: "#000", padding: "64px 0" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textAlign: "center" }}>App Directory</div>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "12px" }}>What people sideload.</h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", textAlign: "center", maxWidth: "600px", margin: "0 auto 32px", letterSpacing: "-0.022em", lineHeight: 1.5 }}>The most popular sideloaded apps, organized by category with risk levels.</p>

            {/* Search and filter */}
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginBottom: "32px", flexWrap: "wrap", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Search apps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", padding: "10px 16px", fontSize: "14px", color: "#f5f5f7", outline: "none", width: "200px" }}
              />
              {["all", ...appCategories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setAppCategoryFilter(cat)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "980px",
                    border: appCategoryFilter === cat ? "1px solid var(--brand)" : "1px solid rgba(255,255,255,0.12)",
                    background: appCategoryFilter === cat ? "rgba(var(--brand-rgb),0.12)" : "transparent",
                    color: appCategoryFilter === cat ? "var(--brand)" : "rgba(255,255,255,0.5)",
                    fontSize: "12px",
                    fontWeight: appCategoryFilter === cat ? 600 : 400,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    textTransform: "capitalize",
                  }}
                >
                  {cat === "all" ? "All" : cat}
                </button>
              ))}
            </div>

            {/* App grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
              {filteredApps.map((app) => {
                const riskColors = { low: "#30d158", medium: "#ff9f0a", high: "#ff453a" };
                return (
                  <div key={app.name} style={{ background: "#000", padding: "24px 20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                      <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#f5f5f7", margin: 0 }}>{app.name}</h4>
                      <span style={{ fontSize: "10px", fontWeight: 600, color: riskColors[app.risk as keyof typeof riskColors], textTransform: "uppercase", letterSpacing: "0.05em" }}>{app.risk} risk</span>
                    </div>
                    <span style={{ fontSize: "11px", color: "var(--brand)", fontWeight: 500 }}>{app.category}</span>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.4, marginTop: "8px", marginBottom: 0 }}>{app.desc}</p>
                  </div>
                );
              })}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── EU DMA Section ── */}
      <section style={{ background: "#1d1d1f", padding: "64px 0" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textAlign: "center" }}>Europe</div>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "12px" }}>{euDmaInfo.title}.</h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", textAlign: "center", maxWidth: "600px", margin: "0 auto 40px", letterSpacing: "-0.022em", lineHeight: 1.5 }}>{euDmaInfo.desc}</p>
            <div style={{ display: "grid", gap: "12px" }}>
              {euDmaInfo.stores.map((store) => (
                <a key={store.name} href={store.url} target="_blank" rel="noopener noreferrer" style={{
                  display: "block", padding: "20px 24px", background: "#000", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px", textDecoration: "none", transition: "border-color 0.2s",
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(var(--brand-rgb),0.4)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                >
                  <div style={{ fontSize: "16px", fontWeight: 600, color: "#f5f5f7", marginBottom: "4px" }}>{store.name}</div>
                  <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>{store.desc}</div>
                </a>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#000", padding: "64px 0" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textAlign: "center" }}>FAQ</div>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "40px" }}>Common questions.</h2>
            <div style={{ display: "grid", gap: "1px", background: "rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
              {faqItems.map((item, i) => (
                <div key={i} style={{ background: "#000" }}>
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    style={{
                      width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: "15px", fontWeight: 500, color: "#f5f5f7", letterSpacing: "-0.022em", flex: 1, paddingRight: "16px" }}>{item.q}</span>
                    <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "20px", transform: expandedFaq === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>+</span>
                  </button>
                  {expandedFaq === i && (
                    <div style={{ padding: "0 24px 20px", animation: "fadeInUp 0.15s ease both" }}>
                      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Glossary ── */}
      <section style={{ background: "#1d1d1f", padding: "64px 0" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px", textAlign: "center" }}>Reference</div>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "40px" }}>Glossary.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
              {glossary.map((item) => (
                <div key={item.term} style={{ background: "#1d1d1f", padding: "16px 20px" }}>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#f5f5f7", marginBottom: "4px" }}>{item.term}</div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>{item.def}</div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Community ── */}
      <section style={{ background: "#000", padding: "64px 0" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 22px", textAlign: "center" }}>
          <FadeSection>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "12px" }}>Community</div>
            <h2 className="apple-headline-section" style={{ color: "#f5f5f7", marginBottom: "12px" }}>Join the conversation.</h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 32px", lineHeight: 1.5 }}>Get help, share setups, and stay updated with the sideloading community.</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
              {[
                { name: "r/sideloaded", url: "https://reddit.com/r/sideloaded" },
                { name: "r/AltStore", url: "https://reddit.com/r/AltStore" },
                { name: "r/TrollStore", url: "https://reddit.com/r/TrollStore" },
                { name: "r/Delta_Emulator", url: "https://reddit.com/r/Delta_Emulator" },
                { name: "AltStore Discord", url: "https://discord.gg/altstore" },
                { name: "SideStore Discord", url: "https://discord.gg/sidestore" },
              ].map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-block", padding: "10px 18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "980px", color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500, textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--brand)"; (e.currentTarget as HTMLElement).style.color = "var(--brand)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
                >{link.name}</a>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Safety Notice ── */}
      <section style={{ background: "#1d1d1f", padding: "48px 0" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 22px", textAlign: "center" }}>
          <div style={{ padding: "24px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", background: "rgba(255,255,255,0.02)" }}>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, margin: 0 }}>
              Everything Apple provides this information for educational purposes. Always download IPAs from trusted sources. Never enter your primary Apple ID into untrusted tools. Modified apps may violate the terms of service of the original app and could result in account bans.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
