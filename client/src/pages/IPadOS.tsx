import { useState } from "react";

// iPadOS 19 — Complete coverage of the latest iPad software update

const features = [
  {
    category: "Multitasking",
    items: [
      { name: "Freeform Spaces", description: "Create unlimited virtual desktops with drag-and-drop window management. Each space can hold up to 8 apps simultaneously.", icon: "🪟" },
      { name: "Stage Manager 3.0", description: "Redesigned with automatic window grouping based on workflow context. AI suggests app arrangements based on your habits.", icon: "🎭" },
      { name: "Split View Presets", description: "Save and recall custom split-screen layouts with a single tap. Supports up to 4 apps in custom ratios.", icon: "📐" },
      { name: "App Pairs", description: "Link two apps together so they always open side-by-side. Perfect for notes + browser or code + preview.", icon: "🔗" },
      { name: "Floating Windows", description: "Any app can now be turned into a floating picture-in-picture window that stays on top of other apps.", icon: "💨" },
      { name: "Desktop-Class Resize", description: "Windows can be resized to any dimension with pixel-precise control using keyboard shortcuts or trackpad gestures.", icon: "↔️" },
    ]
  },
  {
    category: "Apple Pencil",
    items: [
      { name: "Pencil Intelligence", description: "AI-powered handwriting recognition that converts sketches to vector graphics in real-time.", icon: "✏️" },
      { name: "Math Notes Pro", description: "Solve complex equations, plot 3D graphs, and get step-by-step solutions with handwritten input.", icon: "🧮" },
      { name: "Smart Selection", description: "Circle any content on screen to select it — works across apps, images, and even videos.", icon: "⭕" },
      { name: "Gesture Shortcuts", description: "Draw custom gestures to trigger actions: draw a checkmark to complete tasks, an X to delete, a star to bookmark.", icon: "👆" },
      { name: "Pressure Mapping", description: "New pressure visualization shows exactly how hard you're pressing, useful for digital art and calligraphy.", icon: "📊" },
      { name: "Hover Previews", description: "Hover Apple Pencil Pro over any element to see previews, tooltips, and contextual menus before touching down.", icon: "🔍" },
    ]
  },
  {
    category: "Productivity",
    items: [
      { name: "Desktop Widgets", description: "Interactive widgets that live on your home screen and update in real-time. Supports third-party widget actions.", icon: "📱" },
      { name: "File Manager Pro", description: "Completely redesigned Files app with column view, batch operations, terminal access, and Git integration.", icon: "📁" },
      { name: "External Display 4K", description: "Full 4K output at 120Hz with independent content on external displays. Use iPad as a secondary controller.", icon: "🖥️" },
      { name: "Virtual Memory Swap", description: "Up to 16GB of virtual memory on M-series iPads, allowing pro apps to handle massive files without crashing.", icon: "💾" },
      { name: "Background Tasks", description: "Apps can now run complex background processes for up to 30 minutes — perfect for rendering, compiling, or encoding.", icon: "⚙️" },
      { name: "Quick Note Anywhere", description: "Swipe from any corner to create a Quick Note. Now supports templates, tags, and automatic linking to current context.", icon: "📝" },
    ]
  },
  {
    category: "Display & Visual",
    items: [
      { name: "Reference Mode", description: "Color-accurate display mode for photographers and videographers with support for DCI-P3, sRGB, and custom ICC profiles.", icon: "🎨" },
      { name: "Dynamic Wallpapers", description: "Wallpapers that respond to time of day, weather, and device orientation with smooth parallax effects.", icon: "🌅" },
      { name: "Always-On Display", description: "M-series iPads now support always-on display showing time, widgets, and notifications at a glance.", icon: "🔆" },
      { name: "True Tone Scheduling", description: "Schedule True Tone intensity throughout the day — cooler in the morning, warmer at night.", icon: "💡" },
      { name: "HDR Content Creation", description: "Create and edit HDR10+ content natively with real-time preview on the iPad's XDR display.", icon: "🌈" },
      { name: "Accessibility Zoom", description: "New split-zoom mode shows a magnified portion of the screen in a floating window while keeping the rest at normal size.", icon: "🔎" },
    ]
  },
  {
    category: "Communication",
    items: [
      { name: "FaceTime Presenter", description: "Share your screen with annotations during FaceTime calls. Draw, highlight, and point to content in real-time.", icon: "📹" },
      { name: "Messages Threads", description: "Reply to specific messages in threads within group chats. Keep conversations organized by topic.", icon: "💬" },
      { name: "Mail Categories", description: "AI-powered email categorization that sorts messages into Primary, Updates, Promotions, and custom categories.", icon: "📧" },
      { name: "Shared Spaces", description: "Collaborate in real-time on documents, whiteboards, and projects with spatial audio positioning for each participant.", icon: "👥" },
      { name: "Live Captions", description: "Real-time transcription for any audio on your iPad — calls, videos, podcasts, and in-person conversations.", icon: "📄" },
      { name: "Translation Overlay", description: "Point your camera at text in any language and see the translation overlaid in real-time using AR.", icon: "🌐" },
    ]
  },
];

const compatibleDevices = [
  { name: "iPad Pro M5 (2025)", chip: "M5", support: "Full" },
  { name: "iPad Pro M4 (2024)", chip: "M4", support: "Full" },
  { name: "iPad Pro M2 (2022)", chip: "M2", support: "Full" },
  { name: "iPad Air M3 (2025)", chip: "M3", support: "Full" },
  { name: "iPad Air M2 (2024)", chip: "M2", support: "Full" },
  { name: "iPad (11th gen, 2024)", chip: "A16", support: "Partial" },
  { name: "iPad (10th gen, 2022)", chip: "A14", support: "Partial" },
  { name: "iPad mini (7th gen, 2024)", chip: "A17 Pro", support: "Full" },
  { name: "iPad mini (6th gen, 2021)", chip: "A15", support: "Limited" },
];

const timeline = [
  { date: "June 9, 2026", event: "iPadOS 19 announced at WWDC 2026" },
  { date: "June 10, 2026", event: "Developer Beta 1 released" },
  { date: "July 2026", event: "Public Beta expected" },
  { date: "September 2026", event: "Official release with new iPad hardware" },
];

export default function IPadOS() {
  const [activeCategory, setActiveCategory] = useState("Multitasking");
  const [showAllDevices, setShowAllDevices] = useState(false);

  const activeFeatures = features.find(f => f.category === activeCategory)?.items || [];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-background to-purple-900/20" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-medium border border-indigo-500/20 mb-4">
            iPadOS 19
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            iPad. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Unlimited.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            iPadOS 19 transforms your iPad into a true desktop replacement with freeform multitasking, 
            AI-powered Pencil features, and desktop-class productivity tools.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-border/30 text-sm">30+ new features</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-border/30 text-sm">M-series optimized</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-border/30 text-sm">Fall 2026</span>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What's New in iPadOS 19</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {features.map(cat => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.category
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/30"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeFeatures.map((feature, i) => (
              <div
                key={feature.name}
                className="p-5 rounded-xl border border-border/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h3 className="text-base font-bold mb-1 group-hover:text-indigo-400 transition-colors">{feature.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Compatible Devices</h2>
          <p className="text-center text-muted-foreground mb-8">iPadOS 19 requires an A14 chip or later</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-3 px-4 font-semibold">Device</th>
                  <th className="text-left py-3 px-4 font-semibold">Chip</th>
                  <th className="text-left py-3 px-4 font-semibold">Support Level</th>
                </tr>
              </thead>
              <tbody>
                {(showAllDevices ? compatibleDevices : compatibleDevices.slice(0, 5)).map(device => (
                  <tr key={device.name} className="border-b border-border/10 hover:bg-white/[0.02]">
                    <td className="py-3 px-4">{device.name}</td>
                    <td className="py-3 px-4 text-muted-foreground">{device.chip}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        device.support === "Full" ? "bg-green-500/10 text-green-400" :
                        device.support === "Partial" ? "bg-yellow-500/10 text-yellow-400" :
                        "bg-orange-500/10 text-orange-400"
                      }`}>
                        {device.support}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {!showAllDevices && (
            <button
              onClick={() => setShowAllDevices(true)}
              className="mt-4 mx-auto block text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Show all {compatibleDevices.length} devices →
            </button>
          )}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Release Timeline</h2>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold">{item.date}</p>
                  <p className="text-sm text-muted-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Pro Tips for iPadOS 19</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { tip: "Use four-finger swipe left/right to switch between Freeform Spaces instantly.", category: "Gesture" },
              { tip: "Hold the Globe key + Tab to see all open windows across all spaces.", category: "Shortcut" },
              { tip: "Triple-tap with Apple Pencil to activate Smart Selection mode anywhere.", category: "Pencil" },
              { tip: "Drag a window to the edge of the screen to snap it to half-screen automatically.", category: "Window" },
              { tip: "Say 'Hey Siri, create a space for work' to set up a pre-configured workspace.", category: "Siri" },
              { tip: "Connect two external displays to M5 iPad Pro for a triple-monitor setup.", category: "Display" },
              { tip: "Use Stage Manager's new 'Focus Modes' to show different app groups per Focus.", category: "Focus" },
              { tip: "Draw a rectangle with Apple Pencil on any webpage to capture a screenshot of just that area.", category: "Pencil" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-border/30">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-medium">{item.category}</span>
                <p className="text-sm mt-2">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
