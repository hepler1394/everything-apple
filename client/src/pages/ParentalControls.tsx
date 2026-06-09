import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, ExternalLink, Shield, Clock, Eye, Users, Lock, AlertTriangle } from "lucide-react";

const IMGS = {
  hero: "/manus-storage/parental-controls-3_4cb3aaed.jpg",
  setup: "/manus-storage/parental-controls-1_bc44df2a.png",
  timeAllowance: "/manus-storage/parental-controls-2_11679b41.jpg",
  schedule: "/manus-storage/screen-time-schedule_68338638.jpg",
  childSafety: "/manus-storage/child-safety-apple_bc997a94.jpg",
  overview: "/manus-storage/parental-controls-4_58011541.png",
};

const features = [
  {
    icon: Users,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
    title: "Child Accounts",
    desc: "Set up a child account and instantly enable age-appropriate protections across iPhone, iPad, and Mac. One setup, everything protected.",
  },
  {
    icon: Shield,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    title: "Setup Assistant",
    desc: "Choose exactly which apps your child can access from the start. Stay in control of what gets added over time with parental approval required.",
  },
  {
    icon: Eye,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    title: "Ask to Browse",
    desc: "Kids need parental approval before accessing any new website in Safari. Works seamlessly across iPhone, iPad, and Mac.",
  },
  {
    icon: AlertTriangle,
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
    title: "Communication Safety",
    desc: "Automatically blurs nudity in Messages and FaceTime. Now also blocks gore and violent content in shared images and videos.",
  },
  {
    icon: Clock,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
    title: "Time Allowances",
    desc: "Set daily time limits for Entertainment, Games, and Social Media. Expert-backed recommendations from child development specialists built in.",
  },
  {
    icon: Lock,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    title: "Daily Schedules",
    desc: "Control which apps your child can access at different times of day. School hours, bedtime, weekends — all customizable.",
  },
];

const steps = [
  { num: "01", title: "Create a Child Account", desc: "Go to Settings > Family Sharing > Add Member. Set up a child account with your child's age and Apple ID." },
  { num: "02", title: "Run Setup Assistant", desc: "Choose which pre-installed apps your child can use. You stay in control of what gets added over time." },
  { num: "03", title: "Set Time Allowances", desc: "Configure daily limits for Entertainment, Games, and Social Media categories. Use Apple's expert recommendations as a starting point." },
  { num: "04", title: "Create Schedules", desc: "Set when apps are available. School mode, bedtime mode, weekend mode — all fully customizable." },
  { num: "05", title: "Enable Communication Safety", desc: "Turn on automatic content filtering for Messages, FaceTime, and shared media. On by default for users under 18." },
  { num: "06", title: "Monitor from Your iPhone", desc: "Use the redesigned Screen Time dashboard to see your child's usage at a glance, top apps, and set adjustments." },
];

export default function ParentalControls() {
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
      <section className="relative min-h-[65vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMGS.hero} alt="New Parental Controls iOS 27" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 w-full">
          <div className="section-label text-green-400 mb-3">New in iOS 27 — WWDC 2026</div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none mb-4">
            <span className="text-white">Parental</span>
            <br />
            <span className="text-gradient-blue">Controls</span>
            <br />
            <span className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Completely Rebuilt</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mb-6 leading-relaxed">
            Apple has overhauled Screen Time with the most powerful parental controls ever. 
            Manage what your kids see, who they talk to, and when they have access to apps.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.apple.com/child-safety/" target="_blank" rel="noopener noreferrer"
              className="btn-apple bg-gradient-to-r from-green-600 to-emerald-600">
              Apple Child Safety Site <ExternalLink className="w-4 h-4" />
            </a>
            <Link href="/wwdc-2026" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-white/80 hover:text-white text-sm font-medium transition-all">
              Back to WWDC 2026 <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote from Craig Federighi */}
      <section className="py-8 bg-gradient-to-r from-green-950/20 via-black to-emerald-950/20 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <blockquote className="text-xl md:text-2xl font-serif-display text-white/80 italic leading-relaxed">
            "We are giving parents powerful, easy to use tools to help manage what kids can see, 
            who they can talk to, and when they have access."
          </blockquote>
          <cite className="text-white/40 text-sm mt-3 block">
            Craig Federighi, Apple SVP of Software Engineering — WWDC 2026
          </cite>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label text-green-400 mb-2 fade-up">All New Features</div>
          <h2 className="text-3xl md:text-4xl font-black mb-8 fade-up">Six Powerful New Tools for Parents</h2>
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

      {/* Setup Guide */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="section-label text-green-400 mb-2 fade-up">Step by Step</div>
              <h2 className="text-3xl font-black mb-6 fade-up">How to Set Up Parental Controls in iOS 27</h2>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4 fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-black text-xs font-mono-tech">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                      <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="fade-up">
                <img src={IMGS.setup} alt="Child Account Setup" className="rounded-2xl border border-white/10 w-full shadow-xl" />
              </div>
              <div className="grid grid-cols-2 gap-4 fade-up">
                <img src={IMGS.schedule} alt="Screen Time Schedule" className="rounded-xl border border-white/10 w-full shadow-xl" />
                <img src={IMGS.timeAllowance} alt="Time Allowances" className="rounded-xl border border-white/10 w-full shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Safety */}
      <section className="py-12 md:py-16 border-t border-white/10 bg-gradient-to-br from-red-950/20 via-black to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="fade-up">
              <div className="section-label text-red-400 mb-3">Enhanced Protection</div>
              <h2 className="text-3xl font-black mb-4">Communication Safety</h2>
              <p className="text-white/70 text-base leading-relaxed mb-4">
                Communication Safety already blurs nudity in Messages and FaceTime calls, 
                and is turned on by default for users under 18. In iOS 27, it gets even stronger.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { title: "Nudity Blurring", desc: "Already live — automatically blurs explicit images in Messages and FaceTime.", status: "Available Now", color: "text-green-400" },
                  { title: "Gore & Violence Blocking", desc: "New in iOS 27 — automatically intervenes when violent or graphic content is shared.", status: "New in iOS 27", color: "text-blue-400" },
                  { title: "Contact Approval", desc: "Parents can require approval for each new contact their child connects with.", status: "New in iOS 27", color: "text-blue-400" },
                ].map((item) => (
                  <div key={item.title} className="glass-card p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-semibold text-sm">{item.title}</span>
                      <span className={`text-xs font-semibold ${item.color}`}>{item.status}</span>
                    </div>
                    <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-up">
              <img src={IMGS.childSafety} alt="Communication Safety features" className="rounded-2xl border border-white/10 w-full shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glass-card p-6 border border-green-500/20 bg-green-500/5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">Availability</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  All new parental controls features are part of iOS 27, iPadOS 27, and macOS Golden Gate. 
                  Developer beta is available now. Public release is expected in Fall 2026. 
                  Apple has also launched a dedicated child safety website at{" "}
                  <a href="https://www.apple.com/child-safety/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                    apple.com/child-safety
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
