import { useState } from "react";

// Comprehensive Apple Accessories Guide — MagSafe, AirPods, Cables, Cases, Chargers
// Covers every major accessory category with recommendations and compatibility info

interface Accessory {
  id: number;
  name: string;
  category: "audio" | "charging" | "cases" | "input" | "display" | "storage" | "fitness" | "creative";
  subcategory: string;
  price: string;
  rating: number;
  compatibility: string[];
  features: string[];
  prosAndCons: { pros: string[]; cons: string[] };
  bestFor: string;
  released: string;
}

const ACCESSORIES: Accessory[] = [
  {
    id: 1,
    name: "AirPods Pro 2 (USB-C)",
    category: "audio",
    subcategory: "Earbuds",
    price: "$249",
    rating: 4.8,
    compatibility: ["iPhone 7+", "iPad", "Mac", "Apple Watch", "Apple TV"],
    features: ["Active Noise Cancellation", "Adaptive Transparency", "Personalized Spatial Audio", "Conversation Awareness", "USB-C charging case with speaker", "IP54 dust/water resistance", "Up to 6 hours listening (30 with case)", "Hearing test & hearing aid features"],
    prosAndCons: { pros: ["Best-in-class ANC for earbuds", "Seamless Apple ecosystem integration", "Hearing health features", "Find My with precision finding"], cons: ["No lossless audio support", "Silicone tips may not fit all ears", "Premium price for earbuds"] },
    bestFor: "Daily commuters and Apple ecosystem users who want the best wireless earbuds",
    released: "September 2023"
  },
  {
    id: 2,
    name: "AirPods Max (USB-C)",
    category: "audio",
    subcategory: "Over-ear Headphones",
    price: "$549",
    rating: 4.5,
    compatibility: ["iPhone", "iPad", "Mac", "Apple Watch", "Apple TV"],
    features: ["Computational Audio with H2 chip", "Active Noise Cancellation", "Spatial Audio with head tracking", "Digital Crown for volume", "Aluminum and stainless steel build", "20 hours battery life", "USB-C charging", "9 microphones total"],
    prosAndCons: { pros: ["Exceptional build quality", "Best spatial audio experience", "Comfortable for long sessions", "Premium materials"], cons: ["$549 is very expensive", "No power button (only Smart Case)", "Heavy at 384g", "No aptX or LDAC codec support"] },
    bestFor: "Audiophiles and professionals who want premium Apple over-ear headphones",
    released: "September 2024"
  },
  {
    id: 3,
    name: "AirPods 4 (with ANC)",
    category: "audio",
    subcategory: "Earbuds",
    price: "$179",
    rating: 4.6,
    compatibility: ["iPhone 7+", "iPad", "Mac", "Apple Watch", "Apple TV"],
    features: ["Active Noise Cancellation (open-ear design)", "Adaptive Audio", "Personalized Spatial Audio", "H2 chip", "USB-C case", "IP54 rating", "30 hours total with case", "Voice Isolation for calls"],
    prosAndCons: { pros: ["ANC without silicone tips", "More comfortable than Pro for some", "Great call quality", "Affordable entry to ANC"], cons: ["Less isolation than Pro 2", "No ear tip options for fit", "No wireless charging on base model"] },
    bestFor: "People who prefer open-ear design but still want noise cancellation",
    released: "September 2024"
  },
  {
    id: 4,
    name: "MagSafe Charger",
    category: "charging",
    subcategory: "Wireless Charging",
    price: "$39",
    rating: 4.3,
    compatibility: ["iPhone 12+", "AirPods Pro 2", "AirPods 4"],
    features: ["15W wireless charging (MagSafe)", "Perfect alignment every time", "Qi2 compatible", "1m or 2m cable options", "Works through thin cases", "Animation on iPhone when attached"],
    prosAndCons: { pros: ["Perfect alignment via magnets", "Faster than standard Qi", "Satisfying snap-on feel", "Works with MagSafe cases"], cons: ["Requires 20W+ adapter (not included)", "Slower than wired charging", "Only 7.5W on non-MagSafe iPhones"] },
    bestFor: "iPhone 12+ users who want convenient bedside or desk charging",
    released: "2024 (updated)"
  },
  {
    id: 5,
    name: "MagSafe Duo Charger",
    category: "charging",
    subcategory: "Multi-device Charging",
    price: "$129",
    rating: 4.0,
    compatibility: ["iPhone 12+", "Apple Watch", "AirPods"],
    features: ["Charges iPhone and Apple Watch simultaneously", "Folds flat for travel", "MagSafe alignment for iPhone", "Apple Watch fast charging supported", "Leather-like exterior"],
    prosAndCons: { pros: ["Compact travel solution", "Charges two devices at once", "Premium build quality", "Folds flat"], cons: ["Expensive at $129", "No AirPods pad (uses Watch side)", "Still needs a power adapter", "iPhone charges at 14W max"] },
    bestFor: "Travelers who need to charge iPhone and Apple Watch with one accessory",
    released: "2024"
  },
  {
    id: 6,
    name: "Apple Pencil Pro",
    category: "creative",
    subcategory: "Stylus",
    price: "$129",
    rating: 4.9,
    compatibility: ["iPad Pro M4", "iPad Air M2+"],
    features: ["Squeeze gesture for tool palette", "Barrel Roll for precise brush angles", "Haptic feedback", "Find My support", "Hover detection", "Tilt and pressure sensitivity", "Magnetic attachment and charging", "Custom engraving available"],
    prosAndCons: { pros: ["Best stylus experience on any tablet", "Squeeze gesture is game-changing", "Barrel Roll adds new creative dimension", "Find My prevents losing it"], cons: ["Only works with newest iPads", "Expensive for a stylus", "Easy to lose despite Find My"] },
    bestFor: "Digital artists, designers, and note-takers with M4 iPad Pro or M2 iPad Air",
    released: "May 2024"
  },
  {
    id: 7,
    name: "Magic Keyboard for iPad Pro",
    category: "input",
    subcategory: "Keyboard",
    price: "$299–$349",
    rating: 4.7,
    compatibility: ["iPad Pro M4 (11\" and 13\")"],
    features: ["Full-size keyboard with function row", "Large trackpad with haptic feedback", "Aluminum palm rest", "USB-C passthrough charging", "Floating cantilever design", "Adjustable viewing angles", "Backlit keys"],
    prosAndCons: { pros: ["Transforms iPad into laptop replacement", "Excellent typing experience", "Haptic trackpad is best-in-class", "Premium aluminum build"], cons: ["$299-$349 is very expensive", "Adds significant weight", "Only works with specific iPad Pro models", "No lap-friendly design"] },
    bestFor: "iPad Pro users who want a laptop-like typing and trackpad experience",
    released: "May 2024"
  },
  {
    id: 8,
    name: "Apple Watch Ultra 2 Band — Alpine Loop",
    category: "fitness",
    subcategory: "Watch Band",
    price: "$99",
    rating: 4.6,
    compatibility: ["Apple Watch Ultra", "Apple Watch Ultra 2", "49mm cases"],
    features: ["Titanium G-hook closure", "Two-layer woven textile", "Corrosion-resistant hardware", "Designed for outdoor activities", "Integrates with case design", "Multiple color options"],
    prosAndCons: { pros: ["Extremely durable for outdoor use", "Secure titanium hook closure", "Comfortable for extended wear", "Looks great with Ultra design"], cons: ["$99 for a watch band", "Only fits 49mm Ultra cases", "Can be tricky to adjust quickly"] },
    bestFor: "Apple Watch Ultra owners who do hiking, climbing, or outdoor sports",
    released: "2023"
  },
  {
    id: 9,
    name: "Studio Display",
    category: "display",
    subcategory: "Monitor",
    price: "$1,599",
    rating: 4.4,
    compatibility: ["Any Mac with Thunderbolt 3/4", "iPad Pro/Air with USB-C"],
    features: ["27-inch 5K Retina display", "600 nits brightness", "P3 wide color gamut", "12MP Ultra Wide camera with Center Stage", "Six-speaker sound system with Spatial Audio", "Three USB-C ports + Thunderbolt", "A13 Bionic chip for camera processing", "True Tone"],
    prosAndCons: { pros: ["Stunning 5K image quality", "Excellent built-in speakers", "Center Stage camera for video calls", "One-cable connection to Mac"], cons: ["$1,599 starting price", "No HDR or local dimming", "Non-height-adjustable stand costs $400 extra", "Webcam quality initially poor (improved via updates)"] },
    bestFor: "Mac users who want a premium Apple-designed display with built-in camera and speakers",
    released: "March 2022"
  },
  {
    id: 10,
    name: "AirTag",
    category: "storage",
    subcategory: "Tracker",
    price: "$29 (1-pack) / $99 (4-pack)",
    rating: 4.7,
    compatibility: ["iPhone 11+ (Precision Finding)", "iPhone (Find My network)"],
    features: ["Precision Finding with Ultra Wideband", "Find My network (billions of devices)", "Replaceable CR2032 battery (1 year)", "IP67 water and dust resistance", "Built-in speaker for audio ping", "NFC tap for Lost Mode", "Privacy features prevent unwanted tracking", "Free engraving"],
    prosAndCons: { pros: ["Incredibly accurate with Precision Finding", "Massive Find My network", "Cheap replaceable battery", "Privacy-focused anti-stalking features"], cons: ["No hole for keyring (need holder)", "Android users can't use full features", "Limited to Apple ecosystem", "Occasional false 'unknown AirTag' alerts"] },
    bestFor: "Anyone who loses keys, wallets, bags, or luggage regularly",
    released: "2021 (still current)"
  },
  {
    id: 11,
    name: "Thunderbolt 4 Pro Cable (1.8m)",
    category: "storage",
    subcategory: "Cable",
    price: "$69",
    rating: 4.2,
    compatibility: ["Any Thunderbolt 3/4 device", "USB-C devices"],
    features: ["40Gb/s Thunderbolt 4 data transfer", "100W Power Delivery charging", "Supports up to 6K display output", "Braided design for durability", "1.8m length", "Backward compatible with USB-C"],
    prosAndCons: { pros: ["Full 40Gb/s speed", "One cable for data + power + display", "Durable braided construction", "1.8m is practical length"], cons: ["$69 for a cable is steep", "Looks identical to cheaper USB-C cables", "Overkill for basic charging"] },
    bestFor: "Pro users connecting external drives, displays, or docks at full speed",
    released: "2022"
  },
  {
    id: 12,
    name: "HomePod (2nd Gen)",
    category: "audio",
    subcategory: "Smart Speaker",
    price: "$299",
    rating: 4.3,
    compatibility: ["iPhone", "iPad", "Mac", "Apple TV", "HomeKit devices"],
    features: ["Room-sensing spatial audio", "S7 chip with computational audio", "Temperature and humidity sensor", "Sound Recognition (smoke/CO alarms)", "Intercom between rooms", "Stereo pair support", "Thread border router for smart home", "Dolby Atmos support"],
    prosAndCons: { pros: ["Excellent sound quality for size", "Deep HomeKit integration", "Temperature/humidity sensing", "Stereo pairing sounds incredible"], cons: ["$299 is expensive vs competitors", "Siri still lags behind Alexa/Google", "Limited music service support", "No Bluetooth audio input"] },
    bestFor: "Apple smart home enthusiasts who want premium sound and HomeKit hub",
    released: "January 2023"
  },
];

const CATEGORY_INFO: Record<string, { label: string; icon: string; color: string }> = {
  audio: { label: "Audio", icon: "🎧", color: "from-purple-500 to-indigo-500" },
  charging: { label: "Charging", icon: "⚡", color: "from-green-500 to-emerald-500" },
  cases: { label: "Cases", icon: "🛡️", color: "from-blue-500 to-cyan-500" },
  input: { label: "Input", icon: "⌨️", color: "from-orange-500 to-amber-500" },
  display: { label: "Displays", icon: "🖥️", color: "from-pink-500 to-rose-500" },
  storage: { label: "Accessories", icon: "🏷️", color: "from-teal-500 to-cyan-500" },
  fitness: { label: "Fitness", icon: "💪", color: "from-red-500 to-orange-500" },
  creative: { label: "Creative", icon: "🎨", color: "from-violet-500 to-purple-500" },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <svg key={star} className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? "text-yellow-400" : "text-gray-600"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-muted-foreground ml-1">{rating}</span>
    </div>
  );
}

export default function Accessories() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"rating" | "price" | "name">("rating");

  const filtered = selectedCategory === "all"
    ? ACCESSORIES
    : ACCESSORIES.filter(a => a.category === selectedCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "price") return parseFloat(a.price.replace(/[^0-9.]/g, "")) - parseFloat(b.price.replace(/[^0-9.]/g, ""));
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">The Complete Guide</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Apple <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Accessories</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Every official Apple accessory reviewed — AirPods, MagSafe, Apple Pencil, displays, and more. 
          Find the perfect companion for your devices.
        </p>
      </section>

      {/* Category Cards */}
      <section className="py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`p-4 rounded-xl text-center transition-all ${
              selectedCategory === "all" ? "bg-white/10 border border-white/20" : "bg-white/[0.02] border border-border/30 hover:bg-white/5"
            }`}
          >
            <span className="text-2xl">🍎</span>
            <p className="text-xs font-medium mt-1">All</p>
          </button>
          {Object.entries(CATEGORY_INFO).map(([key, info]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`p-4 rounded-xl text-center transition-all ${
                selectedCategory === key ? "bg-white/10 border border-white/20" : "bg-white/[0.02] border border-border/30 hover:bg-white/5"
              }`}
            >
              <span className="text-2xl">{info.icon}</span>
              <p className="text-xs font-medium mt-1">{info.label}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Sort */}
      <section className="py-3 px-4 border-b border-border/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{sorted.length} accessories</p>
          <div className="flex gap-2">
            {(["rating", "price", "name"] as const).map(s => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                className={`px-3 py-1 rounded-full text-xs transition-all ${
                  sortBy === s ? "bg-white/10 text-white" : "text-muted-foreground hover:text-white"
                }`}
              >
                {s === "rating" ? "Top Rated" : s === "price" ? "Price" : "A-Z"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories List */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-6xl mx-auto space-y-4">
          {sorted.map(acc => {
            const isExpanded = expandedItem === acc.id;
            const catInfo = CATEGORY_INFO[acc.category];
            return (
              <div
                key={acc.id}
                className="p-5 rounded-xl border border-border/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer"
                onClick={() => setExpandedItem(isExpanded ? null : acc.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">{catInfo.icon}</span>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{acc.subcategory}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{acc.name}</h3>
                    <div className="flex items-center gap-3">
                      <StarRating rating={acc.rating} />
                      <span className="text-sm font-semibold text-green-400">{acc.price}</span>
                      <span className="text-[10px] text-muted-foreground">{acc.released}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-lg bg-gradient-to-r ${catInfo.color} text-white text-xs font-medium`}>
                    {catInfo.label}
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-5 pt-5 border-t border-border/30 space-y-4">
                    {/* Best For */}
                    <div>
                      <p className="text-xs font-medium text-blue-400 mb-1">Best For</p>
                      <p className="text-sm text-muted-foreground">{acc.bestFor}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <p className="text-xs font-medium text-green-400 mb-2">Key Features</p>
                      <div className="flex flex-wrap gap-1.5">
                        {acc.features.map((f, i) => (
                          <span key={i} className="text-[11px] px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-border/30">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pros & Cons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-medium text-green-400 mb-2">Pros</p>
                        <ul className="space-y-1">
                          {acc.prosAndCons.pros.map((p, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <span className="text-green-400 mt-0.5">+</span> {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-red-400 mb-2">Cons</p>
                        <ul className="space-y-1">
                          {acc.prosAndCons.cons.map((c, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <span className="text-red-400 mt-0.5">−</span> {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Compatibility */}
                    <div>
                      <p className="text-xs font-medium text-purple-400 mb-2">Compatible With</p>
                      <div className="flex flex-wrap gap-1.5">
                        {acc.compatibility.map((c, i) => (
                          <span key={i} className="text-[11px] px-2 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
