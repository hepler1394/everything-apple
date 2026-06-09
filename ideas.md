# Everything Apple — Design Brainstorm

## Selected Design Philosophy

**Design Movement:** Apple-Inspired Editorial Dark — "Cinematic Newsroom"

**Core Principles:**
1. Dark-first, high-contrast — black backgrounds with crisp white text and electric blue/silver accents, mirroring Apple's own product pages
2. Editorial hierarchy — large typographic headlines that command attention, inspired by newspaper front pages but with Apple's minimalism
3. Photography-led storytelling — real images from WWDC 2026 fill full-bleed sections; the site feels like a live event coverage hub
4. Mobile-first, thumb-friendly — all interactive elements sized for iPhone use, sticky nav, swipeable carousels

**Color Philosophy:**
- Background: near-black (#0a0a0a / oklch(0.06 0 0))
- Surface cards: dark charcoal (#1a1a1a / oklch(0.12 0 0))
- Primary accent: Apple blue (#0071e3 / oklch(0.55 0.2 260))
- Secondary accent: silver/platinum (#e8e8ed / oklch(0.92 0 0))
- Highlight: electric cyan for Siri AI sections (#00d4ff)
- Danger/jailbreak: warm amber (#ff9500)
- Text: pure white for headlines, #ebebf0 for body

**Layout Paradigm:**
- Full-bleed hero with WWDC keynote image and animated headline
- Horizontal scroll carousels for iPhone lineup
- Masonry-style news grid for WWDC announcements
- Sticky top navigation with frosted glass blur (backdrop-filter)
- Section dividers using subtle gradient lines

**Signature Elements:**
1. Frosted glass cards with subtle border glow — `backdrop-blur` + `border: 1px solid rgba(255,255,255,0.1)`
2. Apple-style section intros: massive number/label + short punchy headline
3. Animated gradient orbs in hero backgrounds (slow-moving radial gradients)

**Interaction Philosophy:**
- Hover states reveal depth: cards lift with `translateY(-4px)` + shadow
- Image galleries use smooth horizontal scroll with snap points
- Jailbreak compatibility checker uses a select dropdown with instant result reveal

**Animation:**
- Hero text fades in with staggered word-by-word reveal (framer-motion)
- Section entrance: fade-up on scroll intersection
- Card hover: 200ms ease-out lift
- Navigation: frosted glass blur intensifies on scroll

**Typography System:**
- Display/Hero: SF Pro Display equivalent → system-ui bold, 700–900 weight, tight letter-spacing (-0.02em)
- Headlines: "Instrument Serif" (Google Fonts) for editorial sections
- Body: "Inter" at 400/500 weight for readability
- Monospace: "JetBrains Mono" for jailbreak/technical sections
- Scale: 14px base, 16px mobile body, 64–96px hero headlines

---

*Selected approach: Cinematic Newsroom — dark editorial with Apple's visual language, photography-first, mobile-optimized.*
