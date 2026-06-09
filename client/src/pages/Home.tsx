import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Sparkles, Shield, Smartphone, Terminal, Users, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const IMGS = {
  hero: "/manus-storage/wwdc-keynote-stage_eaa33eea.jpg",
  timCook: "/manus-storage/tim-cook-wwdc26_adf55bac.png",
  siriAI: "/manus-storage/ios27-siri-ai-macrumors_9c505084.jpg",
  parental: "/manus-storage/parental-controls-1_bc44df2a.png",
  ios27: "/manus-storage/ios27-features_b971ec0e.jpg",
  macos: "/manus-storage/macos-golden-gate-macrumors_a351e6d8.jpg",
  iphones: "/manus-storage/iphone-pro-lineup_3fdcde73.jpeg",
  appleIntel: "/manus-storage/apple-intelligence-overview_bfebb74e.png",
  wwdc26: "/manus-storage/wwdc26-techradar_44670303.jpg",
};

const newsItems = [
  {
    tag: "SIRI AI",
    tagColor: "text-cyan-400",
    title: "Apple Unveils Siri AI — The Most Capable Siri Ever",
    desc: "Powered by Apple Intelligence, the new Siri is conversational, context-aware, and deeply integrated across every Apple device.",
    img: IMGS.siriAI,
    href: "/siri-ai",
    featured: true,
  },
  {
    tag: "PARENTAL CONTROLS",
    tagColor: "text-green-400",
    title: "New Child Safety Tools Give Parents Total Control",
    desc: "iOS 27 brings a complete overhaul of Screen Time with child accounts, app scheduling, and communication safety.",
    img: IMGS.parental,
    href: "/parental-controls",
    featured: true,
  },
  {
    tag: "iOS 27",
    tagColor: "text-blue-400",
    title: "iOS 27: Apps Launch 30% Faster, AirDrop 80% Faster",
    desc: "Performance is the headline — plus Liquid Glass customization, rebuilt search, and a new Siri app.",
    img: IMGS.ios27,
    href: "/wwdc-2026#ios27",
    featured: false,
  },
  {
    tag: "macOS",
    tagColor: "text-yellow-400",
    title: "macOS Golden Gate Announced",
    desc: "Apple names the next Mac OS after San Francisco's iconic landmark. Liquid Glass, Siri AI, and major performance gains.",
    img: IMGS.macos,
    href: "/wwdc-2026#macos",
    featured: false,
  },
  {
    tag: "APPLE INTELLIGENCE",
    tagColor: "text-purple-400",
    title: "Next-Gen Apple Intelligence Powers Everything",
    desc: "New Apple Foundation Models, Private Cloud Compute, and Google Gemini partnership for the most demanding tasks.",
    img: IMGS.appleIntel,
    href: "/wwdc-2026#ai",
    featured: false,
  },
  {
    tag: "TIM COOK",
    tagColor: "text-orange-400",
    title: "Tim Cook's Emotional Farewell at His Last WWDC",
    desc: "The outgoing Apple CEO delivered a heartfelt goodbye to developers as he prepares to hand the reins to John Ternus in September.",
    img: IMGS.timCook,
    href: "/wwdc-2026#timcook",
    featured: false,
  },
];

const sections = [
  { icon: Sparkles, label: "Siri AI", desc: "The biggest Siri upgrade in history", href: "/siri-ai", color: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/30" },
  { icon: Shield, label: "Parental Controls", desc: "Keep your kids safe in iOS 27", href: "/parental-controls", color: "from-green-500/20 to-emerald-500/20", border: "border-green-500/30" },
  { icon: Smartphone, label: "Every iPhone", desc: "iPhone 11 through iPhone 17", href: "/iphones", color: "from-blue-500/20 to-indigo-500/20", border: "border-blue-500/30" },
  { icon: Terminal, label: "Jailbreak", desc: "Tools, guides & compatibility", href: "/jailbreak", color: "from-orange-500/20 to-amber-500/20", border: "border-orange-500/30" },
  { icon: Users, label: "Community", desc: "Reddit threads & discussions", href: "/community", color: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/30" },
];

const tickerItems = [
  "🍎 WWDC 2026 — Siri AI Announced",
  "📱 iOS 27 Developer Beta Available Now",
  "💻 macOS Golden Gate Revealed",
  "👨‍👩‍👧 New Parental Controls in iOS 27",
  "🤖 Apple Intelligence Next Generation",
  "⌚ watchOS 27 Announced",
  "🥽 visionOS 27 with Siri AI",
  "🔐 Private Cloud Compute Expanded",
  "📸 Spatial Reframing — AI Photo Editing",
  "🎵 Apple Music Redesigned",
];

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* BREAKING NEWS TICKER */}
      <div className="bg-blue-600/90 border-b border-blue-500/50 overflow-hidden py-2">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 bg-white text-blue-700 text-xs font-black px-3 py-0.5 ml-4 rounded">
            BREAKING
          </div>
          <div className="overflow-hidden flex-1">
            <div className="flex gap-12 animate-ticker whitespace-nowrap">
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i} className="text-white text-xs font-medium">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={IMGS.hero}
            alt="WWDC 2026 Keynote at Apple Park"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="section-label mb-3">June 8, 2026 — Apple Park, Cupertino</div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none mb-4 max-w-4xl">
              <span className="text-white">WWDC 2026</span>
              <br />
              <span className="text-gradient-blue">Everything Announced</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
              Siri AI. iOS 27. macOS Golden Gate. New parental controls. Tim Cook's farewell. 
              The biggest Apple event of the year — covered in full.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/wwdc-2026" className="btn-apple text-sm">
                Full Coverage <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/siri-ai" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 text-sm font-medium transition-all">
                New Siri AI <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <div className="w-px h-8 bg-white/40 animate-pulse" />
          <span className="text-white/40 text-xs">Scroll</span>
        </div>
      </section>

      {/* QUICK NAV SECTIONS */}
      <section className="py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {sections.map((s) => (
              <Link key={s.href} href={s.href}>
                <div className={`glass-card p-4 bg-gradient-to-br ${s.color} border ${s.border} hover:scale-[1.02] transition-all duration-200 cursor-pointer`}>
                  <s.icon className="w-5 h-5 text-white/80 mb-2" />
                  <div className="text-white font-semibold text-sm">{s.label}</div>
                  <div className="text-white/50 text-xs mt-0.5 leading-tight">{s.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="section-label mb-1">Today's Top Stories</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">WWDC 2026 Highlights</h2>
            </div>
            <Link href="/wwdc-2026" className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
              All stories <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured 2-up */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {newsItems.filter(n => n.featured).map((item, i) => (
              <Link key={i} href={item.href}>
                <div className="news-card glass-card overflow-hidden cursor-pointer group h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className={`section-label ${item.tagColor} mb-2`}>{item.tag}</div>
                    <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    <div className="flex items-center gap-1 mt-3 text-blue-400 text-sm font-medium">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Grid 4-up */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {newsItems.filter(n => !n.featured).map((item, i) => (
              <Link key={i} href={item.href}>
                <div className="news-card glass-card overflow-hidden cursor-pointer group h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className={`section-label ${item.tagColor} mb-1.5`}>{item.tag}</div>
                    <h3 className="text-white font-semibold text-sm leading-tight mb-1.5 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SIRI AI SPOTLIGHT */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-black to-blue-950/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-glow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="fade-up">
              <div className="section-label text-cyan-400 mb-3">Biggest Feature of WWDC 2026</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
                <span className="text-gradient-siri">Siri AI</span>
                <br />
                <span className="text-white">is Finally Here</span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Apple has completely rebuilt Siri from the ground up. The new Siri AI is conversational, 
                context-aware, and powered by the next generation of Apple Intelligence. It can search 
                your photos, emails, and messages — and answer questions about anything on your screen.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Natural back-and-forth conversation",
                  "Searches across all your apps & data",
                  "Visual Intelligence on iPhone, iPad & Mac",
                  "Dedicated Siri app with conversation history",
                  "New expressive voices with customizable pace",
                  "Integrated writing tools everywhere you type",
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-white/70 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link href="/siri-ai" className="btn-apple bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500">
                Deep Dive: Siri AI <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="fade-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl" />
                <img
                  src={IMGS.siriAI}
                  alt="Siri AI on iPhone 17 Pro"
                  className="relative rounded-2xl w-full shadow-2xl border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARENTAL CONTROLS SPOTLIGHT */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-black to-emerald-950/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 fade-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl" />
                <img
                  src={IMGS.parental}
                  alt="New Parental Controls in iOS 27"
                  className="relative rounded-2xl w-full shadow-2xl border border-white/10"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 fade-up">
              <div className="section-label text-green-400 mb-3">New in iOS 27</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
                <span className="text-white">Parental Controls</span>
                <br />
                <span className="text-gradient-blue">Completely Rebuilt</span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Apple has overhauled Screen Time with powerful new tools that give parents 
                real control. Set up a child account and instantly enable age-appropriate 
                protections across iPhone, iPad, and Mac.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: "Child Accounts", desc: "One-tap setup with age-appropriate defaults" },
                  { label: "App Scheduling", desc: "Control access by time of day" },
                  { label: "Ask to Browse", desc: "Kids need approval for new websites" },
                  { label: "Communication Safety", desc: "Blocks gore and explicit content" },
                ].map((feat) => (
                  <div key={feat.label} className="glass-card p-3 border border-green-500/20">
                    <div className="text-green-400 font-semibold text-xs mb-1">{feat.label}</div>
                    <div className="text-white/50 text-xs leading-tight">{feat.desc}</div>
                  </div>
                ))}
              </div>
              <Link href="/parental-controls" className="btn-apple bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500">
                Full Parental Controls Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IPHONE LINEUP PREVIEW */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8 fade-up">
            <div>
              <div className="section-label mb-1">Every Model Covered</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">iPhone 11 → iPhone 17</h2>
            </div>
            <Link href="/iphones" className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative fade-up">
            <div className="absolute -inset-2 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
            <img
              src={IMGS.iphones}
              alt="iPhone lineup from iPhone 11 Pro to iPhone 16 Pro"
              className="w-full rounded-2xl border border-white/10 object-cover"
              style={{ maxHeight: "300px", objectPosition: "center" }}
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Link href="/iphones" className="btn-apple shadow-2xl">
                Explore Every iPhone <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JAILBREAK + REDDIT QUICK ACCESS */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Jailbreak */}
            <div className="glass-card p-6 border border-orange-500/20 bg-gradient-to-br from-orange-950/20 to-black fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <div className="section-label text-orange-400">Tools & Guides</div>
                  <h3 className="text-white font-bold text-lg">Jailbreak & Sideload</h3>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Check if your iPhone can be jailbroken. Find the latest tools — palera1n, 
                checkra1n, AltStore, Sideloadly, and more. Compatibility checker included.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["palera1n", "AltStore", "Sideloadly", "SideStore", "checkra1n"].map(tool => (
                  <span key={tool} className="font-mono-tech text-xs bg-orange-500/10 border border-orange-500/20 text-orange-300 px-2 py-1 rounded">
                    {tool}
                  </span>
                ))}
              </div>
              <Link href="/jailbreak" className="btn-apple bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-sm">
                Check Compatibility <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Reddit Community */}
            <div className="glass-card p-6 border border-purple-500/20 bg-gradient-to-br from-purple-950/20 to-black fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="section-label text-purple-400">Community</div>
                  <h3 className="text-white font-bold text-lg">Reddit Discussions</h3>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Live Reddit threads from r/apple, r/ios, r/iPhone, and r/jailbreak. 
                Real reactions to WWDC 2026, iOS 27 discussions, and community tips.
              </p>
              <div className="space-y-2 mb-4">
                {[
                  { sub: "r/apple", title: "WWDC 2026 Post-Event Megathread", href: "https://reddit.com/r/apple" },
                  { sub: "r/ios", title: "WWDC 2026 — June 8 Discussion", href: "https://reddit.com/r/ios" },
                  { sub: "r/jailbreak", title: "Jailbreaking in 2026", href: "https://reddit.com/r/jailbreak" },
                ].map(thread => (
                  <a key={thread.sub} href={thread.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                    <div>
                      <span className="text-purple-400 text-xs font-semibold">{thread.sub}</span>
                      <p className="text-white/70 text-xs mt-0.5">{thread.title}</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60 flex-shrink-0" />
                  </a>
                ))}
              </div>
              <Link href="/community" className="btn-apple bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-sm">
                All Threads <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT BY CORY HEPLER */}
      <section className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-white/30 text-xs">
            Everything Apple is an independent fan site built by{" "}
            <span className="text-white/60 font-semibold">Cory Hepler</span>.
            {" "}Not affiliated with Apple Inc. All product names and trademarks are property of Apple Inc.
          </p>
        </div>
      </section>
    </div>
  );
}
