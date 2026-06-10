import { useState } from "react";

// Apple Gaming — Game Mode, Apple Arcade, Metal, and the gaming ecosystem

const arcadeGames = [
  { title: "Sonic Dream Team", genre: "Platformer", rating: 4.8, description: "3D Sonic platformer exclusive to Apple Arcade" },
  { title: "NBA 2K25 Arcade Edition", genre: "Sports", rating: 4.6, description: "Full NBA experience optimized for mobile" },
  { title: "Stardew Valley+", genre: "Simulation", rating: 4.9, description: "The beloved farming sim, no ads or IAP" },
  { title: "Resident Evil Village", genre: "Horror", rating: 4.7, description: "Full AAA console port running on iPhone 15 Pro+" },
  { title: "Fantasian Neo Dimension", genre: "RPG", rating: 4.8, description: "From the creator of Final Fantasy" },
  { title: "Death Stranding", genre: "Action", rating: 4.5, description: "Hideo Kojima's masterpiece on iPhone/iPad" },
  { title: "Assassin's Creed Mirage", genre: "Action-Adventure", rating: 4.4, description: "Full Ubisoft AAA title on Apple Silicon" },
  { title: "Divinity: Original Sin 2", genre: "RPG", rating: 4.9, description: "Complete CRPG experience on iPad" },
  { title: "Civilization VII", genre: "Strategy", rating: 4.7, description: "Full Civ experience on Mac and iPad" },
  { title: "Alto's Odyssey: The Lost City", genre: "Endless Runner", rating: 4.8, description: "Beautiful snowboarding adventure" },
  { title: "Grindstone+", genre: "Puzzle", rating: 4.7, description: "Addictive color-matching combat puzzle" },
  { title: "Sneaky Sasquatch+", genre: "Adventure", rating: 4.9, description: "Open-world Sasquatch life simulator" },
  { title: "What the Golf?+", genre: "Comedy/Sports", rating: 4.8, description: "The absurdist anti-golf game" },
  { title: "Mini Motorways+", genre: "Strategy", rating: 4.6, description: "Design road networks for growing cities" },
  { title: "Cooking Mama: Cuisine!", genre: "Casual", rating: 4.5, description: "Classic cooking game with no microtransactions" },
];

const metalFeatures = [
  { name: "Metal 3", description: "Apple's low-level GPU API. Comparable to Vulkan/DirectX 12. Powers all graphics on Apple platforms.", version: "2022+" },
  { name: "MetalFX Upscaling", description: "AI-powered temporal upscaling (like DLSS/FSR). Renders at lower resolution, upscales to native quality.", version: "2022+" },
  { name: "Mesh Shaders", description: "Flexible geometry processing pipeline for complex scenes with millions of triangles.", version: "Metal 3" },
  { name: "Ray Tracing", description: "Hardware-accelerated ray tracing on A17 Pro and M-series chips. Reflections, shadows, global illumination.", version: "2023+" },
  { name: "Game Porting Toolkit 2", description: "Translates DirectX 12 to Metal automatically. Run Windows games on Mac with near-native performance.", version: "2024" },
  { name: "Shader Compilation", description: "Ahead-of-time shader compilation eliminates stuttering. No more shader cache building.", version: "Metal 3" },
];

const gameModeFeatures = [
  "Minimizes background activity for consistent frame rates",
  "Reduces audio latency for AirPods (from 100ms to ~48ms)",
  "Doubles Bluetooth polling rate for game controllers (from 11ms to 5.5ms)",
  "Automatically activates during fullscreen games",
  "Works on iPhone, iPad, and Mac",
  "No performance throttling during gameplay",
  "Prioritizes GPU and CPU resources for the game",
  "Reduces notification interruptions",
];

const controllers = [
  { name: "PlayStation DualSense", features: ["Haptic feedback", "Adaptive triggers", "Touchpad", "Motion controls"], price: "$69" },
  { name: "Xbox Wireless Controller", features: ["Share button", "Textured grips", "Bluetooth LE", "USB-C"], price: "$59" },
  { name: "Backbone One", features: ["Lightning/USB-C", "Low latency", "Pass-through charging", "Backbone app"], price: "$99" },
  { name: "Razer Kishi V2", features: ["USB-C direct connect", "Microswitch buttons", "Stream button", "Universal fit"], price: "$99" },
  { name: "SteelSeries Nimbus+", features: ["MFi certified", "50hr battery", "Lightning charging", "L3/R3 clickable sticks"], price: "$69" },
  { name: "8BitDo Ultimate", features: ["Hall effect sticks", "Custom profiles", "2.4GHz + Bluetooth", "Charging dock"], price: "$69" },
];

const chipGaming = [
  { chip: "A18 Pro", gpu: "6-core", performance: "Hardware ray tracing, 8K video decode, MetalFX", games: "All AAA titles (RE Village, Death Stranding, AC Mirage)" },
  { chip: "A18", gpu: "5-core", performance: "Hardware ray tracing, MetalFX upscaling", games: "Most AAA titles at medium-high settings" },
  { chip: "M4 Pro", gpu: "20-core", performance: "Desktop-class GPU, hardware ray tracing, 32GB unified memory", games: "All Mac games at max settings, Game Porting Toolkit for Windows games" },
  { chip: "M4 Max", gpu: "40-core", performance: "Workstation GPU, 64GB unified memory, 546 GB/s bandwidth", games: "4K gaming, multiple displays, VR development" },
  { chip: "M4 Ultra", gpu: "80-core", performance: "Dual M4 Max, 192GB unified memory, 1.09 TB/s bandwidth", games: "8K gaming, professional game development, real-time ray tracing" },
];

const streamingServices = [
  { name: "Xbox Cloud Gaming", price: "$16.99/mo", library: "400+ games", requirement: "Game Pass Ultimate subscription" },
  { name: "GeForce NOW", price: "$9.99-19.99/mo", library: "1800+ games (your Steam/Epic library)", requirement: "Supported game ownership" },
  { name: "PlayStation Portal (Remote Play)", price: "Free (with PS5)", library: "Your PS5 library", requirement: "PS5 on same network or good internet" },
  { name: "Steam Link", price: "Free", library: "Your Steam library", requirement: "Gaming PC on same network" },
  { name: "Moonlight", price: "Free (open source)", library: "Any PC game", requirement: "NVIDIA GPU on host PC" },
];

export default function Gaming() {
  const [activeTab, setActiveTab] = useState<"arcade" | "metal" | "controllers" | "streaming">("arcade");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium border border-purple-500/20 mb-4">
            Gaming on Apple
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Play <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">without limits.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Apple Arcade, AAA console ports, Metal 3 ray tracing, Game Mode, 
            and the best controller support — gaming on Apple has never been better.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-2 justify-center mb-8">
            {[
              { key: "arcade", label: "Apple Arcade" },
              { key: "metal", label: "Metal & Performance" },
              { key: "controllers", label: "Controllers" },
              { key: "streaming", label: "Cloud Gaming" },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeTab === tab.key
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Apple Arcade */}
          {activeTab === "arcade" && (
            <div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Apple Arcade</h2>
                <p className="text-sm text-muted-foreground">$6.99/mo • 200+ games • No ads, no IAP • Family sharing (up to 6)</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {arcadeGames.map(game => (
                  <div key={game.title} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-sm">{game.title}</h3>
                      <span className="text-[10px] text-yellow-400">★ {game.rating}</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-300">{game.genre}</span>
                    <p className="text-xs text-muted-foreground mt-2">{game.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metal & Performance */}
          {activeTab === "metal" && (
            <div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Metal 3 & Apple Silicon Gaming</h2>
                <p className="text-sm text-muted-foreground">Apple's GPU framework powers console-quality gaming across all devices</p>
              </div>

              {/* Game Mode */}
              <div className="p-5 rounded-2xl border border-border/30 bg-white/[0.02] mb-6">
                <h3 className="text-lg font-bold mb-3">Game Mode</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {gameModeFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <span className="text-green-400">✓</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Metal Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {metalFeatures.map(f => (
                  <div key={f.name} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-sm">{f.name}</h3>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-300">{f.version}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{f.description}</p>
                  </div>
                ))}
              </div>

              {/* Chip Performance */}
              <h3 className="text-lg font-bold mb-3">Gaming Performance by Chip</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border/30">
                      <th className="text-left py-2 px-2 font-medium text-muted-foreground">Chip</th>
                      <th className="text-left py-2 px-2 font-medium text-muted-foreground">GPU</th>
                      <th className="text-left py-2 px-2 font-medium text-muted-foreground">Capabilities</th>
                      <th className="text-left py-2 px-2 font-medium text-muted-foreground">Game Support</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chipGaming.map(c => (
                      <tr key={c.chip} className="border-b border-border/10">
                        <td className="py-2 px-2 font-bold">{c.chip}</td>
                        <td className="py-2 px-2 text-muted-foreground">{c.gpu}</td>
                        <td className="py-2 px-2 text-muted-foreground">{c.performance}</td>
                        <td className="py-2 px-2 text-muted-foreground">{c.games}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Controllers */}
          {activeTab === "controllers" && (
            <div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Game Controllers</h2>
                <p className="text-sm text-muted-foreground">All major controllers work with iPhone, iPad, Mac, and Apple TV</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {controllers.map(c => (
                  <div key={c.name} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-sm">{c.name}</h3>
                      <span className="text-sm font-bold text-purple-400">{c.price}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {c.features.map((f, i) => (
                        <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground">{f}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cloud Gaming */}
          {activeTab === "streaming" && (
            <div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Cloud Gaming & Streaming</h2>
                <p className="text-sm text-muted-foreground">Play PC and console games on any Apple device via streaming</p>
              </div>
              <div className="space-y-3">
                {streamingServices.map(s => (
                  <div key={s.name} className="p-4 rounded-xl border border-border/30 bg-white/[0.02] flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm">{s.name}</h3>
                      <p className="text-xs text-muted-foreground">{s.library} • {s.requirement}</p>
                    </div>
                    <span className="text-sm font-bold text-purple-400">{s.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
