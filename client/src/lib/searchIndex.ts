// Search Index — comprehensive page and content index for the search overlay
// Enables fast client-side search across all pages and sections

export interface SearchEntry {
  id: string;
  title: string;
  description: string;
  path: string;
  category: string;
  keywords: string[];
  priority: number; // 1-10, higher = more important
}

export const SEARCH_INDEX: SearchEntry[] = [
  // Main Pages
  { id: "home", title: "Home", description: "Everything Apple announced at WWDC 2026 and beyond", path: "/", category: "Pages", keywords: ["home", "main", "everything", "apple"], priority: 10 },
  { id: "wwdc", title: "WWDC 2026", description: "Complete coverage of Apple's Worldwide Developers Conference", path: "/wwdc-2026", category: "Events", keywords: ["wwdc", "conference", "developers", "keynote", "2026"], priority: 9 },
  { id: "siri-ai", title: "Siri AI", description: "The new AI-powered Siri with on-device intelligence", path: "/siri-ai", category: "Features", keywords: ["siri", "ai", "artificial intelligence", "assistant", "voice"], priority: 9 },
  { id: "ios-27", title: "iOS 27", description: "All new features in iOS 27 — the biggest update yet", path: "/ios-27", category: "Software", keywords: ["ios", "27", "iphone", "update", "features"], priority: 9 },
  { id: "macos-golden-gate", title: "macOS Golden Gate", description: "macOS 17 Golden Gate — redesigned for Apple Intelligence", path: "/macos-golden-gate", category: "Software", keywords: ["macos", "golden gate", "mac", "desktop"], priority: 8 },
  { id: "watchos-12", title: "watchOS 12", description: "New health features and watch faces in watchOS 12", path: "/watchos-12", category: "Software", keywords: ["watchos", "watch", "health", "fitness"], priority: 7 },
  { id: "apple-intelligence", title: "Apple Intelligence", description: "Apple's AI platform across all devices", path: "/apple-intelligence", category: "Features", keywords: ["intelligence", "ai", "machine learning", "on-device"], priority: 9 },
  
  // Hardware
  { id: "iphones", title: "iPhones", description: "Complete iPhone lineup from iPhone 11 to iPhone 17", path: "/iphones", category: "Hardware", keywords: ["iphone", "phone", "smartphone", "buy"], priority: 8 },
  { id: "iphone-timeline", title: "iPhone History", description: "Every iPhone ever made — from 2007 to today", path: "/iphone-timeline", category: "Hardware", keywords: ["timeline", "history", "evolution", "every iphone"], priority: 7 },
  { id: "apple-silicon", title: "Apple Silicon", description: "M-series and A-series chip architecture explained", path: "/apple-silicon", category: "Hardware", keywords: ["silicon", "m1", "m2", "m3", "m4", "m5", "chip", "processor", "arm"], priority: 8 },
  { id: "compare", title: "Compare iPhones", description: "Side-by-side comparison of any two iPhones", path: "/compare", category: "Tools", keywords: ["compare", "versus", "vs", "difference", "which"], priority: 8 },
  { id: "accessories", title: "Accessories", description: "Best accessories for iPhone, iPad, Mac, and Apple Watch", path: "/accessories", category: "Guides", keywords: ["accessories", "case", "charger", "cable", "stand", "magsafe"], priority: 6 },
  
  // Guides
  { id: "parental-controls", title: "Parental Controls", description: "Set up Screen Time, content restrictions, and family sharing", path: "/parental-controls", category: "Guides", keywords: ["parental", "controls", "kids", "screen time", "family", "restrictions"], priority: 7 },
  { id: "sideloading", title: "Sideloading", description: "Install apps outside the App Store — AltStore, TrollStore, and more", path: "/sideloading", category: "Advanced", keywords: ["sideload", "altstore", "trollstore", "ipa", "install"], priority: 7 },
  { id: "jailbreak", title: "Jailbreaking", description: "Complete jailbreaking guide — tools, risks, and compatibility", path: "/jailbreak", category: "Advanced", keywords: ["jailbreak", "cydia", "tweak", "root", "exploit"], priority: 7 },
  { id: "tips-tricks", title: "Tips & Tricks", description: "Hidden features and power-user tips for every Apple device", path: "/tips-and-tricks", category: "Guides", keywords: ["tips", "tricks", "hidden", "secret", "shortcut"], priority: 7 },
  { id: "hidden-features", title: "Hidden Features", description: "Features Apple doesn't advertise but you should know about", path: "/hidden-features", category: "Guides", keywords: ["hidden", "secret", "undocumented", "easter egg"], priority: 6 },
  { id: "keyboard-shortcuts", title: "Keyboard Shortcuts", description: "Every keyboard shortcut for Mac, iPad, and iPhone", path: "/keyboard-shortcuts", category: "Reference", keywords: ["keyboard", "shortcut", "hotkey", "command", "ctrl"], priority: 6 },
  { id: "shortcuts-automation", title: "Shortcuts & Automation", description: "Build powerful automations with Apple Shortcuts", path: "/shortcuts", category: "Guides", keywords: ["shortcuts", "automation", "workflow", "siri shortcuts"], priority: 6 },
  { id: "privacy-security", title: "Privacy & Security", description: "Protect your data and secure your Apple devices", path: "/privacy-security", category: "Guides", keywords: ["privacy", "security", "password", "encryption", "vpn", "tracking"], priority: 7 },
  { id: "troubleshooting", title: "Troubleshooting", description: "Fix common problems with iPhone, iPad, Mac, and more", path: "/troubleshooting", category: "Support", keywords: ["fix", "problem", "issue", "bug", "crash", "slow", "battery"], priority: 7 },
  { id: "ecosystem", title: "Ecosystem Guide", description: "Get the most out of the Apple ecosystem across all devices", path: "/ecosystem-guide", category: "Guides", keywords: ["ecosystem", "continuity", "handoff", "airdrop", "universal"], priority: 6 },
  
  // Reference
  { id: "apple-history", title: "Apple History", description: "The complete history of Apple from 1976 to today", path: "/apple-history", category: "Reference", keywords: ["history", "timeline", "steve jobs", "1976", "founding"], priority: 6 },
  { id: "apple-services", title: "Apple Services", description: "Guide to Apple Music, TV+, Arcade, Fitness+, and more", path: "/apple-services", category: "Services", keywords: ["services", "music", "tv+", "arcade", "fitness", "icloud", "one"], priority: 6 },
  { id: "developer-tools", title: "Developer Tools", description: "Xcode, Swift, SwiftUI, and Apple developer resources", path: "/developer-tools", category: "Development", keywords: ["developer", "xcode", "swift", "swiftui", "api", "code"], priority: 5 },
  { id: "best-apps", title: "Best Apps", description: "Curated picks for the best iPhone, iPad, and Mac apps in 2026", path: "/best-apps", category: "Guides", keywords: ["apps", "best", "top", "recommended", "download"], priority: 7 },
  { id: "rumors", title: "Rumors & Leaks", description: "Upcoming Apple products tracked from reliable sources", path: "/rumors", category: "News", keywords: ["rumors", "leaks", "upcoming", "future", "next", "2027"], priority: 7 },
  { id: "apple-vs-android", title: "Apple vs Android", description: "Honest feature-by-feature comparison with verdicts", path: "/apple-vs-android", category: "Comparison", keywords: ["android", "samsung", "pixel", "versus", "switch"], priority: 7 },
  { id: "macos-deep-dive", title: "macOS Deep Dive", description: "Advanced macOS features, Terminal commands, and power-user tips", path: "/macos-deep-dive", category: "Guides", keywords: ["macos", "terminal", "advanced", "power user", "command line"], priority: 5 },
  
  // Community
  { id: "community", title: "Community", description: "Apple community discussions and Reddit highlights", path: "/community", category: "Community", keywords: ["community", "reddit", "discussion", "forum", "talk"], priority: 5 },
  { id: "gallery", title: "Gallery", description: "High-resolution Apple product images and wallpapers", path: "/gallery", category: "Media", keywords: ["gallery", "images", "photos", "wallpaper", "screenshot"], priority: 5 },
];

// Search function with fuzzy matching and scoring
export function searchContent(query: string): SearchEntry[] {
  if (!query.trim()) return [];
  
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/);
  
  const scored = SEARCH_INDEX.map(entry => {
    let score = 0;
    
    // Exact title match
    if (entry.title.toLowerCase() === q) score += 100;
    // Title contains query
    else if (entry.title.toLowerCase().includes(q)) score += 50;
    // Title starts with query
    else if (entry.title.toLowerCase().startsWith(q)) score += 60;
    
    // Description match
    if (entry.description.toLowerCase().includes(q)) score += 20;
    
    // Keyword matches
    for (const word of words) {
      for (const keyword of entry.keywords) {
        if (keyword === word) score += 30;
        else if (keyword.includes(word)) score += 15;
        else if (word.includes(keyword)) score += 10;
      }
    }
    
    // Category match
    if (entry.category.toLowerCase().includes(q)) score += 10;
    
    // Priority boost
    score += entry.priority;
    
    return { entry, score };
  });
  
  return scored
    .filter(s => s.score > 5)
    .sort((a, b) => b.score - a.score)
    .map(s => s.entry)
    .slice(0, 10);
}

// Get pages by category
export function getPagesByCategory(category: string): SearchEntry[] {
  return SEARCH_INDEX.filter(e => e.category === category);
}

// Get all categories
export function getAllCategories(): string[] {
  return Array.from(new Set(SEARCH_INDEX.map(e => e.category)));
}
