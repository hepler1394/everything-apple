import { useState } from "react";

interface MacFeature {
  id: number;
  title: string;
  description: string;
  details: string[];
  category: "design" | "productivity" | "ai" | "gaming" | "developer" | "continuity" | "security";
  impact: "major" | "moderate" | "minor";
}

const MACOS_FEATURES: MacFeature[] = [
  {
    id: 1,
    title: "Liquid Glass Design Language",
    description: "macOS Golden Gate introduces Apple's new Liquid Glass design system with translucent, depth-aware surfaces.",
    details: [
      "Window chrome becomes translucent with dynamic blur based on background content",
      "Sidebar materials shift color temperature based on desktop wallpaper",
      "Menu bar uses variable translucency that adapts to scroll position",
      "Dock icons gain subtle 3D depth with parallax on hover",
      "System dialogs use layered glass sheets with depth shadows",
      "Dark mode glass has a subtle warm tint instead of pure neutral gray",
      "Accessibility option to reduce transparency still available"
    ],
    category: "design",
    impact: "major"
  },
  {
    id: 2,
    title: "Siri AI Desktop Assistant",
    description: "Siri AI on Mac can now understand context from your screen, files, and apps to provide intelligent assistance.",
    details: [
      "Ask Siri about content visible on screen: summarize PDFs, explain charts",
      "Siri can reference files by name and find documents from last week",
      "Cross-app actions: turn emails into calendar events automatically",
      "Code assistance in Xcode: explain functions or write unit tests",
      "Natural language system control for settings and preferences",
      "Conversational context maintained across multiple requests",
      "On-device processing for private data; cloud for complex reasoning",
      "Type to Siri always available via keyboard shortcut"
    ],
    category: "ai",
    impact: "major"
  },
  {
    id: 3,
    title: "Window Tiling and Snap Layouts",
    description: "Native window tiling with snap zones, keyboard shortcuts, and customizable grid layouts.",
    details: [
      "Drag windows to screen edges to snap into halves or quarters",
      "Hold Option while dragging to see all available snap zones",
      "Keyboard shortcuts for quick tiling in any direction",
      "Custom grid layouts: define 3-column or asymmetric layouts",
      "Window groups: save and restore multi-window arrangements",
      "Per-Space layouts that persist across restarts",
      "Works with Stage Manager or traditional desktop mode"
    ],
    category: "productivity",
    impact: "major"
  },
  {
    id: 4,
    title: "iPhone Mirroring 2.0",
    description: "Full iPhone control from your Mac with drag-and-drop file transfer and notification interaction.",
    details: [
      "See and control your iPhone screen directly on Mac",
      "Drag files between iPhone and Mac windows",
      "Interact with iPhone notifications without picking up phone",
      "Launch iPhone apps from Spotlight or Dock",
      "iPhone audio plays through Mac speakers",
      "Works wirelessly when both devices are nearby",
      "iPhone stays locked during mirroring for privacy",
      "Supports all gestures: swipe, pinch, long-press"
    ],
    category: "continuity",
    impact: "major"
  },
  {
    id: 5,
    title: "Game Mode 2.0",
    description: "Enhanced Game Mode with dynamic resolution scaling, frame generation, and per-game profiles.",
    details: [
      "Automatically activates when launching games",
      "Reduces background process priority for maximum GPU/CPU allocation",
      "Dynamic resolution scaling maintains target frame rate",
      "Frame generation via MetalFX Temporal for smoother visuals",
      "Per-game profiles: save resolution, quality, and input settings",
      "Bluetooth polling rate doubled for controllers and AirPods",
      "Game dashboard overlay shows FPS, thermals, and GPU usage",
      "Supports Game Porting Toolkit 3 for running Windows games"
    ],
    category: "gaming",
    impact: "major"
  },
  {
    id: 6,
    title: "Safari 20",
    description: "Safari gets AI-powered page summaries, vertical tabs, tab groups sharing, and redesigned reader mode.",
    details: [
      "AI Page Summaries: one-click summary of any article",
      "Vertical tab bar option for power users",
      "Tab Group sharing with real-time collaboration",
      "Redesigned Reader Mode with customizable typography",
      "Web app improvements: better notifications and badging",
      "Intelligent Tracking Prevention 4.0 with stricter blocks",
      "Passkey improvements with cross-platform sharing",
      "Built-in translation for 20+ languages"
    ],
    category: "productivity",
    impact: "moderate"
  },
  {
    id: 7,
    title: "Xcode 18 with AI Copilot",
    description: "Xcode gains an integrated AI coding assistant that understands your project context and Apple frameworks.",
    details: [
      "Inline code completion powered by Apple on-device LLM",
      "Understands Swift, SwiftUI, UIKit, and all Apple frameworks",
      "Context-aware: reads your project structure and existing code",
      "Natural language to code: describe what you want in comments",
      "Automatic documentation generation for functions and classes",
      "Bug explanation: highlights issues and suggests fixes",
      "Test generation: creates unit tests for selected functions",
      "Runs on-device on M-series Macs with no cloud required"
    ],
    category: "developer",
    impact: "major"
  },
  {
    id: 8,
    title: "System-Wide Translation",
    description: "Translate any text anywhere on macOS by selecting text in any app.",
    details: [
      "Right-click any selected text to translate instantly",
      "Supports 20+ languages with on-device models",
      "Live translation in FaceTime and Messages",
      "Safari page translation with better formatting",
      "Translate PDFs and documents without leaving the app",
      "Camera translation via Continuity Camera",
      "Download languages for fully offline translation"
    ],
    category: "productivity",
    impact: "moderate"
  },
  {
    id: 9,
    title: "Advanced Security Features",
    description: "New security protections including app permission auditing, lockdown improvements, and encrypted DNS.",
    details: [
      "App Permission Audit: see exactly what each app has accessed",
      "Lockdown Mode improvements for high-risk users",
      "Encrypted DNS by default (DNS over HTTPS)",
      "Passkey sharing with trusted contacts",
      "Automatic password rotation for compromised accounts",
      "USB Restricted Mode improvements",
      "Sandboxing improvements for third-party apps"
    ],
    category: "security",
    impact: "moderate"
  },
  {
    id: 10,
    title: "Finder Enhancements",
    description: "Finder gets smart folders powered by AI, better file previews, and integrated cloud storage.",
    details: [
      "AI-powered Smart Folders that auto-organize by content type",
      "Enhanced Quick Look with editing capabilities",
      "Integrated cloud storage sidebar (iCloud, Dropbox, Google Drive)",
      "Batch file operations with progress tracking",
      "Tags improvements with auto-suggestions",
      "Better network drive performance and reliability",
      "Column view improvements with richer previews"
    ],
    category: "productivity",
    impact: "moderate"
  },
  {
    id: 11,
    title: "Messages App Redesign",
    description: "Messages on Mac gets a visual refresh with better media handling, scheduling, and rich link previews.",
    details: [
      "Scheduled messages: compose now, send later",
      "Rich link previews with inline media playback",
      "Better group chat management with roles",
      "Improved search across all conversations",
      "Tapback reactions with any emoji",
      "Message editing and unsend (up to 15 minutes)",
      "Shared With You integration across all apps"
    ],
    category: "productivity",
    impact: "minor"
  },
  {
    id: 12,
    title: "Virtual Display for Vision Pro",
    description: "Use your Mac as a virtual ultrawide display when wearing Apple Vision Pro.",
    details: [
      "Mac screen appears as a floating virtual display in Vision Pro",
      "Resize to ultrawide (equivalent of 2-3 physical monitors)",
      "Full keyboard and trackpad input passes through",
      "Multiple Mac windows can be placed in 3D space",
      "Works wirelessly with low latency",
      "Supports multiple Macs simultaneously",
      "4K resolution per virtual display"
    ],
    category: "continuity",
    impact: "moderate"
  },
];

const CATEGORY_META: Record<string, { label: string; color: string; bg: string }> = {
  design: { label: "Design", color: "text-pink-400", bg: "bg-pink-500/10" },
  productivity: { label: "Productivity", color: "text-blue-400", bg: "bg-blue-500/10" },
  ai: { label: "AI & Intelligence", color: "text-purple-400", bg: "bg-purple-500/10" },
  gaming: { label: "Gaming", color: "text-green-400", bg: "bg-green-500/10" },
  developer: { label: "Developer", color: "text-orange-400", bg: "bg-orange-500/10" },
  continuity: { label: "Continuity", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  security: { label: "Security", color: "text-red-400", bg: "bg-red-500/10" },
};

const IMPACT_BADGES: Record<string, { label: string; color: string }> = {
  major: { label: "Major", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30" },
  moderate: { label: "Moderate", color: "text-blue-400 bg-blue-500/10 border-blue-500/30" },
  minor: { label: "Minor", color: "text-gray-400 bg-gray-500/10 border-gray-500/30" },
};

const COMPATIBLE_MACS = [
  { name: "MacBook Air (M1, 2020 and later)", supported: true },
  { name: "MacBook Pro (M1, 2020 and later)", supported: true },
  { name: "Mac mini (M1, 2020 and later)", supported: true },
  { name: "iMac (M1, 2021 and later)", supported: true },
  { name: "Mac Studio (M1 Max, 2022 and later)", supported: true },
  { name: "Mac Pro (M2 Ultra, 2023 and later)", supported: true },
  { name: "MacBook Air (Intel, 2020)", supported: false },
  { name: "MacBook Pro (Intel, 2020)", supported: false },
  { name: "iMac (Intel, 2020)", supported: false },
  { name: "Mac mini (Intel, 2018)", supported: false },
  { name: "Mac Pro (Intel, 2019)", supported: false },
  { name: "iMac Pro (2017)", supported: false },
];

export default function MacOSDeepDive() {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const filtered = categoryFilter === "all"
    ? MACOS_FEATURES
    : MACOS_FEATURES.filter(f => f.category === categoryFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">macOS 16</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Golden Gate</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-2">Deep Dive</p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-6">
            Every feature, every detail. The most comprehensive breakdown of macOS Golden Gate — 
            from Liquid Glass design to Siri AI, Game Mode 2.0, and native window tiling.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>{MACOS_FEATURES.length} features covered</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>{MACOS_FEATURES.filter(f => f.impact === "major").length} major changes</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>Apple Silicon required</span>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-4 px-4 border-y border-border/30 sticky top-[44px] z-20 bg-background/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setCategoryFilter("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              categoryFilter === "all" ? "bg-amber-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
            }`}
          >
            All ({MACOS_FEATURES.length})
          </button>
          {Object.entries(CATEGORY_META).map(([key, meta]) => {
            const count = MACOS_FEATURES.filter(f => f.category === key).length;
            return (
              <button
                key={key}
                onClick={() => setCategoryFilter(key)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  categoryFilter === key ? "bg-amber-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
                }`}
              >
                {meta.label} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Features List */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-4">
          {filtered.map(feature => {
            const isExpanded = expandedFeature === feature.id;
            const catMeta = CATEGORY_META[feature.category];
            const impactMeta = IMPACT_BADGES[feature.impact];
            return (
              <div
                key={feature.id}
                className="p-5 rounded-xl border border-border/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer"
                onClick={() => setExpandedFeature(isExpanded ? null : feature.id)}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${catMeta.bg} ${catMeta.color}`}>
                        {catMeta.label}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${impactMeta.color}`}>
                        {impactMeta.label}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mt-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                  <svg className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Compatibility */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Compatibility</h2>
          <p className="text-muted-foreground text-center mb-8">macOS Golden Gate requires Apple Silicon. Intel Macs are no longer supported.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {COMPATIBLE_MACS.map((mac, i) => (
              <div key={i} className={`flex items-center justify-between p-3 rounded-lg border border-border/20 ${mac.supported ? "bg-green-500/5" : "bg-red-500/5 opacity-60"}`}>
                <span className="text-sm">{mac.name}</span>
                <span className={`text-xs font-medium ${mac.supported ? "text-green-400" : "text-red-400"}`}>
                  {mac.supported ? "Supported" : "Not supported"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Takeaways</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-amber-400 mb-2">Design Revolution</h3>
              <p className="text-sm text-muted-foreground">Liquid Glass is the biggest visual overhaul since macOS Big Sur. Every pixel has been reconsidered with depth, translucency, and material awareness.</p>
            </div>
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-purple-400 mb-2">AI Everywhere</h3>
              <p className="text-sm text-muted-foreground">Siri AI transforms the Mac from a tool you operate into an assistant that understands your work. Context-aware, private, and deeply integrated.</p>
            </div>
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-green-400 mb-2">Gaming Serious</h3>
              <p className="text-sm text-muted-foreground">Game Mode 2.0 with frame generation and Game Porting Toolkit 3 signals Apple is serious about Mac gaming. Performance is now competitive.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
