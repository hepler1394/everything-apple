import { useState } from "react";

// Apple Self-Service Repair & DIY Guide

const repairParts = [
  { device: "iPhone 17 Pro Max", parts: [
    { name: "Display Assembly", price: "$379", difficulty: "Medium", time: "45 min" },
    { name: "Battery", price: "$119", difficulty: "Easy", time: "25 min" },
    { name: "Back Glass", price: "$199", difficulty: "Hard", time: "90 min" },
    { name: "Camera Module (Main)", price: "$249", difficulty: "Medium", time: "35 min" },
    { name: "Speaker", price: "$39", difficulty: "Easy", time: "20 min" },
    { name: "Charging Port (USB-C)", price: "$49", difficulty: "Medium", time: "40 min" },
  ]},
  { device: "iPhone 17 Pro", parts: [
    { name: "Display Assembly", price: "$329", difficulty: "Medium", time: "45 min" },
    { name: "Battery", price: "$109", difficulty: "Easy", time: "25 min" },
    { name: "Back Glass", price: "$169", difficulty: "Hard", time: "90 min" },
    { name: "Camera Module (Main)", price: "$229", difficulty: "Medium", time: "35 min" },
    { name: "Speaker", price: "$35", difficulty: "Easy", time: "20 min" },
  ]},
  { device: "iPhone 17", parts: [
    { name: "Display Assembly", price: "$279", difficulty: "Medium", time: "45 min" },
    { name: "Battery", price: "$99", difficulty: "Easy", time: "25 min" },
    { name: "Back Glass", price: "$149", difficulty: "Hard", time: "90 min" },
    { name: "Camera Module", price: "$179", difficulty: "Medium", time: "35 min" },
  ]},
  { device: "MacBook Air M4", parts: [
    { name: "Display Assembly", price: "$549", difficulty: "Hard", time: "120 min" },
    { name: "Battery", price: "$159", difficulty: "Medium", time: "60 min" },
    { name: "Top Case (Keyboard + Trackpad)", price: "$349", difficulty: "Hard", time: "90 min" },
    { name: "USB-C Port Board", price: "$79", difficulty: "Medium", time: "45 min" },
  ]},
  { device: "MacBook Pro 16\" M4 Pro", parts: [
    { name: "Display Assembly", price: "$849", difficulty: "Hard", time: "120 min" },
    { name: "Battery", price: "$249", difficulty: "Hard", time: "90 min" },
    { name: "Top Case (Keyboard + Trackpad)", price: "$449", difficulty: "Hard", time: "90 min" },
    { name: "Logic Board", price: "$1,299", difficulty: "Expert", time: "180 min" },
  ]},
];

const tools = [
  { name: "Pentalobe Screwdriver (P2)", use: "iPhone bottom screws", price: "$8" },
  { name: "Tri-point Y000 Screwdriver", use: "Apple Watch, AirPods", price: "$8" },
  { name: "Suction Cup", use: "Lifting iPhone/iPad screens", price: "$5" },
  { name: "iSclack Opening Tool", use: "Safely separating iPhone screens", price: "$25" },
  { name: "Spudger (Nylon)", use: "Prying connectors and cables", price: "$3" },
  { name: "Tweezers (ESD-safe)", use: "Handling small screws and connectors", price: "$8" },
  { name: "Heat Gun / iOpener", use: "Softening adhesive on screens and batteries", price: "$15-30" },
  { name: "Isopropyl Alcohol (99%)", use: "Cleaning adhesive residue", price: "$8" },
  { name: "Battery Adhesive Strips", use: "Securing replacement batteries", price: "$5" },
  { name: "Display Adhesive Kit", use: "Resealing screens after repair", price: "$10" },
  { name: "Magnetic Project Mat", use: "Organizing screws by location", price: "$15" },
  { name: "Anti-static Wrist Strap", use: "Preventing ESD damage to components", price: "$6" },
];

const repairSteps = {
  battery: [
    "Power off the iPhone completely",
    "Remove the two pentalobe screws at the bottom",
    "Apply heat to the bottom edge (60°C for 2 minutes)",
    "Attach suction cup and pull while inserting pick",
    "Slide pick around the perimeter to cut adhesive",
    "Open the display to 90° (don't go past — ribbon cables!)",
    "Disconnect battery connector FIRST (prevents shorts)",
    "Remove the 3 tri-point screws on the battery connector bracket",
    "Apply isopropyl alcohol to battery adhesive tabs",
    "Pull adhesive tabs slowly at 45° angle (don't break them!)",
    "If tabs break: apply heat from back, use dental floss to cut adhesive",
    "Place new battery, connect cable, replace bracket screws",
    "Reconnect display cables, close display, replace pentalobe screws",
    "Charge to 50% before first use, calibrate by full drain + full charge",
  ],
  screen: [
    "Power off the iPhone completely",
    "Remove the two pentalobe screws at the bottom",
    "Apply heat to edges (60°C for 3 minutes — more adhesive than battery repair)",
    "Use suction cup + opening pick to separate display",
    "Slide pick carefully — avoid the flex cables on right side",
    "Open display to 90° and prop with a stand",
    "Remove the bracket covering display/digitizer connectors (3-4 screws)",
    "Disconnect the 3 display ribbon cables (battery, LCD, digitizer)",
    "Remove the earpiece speaker and transfer to new display",
    "Transfer the front camera/sensor assembly to new display",
    "Transfer the display shield plate to new display",
    "Connect new display cables in reverse order",
    "Replace bracket and screws",
    "Test display before sealing: touch, Face ID, True Tone",
    "Apply new adhesive strips around perimeter",
    "Press display closed, replace pentalobe screws",
    "Run Apple Diagnostics to pair the new display (Settings → General → About)",
  ],
};

const warrantyInfo = [
  { type: "Standard Warranty", duration: "1 year", coverage: "Manufacturing defects only", cost: "Included" },
  { type: "AppleCare+ (iPhone)", duration: "2-3 years", coverage: "Accidental damage ($29 screen, $99 other)", cost: "$9.99/mo or $199" },
  { type: "AppleCare+ (Mac)", duration: "3 years", coverage: "Accidental damage ($99 screen, $299 other)", cost: "$13.49/mo or $279-399" },
  { type: "AppleCare+ with Theft & Loss", duration: "2-3 years", coverage: "Everything + theft/loss ($149 deductible)", cost: "$13.49/mo or $269" },
];

const thirdPartyRepair = [
  { name: "iFixit", type: "Parts + Guides", pros: "Huge guide library, quality parts, tool kits", cons: "Parts slightly more expensive than generic" },
  { name: "uBreakiFix (Asurion)", type: "In-store repair", pros: "Apple authorized, same-day service, warranty", cons: "Limited to common repairs" },
  { name: "Best Buy (Apple Authorized)", type: "In-store repair", pros: "Convenient locations, genuine Apple parts", cons: "Appointment required, can be slow" },
  { name: "Rossmann Repair Group", type: "Mail-in (board level)", pros: "Board-level repair, data recovery, expert", cons: "NYC only for walk-in, mail-in takes time" },
  { name: "iPad Rehab", type: "Mail-in (data recovery)", pros: "Specializes in data recovery from dead devices", cons: "Expensive for complex recoveries" },
];

export default function RepairDIY() {
  const [activeDevice, setActiveDevice] = useState(0);
  const [activeGuide, setActiveGuide] = useState<"battery" | "screen">("battery");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-background to-teal-900/20" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 mb-4">
            Repair & DIY
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Fix it <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">yourself.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Apple Self-Service Repair parts, step-by-step guides, tool recommendations, 
            and everything you need to repair your Apple devices at home.
          </p>
        </div>
      </section>

      {/* Parts & Pricing */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Repair Parts & Pricing</h2>
          <p className="text-center text-muted-foreground text-sm mb-6">Official Apple Self-Service Repair pricing (genuine parts)</p>
          
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {repairParts.map((d, i) => (
              <button
                key={d.device}
                onClick={() => setActiveDevice(i)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeDevice === i
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/30"
                }`}
              >
                {d.device}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-2 px-3 font-medium text-muted-foreground">Part</th>
                  <th className="text-left py-2 px-3 font-medium text-muted-foreground">Price</th>
                  <th className="text-left py-2 px-3 font-medium text-muted-foreground">Difficulty</th>
                  <th className="text-left py-2 px-3 font-medium text-muted-foreground">Time</th>
                </tr>
              </thead>
              <tbody>
                {repairParts[activeDevice].parts.map(p => (
                  <tr key={p.name} className="border-b border-border/10">
                    <td className="py-2.5 px-3 font-medium">{p.name}</td>
                    <td className="py-2.5 px-3 text-emerald-400 font-bold">{p.price}</td>
                    <td className="py-2.5 px-3">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                        p.difficulty === "Easy" ? "bg-green-500/10 text-green-400" :
                        p.difficulty === "Medium" ? "bg-yellow-500/10 text-yellow-400" :
                        p.difficulty === "Hard" ? "bg-orange-500/10 text-orange-400" :
                        "bg-red-500/10 text-red-400"
                      }`}>{p.difficulty}</span>
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground">{p.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guides */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Step-by-Step Guides</h2>
          
          <div className="flex gap-2 justify-center mb-6">
            <button
              onClick={() => setActiveGuide("battery")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeGuide === "battery" ? "bg-emerald-500 text-white" : "bg-white/5 text-muted-foreground border border-border/30"
              }`}
            >
              Battery Replacement
            </button>
            <button
              onClick={() => setActiveGuide("screen")}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeGuide === "screen" ? "bg-emerald-500 text-white" : "bg-white/5 text-muted-foreground border border-border/30"
              }`}
            >
              Screen Replacement
            </button>
          </div>

          <div className="space-y-2">
            {repairSteps[activeGuide].map((step, i) => (
              <div key={i} className="p-3 rounded-lg border border-border/30 bg-white/[0.02] flex gap-3 items-start">
                <span className="text-xs font-bold text-emerald-400 w-6 flex-shrink-0 text-center">{i + 1}</span>
                <p className="text-xs">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Essential Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {tools.map(t => (
              <div key={t.name} className="p-3 rounded-xl border border-border/30 bg-white/[0.02] flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground">{t.use}</p>
                </div>
                <span className="text-xs font-bold text-emerald-400">{t.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">AppleCare+ vs Self-Repair</h2>
          <div className="space-y-3">
            {warrantyInfo.map(w => (
              <div key={w.type} className="p-4 rounded-xl border border-border/30 bg-white/[0.02] flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm">{w.type}</h3>
                  <p className="text-xs text-muted-foreground">{w.coverage}</p>
                  <p className="text-[10px] text-muted-foreground">{w.duration}</p>
                </div>
                <span className="text-sm font-bold text-emerald-400">{w.cost}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Repair */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Third-Party Repair Options</h2>
          <div className="space-y-3">
            {thirdPartyRepair.map(r => (
              <div key={r.name} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-sm">{r.name}</h3>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground">{r.type}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div>
                    <p className="text-[10px] text-green-400 font-medium">Pros</p>
                    <p className="text-xs text-muted-foreground">{r.pros}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-red-400 font-medium">Cons</p>
                    <p className="text-xs text-muted-foreground">{r.cons}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
