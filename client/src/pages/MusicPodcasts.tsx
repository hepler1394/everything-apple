import { useState } from "react";

// Apple Music & Podcasts — Complete guide to Apple's audio ecosystem

const playlists = [
  { name: "Today's Hits", genre: "Pop", tracks: 100, updated: "Daily" },
  { name: "Rap Life", genre: "Hip-Hop", tracks: 75, updated: "Weekly" },
  { name: "New Music Daily", genre: "Mixed", tracks: 50, updated: "Daily" },
  { name: "A-List Pop", genre: "Pop", tracks: 80, updated: "Weekly" },
  { name: "ALT CTRL", genre: "Alternative", tracks: 60, updated: "Weekly" },
  { name: "Chill Vibes", genre: "Lo-Fi", tracks: 100, updated: "Monthly" },
  { name: "Classical Essentials", genre: "Classical", tracks: 200, updated: "Monthly" },
  { name: "Jazz Chill", genre: "Jazz", tracks: 80, updated: "Monthly" },
];

const features = [
  {
    title: "Spatial Audio with Dolby Atmos",
    description: "Music that surrounds you from every direction. Thousands of tracks remixed in Dolby Atmos for an immersive listening experience.",
    supported: ["AirPods Pro", "AirPods Max", "AirPods 4", "HomePod", "Apple TV 4K"],
  },
  {
    title: "Lossless Audio",
    description: "CD-quality (16-bit/44.1kHz) and Hi-Res Lossless (24-bit/192kHz) streaming at no extra cost. Over 100 million tracks available.",
    supported: ["All Apple devices", "USB DAC required for Hi-Res", "Not over Bluetooth"],
  },
  {
    title: "Dynamic Head Tracking",
    description: "Sound stays fixed in space as you move your head, creating a theater-like experience with compatible AirPods.",
    supported: ["AirPods Pro", "AirPods Max", "AirPods 4 (ANC model)"],
  },
  {
    title: "Apple Music Sing",
    description: "Real-time lyrics with adjustable vocals. Sing along with beat-matched lyrics, duet view, and vocal volume control.",
    supported: ["iPhone", "iPad", "Apple TV 4K"],
  },
  {
    title: "Collaborative Playlists",
    description: "Create playlists with friends. Everyone can add, remove, and reorder tracks. React to songs with emoji.",
    supported: ["All Apple Music subscribers"],
  },
  {
    title: "Discovery Station",
    description: "AI-powered personal radio that learns your taste and introduces you to new music you'll love. Gets smarter over time.",
    supported: ["All Apple Music subscribers"],
  },
  {
    title: "Apple Music Classical",
    description: "Dedicated app for classical music with specialized metadata — search by composer, conductor, orchestra, soloist, or catalog number.",
    supported: ["iPhone", "iPad", "Android"],
  },
  {
    title: "Crossfade",
    description: "Smooth transitions between tracks with adjustable crossfade duration (1-12 seconds). Perfect for parties and workouts.",
    supported: ["iPhone", "iPad", "Mac", "Apple TV"],
  },
];

const podcastFeatures = [
  { title: "Transcripts", description: "Full searchable transcripts for most podcasts. Tap any line to jump to that moment." },
  { title: "Channels", description: "Curated groups of shows from the same creator or network. Subscribe to unlock bonus content." },
  { title: "Annual subscriptions", description: "Save money with annual plans for premium podcast channels." },
  { title: "Smart Downloads", description: "Automatically downloads episodes based on your listening habits and storage." },
  { title: "Sleep Timer", description: "Set a timer to stop playback after a set duration. Perfect for bedtime listening." },
  { title: "Up Next Queue", description: "Drag and reorder upcoming episodes. Mix podcasts with music in your queue." },
  { title: "Custom playback speed", description: "0.5x to 3x speed with pitch correction. Trim silence automatically." },
  { title: "Chapter markers", description: "Jump between sections in supported podcasts. See chapter artwork and links." },
];

const plans = [
  { name: "Individual", price: "$11.99/mo", features: ["100M+ songs", "Lossless & Spatial", "Apple Music Sing", "Offline downloads"] },
  { name: "Family", price: "$17.99/mo", features: ["Up to 6 people", "Personal recommendations", "Shared playlists", "Purchase sharing"] },
  { name: "Student", price: "$5.99/mo", features: ["All Individual features", "Apple TV+ included", "Verification required", "4-year limit"] },
  { name: "Apple One Individual", price: "$19.95/mo", features: ["Music + TV+ + Arcade", "iCloud+ 50GB", "Fitness+", "News+"] },
  { name: "Apple One Family", price: "$25.95/mo", features: ["All services for 6", "iCloud+ 200GB", "Shared subscriptions", "Best family value"] },
];

const tips = [
  "Use 'Add to Library' vs 'Download' — Library adds metadata without using storage; Download saves for offline.",
  "Long-press any song for 'Create Station' — generates an infinite radio based on that track's vibe.",
  "Enable 'Listening History' in Settings to improve recommendations (it's off by default for shared devices).",
  "Use Siri: 'Play something I haven't heard in a while' — it digs into your library for forgotten favorites.",
  "The 'Replay' feature (Music → Listen Now → Replay) shows your top songs, artists, and albums by year.",
  "Share lyrics: long-press a lyric line → Share → it creates a beautiful card with album art.",
  "Use Focus Filters to show only specific playlists during Work or Exercise Focus modes.",
  "Connect Apple Music to Last.fm via third-party apps (Marvis, Scrobbles) for detailed listening stats.",
  "HomePod tip: 'Transfer' music by holding your iPhone near HomePod — it hands off playback instantly.",
  "Apple Music has a hidden 'Favorites Mix' playlist that updates every Wednesday with songs you've loved.",
];

export default function MusicPodcasts() {
  const [activeTab, setActiveTab] = useState<"music" | "podcasts" | "plans">("music");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-background to-red-900/20" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs font-medium border border-pink-500/20 mb-4">
            100M+ Songs • Lossless • Spatial Audio
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Apple <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">Music & Podcasts</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Apple's audio ecosystem — from Spatial Audio and Lossless streaming 
            to podcast transcripts and collaborative playlists.
          </p>
        </div>
      </section>

      {/* Tab Selector */}
      <section className="py-6 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-2 justify-center mb-8">
            {(["music", "podcasts", "plans"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium capitalize transition-all ${
                  activeTab === tab
                    ? "bg-pink-500 text-white shadow-lg shadow-pink-500/25"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/30"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Music Tab */}
          {activeTab === "music" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map(f => (
                    <div key={f.title} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                      <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{f.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {f.supported.map((s, i) => (
                          <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-pink-500/10 text-pink-300">{s}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Featured Playlists</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {playlists.map(p => (
                    <div key={p.name} className="p-3 rounded-xl border border-border/30 bg-white/[0.02] text-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-red-500/20 mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                      </div>
                      <p className="text-xs font-bold">{p.name}</p>
                      <p className="text-[10px] text-muted-foreground">{p.genre} • {p.tracks} tracks</p>
                      <p className="text-[10px] text-pink-400">Updated {p.updated}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Pro Tips</h2>
                <div className="space-y-2">
                  {tips.map((tip, i) => (
                    <div key={i} className="p-3 rounded-lg border border-border/30 bg-white/[0.02] flex gap-3 items-start">
                      <span className="text-xs font-bold text-pink-400 w-5 flex-shrink-0">#{i + 1}</span>
                      <p className="text-xs">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Podcasts Tab */}
          {activeTab === "podcasts" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Apple Podcasts Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {podcastFeatures.map(f => (
                  <div key={f.title} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                    <h3 className="font-bold text-sm mb-1">{f.title}</h3>
                    <p className="text-xs text-muted-foreground">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Plans Tab */}
          {activeTab === "plans" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-4">Choose Your Plan</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {plans.map(plan => (
                  <div key={plan.name} className="p-5 rounded-2xl border border-border/30 bg-white/[0.02] flex flex-col">
                    <h3 className="font-bold">{plan.name}</h3>
                    <p className="text-2xl font-black text-pink-400 my-2">{plan.price}</p>
                    <ul className="space-y-1.5 flex-1">
                      {plan.features.map((f, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <svg className="w-3 h-3 text-pink-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
