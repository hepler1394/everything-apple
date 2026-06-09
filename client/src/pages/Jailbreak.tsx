import { useState, useEffect } from "react";
import { ExternalLink, Terminal, AlertTriangle, CheckCircle, XCircle, Info, Download, Shield } from "lucide-react";

type JailbreakStatus = "jailbreakable" | "partial" | "not-jailbreakable" | "unknown";

interface CompatEntry {
  ios: string;
  status: JailbreakStatus;
  tool?: string;
  toolUrl?: string;
  notes: string;
}

const compatibilityData: Record<string, CompatEntry[]> = {
  "iOS 18 / iOS 18.x": [
    { ios: "iOS 18.0 – 18.3.2", status: "jailbreakable", tool: "palera1n", toolUrl: "https://palera.in", notes: "A8–A11 chip iPhones only (iPhone X and older). Semi-tethered." },
    { ios: "iOS 18.4 – 18.5", status: "partial", tool: "palera1n (beta)", toolUrl: "https://palera.in", notes: "Limited device support. Check palera1n compatibility list." },
    { ios: "iOS 18.6+", status: "not-jailbreakable", notes: "No public jailbreak available yet." },
  ],
  "iOS 17 / iOS 17.x": [
    { ios: "iOS 17.0 – 17.6.1", status: "jailbreakable", tool: "palera1n", toolUrl: "https://palera.in", notes: "A8–A11 chip iPhones. Semi-tethered. Requires macOS or Linux." },
    { ios: "iOS 17.7+", status: "partial", notes: "Limited support. Check latest palera1n releases." },
  ],
  "iOS 16 / iOS 16.x": [
    { ios: "iOS 16.0 – 16.7.x", status: "jailbreakable", tool: "palera1n", toolUrl: "https://palera.in", notes: "A8–A11 chip iPhones. Semi-tethered jailbreak." },
    { ios: "iOS 16.0 – 16.6.1 (A12+)", status: "jailbreakable", tool: "Dopamine", toolUrl: "https://github.com/opa334/Dopamine", notes: "A12+ chip iPhones. Rootless jailbreak. Very stable." },
  ],
  "iOS 15 / iOS 15.x": [
    { ios: "iOS 15.0 – 15.8.x", status: "jailbreakable", tool: "palera1n", toolUrl: "https://palera.in", notes: "A8–A11 chip iPhones." },
    { ios: "iOS 15.0 – 15.4.1 (A12+)", status: "jailbreakable", tool: "Dopamine", toolUrl: "https://github.com/opa334/Dopamine", notes: "A12+ iPhones. Rootless." },
  ],
  "iOS 14 / iOS 14.x": [
    { ios: "iOS 14.0 – 14.8.1", status: "jailbreakable", tool: "checkra1n", toolUrl: "https://checkra.in", notes: "A8–A11 chip iPhones only. Semi-tethered." },
    { ios: "iOS 14.0 – 14.5 (A12+)", status: "jailbreakable", tool: "unc0ver", toolUrl: "https://unc0ver.dev", notes: "A12+ iPhones. Untethered. Very stable." },
  ],
  "iOS 13 / iOS 13.x": [
    { ios: "iOS 13.0 – 13.7", status: "jailbreakable", tool: "checkra1n / unc0ver", toolUrl: "https://checkra.in", notes: "Wide device support. Both checkra1n and unc0ver work." },
  ],
};

const sideloadTools = [
  {
    name: "AltStore",
    desc: "The most popular sideloading tool. Install apps via your Apple ID without a computer after initial setup. Free with 3-app limit, AltStore PAL available in EU.",
    url: "https://altstore.io",
    platforms: ["Windows", "macOS"],
    free: true,
    difficulty: "Easy",
    color: "border-blue-500/30 bg-blue-500/5",
    tagColor: "text-blue-400",
  },
  {
    name: "Sideloadly",
    desc: "Feature-rich sideloading tool supporting both Windows and macOS. Supports tweaked apps, game emulators, and custom IPAs. Requires re-signing every 7 days with free Apple ID.",
    url: "https://sideloadly.io",
    platforms: ["Windows", "macOS"],
    free: true,
    difficulty: "Easy",
    color: "border-purple-500/30 bg-purple-500/5",
    tagColor: "text-purple-400",
  },
  {
    name: "SideStore",
    desc: "Open-source AltStore alternative that runs entirely on-device after initial setup. No computer needed for refreshing apps. Uses WireGuard VPN trick.",
    url: "https://sidestore.io",
    platforms: ["On-device"],
    free: true,
    difficulty: "Medium",
    color: "border-green-500/30 bg-green-500/5",
    tagColor: "text-green-400",
  },
  {
    name: "TrollStore",
    desc: "Permanent sideloading for supported iOS versions. Apps never expire and do not need refreshing. Works on specific iOS versions only — check compatibility.",
    url: "https://github.com/opa334/TrollStore",
    platforms: ["On-device"],
    free: true,
    difficulty: "Medium",
    color: "border-yellow-500/30 bg-yellow-500/5",
    tagColor: "text-yellow-400",
  },
  {
    name: "Esign",
    desc: "On-device IPA signer and installer. Sign and install apps directly on your iPhone without a computer. Requires a certificate.",
    url: "https://esign.yyyue.xyz",
    platforms: ["On-device"],
    free: false,
    difficulty: "Medium",
    color: "border-orange-500/30 bg-orange-500/5",
    tagColor: "text-orange-400",
  },
  {
    name: "Feather",
    desc: "Modern on-device sideloading app with a clean interface. Sign and install IPAs directly from your iPhone. Free with certificate.",
    url: "https://github.com/khcrysalis/Feather",
    platforms: ["On-device"],
    free: true,
    difficulty: "Medium",
    color: "border-cyan-500/30 bg-cyan-500/5",
    tagColor: "text-cyan-400",
  },
];

const jailbreakTools = [
  {
    name: "palera1n",
    desc: "The most actively maintained jailbreak. Supports A8–A11 chip iPhones on iOS 15–18. Semi-tethered. Requires macOS or Linux.",
    url: "https://palera.in",
    devices: "iPhone 6s – iPhone X",
    ios: "iOS 15 – 18.x",
    type: "Semi-tethered",
    active: true,
  },
  {
    name: "Dopamine",
    desc: "Rootless jailbreak for A12+ iPhones on iOS 15–16. Very stable and widely used. Made by opa334.",
    url: "https://github.com/opa334/Dopamine",
    devices: "iPhone XS and newer",
    ios: "iOS 15.0 – 16.6.1",
    type: "Rootless",
    active: true,
  },
  {
    name: "checkra1n",
    desc: "Hardware-based (bootrom) jailbreak for A8–A11 chips. Extremely stable. No longer actively updated but still works.",
    url: "https://checkra.in",
    devices: "iPhone 6s – iPhone X",
    ios: "iOS 12 – 14.8.1",
    type: "Semi-tethered",
    active: false,
  },
  {
    name: "unc0ver",
    desc: "Classic untethered jailbreak for A12+ iPhones. No longer updated but still works on older iOS versions.",
    url: "https://unc0ver.dev",
    devices: "iPhone XS and newer",
    ios: "iOS 11 – 14.8",
    type: "Untethered",
    active: false,
  },
];

const deviceChips: Record<string, string> = {
  "iPhone 17 Pro Max / Pro / Air / 17": "A19 / A18 (not jailbreakable)",
  "iPhone 16 Pro Max / Pro / Plus / 16": "A18 Pro / A18 (not jailbreakable)",
  "iPhone 15 Pro Max / Pro / Plus / 15": "A17 Pro / A16 (not jailbreakable)",
  "iPhone 14 Pro Max / Pro / Plus / 14": "A16 / A15 (not jailbreakable)",
  "iPhone 13 Pro Max / Pro / mini / 13": "A15 Bionic (not jailbreakable on latest iOS)",
  "iPhone 12 Pro Max / Pro / mini / 12": "A14 Bionic (Dopamine on iOS 15–16)",
  "iPhone 11 Pro Max / Pro / 11": "A13 Bionic (Dopamine on iOS 15–16)",
  "iPhone XS Max / XS / XR": "A12 Bionic (Dopamine on iOS 15–16)",
  "iPhone X": "A11 Bionic (palera1n)",
  "iPhone 8 Plus / 8": "A11 Bionic (palera1n)",
  "iPhone 7 Plus / 7": "A10 Fusion (palera1n)",
  "iPhone 6s Plus / 6s / SE (1st gen)": "A9 (palera1n)",
};

export default function Jailbreak() {
  const [selectedIOS, setSelectedIOS] = useState<string>("iOS 18 / iOS 18.x");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const getStatusBadge = (status: JailbreakStatus) => {
    switch (status) {
      case "jailbreakable":
        return <span className="badge-jailbreakable flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Jailbreakable</span>;
      case "partial":
        return <span className="badge-partial flex items-center gap-1"><Info className="w-3 h-3" /> Partial</span>;
      case "not-jailbreakable":
        return <span className="badge-not-jailbreakable flex items-center gap-1"><XCircle className="w-3 h-3" /> No JB</span>;
      default:
        return <span className="badge-partial">Unknown</span>;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-black to-amber-950/20" />
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl animate-pulse-glow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label text-orange-400 mb-3">Tools, Guides & Compatibility</div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none mb-4">
            <span className="text-white">Jailbreak</span>
            <br />
            <span className="text-gradient-gold">& Sideload</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mb-6 leading-relaxed">
            Check if your iPhone can be jailbroken. Download the latest tools. 
            Learn how to sideload apps without jailbreaking. Everything you need in one place.
          </p>
          <div className="glass-card p-4 border border-yellow-500/20 bg-yellow-500/5 max-w-2xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-yellow-400 font-semibold text-sm mb-1">Disclaimer</div>
                <div className="text-white/60 text-xs leading-relaxed">
                  Jailbreaking voids your Apple warranty and may expose your device to security risks. 
                  Always back up your iPhone before attempting to jailbreak. Proceed at your own risk. 
                  This site provides information only and does not host any jailbreak tools.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility Checker */}
      <section id="checker" className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label text-orange-400 mb-2 fade-up">Jailbreak Compatibility</div>
          <h2 className="text-3xl font-black mb-6 fade-up">Is Your iOS Jailbreakable?</h2>

          {/* iOS Version Selector */}
          <div className="flex flex-wrap gap-2 mb-8 fade-up">
            {Object.keys(compatibilityData).map(version => (
              <button
                key={version}
                onClick={() => setSelectedIOS(version)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedIOS === version
                    ? "bg-orange-500/20 border border-orange-500/40 text-orange-300"
                    : "border border-white/15 text-white/60 hover:text-white hover:border-white/30"
                }`}
              >
                {version}
              </button>
            ))}
          </div>

          {/* Compatibility Table */}
          <div className="space-y-3 fade-up">
            {compatibilityData[selectedIOS]?.map((entry, i) => (
              <div key={i} className="glass-card p-4 border border-white/10 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1">
                  <div className="text-white font-semibold text-sm font-mono-tech">{entry.ios}</div>
                  <div className="text-white/50 text-xs mt-1">{entry.notes}</div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  {getStatusBadge(entry.status)}
                  {entry.tool && entry.toolUrl && (
                    <a href={entry.toolUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-orange-400 hover:text-orange-300 text-xs font-semibold font-mono-tech transition-colors">
                      <Download className="w-3 h-3" /> {entry.tool}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Device Chip Reference */}
          <div className="mt-8 fade-up">
            <h3 className="text-white font-bold text-base mb-4">Device Chip Reference</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {Object.entries(deviceChips).map(([device, chip]) => (
                <div key={device} className="glass-card p-3 border border-white/10 flex items-center justify-between gap-2">
                  <span className="text-white/70 text-xs">{device}</span>
                  <span className={`text-xs font-semibold font-mono-tech flex-shrink-0 ${chip.includes("not jailbreakable") ? "text-red-400" : chip.includes("palera1n") ? "text-green-400" : "text-yellow-400"}`}>
                    {chip.split("(")[1]?.replace(")", "") || chip}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jailbreak Tools */}
      <section className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label text-orange-400 mb-2 fade-up">Download Links</div>
          <h2 className="text-3xl font-black mb-6 fade-up">Jailbreak Tools</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {jailbreakTools.map((tool, i) => (
              <div key={i} className="glass-card p-5 border border-white/10 fade-up" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-bold text-base font-mono-tech">{tool.name}</h3>
                      {tool.active ? (
                        <span className="text-xs bg-green-500/10 border border-green-500/30 text-green-400 px-2 py-0.5 rounded-full">Active</span>
                      ) : (
                        <span className="text-xs bg-gray-500/10 border border-gray-500/30 text-gray-400 px-2 py-0.5 rounded-full">Legacy</span>
                      )}
                    </div>
                    <div className="text-orange-400 text-xs font-semibold">{tool.type}</div>
                  </div>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500/20 text-xs font-semibold transition-all">
                    <Download className="w-3 h-3" /> Download
                  </a>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-3">{tool.desc}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/5 border border-white/10 text-white/50 px-2 py-0.5 rounded">{tool.devices}</span>
                  <span className="text-xs bg-white/5 border border-white/10 text-white/50 px-2 py-0.5 rounded">{tool.ios}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sideload Tools */}
      <section id="sideload" className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label text-cyan-400 mb-2 fade-up">No Jailbreak Required</div>
          <h2 className="text-3xl font-black mb-2 fade-up">Sideloading Tools</h2>
          <p className="text-white/60 text-sm mb-6 fade-up">Install apps that are not on the App Store — no jailbreak needed.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sideloadTools.map((tool, i) => (
              <div key={i} className={`glass-card p-5 border ${tool.color} fade-up`} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className={`font-bold text-base font-mono-tech ${tool.tagColor}`}>{tool.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs font-semibold ${tool.free ? "text-green-400" : "text-yellow-400"}`}>
                        {tool.free ? "Free" : "Paid"}
                      </span>
                      <span className="text-white/30 text-xs">•</span>
                      <span className="text-white/50 text-xs">{tool.difficulty}</span>
                    </div>
                  </div>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white/40 hover:text-white/80 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-white/60 text-xs leading-relaxed mb-3">{tool.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {tool.platforms.map(p => (
                    <span key={p} className="text-xs bg-white/5 border border-white/10 text-white/50 px-2 py-0.5 rounded">{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Note */}
      <section className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glass-card p-6 border border-blue-500/20 bg-blue-500/5">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-bold text-base mb-2">Stay Safe</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Always download jailbreak tools from official sources only. Never trust random links 
                  claiming to offer jailbreaks for the latest iOS — these are almost always scams or malware. 
                  The links on this page point to official GitHub repositories and developer websites. 
                  Join the r/jailbreak community on Reddit for the latest legitimate releases and support.
                </p>
                <a href="https://reddit.com/r/jailbreak" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 mt-3 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  r/jailbreak on Reddit <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
