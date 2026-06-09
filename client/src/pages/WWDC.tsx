import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, ExternalLink, ChevronRight } from "lucide-react";

const IMGS = {
  hero: "/manus-storage/wwdc26-techradar_44670303.jpg",
  timCook: "/manus-storage/tim-cook-wwdc26_adf55bac.png",
  siriAI: "/manus-storage/ios27-siri-ai-macrumors_9c505084.jpg",
  ios27: "/manus-storage/ios27-features_b971ec0e.jpg",
  ios27official: "/manus-storage/ios27-official_890885e1.jpg",
  macos: "/manus-storage/macos-golden-gate-macrumors_a351e6d8.jpg",
  macosGG: "/manus-storage/macos-golden-gate_b41710ba.jpg",
  appleIntel: "/manus-storage/apple-intelligence-overview_bfebb74e.png",
  parental: "/manus-storage/parental-controls-1_bc44df2a.png",
  wwdcStage: "/manus-storage/wwdc-keynote-stage_eaa33eea.jpg",
  wwdcPark: "/manus-storage/wwdc-apple-park_e3bfe199.jpg",
  siriWaitlist: "/manus-storage/siri-ai-waitlist_a27ae709.jpg",
};

const announcements = [
  {
    id: "siri-ai",
    tag: "BIGGEST ANNOUNCEMENT",
    tagColor: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
    title: "Siri AI — A Completely New Siri",
    subtitle: "Powered by Apple Intelligence",
    img: IMGS.siriAI,
    href: "/siri-ai",
    points: [
      "Natural conversational back-and-forth — like ChatGPT but private",
      "Searches across your messages, emails, photos and apps",
      "Onscreen awareness — asks about anything on your screen",
      "Dedicated Siri app with conversation history synced via iCloud",
      "Visual Intelligence expands to iPad, Mac, and Apple Vision Pro",
      "New Siri mode in Camera app for real-world object recognition",
      "Integrated writing tools — write and edit virtually anywhere",
      "Not available in Europe or China at launch due to regulations",
    ],
  },
  {
    id: "ios27",
    tag: "iOS 27",
    tagColor: "text-blue-400 border-blue-500/40 bg-blue-500/10",
    title: "iOS 27 — Performance, Polish & Power",
    subtitle: "Available this fall",
    img: IMGS.ios27,
    href: "/wwdc-2026#ios27",
    points: [
      "Apps launch up to 30% faster than iOS 26",
      "Photos load up to 70% faster after being taken",
      "AirDrop transfers up to 80% faster",
      "Liquid Glass slider — customize transparency from clear to tinted",
      "Rebuilt Spotlight, Photos, and Mail search engines",
      "Seamless cellular-to-Wi-Fi network transitions",
      "Notify Me in Safari — monitor web pages for changes",
      "Messages one-tap suggestions for creating reminders and notes",
    ],
  },
  {
    id: "macos",
    tag: "macOS 27",
    tagColor: "text-yellow-400 border-yellow-500/40 bg-yellow-500/10",
    title: "macOS Golden Gate",
    subtitle: "Named after San Francisco's iconic landmark",
    img: IMGS.macos,
    href: "/wwdc-2026#macos",
    points: [
      "Apple names macOS 27 after the Golden Gate Bridge",
      "Siri AI integrated into Spotlight on Mac",
      "Visual Intelligence via keyboard shortcut on Mac",
      "Siri AI context menus — control-click any image or text",
      "AFM Cloud Pro runs on Nvidia GPUs in Google's cloud",
      "Finder file transfers up to 5x faster with external drives",
      "New design refinements across all system apps",
      "Full Apple Intelligence integration across the platform",
    ],
  },
  {
    id: "parental",
    tag: "PARENTAL CONTROLS",
    tagColor: "text-green-400 border-green-500/40 bg-green-500/10",
    title: "New Child Safety & Parental Controls",
    subtitle: "The biggest Screen Time overhaul ever",
    img: IMGS.parental,
    href: "/parental-controls",
    points: [
      "Child Accounts — one-tap setup with age-appropriate protections",
      "Setup Assistant — choose exactly which apps kids can access",
      "Ask to Browse — kids need parental approval for new websites",
      "Communication Safety now blocks gore and violent content",
      "Time Allowances for Entertainment, Games, and Social Media",
      "Daily Schedules — control app access by time of day",
      "Redesigned Screen Time dashboard for parents",
      "Expert-backed daily time recommendations built in",
    ],
  },
  {
    id: "ai",
    tag: "APPLE INTELLIGENCE",
    tagColor: "text-purple-400 border-purple-500/40 bg-purple-500/10",
    title: "Next Generation Apple Intelligence",
    subtitle: "New architecture, new models, new capabilities",
    img: IMGS.appleIntel,
    href: "/wwdc-2026#ai",
    points: [
      "Second generation Apple Foundation Models (AFM)",
      "AFM can understand speech, read text and images",
      "New system orchestrator coordinates across all AI features",
      "Private Cloud Compute expanded — data never stored by Apple",
      "AFM Cloud Pro — Gemini Frontier quality via Google partnership",
      "Spatial Reframing — AI adjusts photo composition after the fact",
      "Home app uses AI to analyze security camera clips",
      "Passwords app uses AI agents to fix insecure passwords automatically",
    ],
  },
  {
    id: "timcook",
    tag: "TIM COOK",
    tagColor: "text-orange-400 border-orange-500/40 bg-orange-500/10",
    title: "Tim Cook's Farewell at His Last WWDC",
    subtitle: "Stepping down as CEO in September 2026",
    img: IMGS.timCook,
    href: "/wwdc-2026#timcook",
    points: [
      "Tim Cook delivered an emotional farewell message to developers",
      "Cook steps down as Apple CEO in September 2026",
      "John Ternus, Apple's hardware chief, will become the new CEO",
      "Cook will remain as Executive Chairman of Apple's board",
      "Cook praised developers for enriching people's lives",
      "The best is still ahead - Cook final message to Apple developers",
      "Apple stock initially rose but slid during the keynote",
      "Cook was not replaced on stage — Ternus not featured at WWDC",
    ],
  },
];

export default function WWDC() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMGS.hero} alt="WWDC 2026" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">
          <div className="section-label mb-2">June 8, 2026 — Apple Park, Cupertino</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-3">
            <span className="text-white">WWDC 2026</span>
            <br />
            <span className="text-gradient-blue">Complete Coverage</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl">
            Every announcement, every feature, every detail from Apple's biggest event of the year.
          </p>
        </div>
      </section>

      {/* Jump Links */}
      <div className="sticky top-14 md:top-16 z-40 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scroll-x">
            {announcements.map(a => (
              <a key={a.id} href={`#${a.id}`}
                className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all">
                {a.tag}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Announcements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-20">
        {announcements.map((item, i) => (
          <section key={item.id} id={item.id} className="scroll-mt-28">
            <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-start ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="fade-up">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${item.tagColor} mb-4`}>
                  {item.tag}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-2">{item.title}</h2>
                <p className="text-white/50 text-sm mb-5">{item.subtitle}</p>
                <ul className="space-y-2.5 mb-6">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-white/70 text-sm">
                      <ChevronRight className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
                {item.href.startsWith("/") && !item.href.includes("#") ? (
                  <Link href={item.href} className="btn-apple text-sm">
                    Full Deep Dive <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <a href={`https://www.apple.com/newsroom/2026/06/`} target="_blank" rel="noopener noreferrer"
                    className="btn-apple text-sm">
                    Apple Newsroom <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <div className="fade-up">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-white/5 to-transparent rounded-3xl blur-xl" />
                  <img
                    src={item.img}
                    alt={item.title}
                    className="relative rounded-2xl w-full border border-white/10 shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* More Photos */}
      <section className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label mb-3">From the Event</div>
          <h2 className="text-2xl font-bold mb-6">WWDC 2026 Photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[IMGS.wwdcStage, IMGS.wwdcPark, IMGS.siriWaitlist, IMGS.ios27official, IMGS.macosGG, IMGS.timCook].map((src, i) => (
              <div key={i} className="aspect-video rounded-xl overflow-hidden border border-white/10">
                <img src={src} alt={`WWDC 2026 photo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label mb-3">Sources & Further Reading</div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Apple Newsroom", href: "https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/" },
              { label: "CNBC Live Updates", href: "https://www.cnbc.com/2026/06/08/apple-wwdc-2026-live-updates.html" },
              { label: "9to5Mac", href: "https://9to5mac.com" },
              { label: "MacRumors", href: "https://macrumors.com" },
              { label: "The Verge", href: "https://theverge.com" },
              { label: "TechRadar", href: "https://techradar.com" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 text-xs font-medium transition-all">
                {s.label} <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
