/*
 * SearchOverlay — Everything Apple
 * Design: iOS 27 Glassmorphism full-screen search
 * Features: Real-time filtering across all 13 pages + iPhone models + jailbreak tools
 * No emojis, Apple.com aesthetic
 * Built by Cory Hepler
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "wouter";
import { Search, X, ChevronRight } from "lucide-react";

// ── Search index — every page, section, and iPhone model ─────────
const SEARCH_INDEX = [
  // WWDC 2026
  { title: "WWDC 2026 — Full Coverage", desc: "Everything announced at Apple's Worldwide Developers Conference 2026", href: "/wwdc-2026", category: "WWDC 2026", keywords: ["wwdc", "2026", "keynote", "tim cook", "announcements"] },
  { title: "Siri AI — The New Siri", desc: "Conversational intelligence, memory, dedicated app, and on-device processing", href: "/siri-ai", category: "Siri AI", keywords: ["siri", "ai", "artificial intelligence", "conversational", "new siri", "siri 2026"] },
  { title: "Parental Controls — iOS 27", desc: "Screen time schedules, communication safety, content filters, and family sharing", href: "/parental-controls", category: "Parental Controls", keywords: ["parental controls", "screen time", "kids", "family", "safety", "communication"] },
  { title: "iOS 27 — Liquid Glass", desc: "The biggest visual redesign since iOS 7. Liquid Glass UI across every surface.", href: "/ios-27", category: "iOS 27", keywords: ["ios 27", "liquid glass", "ios", "update", "redesign", "iphone update"] },
  { title: "macOS Golden Gate", desc: "Apple's new Mac operating system with Siri AI and Liquid Glass design", href: "/macos-golden-gate", category: "macOS", keywords: ["macos", "golden gate", "mac", "desktop", "macos 16"] },
  { title: "Apple Intelligence", desc: "Writing tools, image generation, priority notifications, and Private Cloud Compute", href: "/apple-intelligence", category: "Apple Intelligence", keywords: ["apple intelligence", "ai", "writing tools", "image generation", "private cloud"] },
  { title: "watchOS 12 — Apple Watch for Kids", desc: "New Apple Watch for Kids mode, health features, and Siri integration", href: "/watchos-12", category: "watchOS 12", keywords: ["watchos", "apple watch", "kids", "watch", "watchos 12"] },
  { title: "Apple Silicon — M4 Chip Family", desc: "M4, M4 Pro, M4 Max, M4 Ultra — the most powerful chips Apple has ever made", href: "/apple-silicon", category: "Apple Silicon", keywords: ["apple silicon", "m4", "chip", "processor", "m1", "m2", "m3", "neural engine"] },

  // iPhones
  { title: "iPhone 17 Pro Max", desc: "6.9-inch display, A19 Pro chip, 48MP camera system, titanium design", href: "/iphones", category: "iPhones", keywords: ["iphone 17 pro max", "iphone 17", "pro max", "a19 pro"] },
  { title: "iPhone 17 Pro", desc: "6.3-inch display, A19 Pro chip, 48MP camera, titanium", href: "/iphones", category: "iPhones", keywords: ["iphone 17 pro", "iphone 17", "a19 pro"] },
  { title: "iPhone 17", desc: "6.1-inch display, A19 chip, aluminum design, starting at $799", href: "/iphones", category: "iPhones", keywords: ["iphone 17", "a19", "standard iphone"] },
  { title: "iPhone Air", desc: "The thinnest iPhone ever at 5.5mm. 6.6-inch display, A18 chip.", href: "/iphones", category: "iPhones", keywords: ["iphone air", "thin iphone", "5.5mm", "a18"] },
  { title: "iPhone 16 Pro Max", desc: "6.9-inch display, A18 Pro chip, 5x optical zoom, titanium", href: "/iphones", category: "iPhones", keywords: ["iphone 16 pro max", "iphone 16", "a18 pro"] },
  { title: "iPhone 16 Pro", desc: "6.3-inch display, A18 Pro chip, Camera Control button", href: "/iphones", category: "iPhones", keywords: ["iphone 16 pro", "camera control", "a18 pro"] },
  { title: "iPhone 16", desc: "6.1-inch display, A18 chip, Action button, starting at $799", href: "/iphones", category: "iPhones", keywords: ["iphone 16", "a18", "action button"] },
  { title: "iPhone 16 Plus", desc: "6.7-inch display, A18 chip, longer battery life", href: "/iphones", category: "iPhones", keywords: ["iphone 16 plus", "a18", "plus"] },
  { title: "iPhone 15 Pro Max", desc: "6.7-inch display, A17 Pro chip, titanium, 5x zoom", href: "/iphones", category: "iPhones", keywords: ["iphone 15 pro max", "iphone 15", "a17 pro", "titanium"] },
  { title: "iPhone 15 Pro", desc: "6.1-inch display, A17 Pro chip, titanium frame, USB-C", href: "/iphones", category: "iPhones", keywords: ["iphone 15 pro", "a17 pro", "usb-c"] },
  { title: "iPhone 15", desc: "6.1-inch display, A16 chip, Dynamic Island, USB-C", href: "/iphones", category: "iPhones", keywords: ["iphone 15", "a16", "dynamic island", "usb-c"] },
  { title: "iPhone 15 Plus", desc: "6.7-inch display, A16 chip, Dynamic Island", href: "/iphones", category: "iPhones", keywords: ["iphone 15 plus", "a16"] },
  { title: "iPhone 14 Pro Max", desc: "6.7-inch display, A16 chip, Dynamic Island, Always-On display", href: "/iphones", category: "iPhones", keywords: ["iphone 14 pro max", "iphone 14", "dynamic island", "always-on"] },
  { title: "iPhone 14 Pro", desc: "6.1-inch display, A16 chip, Dynamic Island, 48MP camera", href: "/iphones", category: "iPhones", keywords: ["iphone 14 pro", "dynamic island", "48mp"] },
  { title: "iPhone 14", desc: "6.1-inch display, A15 chip, Crash Detection, Emergency SOS via satellite", href: "/iphones", category: "iPhones", keywords: ["iphone 14", "a15", "crash detection", "satellite"] },
  { title: "iPhone 14 Plus", desc: "6.7-inch display, A15 chip, longest battery life", href: "/iphones", category: "iPhones", keywords: ["iphone 14 plus", "a15"] },
  { title: "iPhone 13 Pro Max", desc: "6.7-inch display, A15 chip, ProMotion 120Hz, 3x zoom", href: "/iphones", category: "iPhones", keywords: ["iphone 13 pro max", "iphone 13", "promotion", "120hz"] },
  { title: "iPhone 13 Pro", desc: "6.1-inch display, A15 chip, ProMotion, macro photography", href: "/iphones", category: "iPhones", keywords: ["iphone 13 pro", "macro", "promotion"] },
  { title: "iPhone 13", desc: "6.1-inch display, A15 chip, smaller notch, Cinematic mode", href: "/iphones", category: "iPhones", keywords: ["iphone 13", "cinematic mode", "a15"] },
  { title: "iPhone 13 mini", desc: "5.4-inch display, A15 chip, compact design", href: "/iphones", category: "iPhones", keywords: ["iphone 13 mini", "mini", "compact"] },
  { title: "iPhone 12 Pro Max", desc: "6.7-inch display, A14 chip, LiDAR scanner, 5G", href: "/iphones", category: "iPhones", keywords: ["iphone 12 pro max", "iphone 12", "lidar", "5g"] },
  { title: "iPhone 12 Pro", desc: "6.1-inch display, A14 chip, LiDAR, ProRAW photography", href: "/iphones", category: "iPhones", keywords: ["iphone 12 pro", "lidar", "proraw"] },
  { title: "iPhone 12", desc: "6.1-inch display, A14 chip, 5G, flat-edge design", href: "/iphones", category: "iPhones", keywords: ["iphone 12", "5g", "flat edge", "a14"] },
  { title: "iPhone 12 mini", desc: "5.4-inch display, A14 chip, 5G, smallest 5G iPhone", href: "/iphones", category: "iPhones", keywords: ["iphone 12 mini", "5g mini"] },
  { title: "iPhone 11 Pro Max", desc: "6.5-inch display, A13 chip, triple camera system, Night mode", href: "/iphones", category: "iPhones", keywords: ["iphone 11 pro max", "iphone 11", "triple camera", "night mode"] },
  { title: "iPhone 11 Pro", desc: "5.8-inch display, A13 chip, triple camera, Deep Fusion", href: "/iphones", category: "iPhones", keywords: ["iphone 11 pro", "deep fusion", "triple camera"] },
  { title: "iPhone 11", desc: "6.1-inch display, A13 chip, dual camera, Night mode", href: "/iphones", category: "iPhones", keywords: ["iphone 11", "a13", "dual camera"] },

  // Jailbreak
  { title: "palera1n — checkm8 Jailbreak", desc: "Semi-tethered checkm8 jailbreak for A8–A11 devices on iOS 15 and later", href: "/jailbreak", category: "Jailbreak", keywords: ["jailbreak", "palera1n", "checkm8", "a11", "semi-tethered"] },
  { title: "Dopamine — Rootless Jailbreak", desc: "Rootless jailbreak by opa334 supporting up to iOS 16.6.1 (no iOS 17/18/26)", href: "/jailbreak", category: "Jailbreak", keywords: ["dopamine", "rootless", "ios 16", "opa334"] },
  { title: "Jailbreak iOS 16 — checkra1n", desc: "checkra1n supports iOS 12–14.8.1 on A7–A11 devices", href: "/jailbreak", category: "Jailbreak", keywords: ["checkra1n", "jailbreak ios 16", "a11", "bootrom"] },
  { title: "Jailbreak iOS 15 — unc0ver", desc: "unc0ver supports iOS 11–14.8 on all devices", href: "/jailbreak", category: "Jailbreak", keywords: ["unc0ver", "jailbreak ios 15", "ios 15 jailbreak"] },
  { title: "Sideload Apps — AltStore", desc: "AltStore lets you sideload apps without jailbreak on any iPhone", href: "/sideloading", category: "Sideload", keywords: ["altstore", "sideload", "sideloading", "alt store"] },
  { title: "Sideload Apps — Sideloadly", desc: "Sideloadly is a free tool to install IPA files on iPhone and iPad", href: "/sideloading", category: "Sideload", keywords: ["sideloadly", "ipa", "sideload", "install ipa"] },
  { title: "iOS Compatibility Checker", desc: "Check if your iPhone and iOS version can be jailbroken", href: "/jailbreak", category: "Jailbreak", keywords: ["jailbreak check", "can i jailbreak", "compatible", "jailbreak checker"] },
  { title: "Sideloading Guide — Complete", desc: "Everything you need to know about sideloading apps on iOS in 2026", href: "/sideloading", category: "Sideload", keywords: ["sideloading guide", "sideload ios", "trollstore", "sidestore"] },

  // Device history
  { title: "iPhone History — Every iPhone", desc: "Every iPhone ever made, from the 2007 original to today, with full specs", href: "/iphone-timeline", category: "History", keywords: ["iphone history", "every iphone", "timeline", "2007", "original iphone", "old iphones"] },
  { title: "Apple Watch History", desc: "Every Apple Watch from the 2015 original to the latest Series and Ultra", href: "/watch-history", category: "History", keywords: ["apple watch history", "watch", "series", "ultra", "watch timeline", "watch se"] },
  { title: "iPod History", desc: "Every iPod from the 2001 scroll-wheel original to the final iPod touch", href: "/ipod-history", category: "History", keywords: ["ipod", "ipod history", "classic", "nano", "shuffle", "ipod touch", "ipod timeline"] },

  // Sideloading tools
  { title: "LiveContainer — Unlimited Apps", desc: "Run unlimited sideloaded apps in one container, bypassing the 3-app limit", href: "/sideloading", category: "Sideload", keywords: ["livecontainer", "unlimited apps", "3 app limit", "container"] },
  { title: "SideStore — No-Computer AltStore", desc: "Refresh sideloaded apps on-device with no always-on computer", href: "/sideloading", category: "Sideload", keywords: ["sidestore", "altstore fork", "no computer", "vpn refresh"] },
  { title: "Feather — On-Device IPA Signer", desc: "Modern open-source IPA signer with iOS 26 support — an eSign replacement", href: "/sideloading", category: "Sideload", keywords: ["feather", "ipa signer", "esign", "ksign", "on-device signer"] },
  { title: "Scarlet & FlekStore", desc: "On-device app stores that install IPAs without a computer", href: "/sideloading", category: "Sideload", keywords: ["scarlet", "flekstore", "on-device store", "ipa store"] },
  { title: "TrollStore — Permanent Installs", desc: "Permanent, signing-free IPA installs on iOS 14.0 through 17.0", href: "/sideloading", category: "Sideload", keywords: ["trollstore", "permanent", "coretrust", "ios 17", "no refresh"] },
  { title: "Apple Signing Status", desc: "Check which iOS versions Apple is currently signing before you restore", href: "/sideloading", category: "Sideload", keywords: ["signing status", "is ios signed", "downgrade", "restore", "ipsw", "blobs"] },

  // Community
  { title: "r/apple — Apple Community", desc: "The largest Apple community on Reddit with 3.2M members", href: "/community", category: "Community", keywords: ["reddit", "r/apple", "apple community", "apple reddit"] },
  { title: "r/jailbreak — Jailbreak Community", desc: "Jailbreak news, releases, and support — 600K members", href: "/community", category: "Community", keywords: ["reddit", "r/jailbreak", "jailbreak reddit", "jailbreak community"] },
  { title: "r/iphone — iPhone Community", desc: "iPhone tips, photos, and discussion — 1.8M members", href: "/community", category: "Community", keywords: ["reddit", "r/iphone", "iphone reddit", "iphone community"] },

  // Gallery
  { title: "Photo Gallery — WWDC 2026", desc: "170+ real photos from WWDC 2026, every iPhone, Siri AI, and more", href: "/gallery", category: "Gallery", keywords: ["gallery", "photos", "images", "wwdc photos", "iphone photos"] },
];

type SearchResult = typeof SEARCH_INDEX[0];

function scoreResult(item: SearchResult, query: string): number {
  const q = query.toLowerCase().trim();
  if (!q) return 0;
  const titleLower = item.title.toLowerCase();
  const descLower = item.desc.toLowerCase();
  let score = 0;
  if (titleLower.startsWith(q)) score += 100;
  else if (titleLower.includes(q)) score += 60;
  if (descLower.includes(q)) score += 20;
  for (const kw of item.keywords) {
    if (kw.startsWith(q)) score += 40;
    else if (kw.includes(q)) score += 15;
  }
  return score;
}

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const search = useCallback((q: string) => {
    if (!q.trim()) {
      setResults([]);
      return;
    }
    const scored = SEARCH_INDEX
      .map((item) => ({ item, score: scoreResult(item, q) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(({ item }) => item);
    setResults(scored);
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    search(query);
  }, [query, search]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && results[activeIndex]) {
        window.location.href = results[activeIndex].href;
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, results, activeIndex, onClose]);

  if (!isOpen) return null;

  const QUICK_LINKS = [
    { label: "WWDC 2026", href: "/wwdc-2026" },
    { label: "Siri AI", href: "/siri-ai" },
    { label: "Sideloading", href: "/sideloading" },
    { label: "Jailbreak", href: "/jailbreak" },
    { label: "iPhone History", href: "/iphone-timeline" },
    { label: "Watch History", href: "/watch-history" },
    { label: "iPhones", href: "/iphones" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "80px",
        paddingLeft: "16px",
        paddingRight: "16px",
        animation: "fadeIn 0.15s ease both",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "680px",
          background: "var(--glass-bg-strong)",
          backdropFilter: "blur(40px) saturate(200%)",
          WebkitBackdropFilter: "blur(40px) saturate(200%)",
          border: "1px solid var(--glass-border)",
          borderRadius: "18px",
          boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
          overflow: "hidden",
          animation: "scaleIn 0.2s cubic-bezier(0.23, 1, 0.32, 1) both",
        }}
      >
        {/* Search input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 20px",
            borderBottom: "1px solid var(--glass-border-subtle)",
            gap: "12px",
          }}
        >
          <Search size={18} style={{ color: "var(--muted-foreground)", flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            aria-label="Search Everything Apple"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            inputMode="search"
            enterKeyHint="go"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search iPhones, WWDC topics, jailbreak tools..."
            style={{
              flex: 1,
              background: "none",
              border: "none",
              outline: "none",
              fontSize: "17px",
              fontWeight: 400,
              letterSpacing: "-0.022em",
              color: "var(--foreground)",
              fontFamily: "inherit",
            }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{
                background: "var(--muted)",
                border: "none",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
                color: "var(--muted-foreground)",
              }}
            >
              <X size={12} />
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              background: "var(--muted)",
              border: "none",
              borderRadius: "6px",
              padding: "4px 8px",
              fontSize: "12px",
              color: "var(--muted-foreground)",
              cursor: "pointer",
              fontFamily: "inherit",
              flexShrink: 0,
            }}
          >
            Esc
          </button>
        </div>

        {/* Results */}
        <div style={{ maxHeight: "480px", overflowY: "auto" }}>
          {results.length > 0 ? (
            <div style={{ padding: "8px 0" }}>
              {results.map((result, i) => (
                <Link key={`${result.href}-${i}`} href={result.href}>
                  <div
                    onClick={onClose}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 20px",
                      cursor: "pointer",
                      background: i === activeIndex ? "var(--glass-border-subtle)" : "transparent",
                      transition: "background 0.1s ease",
                      gap: "12px",
                    }}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                        <span
                          style={{
                            fontSize: "10px",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "var(--apple-blue)",
                            flexShrink: 0,
                          }}
                        >
                          {result.category}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: 500,
                          letterSpacing: "-0.02em",
                          color: "var(--foreground)",
                          margin: 0,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {result.title}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "var(--muted-foreground)",
                          margin: "2px 0 0",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {result.desc}
                      </p>
                    </div>
                    <ChevronRight size={14} style={{ color: "var(--muted-foreground)", flexShrink: 0 }} />
                  </div>
                </Link>
              ))}
            </div>
          ) : query.trim() ? (
            <div style={{ padding: "40px 20px", textAlign: "center" }}>
              <p style={{ fontSize: "17px", fontWeight: 500, color: "var(--foreground)", margin: "0 0 8px" }}>
                No results for &ldquo;{query}&rdquo;
              </p>
              <p style={{ fontSize: "14px", color: "var(--muted-foreground)", margin: 0 }}>
                Try searching for an iPhone model, iOS version, or WWDC topic.
              </p>
            </div>
          ) : (
            <div style={{ padding: "20px" }}>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--muted-foreground)",
                  marginBottom: "12px",
                }}
              >
                Quick Links
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {QUICK_LINKS.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span
                      onClick={onClose}
                      style={{
                        display: "inline-block",
                        padding: "8px 16px",
                        background: "var(--glass-bg)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid var(--glass-border-subtle)",
                        borderRadius: "980px",
                        fontSize: "14px",
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                        color: "var(--foreground)",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--apple-blue)";
                        (e.currentTarget as HTMLElement).style.color = "#fff";
                        (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "var(--glass-bg)";
                        (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--glass-border-subtle)";
                      }}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div
          style={{
            padding: "10px 20px",
            borderTop: "1px solid var(--glass-border-subtle)",
            display: "flex",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>
            <kbd style={{ fontFamily: "inherit", background: "var(--muted)", borderRadius: "4px", padding: "1px 5px", fontSize: "10px" }}>
              &uarr;&darr;
            </kbd>{" "}
            navigate
          </span>
          <span style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>
            <kbd style={{ fontFamily: "inherit", background: "var(--muted)", borderRadius: "4px", padding: "1px 5px", fontSize: "10px" }}>
              Enter
            </kbd>{" "}
            open
          </span>
          <span style={{ fontSize: "11px", color: "var(--muted-foreground)" }}>
            <kbd style={{ fontFamily: "inherit", background: "var(--muted)", borderRadius: "4px", padding: "1px 5px", fontSize: "10px" }}>
              Esc
            </kbd>{" "}
            close
          </span>
          <span style={{ marginLeft: "auto", fontSize: "11px", color: "var(--muted-foreground)" }}>
            {SEARCH_INDEX.length} items indexed
          </span>
        </div>
      </div>
    </div>
  );
}
