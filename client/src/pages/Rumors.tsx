import { useState } from "react";

// Apple Rumors & Leaks — Upcoming Products and Features
// Tracked from reliable sources with confidence ratings

interface Rumor {
  id: number;
  title: string;
  description: string;
  source: string;
  confidence: "confirmed" | "very-likely" | "likely" | "possible" | "unlikely";
  expectedDate: string;
  category: "iphone" | "mac" | "ipad" | "watch" | "software" | "services" | "other";
  details: string[];
}

const RUMORS: Rumor[] = [
  {
    id: 1,
    title: "iPhone 17 Air — Thinnest iPhone Ever",
    description: "Ultra-thin iPhone replacing the Plus model. 5.5mm thick with single camera and A19 chip.",
    source: "Mark Gurman (Bloomberg), Ming-Chi Kuo",
    confidence: "confirmed",
    expectedDate: "September 2026",
    category: "iphone",
    details: [
      "5.5mm thickness (thinner than iPad Pro)",
      "6.6-inch OLED display",
      "Single 48MP rear camera (no ultra-wide)",
      "A19 chip (not Pro)",
      "8GB RAM for Apple Intelligence",
      "Dynamic Island",
      "Apple-designed 5G modem (first iPhone with it)",
      "Aluminum frame, no titanium",
      "Starting at $899 (replacing iPhone Plus line)",
      "Available in: Starlight, Midnight, Blue, Green"
    ]
  },
  {
    id: 2,
    title: "iPhone 18 Pro — Under-Display Face ID",
    description: "First iPhone with no notch or Dynamic Island. All-screen design with under-display sensors.",
    source: "Ross Young (DSCC), The Elec",
    confidence: "likely",
    expectedDate: "September 2027",
    category: "iphone",
    details: [
      "Under-display Face ID (no notch/island)",
      "Under-display front camera",
      "ProMotion LTPO 120Hz",
      "A20 Pro chip (3nm second-gen)",
      "Periscope telephoto on all Pro models",
      "48MP ultra-wide camera",
      "Wi-Fi 7",
      "Solid-state buttons (haptic feedback)",
      "USB-C with Thunderbolt 5 speeds",
      "Possible foldable variant alongside"
    ]
  },
  {
    id: 3,
    title: "MacBook Air M5 — Late 2026",
    description: "Next-gen MacBook Air with M5 chip, brighter display, and improved webcam.",
    source: "Mark Gurman (Bloomberg)",
    confidence: "very-likely",
    expectedDate: "Q1 2027",
    category: "mac",
    details: [
      "M5 chip (3nm, 10-core CPU, 10-core GPU)",
      "24GB unified memory base (up from 16GB)",
      "Brighter display (600 nits, up from 500)",
      "12MP Center Stage webcam",
      "Thinner bezels",
      "Same 13.6\" and 15.3\" sizes",
      "Starting at $1,199",
      "Midnight color with improved anodization (less fingerprints)",
      "Wi-Fi 7 support",
      "Thunderbolt 4 ports"
    ]
  },
  {
    id: 4,
    title: "Apple Foldable — 2027/2028",
    description: "Apple's first foldable device. Could be an iPhone, iPad, or hybrid form factor.",
    source: "Ming-Chi Kuo, Jeff Pu (Haitong), The Information",
    confidence: "possible",
    expectedDate: "2027-2028",
    category: "other",
    details: [
      "Book-fold design (like Galaxy Z Fold)",
      "7.5-8 inch unfolded display",
      "Crease-free display (Apple's key differentiator)",
      "Custom hinge mechanism (100+ patents filed)",
      "Runs iOS (not iPadOS)",
      "Compatible with Apple Pencil when unfolded",
      "A-series Pro chip",
      "Starting at $1,799-$2,499 estimated",
      "May launch alongside regular iPhone 19",
      "Samsung Display and LG Display supplying panels"
    ]
  },
  {
    id: 5,
    title: "Apple Watch Ultra 3 — Satellite Messaging",
    description: "Next Ultra with two-way satellite messaging, blood pressure monitoring, and micro-LED display.",
    source: "Mark Gurman, Jeff Pu",
    confidence: "very-likely",
    expectedDate: "September 2026",
    category: "watch",
    details: [
      "Two-way satellite messaging (send and receive)",
      "Blood pressure monitoring (trend-based, not exact readings)",
      "Micro-LED display (brighter, more efficient)",
      "S10 chip with neural engine",
      "Longer battery life (48+ hours)",
      "New titanium finish options",
      "Sleep apnea detection improvements",
      "Body temperature continuous monitoring",
      "Improved GPS accuracy",
      "Starting at $799"
    ]
  },
  {
    id: 6,
    title: "iPad Pro M5 with OLED — Spring 2027",
    description: "Next iPad Pro with M5 chip, tandem OLED improvements, and thinner design.",
    source: "Ross Young, Mark Gurman",
    confidence: "likely",
    expectedDate: "Spring 2027",
    category: "ipad",
    details: [
      "M5 chip (massive AI performance gains)",
      "Improved tandem OLED (brighter, more efficient)",
      "Thinner than current model (sub-5mm)",
      "Magic Keyboard with larger trackpad",
      "32GB RAM base model",
      "Thunderbolt 5 port",
      "Center Stage with 12MP ultra-wide",
      "Apple Pencil 3 with squeeze gestures",
      "Starting at $1,099",
      "New nano-texture display option on both sizes"
    ]
  },
  {
    id: 7,
    title: "iOS 28 — Major Home Screen Redesign",
    description: "Biggest home screen change since iOS 14. Customizable layouts, AI-powered app suggestions.",
    source: "Mark Gurman (Power On newsletter)",
    confidence: "possible",
    expectedDate: "June 2028 (WWDC)",
    category: "software",
    details: [
      "Completely redesigned home screen layout engine",
      "AI-powered app arrangement (learns your habits)",
      "Interactive widgets that expand inline",
      "New app library with smart categories",
      "Customizable lock screen actions (beyond shortcuts)",
      "Split-screen multitasking on iPhone Pro Max",
      "Always-on display improvements",
      "New notification system (grouped by priority)",
      "Siri AI deep integration in every app",
      "RCS improvements for Android messaging"
    ]
  },
  {
    id: 8,
    title: "Apple Home Hub — Smart Display",
    description: "Wall-mounted or countertop smart display with FaceTime, HomeKit controls, and Siri AI.",
    source: "Mark Gurman, Wayne Ma (The Information)",
    confidence: "very-likely",
    expectedDate: "Early 2027",
    category: "other",
    details: [
      "6-7 inch touchscreen display",
      "Wall-mountable or countertop stand",
      "FaceTime camera with Center Stage",
      "HomeKit hub (Thread, Matter support)",
      "Siri AI always-listening",
      "Apple Music and Podcasts playback",
      "Intercom between rooms",
      "Smart home dashboard with room controls",
      "Starting at $249-$299",
      "Runs a variant of tvOS/HomePod OS"
    ]
  },
];

const CONFIDENCE_META: Record<string, { label: string; color: string; bg: string }> = {
  confirmed: { label: "Confirmed", color: "text-green-400", bg: "bg-green-500/10" },
  "very-likely": { label: "Very Likely", color: "text-blue-400", bg: "bg-blue-500/10" },
  likely: { label: "Likely", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  possible: { label: "Possible", color: "text-orange-400", bg: "bg-orange-500/10" },
  unlikely: { label: "Unlikely", color: "text-red-400", bg: "bg-red-500/10" },
};

const CATEGORY_META: Record<string, { label: string; color: string }> = {
  iphone: { label: "iPhone", color: "text-blue-400" },
  mac: { label: "Mac", color: "text-gray-400" },
  ipad: { label: "iPad", color: "text-purple-400" },
  watch: { label: "Watch", color: "text-red-400" },
  software: { label: "Software", color: "text-green-400" },
  services: { label: "Services", color: "text-pink-400" },
  other: { label: "Other", color: "text-orange-400" },
};

export default function Rumors() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = filter === "all" ? RUMORS : RUMORS.filter(r => r.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">What's Coming Next</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Rumors & Leaks</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Upcoming Apple products tracked from the most reliable sources. 
            Confidence ratings based on source track record.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 px-4 border-y border-border/30 sticky top-[44px] z-20 bg-background/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              filter === "all" ? "bg-orange-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
            }`}
          >
            All ({RUMORS.length})
          </button>
          {Object.entries(CATEGORY_META).map(([key, meta]) => {
            const count = RUMORS.filter(r => r.category === key).length;
            if (count === 0) return null;
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === key ? "bg-orange-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
                }`}
              >
                {meta.label} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Rumors List */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-3">
          {filtered.map(rumor => {
            const isExpanded = expandedId === rumor.id;
            const confMeta = CONFIDENCE_META[rumor.confidence];
            const catMeta = CATEGORY_META[rumor.category];
            return (
              <div
                key={rumor.id}
                className="rounded-xl border border-border/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden cursor-pointer"
                onClick={() => setExpandedId(isExpanded ? null : rumor.id)}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${confMeta.bg} ${confMeta.color} font-medium`}>
                          {confMeta.label}
                        </span>
                        <span className={`text-[10px] ${catMeta.color}`}>{catMeta.label}</span>
                        <span className="text-[10px] text-muted-foreground">{rumor.expectedDate}</span>
                      </div>
                      <h3 className="text-lg font-bold mt-1">{rumor.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{rumor.description}</p>
                      <p className="text-[10px] text-muted-foreground mt-2 italic">Source: {rumor.source}</p>
                    </div>
                    <svg className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-border/20 pt-4">
                    <h4 className="text-sm font-semibold mb-3 text-orange-400">Reported Details</h4>
                    <ul className="space-y-1.5">
                      {rumor.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 flex-shrink-0" />
                          {d}
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

      {/* Source Reliability */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Source Reliability Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-sm text-green-400 mb-1">Mark Gurman (Bloomberg)</h3>
              <p className="text-xs text-muted-foreground">~95% accuracy. Best source for Apple software and product timelines. Power On newsletter is essential reading.</p>
            </div>
            <div className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-sm text-green-400 mb-1">Ming-Chi Kuo (TF Securities)</h3>
              <p className="text-xs text-muted-foreground">~85% accuracy. Supply chain analyst. Best for hardware specs and component details 6-12 months out.</p>
            </div>
            <div className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-sm text-blue-400 mb-1">Ross Young (DSCC)</h3>
              <p className="text-xs text-muted-foreground">~90% accuracy for display tech. Best source for screen sizes, panel types, and display features.</p>
            </div>
            <div className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-sm text-blue-400 mb-1">Jeff Pu (Haitong)</h3>
              <p className="text-xs text-muted-foreground">~80% accuracy. Supply chain analyst focused on camera and chip details.</p>
            </div>
            <div className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-sm text-yellow-400 mb-1">The Information</h3>
              <p className="text-xs text-muted-foreground">~85% accuracy. Investigative journalism. Best for internal Apple strategy and organizational changes.</p>
            </div>
            <div className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-sm text-yellow-400 mb-1">9to5Mac / MacRumors</h3>
              <p className="text-xs text-muted-foreground">~70% accuracy. Aggregate multiple sources. Good for code leaks found in iOS/macOS betas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
