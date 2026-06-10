import { useState } from "react";

// Apple Services — Complete Guide to Every Subscription
// Apple Music, TV+, Arcade, News+, Fitness+, iCloud+, Apple One

interface AppleService {
  id: number;
  name: string;
  description: string;
  pricing: { tier: string; price: string }[];
  features: string[];
  platforms: string[];
  competitors: string[];
  verdict: string;
  category: "entertainment" | "productivity" | "health" | "bundle";
}

const APPLE_SERVICES: AppleService[] = [
  {
    id: 1,
    name: "Apple Music",
    description: "Stream 100+ million songs, live radio, spatial audio with Dolby Atmos, and AI-powered personal DJ.",
    pricing: [
      { tier: "Individual", price: "$10.99/mo" },
      { tier: "Family (up to 6)", price: "$16.99/mo" },
      { tier: "Student", price: "$5.99/mo" },
    ],
    features: [
      "100+ million songs, ad-free",
      "Spatial Audio with Dolby Atmos",
      "Lossless audio up to 24-bit/192kHz",
      "Apple Music Sing (real-time lyrics karaoke)",
      "Personal DJ powered by AI",
      "Collaborative playlists with friends",
      "Live radio: Apple Music 1, Apple Music Hits, Apple Music Country",
      "Music videos in 4K",
      "Offline downloads",
      "Cross-fade between tracks",
      "Apple Music Classical (separate app, included free)",
      "SharePlay: listen together over FaceTime"
    ],
    platforms: ["iPhone", "iPad", "Mac", "Apple Watch", "Apple TV", "HomePod", "Windows", "Android", "Web"],
    competitors: ["Spotify ($10.99/mo)", "YouTube Music ($10.99/mo)", "Tidal ($10.99/mo)", "Amazon Music ($9.99/mo)"],
    verdict: "Best for Apple ecosystem users. Spatial Audio and Lossless are free (Spotify charges extra). Better library curation but Spotify has better discovery algorithms.",
    category: "entertainment"
  },
  {
    id: 2,
    name: "Apple TV+",
    description: "Original movies and TV shows. No ads, no back catalog — just Apple-produced premium content.",
    pricing: [
      { tier: "Monthly", price: "$9.99/mo" },
      { tier: "Yearly", price: "$99/yr (save $20)" },
    ],
    features: [
      "All content in 4K HDR with Dolby Vision",
      "Dolby Atmos spatial audio on all titles",
      "Original series: Severance, Ted Lasso, The Morning Show, Silo",
      "Original films: Killers of the Flower Moon, Napoleon, Wolfs",
      "Friday Night Baseball (live MLB games)",
      "MLS Season Pass (all MLS matches)",
      "Up to 6 simultaneous streams",
      "Offline downloads",
      "SharePlay support",
      "No ads ever",
      "Free 3 months with new Apple device purchase"
    ],
    platforms: ["iPhone", "iPad", "Mac", "Apple TV", "Smart TVs (Samsung, LG, Sony)", "Roku", "Fire TV", "PlayStation", "Xbox", "Web"],
    competitors: ["Netflix ($15.49/mo)", "Disney+ ($13.99/mo)", "HBO Max ($15.99/mo)", "Amazon Prime Video ($8.99/mo)"],
    verdict: "Smallest library but highest quality-per-show ratio. Worth it for Severance and Silo alone. Best value when bundled in Apple One.",
    category: "entertainment"
  },
  {
    id: 3,
    name: "Apple Arcade",
    description: "200+ premium games with no ads, no in-app purchases. New games added every week.",
    pricing: [
      { tier: "Monthly", price: "$6.99/mo" },
    ],
    features: [
      "200+ games, all premium (no ads or IAP)",
      "New games added weekly",
      "Play across iPhone, iPad, Mac, Apple TV",
      "Save progress syncs between devices",
      "Controller support (PS5, Xbox, MFi)",
      "Family Sharing (up to 6 people)",
      "Offline play supported",
      "Exclusive titles not on other platforms",
      "Categories: puzzle, adventure, racing, RPG, strategy, sports",
      "Notable games: Sneaky Sasquatch, What the Golf, Stardew Valley+"
    ],
    platforms: ["iPhone", "iPad", "Mac", "Apple TV"],
    competitors: ["Xbox Game Pass ($9.99/mo)", "Google Play Pass ($4.99/mo)", "Netflix Games (free with Netflix)"],
    verdict: "Best for casual/family gaming. No predatory monetization. Not for hardcore gamers who want AAA titles.",
    category: "entertainment"
  },
  {
    id: 4,
    name: "iCloud+",
    description: "Cloud storage, Private Relay VPN, Hide My Email, custom email domains, and HomeKit Secure Video.",
    pricing: [
      { tier: "50 GB", price: "$0.99/mo" },
      { tier: "200 GB", price: "$2.99/mo" },
      { tier: "2 TB", price: "$9.99/mo" },
      { tier: "6 TB", price: "$29.99/mo" },
      { tier: "12 TB", price: "$59.99/mo" },
    ],
    features: [
      "iCloud storage for photos, backups, files",
      "Private Relay (Safari VPN-like protection)",
      "Hide My Email (unlimited random addresses)",
      "Custom email domain (up to 5 domains)",
      "HomeKit Secure Video (unlimited cameras on 2TB+)",
      "Family Sharing of storage",
      "iCloud Drive file sync across devices",
      "iCloud Photos (full-res sync)",
      "Device backups",
      "iCloud Keychain (password sync)",
      "Advanced Data Protection (E2E encryption)"
    ],
    platforms: ["iPhone", "iPad", "Mac", "Windows", "Web"],
    competitors: ["Google One ($1.99/mo for 100GB)", "OneDrive ($1.99/mo for 100GB)", "Dropbox ($11.99/mo for 2TB)"],
    verdict: "Essential for any Apple user. The 200GB tier is the sweet spot for most families. Private Relay and Hide My Email alone justify the cost.",
    category: "productivity"
  },
  {
    id: 5,
    name: "Apple Fitness+",
    description: "Studio-quality workout videos with real-time metrics from Apple Watch. 12 workout types.",
    pricing: [
      { tier: "Monthly", price: "$9.99/mo" },
      { tier: "Yearly", price: "$79.99/yr (save $40)" },
    ],
    features: [
      "3,000+ workout videos",
      "12 workout types: HIIT, Yoga, Strength, Cycling, Running, etc.",
      "Real-time metrics from Apple Watch on screen",
      "Burn Bar: compare against others anonymously",
      "Meditation sessions (5-20 minutes)",
      "Time to Walk: celebrity audio walking stories",
      "Custom Plans: 4-week structured programs",
      "SharePlay: work out with friends",
      "New workouts added every week",
      "Beginner to advanced difficulty levels",
      "No equipment needed for most workouts",
      "Works without Apple Watch (limited metrics)"
    ],
    platforms: ["iPhone", "iPad", "Apple TV"],
    competitors: ["Peloton ($12.99/mo)", "Nike Training Club (free)", "YouTube (free)", "Beachbody ($12.99/mo)"],
    verdict: "Best for Apple Watch owners. The real-time metrics integration is unmatched. Good variety but Peloton has better cycling/running content.",
    category: "health"
  },
  {
    id: 6,
    name: "Apple News+",
    description: "Access to 300+ premium magazines and newspapers including Wall Street Journal, LA Times, and more.",
    pricing: [
      { tier: "Monthly", price: "$12.99/mo" },
    ],
    features: [
      "300+ magazines in digital format",
      "Premium newspapers: WSJ, LA Times, Toronto Star",
      "Audio stories (narrated articles)",
      "Offline reading",
      "Beautiful magazine layouts optimized for iPad",
      "Daily curated selections",
      "No ads in News+ content",
      "Family Sharing (up to 6)",
      "Crossword puzzles",
      "Local news coverage",
      "Sports coverage with live scores"
    ],
    platforms: ["iPhone", "iPad", "Mac"],
    competitors: ["Individual subscriptions ($5-30 each)", "Readly ($11.99/mo)", "Kindle Unlimited ($11.99/mo)"],
    verdict: "Worth it if you read 2+ magazines regularly. The WSJ access alone is $39/mo separately. Best experienced on iPad.",
    category: "entertainment"
  },
  {
    id: 7,
    name: "Apple One",
    description: "Bundle all Apple services together at a discount. Three tiers available.",
    pricing: [
      { tier: "Individual (Music, TV+, Arcade, iCloud+ 50GB)", price: "$19.95/mo (save $7)" },
      { tier: "Family (above + 200GB, up to 6 people)", price: "$25.95/mo (save $13)" },
      { tier: "Premier (all services + News+, Fitness+, 2TB)", price: "$37.95/mo (save $25)" },
    ],
    features: [
      "All Apple services in one subscription",
      "Significant savings vs individual subscriptions",
      "Family Sharing built-in (Family and Premier tiers)",
      "Single billing — one charge per month",
      "Free trial for services you don't already subscribe to",
      "Easy to manage in Settings",
      "Can still add individual services on top",
      "Premier tier saves $25/mo vs buying everything separately"
    ],
    platforms: ["All Apple devices"],
    competitors: ["No direct equivalent", "Amazon Prime ($14.99/mo — video, music, shipping)", "Google One ($9.99/mo — storage only)"],
    verdict: "Premier is the best value in tech subscriptions. If you use 3+ Apple services, Apple One saves real money. Family tier is the sweet spot for most households.",
    category: "bundle"
  },
];

const CATEGORY_META: Record<string, { label: string; color: string }> = {
  entertainment: { label: "Entertainment", color: "text-purple-400" },
  productivity: { label: "Productivity", color: "text-blue-400" },
  health: { label: "Health & Fitness", color: "text-green-400" },
  bundle: { label: "Bundle", color: "text-orange-400" },
};

export default function AppleServices() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Subscribe Smart</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Apple Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Every Apple subscription explained — pricing, features, competitors, and honest verdicts. 
            Find the right services for you.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-4">
          {APPLE_SERVICES.map(service => {
            const isExpanded = expandedId === service.id;
            const catMeta = CATEGORY_META[service.category];
            return (
              <div
                key={service.id}
                className="rounded-xl border border-border/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden cursor-pointer"
                onClick={() => setExpandedId(isExpanded ? null : service.id)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <span className={`text-xs ${catMeta.color}`}>{catMeta.label}</span>
                      <h3 className="text-2xl font-bold mt-1">{service.name}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {service.pricing.map((p, i) => (
                          <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-border/30">
                            {p.tier}: <strong>{p.price}</strong>
                          </span>
                        ))}
                      </div>
                    </div>
                    <svg className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-border/20 pt-4 space-y-5">
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-purple-400">Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-blue-400">Available On</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.platforms.map(p => (
                          <span key={p} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-orange-400">Competitors</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.competitors.map(c => (
                          <span key={c} className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.03] border border-border/20">
                      <h4 className="text-sm font-semibold mb-1 text-green-400">Our Verdict</h4>
                      <p className="text-sm text-muted-foreground">{service.verdict}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Recommendation */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Which Bundle Should You Get?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="p-6 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-lg mb-2">Solo User</h3>
              <p className="text-2xl font-bold text-purple-400 mb-2">Individual</p>
              <p className="text-sm text-muted-foreground">$19.95/mo — Music, TV+, Arcade, 50GB iCloud. Perfect if you live alone and want entertainment + basic cloud storage.</p>
            </div>
            <div className="p-6 rounded-xl border-2 border-purple-500/50 bg-purple-500/5 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] px-3 py-1 rounded-full bg-purple-500 text-white font-bold">BEST VALUE</span>
              <h3 className="font-bold text-lg mb-2">Family</h3>
              <p className="text-2xl font-bold text-purple-400 mb-2">Family</p>
              <p className="text-sm text-muted-foreground">$25.95/mo — Everything Individual + 200GB shared + up to 6 people. $4.33/person if you max out sharing.</p>
            </div>
            <div className="p-6 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-lg mb-2">Power User</h3>
              <p className="text-2xl font-bold text-purple-400 mb-2">Premier</p>
              <p className="text-sm text-muted-foreground">$37.95/mo — Everything + News+, Fitness+, 2TB. Best for families who use Apple Watch and read magazines.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
