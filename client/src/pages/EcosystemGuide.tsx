import { useState } from "react";

// Apple Ecosystem Integration Guide
// How all Apple devices work together — comprehensive coverage

interface EcosystemFeature {
  id: number;
  name: string;
  description: string;
  devices: string[];
  requirements: string[];
  howTo: string[];
  category: "continuity" | "sharing" | "sync" | "handoff" | "security" | "entertainment";
}

const ECOSYSTEM_FEATURES: EcosystemFeature[] = [
  {
    id: 1,
    name: "Universal Clipboard",
    description: "Copy text, images, or files on one device and paste on another instantly.",
    devices: ["iPhone", "iPad", "Mac", "Apple Watch (text only)"],
    requirements: ["Same Apple ID on all devices", "Bluetooth enabled", "Wi-Fi enabled", "Handoff enabled in Settings"],
    howTo: [
      "Copy content on any device as normal (Cmd+C or long-press)",
      "Switch to another device and paste (Cmd+V or long-press)",
      "Content is available for about 2 minutes after copying",
      "Works with text, images, videos, and files up to 50MB",
      "Large files transfer via peer-to-peer Wi-Fi Direct"
    ],
    category: "continuity"
  },
  {
    id: 2,
    name: "AirDrop",
    description: "Send files, photos, links, and more between Apple devices wirelessly with no setup.",
    devices: ["iPhone", "iPad", "Mac", "Apple Vision Pro"],
    requirements: ["Bluetooth enabled", "Wi-Fi enabled", "Devices within 30 feet", "AirDrop set to Contacts Only or Everyone"],
    howTo: [
      "Open Share Sheet on any content",
      "Tap the recipient device or person",
      "Recipient accepts the transfer",
      "Files appear in Downloads (Mac) or relevant app (iOS)",
      "NameDrop: hold two iPhones close to share contact info",
      "Large files (4K video) transfer at up to 1GB/s on newer devices"
    ],
    category: "sharing"
  },
  {
    id: 3,
    name: "Handoff",
    description: "Start work on one device and pick up exactly where you left off on another.",
    devices: ["iPhone", "iPad", "Mac"],
    requirements: ["Same Apple ID", "Bluetooth enabled", "Wi-Fi on same network", "Handoff enabled"],
    howTo: [
      "Open a supported app (Safari, Mail, Pages, Maps, etc.)",
      "An icon appears on other devices (Dock on Mac, App Switcher on iOS)",
      "Click/tap the icon to continue exactly where you left off",
      "Works with most Apple apps and many third-party apps",
      "Safari tabs sync automatically via iCloud Tabs"
    ],
    category: "handoff"
  },
  {
    id: 4,
    name: "iCloud Keychain",
    description: "Passwords, passkeys, credit cards, and Wi-Fi passwords sync across all devices securely.",
    devices: ["iPhone", "iPad", "Mac", "Apple Watch", "Apple Vision Pro", "Windows (via iCloud app)"],
    requirements: ["Same Apple ID", "iCloud Keychain enabled", "Two-factor authentication"],
    howTo: [
      "Enable iCloud Keychain in Settings > Apple ID > iCloud",
      "Passwords auto-fill on all devices in Safari and apps",
      "Passkeys replace passwords for supported websites",
      "Wi-Fi passwords share automatically to nearby Apple devices",
      "Verification codes auto-fill from SMS on any device",
      "Password sharing with trusted contacts via Family Sharing"
    ],
    category: "security"
  },
  {
    id: 5,
    name: "Continuity Camera",
    description: "Use your iPhone as a webcam for your Mac with automatic switching and desk view.",
    devices: ["iPhone (camera)", "Mac (display)"],
    requirements: ["iPhone 8 or later", "macOS Ventura or later", "Same Apple ID", "Both on same Wi-Fi"],
    howTo: [
      "Mount iPhone near Mac display (MagSafe mount recommended)",
      "Open FaceTime, Zoom, or any video app on Mac",
      "Mac automatically detects iPhone as camera source",
      "Center Stage keeps you in frame as you move",
      "Desk View shows overhead view of your desk",
      "Studio Light enhances lighting on your face",
      "Portrait mode blurs background"
    ],
    category: "continuity"
  },
  {
    id: 6,
    name: "Apple Watch Unlock",
    description: "Unlock your Mac, approve Apple Pay, and confirm passwords with Apple Watch.",
    devices: ["Apple Watch", "Mac"],
    requirements: ["Apple Watch Series 3 or later", "macOS Sierra or later", "Same Apple ID", "Passcode on Watch"],
    howTo: [
      "Enable in System Settings > Touch ID & Password > Apple Watch",
      "Wake Mac and it unlocks automatically when Watch is nearby",
      "Double-click Watch side button to approve system prompts",
      "Works for app installations, preference changes, and Apple Pay",
      "Watch must be unlocked and on your wrist"
    ],
    category: "security"
  },
  {
    id: 7,
    name: "Sidecar",
    description: "Use your iPad as a second display or drawing tablet for your Mac.",
    devices: ["iPad", "Mac"],
    requirements: ["iPad with Apple Pencil support", "macOS Catalina or later", "Same Apple ID", "Both on same Wi-Fi or USB"],
    howTo: [
      "Click Display menu in Control Center on Mac",
      "Select your iPad from the list",
      "iPad becomes a second display (extend or mirror)",
      "Use Apple Pencil for precise drawing in Mac apps",
      "Touch Bar appears on iPad if Mac lacks one",
      "Sidebar shows modifier keys for keyboard shortcuts",
      "Works wirelessly up to 10 meters away"
    ],
    category: "continuity"
  },
  {
    id: 8,
    name: "SharePlay",
    description: "Watch movies, listen to music, or share your screen with friends during FaceTime.",
    devices: ["iPhone", "iPad", "Mac", "Apple TV"],
    requirements: ["FaceTime call active", "Supported app (Apple TV+, Music, Disney+, etc.)", "All participants need the app"],
    howTo: [
      "Start a FaceTime call",
      "Open a supported app and play content",
      "SharePlay prompt appears — tap Share",
      "All participants see synced playback with shared controls",
      "Screen sharing: share your entire screen or a specific app",
      "Works with Apple TV: start on iPhone, play on TV"
    ],
    category: "entertainment"
  },
  {
    id: 9,
    name: "Find My Network",
    description: "Locate all your Apple devices, AirTags, and friends on a map — even when offline.",
    devices: ["iPhone", "iPad", "Mac", "Apple Watch", "AirPods", "AirTag"],
    requirements: ["Apple ID signed in", "Find My enabled", "Location Services on"],
    howTo: [
      "Open Find My app on any device",
      "See all devices on a map with last known location",
      "Play sound on missing devices (even AirPods in case)",
      "Separation Alerts notify when you leave a device behind",
      "Mark as Lost to lock device and display contact info",
      "Offline finding uses Bluetooth mesh of all Apple devices",
      "Precision Finding with UWB on iPhone 11+ and AirTag"
    ],
    category: "security"
  },
  {
    id: 10,
    name: "Universal Control",
    description: "Use one keyboard and mouse across multiple Macs and iPads seamlessly.",
    devices: ["Mac", "iPad"],
    requirements: ["macOS Monterey or later", "iPadOS 15 or later", "Same Apple ID", "Devices within 30 feet"],
    howTo: [
      "Enable in System Settings > Displays > Advanced",
      "Move cursor to edge of Mac screen toward iPad",
      "Cursor appears on iPad — now controlling it",
      "Drag and drop files between devices",
      "Type on iPad using Mac keyboard",
      "Works with up to 3 devices simultaneously",
      "Arrange device positions in Display settings"
    ],
    category: "continuity"
  },
  {
    id: 11,
    name: "iCloud Photo Library",
    description: "All photos and videos sync across every device with full-resolution originals available on demand.",
    devices: ["iPhone", "iPad", "Mac", "Apple TV", "Windows", "Web"],
    requirements: ["iCloud storage plan", "iCloud Photos enabled", "Wi-Fi for initial sync"],
    howTo: [
      "Enable in Settings > Photos > iCloud Photos",
      "All photos sync automatically across devices",
      "Optimize Storage keeps thumbnails locally, downloads originals on demand",
      "Edits sync everywhere — edit on iPhone, see changes on Mac",
      "Shared Albums for family and friends",
      "Shared iCloud Photo Library for up to 6 family members",
      "Smart Albums and Memories generated across all photos"
    ],
    category: "sync"
  },
  {
    id: 12,
    name: "Apple Music Sync",
    description: "Your music library, playlists, and listening history sync across all devices.",
    devices: ["iPhone", "iPad", "Mac", "Apple Watch", "Apple TV", "HomePod", "Web"],
    requirements: ["Apple Music subscription", "Sync Library enabled"],
    howTo: [
      "Enable Sync Library in Music settings on each device",
      "All playlists, albums, and songs available everywhere",
      "Download music for offline listening on any device",
      "Listening history and recommendations personalized across devices",
      "Handoff music between devices (AirPlay or automatic)",
      "Ask Siri on any device to play your music",
      "Spatial Audio with head tracking on AirPods"
    ],
    category: "entertainment"
  },
  {
    id: 13,
    name: "Focus Mode Sync",
    description: "Set a Focus on one device and it activates across all your devices automatically.",
    devices: ["iPhone", "iPad", "Mac", "Apple Watch"],
    requirements: ["Same Apple ID", "Share Across Devices enabled in Focus settings"],
    howTo: [
      "Create Focus modes in Settings > Focus",
      "Enable Share Across Devices toggle",
      "Activating Work Focus on Mac silences iPhone too",
      "Customize which apps and people can notify per Focus",
      "Schedule Focus modes by time, location, or app",
      "Focus Filters hide irrelevant content in apps",
      "Lock Screen ties to Focus mode on iPhone"
    ],
    category: "sync"
  },
  {
    id: 14,
    name: "Instant Hotspot",
    description: "Your Mac and iPad automatically connect to your iPhone hotspot without any setup.",
    devices: ["iPhone (hotspot)", "Mac", "iPad"],
    requirements: ["Same Apple ID", "Bluetooth enabled", "Cellular data plan"],
    howTo: [
      "On Mac/iPad, click Wi-Fi menu",
      "Your iPhone appears under Personal Hotspot",
      "Click to connect — no password needed",
      "iPhone hotspot activates automatically",
      "Signal strength and battery shown in menu bar",
      "Disconnects automatically when not in use to save battery"
    ],
    category: "continuity"
  },
  {
    id: 15,
    name: "Apple Pay Across Devices",
    description: "Pay in stores with iPhone/Watch, online with Mac/iPad, and in apps on any device.",
    devices: ["iPhone", "Apple Watch", "iPad", "Mac"],
    requirements: ["Supported bank/card", "Face ID, Touch ID, or passcode", "Cards added to Wallet"],
    howTo: [
      "Add cards in Wallet app or System Settings",
      "In-store: double-click Watch side button or hold iPhone near terminal",
      "Online: click Apple Pay button, authenticate with Face ID/Touch ID",
      "Mac without Touch ID: approve on iPhone or Apple Watch",
      "Apple Cash for peer-to-peer payments in Messages",
      "Transaction history syncs across all devices"
    ],
    category: "security"
  },
];

const CATEGORY_INFO: Record<string, { label: string; icon: string; color: string }> = {
  continuity: { label: "Continuity", icon: "🔗", color: "text-blue-400" },
  sharing: { label: "Sharing", icon: "📤", color: "text-green-400" },
  sync: { label: "Sync", icon: "🔄", color: "text-purple-400" },
  handoff: { label: "Handoff", icon: "🤝", color: "text-orange-400" },
  security: { label: "Security", icon: "🔒", color: "text-red-400" },
  entertainment: { label: "Entertainment", icon: "🎬", color: "text-pink-400" },
};

export default function EcosystemGuide() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = ECOSYSTEM_FEATURES.filter(f => {
    const matchesCategory = activeCategory === "all" || f.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/3 to-transparent" />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">The Complete Guide</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Apple Ecosystem</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            How all your Apple devices work together seamlessly. {ECOSYSTEM_FEATURES.length} features explained 
            with setup guides, requirements, and pro tips.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
            <span>{ECOSYSTEM_FEATURES.length} features</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>6 categories</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>Step-by-step guides</span>
          </div>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="py-4 px-4 border-y border-border/30 sticky top-[44px] z-20 bg-background/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto">
          <input
            type="text"
            placeholder="Search ecosystem features..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full mb-3 px-4 py-2 rounded-lg bg-white/5 border border-border/30 text-sm focus:outline-none focus:border-blue-500/50"
          />
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === "all" ? "bg-blue-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
              }`}
            >
              All ({ECOSYSTEM_FEATURES.length})
            </button>
            {Object.entries(CATEGORY_INFO).map(([key, info]) => {
              const count = ECOSYSTEM_FEATURES.filter(f => f.category === key).length;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeCategory === key ? "bg-blue-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
                  }`}
                >
                  {info.icon} {info.label} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-3">
          {filtered.map(feature => {
            const isExpanded = expandedId === feature.id;
            const catInfo = CATEGORY_INFO[feature.category];
            return (
              <div
                key={feature.id}
                className="rounded-xl border border-border/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden"
              >
                <div
                  className="p-5 cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : feature.id)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs ${catInfo.color}`}>{catInfo.icon} {catInfo.label}</span>
                      </div>
                      <h3 className="text-lg font-bold">{feature.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {feature.devices.map(d => (
                          <span key={d} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground border border-border/30">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                    <svg className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-border/20 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-blue-400">Requirements</h4>
                        <ul className="space-y-1.5">
                          {feature.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-blue-400 mt-0.5">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-green-400">How to Use</h4>
                        <ol className="space-y-1.5">
                          {feature.howTo.map((step, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-green-400 font-mono text-xs mt-0.5">{i + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">The Ecosystem Advantage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
              <p className="text-3xl font-bold text-blue-400">{ECOSYSTEM_FEATURES.length}</p>
              <p className="text-xs text-muted-foreground mt-1">Integration Features</p>
            </div>
            <div className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
              <p className="text-3xl font-bold text-purple-400">7</p>
              <p className="text-xs text-muted-foreground mt-1">Device Types</p>
            </div>
            <div className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
              <p className="text-3xl font-bold text-green-400">0</p>
              <p className="text-xs text-muted-foreground mt-1">Setup Required</p>
            </div>
            <div className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
              <p className="text-3xl font-bold text-orange-400">2B+</p>
              <p className="text-xs text-muted-foreground mt-1">Active Devices</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
