import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ExternalLink, ChevronRight } from "lucide-react";

const IMGS = {
  lineup: "/manus-storage/iphone-lineup-11-17_b4dd07e0.jpg",
  proLineup: "/manus-storage/iphone-pro-lineup_3fdcde73.jpeg",
  iphone11: "/manus-storage/iphone-11_f2cc236a.jpg",
  iphone16Pro: "/manus-storage/iphone-16-pro_2bdde138.jpg",
  iphone16ProMax: "/manus-storage/iphone-16-pro-max_27a4a742.jpg",
  iphone17: "/manus-storage/iphone-17_5b16b84b.png",
  iphone17Pro: "/manus-storage/iphone-17-pro_8a9ea682.png",
  iphoneAir: "/manus-storage/iphone-air_ac6cb200.jpg",
};

const iphones = [
  {
    id: "iphone17",
    series: "iPhone 17 Series",
    year: "2025",
    badge: "Latest",
    badgeColor: "bg-blue-500",
    models: [
      {
        name: "iPhone 17 Pro Max",
        img: IMGS.iphone17Pro,
        chip: "A19 Pro",
        display: "6.9\" Super Retina XDR OLED",
        camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
        battery: "Up to 33 hrs video",
        storage: "256GB – 1TB",
        colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
        price: "From $1,199",
        ios: "iOS 26 (upgradeable to iOS 27)",
        highlights: ["Camera Control button", "ProMotion 1–120Hz", "Action Button", "USB-C 3 (40Gb/s)", "Apple Intelligence"],
      },
      {
        name: "iPhone 17 Pro",
        img: IMGS.iphone17Pro,
        chip: "A19 Pro",
        display: "6.3\" Super Retina XDR OLED",
        camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
        battery: "Up to 27 hrs video",
        storage: "128GB – 1TB",
        colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
        price: "From $999",
        ios: "iOS 26 (upgradeable to iOS 27)",
        highlights: ["Camera Control button", "ProMotion 1–120Hz", "Action Button", "USB-C 3", "Apple Intelligence"],
      },
      {
        name: "iPhone 17",
        img: IMGS.iphone17,
        chip: "A18",
        display: "6.1\" Super Retina XDR OLED",
        camera: "48MP Fusion + 12MP Ultra Wide",
        battery: "Up to 22 hrs video",
        storage: "128GB – 512GB",
        colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
        price: "From $799",
        ios: "iOS 26 (upgradeable to iOS 27)",
        highlights: ["Camera Control button", "Action Button", "USB-C", "Apple Intelligence", "Dynamic Island"],
      },
      {
        name: "iPhone 17 Air",
        img: IMGS.iphoneAir,
        chip: "A18",
        display: "6.6\" Super Retina XDR OLED",
        camera: "48MP Fusion + 12MP Ultra Wide",
        battery: "Up to 22 hrs video",
        storage: "128GB – 512GB",
        colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
        price: "From $899",
        ios: "iOS 26 (upgradeable to iOS 27)",
        highlights: ["Thinnest iPhone ever (5.5mm)", "Camera Control button", "Action Button", "USB-C", "Apple Intelligence"],
      },
    ],
  },
  {
    id: "iphone16",
    series: "iPhone 16 Series",
    year: "2024",
    badge: "Previous Gen",
    badgeColor: "bg-gray-600",
    models: [
      {
        name: "iPhone 16 Pro Max",
        img: IMGS.iphone16ProMax,
        chip: "A18 Pro",
        display: "6.9\" Super Retina XDR OLED",
        camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
        battery: "Up to 33 hrs video",
        storage: "256GB – 1TB",
        colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
        price: "From $1,099",
        ios: "iOS 26 (upgradeable to iOS 27)",
        highlights: ["Camera Control button", "ProMotion 1–120Hz", "Action Button", "USB-C 3", "Apple Intelligence"],
      },
      {
        name: "iPhone 16 Pro",
        img: IMGS.iphone16Pro,
        chip: "A18 Pro",
        display: "6.3\" Super Retina XDR OLED",
        camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
        battery: "Up to 27 hrs video",
        storage: "128GB – 1TB",
        colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],
        price: "From $999",
        ios: "iOS 26 (upgradeable to iOS 27)",
        highlights: ["Camera Control button", "ProMotion 1–120Hz", "Action Button", "USB-C 3", "Apple Intelligence"],
      },
    ],
  },
  {
    id: "iphone15",
    series: "iPhone 15 Series",
    year: "2023",
    badge: "2023",
    badgeColor: "bg-gray-700",
    models: [
      {
        name: "iPhone 15 Pro Max",
        img: IMGS.proLineup,
        chip: "A17 Pro",
        display: "6.7\" Super Retina XDR OLED",
        camera: "48MP Main + 12MP Ultra Wide + 12MP 5x Telephoto",
        battery: "Up to 29 hrs video",
        storage: "256GB – 1TB",
        colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
        price: "From $899 (refurb)",
        ios: "iOS 26 (upgradeable to iOS 27)",
        highlights: ["First titanium iPhone", "Action Button", "USB-C 3", "ProMotion 120Hz"],
      },
      {
        name: "iPhone 15 Pro",
        img: IMGS.proLineup,
        chip: "A17 Pro",
        display: "6.1\" Super Retina XDR OLED",
        camera: "48MP Main + 12MP Ultra Wide + 12MP 3x Telephoto",
        battery: "Up to 23 hrs video",
        storage: "128GB – 1TB",
        colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
        price: "From $799 (refurb)",
        ios: "iOS 26 (upgradeable to iOS 27)",
        highlights: ["First titanium iPhone", "Action Button", "USB-C 3", "ProMotion 120Hz"],
      },
    ],
  },
  {
    id: "iphone14",
    series: "iPhone 14 Series",
    year: "2022",
    badge: "2022",
    badgeColor: "bg-gray-700",
    models: [
      {
        name: "iPhone 14 Pro Max",
        img: IMGS.proLineup,
        chip: "A16 Bionic",
        display: "6.7\" Super Retina XDR OLED",
        camera: "48MP Main + 12MP Ultra Wide + 12MP 3x Telephoto",
        battery: "Up to 29 hrs video",
        storage: "128GB – 1TB",
        colors: ["Deep Purple", "Gold", "Silver", "Space Black"],
        price: "From $699 (refurb)",
        ios: "iOS 26 (upgradeable to iOS 27)",
        highlights: ["Dynamic Island introduced", "Always-On Display", "Crash Detection", "Emergency SOS via Satellite"],
      },
      {
        name: "iPhone 14 Pro",
        img: IMGS.proLineup,
        chip: "A16 Bionic",
        display: "6.1\" Super Retina XDR OLED",
        camera: "48MP Main + 12MP Ultra Wide + 12MP 3x Telephoto",
        battery: "Up to 23 hrs video",
        storage: "128GB – 1TB",
        colors: ["Deep Purple", "Gold", "Silver", "Space Black"],
        price: "From $599 (refurb)",
        ios: "iOS 26 (upgradeable to iOS 27)",
        highlights: ["Dynamic Island introduced", "Always-On Display", "Crash Detection"],
      },
    ],
  },
  {
    id: "older",
    series: "iPhone 11 – 13 Series",
    year: "2019–2021",
    badge: "Older",
    badgeColor: "bg-gray-800",
    models: [
      {
        name: "iPhone 13 Pro Max",
        img: IMGS.iphone11,
        chip: "A15 Bionic",
        display: "6.7\" Super Retina XDR OLED",
        camera: "12MP Main + 12MP Ultra Wide + 12MP 3x Telephoto",
        battery: "Up to 28 hrs video",
        storage: "128GB – 1TB",
        colors: ["Alpine Green", "Sierra Blue", "Gold", "Silver", "Graphite"],
        price: "From $399 (refurb)",
        ios: "iOS 26 (upgradeable to iOS 27)",
        highlights: ["ProMotion 120Hz", "Macro photography", "Cinematic mode video"],
      },
      {
        name: "iPhone 12",
        img: IMGS.iphone11,
        chip: "A14 Bionic",
        display: "6.1\" Super Retina XDR OLED",
        camera: "12MP Main + 12MP Ultra Wide",
        battery: "Up to 17 hrs video",
        storage: "64GB – 256GB",
        colors: ["Black", "White", "Red", "Green", "Blue", "Purple"],
        price: "From $249 (refurb)",
        ios: "iOS 26 (upgradeable to iOS 27)",
        highlights: ["5G support", "Ceramic Shield", "MagSafe charging", "OLED display"],
      },
      {
        name: "iPhone 11",
        img: IMGS.iphone11,
        chip: "A13 Bionic",
        display: "6.1\" Liquid Retina LCD",
        camera: "12MP Main + 12MP Ultra Wide",
        battery: "Up to 17 hrs video",
        storage: "64GB – 256GB",
        colors: ["Black", "White", "Red", "Yellow", "Purple", "Green"],
        price: "From $149 (refurb)",
        ios: "iOS 26 (upgradeable to iOS 27)",
        highlights: ["Night Mode photography", "4K 60fps video", "Slofie front camera", "Face ID"],
      },
    ],
  },
];

const iphoneCompatibility: Record<string, string> = {
  "iPhone 17 Pro Max": "iOS 26 / iOS 27",
  "iPhone 17 Pro": "iOS 26 / iOS 27",
  "iPhone 17": "iOS 26 / iOS 27",
  "iPhone 17 Air": "iOS 26 / iOS 27",
  "iPhone 16 Pro Max": "iOS 18 – iOS 27",
  "iPhone 16 Pro": "iOS 18 – iOS 27",
  "iPhone 15 Pro Max": "iOS 17 – iOS 27",
  "iPhone 15 Pro": "iOS 17 – iOS 27",
  "iPhone 14 Pro Max": "iOS 16 – iOS 27",
  "iPhone 14 Pro": "iOS 16 – iOS 27",
  "iPhone 13 Pro Max": "iOS 15 – iOS 27",
  "iPhone 12": "iOS 14 – iOS 27",
  "iPhone 11": "iOS 13 – iOS 27",
};

export default function IPhones() {
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);
  const [expandedModel, setExpandedModel] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const displayedSeries = selectedSeries
    ? iphones.filter(s => s.id === selectedSeries)
    : iphones;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMGS.lineup} alt="iPhone lineup" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">
          <div className="section-label mb-2">Complete iPhone Encyclopedia</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-3">
            <span className="text-white">Every iPhone</span>
            <br />
            <span className="text-gradient-blue">iPhone 11 to iPhone 17</span>
          </h1>
          <p className="text-white/70 text-base max-w-xl">
            Specs, photos, pricing, and iOS compatibility for every iPhone released since 2019.
          </p>
        </div>
      </section>

      {/* Series Filter */}
      <div className="sticky top-14 md:top-16 z-40 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto py-3 scroll-x">
            <button
              onClick={() => setSelectedSeries(null)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedSeries === null ? "bg-white/15 text-white" : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              All Models
            </button>
            {iphones.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedSeries(s.id === selectedSeries ? null : s.id)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedSeries === s.id ? "bg-white/15 text-white" : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {s.series}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* iPhone Series */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-16">
        {displayedSeries.map((series) => (
          <section key={series.id} id={series.id} className="scroll-mt-28">
            <div className="flex items-center gap-3 mb-6 fade-up">
              <h2 className="text-2xl md:text-3xl font-black">{series.series}</h2>
              <span className={`${series.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                {series.badge}
              </span>
              <span className="text-white/40 text-sm">{series.year}</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {series.models.map((model, i) => (
                <div
                  key={model.name}
                  className="news-card glass-card overflow-hidden border border-white/10 cursor-pointer fade-up"
                  style={{ transitionDelay: `${i * 60}ms` }}
                  onClick={() => setExpandedModel(expandedModel === model.name ? null : model.name)}
                >
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                    <img
                      src={model.img}
                      alt={model.name}
                      className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-bold text-sm mb-1">{model.name}</h3>
                    <div className="text-blue-400 text-xs font-semibold mb-2">{model.chip}</div>
                    <div className="text-white/50 text-xs mb-2">{model.display}</div>
                    <div className="text-green-400 font-semibold text-xs">{model.price}</div>

                    {expandedModel === model.name && (
                      <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                        <div>
                          <div className="text-white/40 text-xs mb-0.5">Camera</div>
                          <div className="text-white/80 text-xs">{model.camera}</div>
                        </div>
                        <div>
                          <div className="text-white/40 text-xs mb-0.5">Battery</div>
                          <div className="text-white/80 text-xs">{model.battery}</div>
                        </div>
                        <div>
                          <div className="text-white/40 text-xs mb-0.5">Storage</div>
                          <div className="text-white/80 text-xs">{model.storage}</div>
                        </div>
                        <div>
                          <div className="text-white/40 text-xs mb-0.5">Colors</div>
                          <div className="text-white/80 text-xs">{model.colors.join(", ")}</div>
                        </div>
                        <div>
                          <div className="text-white/40 text-xs mb-0.5">iOS Support</div>
                          <div className="text-white/80 text-xs">{iphoneCompatibility[model.name] || model.ios}</div>
                        </div>
                        <div>
                          <div className="text-white/40 text-xs mb-1">Key Features</div>
                          <div className="flex flex-wrap gap-1">
                            {model.highlights.map(h => (
                              <span key={h} className="text-xs bg-white/5 border border-white/10 text-white/60 px-2 py-0.5 rounded">
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-3 flex items-center gap-1 text-blue-400 text-xs font-medium">
                      {expandedModel === model.name ? "Show less" : "Show specs"} <ChevronRight className={`w-3 h-3 transition-transform ${expandedModel === model.name ? "rotate-90" : ""}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* iOS 27 Compatibility Note */}
      <section className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glass-card p-6 border border-blue-500/20 bg-blue-500/5">
            <h3 className="text-white font-bold text-base mb-2">iOS 27 Compatibility</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              iOS 27 is compatible with iPhone 11 and later. All iPhones listed above can run iOS 27. 
              Apple Intelligence features require iPhone 15 Pro or later (or any iPhone 16 or 17 model).
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.apple.com/ios/ios-27-preview/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors">
                iOS 27 Preview <ExternalLink className="w-3 h-3" />
              </a>
              <Link href="/jailbreak" className="flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-xs font-medium transition-colors">
                Check Jailbreak Compatibility <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
