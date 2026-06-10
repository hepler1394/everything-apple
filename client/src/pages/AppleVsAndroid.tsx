import { useState } from "react";

// Apple vs Android — Honest Comparison
// Feature-by-feature breakdown with verdicts

interface ComparisonCategory {
  name: string;
  aspects: {
    feature: string;
    apple: string;
    android: string;
    winner: "apple" | "android" | "tie";
    explanation: string;
  }[];
}

const COMPARISONS: ComparisonCategory[] = [
  {
    name: "Performance & Hardware",
    aspects: [
      { feature: "Processor Speed", apple: "A-series chips dominate single-core. A18 Pro fastest mobile chip.", android: "Snapdragon 8 Gen 4 competitive in multi-core. Closing the gap.", winner: "apple", explanation: "Apple's custom silicon still leads by 20-30% in single-core tasks. The gap is narrowing but Apple's vertical integration gives them an edge." },
      { feature: "RAM Management", apple: "6-8GB but iOS is so efficient it matches 12-16GB Android phones.", android: "12-16GB standard on flagships. Needed due to Java/Kotlin overhead.", winner: "apple", explanation: "iOS memory management is significantly more efficient. Apps stay in memory longer with less RAM." },
      { feature: "Software Updates", apple: "5-6 years of major iOS updates. iPhone 11 still getting iOS 27.", android: "Samsung: 7 years. Pixel: 7 years. Most brands: 2-3 years.", winner: "apple", explanation: "Apple still wins overall because ALL iPhones get updates simultaneously. Android fragmentation means even supported phones wait months." },
      { feature: "Build Quality", apple: "Titanium (Pro), aluminum, ceramic shield glass. IP68.", android: "Samsung titanium, others vary wildly. Flagships match Apple.", winner: "tie", explanation: "Top Android flagships (Samsung Ultra, Pixel Pro) match iPhone build quality. But the average Android phone is far below iPhone standards." },
      { feature: "Battery Life", apple: "iPhone 16 Pro Max: 33 hours video playback. Efficient silicon.", android: "Samsung S25 Ultra: 30 hours. Some Chinese phones hit 36+ hours with 6000mAh.", winner: "tie", explanation: "Android phones can have bigger batteries but less efficient chips. Evens out at the flagship level." },
      { feature: "Charging Speed", apple: "25W wired, 25W MagSafe. Slow compared to competition.", android: "100-240W on Chinese phones. Samsung 45W. Full charge in 10-30 min.", winner: "android", explanation: "Android wins decisively. OnePlus charges to 100% in 10 minutes. Apple prioritizes battery longevity over speed." },
    ]
  },
  {
    name: "Camera",
    aspects: [
      { feature: "Photo Quality (daylight)", apple: "Natural colors, excellent HDR. Consistent across all lighting.", android: "Samsung oversaturates. Pixel has best computational photography.", winner: "tie", explanation: "iPhone for natural/realistic. Pixel for computational magic. Samsung for vibrant social media posts. All excellent." },
      { feature: "Video Quality", apple: "Best video on any smartphone. ProRes, Cinematic Mode, Action Mode.", android: "Samsung improving but still behind. Pixel video is mediocre.", winner: "apple", explanation: "iPhone video is unmatched. Stabilization, color science, ProRes workflow, and Cinematic Mode are years ahead." },
      { feature: "Night Mode", apple: "Excellent. 48MP sensor captures great low-light. Natural look.", android: "Pixel Night Sight is magical. Samsung Nightography is very good.", winner: "tie", explanation: "Pixel edges out slightly in extreme darkness. iPhone looks more natural. Both are excellent." },
      { feature: "Zoom", apple: "5x optical (Pro Max only). 25x digital. Tetraprism lens.", android: "Samsung 5x/10x optical. 100x Space Zoom. More versatile.", winner: "android", explanation: "Samsung Ultra has more zoom range. 10x optical is genuinely useful. Apple's 5x is good but limited to Max model." },
      { feature: "Selfie Camera", apple: "12MP TrueDepth. Excellent for FaceTime and social media.", android: "Samsung 12MP. Pixel 10.5MP. Some phones have 32-50MP selfie.", winner: "tie", explanation: "All flagships have good selfie cameras. Apple's processing is slightly more flattering." },
    ]
  },
  {
    name: "Software & Ecosystem",
    aspects: [
      { feature: "App Quality", apple: "Apps are generally better optimized. Developers prioritize iOS.", android: "Same apps but often less polished. Some exclusive Android apps.", winner: "apple", explanation: "iOS apps are almost always released first, updated first, and better optimized. Developers make more money on iOS." },
      { feature: "Customization", apple: "Limited. Widgets, wallpapers, icon tinting. No launchers.", android: "Unlimited. Custom launchers, icon packs, default apps, automation.", winner: "android", explanation: "Android is infinitely more customizable. If you want to change how your phone fundamentally works, Android is the only choice." },
      { feature: "Privacy", apple: "App Tracking Transparency, on-device processing, minimal data collection.", android: "Google's business IS data. Play Protect helps but Google tracks everything.", winner: "apple", explanation: "Apple's business model doesn't depend on your data. Google's does. This is a fundamental structural advantage." },
      { feature: "File Management", apple: "Files app is limited. No true file system access. Sandboxed.", android: "Full file system access. Download anything anywhere. USB drive support.", winner: "android", explanation: "Android treats you like an adult. You can access any file, any folder, plug in USB drives, and manage storage freely." },
      { feature: "Ecosystem Integration", apple: "AirDrop, Handoff, Universal Clipboard, Continuity Camera, Sidecar.", android: "Nearby Share, some Samsung ecosystem features. Fragmented.", winner: "apple", explanation: "If you have Mac + iPad + Apple Watch + AirPods, nothing touches Apple's ecosystem. It's seamless." },
      { feature: "Default App Choice", apple: "Can change some defaults (browser, email, maps) but limited.", android: "Change ANY default. Browser, launcher, keyboard, SMS, phone, camera.", winner: "android", explanation: "Android lets you replace literally any system app. Apple still forces Safari for in-app browsers." },
      { feature: "Notifications", apple: "Improved with iOS 16+ grouping. Still not as flexible.", android: "Best notification system. Channels, bubbles, snooze, inline reply.", winner: "android", explanation: "Android notifications have been better for a decade. More actionable, better organized, more control." },
    ]
  },
  {
    name: "Value & Pricing",
    aspects: [
      { feature: "Entry Price", apple: "iPhone 16: $799. iPhone SE: $429.", android: "Pixel 9a: $499. Samsung A-series: $200-400. Budget options everywhere.", winner: "android", explanation: "You can get a genuinely good Android phone for $300-500. Apple's cheapest option is $429 with outdated design." },
      { feature: "Flagship Price", apple: "iPhone 16 Pro Max: $1,199. Consistent pricing.", android: "Samsung S25 Ultra: $1,299. Pixel 9 Pro: $999. OnePlus: $799.", winner: "tie", explanation: "Flagship prices are similar across the board. Some Android flagships are actually more expensive." },
      { feature: "Resale Value", apple: "iPhones retain 60-70% value after 2 years. Best resale in tech.", android: "Lose 50-70% value in first year. Samsung flagships depreciate fast.", winner: "apple", explanation: "iPhones hold value dramatically better. A 2-year-old iPhone sells for more than a 1-year-old Samsung." },
      { feature: "Repair Costs", apple: "Screen: $279-379. Back glass: $169-499. AppleCare+ helps.", android: "Varies wildly. Samsung similar to Apple. Others cheaper.", winner: "tie", explanation: "Flagship repairs cost similar amounts. Apple's self-repair program and widespread service network help." },
    ]
  },
];

export default function AppleVsAndroid() {
  const [activeCategory, setActiveCategory] = useState(0);

  const currentCategory = COMPARISONS[activeCategory];

  const appleWins = COMPARISONS.flatMap(c => c.aspects).filter(a => a.winner === "apple").length;
  const androidWins = COMPARISONS.flatMap(c => c.aspects).filter(a => a.winner === "android").length;
  const ties = COMPARISONS.flatMap(c => c.aspects).filter(a => a.winner === "tie").length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-green-500/5" />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Honest Comparison</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Apple vs Android</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Feature-by-feature breakdown with honest verdicts. 
            No fanboy bias — just facts.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">{appleWins}</p>
              <p className="text-xs text-muted-foreground">Apple Wins</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-400">{ties}</p>
              <p className="text-xs text-muted-foreground">Ties</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">{androidWins}</p>
              <p className="text-xs text-muted-foreground">Android Wins</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-4 px-4 border-y border-border/30 sticky top-[44px] z-20 bg-background/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {COMPARISONS.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === i ? "bg-blue-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">{currentCategory.name}</h2>
          <div className="space-y-4">
            {currentCategory.aspects.map((aspect, i) => (
              <div key={i} className="rounded-xl border border-border/30 bg-white/[0.02] overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-sm">{aspect.feature}</h3>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      aspect.winner === "apple" ? "bg-blue-500/10 text-blue-400" :
                      aspect.winner === "android" ? "bg-green-500/10 text-green-400" :
                      "bg-gray-500/10 text-gray-400"
                    }`}>
                      {aspect.winner === "apple" ? "Apple" : aspect.winner === "android" ? "Android" : "Tie"}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className={`p-3 rounded-lg ${aspect.winner === "apple" ? "bg-blue-500/5 border border-blue-500/20" : "bg-white/[0.02] border border-border/20"}`}>
                      <p className="text-[10px] text-blue-400 font-medium mb-1">Apple</p>
                      <p className="text-xs text-muted-foreground">{aspect.apple}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${aspect.winner === "android" ? "bg-green-500/5 border border-green-500/20" : "bg-white/[0.02] border border-border/20"}`}>
                      <p className="text-[10px] text-green-400 font-medium mb-1">Android</p>
                      <p className="text-xs text-muted-foreground">{aspect.android}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 italic">{aspect.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">The Verdict</h2>
          <p className="text-muted-foreground mb-6">
            There is no universal "better" platform. The right choice depends on what you value most.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/5">
              <h3 className="font-bold text-lg text-blue-400 mb-3">Choose Apple If You...</h3>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>• Value privacy and security above all</li>
                <li>• Own other Apple devices (Mac, iPad, Watch)</li>
                <li>• Want the best video camera on a phone</li>
                <li>• Prefer consistent, polished software</li>
                <li>• Want maximum resale value</li>
                <li>• Don't want to think about tech — it just works</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-green-500/30 bg-green-500/5">
              <h3 className="font-bold text-lg text-green-400 mb-3">Choose Android If You...</h3>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>• Want maximum customization and control</li>
                <li>• Need a budget phone under $500</li>
                <li>• Want fast charging (100W+)</li>
                <li>• Prefer open file system access</li>
                <li>• Want to sideload apps freely</li>
                <li>• Like experimenting with your phone setup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
