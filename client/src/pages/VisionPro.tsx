import { useState } from "react";

// Apple Vision Pro — Complete guide to Apple's spatial computing platform

const specs = {
  display: "Micro-OLED, 23 million pixels total (more than a 4K TV for each eye)",
  chip: "M5 + R2 (spatial processing coprocessor)",
  tracking: "12 cameras, 5 sensors, 6 microphones, LiDAR",
  audio: "Spatial Audio with personalized HRTF, dual-driver pods",
  battery: "External battery pack, 2.5 hours general use",
  weight: "600-650g (varies by light seal and headband)",
  storage: "256GB / 512GB / 1TB",
  connectivity: "Wi-Fi 6E, Bluetooth 5.3, USB-C (Thunderbolt)",
  os: "visionOS 3",
  fov: "~100° horizontal, ~90° vertical",
  passthrough: "Full-color, high-resolution stereoscopic passthrough",
  eyeTracking: "High-speed IR cameras for precise eye tracking and Optic ID",
};

const useCases = [
  {
    title: "Productivity",
    description: "Replace your multi-monitor setup with infinite virtual screens in your physical space.",
    features: [
      "Unlimited virtual displays at any size",
      "Mac Virtual Display integration",
      "Spatial FaceTime with life-size participants",
      "3D object manipulation for designers",
      "Immersive focus environments",
    ]
  },
  {
    title: "Entertainment",
    description: "Watch movies on a 100-foot virtual screen, play immersive games, and experience spatial photos.",
    features: [
      "Apple Immersive Video (180° 8K 3D)",
      "Spatial Photos and Videos from iPhone",
      "Disney+, Apple TV+ in spatial format",
      "Apple Arcade spatial games",
      "Virtual cinema environments",
    ]
  },
  {
    title: "Communication",
    description: "FaceTime calls feel like the person is in the room with you. Digital Personas represent you naturally.",
    features: [
      "Digital Persona 2.0 with full body",
      "SharePlay in spatial environments",
      "Spatial screen sharing",
      "Multi-person collaboration spaces",
      "Gesture-based reactions",
    ]
  },
  {
    title: "Development",
    description: "Build spatial apps with Xcode, Reality Composer Pro, and the new visionOS SDK.",
    features: [
      "RealityKit 5 with physics simulation",
      "SwiftUI for spatial interfaces",
      "Hand and eye tracking APIs",
      "Room understanding and mesh scanning",
      "Shared spatial anchors for multiplayer",
    ]
  },
  {
    title: "Health & Wellness",
    description: "Guided meditation, posture tracking, and eye health monitoring built into the platform.",
    features: [
      "Mindfulness environments",
      "Eye strain detection and break reminders",
      "Posture monitoring via head tracking",
      "Breathing exercises with spatial visuals",
      "Sleep environment simulation",
    ]
  },
  {
    title: "Education",
    description: "Learn with 3D models, virtual labs, and immersive historical recreations.",
    features: [
      "3D anatomy exploration",
      "Virtual chemistry labs",
      "Historical site recreations",
      "Language learning with spatial context",
      "Interactive textbook overlays",
    ]
  },
];

const accessories = [
  { name: "Travel Case", price: 199, description: "Hard-shell protective case for travel" },
  { name: "Extra Battery Pack", price: 199, description: "Additional 2.5-hour battery" },
  { name: "ZEISS Optical Inserts", price: 99, description: "Prescription lens inserts (readers or prescription)" },
  { name: "Dual Loop Band", price: 99, description: "Alternative headband for extended comfort" },
  { name: "Solo Knit Band", price: 99, description: "Breathable knit band for lighter fit" },
  { name: "Polishing Cloth", price: 19, description: "Microfiber cloth for lens cleaning" },
];

const visionOSFeatures = [
  { version: "visionOS 1.0", date: "Feb 2024", highlights: ["Spatial computing foundation", "Eye and hand tracking", "Mac Virtual Display", "Environments"] },
  { version: "visionOS 2.0", date: "Sep 2024", highlights: ["Spatial Photos from 2D", "Train/Plane travel mode", "Mouse support", "Ultrawide Mac display"] },
  { version: "visionOS 3.0", date: "Sep 2025", highlights: ["Digital Persona 2.0", "Spatial FaceTime groups", "Hand gesture shortcuts", "Developer tools expansion"] },
  { version: "visionOS 4.0", date: "Sep 2026", highlights: ["Full body tracking", "Multi-user shared spaces", "Spatial audio zones", "AI scene understanding"] },
];

export default function VisionPro() {
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [showAllSpecs, setShowAllSpecs] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-background to-blue-900/20" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-medium border border-violet-500/20 mb-4">
            Apple Vision Pro
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            The era of <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">spatial computing.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Apple Vision Pro seamlessly blends digital content with your physical space. 
            Navigate with your eyes, select with your hands, and control with your voice.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-border/30">Starting at $3,499</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-border/30">M5 + R2 chips</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-border/30">visionOS 4</span>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {Object.entries(specs).slice(0, showAllSpecs ? undefined : 6).map(([key, value]) => (
              <div key={key} className="p-4 rounded-xl bg-white/[0.02] border border-border/30">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
                <p className="text-sm font-medium">{value}</p>
              </div>
            ))}
          </div>
          {!showAllSpecs && (
            <button
              onClick={() => setShowAllSpecs(true)}
              className="mt-4 mx-auto block text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              Show all specs →
            </button>
          )}
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">What Can You Do With It?</h2>
          <p className="text-center text-muted-foreground mb-8">Vision Pro adapts to how you work, play, and connect</p>
          
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {useCases.map((uc, i) => (
              <button
                key={uc.title}
                onClick={() => setActiveUseCase(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeUseCase === i
                    ? "bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/30"
                }`}
              >
                {uc.title}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl border border-border/30 bg-white/[0.02]">
              <h3 className="text-xl font-bold mb-2">{useCases[activeUseCase].title}</h3>
              <p className="text-muted-foreground mb-4">{useCases[activeUseCase].description}</p>
              <ul className="space-y-2">
                {useCases[activeUseCase].features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* visionOS History */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">visionOS Evolution</h2>
          <div className="space-y-4">
            {visionOSFeatures.map((version) => (
              <div key={version.version} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">{version.version}</h3>
                  <span className="text-xs text-muted-foreground">{version.date}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {version.highlights.map((h, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-violet-500/10 text-violet-300">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Accessories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {accessories.map(acc => (
              <div key={acc.name} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                <h3 className="font-bold text-sm">{acc.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{acc.description}</p>
                <p className="text-sm font-bold text-violet-400 mt-2">${acc.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              { q: "Can I wear glasses with Vision Pro?", a: "No, but you can order ZEISS Optical Inserts ($99-$149) that magnetically attach inside the headset for your prescription." },
              { q: "How long does the battery last?", a: "About 2.5 hours for general use, or 2 hours for video playback. You can use it plugged in for unlimited use." },
              { q: "Can I use it on a plane?", a: "Yes! visionOS 2+ includes a Travel Mode that adjusts tracking for moving environments like planes and trains." },
              { q: "Does it work with my Mac?", a: "Yes — Mac Virtual Display lets you see your Mac screen as a massive virtual display in your space. Works wirelessly." },
              { q: "Can other people see what I'm looking at?", a: "No. The external EyeSight display shows your eyes to others but doesn't reveal your screen content." },
              { q: "Is it heavy?", a: "At 600-650g it's heavier than most headsets. The Dual Loop Band distributes weight better for extended sessions." },
            ].map((item, i) => (
              <details key={i} className="group p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                <summary className="font-medium text-sm cursor-pointer list-none flex items-center justify-between">
                  {item.q}
                  <svg className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-sm text-muted-foreground mt-2">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
