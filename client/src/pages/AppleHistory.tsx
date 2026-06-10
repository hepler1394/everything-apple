import { useState, useRef, useEffect } from "react";

// Comprehensive Apple History Timeline — from 1976 to 2026
// Covers every major product launch, leadership change, and pivotal moment

interface HistoryEvent {
  year: number;
  month?: string;
  title: string;
  description: string;
  category: "product" | "leadership" | "software" | "service" | "milestone" | "acquisition";
  impact: "revolutionary" | "major" | "significant" | "notable";
  details?: string[];
}

const APPLE_HISTORY: HistoryEvent[] = [
  {
    year: 1976,
    month: "April",
    title: "Apple Computer Company Founded",
    description: "Steve Jobs, Steve Wozniak, and Ronald Wayne found Apple Computer Company in the Jobs family garage in Los Altos, California.",
    category: "milestone",
    impact: "revolutionary",
    details: [
      "Initial investment of $1,300 from selling Jobs' VW van and Wozniak's HP calculator",
      "Ronald Wayne sold his 10% stake for $800 just 12 days later",
      "First product was the Apple I, hand-built by Wozniak",
      "Sold for $666.66 — about $3,400 in today's money"
    ]
  },
  {
    year: 1977,
    month: "June",
    title: "Apple II Released",
    description: "The Apple II becomes one of the first mass-produced personal computers, featuring color graphics and an open architecture.",
    category: "product",
    impact: "revolutionary",
    details: [
      "First personal computer with color graphics",
      "Open architecture allowed third-party expansion cards",
      "VisiCalc spreadsheet made it essential for business",
      "Sold over 6 million units across all variants",
      "Remained in production until 1993 — 16 years"
    ]
  },
  {
    year: 1980,
    month: "December",
    title: "Apple Goes Public (IPO)",
    description: "Apple's IPO generates more capital than any IPO since Ford Motor Company in 1956, instantly creating 300 millionaires.",
    category: "milestone",
    impact: "major",
    details: [
      "Share price: $22, rose to $29 on first day",
      "Company valued at $1.778 billion",
      "Created more millionaires than any company in history at that point",
      "Jobs' stake worth $217 million at age 25"
    ]
  },
  {
    year: 1983,
    month: "January",
    title: "Lisa Computer Launched",
    description: "Apple Lisa introduces the first commercial personal computer with a GUI and mouse, but fails commercially at $9,995.",
    category: "product",
    impact: "significant",
    details: [
      "First commercial computer with a graphical user interface",
      "Named after Jobs' daughter (officially 'Local Integrated Software Architecture')",
      "Price of $9,995 limited market appeal",
      "Only 10,000 units sold before discontinuation"
    ]
  },
  {
    year: 1984,
    month: "January",
    title: "Macintosh Introduced",
    description: "The original Macintosh launches with the iconic '1984' Super Bowl commercial directed by Ridley Scott, democratizing personal computing.",
    category: "product",
    impact: "revolutionary",
    details: [
      "'1984' ad cost $900,000 to produce and $800,000 to air",
      "128KB RAM, 9-inch monochrome display",
      "First commercially successful computer with a mouse and GUI",
      "Priced at $2,495 — about $7,200 in today's money",
      "Sold 70,000 units in first 100 days"
    ]
  },
  {
    year: 1985,
    month: "September",
    title: "Steve Jobs Leaves Apple",
    description: "After a power struggle with CEO John Sculley, Steve Jobs resigns from Apple and founds NeXT Computer.",
    category: "leadership",
    impact: "major",
    details: [
      "Board sided with Sculley after Jobs tried to oust him",
      "Jobs sold all but one share of Apple stock",
      "Founded NeXT with $7 million of his own money",
      "Also purchased Pixar from Lucasfilm for $5 million",
      "Apple would struggle for the next 12 years without him"
    ]
  },
  {
    year: 1991,
    month: "October",
    title: "PowerBook Laptop Line Debuts",
    description: "Apple introduces the PowerBook, establishing the modern laptop form factor with the trackball positioned in front of the keyboard.",
    category: "product",
    impact: "major",
    details: [
      "Established the modern laptop layout still used today",
      "Trackball (later trackpad) centered below keyboard",
      "Palm rests on either side became industry standard",
      "Generated $1 billion in first-year sales"
    ]
  },
  {
    year: 1993,
    month: "August",
    title: "Newton MessagePad Released",
    description: "Apple's first PDA features handwriting recognition and foreshadows the smartphone era, but is ahead of its time.",
    category: "product",
    impact: "notable",
    details: [
      "First Apple device with ARM processor",
      "Handwriting recognition was initially poor, improved over time",
      "Coined the term 'Personal Digital Assistant'",
      "Discontinued in 1998 by Jobs upon his return",
      "Spiritual ancestor of the iPhone and iPad"
    ]
  },
  {
    year: 1997,
    month: "September",
    title: "Steve Jobs Returns as CEO",
    description: "Apple acquires NeXT for $429 million, bringing Jobs back. He becomes interim CEO and begins Apple's transformation.",
    category: "leadership",
    impact: "revolutionary",
    details: [
      "Apple was 90 days from bankruptcy when Jobs returned",
      "Immediately killed 70% of Apple's product line",
      "Drew the famous 2x2 product grid (Consumer/Pro × Desktop/Portable)",
      "Secured $150 million investment from Microsoft",
      "Introduced the 'Think Different' campaign"
    ]
  },
  {
    year: 1998,
    month: "August",
    title: "iMac G3 Launched",
    description: "The translucent, colorful iMac G3 saves Apple from bankruptcy and establishes Jony Ive's design language.",
    category: "product",
    impact: "revolutionary",
    details: [
      "Sold 278,000 units in first 6 weeks",
      "Came in 13 different colors (Bondi Blue first)",
      "Eliminated floppy drive — controversial at the time",
      "First major product designed by Jony Ive",
      "The 'i' stood for internet, individual, instruct, inform, inspire"
    ]
  },
  {
    year: 2001,
    month: "January",
    title: "iTunes Launched",
    description: "iTunes debuts as a music management application, laying the groundwork for Apple's digital media empire.",
    category: "software",
    impact: "major",
    details: [
      "Based on SoundJam MP, acquired from Casady & Greene",
      "Free with every Mac",
      "Would later become the world's largest music retailer",
      "iTunes Store launched in 2003 with 200,000 songs at $0.99 each"
    ]
  },
  {
    year: 2001,
    month: "October",
    title: "iPod Introduced",
    description: "'1,000 songs in your pocket' — the iPod transforms the music industry and establishes Apple as a consumer electronics powerhouse.",
    category: "product",
    impact: "revolutionary",
    details: [
      "5GB hard drive held 1,000 songs",
      "Scroll wheel interface was revolutionary",
      "Priced at $399",
      "Eventually sold over 450 million units across all models",
      "Generated the revenue that funded iPhone development"
    ]
  },
  {
    year: 2003,
    month: "April",
    title: "iTunes Store Opens",
    description: "The iTunes Music Store launches with 200,000 songs, selling 1 million tracks in its first week.",
    category: "service",
    impact: "revolutionary",
    details: [
      "First legal, easy-to-use digital music store",
      "Songs priced at $0.99, albums at $9.99",
      "1 million songs sold in first 5 days",
      "Became world's largest music retailer by 2008",
      "Fundamentally changed how music was distributed"
    ]
  },
  {
    year: 2006,
    month: "January",
    title: "Intel Transition Announced",
    description: "Apple completes its transition from PowerPC to Intel processors, enabling Boot Camp and dramatically improving performance.",
    category: "milestone",
    impact: "major",
    details: [
      "Transition completed in just 7 months (announced June 2005)",
      "Rosetta translation layer maintained PowerPC app compatibility",
      "Enabled Boot Camp for running Windows natively",
      "MacBook Pro was first Intel Mac (January 2006)",
      "Set precedent for the later Apple Silicon transition"
    ]
  },
  {
    year: 2007,
    month: "January",
    title: "iPhone Announced",
    description: "Steve Jobs introduces iPhone at Macworld: 'An iPod, a phone, and an internet communicator.' The smartphone era begins.",
    category: "product",
    impact: "revolutionary",
    details: [
      "Multi-touch capacitive screen was unprecedented",
      "No physical keyboard — controversial at the time",
      "Combined iPod + Phone + Internet device",
      "Original price: $499 (4GB) / $599 (8GB)",
      "Sold 6.1 million units in first year",
      "Has since generated over $2 trillion in cumulative revenue"
    ]
  },
  {
    year: 2008,
    month: "July",
    title: "App Store Launches",
    description: "The App Store opens with 500 apps, creating an entirely new software economy that would generate hundreds of billions in revenue.",
    category: "service",
    impact: "revolutionary",
    details: [
      "500 apps at launch, 25% free",
      "10 million downloads in first weekend",
      "Created the 'app economy' — now worth $1.1 trillion annually",
      "Over 1.8 million apps available today",
      "Has paid developers over $320 billion since launch"
    ]
  },
  {
    year: 2010,
    month: "January",
    title: "iPad Introduced",
    description: "Steve Jobs unveils the iPad, creating the tablet computing category and the 'post-PC' era.",
    category: "product",
    impact: "revolutionary",
    details: [
      "Critics called it 'just a big iPod touch'",
      "Sold 3 million units in first 80 days",
      "Created the modern tablet market",
      "Starting price of $499",
      "Now the world's most popular tablet with 60%+ market share"
    ]
  },
  {
    year: 2011,
    month: "October",
    title: "Steve Jobs Passes Away",
    description: "Apple co-founder Steve Jobs dies at age 56 after a long battle with pancreatic cancer. Tim Cook becomes CEO.",
    category: "leadership",
    impact: "revolutionary",
    details: [
      "Jobs had been on medical leave since January 2011",
      "Resigned as CEO on August 24, 2011",
      "Passed away on October 5, 2011",
      "Tim Cook had been running day-to-day operations since 2009",
      "Apple's market cap was $350 billion at the time"
    ]
  },
  {
    year: 2011,
    month: "October",
    title: "Siri Introduced with iPhone 4S",
    description: "Apple introduces Siri, the first mainstream AI voice assistant, integrated into iPhone 4S.",
    category: "software",
    impact: "major",
    details: [
      "Based on technology from SRI International",
      "Apple acquired Siri in 2010 for $200 million",
      "First mainstream voice assistant (predated Alexa by 3 years)",
      "Initially limited but set the stage for AI assistants",
      "Would be completely rebuilt with Apple Intelligence in 2025-2026"
    ]
  },
  {
    year: 2013,
    month: "September",
    title: "Touch ID & iPhone 5s",
    description: "Apple introduces fingerprint biometric authentication with Touch ID, making security seamless.",
    category: "product",
    impact: "major",
    details: [
      "First mainstream fingerprint sensor in a smartphone",
      "Enabled Apple Pay (launched 2014)",
      "64-bit A7 chip was first in a smartphone",
      "Gold color option was new for iPhone",
      "Set the standard for biometric phone security"
    ]
  },
  {
    year: 2014,
    month: "September",
    title: "Apple Watch Announced",
    description: "Tim Cook unveils Apple Watch, Apple's first new product category under his leadership.",
    category: "product",
    impact: "major",
    details: [
      "First new product category since iPad (2010)",
      "Launched in April 2015 starting at $349",
      "Now the world's most popular watch (not just smartwatch)",
      "Health features have literally saved lives (fall detection, ECG)",
      "Generates estimated $17 billion annual revenue"
    ]
  },
  {
    year: 2015,
    month: "September",
    title: "iPhone 6s & 3D Touch",
    description: "Apple introduces 3D Touch pressure-sensitive display and Live Photos, pushing interaction design forward.",
    category: "product",
    impact: "significant",
    details: [
      "3D Touch added peek and pop gestures",
      "Live Photos captured 1.5 seconds before and after",
      "Rose Gold color introduced",
      "A9 chip with 70% faster CPU than A8",
      "3D Touch would later be replaced by Haptic Touch in 2019"
    ]
  },
  {
    year: 2016,
    month: "September",
    title: "AirPods Introduced",
    description: "Apple removes the headphone jack from iPhone 7 and introduces AirPods, creating the true wireless earbud category.",
    category: "product",
    impact: "revolutionary",
    details: [
      "Removing the headphone jack was hugely controversial",
      "'Courage' — Phil Schiller's infamous justification",
      "AirPods became a cultural phenomenon",
      "W1 chip enabled seamless pairing",
      "Now generates estimated $12+ billion annually",
      "Created the entire TWS (True Wireless Stereo) market"
    ]
  },
  {
    year: 2017,
    month: "September",
    title: "iPhone X — The Future of Smartphone",
    description: "Apple's 10th anniversary iPhone eliminates the home button, introduces Face ID, and establishes the modern iPhone design language.",
    category: "product",
    impact: "revolutionary",
    details: [
      "First iPhone without a home button",
      "Face ID replaced Touch ID using TrueDepth camera",
      "Edge-to-edge OLED Super Retina display",
      "Starting price of $999 — first $1000 phone",
      "Gesture-based navigation replaced physical buttons",
      "Design language still used in iPhone 16 series"
    ]
  },
  {
    year: 2019,
    month: "November",
    title: "Apple TV+ Launches",
    description: "Apple enters the streaming wars with Apple TV+, offering original content and bundling with hardware purchases.",
    category: "service",
    impact: "significant",
    details: [
      "Launched at $4.99/month — cheapest major streamer",
      "Free year with new Apple device purchases",
      "Ted Lasso became a cultural phenomenon",
      "CODA won Best Picture at the Oscars (2022)",
      "Part of Apple's services revenue push"
    ]
  },
  {
    year: 2020,
    month: "November",
    title: "Apple Silicon M1 Chip",
    description: "Apple begins its transition from Intel to custom ARM-based chips. The M1 delivers unprecedented performance per watt.",
    category: "product",
    impact: "revolutionary",
    details: [
      "5nm process — first for a personal computer",
      "3.5x faster CPU than Intel predecessor",
      "Up to 20 hours battery life in MacBook Air",
      "Unified memory architecture eliminated RAM bottleneck",
      "Ran iOS apps natively on Mac",
      "Rosetta 2 maintained Intel app compatibility",
      "Began the end of Intel's dominance in personal computing"
    ]
  },
  {
    year: 2023,
    month: "June",
    title: "Apple Vision Pro Announced",
    description: "Apple enters spatial computing with Vision Pro, a $3,499 mixed reality headset that blends digital content with the real world.",
    category: "product",
    impact: "major",
    details: [
      "First new product category since Apple Watch",
      "M2 chip + dedicated R1 chip for real-time sensor processing",
      "12ms photon-to-motion latency",
      "EyeSight shows your eyes to people around you",
      "Priced at $3,499 — positioned as developer/pro device",
      "visionOS is a full spatial operating system"
    ]
  },
  {
    year: 2024,
    month: "June",
    title: "Apple Intelligence Announced",
    description: "Apple unveils Apple Intelligence at WWDC24, integrating generative AI deeply into iOS 18, macOS Sequoia, and iPadOS 18.",
    category: "software",
    impact: "revolutionary",
    details: [
      "On-device AI models for privacy",
      "Private Cloud Compute for heavier tasks",
      "Writing Tools across all apps",
      "Image Playground for AI image generation",
      "Genmoji for custom emoji",
      "ChatGPT integration with Siri",
      "Required A17 Pro or M1+ chips"
    ]
  },
  {
    year: 2025,
    month: "September",
    title: "iPhone 17 Series Launches",
    description: "iPhone 17 introduces the ultra-thin iPhone Air, ProMotion across all models, and the A19 chip with enhanced AI capabilities.",
    category: "product",
    impact: "major",
    details: [
      "iPhone 17 Air — thinnest iPhone ever at 5.5mm",
      "A19 chip with 3nm process",
      "ProMotion 120Hz on all models (finally)",
      "48MP front camera across the lineup",
      "Wi-Fi 7 and Bluetooth 5.4",
      "Apple Intelligence features fully mature"
    ]
  },
  {
    year: 2026,
    month: "June",
    title: "WWDC 2026 — Siri AI Revolution",
    description: "Apple unveils iOS 27, macOS Golden Gate, and a completely rebuilt Siri powered by large language models.",
    category: "software",
    impact: "revolutionary",
    details: [
      "Siri AI — complete ground-up rebuild with LLM",
      "iOS 27 with Liquid Glass design language",
      "macOS Golden Gate with unified AI assistant",
      "watchOS 12 with health AI insights",
      "visionOS 3 with spatial AI",
      "On-device LLM runs on A18+ and M-series chips",
      "Siri can now control any app, chain actions, and reason"
    ]
  }
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  product: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30" },
  leadership: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30" },
  software: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/30" },
  service: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/30" },
  milestone: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/30" },
  acquisition: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/30" },
};

const IMPACT_SIZES: Record<string, string> = {
  revolutionary: "w-5 h-5",
  major: "w-4 h-4",
  significant: "w-3 h-3",
  notable: "w-2.5 h-2.5",
};

export default function AppleHistory() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set());
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredEvents = selectedCategory === "all"
    ? APPLE_HISTORY
    : APPLE_HISTORY.filter(e => e.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleEvents(prev => new Set([...Array.from(prev), idx]));
          }
        });
      },
      { threshold: 0.2 }
    );

    eventRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredEvents]);

  const categories = [
    { key: "all", label: "All Events" },
    { key: "product", label: "Products" },
    { key: "leadership", label: "Leadership" },
    { key: "software", label: "Software" },
    { key: "service", label: "Services" },
    { key: "milestone", label: "Milestones" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">1976 — 2026</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            50 Years of <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Apple</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From a garage in Los Altos to the world's most valuable company. Every major product, 
            every pivotal moment, every revolution — chronicled in full.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border/50 py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-400">50</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Years</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-400">{APPLE_HISTORY.length}</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Key Events</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-400">$3.5T</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Market Cap (2026)</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-400">2.2B</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Active Devices</p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 px-4 border-b border-border/30">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat.key
                  ? "bg-white text-black"
                  : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50" />

          {filteredEvents.map((event, idx) => {
            const colors = CATEGORY_COLORS[event.category];
            const isLeft = idx % 2 === 0;
            const isVisible = visibleEvents.has(idx);
            const isExpanded = expandedEvent === idx;

            return (
              <div
                key={`${event.year}-${event.title}`}
                ref={el => { eventRefs.current[idx] = el; }}
                data-index={idx}
                className={`relative mb-8 md:mb-12 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(idx % 5) * 80}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 top-6 ${IMPACT_SIZES[event.impact]} rounded-full bg-white shadow-lg shadow-white/20 z-10`} />

                {/* Card */}
                <div className={`ml-14 md:ml-0 ${isLeft ? "md:mr-[52%]" : "md:ml-[52%]"}`}>
                  <div
                    className={`p-5 rounded-xl border ${colors.border} ${colors.bg} backdrop-blur-sm cursor-pointer hover:scale-[1.01] transition-transform duration-200`}
                    onClick={() => setExpandedEvent(isExpanded ? null : idx)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-mono px-2 py-0.5 rounded ${colors.bg} ${colors.text} border ${colors.border}`}>
                        {event.year}{event.month ? ` · ${event.month}` : ""}
                      </span>
                      <span className={`text-xs uppercase tracking-wider ${colors.text}`}>
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>

                    {/* Expanded details */}
                    {isExpanded && event.details && (
                      <div className="mt-4 pt-4 border-t border-border/30">
                        <ul className="space-y-2">
                          {event.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.text} bg-current flex-shrink-0`} />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {event.details && (
                      <button className={`mt-3 text-xs ${colors.text} hover:underline`}>
                        {isExpanded ? "Show less" : `${event.details.length} more details →`}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Decade Summary */}
      <section className="py-16 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">By the Decade</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { decade: "1976–1985", title: "The Garage Era", desc: "From nothing to the Macintosh. Personal computing is born.", color: "from-blue-600 to-blue-800" },
              { decade: "1986–1996", title: "The Wilderness Years", desc: "Jobs leaves. Apple drifts. Newton, Copland, near-bankruptcy.", color: "from-gray-600 to-gray-800" },
              { decade: "1997–2006", title: "The Comeback", desc: "Jobs returns. iMac, iPod, iTunes. Apple becomes cool again.", color: "from-purple-600 to-purple-800" },
              { decade: "2007–2016", title: "The iPhone Decade", desc: "iPhone, iPad, App Store, Apple Watch. Apple becomes the world's most valuable company.", color: "from-green-600 to-green-800" },
              { decade: "2017–2025", title: "The Services & Silicon Era", desc: "Apple Silicon, Apple TV+, Vision Pro. Hardware meets AI.", color: "from-orange-600 to-orange-800" },
              { decade: "2026+", title: "The AI Era", desc: "Siri AI, on-device LLMs, spatial computing. The next chapter begins.", color: "from-pink-600 to-pink-800" },
            ].map(d => (
              <div key={d.decade} className={`p-6 rounded-xl bg-gradient-to-br ${d.color} text-white`}>
                <p className="text-xs font-mono opacity-70 mb-1">{d.decade}</p>
                <h3 className="text-xl font-bold mb-2">{d.title}</h3>
                <p className="text-sm opacity-80">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
