import { useState } from "react";

// Apple Maps & CarPlay — Complete guide to navigation and in-car experience

const mapsFeatures = [
  {
    title: "Detailed City Experience",
    description: "3D landmarks, custom-designed road markings, and elevation details in supported cities worldwide.",
    cities: ["San Francisco", "Los Angeles", "New York", "London", "Tokyo", "Paris", "Sydney", "Berlin"],
  },
  {
    title: "Look Around",
    description: "Apple's street-level imagery with smooth transitions. Higher resolution than competitors with privacy-preserving face/plate blurring.",
    coverage: "Available in 15+ countries with expanding coverage",
  },
  {
    title: "Offline Maps",
    description: "Download entire regions for offline navigation. Includes turn-by-turn directions, ETA, and search without internet.",
    tip: "Download maps before road trips or international travel to avoid roaming charges.",
  },
  {
    title: "EV Routing",
    description: "Automatic charging stop planning for electric vehicles. Considers elevation, weather, and current charge level.",
    supported: ["Tesla", "Ford", "BMW", "Rivian", "Mercedes", "Porsche", "Volkswagen"],
  },
  {
    title: "Multi-stop Routing",
    description: "Add up to 15 stops to a single route. Drag to reorder. Siri can add stops mid-navigation.",
    tip: "Say 'Hey Siri, add a gas station to my route' while navigating.",
  },
  {
    title: "Real-time Transit",
    description: "Live departure times, crowding levels, and service alerts for public transit in 100+ cities.",
    features: ["Nearby departures widget", "Fare estimates", "Accessibility routes", "Bike-share integration"],
  },
  {
    title: "Flyover",
    description: "Photorealistic 3D aerial views of cities and landmarks. Tilt and rotate to explore from any angle.",
    landmarks: ["Eiffel Tower", "Golden Gate Bridge", "Colosseum", "Big Ben", "Statue of Liberty"],
  },
  {
    title: "Cycling Directions",
    description: "Bike-specific routing with elevation profiles, bike lane preferences, and stair warnings.",
    features: ["Elevation chart", "Bike lane priority", "Avoid hills option", "Dismount warnings"],
  },
];

const carPlayFeatures = [
  {
    category: "Next-Gen CarPlay",
    items: [
      { name: "Full Dashboard Integration", description: "CarPlay takes over the entire instrument cluster — speedometer, tachometer, fuel gauge, and all vehicle data rendered by iOS." },
      { name: "Multiple Displays", description: "Spans across all screens in the vehicle — center console, instrument cluster, and passenger display." },
      { name: "Climate Controls", description: "Adjust temperature, fan speed, seat heating, and ventilation directly from CarPlay interface." },
      { name: "Vehicle Settings", description: "Access drive modes, suspension settings, ambient lighting, and other vehicle-specific controls." },
      { name: "Widgets", description: "Customizable widgets for weather, calendar, music, and navigation on the home screen." },
    ]
  },
  {
    category: "Audio & Communication",
    items: [
      { name: "SharePlay in Car", description: "Passengers can add songs to the queue from their own phones. Democratic music control." },
      { name: "Spatial Audio", description: "Dolby Atmos music through the car's speaker system with head tracking disabled for driver safety." },
      { name: "Message Announcements", description: "Siri reads incoming messages aloud and lets you reply by voice without touching your phone." },
      { name: "Multi-call Management", description: "Handle multiple phone calls, switch between them, or merge into conference calls." },
    ]
  },
  {
    category: "Navigation",
    items: [
      { name: "3D Map View", description: "Detailed 3D buildings and terrain on the car's display for easier landmark recognition." },
      { name: "Lane Guidance", description: "Clear lane guidance with highway signs showing which lane to be in for upcoming exits." },
      { name: "Speed Limit Display", description: "Current speed limit shown on the instrument cluster with over-speed warnings." },
      { name: "Parking Availability", description: "Shows parking garage availability and pricing at your destination before you arrive." },
    ]
  },
];

const compatibleCars = {
  "Full Next-Gen CarPlay": ["Aston Martin", "Porsche", "Audi (2026+)", "Mercedes (2026+)", "Volvo (2026+)"],
  "Standard CarPlay": ["Toyota", "Honda", "Ford", "BMW", "Hyundai", "Kia", "Volkswagen", "Subaru", "Mazda", "Nissan", "Chevrolet", "Jeep", "Ram", "Lexus", "Acura"],
};

const mapsVsGoogle = [
  { feature: "Privacy", apple: "No tracking, no ad profiling", google: "Location history for ads" },
  { feature: "Offline Maps", apple: "Full regions with navigation", google: "Full regions with navigation" },
  { feature: "Street View", apple: "Look Around (fewer cities)", google: "Street View (more coverage)" },
  { feature: "Transit", apple: "100+ cities, real-time", google: "10,000+ cities" },
  { feature: "3D Buildings", apple: "Detailed in 12 cities", google: "Photorealistic in 100+ cities" },
  { feature: "EV Routing", apple: "Built-in with charge planning", google: "Built-in with charge planning" },
  { feature: "Speed Cameras", apple: "Yes, crowd-sourced", google: "Yes, crowd-sourced" },
  { feature: "Business Reviews", apple: "Yelp integration", google: "Native reviews (more data)" },
  { feature: "Cycling", apple: "Good with elevation", google: "Better coverage globally" },
  { feature: "AR Navigation", apple: "No", google: "Live View AR walking" },
  { feature: "CarPlay Integration", apple: "Native, deep integration", google: "Via Google Maps app" },
  { feature: "Siri Integration", apple: "Full voice control", google: "Limited in CarPlay" },
];

const tips = [
  "Pin your home and work addresses for one-tap navigation from anywhere in the app.",
  "Use Guides (curated lists) to save restaurants, shops, and attractions for trips.",
  "Share your ETA with contacts — they see your real-time location during navigation.",
  "Report accidents, hazards, and speed traps by tapping the report button while navigating.",
  "Use the 'Nearby' feature to quickly find gas stations, restaurants, or parking without typing.",
  "Download offline maps for your daily commute area — saves battery and works in tunnels.",
  "Long-press on the map to drop a pin and get coordinates for any location.",
  "Use Flyover mode to preview destinations before visiting — great for vacation planning.",
];

export default function MapsCarPlay() {
  const [activeSection, setActiveSection] = useState<"maps" | "carplay" | "compare">("maps");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-green-900/20" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20 mb-4">
            Navigation & In-Car Experience
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Apple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Maps & CarPlay</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From detailed city maps and offline navigation to next-generation CarPlay 
            that takes over your entire dashboard.
          </p>
        </div>
      </section>

      {/* Section Selector */}
      <section className="py-6 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 justify-center mb-8">
            {(["maps", "carplay", "compare"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveSection(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium capitalize transition-all ${
                  activeSection === tab
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/30"
                }`}
              >
                {tab === "compare" ? "Maps vs Google" : tab === "carplay" ? "CarPlay" : "Apple Maps"}
              </button>
            ))}
          </div>

          {/* Maps Section */}
          {activeSection === "maps" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {mapsFeatures.map(f => (
                  <div key={f.title} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                    <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{f.description}</p>
                    {"cities" in f && f.cities && (
                      <div className="flex flex-wrap gap-1">
                        {(f.cities as string[]).map((c, i) => (
                          <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-300">{c}</span>
                        ))}
                      </div>
                    )}
                    {"supported" in f && typeof f.supported === "object" && Array.isArray(f.supported) && (
                      <div className="flex flex-wrap gap-1">
                        {f.supported.map((s, i) => (
                          <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-300">{s}</span>
                        ))}
                      </div>
                    )}
                    {"tip" in f && (
                      <p className="text-[10px] text-blue-400 mt-2 italic">💡 {f.tip}</p>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Tips & Tricks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tips.map((tip, i) => (
                    <div key={i} className="p-3 rounded-lg border border-border/30 bg-white/[0.02] flex gap-2 items-start">
                      <span className="text-xs font-bold text-blue-400 flex-shrink-0">#{i + 1}</span>
                      <p className="text-xs">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CarPlay Section */}
          {activeSection === "carplay" && (
            <div className="space-y-8">
              {carPlayFeatures.map(section => (
                <div key={section.category}>
                  <h2 className="text-xl font-bold mb-3">{section.category}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.items.map(item => (
                      <div key={item.name} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                        <h3 className="font-bold text-sm mb-1">{item.name}</h3>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <h2 className="text-xl font-bold mb-3">Compatible Vehicles</h2>
                {Object.entries(compatibleCars).map(([tier, brands]) => (
                  <div key={tier} className="mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">{tier}</h3>
                    <div className="flex flex-wrap gap-2">
                      {brands.map(brand => (
                        <span key={brand} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-border/30">{brand}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Compare Section */}
          {activeSection === "compare" && (
            <div>
              <h2 className="text-2xl font-bold text-center mb-6">Apple Maps vs Google Maps</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/30">
                      <th className="text-left py-3 px-3 text-xs font-medium text-muted-foreground">Feature</th>
                      <th className="text-left py-3 px-3 text-xs font-medium text-blue-400">Apple Maps</th>
                      <th className="text-left py-3 px-3 text-xs font-medium text-green-400">Google Maps</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mapsVsGoogle.map((row, i) => (
                      <tr key={i} className="border-b border-border/10">
                        <td className="py-2.5 px-3 text-xs font-medium">{row.feature}</td>
                        <td className="py-2.5 px-3 text-xs text-muted-foreground">{row.apple}</td>
                        <td className="py-2.5 px-3 text-xs text-muted-foreground">{row.google}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Apple Maps excels in privacy, CarPlay integration, and the Apple ecosystem. 
                Google Maps has broader coverage and more data globally.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
