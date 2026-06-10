import { useState } from "react";

// Hidden Features & Easter Eggs in Apple Products
// Things most users don't know about

interface HiddenFeature {
  id: number;
  title: string;
  description: string;
  howTo: string[];
  platform: string;
  category: "gesture" | "setting" | "shortcut" | "easter-egg" | "accessibility" | "power-user";
}

const HIDDEN_FEATURES: HiddenFeature[] = [
  {
    id: 1,
    title: "Back Tap (Double/Triple Tap iPhone Back)",
    description: "Tap the back of your iPhone 2 or 3 times to trigger any action — screenshot, lock, open app, run shortcut.",
    howTo: ["Settings > Accessibility > Touch > Back Tap", "Set Double Tap action (e.g., Screenshot)", "Set Triple Tap action (e.g., Lock Screen)", "Works through most cases"],
    platform: "iPhone 8+",
    category: "gesture"
  },
  {
    id: 2,
    title: "Drag & Drop Between Apps",
    description: "Hold an image, link, or text in one app, swipe to switch apps with another finger, then drop it.",
    howTo: ["Long-press an item (photo, link, text)", "Keep holding with one finger", "Use another finger to swipe up and switch apps", "Drop the item into the target app"],
    platform: "iPhone & iPad",
    category: "gesture"
  },
  {
    id: 3,
    title: "Trackpad Mode on Keyboard",
    description: "Turn your keyboard into a precision text cursor by long-pressing the spacebar.",
    howTo: ["Open any text field", "Long-press the spacebar", "Keyboard turns into a trackpad", "Slide finger to position cursor precisely", "Press harder (3D Touch) to select text"],
    platform: "iPhone & iPad",
    category: "gesture"
  },
  {
    id: 4,
    title: "Measure App — Level Tool",
    description: "The Measure app has a hidden spirit level for hanging pictures and checking surfaces.",
    howTo: ["Open the Measure app", "Swipe left or tap 'Level'", "Place phone flat on surface to check level", "Or hold against a wall for vertical level", "Shows degrees of tilt with precision"],
    platform: "iPhone & iPad",
    category: "easter-egg"
  },
  {
    id: 5,
    title: "Scientific Calculator (Rotate Phone)",
    description: "The Calculator app becomes a full scientific calculator when you rotate to landscape.",
    howTo: ["Open Calculator app", "Make sure rotation lock is OFF", "Rotate phone to landscape", "Full scientific calculator with sin, cos, tan, log, etc.", "Includes memory functions and parentheses"],
    platform: "iPhone",
    category: "easter-egg"
  },
  {
    id: 6,
    title: "Custom Vibration Patterns",
    description: "Create unique vibration patterns for specific contacts so you know who's calling without looking.",
    howTo: ["Settings > Sounds & Haptics > Ringtone > Vibration", "Scroll down and tap 'Create New Vibration'", "Tap the screen to create your pattern", "Tap Stop, then Save", "Assign to a contact via their contact card"],
    platform: "iPhone",
    category: "setting"
  },
  {
    id: 7,
    title: "Three-Finger Undo/Redo Gestures",
    description: "Swipe left with three fingers to undo, swipe right to redo. Works everywhere.",
    howTo: ["Three-finger swipe LEFT = Undo", "Three-finger swipe RIGHT = Redo", "Three-finger double-tap = Undo/Redo toolbar", "Three-finger pinch in = Copy", "Three-finger pinch out = Paste"],
    platform: "iPhone & iPad",
    category: "gesture"
  },
  {
    id: 8,
    title: "Live Voicemail Transcription",
    description: "See a real-time transcription of voicemails as they're being left — pick up if it's important.",
    howTo: ["Go to Settings > Phone > Live Voicemail", "Enable Live Voicemail", "When someone leaves a voicemail, you see it transcribed in real-time", "Tap 'Pick Up' to answer mid-voicemail", "Works even when phone is locked (shows on lock screen)"],
    platform: "iPhone (iOS 17+)",
    category: "setting"
  },
  {
    id: 9,
    title: "AirDrop via NameDrop (Tap Phones Together)",
    description: "Hold two iPhones near each other to instantly share contact info or files.",
    howTo: ["Hold the top of your iPhone near the top of another iPhone", "A glowing animation appears", "Choose to share your contact card", "Or share a file, photo, or link", "Works with Apple Watch too"],
    platform: "iPhone (iOS 17+)",
    category: "gesture"
  },
  {
    id: 10,
    title: "Sound Recognition",
    description: "iPhone can listen for specific sounds (doorbell, baby crying, fire alarm) and alert you.",
    howTo: ["Settings > Accessibility > Sound Recognition", "Enable Sound Recognition", "Choose which sounds to listen for", "Options: Fire alarm, Siren, Smoke alarm, Cat, Dog, Doorbell, etc.", "Get notifications when sounds are detected"],
    platform: "iPhone & iPad",
    category: "accessibility"
  },
  {
    id: 11,
    title: "LED Flash for Alerts",
    description: "Make the camera flash blink when you receive notifications — useful in loud environments.",
    howTo: ["Settings > Accessibility > Audio/Visual", "Enable 'LED Flash for Alerts'", "Optional: Enable 'Flash While Silent' for silent mode only", "Camera flash will blink for calls, texts, and notifications"],
    platform: "iPhone",
    category: "accessibility"
  },
  {
    id: 12,
    title: "Spotlight Calculations & Conversions",
    description: "Swipe down on home screen and type math or unit conversions directly — no Calculator app needed.",
    howTo: ["Swipe down from middle of home screen", "Type any math: '15% of 230' or '145*3.5'", "Type conversions: '5 miles in km' or '72°F in celsius'", "Type currency: '100 USD in EUR'", "Results appear instantly"],
    platform: "iPhone, iPad, Mac",
    category: "power-user"
  },
  {
    id: 13,
    title: "Custom Lock Screen Fonts & Colors",
    description: "Customize the clock font, color, and style on your lock screen.",
    howTo: ["Long-press lock screen > Customize > Lock Screen", "Tap the clock/time display", "Choose from 8 different font styles", "Adjust font weight (thin to bold)", "Pick any color or use color picker on wallpaper"],
    platform: "iPhone (iOS 16+)",
    category: "setting"
  },
  {
    id: 14,
    title: "Siri Announce Notifications",
    description: "Siri reads your notifications aloud through AirPods — reply without touching your phone.",
    howTo: ["Settings > Notifications > Announce Notifications", "Enable the feature", "Works with AirPods and compatible Beats", "Siri reads message content aloud", "Reply by speaking — Siri sends your response", "Choose which apps can announce"],
    platform: "iPhone + AirPods",
    category: "setting"
  },
  {
    id: 15,
    title: "Guided Access (Lock to One App)",
    description: "Lock your phone to a single app — perfect for handing your phone to a child or during presentations.",
    howTo: ["Settings > Accessibility > Guided Access > Enable", "Open the app you want to lock to", "Triple-click Side button to start Guided Access", "Optionally disable touch on certain screen areas", "Set a time limit", "Triple-click again + enter passcode to exit"],
    platform: "iPhone & iPad",
    category: "accessibility"
  },
  {
    id: 16,
    title: "Shake to Undo",
    description: "Physically shake your iPhone to undo the last action — typing, deleting, moving emails.",
    howTo: ["Make a mistake while typing", "Shake your iPhone", "Tap 'Undo' on the popup", "Shake again to Redo", "Works in most apps including Mail, Notes, Messages"],
    platform: "iPhone",
    category: "gesture"
  },
  {
    id: 17,
    title: "Safari Reading List (Offline)",
    description: "Save articles for offline reading — they download automatically on Wi-Fi.",
    howTo: ["In Safari, tap the Share button on any article", "Tap 'Add to Reading List'", "Go to Settings > Safari > Reading List", "Enable 'Automatically Save Offline'", "Access via bookmarks icon > Reading List tab"],
    platform: "iPhone, iPad, Mac",
    category: "power-user"
  },
  {
    id: 18,
    title: "Hidden Photo Album with Face ID",
    description: "Hide photos in a locked album that requires Face ID to open.",
    howTo: ["Select photos > tap Share > Hide", "Photos move to Hidden album", "Hidden album requires Face ID/Touch ID to view", "Go to Settings > Photos > Show Hidden Album to toggle visibility", "Recently Deleted also requires authentication"],
    platform: "iPhone & iPad (iOS 16+)",
    category: "setting"
  },
  {
    id: 19,
    title: "Type to Siri",
    description: "Ask Siri questions by typing instead of speaking — useful in quiet environments.",
    howTo: ["Settings > Accessibility > Siri > Type to Siri", "Enable the feature", "Now when you activate Siri, a keyboard appears", "Type your request instead of speaking", "Or: hold Side button to speak, double-tap to type"],
    platform: "iPhone, iPad, Mac",
    category: "accessibility"
  },
  {
    id: 20,
    title: "Custom Email Domains with iCloud+",
    description: "Use your own domain (yourname.com) with iCloud Mail — up to 5 custom domains.",
    howTo: ["Requires iCloud+ subscription", "Go to icloud.com/settings > Custom Email Domain", "Add your domain and verify DNS records", "Create up to 3 email addresses per domain", "Share domain with Family Sharing members", "All emails route through iCloud Mail"],
    platform: "All (iCloud+)",
    category: "power-user"
  },
];

const CATEGORY_META: Record<string, { label: string; color: string; bg: string }> = {
  gesture: { label: "Gesture", color: "text-blue-400", bg: "bg-blue-500/10" },
  setting: { label: "Hidden Setting", color: "text-green-400", bg: "bg-green-500/10" },
  shortcut: { label: "Shortcut", color: "text-orange-400", bg: "bg-orange-500/10" },
  "easter-egg": { label: "Easter Egg", color: "text-pink-400", bg: "bg-pink-500/10" },
  accessibility: { label: "Accessibility", color: "text-purple-400", bg: "bg-purple-500/10" },
  "power-user": { label: "Power User", color: "text-cyan-400", bg: "bg-cyan-500/10" },
};

export default function HiddenFeatures() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = filter === "all" ? HIDDEN_FEATURES : HIDDEN_FEATURES.filter(f => f.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-transparent to-transparent" />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Did You Know?</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Hidden Features</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            {HIDDEN_FEATURES.length} features most people don't know exist. 
            Gestures, settings, easter eggs, and power-user tricks.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 px-4 border-y border-border/30 sticky top-[44px] z-20 bg-background/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              filter === "all" ? "bg-pink-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
            }`}
          >
            All ({HIDDEN_FEATURES.length})
          </button>
          {Object.entries(CATEGORY_META).map(([key, meta]) => {
            const count = HIDDEN_FEATURES.filter(f => f.category === key).length;
            if (count === 0) return null;
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === key ? "bg-pink-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
                }`}
              >
                {meta.label} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-3">
          {filtered.map(feature => {
            const isExpanded = expandedId === feature.id;
            const catMeta = CATEGORY_META[feature.category];
            return (
              <div
                key={feature.id}
                className="rounded-xl border border-border/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden cursor-pointer"
                onClick={() => setExpandedId(isExpanded ? null : feature.id)}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${catMeta.bg} ${catMeta.color}`}>
                          {catMeta.label}
                        </span>
                        <span className="text-[10px] text-muted-foreground">{feature.platform}</span>
                      </div>
                      <h3 className="text-lg font-bold mt-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                    <svg className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-border/20 pt-4">
                    <h4 className="text-sm font-semibold mb-3 text-pink-400">How To</h4>
                    <ol className="space-y-2">
                      {feature.howTo.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xs font-mono flex-shrink-0">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
