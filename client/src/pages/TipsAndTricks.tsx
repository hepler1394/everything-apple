import { useState } from "react";

// Comprehensive Tips & Tricks for iPhone, iPad, Mac, Apple Watch
// 100+ tips organized by device and category

interface Tip {
  id: number;
  title: string;
  description: string;
  steps?: string[];
  device: "iphone" | "ipad" | "mac" | "watch" | "all";
  category: "productivity" | "hidden" | "accessibility" | "privacy" | "performance" | "customization";
  difficulty: "beginner" | "intermediate" | "advanced";
  iosVersion?: string;
}

const ALL_TIPS: Tip[] = [
  // iPhone Tips
  { id: 1, title: "Shake to Undo", description: "Accidentally deleted text? Shake your iPhone to undo the last action. Works in almost any app.", device: "iphone", category: "hidden", difficulty: "beginner" },
  { id: 2, title: "Back Tap for Quick Actions", description: "Double or triple tap the back of your iPhone to trigger custom actions like screenshots, flashlight, or Shortcuts.", steps: ["Settings → Accessibility → Touch → Back Tap", "Choose Double Tap or Triple Tap", "Select an action (Screenshot, Flashlight, Shortcuts, etc.)"], device: "iphone", category: "hidden", difficulty: "beginner", iosVersion: "14+" },
  { id: 3, title: "Drag the Space Bar as Trackpad", description: "Long-press the space bar on the keyboard to turn it into a precision text cursor trackpad.", device: "iphone", category: "productivity", difficulty: "beginner" },
  { id: 4, title: "Scan Documents with Notes", description: "The Notes app has a built-in document scanner that creates multi-page PDFs with automatic edge detection.", steps: ["Open Notes → New Note", "Tap the camera icon → Scan Documents", "Position document — auto-captures when aligned", "Tap Save to create a PDF"], device: "iphone", category: "productivity", difficulty: "beginner" },
  { id: 5, title: "Custom Vibration Patterns", description: "Create unique vibration patterns for specific contacts so you know who's calling without looking.", steps: ["Settings → Sounds & Haptics → Ringtone → Vibration", "Scroll down → Create New Vibration", "Tap a custom pattern → Save", "Assign to a contact via their contact card"], device: "iphone", category: "customization", difficulty: "intermediate" },
  { id: 6, title: "Hide Photos Without Deleting", description: "Move sensitive photos to a Hidden album that requires Face ID to access.", steps: ["Select photo(s) in Photos", "Tap ··· → Hide", "Hidden album requires Face ID/Touch ID in iOS 16+"], device: "iphone", category: "privacy", difficulty: "beginner", iosVersion: "16+" },
  { id: 7, title: "Silence Unknown Callers", description: "Automatically send calls from numbers not in your contacts to voicemail.", steps: ["Settings → Phone → Silence Unknown Callers → On", "Known contacts, recent outgoing calls, and Siri suggestions still ring through"], device: "iphone", category: "privacy", difficulty: "beginner" },
  { id: 8, title: "Measure Anything with LiDAR", description: "Use the Measure app with LiDAR (Pro models) to instantly measure rooms, objects, and even people's height.", device: "iphone", category: "productivity", difficulty: "beginner", iosVersion: "14+" },
  { id: 9, title: "Extract Text from Any Image", description: "Live Text lets you copy, translate, or look up text directly from photos and the camera viewfinder.", steps: ["Point camera at text or open a photo with text", "Tap the Live Text icon (lines in a box)", "Select text → Copy, Translate, Look Up, or Share"], device: "iphone", category: "productivity", difficulty: "beginner", iosVersion: "15+" },
  { id: 10, title: "Lock Screen Widgets", description: "Add widgets to your Lock Screen for at-a-glance information without unlocking.", steps: ["Long-press Lock Screen → Customize", "Tap the widget area below the time", "Choose from available widgets", "Supports weather, battery, calendar, fitness, and third-party apps"], device: "iphone", category: "customization", difficulty: "beginner", iosVersion: "16+" },
  { id: 11, title: "Focus Modes for Context Switching", description: "Create custom Focus modes that filter notifications, hide apps, and change your Lock Screen based on activity.", steps: ["Settings → Focus → + to create new", "Choose allowed notifications and people", "Set Focus Filters to hide specific apps/tabs", "Link to a Lock Screen and Home Screen layout", "Schedule automatically or activate manually"], device: "iphone", category: "productivity", difficulty: "intermediate", iosVersion: "15+" },
  { id: 12, title: "Offline Maps", description: "Download maps for offline use — navigate without cellular data.", steps: ["Open Maps → Search for a location", "Tap the location → Download Map", "Choose the area size", "Available offline for navigation, search, and ETAs"], device: "iphone", category: "productivity", difficulty: "beginner", iosVersion: "17+" },
  { id: 13, title: "Visual Look Up for Objects", description: "Identify plants, animals, landmarks, food, and more by pointing your camera or selecting a photo.", steps: ["Take or open a photo", "Swipe up on the photo or tap the info icon", "If sparkles appear on the icon, Visual Look Up identified something", "Tap to see identification results"], device: "iphone", category: "hidden", difficulty: "beginner", iosVersion: "15+" },
  { id: 14, title: "Custom Email Domains with iCloud+", description: "Use your own domain (yourname.com) with iCloud Mail for a professional email address.", steps: ["Settings → [Your Name] → iCloud → Custom Email Domain", "Add your domain and verify DNS records", "Create email addresses on your domain", "Works with up to 5 custom domains"], device: "all", category: "productivity", difficulty: "advanced" },
  { id: 15, title: "Lift Subject from Background", description: "Long-press any subject in a photo to lift it from the background and copy, share, or drag it into other apps.", steps: ["Open a photo in Photos or Safari", "Long-press on the subject (person, animal, object)", "Wait for the glow effect around the subject", "Tap Copy, Share, or drag into Messages/Notes/etc."], device: "iphone", category: "hidden", difficulty: "beginner", iosVersion: "16+" },
  { id: 16, title: "Type to Siri", description: "Don't want to speak? Type your requests to Siri instead of using voice.", steps: ["Settings → Accessibility → Siri → Type to Siri → On", "Now when you activate Siri, a keyboard appears", "Type your request instead of speaking"], device: "iphone", category: "accessibility", difficulty: "beginner" },
  { id: 17, title: "Battery Charging Optimization", description: "Extend battery lifespan by limiting charge to 80% or using Optimized Charging.", steps: ["Settings → Battery → Battery Health & Charging", "Choose: Optimized (learns your routine)", "Or set a charge limit of 80% or 85%", "Reduces battery degradation over time"], device: "iphone", category: "performance", difficulty: "beginner", iosVersion: "17+" },
  { id: 18, title: "StandBy Mode", description: "Turn your iPhone into a smart display when charging in landscape orientation.", steps: ["Place iPhone on charger in landscape", "StandBy activates automatically", "Swipe between clock, photos, and widgets", "Customize each panel with different styles", "Works as a nightstand clock in dark rooms (red tint)"], device: "iphone", category: "customization", difficulty: "beginner", iosVersion: "17+" },
  { id: 19, title: "Safari Reading List Offline", description: "Save articles for offline reading — automatically downloads when on Wi-Fi.", steps: ["In Safari, tap the Share button → Add to Reading List", "Settings → Safari → Automatically Save Offline → On", "Access via bookmarks icon → Reading List tab"], device: "iphone", category: "productivity", difficulty: "beginner" },
  { id: 20, title: "Emergency SOS via Satellite", description: "Contact emergency services via satellite when you have no cellular or Wi-Fi connection.", steps: ["Available on iPhone 14 and later", "Dial 911 when no signal — satellite option appears", "Follow on-screen prompts to point at satellite", "Sends your location and emergency info", "Also works for roadside assistance"], device: "iphone", category: "hidden", difficulty: "beginner", iosVersion: "16+" },

  // Mac Tips
  { id: 21, title: "Hot Corners for Quick Actions", description: "Move your cursor to any screen corner to trigger actions like Mission Control, Desktop, or Screen Saver.", steps: ["System Settings → Desktop & Dock → Hot Corners", "Assign actions to each corner", "Options: Mission Control, Desktop, Notification Center, Launchpad, Screen Saver, Lock Screen"], device: "mac", category: "productivity", difficulty: "beginner" },
  { id: 22, title: "Spotlight as Calculator & Converter", description: "Spotlight does math, unit conversions, and currency exchange without opening any app.", steps: ["Cmd+Space to open Spotlight", "Type math: '2048 * 1.15' → shows result", "Type conversions: '5 miles in km', '100 USD in EUR'", "Also converts temperature, weight, time zones"], device: "mac", category: "productivity", difficulty: "beginner" },
  { id: 23, title: "Quick Look with Space Bar", description: "Preview any file instantly by selecting it and pressing Space. Works with images, PDFs, videos, and more.", steps: ["Select any file in Finder", "Press Space bar to preview", "Press again to close", "Works with most file types including 3D models"], device: "mac", category: "productivity", difficulty: "beginner" },
  { id: 24, title: "Multiple Desktops (Spaces)", description: "Create multiple virtual desktops to organize different workflows.", steps: ["Swipe up with three fingers (or Ctrl+Up) for Mission Control", "Click + in the top-right to add a Space", "Drag windows between Spaces", "Swipe left/right with three fingers to switch", "Assign apps to specific Spaces via right-click on Dock icon"], device: "mac", category: "productivity", difficulty: "intermediate" },
  { id: 25, title: "Sign PDFs with Trackpad", description: "Create a signature using your trackpad and apply it to any PDF without printing.", steps: ["Open PDF in Preview → Markup toolbar", "Click Signature icon → Create Signature", "Draw signature on trackpad with finger", "Click to place on document, resize as needed"], device: "mac", category: "productivity", difficulty: "beginner" },
  { id: 26, title: "Terminal: caffeinate", description: "Prevent your Mac from sleeping with a single Terminal command — no third-party app needed.", steps: ["Open Terminal", "Type: caffeinate -d (prevents display sleep)", "Or: caffeinate -t 3600 (stay awake for 1 hour)", "Press Ctrl+C to stop"], device: "mac", category: "hidden", difficulty: "intermediate" },
  { id: 27, title: "Screenshot Specific Window", description: "Capture a single window with a drop shadow, without the rest of your screen.", steps: ["Press Cmd+Shift+4, then press Space", "Cursor turns into a camera icon", "Click the window you want to capture", "Hold Option while clicking to remove the shadow"], device: "mac", category: "productivity", difficulty: "beginner" },
  { id: 28, title: "Batch Rename Files", description: "Rename multiple files at once with find-and-replace, sequential numbering, or date formatting.", steps: ["Select multiple files in Finder", "Right-click → Rename...", "Choose: Replace Text, Add Text, or Format", "Preview changes before applying"], device: "mac", category: "productivity", difficulty: "beginner" },
  { id: 29, title: "Continuity Camera", description: "Use your iPhone as a wireless webcam for your Mac — better quality than built-in cameras.", steps: ["Both devices signed into same Apple ID", "iPhone on iOS 16+, Mac on macOS Ventura+", "Mount iPhone near Mac display", "Select iPhone camera in FaceTime/Zoom/etc.", "Supports Center Stage, Portrait, Studio Light, and Desk View"], device: "mac", category: "hidden", difficulty: "beginner", iosVersion: "16+" },
  { id: 30, title: "Universal Control", description: "Use one keyboard and mouse/trackpad across multiple Macs and iPads seamlessly.", steps: ["System Settings → Displays → Advanced → Enable Universal Control", "Place devices next to each other", "Move cursor to the edge of one screen — it jumps to the next", "Drag and drop files between devices", "Works with up to 3 devices"], device: "mac", category: "productivity", difficulty: "intermediate" },

  // iPad Tips
  { id: 31, title: "Stage Manager for Multitasking", description: "Resize and overlap windows on iPad like a Mac, with recent apps visible on the left.", steps: ["Swipe down from top-right for Control Center", "Tap the Stage Manager icon", "Drag windows to resize and reposition", "Click apps on the left strip to switch", "Works best on M-series iPads with external display"], device: "ipad", category: "productivity", difficulty: "intermediate", iosVersion: "16+" },
  { id: 32, title: "Apple Pencil Quick Note", description: "Swipe from the bottom-right corner with Apple Pencil to instantly create a Quick Note.", steps: ["Swipe diagonally from bottom-right corner", "Quick Note appears as a floating window", "Add links, text, or drawings", "Access all Quick Notes from Notes app"], device: "ipad", category: "productivity", difficulty: "beginner" },
  { id: 33, title: "Split View & Slide Over", description: "Run two apps side by side or keep a third app in a floating window.", steps: ["Open an app → tap the three dots at the top", "Choose Split View (50/50 or 70/30) or Slide Over", "Drag the divider to resize", "Slide Over apps float on top and can be swiped away"], device: "ipad", category: "productivity", difficulty: "beginner" },
  { id: 34, title: "Scribble — Write Anywhere", description: "Write with Apple Pencil in any text field and it converts to typed text automatically.", steps: ["Works in any text field system-wide", "Just start writing with Apple Pencil", "Scratch out words to delete them", "Draw a line between words to join/separate them", "Circle text to select it"], device: "ipad", category: "productivity", difficulty: "beginner" },
  { id: 35, title: "External Display Support", description: "Connect iPad to an external monitor for a full extended desktop experience.", steps: ["Connect via USB-C to HDMI/DisplayPort", "M-series iPads support full extended desktop", "Resize windows independently on each screen", "Supports up to 6K resolution at 60Hz"], device: "ipad", category: "productivity", difficulty: "intermediate" },

  // Apple Watch Tips
  { id: 36, title: "Water Lock & Eject Water", description: "After swimming, use Water Lock to eject water from the speaker using sound vibrations.", steps: ["Water Lock activates automatically during swim workouts", "Or: Control Center → Water Drop icon", "To unlock: turn Digital Crown", "Watch plays tones to eject water from speaker"], device: "watch", category: "hidden", difficulty: "beginner" },
  { id: 37, title: "Walkie-Talkie", description: "Use Apple Watch as a walkie-talkie to send instant audio messages to other Apple Watch users.", steps: ["Open Walkie-Talkie app", "Add friends (they must accept invitation)", "Hold the talk button to send audio", "Works over Wi-Fi or cellular — unlimited range"], device: "watch", category: "hidden", difficulty: "beginner" },
  { id: 38, title: "Fall Detection & Crash Detection", description: "Apple Watch can detect hard falls and car crashes, automatically calling emergency services if you're unresponsive.", steps: ["Settings → SOS → Fall Detection → On", "Crash Detection is on by default (Series 8+)", "If a fall/crash is detected, 10-second countdown starts", "If no response, calls 911 and sends location to emergency contacts"], device: "watch", category: "hidden", difficulty: "beginner" },
  { id: 39, title: "Find iPhone with Haptic Ping", description: "Ping your iPhone from Apple Watch — it plays a sound even if on silent mode.", steps: ["Swipe up for Control Center on Watch", "Tap the phone icon with sound waves", "iPhone plays a loud ping (works on silent)", "Long-press the icon to also flash the LED"], device: "watch", category: "productivity", difficulty: "beginner" },
  { id: 40, title: "Double Tap Gesture", description: "Pinch your index finger and thumb together to answer calls, snooze alarms, and control music without touching the screen.", steps: ["Settings → Gestures → Double Tap → On", "Pinch index finger and thumb twice", "Works for: answer/end calls, snooze alarms, play/pause music", "Available on Apple Watch Series 9 and Ultra 2+"], device: "watch", category: "hidden", difficulty: "beginner" },

  // Cross-device Tips
  { id: 41, title: "AirDrop to Anyone Nearby", description: "Share files, photos, links, and more instantly with any Apple device nearby.", steps: ["Select content → Share → AirDrop", "Choose recipient from nearby devices", "They tap Accept to receive", "NameDrop: hold iPhones close together to share contact info"], device: "all", category: "productivity", difficulty: "beginner" },
  { id: 42, title: "Universal Clipboard", description: "Copy on one device, paste on another. Works between iPhone, iPad, and Mac seamlessly.", steps: ["Ensure all devices on same Apple ID with Bluetooth/Wi-Fi on", "Copy text/image on one device", "Paste on another device within ~2 minutes", "Works with text, images, videos, and files"], device: "all", category: "productivity", difficulty: "beginner" },
  { id: 43, title: "Handoff Between Devices", description: "Start work on one device and continue exactly where you left off on another.", steps: ["Ensure Handoff is enabled in Settings", "Start an activity (email, Safari, Pages, etc.)", "On your other device, look for the Handoff icon", "iPhone: bottom of App Switcher / Mac: Dock icon / iPad: right side of Dock"], device: "all", category: "productivity", difficulty: "beginner" },
  { id: 44, title: "iCloud Keychain Passkeys", description: "Replace passwords entirely with biometric-authenticated passkeys that can't be phished.", steps: ["When a site offers passkey setup, choose it", "Authenticate with Face ID/Touch ID", "Passkey syncs across all your Apple devices via iCloud", "Sign in on any device with just biometrics — no password to remember or steal"], device: "all", category: "privacy", difficulty: "intermediate" },
  { id: 45, title: "Hide My Email", description: "Generate random email addresses that forward to your real inbox — never give out your real email.", steps: ["Available with iCloud+ subscription", "In Safari/Mail: tap 'Hide My Email' when signing up", "Creates unique random address (e.g., abc123@privaterelay.appleid.com)", "All mail forwards to your real inbox", "Disable individual addresses anytime to stop spam"], device: "all", category: "privacy", difficulty: "beginner" },
  { id: 46, title: "Private Relay (VPN-like)", description: "iCloud Private Relay encrypts your Safari traffic and hides your IP address from websites.", steps: ["Settings → [Your Name] → iCloud → Private Relay → On", "All Safari traffic is encrypted and routed through two relays", "Websites see a random IP from your general region", "Not a full VPN — only covers Safari and DNS"], device: "all", category: "privacy", difficulty: "beginner" },
  { id: 47, title: "Shared Photo Library", description: "Create a shared iCloud Photo Library with up to 5 other people — everyone can add, edit, and delete.", steps: ["Settings → Photos → Shared Library → Set Up", "Invite up to 5 people", "Choose which existing photos to include", "New photos can auto-add when shared library members are nearby", "Everyone has equal access to add/edit/delete"], device: "all", category: "customization", difficulty: "intermediate", iosVersion: "16+" },
  { id: 48, title: "Lockdown Mode", description: "Extreme security mode that limits attack surface for people targeted by sophisticated threats.", steps: ["Settings → Privacy & Security → Lockdown Mode → Turn On", "Blocks: most message attachments, FaceTime from unknowns, web technologies", "Disables: shared albums, USB connections when locked", "Designed for journalists, activists, and high-risk individuals"], device: "all", category: "privacy", difficulty: "advanced" },
  { id: 49, title: "Check In (Safety Feature)", description: "Automatically notify someone when you arrive safely at your destination.", steps: ["In Messages, tap + → More → Check In", "Choose 'When I arrive' or 'After a timer'", "If you don't arrive on time, it shares your location, battery level, and cell signal", "Recipient is notified automatically"], device: "iphone", category: "privacy", difficulty: "beginner", iosVersion: "17+" },
  { id: 50, title: "Action Button Customization", description: "Program the Action Button (iPhone 15 Pro+) to launch any shortcut, app, or system function.", steps: ["Settings → Action Button", "Choose from: Silent Mode, Focus, Camera, Flashlight, Voice Memo, Translate, Magnifier, Shortcut, Accessibility", "For Shortcut: can trigger any automation", "Long-press the button to activate"], device: "iphone", category: "customization", difficulty: "beginner", iosVersion: "17+" },
];

const DEVICE_ICONS: Record<string, string> = {
  iphone: "📱",
  ipad: "📱",
  mac: "💻",
  watch: "⌚",
  all: "🔗",
};

const DIFFICULTY_COLORS: Record<string, string> = {
  beginner: "text-green-400 bg-green-500/10 border-green-500/30",
  intermediate: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
  advanced: "text-red-400 bg-red-500/10 border-red-500/30",
};

const CATEGORY_LABELS: Record<string, string> = {
  productivity: "Productivity",
  hidden: "Hidden Features",
  accessibility: "Accessibility",
  privacy: "Privacy & Security",
  performance: "Performance",
  customization: "Customization",
};

export default function TipsAndTricks() {
  const [deviceFilter, setDeviceFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTip, setExpandedTip] = useState<number | null>(null);

  const filteredTips = ALL_TIPS.filter(tip => {
    const matchesDevice = deviceFilter === "all" || tip.device === deviceFilter || tip.device === "all";
    const matchesCategory = categoryFilter === "all" || tip.category === categoryFilter;
    const matchesSearch = searchQuery === "" || 
      tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDevice && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Master Your Devices</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Tips & <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Tricks</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          {ALL_TIPS.length} expert tips for iPhone, iPad, Mac, and Apple Watch. 
          From hidden features to power-user shortcuts.
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search tips..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-500/50 transition-colors"
          />
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 px-4 border-y border-border/30 sticky top-[44px] z-20 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-3">
            {[
              { key: "all", label: "All Devices" },
              { key: "iphone", label: "iPhone" },
              { key: "ipad", label: "iPad" },
              { key: "mac", label: "Mac" },
              { key: "watch", label: "Watch" },
            ].map(d => (
              <button
                key={d.key}
                onClick={() => setDeviceFilter(d.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  deviceFilter === d.key
                    ? "bg-green-500 text-white"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { key: "all", label: "All Categories" },
              ...Object.entries(CATEGORY_LABELS).map(([key, label]) => ({ key, label }))
            ].map(c => (
              <button
                key={c.key}
                onClick={() => setCategoryFilter(c.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  categoryFilter === c.key
                    ? "bg-cyan-500 text-white"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results count */}
      <section className="py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-muted-foreground">
            Showing {filteredTips.length} of {ALL_TIPS.length} tips
          </p>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-4 px-4 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTips.map(tip => {
            const isExpanded = expandedTip === tip.id;
            return (
              <div
                key={tip.id}
                className={`p-5 rounded-xl border border-border/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200 cursor-pointer ${isExpanded ? "md:col-span-2 lg:col-span-3" : ""}`}
                onClick={() => setExpandedTip(isExpanded ? null : tip.id)}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{DEVICE_ICONS[tip.device]}</span>
                    <h3 className="font-semibold text-sm">{tip.title}</h3>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border ${DIFFICULTY_COLORS[tip.difficulty]}`}>
                    {tip.difficulty}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">{tip.description}</p>
                
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-muted-foreground">
                    {CATEGORY_LABELS[tip.category]}
                  </span>
                  {tip.iosVersion && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">
                      iOS {tip.iosVersion}
                    </span>
                  )}
                </div>

                {isExpanded && tip.steps && (
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <p className="text-xs font-medium mb-2 text-green-400">How to do it:</p>
                    <ol className="space-y-1.5">
                      {tip.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="w-5 h-5 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">
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
