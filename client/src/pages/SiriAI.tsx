import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, ExternalLink, Mic, Eye, MessageSquare, Globe, Lock, Zap } from "lucide-react";

const IMGS = {
  hero: "/manus-storage/ios27-siri-ai-macrumors_9c505084.jpg",
  siriWaitlist: "/manus-storage/siri-ai-waitlist_a27ae709.jpg",
  appleIntel: "/manus-storage/apple-intelligence-overview_bfebb74e.png",
  ios27: "/manus-storage/ios27-features_b971ec0e.jpg",
};

const features = [
  {
    icon: MessageSquare,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    title: "Natural Conversation",
    desc: "Ask follow-up questions, go back and forth, and get detailed engaging answers. Siri AI remembers context within a conversation and can help you brainstorm, plan, and create.",
  },
  {
    icon: Eye,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    title: "Onscreen Awareness",
    desc: "Siri AI can see and understand what is on your screen. Ask about an image in Safari, get context on a document you are reading, or have Siri take action on visible content.",
  },
  {
    icon: Globe,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    title: "Broad World Knowledge",
    desc: "Siri AI goes out to the web to get up-to-date information on virtually any topic. Ask about upcoming concerts, sports scores, news, or anything you are curious about.",
  },
  {
    icon: Lock,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
    title: "Personal Context Understanding",
    desc: "Siri searches across your messages, emails, photos, and apps to find exactly what you need. Find that restaurant recommendation from a friend, or a hotel confirmation from months ago.",
  },
  {
    icon: Mic,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
    title: "Expressive New Voices",
    desc: "Siri AI features new, more expressive voices. Customize the pace and expressiveness to match your preferences. Dictation is more accurate than ever with automatic punctuation.",
  },
  {
    icon: Zap,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
    title: "Systemwide App Actions",
    desc: "Siri can draft emails from scratch, edit and share photos, create reminders from conversations, and take action across apps. More systemwide actions than ever before.",
  },
];

const platforms = [
  { name: "iPhone", desc: "Swipe down from Dynamic Island. Side button. Hey Siri. New Siri mode in Camera app.", emoji: "📱" },
  { name: "iPad", desc: "Integrated into Spotlight. Visual Intelligence via screenshot. Siri app available.", emoji: "📲" },
  { name: "Mac", desc: "Spotlight integration. Keyboard shortcut for Visual Intelligence. Context menus.", emoji: "💻" },
  { name: "Apple Watch", desc: "Conversation from the wrist. Smart Stack suggestions to continue conversations.", emoji: "⌚" },
  { name: "Apple Vision Pro", desc: "3D Siri visualization you can place anywhere. Invoke by looking and speaking.", emoji: "🥽" },
  { name: "CarPlay", desc: "Siri AI available while driving. Hands-free conversation on the road.", emoji: "🚗" },
];

export default function SiriAI() {
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
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMGS.hero} alt="Siri AI on iPhone 17 Pro" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/40 to-transparent" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse-glow pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 w-full">
          <div className="section-label text-cyan-400 mb-3">WWDC 2026 — Biggest Announcement</div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none mb-4">
            <span className="text-gradient-siri">Siri AI</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
            Apple has completely rebuilt Siri from the ground up. Powered by the next generation 
            of Apple Intelligence, Siri AI is the most capable, conversational, and personal 
            assistant Apple has ever created.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/" 
              target="_blank" rel="noopener noreferrer" className="btn-apple bg-gradient-to-r from-cyan-600 to-blue-600">
              Apple Newsroom <ExternalLink className="w-4 h-4" />
            </a>
            <Link href="/wwdc-2026" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-white/80 hover:text-white text-sm font-medium transition-all">
              Back to WWDC 2026 <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-8 border-b border-white/10 bg-gradient-to-r from-cyan-950/20 via-black to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "100%", label: "Rebuilt from scratch" },
              { num: "6", label: "Platforms supported" },
              { num: "Private", label: "Cloud Compute privacy" },
              { num: "Fall 2026", label: "Public release" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-gradient-siri">{stat.num}</div>
                <div className="text-white/50 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label text-cyan-400 mb-2 fade-up">What Siri AI Can Do</div>
          <h2 className="text-3xl md:text-4xl font-black mb-8 fade-up">Six Ways Siri AI Changes Everything</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feat, i) => (
              <div key={i} className={`glass-card p-5 border ${feat.bg} fade-up`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={`w-10 h-10 rounded-xl ${feat.bg} flex items-center justify-center mb-3`}>
                  <feat.icon className={`w-5 h-5 ${feat.color}`} />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{feat.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Siri App */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="fade-up">
              <div className="section-label text-cyan-400 mb-3">New in iOS 27</div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">A Dedicated Siri App</h2>
              <p className="text-white/70 text-base leading-relaxed mb-4">
                For the first time, Siri has its own dedicated app. Open it to revisit past 
                conversations, continue where you left off, or start a new one. Conversation 
                history syncs privately across all your Apple devices via iCloud.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Start a conversation on your Mac, continue it on your iPhone, and finish 
                on your Apple Watch. Everything stays in sync, privately.
              </p>
              <div className="glass-card p-4 border border-cyan-500/20 bg-cyan-500/5">
                <div className="text-cyan-400 font-semibold text-sm mb-1">Available on</div>
                <div className="text-white/70 text-sm">iPhone, iPad, Mac, Apple Watch, Apple Vision Pro</div>
              </div>
            </div>
            <div className="fade-up">
              <img src={IMGS.siriWaitlist} alt="Siri AI app interface" className="rounded-2xl border border-white/10 w-full shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Intelligence */}
      <section className="py-12 md:py-16 border-t border-white/10 bg-gradient-to-br from-blue-950/20 via-black to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 fade-up">
              <img src={IMGS.appleIntel} alt="Apple Intelligence overview" className="rounded-2xl border border-white/10 w-full shadow-2xl" />
            </div>
            <div className="order-1 md:order-2 fade-up">
              <div className="section-label text-blue-400 mb-3">Expanded Feature</div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Visual Intelligence Everywhere</h2>
              <p className="text-white/70 text-base leading-relaxed mb-4">
                Visual Intelligence with Siri now comes to iPad and Mac for the first time. 
                On iPhone, the Camera app gets a dedicated Siri mode — tap the shutter button 
                to let Siri see what you see.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  { platform: "iPhone Camera", desc: "New Siri mode — tap shutter to analyze what is in front of you. Split bills, get nutrition info, identify objects." },
                  { platform: "iPad", desc: "Visual Intelligence integrated into the screenshot experience." },
                  { platform: "Mac", desc: "Keyboard shortcut to select anything on screen and ask Siri about it." },
                  { platform: "Apple Vision Pro", desc: "Ask Siri about physical objects around you just by looking at them." },
                ].map((item) => (
                  <li key={item.platform} className="glass-card p-3 border border-white/10">
                    <div className="text-blue-400 font-semibold text-xs mb-1">{item.platform}</div>
                    <div className="text-white/60 text-xs leading-relaxed">{item.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label text-cyan-400 mb-2 fade-up">Availability</div>
          <h2 className="text-3xl font-black mb-8 fade-up">Siri AI Across All Your Devices</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((p, i) => (
              <div key={i} className="glass-card p-5 border border-white/10 fade-up" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="text-3xl mb-3">{p.emoji}</div>
                <h3 className="text-white font-bold text-base mb-2">{p.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 glass-card p-4 border border-yellow-500/20 bg-yellow-500/5">
            <div className="text-yellow-400 font-semibold text-sm mb-1">Important Note</div>
            <div className="text-white/60 text-sm">
              Siri AI will NOT be available in Europe or China at launch due to regulatory requirements. 
              Developer beta is available now. Public release is expected in Fall 2026 alongside new iPhone hardware.
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-green-400" />
            </div>
            <div className="section-label text-green-400 mb-3 text-center">Privacy First</div>
            <h2 className="text-3xl font-black mb-4">Built with Privacy at Its Core</h2>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              Siri AI uses a bold new architecture designed specifically to protect your privacy. 
              When Private Cloud Compute handles your requests, your personal data is never stored 
              or made accessible to Apple or anyone else. Outside experts can verify this promise at any time.
            </p>
            <p className="text-white/60 text-sm">
              Apple calls Siri AI "the world's most private digital assistant."
            </p>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label mb-3">Official Sources</div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Apple: Introducing Siri AI", href: "https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/" },
              { label: "Apple Intelligence Overview", href: "https://www.apple.com/newsroom/2026/06/apple-intelligence-brings-powerful-ai-capabilities-into-everyday-experiences/" },
              { label: "CNBC WWDC Live", href: "https://www.cnbc.com/2026/06/08/apple-wwdc-2026-live-updates.html" },
              { label: "The Guardian", href: "https://www.theguardian.com/technology/2026/jun/08/apple-debuts-siri-ai-child-safety-features-wwdc" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 text-white/60 hover:text-white text-xs font-medium transition-all">
                {s.label} <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
