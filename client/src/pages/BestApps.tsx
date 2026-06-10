import { useState } from "react";

// Best Apps for iPhone, iPad, and Mac — 2026 Edition
// Curated picks across every category

interface AppPick {
  name: string;
  subtitle: string;
  price: string;
  platforms: string[];
  why: string;
}

interface AppCategory {
  name: string;
  icon: string;
  picks: AppPick[];
}

const APP_CATEGORIES: AppCategory[] = [
  {
    name: "Productivity",
    icon: "⚡",
    picks: [
      { name: "Things 3", subtitle: "Task Manager", price: "$9.99 (iPhone) / $49.99 (Mac)", platforms: ["iPhone", "iPad", "Mac", "Watch"], why: "Beautiful design, powerful without complexity. Quick Entry, Today view, and natural language input make it the best GTD app." },
      { name: "Notion", subtitle: "All-in-One Workspace", price: "Free / $10/mo Pro", platforms: ["iPhone", "iPad", "Mac", "Web"], why: "Notes, databases, wikis, project management in one app. AI features included. Best for teams and knowledge management." },
      { name: "Fantastical", subtitle: "Calendar", price: "$6.99/mo", platforms: ["iPhone", "iPad", "Mac", "Watch"], why: "Natural language event creation, multiple calendar sets, weather integration, and beautiful week view." },
      { name: "Spark", subtitle: "Email Client", price: "Free / $7.99/mo Premium", platforms: ["iPhone", "iPad", "Mac"], why: "Smart inbox, AI email writing, snooze, send later, and team collaboration. Best email client for Apple ecosystem." },
      { name: "Bear", subtitle: "Notes & Writing", price: "$2.99/mo", platforms: ["iPhone", "iPad", "Mac"], why: "Markdown-based notes with beautiful typography. Tags instead of folders. Fast, focused, and syncs via iCloud." },
    ]
  },
  {
    name: "Photo & Video",
    icon: "📷",
    picks: [
      { name: "Darkroom", subtitle: "Photo Editor", price: "Free / $4.99/mo", platforms: ["iPhone", "iPad", "Mac"], why: "Professional color grading with batch editing. Supports RAW, ProRAW, and has the best filter system on iOS." },
      { name: "Halide", subtitle: "Pro Camera", price: "$2.99/mo", platforms: ["iPhone", "iPad"], why: "Manual controls, ProRAW capture, focus peaking, and Process Zero for unprocessed photos. Best camera app." },
      { name: "LumaFusion", subtitle: "Video Editor", price: "$29.99", platforms: ["iPhone", "iPad"], why: "Professional multi-track video editing on iPad. 6 video + 6 audio tracks, color correction, effects." },
      { name: "CapCut", subtitle: "Quick Video Editor", price: "Free", platforms: ["iPhone", "iPad"], why: "Best free video editor. Auto-captions, trending effects, green screen, and easy social media export." },
      { name: "Pixelmator Pro", subtitle: "Image Editor", price: "$49.99", platforms: ["Mac"], why: "Photoshop alternative for Mac. ML-powered tools, non-destructive editing, and native Apple Silicon performance." },
    ]
  },
  {
    name: "Design & Creative",
    icon: "🎨",
    picks: [
      { name: "Procreate", subtitle: "Digital Art", price: "$12.99 (one-time)", platforms: ["iPad"], why: "Industry-standard digital illustration. 200+ brushes, animation, 3D painting. No subscription." },
      { name: "Figma", subtitle: "UI/UX Design", price: "Free / $15/mo Pro", platforms: ["Mac", "Web"], why: "Collaborative interface design. Real-time multiplayer, components, prototyping. Industry standard." },
      { name: "Affinity Designer 2", subtitle: "Vector Graphics", price: "$69.99", platforms: ["iPad", "Mac"], why: "Illustrator alternative. One-time purchase, no subscription. Professional vector and raster in one app." },
      { name: "Canva", subtitle: "Quick Design", price: "Free / $12.99/mo Pro", platforms: ["iPhone", "iPad", "Mac", "Web"], why: "Templates for everything. Social media posts, presentations, logos. Best for non-designers." },
      { name: "GoodNotes 6", subtitle: "Handwriting Notes", price: "Free / $9.99/yr", platforms: ["iPhone", "iPad", "Mac"], why: "Best handwriting app for Apple Pencil. AI handwriting search, shape recognition, and PDF annotation." },
    ]
  },
  {
    name: "Utilities",
    icon: "🔧",
    picks: [
      { name: "1Password", subtitle: "Password Manager", price: "$2.99/mo", platforms: ["iPhone", "iPad", "Mac", "Watch"], why: "Best password manager. Passkey support, Watchtower alerts, family sharing, and beautiful native apps." },
      { name: "Widgetsmith", subtitle: "Custom Widgets", price: "Free / $1.99/mo", platforms: ["iPhone", "iPad"], why: "Create custom widgets with your own photos, fonts, and data. Make your home screen truly personal." },
      { name: "Amphetamine", subtitle: "Keep Mac Awake", price: "Free", platforms: ["Mac"], why: "Prevent Mac from sleeping. Triggers based on apps, time, battery, or network. Essential utility." },
      { name: "CleanMyMac", subtitle: "System Cleaner", price: "$39.95/yr", platforms: ["Mac"], why: "Remove junk files, malware, and optimize Mac performance. Uninstaller removes all app traces." },
      { name: "Raycast", subtitle: "Launcher", price: "Free / $8/mo Pro", platforms: ["Mac"], why: "Spotlight replacement on steroids. Extensions, snippets, clipboard history, window management, AI." },
    ]
  },
  {
    name: "Health & Fitness",
    icon: "💪",
    picks: [
      { name: "Strong", subtitle: "Workout Tracker", price: "Free / $9.99/mo", platforms: ["iPhone", "Watch"], why: "Best weight training tracker. Exercise library, progress charts, Apple Watch app with rest timers." },
      { name: "Strava", subtitle: "Running & Cycling", price: "Free / $11.99/mo", platforms: ["iPhone", "Watch"], why: "Social fitness network. GPS tracking, segments, leaderboards, and training analysis." },
      { name: "Headspace", subtitle: "Meditation", price: "$12.99/mo", platforms: ["iPhone", "iPad", "Watch"], why: "Guided meditation, sleep sounds, focus music. Beautiful animations and beginner-friendly courses." },
      { name: "MyFitnessPal", subtitle: "Calorie Tracking", price: "Free / $19.99/mo", platforms: ["iPhone", "iPad"], why: "Largest food database. Barcode scanner, meal planning, macro tracking. Integrates with Apple Health." },
      { name: "AutoSleep", subtitle: "Sleep Tracking", price: "$5.99", platforms: ["iPhone", "Watch"], why: "Best sleep tracker for Apple Watch. Automatic detection, sleep quality scores, and trend analysis." },
    ]
  },
  {
    name: "Entertainment",
    icon: "🎮",
    picks: [
      { name: "Overcast", subtitle: "Podcast Player", price: "Free / $9.99/yr", platforms: ["iPhone", "iPad", "Watch"], why: "Smart Speed (shortens silences), Voice Boost, and the best podcast discovery. Made by Marco Arment." },
      { name: "Infuse", subtitle: "Video Player", price: "Free / $9.99/yr", platforms: ["iPhone", "iPad", "Mac", "Apple TV"], why: "Plays any video format. Beautiful library, Plex/Jellyfin integration, Dolby Vision, and Atmos support." },
      { name: "Reeder", subtitle: "RSS Reader", price: "$4.99", platforms: ["iPhone", "iPad", "Mac"], why: "Beautiful RSS reader. Supports Feedly, iCloud sync, and read-later services. Distraction-free reading." },
      { name: "Marvis Pro", subtitle: "Music Player", price: "$5.99", platforms: ["iPhone", "iPad"], why: "Apple Music frontend with custom sections, smart rules, and beautiful visualizations. Power user's music app." },
      { name: "Apollo for Reddit", subtitle: "Reddit Client", price: "RIP (discontinued)", platforms: ["iPhone", "iPad"], why: "Was the best Reddit client ever made. Killed by Reddit's API pricing. Nothing has replaced it." },
    ]
  },
  {
    name: "Finance",
    icon: "💰",
    picks: [
      { name: "YNAB", subtitle: "Budgeting", price: "$14.99/mo", platforms: ["iPhone", "iPad", "Web"], why: "Best budgeting methodology. Give every dollar a job. Bank sync, goal tracking, and reports." },
      { name: "Copilot", subtitle: "Finance Tracker", price: "$14.99/mo", platforms: ["iPhone", "iPad", "Mac"], why: "Beautiful net worth tracking, spending insights, and investment monitoring. Native Apple design." },
      { name: "Robinhood", subtitle: "Investing", price: "Free / $5/mo Gold", platforms: ["iPhone", "iPad"], why: "Commission-free trading. Crypto, options, and fractional shares. Best for beginners." },
      { name: "Splitwise", subtitle: "Bill Splitting", price: "Free / $4.99/mo", platforms: ["iPhone", "iPad"], why: "Track shared expenses with friends, roommates, or travel groups. Simplify debts automatically." },
      { name: "Wallet (Apple)", subtitle: "Digital Wallet", price: "Free (built-in)", platforms: ["iPhone", "Watch"], why: "Apple Pay, transit cards, boarding passes, event tickets, car keys, and ID. Expanding rapidly." },
    ]
  },
];

export default function BestApps() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Curated Picks — 2026</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Best Apps</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            {APP_CATEGORIES.reduce((sum, cat) => sum + cat.picks.length, 0)} hand-picked apps across {APP_CATEGORIES.length} categories. 
            Only apps we actually use daily.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-4 px-4 border-y border-border/30 sticky top-[44px] z-20 bg-background/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {APP_CATEGORIES.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === i ? "bg-cyan-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">{APP_CATEGORIES[activeCategory].icon}</span>
            {APP_CATEGORIES[activeCategory].name}
          </h2>
          <div className="space-y-3">
            {APP_CATEGORIES[activeCategory].picks.map((app, i) => (
              <div key={i} className="p-5 rounded-xl border border-border/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold">{app.name}</h3>
                      <span className="text-xs text-muted-foreground">— {app.subtitle}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{app.why}</p>
                    <div className="flex items-center gap-3 mt-3 flex-wrap">
                      <span className="text-xs font-medium text-cyan-400">{app.price}</span>
                      <div className="flex gap-1">
                        {app.platforms.map(p => (
                          <span key={p} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-muted-foreground/20">#{i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories Quick View */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Quick Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {APP_CATEGORIES.map(cat => (
              <div key={cat.name} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                <h3 className="font-bold text-sm mb-2">{cat.icon} {cat.name}</h3>
                <ul className="space-y-1">
                  {cat.picks.map(app => (
                    <li key={app.name} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span className="font-medium text-foreground/80">{app.name}</span> — {app.subtitle}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
