# Everything Apple

Your #1 source for everything Apple — WWDC 2026, iOS 27, the new Siri AI, every iPhone / Apple Watch / iPod ever made, and the web's most complete sideloading & jailbreak hub.

🔗 **Live:** https://everythingapple.vercel.app
Built by Cory Hepler.

## Tech stack

- **React 19** + **TypeScript**, bundled with **Vite 7**
- **wouter** for lightweight client-side routing (all routes lazy-loaded)
- **Tailwind CSS v4** + **shadcn/ui** components
- Six built-in themes (Light, Dark, Blue, Red, Siri, Matcha) via CSS variables
- Deployed on **Vercel** — every push to `main` auto-deploys

## Project structure

```
client/
  public/
    devices/          Real product photos (iphones, apple_watches, ipods)
    data/             sideloading-feed.json (auto-updated every 5 days)
    sitemap.xml, site.webmanifest, robots.txt, icon.svg
  src/
    pages/            Page components (lazy-loaded)
    components/       Navbar, Footer, DeviceTimeline, SearchOverlay, …
    data/             iphoneHistory, watchHistory, ipodHistory, sideloading
    lib/              seo.ts, deviceImages.ts, searchIndex.ts
    contexts/         ThemeContext (6 themes)
    App.tsx           Routes + layout shell
    index.css         Design tokens + theme definitions
vercel.json           SPA rewrites, security headers, asset caching
IMPROVEMENTS.md       Changelog of improvements
```

## Key features

- **Device histories** — interactive timelines for every iPhone (2007→16e), Apple Watch (2015→Series 10) and iPod (2001→2019), with a device switcher and spec tables.
- **Sideloading hub** — tools directory, legit open-source app downloads, AltStore/SideStore source links, live Apple signing status, a Reddit releases feed, and an auto-updating blog.
- **Jailbreak hub** — current iOS jailbreak status and the tools that still work.
- **Gallery** — every device photo plus event/feature imagery, with a keyboard-navigable lightbox.
- **Search** (⌘K / Ctrl+K) across pages, models and tools.
- **SEO** — per-route titles, meta, canonical, Open Graph, Twitter cards, JSON-LD breadcrumbs, sitemap.
- **PWA** — installable with a web manifest and theme color.
- **Accessibility** — skip link, focus rings, ARIA landmarks, reduced-motion support.

## Local development

```bash
cd client
pnpm install      # or: npm install --legacy-peer-deps
pnpm dev          # start the dev server
pnpm build        # production build
pnpm check        # type-check (tsc --noEmit)
```

The production build outputs to `dist/public`.

## Auto-updating feed

`client/public/data/sideloading-feed.json` powers the signing status, Reddit releases and blog on the Sideloading page. A scheduled task refreshes it every 5 days and pushes to `main`, which redeploys on Vercel. The page fetches the JSON at runtime, so content stays current without a rebuild.

## Disclaimer

Not affiliated with Apple Inc. All product names, logos and brands are property of their respective owners. The sideloading section links only to official tools and open-source apps — no pirated or cracked software.
