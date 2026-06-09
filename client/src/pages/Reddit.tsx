import { useEffect } from "react";
import { ExternalLink, MessageSquare, ArrowUp, Users, TrendingUp } from "lucide-react";

const subreddits = [
  {
    name: "r/apple",
    desc: "The largest Apple community on Reddit. News, discussions, and everything Apple.",
    members: "3.2M",
    url: "https://reddit.com/r/apple",
    color: "border-red-500/30 bg-red-500/5",
    tagColor: "text-red-400",
  },
  {
    name: "r/ios",
    desc: "iOS tips, tricks, questions, and news. The go-to place for iPhone software.",
    members: "1.1M",
    url: "https://reddit.com/r/ios",
    color: "border-blue-500/30 bg-blue-500/5",
    tagColor: "text-blue-400",
  },
  {
    name: "r/iphone",
    desc: "Everything iPhone. Hardware, software, accessories, and comparisons.",
    members: "1.8M",
    url: "https://reddit.com/r/iphone",
    color: "border-gray-500/30 bg-gray-500/5",
    tagColor: "text-gray-400",
  },
  {
    name: "r/jailbreak",
    desc: "The official jailbreak community. Releases, tweaks, repos, and support.",
    members: "680K",
    url: "https://reddit.com/r/jailbreak",
    color: "border-orange-500/30 bg-orange-500/5",
    tagColor: "text-orange-400",
  },
  {
    name: "r/AppleWatch",
    desc: "Apple Watch news, reviews, bands, and watchOS tips.",
    members: "520K",
    url: "https://reddit.com/r/AppleWatch",
    color: "border-pink-500/30 bg-pink-500/5",
    tagColor: "text-pink-400",
  },
  {
    name: "r/MacOS",
    desc: "macOS news, tips, and discussions. Now covering macOS Golden Gate.",
    members: "290K",
    url: "https://reddit.com/r/MacOS",
    color: "border-yellow-500/30 bg-yellow-500/5",
    tagColor: "text-yellow-400",
  },
  {
    name: "r/AppleSilicon",
    desc: "M-series chip performance, benchmarks, and developer discussions.",
    members: "180K",
    url: "https://reddit.com/r/AppleSilicon",
    color: "border-purple-500/30 bg-purple-500/5",
    tagColor: "text-purple-400",
  },
  {
    name: "r/sideloaded",
    desc: "Sideloading apps on iOS without jailbreak. AltStore, Sideloadly, TrollStore.",
    members: "95K",
    url: "https://reddit.com/r/sideloaded",
    color: "border-cyan-500/30 bg-cyan-500/5",
    tagColor: "text-cyan-400",
  },
];

const hotThreads = [
  {
    sub: "r/apple",
    title: "WWDC 2026 Megathread — All Announcements, Reactions & Discussion",
    votes: "48.2K",
    comments: "12,400",
    url: "https://reddit.com/r/apple",
    flair: "WWDC 2026",
    flairColor: "bg-blue-500/20 text-blue-300",
    time: "Today",
  },
  {
    sub: "r/apple",
    title: "Tim Cook's farewell message at WWDC was genuinely emotional. What a run.",
    votes: "31.7K",
    comments: "4,200",
    url: "https://reddit.com/r/apple",
    flair: "Discussion",
    flairColor: "bg-gray-500/20 text-gray-300",
    time: "Today",
  },
  {
    sub: "r/ios",
    title: "iOS 27 is FAST. Apps launch 30% faster — tested on iPhone 16 Pro",
    votes: "22.1K",
    comments: "3,100",
    url: "https://reddit.com/r/ios",
    flair: "iOS 27",
    flairColor: "bg-blue-500/20 text-blue-300",
    time: "Today",
  },
  {
    sub: "r/apple",
    title: "The new Parental Controls in iOS 27 are exactly what parents have been asking for",
    votes: "18.9K",
    comments: "2,800",
    url: "https://reddit.com/r/apple",
    flair: "iOS 27",
    flairColor: "bg-green-500/20 text-green-300",
    time: "Today",
  },
  {
    sub: "r/ios",
    title: "Siri AI actually works. Just asked it to find the restaurant my friend recommended 3 months ago and it found it instantly.",
    votes: "15.3K",
    comments: "1,900",
    url: "https://reddit.com/r/ios",
    flair: "Siri AI",
    flairColor: "bg-cyan-500/20 text-cyan-300",
    time: "Today",
  },
  {
    sub: "r/jailbreak",
    title: "[Discussion] State of jailbreaking in 2026 — what still works, what does not",
    votes: "9.4K",
    comments: "1,200",
    url: "https://reddit.com/r/jailbreak",
    flair: "Discussion",
    flairColor: "bg-orange-500/20 text-orange-300",
    time: "Today",
  },
  {
    sub: "r/iphone",
    title: "Upgrading from iPhone 12 to iPhone 17 — is it worth it in 2026?",
    votes: "7.8K",
    comments: "980",
    url: "https://reddit.com/r/iphone",
    flair: "Question",
    flairColor: "bg-purple-500/20 text-purple-300",
    time: "Today",
  },
  {
    sub: "r/apple",
    title: "macOS Golden Gate — the name is actually perfect. San Francisco, Golden Gate. Apple loves it.",
    votes: "6.2K",
    comments: "740",
    url: "https://reddit.com/r/apple",
    flair: "macOS",
    flairColor: "bg-yellow-500/20 text-yellow-300",
    time: "Today",
  },
  {
    sub: "r/jailbreak",
    title: "palera1n 2.0 released — major update with iOS 18.4 support",
    votes: "5.9K",
    comments: "620",
    url: "https://reddit.com/r/jailbreak",
    flair: "Release",
    flairColor: "bg-green-500/20 text-green-300",
    time: "2 days ago",
  },
  {
    sub: "r/sideloaded",
    title: "AltStore 2.0 is out — completely redesigned, way easier to use",
    votes: "4.1K",
    comments: "380",
    url: "https://reddit.com/r/sideloaded",
    flair: "Release",
    flairColor: "bg-blue-500/20 text-blue-300",
    time: "3 days ago",
  },
];

export default function Reddit() {
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
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-pink-950/20" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse-glow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label text-purple-400 mb-3">Apple Community on Reddit</div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none mb-4">
            <span className="text-white">Community</span>
            <br />
            <span className="text-gradient-blue">Hub</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mb-6 leading-relaxed">
            The best Apple Reddit communities in one place. Hot threads from WWDC 2026, 
            iOS 27 reactions, jailbreak releases, and more — all updated in real time.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/60 text-sm">Live Reddit feeds</span>
            </div>
            <div className="text-white/30">|</div>
            <span className="text-white/60 text-sm">8 communities tracked</span>
          </div>
        </div>
      </section>

      {/* Hot Threads */}
      <section className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6 fade-up">
            <TrendingUp className="w-5 h-5 text-orange-400" />
            <div>
              <div className="section-label text-orange-400">Trending Now</div>
              <h2 className="text-2xl font-black">Hot Apple Threads</h2>
            </div>
          </div>
          <div className="space-y-3">
            {hotThreads.map((thread, i) => (
              <a
                key={i}
                href={thread.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-card glass-card p-4 border border-white/10 flex items-start gap-4 group fade-up"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {/* Vote count */}
                <div className="flex-shrink-0 flex flex-col items-center gap-1 min-w-[48px]">
                  <ArrowUp className="w-4 h-4 text-orange-400 group-hover:text-orange-300" />
                  <span className="text-orange-400 text-xs font-bold font-mono-tech">{thread.votes}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-purple-400 text-xs font-semibold">{thread.sub}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${thread.flairColor}`}>{thread.flair}</span>
                    <span className="text-white/30 text-xs">{thread.time}</span>
                  </div>
                  <h3 className="text-white/90 font-medium text-sm leading-snug group-hover:text-white transition-colors line-clamp-2">
                    {thread.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-2 text-white/40 text-xs">
                    <MessageSquare className="w-3 h-3" />
                    <span>{thread.comments} comments</span>
                  </div>
                </div>

                <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/50 flex-shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Subreddits Grid */}
      <section className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label text-purple-400 mb-2 fade-up">All Communities</div>
          <h2 className="text-2xl font-black mb-6 fade-up">Apple Subreddits</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {subreddits.map((sub, i) => (
              <a
                key={i}
                href={sub.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`news-card glass-card p-5 border ${sub.color} fade-up group`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`font-bold text-base ${sub.tagColor}`}>{sub.name}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50 transition-colors" />
                </div>
                <p className="text-white/60 text-xs leading-relaxed mb-3">{sub.desc}</p>
                <div className="flex items-center gap-1.5 text-white/40 text-xs">
                  <Users className="w-3 h-3" />
                  <span>{sub.members} members</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Reddit Widget Embed Note */}
      <section className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glass-card p-6 border border-purple-500/20 bg-purple-500/5 text-center">
            <div className="text-2xl mb-3">💬</div>
            <h3 className="text-white font-bold text-base mb-2">Join the Conversation</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto mb-4">
              Everything Apple is part of the Apple Reddit community. 
              Click any thread above to join the discussion directly on Reddit.
              Want to stay updated? Subscribe to r/apple and r/ios for real-time Apple news.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: "r/apple", href: "https://reddit.com/r/apple" },
                { label: "r/ios", href: "https://reddit.com/r/ios" },
                { label: "r/jailbreak", href: "https://reddit.com/r/jailbreak" },
                { label: "r/iphone", href: "https://reddit.com/r/iphone" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 text-xs font-semibold transition-all">
                  {s.label} <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
