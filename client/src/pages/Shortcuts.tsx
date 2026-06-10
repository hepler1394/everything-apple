import { useState } from "react";

// Apple Shortcuts & Automation — Complete Guide
// Build powerful automations across all Apple devices

interface ShortcutExample {
  id: number;
  name: string;
  description: string;
  actions: string[];
  trigger: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: "productivity" | "health" | "home" | "media" | "communication" | "system" | "location";
  estimatedTime: string;
}

const SHORTCUT_EXAMPLES: ShortcutExample[] = [
  {
    id: 1,
    name: "Morning Routine",
    description: "Automatically triggered at wake-up time: reads weather, shows calendar, starts playlist.",
    actions: [
      "Get current weather for your location",
      "Speak: 'Good morning. It's [temperature] and [condition]'",
      "Get upcoming calendar events for today",
      "Speak: 'You have [count] events today. First is [event] at [time]'",
      "Set volume to 30%",
      "Play your Morning playlist on Apple Music",
      "Turn on smart lights to 50% brightness",
      "Open your preferred news app"
    ],
    trigger: "Automation: Time of Day (7:00 AM weekdays)",
    difficulty: "beginner",
    category: "productivity",
    estimatedTime: "5 min to build"
  },
  {
    id: 2,
    name: "Meeting Prep",
    description: "One tap before meetings: enables DND, opens notes, starts timer.",
    actions: [
      "Set Focus to Work",
      "Set volume to 0 (silent)",
      "Create new note titled 'Meeting Notes - [Date]'",
      "Open Zoom/Teams/FaceTime based on calendar event",
      "Start 30-minute timer",
      "Send text to partner: 'In a meeting, will call back later'"
    ],
    trigger: "Manual trigger or Calendar event automation",
    difficulty: "beginner",
    category: "productivity",
    estimatedTime: "3 min to build"
  },
  {
    id: 3,
    name: "Commute Home",
    description: "Triggered when leaving work: sends ETA to family, plays podcast, adjusts thermostat.",
    actions: [
      "Get travel time from current location to Home",
      "Send message to partner: 'Leaving work. ETA [time] minutes'",
      "Get directions to Home in Apple Maps",
      "Play latest episode of subscribed podcast",
      "Set Home thermostat to 72°F via HomeKit",
      "Turn on porch lights if after sunset"
    ],
    trigger: "Automation: Leave [Work location]",
    difficulty: "intermediate",
    category: "location",
    estimatedTime: "8 min to build"
  },
  {
    id: 4,
    name: "Water Intake Tracker",
    description: "Log water intake with one tap and get reminders throughout the day.",
    actions: [
      "Ask for input: 'How many glasses?' (default: 1)",
      "Log water intake to Health app",
      "Get today's total water intake",
      "Show notification: 'Total today: [amount]. Goal: 8 glasses'",
      "If total >= 8: show celebration notification"
    ],
    trigger: "Manual + Automation: Every 2 hours (9AM-9PM)",
    difficulty: "beginner",
    category: "health",
    estimatedTime: "4 min to build"
  },
  {
    id: 5,
    name: "Smart Home Movie Mode",
    description: "Dims lights, closes blinds, turns on TV, and sets the perfect movie atmosphere.",
    actions: [
      "Set living room lights to 10% warm white",
      "Close smart blinds",
      "Turn on Apple TV",
      "Set Apple TV to Apple TV+ app",
      "Set HomePod volume to 50%",
      "Set Focus to 'Movie Time' (silences notifications)",
      "Wait 5 seconds",
      "Show menu: choose from Favorites list or browse"
    ],
    trigger: "Manual, Siri command, or NFC tag on remote",
    difficulty: "intermediate",
    category: "home",
    estimatedTime: "10 min to build"
  },
  {
    id: 6,
    name: "Photo Backup to Cloud",
    description: "Automatically compress and upload screenshots to a specific cloud folder.",
    actions: [
      "Get latest screenshot from Photos",
      "Resize image to 1920px width (maintain aspect ratio)",
      "Convert to JPEG at 80% quality",
      "Rename file to 'Screenshot_[Date]_[Time].jpg'",
      "Upload to iCloud Drive > Screenshots folder",
      "Delete original from Photos (optional)",
      "Show notification: 'Screenshot backed up'"
    ],
    trigger: "Automation: When screenshot is taken",
    difficulty: "intermediate",
    category: "system",
    estimatedTime: "6 min to build"
  },
  {
    id: 7,
    name: "Podcast Speed Adjuster",
    description: "Automatically adjusts podcast playback speed based on episode length.",
    actions: [
      "Get currently playing podcast episode",
      "Get episode duration",
      "If duration > 60 min: set speed to 1.5x",
      "If duration 30-60 min: set speed to 1.25x",
      "If duration < 30 min: set speed to 1.0x",
      "Show notification: 'Playing at [speed]x — [duration] min episode'"
    ],
    trigger: "Automation: When Podcasts app opens",
    difficulty: "intermediate",
    category: "media",
    estimatedTime: "5 min to build"
  },
  {
    id: 8,
    name: "Battery Saver Mode",
    description: "When battery drops below 20%, automatically reduces power consumption.",
    actions: [
      "Enable Low Power Mode",
      "Set brightness to 30%",
      "Disable Wi-Fi (use cellular only)",
      "Set Focus to 'Battery Saver' (limits notifications)",
      "Close all background apps",
      "Send message to favorites: 'Phone battery low. Text only please'",
      "Show notification with estimated time remaining"
    ],
    trigger: "Automation: Battery Level drops below 20%",
    difficulty: "beginner",
    category: "system",
    estimatedTime: "4 min to build"
  },
  {
    id: 9,
    name: "Travel Packing Checklist",
    description: "Generates a packing checklist in Reminders based on trip duration and weather.",
    actions: [
      "Ask for destination city",
      "Ask for trip duration (days)",
      "Get weather forecast for destination",
      "Create Reminders list: 'Packing - [Destination]'",
      "Add items based on duration: underwear x[days], shirts x[days]",
      "If rain forecast: add umbrella, rain jacket",
      "If cold: add jacket, warm layers",
      "Add standard items: charger, passport, toiletries",
      "Show checklist in Reminders app"
    ],
    trigger: "Manual trigger before trips",
    difficulty: "advanced",
    category: "productivity",
    estimatedTime: "15 min to build"
  },
  {
    id: 10,
    name: "Social Media Limiter",
    description: "After 30 minutes of social media, shows a reminder and offers to close the app.",
    actions: [
      "Track time spent in social media apps",
      "After 30 minutes: show alert 'You have been scrolling for 30 min'",
      "Offer choices: '5 more minutes' or 'Close app'",
      "If close: open a productive app (Books, Notes, etc.)",
      "If 5 more minutes: set 5-minute timer then repeat alert",
      "Log daily social media time to Health app"
    ],
    trigger: "Automation: App opened (Instagram, TikTok, Twitter, etc.)",
    difficulty: "advanced",
    category: "health",
    estimatedTime: "12 min to build"
  },
  {
    id: 11,
    name: "Smart Email Digest",
    description: "Summarizes unread emails every morning and reads them aloud.",
    actions: [
      "Get unread emails from last 12 hours",
      "Filter: only from contacts or VIP senders",
      "For each email: extract sender name and subject",
      "Create summary text: '[count] emails. From [sender]: [subject]...'",
      "Speak summary aloud",
      "Ask: 'Would you like me to open any of these?'",
      "If yes: open Mail app to selected email"
    ],
    trigger: "Automation: Morning routine or manual",
    difficulty: "advanced",
    category: "communication",
    estimatedTime: "10 min to build"
  },
  {
    id: 12,
    name: "Workout Logger",
    description: "Quick-log a workout with type, duration, and calories to Health app.",
    actions: [
      "Show menu: Running, Cycling, Weights, Yoga, Swimming, Other",
      "Ask for duration in minutes",
      "Calculate estimated calories based on type and duration",
      "Log workout to Health app",
      "Show summary: '[Type] for [duration] min — ~[calories] cal burned'",
      "If streak >= 7 days: show celebration",
      "Update workout streak counter in Data Jar"
    ],
    trigger: "Manual or Apple Watch workout end",
    difficulty: "beginner",
    category: "health",
    estimatedTime: "5 min to build"
  },
];

const DIFFICULTY_STYLES: Record<string, { label: string; color: string }> = {
  beginner: { label: "Beginner", color: "text-green-400 bg-green-500/10 border-green-500/30" },
  intermediate: { label: "Intermediate", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30" },
  advanced: { label: "Advanced", color: "text-red-400 bg-red-500/10 border-red-500/30" },
};

const CATEGORY_STYLES: Record<string, { label: string; color: string }> = {
  productivity: { label: "Productivity", color: "text-blue-400" },
  health: { label: "Health", color: "text-green-400" },
  home: { label: "Smart Home", color: "text-orange-400" },
  media: { label: "Media", color: "text-purple-400" },
  communication: { label: "Communication", color: "text-pink-400" },
  system: { label: "System", color: "text-cyan-400" },
  location: { label: "Location", color: "text-amber-400" },
};

export default function Shortcuts() {
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = difficultyFilter === "all"
    ? SHORTCUT_EXAMPLES
    : SHORTCUT_EXAMPLES.filter(s => s.difficulty === difficultyFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Automate Everything</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Shortcuts & Automation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Build powerful automations that run across all your Apple devices. 
            {SHORTCUT_EXAMPLES.length} ready-to-build shortcuts with step-by-step instructions.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
            <span>{SHORTCUT_EXAMPLES.length} shortcuts</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>{SHORTCUT_EXAMPLES.filter(s => s.difficulty === "beginner").length} beginner-friendly</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>No coding required</span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 px-4 border-y border-border/30 sticky top-[44px] z-20 bg-background/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setDifficultyFilter("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              difficultyFilter === "all" ? "bg-orange-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
            }`}
          >
            All Levels ({SHORTCUT_EXAMPLES.length})
          </button>
          {Object.entries(DIFFICULTY_STYLES).map(([key, style]) => {
            const count = SHORTCUT_EXAMPLES.filter(s => s.difficulty === key).length;
            return (
              <button
                key={key}
                onClick={() => setDifficultyFilter(key)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  difficultyFilter === key ? "bg-orange-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
                }`}
              >
                {style.label} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Shortcuts List */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-3">
          {filtered.map(shortcut => {
            const isExpanded = expandedId === shortcut.id;
            const diffStyle = DIFFICULTY_STYLES[shortcut.difficulty];
            const catStyle = CATEGORY_STYLES[shortcut.category];
            return (
              <div
                key={shortcut.id}
                className="rounded-xl border border-border/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden cursor-pointer"
                onClick={() => setExpandedId(isExpanded ? null : shortcut.id)}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border ${diffStyle.color}`}>
                          {diffStyle.label}
                        </span>
                        <span className={`text-[10px] ${catStyle.color}`}>
                          {catStyle.label}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {shortcut.estimatedTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mt-1">{shortcut.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{shortcut.description}</p>
                      <p className="text-xs text-muted-foreground mt-2 italic">{shortcut.trigger}</p>
                    </div>
                    <svg className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-border/20 pt-4">
                    <h4 className="text-sm font-semibold mb-3 text-orange-400">Actions (in order)</h4>
                    <ol className="space-y-2">
                      {shortcut.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-mono flex-shrink-0">
                            {i + 1}
                          </span>
                          {action}
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

      {/* Tips */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Pro Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-orange-400 mb-2">Use NFC Tags</h3>
              <p className="text-sm text-muted-foreground">Stick NFC tags around your home. Tap your phone to a tag to trigger any shortcut — no app needed. Great for nightstands, desks, and car mounts.</p>
            </div>
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-blue-400 mb-2">Chain Shortcuts</h3>
              <p className="text-sm text-muted-foreground">Shortcuts can call other shortcuts. Build small, reusable shortcuts then combine them into complex workflows. Like functions in programming.</p>
            </div>
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-green-400 mb-2">Use Variables</h3>
              <p className="text-sm text-muted-foreground">Store values in variables to reuse later in the shortcut. Use Magic Variables to reference output from any previous action without manual wiring.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
