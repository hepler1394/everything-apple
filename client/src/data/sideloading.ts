/* =============================================================
   Sideloading + Jailbreak knowledge base (static, curated)
   Live data (signing status, reddit releases, blog) lives in
   /public/data/sideloading-feed.json and is refreshed on a schedule.
   Last hand-reviewed: 2026-06-13.
   ============================================================= */

export interface Tool {
  name: string;
  tagline: string;
  desc: string;
  computer: "On-device" | "Needs a PC/Mac" | "EU only";
  ios: string;
  status: "Active" | "Discontinued" | "Legacy";
  url: string;
  open?: boolean; // open-source
  icon?: string; // official project artwork
  accent?: string;
}

/* Core sideloading installers / signers */
export const sideloadTools: Tool[] = [
  {
    name: "AltStore",
    tagline: "The original no-jailbreak app store",
    desc: "Installs and auto-refreshes IPAs using your free Apple ID. Needs AltServer running on a computer on the same network to refresh every 7 days.",
    computer: "Needs a PC/Mac", ios: "iOS 14 – 26", status: "Active", url: "https://altstore.io", open: true,
    icon: "https://altstore.io/images/webclip.png", accent: "#4c7dff",
  },
  {
    name: "AltStore PAL",
    tagline: "Apple-approved alternative marketplace (EU)",
    desc: "The first Apple-sanctioned third-party app marketplace, available to users in the EU. No 7-day refresh and no computer required.",
    computer: "EU only", ios: "iOS 17.4 – 26", status: "Active", url: "https://altstore.io", open: true,
    icon: "https://altstore.io/images/webclip.png", accent: "#4c7dff",
  },
  {
    name: "SideStore",
    tagline: "AltStore without an always-on computer",
    desc: "A fork of AltStore that refreshes apps on-device over a local VPN, so you only need a computer for the one-time setup.",
    computer: "On-device", ios: "iOS 15 – 26", status: "Active", url: "https://sidestore.io", open: true,
    icon: "https://sidestore.io/apple-touch-icon.0a9d800f.png", accent: "#7a5cff",
  },
  {
    name: "LiveContainer",
    tagline: "Run unlimited apps in a container",
    desc: "Loads IPAs inside a single host app instead of installing them, sidestepping the 3-app free-certificate limit. The standout sideloading tool of 2025–26.",
    computer: "On-device", ios: "iOS 15 – 26+", status: "Active", url: "https://github.com/khanhduytran0/LiveContainer", open: true,
    icon: "https://raw.githubusercontent.com/LiveContainer/LiveContainer/HEAD/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon1024.png", accent: "#ff9f0a",
  },
  {
    name: "Sideloadly",
    tagline: "Simple desktop IPA installer",
    desc: "A free Windows/Mac app that installs IPAs over USB with your Apple ID. Great for first-time setup of AltStore, SideStore, or LiveContainer.",
    computer: "Needs a PC/Mac", ios: "iOS 7 – 26", status: "Active", url: "https://sideloadly.io",
    icon: "https://sideloadly.io/favicon.ico", accent: "#1f8fff",
  },
  {
    name: "Feather",
    tagline: "Modern on-device signer",
    desc: "Open-source IPA signer built for iOS 18+ with strong iOS 26 support. Manages certificates and installs apps directly from your phone.",
    computer: "On-device", ios: "iOS 16 – 26", status: "Active", url: "https://github.com/khcrysalis/Feather", open: true,
    icon: "https://raw.githubusercontent.com/khcrysalis/Feather/HEAD/Feather/Resources/Assets.xcassets/AppIcon.appiconset/feather.png", accent: "#8e7cff",
  },
  {
    name: "Scarlet",
    tagline: "On-device store, no computer",
    desc: "Installs IPAs entirely on-device after a one-time certificate setup. Note: its catalog includes tweaked apps — stick to apps you're licensed to use.",
    computer: "On-device", ios: "iOS 15 – 26", status: "Active", url: "https://usescarletapp.com",
    icon: "https://usescarletapp.com/wp-content/uploads/2023/05/cropped-icon-192x192.png", accent: "#ff375f",
  },
  {
    name: "FlekStore",
    tagline: "Web-based store + IPA signer",
    desc: "A third-party app store that also signs your own IPAs with a personal developer certificate, no PC required. Catalog includes tweaked apps — use responsibly.",
    computer: "On-device", ios: "iOS 14 – 26", status: "Active", url: "https://flekstore.com",
    icon: "https://flekstore.com/indexPage/favicon.ico", accent: "#34c759",
  },
  {
    name: "TrollStore",
    tagline: "Permanent installs, no refresh — legacy only",
    desc: "Exploited CoreTrust to install IPAs permanently with no signing. Apple patched the bug in iOS 17.0.1, so it only works on iOS 14.0 – 17.0.",
    computer: "On-device", ios: "iOS 14.0 – 17.0", status: "Legacy", url: "https://github.com/opa334/TrollStore", open: true,
    icon: "https://github.com/opa334.png", accent: "#ff9f0a",
  },
  {
    name: "eSign",
    tagline: "Discontinued — use Feather instead",
    desc: "Once-popular on-device signer, discontinued in April 2025. Listed here because old guides still reference it; Feather and KSign are the modern replacements.",
    computer: "On-device", ios: "iOS 13 – 18", status: "Discontinued", url: "https://github.com/khcrysalis/Feather",
    icon: "https://esign-ios.app/wp-content/uploads/2025/06/cropped-Esign-180x180.webp", accent: "#2779f6",
  },
];

/* Jailbreak tools (separate from sideloading) */
export const jailbreakTools: Tool[] = [
  {
    name: "palera1n",
    tagline: "checkm8 jailbreak for older devices",
    desc: "Semi-tethered jailbreak built on the unpatchable checkm8 bootrom exploit. Covers A8–A11 devices (iPhone 5s–X) on iOS/iPadOS 15 and later.",
    computer: "Needs a PC/Mac", ios: "iOS 15+ (A8–A11)", status: "Active", url: "https://palera.in", open: true,
    icon: "https://raw.githubusercontent.com/palera1n/loader/main/Loader/Resources/Assets.xcassets/AppIcon.appiconset/palera1nnightly.png", accent: "#ff6b4a",
  },
  {
    name: "Dopamine",
    tagline: "Rootless jailbreak",
    desc: "A modern rootless jailbreak by opa334 for arm64e devices. Supports up to iOS 16.x — it does not support iOS 17, 18, or 26.",
    computer: "On-device", ios: "iOS 15.0 – 16.6.1", status: "Active", url: "https://github.com/opa334/Dopamine", open: true,
    icon: "https://raw.githubusercontent.com/opa334/Dopamine/2.x/Application/Dopamine/Assets.xcassets/AppIcon.appiconset/Icon-64%403x.png", accent: "#19b59b",
  },
  {
    name: "unc0ver",
    tagline: "Classic semi-untethered jailbreak",
    desc: "Long-running jailbreak covering iOS 11 through 14.8. Largely historical now but still used on older firmware.",
    computer: "On-device", ios: "iOS 11 – 14.8", status: "Legacy", url: "https://unc0ver.dev", open: true,
    icon: "https://raw.githubusercontent.com/pwn20wndstuff/Undecimus/master/Undecimus/Assets.xcassets/AppIcon.appiconset/ItunesArtwork%402x.png", accent: "#4bc48a",
  },
  {
    name: "checkra1n",
    tagline: "The original checkm8 jailbreak",
    desc: "Hardware-exploit jailbreak for A7–A11 devices up to iOS 14.x. Superseded by palera1n for newer iOS versions.",
    computer: "Needs a PC/Mac", ios: "iOS 12 – 14.x", status: "Legacy", url: "https://checkra.in",
    icon: "https://www.theiphonewiki.com/w/images/f/f4/Checkra1n-logo.png", accent: "#ffffff",
  },
];

export interface AppEntry {
  name: string;
  dev: string;
  desc: string;
  category: "Emulator" | "Utility" | "Tools" | "Media";
  url: string;       // official site or GitHub releases (downloadable IPA)
  icon?: string;
}

/* Legitimate, open-source apps you can sideload — official releases only.
   No pirated or cracked software. */
export const legitApps: AppEntry[] = [
  { name: "Delta", dev: "Riley Testut", category: "Emulator", desc: "All-in-one retro emulator: NES, SNES, N64, GBA, GBC, DS and more. The flagship AltStore app.", url: "https://github.com/rileytestut/Delta/releases", icon: "https://raw.githubusercontent.com/rileytestut/Delta/HEAD/Resources/Icons.xcassets/Modern/ModernIcon.appiconset/Icon1024.png" },
  { name: "DolphiniOS", dev: "OatmealDome", category: "Emulator", desc: "GameCube and Wii emulator for iPhone and iPad. Bring your own legally-dumped games.", url: "https://dolphinios.oatmealdome.me", icon: "https://github.com/OatmealDome.png" },
  { name: "PPSSPP", dev: "Henrik Rydgård", category: "Emulator", desc: "The leading PSP emulator, open-source with official iOS IPA builds.", url: "https://github.com/hrydgard/ppsspp/releases", icon: "https://raw.githubusercontent.com/hrydgard/ppsspp/HEAD/ios/assets.xcassets/AppIcon.appiconset/icon_backfill_1024.png" },
  { name: "Provenance", dev: "Provenance Team", category: "Emulator", desc: "Multi-system emulator front-end covering dozens of retro consoles.", url: "https://provenance-emu.com", icon: "https://github.com/Provenance-Emu.png" },
  { name: "UTM", dev: "utmapp", category: "Utility", desc: "Run full virtual machines — Windows, Linux, even classic macOS — on your iPhone or iPad.", url: "https://github.com/utmapp/UTM/releases", icon: "https://raw.githubusercontent.com/utmapp/UTM/HEAD/Platform/Assets.xcassets/AppIcon.appiconset/icon_512pt%402x.png" },
  { name: "PojavLauncher", dev: "PojavLauncherTeam", category: "Utility", desc: "Launch Minecraft: Java Edition on iOS with your own Mojang/Microsoft account.", url: "https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases", icon: "https://raw.githubusercontent.com/PojavLauncherTeam/PojavLauncher_iOS/HEAD/Natives/Assets.xcassets/AppIcon-Light.appiconset/AppIcon-Light_1024x1024.png" },
  { name: "iTorrent", dev: "XITRIX", category: "Utility", desc: "A native, open-source torrent client for iOS with background downloading.", url: "https://github.com/XITRIX/iTorrent/releases", icon: "https://github.com/XITRIX.png" },
  { name: "Aidoku", dev: "Aidoku", category: "Media", desc: "A free, open-source manga reader with a clean, ad-free interface.", url: "https://aidoku.app", icon: "https://raw.githubusercontent.com/Aidoku/Aidoku/HEAD/Shared/Assets.xcassets/AppIcon.appiconset/180.png" },
  { name: "LiveContainer", dev: "khanhduytran0", category: "Tools", desc: "The container app itself — run other sideloaded apps inside it without the 3-app limit.", url: "https://github.com/khanhduytran0/LiveContainer/releases", icon: "https://raw.githubusercontent.com/LiveContainer/LiveContainer/HEAD/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon1024.png" },
  { name: "Feather", dev: "khcrysalis", category: "Tools", desc: "On-device IPA signer and app manager — sideload other apps straight from your phone.", url: "https://github.com/khcrysalis/Feather/releases", icon: "https://raw.githubusercontent.com/khcrysalis/Feather/HEAD/Feather/Resources/Assets.xcassets/AppIcon.appiconset/feather.png" },
  { name: "SideStore", dev: "SideStore Team", category: "Tools", desc: "The no-computer AltStore fork; install it once and refresh apps on-device.", url: "https://github.com/SideStore/SideStore/releases", icon: "https://sidestore.io/apple-touch-icon.0a9d800f.png" },
];

export interface SourceEntry {
  name: string;
  desc: string;
  sourceUrl: string; // the AltStore/SideStore source JSON URL
}

/* AltStore / SideStore sources you can add. "Add" buttons deep-link via altstore://
   These are well-known, legitimate community sources. */
export const altstoreSources: SourceEntry[] = [
  { name: "AltStore Complete", desc: "The default source — Delta, Clip, and the latest AltStore releases.", sourceUrl: "https://apps.altstore.io" },
  { name: "SideStore Community", desc: "Community apps: PPSSPP, Delta, iDOS, Mini vMac and more.", sourceUrl: "https://community-apps.sidestore.io/sidecommunity.json" },
  { name: "OatmealDome", desc: "Official DolphiniOS distribution (GameCube/Wii emulator).", sourceUrl: "https://altstore.oatmealdome.me" },
  { name: "Provenance", desc: "The Provenance multi-emulator source.", sourceUrl: "https://provenance-emu.com/apps.json" },
  { name: "UTM", desc: "Virtual machines for iOS — run desktop operating systems.", sourceUrl: "https://alt.getutm.app" },
];

/** Build an "Add to AltStore" deep link from a source URL. */
export function altstoreAddLink(sourceUrl: string): string {
  return `altstore://source?url=${encodeURIComponent(sourceUrl)}`;
}
/** Build an "Add to SideStore" deep link from a source URL. */
export function sidestoreAddLink(sourceUrl: string): string {
  return `sidestore://source?url=${encodeURIComponent(sourceUrl)}`;
}
