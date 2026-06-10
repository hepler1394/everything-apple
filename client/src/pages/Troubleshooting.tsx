import { useState } from "react";

// Apple Troubleshooting — Fix Common Problems
// Step-by-step solutions for every Apple device issue

interface Problem {
  id: number;
  title: string;
  symptoms: string[];
  solutions: { step: string; detail: string }[];
  device: string;
  category: "performance" | "connectivity" | "battery" | "display" | "audio" | "storage" | "software" | "hardware";
  severity: "minor" | "moderate" | "critical";
}

const PROBLEMS: Problem[] = [
  {
    id: 1,
    title: "iPhone Running Slow",
    symptoms: ["Apps take longer to open", "Animations stutter", "Keyboard lags when typing", "Scrolling is choppy"],
    solutions: [
      { step: "Restart your iPhone", detail: "Hold Side + Volume Down, slide to power off, wait 30 seconds, turn back on." },
      { step: "Close background apps", detail: "Swipe up from bottom and hold, then swipe up on each app card to close." },
      { step: "Clear Safari cache", detail: "Settings > Safari > Clear History and Website Data." },
      { step: "Check storage", detail: "Settings > General > iPhone Storage. Delete unused apps if below 5GB free." },
      { step: "Disable Background App Refresh", detail: "Settings > General > Background App Refresh > Off (or per-app)." },
      { step: "Update iOS", detail: "Settings > General > Software Update. New versions often fix performance bugs." },
      { step: "Reset all settings", detail: "Settings > General > Transfer or Reset > Reset All Settings. Keeps data, resets preferences." },
      { step: "Factory reset (last resort)", detail: "Backup first, then Settings > General > Transfer or Reset > Erase All Content." }
    ],
    device: "iPhone",
    category: "performance",
    severity: "moderate"
  },
  {
    id: 2,
    title: "Wi-Fi Keeps Disconnecting",
    symptoms: ["Wi-Fi icon disappears randomly", "Falls back to cellular", "Cannot reconnect to known networks", "Slow speeds on Wi-Fi"],
    solutions: [
      { step: "Toggle Wi-Fi off and on", detail: "Settings > Wi-Fi > toggle off, wait 10 seconds, toggle on." },
      { step: "Forget and rejoin network", detail: "Settings > Wi-Fi > tap (i) next to network > Forget This Network > Rejoin." },
      { step: "Reset network settings", detail: "Settings > General > Transfer or Reset > Reset Network Settings. Erases all saved Wi-Fi passwords." },
      { step: "Disable Wi-Fi Assist", detail: "Settings > Cellular > scroll to bottom > Wi-Fi Assist > Off." },
      { step: "Change DNS to 1.1.1.1", detail: "Settings > Wi-Fi > tap (i) > Configure DNS > Manual > add 1.1.1.1 and 8.8.8.8." },
      { step: "Restart router", detail: "Unplug router for 30 seconds, plug back in, wait 2 minutes for full boot." },
      { step: "Check for interference", detail: "Move closer to router. Microwaves, baby monitors, and Bluetooth can interfere with 2.4GHz." }
    ],
    device: "iPhone / iPad / Mac",
    category: "connectivity",
    severity: "moderate"
  },
  {
    id: 3,
    title: "Battery Draining Fast",
    symptoms: ["Loses 20%+ per hour", "Gets hot during normal use", "Battery health dropping rapidly", "Overnight drain exceeds 10%"],
    solutions: [
      { step: "Check Battery Usage", detail: "Settings > Battery. See which apps consumed the most in last 24h/10 days." },
      { step: "Disable Location Services for non-essential apps", detail: "Settings > Privacy > Location Services. Set most apps to 'While Using' or 'Never'." },
      { step: "Reduce screen brightness", detail: "Swipe down Control Center > drag brightness slider to 40-60%." },
      { step: "Enable Low Power Mode", detail: "Settings > Battery > Low Power Mode. Or add to Control Center for quick access." },
      { step: "Disable push email", detail: "Settings > Mail > Accounts > Fetch New Data > change Push to Fetch (every 15/30 min)." },
      { step: "Turn off Raise to Wake", detail: "Settings > Display & Brightness > Raise to Wake > Off." },
      { step: "Check battery health", detail: "Settings > Battery > Battery Health. Below 80% = consider replacement ($89 at Apple)." },
      { step: "Update iOS", detail: "Battery bugs are common in early releases. Update to latest version." }
    ],
    device: "iPhone",
    category: "battery",
    severity: "moderate"
  },
  {
    id: 4,
    title: "AirPods Not Connecting",
    symptoms: ["AirPods don't appear in Bluetooth list", "Only one AirPod connects", "Audio cuts in and out", "AirPods connect to wrong device"],
    solutions: [
      { step: "Put AirPods in case, close lid, wait 30 seconds", detail: "This resets the connection state. Open lid near your iPhone." },
      { step: "Forget and re-pair", detail: "Settings > Bluetooth > tap (i) next to AirPods > Forget This Device. Then re-pair from case." },
      { step: "Reset AirPods", detail: "Put in case, open lid, hold button on back for 15 seconds until light flashes amber then white." },
      { step: "Clean AirPods and case", detail: "Use dry cotton swab to clean speaker mesh and charging contacts. Debris blocks connection." },
      { step: "Check Automatic Switching", detail: "Settings > Bluetooth > AirPods (i) > Connect to This iPhone > change to 'When Last Connected' to prevent switching." },
      { step: "Update AirPods firmware", detail: "Put AirPods in case, connect case to power, keep iPhone nearby. Updates install automatically." }
    ],
    device: "AirPods",
    category: "connectivity",
    severity: "minor"
  },
  {
    id: 5,
    title: "iPhone Storage Full",
    symptoms: ["Cannot take photos", "Apps crash on launch", "Cannot update iOS", "iMessage stops receiving media"],
    solutions: [
      { step: "Check what's using space", detail: "Settings > General > iPhone Storage. See breakdown by app." },
      { step: "Offload unused apps", detail: "Settings > General > iPhone Storage > Enable 'Offload Unused Apps'. Keeps data, removes app binary." },
      { step: "Clear Messages attachments", detail: "Settings > General > iPhone Storage > Messages > Review Large Attachments > delete old videos/photos." },
      { step: "Optimize Photos", detail: "Settings > Photos > Optimize iPhone Storage. Keeps thumbnails on device, full-res in iCloud." },
      { step: "Delete old podcasts", detail: "Settings > General > iPhone Storage > Podcasts > delete downloaded episodes." },
      { step: "Clear Safari data", detail: "Settings > Safari > Clear History and Website Data. Can free 1-3GB." },
      { step: "Delete and reinstall large apps", detail: "Games and social media apps accumulate cache. Delete and reinstall to clear." },
      { step: "Use iCloud for backups", detail: "Settings > Apple ID > iCloud > iCloud Backup. Frees local backup space." }
    ],
    device: "iPhone",
    category: "storage",
    severity: "critical"
  },
  {
    id: 6,
    title: "Mac Won't Turn On",
    symptoms: ["Black screen when pressing power", "Chime but no display", "Apple logo appears then shuts off", "Stuck on loading bar"],
    solutions: [
      { step: "Check power connection", detail: "Ensure MagSafe/USB-C is firmly connected. Try a different outlet and cable." },
      { step: "Force restart", detail: "Hold power button for 10 seconds. Release, wait 5 seconds, press again." },
      { step: "Reset SMC (Intel Macs)", detail: "Shut down. Hold Shift+Control+Option+Power for 10 seconds. Release all, press power." },
      { step: "Reset NVRAM", detail: "Restart and immediately hold Option+Command+P+R for 20 seconds." },
      { step: "Boot to Safe Mode", detail: "Apple Silicon: Hold power until 'Loading startup options' > select disk > hold Shift > Continue in Safe Mode." },
      { step: "Boot to Recovery", detail: "Apple Silicon: Hold power button until recovery options appear. Run Disk Utility > First Aid." },
      { step: "Reinstall macOS", detail: "In Recovery Mode > Reinstall macOS. Does NOT erase data." },
      { step: "Apple Diagnostics", detail: "Restart and hold D key. Runs hardware diagnostics to identify failing components." }
    ],
    device: "Mac",
    category: "hardware",
    severity: "critical"
  },
  {
    id: 7,
    title: "Face ID Not Working",
    symptoms: ["'Face ID not available'", "Fails to recognize face", "Requires passcode every time", "Setup fails"],
    solutions: [
      { step: "Clean TrueDepth camera", detail: "Wipe the notch/Dynamic Island area with a soft cloth. Oil and debris block sensors." },
      { step: "Remove screen protector", detail: "Thick or misaligned protectors can block the IR sensor. Test without it." },
      { step: "Check Face ID settings", detail: "Settings > Face ID & Passcode. Ensure 'iPhone Unlock' and relevant features are enabled." },
      { step: "Reset Face ID", detail: "Settings > Face ID & Passcode > Reset Face ID > Set Up Face ID again." },
      { step: "Set up Alternate Appearance", detail: "Settings > Face ID & Passcode > Set Up an Alternate Appearance. Useful for glasses/masks." },
      { step: "Restart iPhone", detail: "Face ID requires a restart after 48 hours without unlock or 5 failed attempts." },
      { step: "Check for water damage", detail: "Face ID sensors are sensitive. If phone was submerged, let it dry completely for 24h." }
    ],
    device: "iPhone",
    category: "hardware",
    severity: "moderate"
  },
  {
    id: 8,
    title: "iCloud Sync Not Working",
    symptoms: ["Photos not syncing between devices", "Notes missing on one device", "Contacts out of date", "iCloud Drive files not updating"],
    solutions: [
      { step: "Check iCloud status", detail: "Visit apple.com/support/systemstatus to see if iCloud services are down." },
      { step: "Check storage", detail: "Settings > Apple ID > iCloud. If storage is full, sync stops. Upgrade or free space." },
      { step: "Sign out and back in", detail: "Settings > Apple ID > Sign Out (keep data on device) > Sign back in." },
      { step: "Toggle specific sync off/on", detail: "Settings > Apple ID > iCloud > Show All > toggle off the problem service, wait, toggle on." },
      { step: "Check network", detail: "iCloud needs internet. Ensure Wi-Fi or cellular is working. Try different network." },
      { step: "Force sync", detail: "Open the specific app (Photos, Notes) and pull down to refresh. Wait for upload to complete." },
      { step: "Check date and time", detail: "Settings > General > Date & Time > Set Automatically. Wrong time breaks sync certificates." }
    ],
    device: "All Apple devices",
    category: "software",
    severity: "moderate"
  },
  {
    id: 9,
    title: "No Sound from iPhone Speaker",
    symptoms: ["No ringer sound", "No media audio from speaker", "Calls work but nothing else", "Only works with headphones"],
    solutions: [
      { step: "Check Silent Mode switch", detail: "The physical switch on the left side. If orange is visible, silent mode is ON. Flip it." },
      { step: "Check volume", detail: "Press Volume Up. Check Settings > Sounds & Haptics > Ringer volume slider." },
      { step: "Check Do Not Disturb", detail: "Open Control Center. If moon/Focus icon is active, disable it." },
      { step: "Clean speaker grills", detail: "Use a soft brush to remove lint from bottom speakers. Compressed air (gentle) helps." },
      { step: "Check Bluetooth", detail: "Audio might be routing to a Bluetooth device. Settings > Bluetooth > disconnect or turn off." },
      { step: "Restart iPhone", detail: "Hold Side + Volume Down, slide to power off, turn back on." },
      { step: "Check for headphone mode stuck", detail: "Plug in and remove headphones several times. Clean Lightning/USB-C port with toothpick." }
    ],
    device: "iPhone",
    category: "audio",
    severity: "moderate"
  },
  {
    id: 10,
    title: "App Keeps Crashing",
    symptoms: ["App closes immediately on launch", "App freezes then crashes", "Specific feature causes crash", "Crash happens after update"],
    solutions: [
      { step: "Force close and reopen", detail: "Swipe up from bottom, hold, swipe up on the app card. Reopen from home screen." },
      { step: "Update the app", detail: "App Store > your profile > scroll down > Update next to the app." },
      { step: "Restart iPhone", detail: "A restart clears memory and temporary files that may cause crashes." },
      { step: "Delete and reinstall", detail: "Long-press app > Remove App > Delete. Reinstall from App Store." },
      { step: "Check iOS compatibility", detail: "Some apps need newer iOS. Settings > General > Software Update." },
      { step: "Free up storage", detail: "Apps crash when storage is critically low. Need at least 1GB free." },
      { step: "Contact developer", detail: "App Store > app page > Ratings & Reviews or developer website for known issues." }
    ],
    device: "iPhone / iPad",
    category: "software",
    severity: "minor"
  },
];

const CATEGORY_META: Record<string, { label: string; color: string; bg: string }> = {
  performance: { label: "Performance", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  connectivity: { label: "Connectivity", color: "text-blue-400", bg: "bg-blue-500/10" },
  battery: { label: "Battery", color: "text-green-400", bg: "bg-green-500/10" },
  display: { label: "Display", color: "text-purple-400", bg: "bg-purple-500/10" },
  audio: { label: "Audio", color: "text-orange-400", bg: "bg-orange-500/10" },
  storage: { label: "Storage", color: "text-red-400", bg: "bg-red-500/10" },
  software: { label: "Software", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  hardware: { label: "Hardware", color: "text-pink-400", bg: "bg-pink-500/10" },
};

const SEVERITY_META: Record<string, { label: string; color: string }> = {
  minor: { label: "Minor", color: "text-green-400" },
  moderate: { label: "Moderate", color: "text-yellow-400" },
  critical: { label: "Critical", color: "text-red-400" },
};

export default function Troubleshooting() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = filter === "all" ? PROBLEMS : PROBLEMS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-transparent" />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Fix It Yourself</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Troubleshooting</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Step-by-step solutions for the most common Apple device problems. 
            No Genius Bar appointment needed.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 px-4 border-y border-border/30 sticky top-[44px] z-20 bg-background/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              filter === "all" ? "bg-red-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
            }`}
          >
            All ({PROBLEMS.length})
          </button>
          {Object.entries(CATEGORY_META).map(([key, meta]) => {
            const count = PROBLEMS.filter(p => p.category === key).length;
            if (count === 0) return null;
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === key ? "bg-red-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
                }`}
              >
                {meta.label} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Problems */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-3">
          {filtered.map(problem => {
            const isExpanded = expandedId === problem.id;
            const catMeta = CATEGORY_META[problem.category];
            const sevMeta = SEVERITY_META[problem.severity];
            return (
              <div
                key={problem.id}
                className="rounded-xl border border-border/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden cursor-pointer"
                onClick={() => setExpandedId(isExpanded ? null : problem.id)}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${catMeta.bg} ${catMeta.color}`}>
                          {catMeta.label}
                        </span>
                        <span className={`text-[10px] ${sevMeta.color}`}>{sevMeta.label}</span>
                        <span className="text-[10px] text-muted-foreground">{problem.device}</span>
                      </div>
                      <h3 className="text-lg font-bold mt-1">{problem.title}</h3>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {problem.symptoms.map((s, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <svg className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-border/20 pt-4">
                    <h4 className="text-sm font-semibold mb-3 text-red-400">Solutions (try in order)</h4>
                    <ol className="space-y-3">
                      {problem.solutions.map((sol, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-mono flex-shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <div>
                            <p className="text-sm font-medium">{sol.step}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{sol.detail}</p>
                          </div>
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

      {/* Emergency Section */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Still Not Fixed?</h2>
          <p className="text-muted-foreground mb-6">If none of the above solutions work, try these escalation paths.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-sm mb-2">Apple Support Chat</h3>
              <p className="text-xs text-muted-foreground">support.apple.com — 24/7 chat with Apple advisors. Free for hardware issues under warranty.</p>
            </div>
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-sm mb-2">Genius Bar</h3>
              <p className="text-xs text-muted-foreground">Book at apple.com/retail. In-person diagnostics and repairs. Bring your Apple ID password.</p>
            </div>
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-sm mb-2">Mail-In Repair</h3>
              <p className="text-xs text-muted-foreground">support.apple.com/repair. Ship your device to Apple. Usually 3-5 business days turnaround.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
