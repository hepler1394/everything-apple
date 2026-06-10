import { useState } from "react";

// iPhone Photography Guide — Master your iPhone camera system

const cameraSpecs = [
  {
    model: "iPhone 17 Pro Max",
    main: "48MP, f/1.7, sensor-shift OIS, 2nd gen",
    ultrawide: "48MP, f/2.2, macro",
    telephoto: "12MP, f/2.8, 5x optical (120mm)",
    front: "12MP, f/1.9, autofocus",
    video: "8K 30fps, 4K 120fps, ProRes, Log",
    features: ["Spatial Video", "Camera Control", "Photographic Styles 2.0", "Apple ProRAW"],
  },
  {
    model: "iPhone 17 Pro",
    main: "48MP, f/1.7, sensor-shift OIS",
    ultrawide: "48MP, f/2.2, macro",
    telephoto: "12MP, f/2.8, 5x optical (120mm)",
    front: "12MP, f/1.9, autofocus",
    video: "4K 120fps, ProRes, Log",
    features: ["Spatial Video", "Camera Control", "Photographic Styles 2.0", "Apple ProRAW"],
  },
  {
    model: "iPhone 17 Air",
    main: "48MP, f/1.8, sensor-shift OIS",
    ultrawide: "None",
    telephoto: "None",
    front: "12MP, f/1.9, autofocus",
    video: "4K 60fps, Cinematic mode",
    features: ["Photographic Styles 2.0", "Smart HDR 6", "Night mode"],
  },
  {
    model: "iPhone 17",
    main: "48MP, f/1.6, sensor-shift OIS",
    ultrawide: "12MP, f/2.2",
    telephoto: "None (2x digital from main)",
    front: "12MP, f/1.9, autofocus",
    video: "4K 60fps, Cinematic mode, Action mode",
    features: ["Photographic Styles 2.0", "Smart HDR 6", "Night mode", "Spatial Photos"],
  },
];

const shootingModes = [
  {
    name: "Photo",
    description: "Standard photo mode with Smart HDR, Deep Fusion, and computational photography.",
    tips: ["Tap to focus, hold to lock AE/AF", "Swipe up for quick settings (flash, live photo, aspect ratio)", "Use the 0.5x, 1x, 2x, 5x zoom buttons for optical quality"],
  },
  {
    name: "Portrait",
    description: "Depth-effect photos with adjustable bokeh. Works on people, pets, and objects.",
    tips: ["Adjust f-stop after capture (f/1.4 to f/16)", "Portrait Lighting effects: Natural, Studio, Contour, Stage, High-Key Mono", "Works best 2-8 feet from subject"],
  },
  {
    name: "Night Mode",
    description: "Automatic long-exposure for low-light scenes. Captures multiple frames and fuses them.",
    tips: ["Brace against a wall for sharper shots", "The timer shows recommended exposure (1-30 seconds)", "Works on all lenses including ultrawide and front camera"],
  },
  {
    name: "Cinematic",
    description: "Video mode with automatic rack focus and shallow depth of field at 4K 30fps.",
    tips: ["Tap subjects to shift focus during recording", "Edit focus points after recording in Photos app", "Works best in good lighting for clean depth maps"],
  },
  {
    name: "ProRAW / ProRes",
    description: "Professional formats for maximum editing flexibility. 48MP RAW files and ProRes video.",
    tips: ["ProRAW files are 50-75MB each — watch storage", "Edit in Lightroom or Capture One for best results", "ProRes requires 256GB+ storage model"],
  },
  {
    name: "Panorama",
    description: "Ultra-wide panoramic shots up to 63MP. Sweep left/right or up/down.",
    tips: ["Keep the arrow on the guide line for best stitching", "Move slowly and steadily", "Works best for landscapes, not moving subjects"],
  },
  {
    name: "Macro",
    description: "Ultra-close focus (2cm minimum) using the ultrawide lens. Auto-switches when close.",
    tips: ["Disable auto-switch in Settings if it's annoying", "Use good lighting — macro depth of field is razor thin", "Great for flowers, insects, textures, and food"],
  },
  {
    name: "Action Mode",
    description: "Extreme stabilization for handheld video in motion. Crops slightly for stabilization headroom.",
    tips: ["Best in bright light (needs fast shutter speed)", "Crops to ~2x — frame wider than you think", "Perfect for running, biking, or car footage"],
  },
];

const editingTips = [
  { category: "Exposure", tips: ["Pull highlights down and shadows up for HDR look", "Use Brilliance slider for intelligent exposure correction", "Tap the auto-adjust wand first, then fine-tune manually"] },
  { category: "Color", tips: ["Warmth slider: left for moody blue, right for golden warmth", "Saturation vs Vibrance: Vibrance protects skin tones", "Use Color Mix to target specific hues (e.g., make sky bluer without affecting skin)"] },
  { category: "Sharpness", tips: ["Sharpness adds edge contrast — use sparingly (25-50%)", "Definition adds midtone contrast — more natural than sharpness", "Noise Reduction: only use on dark/grainy photos, it softens detail"] },
  { category: "Composition", tips: ["Crop to 4:5 for Instagram posts, 9:16 for stories", "Use Straighten tool — even 0.5° makes a huge difference", "Rule of thirds: place subjects at intersection points"] },
  { category: "Portraits", tips: ["Adjust depth (f-stop) after capture — f/2.8 looks most natural", "Switch lighting effects: Studio Light for flattering, Contour for dramatic", "Use the distance slider to control background blur falloff"] },
  { category: "Live Photos", tips: ["Long-press to find the best frame, then 'Set as Key Photo'", "Swipe up for effects: Loop, Bounce, Long Exposure", "Long Exposure effect is amazing for waterfalls and light trails"] },
];

const proTips = [
  "Clean your lens with a microfiber cloth before important shots — fingerprints kill sharpness.",
  "Use the volume button as a shutter — more stable than tapping the screen.",
  "Enable the grid (Settings → Camera → Grid) for better composition.",
  "Shoot in 48MP mode (ProRAW or HEIF Max) for maximum detail and crop flexibility.",
  "Golden hour (sunrise/sunset) gives the most flattering natural light.",
  "For group photos, use the ultrawide (0.5x) to fit everyone without backing up.",
  "Lock exposure by long-pressing on the screen, then slide up/down to adjust.",
  "Use AirDrop to instantly share full-resolution photos — no compression.",
  "Burst mode: hold the shutter button (or volume up) for action shots.",
  "Enable Apple ProRAW for maximum editing flexibility in Lightroom/Capture One.",
  "Use the 2x button on Pro models — it's a center crop of the 48MP sensor, not digital zoom.",
  "For astrophotography: mount on tripod, use Night mode, and let it expose for 30 seconds.",
  "Photographic Styles apply at capture time and can't be fully undone — choose carefully.",
  "Use Shortcuts app to create a 'Quick Camera' shortcut that opens directly to video/slo-mo.",
  "iCloud Photos syncs full-resolution originals — enable 'Download Originals' for editing on Mac.",
];

const accessories2 = [
  { name: "Moment Lenses", price: "$80-130", description: "Anamorphic, wide, tele, and macro add-on lenses for iPhone" },
  { name: "DJI OM 7", price: "$139", description: "3-axis gimbal stabilizer for cinematic handheld video" },
  { name: "Joby GorillaPod", price: "$30-80", description: "Flexible tripod that wraps around poles, branches, railings" },
  { name: "Profoto C1 Plus", price: "$299", description: "Studio-quality portable flash that syncs with iPhone" },
  { name: "Rode VideoMic Me-C", price: "$79", description: "Directional microphone for better audio in videos" },
  { name: "Peak Design Mobile Tripod", price: "$40", description: "Ultra-compact tripod that attaches via MagSafe" },
  { name: "Sandmarc Film Rig", price: "$100", description: "Cage with handles, cold shoe mounts for pro video setup" },
  { name: "NiSi iPhone Filter System", price: "$90", description: "ND, polarizer, and graduated filters for iPhone lenses" },
];

export default function Photography() {
  const [activeMode, setActiveMode] = useState(0);
  const [showAllTips, setShowAllTips] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-background to-orange-900/20" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20 mb-4">
            iPhone Photography
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Master your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">iPhone camera.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From basic composition to ProRAW workflows — everything you need to take 
            stunning photos and cinematic video with your iPhone.
          </p>
        </div>
      </section>

      {/* Camera Specs Comparison */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Camera Specs by Model</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Model</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Main</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Ultrawide</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Telephoto</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Video</th>
                </tr>
              </thead>
              <tbody>
                {cameraSpecs.map(spec => (
                  <tr key={spec.model} className="border-b border-border/10">
                    <td className="py-2.5 px-2 font-bold">{spec.model}</td>
                    <td className="py-2.5 px-2 text-muted-foreground">{spec.main}</td>
                    <td className="py-2.5 px-2 text-muted-foreground">{spec.ultrawide}</td>
                    <td className="py-2.5 px-2 text-muted-foreground">{spec.telephoto}</td>
                    <td className="py-2.5 px-2 text-muted-foreground">{spec.video}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Shooting Modes */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Shooting Modes</h2>
          <p className="text-center text-muted-foreground text-sm mb-6">Tap a mode to see tips for getting the best results</p>
          
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {shootingModes.map((mode, i) => (
              <button
                key={mode.name}
                onClick={() => setActiveMode(i)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeMode === i
                    ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/30"
                }`}
              >
                {mode.name}
              </button>
            ))}
          </div>

          <div className="p-5 rounded-2xl border border-border/30 bg-white/[0.02]">
            <h3 className="text-lg font-bold mb-1">{shootingModes[activeMode].name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{shootingModes[activeMode].description}</p>
            <ul className="space-y-2">
              {shootingModes[activeMode].tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-amber-400 flex-shrink-0">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Editing Tips */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Editing in Photos App</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {editingTips.map(cat => (
              <div key={cat.category} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                <h3 className="font-bold text-sm mb-2 text-amber-400">{cat.category}</h3>
                <ul className="space-y-1.5">
                  {cat.tips.map((tip, i) => (
                    <li key={i} className="text-xs text-muted-foreground">{tip}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Pro Tips</h2>
          <div className="space-y-2">
            {proTips.slice(0, showAllTips ? undefined : 8).map((tip, i) => (
              <div key={i} className="p-3 rounded-lg border border-border/30 bg-white/[0.02] flex gap-3 items-start">
                <span className="text-xs font-bold text-amber-400 w-5 flex-shrink-0">#{i + 1}</span>
                <p className="text-xs">{tip}</p>
              </div>
            ))}
          </div>
          {!showAllTips && (
            <button
              onClick={() => setShowAllTips(true)}
              className="mt-4 mx-auto block text-sm text-amber-400 hover:text-amber-300 transition-colors"
            >
              Show all {proTips.length} tips →
            </button>
          )}
        </div>
      </section>

      {/* Accessories */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Recommended Accessories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {accessories2.map(acc => (
              <div key={acc.name} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                <h3 className="font-bold text-sm">{acc.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{acc.description}</p>
                <p className="text-sm font-bold text-amber-400 mt-2">{acc.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
