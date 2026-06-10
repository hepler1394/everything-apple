import { useState } from "react";

// Apple Privacy & Security — Complete Guide
// Every privacy feature, security setting, and protection explained

interface PrivacyFeature {
  id: number;
  title: string;
  description: string;
  platform: string[];
  steps: string[];
  category: "privacy" | "security" | "data" | "tracking" | "encryption" | "identity";
  importance: "critical" | "recommended" | "optional";
}

const PRIVACY_FEATURES: PrivacyFeature[] = [
  {
    id: 1,
    title: "App Tracking Transparency",
    description: "Apps must ask permission before tracking your activity across other apps and websites.",
    platform: ["iOS", "iPadOS"],
    steps: [
      "Go to Settings > Privacy & Security > Tracking",
      "Toggle 'Allow Apps to Request to Track' on/off",
      "Review which apps have requested tracking permission",
      "Deny all: toggle off to automatically deny all future requests",
      "Per-app control: toggle individual apps on/off"
    ],
    category: "tracking",
    importance: "critical"
  },
  {
    id: 2,
    title: "Mail Privacy Protection",
    description: "Prevents email senders from knowing when you open emails or tracking your IP address.",
    platform: ["iOS", "iPadOS", "macOS"],
    steps: [
      "Open Settings > Mail > Privacy Protection",
      "Enable 'Protect Mail Activity'",
      "This hides your IP address from senders",
      "Prevents tracking pixels from loading",
      "Senders cannot see if/when you opened their email"
    ],
    category: "privacy",
    importance: "recommended"
  },
  {
    id: 3,
    title: "Advanced Data Protection for iCloud",
    description: "End-to-end encryption for almost all iCloud data including backups, photos, and notes.",
    platform: ["iOS", "iPadOS", "macOS"],
    steps: [
      "Go to Settings > Apple ID > iCloud > Advanced Data Protection",
      "Set up a recovery contact or recovery key first",
      "Enable Advanced Data Protection",
      "Now 23 data categories are end-to-end encrypted",
      "Even Apple cannot access your data",
      "Recovery key is essential — store it safely offline"
    ],
    category: "encryption",
    importance: "critical"
  },
  {
    id: 4,
    title: "Lockdown Mode",
    description: "Extreme protection for users at risk of targeted cyberattacks (journalists, activists).",
    platform: ["iOS", "iPadOS", "macOS", "watchOS"],
    steps: [
      "Go to Settings > Privacy & Security > Lockdown Mode",
      "Tap 'Turn On Lockdown Mode'",
      "Device restarts with restrictions active",
      "Messages: most attachments blocked except images",
      "Web: complex web technologies disabled",
      "FaceTime: blocked from unknown callers",
      "Wired connections: blocked when device is locked",
      "Configuration profiles: cannot be installed"
    ],
    category: "security",
    importance: "optional"
  },
  {
    id: 5,
    title: "Passkeys",
    description: "Replace passwords with cryptographic keys that cannot be phished or leaked.",
    platform: ["iOS", "iPadOS", "macOS", "Windows (via iCloud)"],
    steps: [
      "When creating an account on a supported site, choose 'Create Passkey'",
      "Authenticate with Face ID or Touch ID",
      "Passkey is stored in iCloud Keychain",
      "To sign in: tap 'Sign in with Passkey' and authenticate",
      "Cannot be phished — bound to the specific website",
      "Syncs across all Apple devices via iCloud Keychain",
      "Can share passkeys with trusted contacts"
    ],
    category: "identity",
    importance: "critical"
  },
  {
    id: 6,
    title: "Hide My Email",
    description: "Generate unique random email addresses that forward to your real inbox.",
    platform: ["iOS", "iPadOS", "macOS", "Web"],
    steps: [
      "Requires iCloud+ subscription",
      "When signing up for a service, tap 'Hide My Email'",
      "A random address like abc123@privaterelay.appleid.com is generated",
      "All emails forward to your real address",
      "Disable forwarding anytime to stop spam",
      "Create unlimited addresses for different services",
      "Works in Safari, Mail, and third-party apps"
    ],
    category: "privacy",
    importance: "recommended"
  },
  {
    id: 7,
    title: "Private Relay (iCloud+)",
    description: "Encrypts Safari traffic through two separate relays so no one can see both who you are and what you visit.",
    platform: ["iOS", "iPadOS", "macOS"],
    steps: [
      "Requires iCloud+ subscription",
      "Go to Settings > Apple ID > iCloud > Private Relay",
      "Enable Private Relay",
      "Choose IP Address Location: Maintain General Location or Use Country and Time Zone",
      "Safari traffic is now routed through two relays",
      "First relay (Apple) knows your IP but not destination",
      "Second relay (third-party) knows destination but not your IP"
    ],
    category: "privacy",
    importance: "recommended"
  },
  {
    id: 8,
    title: "Safety Check",
    description: "Quickly review and reset access you have shared with others — designed for domestic abuse situations.",
    platform: ["iOS", "iPadOS"],
    steps: [
      "Go to Settings > Privacy & Security > Safety Check",
      "Emergency Reset: immediately revokes all shared access",
      "Manage Sharing & Access: review person-by-person",
      "Shows who has access to your location, photos, etc.",
      "Resets all app permissions",
      "Signs out of iCloud on other devices",
      "Changes Apple ID password and trusted phone numbers"
    ],
    category: "security",
    importance: "critical"
  },
  {
    id: 9,
    title: "App Privacy Report",
    description: "See how often apps access your location, camera, microphone, contacts, and network activity.",
    platform: ["iOS", "iPadOS"],
    steps: [
      "Go to Settings > Privacy & Security > App Privacy Report",
      "Enable App Privacy Report",
      "After a few days, review the report",
      "See which apps accessed sensors and when",
      "See which domains apps contacted",
      "Identify apps that access location excessively",
      "Use this to decide which permissions to revoke"
    ],
    category: "data",
    importance: "recommended"
  },
  {
    id: 10,
    title: "Stolen Device Protection",
    description: "Adds extra security when iPhone is away from familiar locations — requires biometrics for sensitive actions.",
    platform: ["iOS"],
    steps: [
      "Go to Settings > Face ID & Passcode > Stolen Device Protection",
      "Enable the feature",
      "When away from home/work, sensitive actions require Face ID",
      "Cannot use passcode as fallback for critical changes",
      "1-hour security delay for changing Apple ID password",
      "1-hour delay for turning off Find My",
      "Protects against thieves who observed your passcode"
    ],
    category: "security",
    importance: "critical"
  },
  {
    id: 11,
    title: "Communication Safety",
    description: "Protects children from receiving or sending sensitive photos in Messages with on-device detection.",
    platform: ["iOS", "iPadOS", "macOS"],
    steps: [
      "Go to Settings > Screen Time > Communication Safety",
      "Enable for child accounts in Family Sharing",
      "Sensitive photos are blurred before viewing",
      "Child is warned and given resources",
      "All detection happens on-device — nothing leaves the phone",
      "Optional: notify parent when child views sensitive content",
      "Works in Messages, AirDrop, FaceTime, and Contact Posters"
    ],
    category: "privacy",
    importance: "recommended"
  },
  {
    id: 12,
    title: "Automatic Passkey Upgrades",
    description: "Safari automatically upgrades existing password-based accounts to passkeys when sites support it.",
    platform: ["iOS", "iPadOS", "macOS"],
    steps: [
      "Ensure iCloud Keychain is enabled",
      "When visiting a site that now supports passkeys",
      "Safari prompts to upgrade from password to passkey",
      "Authenticate with Face ID/Touch ID to create passkey",
      "Old password remains as backup",
      "Future logins use passkey (faster and more secure)",
      "Passkey syncs to all devices automatically"
    ],
    category: "identity",
    importance: "recommended"
  },
];

const CATEGORY_STYLES: Record<string, { label: string; color: string; bg: string }> = {
  privacy: { label: "Privacy", color: "text-blue-400", bg: "bg-blue-500/10" },
  security: { label: "Security", color: "text-red-400", bg: "bg-red-500/10" },
  data: { label: "Data Control", color: "text-green-400", bg: "bg-green-500/10" },
  tracking: { label: "Anti-Tracking", color: "text-orange-400", bg: "bg-orange-500/10" },
  encryption: { label: "Encryption", color: "text-purple-400", bg: "bg-purple-500/10" },
  identity: { label: "Identity", color: "text-cyan-400", bg: "bg-cyan-500/10" },
};

const IMPORTANCE_STYLES: Record<string, { label: string; color: string }> = {
  critical: { label: "Critical", color: "text-red-400 border-red-500/30 bg-red-500/10" },
  recommended: { label: "Recommended", color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10" },
  optional: { label: "Optional", color: "text-gray-400 border-gray-500/30 bg-gray-500/10" },
};

export default function PrivacySecurity() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = filter === "all" ? PRIVACY_FEATURES : PRIVACY_FEATURES.filter(f => f.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Your Data, Your Rules</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Privacy & Security</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Every privacy feature Apple offers — explained with step-by-step setup guides. 
            Take control of your data across all devices.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground flex-wrap">
            <span>{PRIVACY_FEATURES.length} features</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>{PRIVACY_FEATURES.filter(f => f.importance === "critical").length} critical</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>All platforms covered</span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 px-4 border-y border-border/30 sticky top-[44px] z-20 bg-background/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
            }`}
          >
            All ({PRIVACY_FEATURES.length})
          </button>
          {Object.entries(CATEGORY_STYLES).map(([key, style]) => {
            const count = PRIVACY_FEATURES.filter(f => f.category === key).length;
            return (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === key ? "bg-blue-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
                }`}
              >
                {style.label} ({count})
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
            const catStyle = CATEGORY_STYLES[feature.category];
            const impStyle = IMPORTANCE_STYLES[feature.importance];
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
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${catStyle.bg} ${catStyle.color}`}>
                          {catStyle.label}
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border ${impStyle.color}`}>
                          {impStyle.label}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mt-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {feature.platform.map(p => (
                          <span key={p} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground">
                            {p}
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
                    <h4 className="text-sm font-semibold mb-3 text-blue-400">Setup Steps</h4>
                    <ol className="space-y-2">
                      {feature.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-mono flex-shrink-0">
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

      {/* Privacy Score */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Privacy Checklist</h2>
          <p className="text-muted-foreground mb-8">Enable these critical features to maximize your privacy protection.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto text-left">
            {PRIVACY_FEATURES.filter(f => f.importance === "critical").map(f => (
              <div key={f.id} className="flex items-center gap-3 p-3 rounded-lg border border-border/20 bg-white/[0.02]">
                <div className="w-5 h-5 rounded border-2 border-red-400/50 flex-shrink-0" />
                <span className="text-sm">{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
