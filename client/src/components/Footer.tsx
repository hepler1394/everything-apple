import { Link } from "wouter";
import { Apple, Github, Twitter, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                <Apple className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-sm">Everything Apple</span>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              The #1 independent Apple fan site. Not affiliated with Apple Inc. Built with passion by Cory Hepler.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* WWDC 2026 */}
          <div>
            <h4 className="text-white/80 font-semibold text-xs uppercase tracking-widest mb-3">WWDC 2026</h4>
            <ul className="space-y-2">
              {[
                { label: "All Announcements", href: "/wwdc-2026" },
                { label: "Siri AI", href: "/siri-ai" },
                { label: "Parental Controls", href: "/parental-controls" },
                { label: "iOS 27", href: "/wwdc-2026#ios27" },
                { label: "macOS Golden Gate", href: "/wwdc-2026#macos" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/40 hover:text-white/80 text-xs transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* iPhones */}
          <div>
            <h4 className="text-white/80 font-semibold text-xs uppercase tracking-widest mb-3">iPhones</h4>
            <ul className="space-y-2">
              {[
                { label: "iPhone 17 Series", href: "/iphones#iphone17" },
                { label: "iPhone 16 Series", href: "/iphones#iphone16" },
                { label: "iPhone 15 Series", href: "/iphones#iphone15" },
                { label: "iPhone 14 Series", href: "/iphones#iphone14" },
                { label: "Older Models", href: "/iphones#older" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/40 hover:text-white/80 text-xs transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Community */}
          <div>
            <h4 className="text-white/80 font-semibold text-xs uppercase tracking-widest mb-3">Tools & Community</h4>
            <ul className="space-y-2">
              {[
                { label: "Jailbreak Guide", href: "/jailbreak" },
                { label: "Sideload Tools", href: "/jailbreak#sideload" },
                { label: "Reddit Community", href: "/community" },
                { label: "Apple Newsroom", href: "https://www.apple.com/newsroom/", external: true },
                { label: "r/jailbreak", href: "https://reddit.com/r/jailbreak", external: true },
              ].map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/80 text-xs transition-colors flex items-center gap-1">
                      {item.label} <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  ) : (
                    <Link href={item.href} className="text-white/40 hover:text-white/80 text-xs transition-colors">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © 2026 Everything Apple. Built by{" "}
            <span className="text-white/60 font-semibold">Cory Hepler</span>.
            Not affiliated with Apple Inc.
          </p>
          <p className="text-white/20 text-xs">
            Apple, iPhone, iOS, macOS, Siri are trademarks of Apple Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
