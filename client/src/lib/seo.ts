/* =============================================================
   SEO engine — per-route <title>, meta description, canonical,
   Open Graph + Twitter tags, and scroll-reset on navigation.
   Driven by ROUTES; unknown paths fall back to DEFAULT.
   ============================================================= */

import { useEffect } from "react";
import { useLocation } from "wouter";

const SITE = "Everything Apple";
const BASE = "https://everything-apple.vercel.app";

interface Meta { title: string; description: string; }

const DEFAULT: Meta = {
  title: "Everything Apple — Apple History, the Device Archive, Sideloading & Jailbreak",
  description: "Everything Apple in one place. The complete history of every Apple device, the Apple Graveyard of discontinued products, and the best iOS sideloading and jailbreak guides — for Apple nostalgia lovers.",
};

const ROUTES: Record<string, Meta> = {
  "/": DEFAULT,
  "/wwdc-2026": { title: "WWDC 2026 — Full Coverage", description: "Everything announced at Apple's WWDC 2026 keynote: Siri AI, iOS 27, macOS Golden Gate, watchOS 12 and more." },
  "/siri-ai": { title: "The New Siri AI", description: "A deep dive into Apple's all-new AI-powered Siri: capabilities, availability, privacy, and how it works across your devices." },
  "/ios-27": { title: "iOS 27 — Features & Release", description: "Everything new in iOS 27: redesigned interface, features, supported devices, and the release timeline." },
  "/macos-golden-gate": { title: "macOS Golden Gate", description: "A complete look at macOS Golden Gate — new features, design changes, and Mac compatibility." },
  "/apple-intelligence": { title: "Apple Intelligence", description: "How Apple Intelligence brings on-device AI, Writing Tools, and Private Cloud Compute to iPhone, iPad and Mac." },
  "/watchos-12": { title: "watchOS 12", description: "What's new in watchOS 12 — features, health tools, and supported Apple Watch models." },
  "/iphones": { title: "iPhones — The Full Lineup", description: "Compare every current iPhone: specs, cameras, chips, displays, and prices." },
  "/iphone-timeline": { title: "iPhone History — Every iPhone, 2007 to Today", description: "A complete visual encyclopedia of every iPhone ever made, from the 2007 original to the latest, with full specs." },
  "/watch-history": { title: "Apple Watch History — Every Model", description: "Every Apple Watch from the 2015 original through the latest Series and Ultra, with specs and highlights." },
  "/ipod-history": { title: "iPod History — Every iPod, 2001 to 2019", description: "The complete iPod story, from the original scroll-wheel iPod to the final iPod touch." },
  "/compare": { title: "Compare iPhones", description: "Side-by-side iPhone comparisons across chips, cameras, displays, battery and price." },
  "/apple-silicon": { title: "Apple Silicon — M-Series Chips", description: "Apple Silicon explained: the M-series chips powering Mac, iPad, and beyond." },
  "/gallery": { title: "Photo Gallery", description: "Every iPhone, Apple Watch and iPod ever made, plus WWDC 2026, Siri AI and more — in one photo gallery." },
  "/sideloading": { title: "Sideloading Hub — Tools, Apps & Signing Status", description: "The hub for everything sideloading on iOS: AltStore, SideStore, LiveContainer, legit app downloads, live Apple signing status, and the latest releases." },
  "/jailbreak": { title: "Jailbreak Hub — What Works in 2026", description: "Current iOS jailbreak status and the tools that still work: palera1n, Dopamine, TrollStore, and how jailbreaking differs from sideloading." },
  "/parental-controls": { title: "Parental Controls Guide", description: "Set up Screen Time, Communication Safety, and family controls on iPhone and iPad." },
  "/community": { title: "Apple Reddit Community", description: "The best Apple, jailbreak and sideloading communities on Reddit, in one place." },
  "/vision-pro": { title: "Apple Vision Pro", description: "Apple Vision Pro spatial computing: features, apps, and what visionOS can do." },
  "/ipados": { title: "iPadOS", description: "What's new in iPadOS — multitasking, Apple Pencil, and supported iPads." },
  "/best-apps": { title: "Best Apps 2026", description: "Curated picks for the best iPhone, iPad and Mac apps right now." },
  "/rumors": { title: "Apple Rumors & Leaks", description: "Upcoming Apple products tracked from reliable sources and supply-chain leaks." },
  "/apple-vs-android": { title: "Apple vs Android", description: "An honest, feature-by-feature comparison of iPhone and Android, with verdicts." },
  "/buying-guide": { title: "iPhone Buying Guide", description: "Which iPhone should you buy? A clear guide by budget, size and needs." },
  "/benchmarks": { title: "Apple Silicon Benchmarks", description: "Real-world performance benchmarks for Apple's A-series and M-series chips." },
  "/photography": { title: "iPhone Photography", description: "Get pro results from iPhone cameras: modes, tips, and editing." },
  "/health-fitness": { title: "Health & Fitness on Apple", description: "Apple Watch and iPhone health features, workouts, and Fitness+." },
  "/gaming": { title: "Gaming on Apple", description: "Apple Arcade, console-class titles, controllers and emulation on iOS and Mac." },
  "/smart-home": { title: "Apple Smart Home", description: "HomeKit, the Home app, Matter, and building an Apple-powered smart home." },
  "/apple-services": { title: "Apple Services", description: "Apple Music, TV+, Arcade, Fitness+, iCloud+ and Apple One explained." },
  "/apple-history": { title: "Apple History — 1976 to Today", description: "The complete history of Apple, from the garage-built Apple-1 in 1976 to today's lineup." },
  "/blog": { title: "Apple News, Sideloading & Jailbreak", description: "The latest Apple news plus sideloading and jailbreak updates, refreshed daily — with deep dives on WWDC, the new Siri and iOS." },
  "/news": { title: "Apple News, Sideloading & Jailbreak", description: "The latest Apple news plus sideloading and jailbreak updates, refreshed daily — with deep dives on WWDC, the new Siri and iOS." },
  "/devices": { title: "The Apple Device Archive — Every Model Ever Made", description: "Browse every iPhone, iPod and Apple Watch ever made in one carousel — real photos, full specs, and the story of each generation." },
  "/apple-graveyard": { title: "The Apple Graveyard — Every Discontinued Apple Product", description: "A memorial to every dead Apple product and feature: the Newton, iPod, Power Mac G4 Cube, 3D Touch, the headphone jack, and more." },
  "/graveyard": { title: "The Apple Graveyard — Every Discontinued Apple Product", description: "A memorial to every dead Apple product and feature: the Newton, iPod, Power Mac G4 Cube, 3D Touch, the headphone jack, and more." },
  "/tips-and-tricks": { title: "Apple Tips & Tricks", description: "Hidden features and power-user tips for iPhone, iPad and Mac." },
  "/privacy-security": { title: "Apple Privacy & Security", description: "Protect your data and lock down your Apple devices." },
  "/troubleshooting": { title: "Apple Troubleshooting", description: "Fix common iPhone, iPad and Mac problems fast." },
  "/accessories": { title: "Best Apple Accessories", description: "Cases, chargers, MagSafe and must-have accessories for your Apple gear." },
};

function upsertMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: unknown) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function useSEO() {
  const [location] = useLocation();
  useEffect(() => {
    const meta = ROUTES[location] ?? DEFAULT;
    const fullTitle = meta.title.includes(SITE) ? meta.title : `${meta.title} — ${SITE}`;
    document.title = fullTitle;

    upsertMeta('meta[name="description"]', "name", "description", meta.description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", meta.description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", BASE + location);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", meta.description);
    upsertCanonical(BASE + location);

    // BreadcrumbList structured data (Home › Page)
    const pageName = meta.title.split(" — ")[0];
    const crumbs =
      location === "/"
        ? [{ name: "Home", item: BASE + "/" }]
        : [
            { name: "Home", item: BASE + "/" },
            { name: pageName, item: BASE + location },
          ];
    upsertJsonLd("ld-breadcrumb", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: c.item,
      })),
    });

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);
}
