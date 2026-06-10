import { useState } from "react";

// Apple Buying Guide — Which device should you buy in 2026?

interface Recommendation {
  device: string;
  bestFor: string;
  price: string;
  verdict: string;
  pros: string[];
  cons: string[];
  buyNow: boolean; // true = good time to buy, false = wait for refresh
  refreshDate?: string;
}

const recommendations: Record<string, Recommendation[]> = {
  iPhone: [
    {
      device: "iPhone 17 Pro Max",
      bestFor: "Power users, photographers, and anyone who wants the absolute best",
      price: "From $1,199",
      verdict: "The best iPhone ever made. If you can afford it, this is the one.",
      pros: ["Best camera system", "2TB storage option", "A19 Pro chip", "All-day battery", "Apple 5G modem"],
      cons: ["Expensive", "Heavy at 227g", "Minimal upgrade from 16 Pro Max"],
      buyNow: true,
    },
    {
      device: "iPhone 17 Air",
      bestFor: "People who prioritize design and portability over camera specs",
      price: "From $899",
      verdict: "Incredibly thin and light. Perfect if you want a conversation-starter phone.",
      pros: ["5.5mm thin", "Lightest iPhone ever", "120Hz ProMotion", "Premium feel"],
      cons: ["Single camera only", "Smaller battery", "No telephoto"],
      buyNow: true,
    },
    {
      device: "iPhone 17",
      bestFor: "Most people — great balance of features and price",
      price: "From $799",
      verdict: "The sweet spot. Does everything well without breaking the bank.",
      pros: ["A19 chip", "Apple Intelligence", "Solid camera", "Good battery"],
      cons: ["60Hz display", "No telephoto", "No ProMotion"],
      buyNow: true,
    },
    {
      device: "iPhone 16 Pro (refurbished)",
      bestFor: "Budget-conscious buyers who still want pro features",
      price: "From $699 (refurb)",
      verdict: "Last year's pro at this year's standard price. Excellent value.",
      pros: ["120Hz ProMotion", "5x telephoto", "A18 Pro", "Camera Control"],
      cons: ["No Apple 5G modem", "Older design", "No 2TB option"],
      buyNow: true,
    },
  ],
  iPad: [
    {
      device: "iPad Pro M5 (2025)",
      bestFor: "Professionals, artists, and anyone replacing a laptop",
      price: "From $1,099",
      verdict: "The most powerful tablet ever made. Overkill for most, perfect for pros.",
      pros: ["M5 chip", "Tandem OLED", "Thunderbolt", "Apple Pencil Pro", "Stage Manager"],
      cons: ["Very expensive", "iPadOS still limited vs macOS", "Accessories add up"],
      buyNow: true,
    },
    {
      device: "iPad Air M3 (2025)",
      bestFor: "Students, creatives, and anyone who wants a great iPad without pro pricing",
      price: "From $599",
      verdict: "Best value iPad for most people. 90% of Pro features at 55% of the price.",
      pros: ["M3 chip", "Apple Pencil Pro support", "Two sizes", "Lightweight"],
      cons: ["60Hz display", "No ProMotion", "No Tandem OLED"],
      buyNow: true,
    },
    {
      device: "iPad (11th gen)",
      bestFor: "Basic tasks — browsing, streaming, notes, and light gaming",
      price: "From $349",
      verdict: "If you just need a tablet for basics, this does the job well.",
      pros: ["Affordable", "A16 chip", "USB-C", "Apple Intelligence support"],
      cons: ["No laminated display", "1st gen Pencil only", "Basic design"],
      buyNow: true,
    },
  ],
  Mac: [
    {
      device: "MacBook Air M4 (2025)",
      bestFor: "Everyone. Seriously — this is the default recommendation.",
      price: "From $1,099",
      verdict: "The best laptop for 90% of people. Fast, silent, all-day battery.",
      pros: ["M4 chip", "18-hour battery", "Fanless design", "Gorgeous display", "Lightweight"],
      cons: ["Only one external display (without lid closed)", "8GB base RAM", "No ProMotion"],
      buyNow: true,
    },
    {
      device: "MacBook Pro M4 Pro (2024)",
      bestFor: "Developers, video editors, and power users who need sustained performance",
      price: "From $1,999",
      verdict: "When the Air isn't enough. Incredible for sustained workloads.",
      pros: ["M4 Pro chip", "ProMotion 120Hz", "Multiple external displays", "Best speakers", "MagSafe"],
      cons: ["Heavy", "Expensive", "Overkill for most"],
      buyNow: false,
      refreshDate: "Expected refresh Fall 2025 with M5 Pro",
    },
    {
      device: "Mac Mini M4 (2024)",
      bestFor: "Desktop users who want power in a tiny form factor",
      price: "From $599",
      verdict: "Incredible value. A full desktop Mac for less than most laptops.",
      pros: ["M4 chip", "Tiny footprint", "Multiple displays", "Thunderbolt 4", "Affordable"],
      cons: ["No display included", "No keyboard/mouse included", "16GB max on base"],
      buyNow: true,
    },
    {
      device: "Mac Studio M4 Ultra (2025)",
      bestFor: "Professional video editors, 3D artists, and ML engineers",
      price: "From $3,999",
      verdict: "Workstation power without the noise. For serious professionals only.",
      pros: ["M4 Ultra chip", "192GB unified memory", "Multiple Thunderbolt 5", "Quiet"],
      cons: ["Extremely expensive", "Overkill for most", "No display"],
      buyNow: true,
    },
  ],
  "Apple Watch": [
    {
      device: "Apple Watch Ultra 3 (2025)",
      bestFor: "Athletes, divers, hikers, and anyone who needs extreme durability",
      price: "From $799",
      verdict: "The toughest Apple Watch with the most sensors. Built for extremes.",
      pros: ["Titanium case", "Depth gauge", "Dual-frequency GPS", "86dB siren", "36-hour battery"],
      cons: ["Very large", "Expensive", "Overkill for casual use"],
      buyNow: true,
    },
    {
      device: "Apple Watch Series 11 (2025)",
      bestFor: "Most people — the best balance of health features and daily use",
      price: "From $399",
      verdict: "The default recommendation. Does everything well.",
      pros: ["Blood pressure monitoring", "Sleep apnea detection", "Always-on display", "Fast charging"],
      cons: ["18-hour battery", "Requires iPhone", "Annual upgrades are minor"],
      buyNow: true,
    },
    {
      device: "Apple Watch SE 3 (2025)",
      bestFor: "Kids, budget buyers, and first-time smartwatch users",
      price: "From $249",
      verdict: "80% of the Watch experience at 60% of the price.",
      pros: ["Affordable", "Core health features", "Crash/Fall detection", "Family Setup"],
      cons: ["No always-on display", "No blood oxygen", "Older design"],
      buyNow: true,
    },
  ],
  AirPods: [
    {
      device: "AirPods Pro 3 (2025)",
      bestFor: "Anyone who wants the best wireless earbuds with ANC",
      price: "From $249",
      verdict: "The best earbuds Apple makes. Period.",
      pros: ["Adaptive ANC", "Hearing aid feature", "Spatial Audio", "USB-C", "H3 chip"],
      cons: ["Expensive for earbuds", "Silicone tips required", "Battery degrades over time"],
      buyNow: true,
    },
    {
      device: "AirPods 4 (2024)",
      bestFor: "People who prefer open-ear design without silicone tips",
      price: "From $129 / $179 (ANC)",
      verdict: "Great all-rounders. The ANC version is worth the extra $50.",
      pros: ["Comfortable open design", "No tips needed", "Good sound", "USB-C case"],
      cons: ["No ear tips = less isolation", "ANC not as good as Pro", "Easy to lose"],
      buyNow: true,
    },
    {
      device: "AirPods Max 2 (2024)",
      bestFor: "Audiophiles and people who want premium over-ear ANC",
      price: "From $549",
      verdict: "Stunning sound quality but the price is hard to justify for most.",
      pros: ["Best ANC", "Incredible sound", "Premium build", "USB-C", "Adaptive Audio"],
      cons: ["Very expensive", "Heavy", "No hi-res Bluetooth codec", "Smart Case is useless"],
      buyNow: true,
    },
  ],
};

const buyingTips = [
  { tip: "Check Apple's refurbished store first — same warranty, 15-20% cheaper.", icon: "💰" },
  { tip: "Education pricing saves $100-200 on Macs and iPads if you're a student.", icon: "🎓" },
  { tip: "Buy AppleCare+ within 60 days of purchase — you don't need to decide at checkout.", icon: "🛡️" },
  { tip: "Trade in your old device at Apple — they give decent credit toward new purchases.", icon: "♻️" },
  { tip: "Wait for Back to School (July-Sep) for free AirPods with Mac/iPad purchases.", icon: "📚" },
  { tip: "Black Friday deals at Best Buy and Amazon are often better than Apple's gift card offers.", icon: "🏷️" },
  { tip: "If a product is 'expected to refresh soon', wait unless you need it today.", icon: "⏳" },
  { tip: "The base storage is almost always too small. Budget for at least one tier up.", icon: "💾" },
];

export default function BuyingGuide() {
  const [activeCategory, setActiveCategory] = useState("iPhone");
  const categories = Object.keys(recommendations);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-background to-teal-900/20" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 mb-4">
            Updated June 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Apple <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Buying Guide</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not sure what to buy? We track every Apple product cycle and tell you exactly 
            what's worth buying right now — and what you should wait for.
          </p>
        </div>
      </section>

      {/* Category Selector */}
      <section className="py-8 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Recommendations */}
          <div className="space-y-4">
            {recommendations[activeCategory]?.map((rec) => (
              <div key={rec.device} className="p-5 rounded-2xl border border-border/30 bg-white/[0.02]">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold">{rec.device}</h3>
                    <p className="text-sm text-muted-foreground">{rec.bestFor}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">{rec.price}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      rec.buyNow ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"
                    }`}>
                      {rec.buyNow ? "Buy Now" : "Wait"}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm mb-3 italic text-muted-foreground">"{rec.verdict}"</p>
                
                {rec.refreshDate && (
                  <p className="text-xs text-yellow-400 mb-3 px-2 py-1 rounded bg-yellow-500/5 border border-yellow-500/20 inline-block">
                    ⏳ {rec.refreshDate}
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-green-400 mb-1">Pros</p>
                    <ul className="space-y-1">
                      {rec.pros.map((pro, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="text-green-400">+</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-400 mb-1">Cons</p>
                    <ul className="space-y-1">
                      {rec.cons.map((con, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <span className="text-red-400">−</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying Tips */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Money-Saving Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {buyingTips.map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-border/30 flex gap-3">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <p className="text-sm">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
