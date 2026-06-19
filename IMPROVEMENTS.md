# Everything Apple — 100 Improvements

A log of 100 improvements made to the site, grouped by area.

## SEO & discoverability
1. Per-route `<title>` tags via a centralized SEO engine (`lib/seo.ts`).
2. Per-route meta descriptions, updated on navigation.
3. Canonical `<link>` set per route to avoid duplicate-content issues.
4. Dynamic Open Graph `og:title` / `og:description` / `og:url` per route.
5. Dynamic Twitter card `twitter:title` / `twitter:description` per route.
6. `sitemap.xml` generated with all 46 routes, priorities and change frequency.
7. `robots.txt` references the sitemap for crawlers.
8. Descriptive, keyword-rich titles for every major page.
9. Structured data (JSON-LD WebSite) retained and validated in `index.html`.
10. Semantic `<main>` landmark wrapping page content.

## Progressive Web App
11. `site.webmanifest` with name, theme, display and scope.
12. Standalone display mode for an installable app experience.
13. App icon (`icon.svg`) referenced as both `any` and `maskable`.
14. `theme-color` meta (#e30b17) to tint mobile browser chrome.
15. `apple-mobile-web-app-capable` + status-bar style for iOS home-screen.
16. `apple-mobile-web-app-title` set to "Everything Apple".
17. `mobile-web-app-capable` for Android home-screen.
18. `format-detection: telephone=no` to stop spurious phone-number links.

## Accessibility
19. Skip-to-content link that appears on keyboard focus.
20. Global `:focus-visible` focus rings (keyboard users) without harming mouse UX.
21. `.sr-only` utility for screen-reader-only text.
22. `aria-label="Primary"` on the main navigation landmark.
23. `aria-current="page"` on the active nav link.
24. Descriptive `alt` text (including model + year) on device images.
25. `aria-label`s on icon-only buttons (search, theme, menu).
26. Image drag-ghosting disabled for cleaner interaction.
27. Reduced-motion media query respected for animations.
28. Sufficient tap-target sizing on nav pills and buttons.

## Performance
29. All routes lazy-loaded with `React.lazy` + `Suspense`.
30. Main app bundle cut from ~859 KB to ~106 KB.
31. Each page split into its own on-demand chunk (~47 chunks).
32. Vendor libraries split into a separate cacheable chunk.
33. UI libraries (Radix, icons) split into their own chunks.
34. `loading="lazy"` on gallery and timeline images.
35. `decoding="async"` on image-heavy views.
36. Suspense fallback reserves height to reduce layout shift.
37. Removed a dead analytics `<script>` that fired a broken request.
38. Zero build warnings; clean `tsc --noEmit`.

## Theming & design
39. Primary accent changed from Apple blue to Product RED (#E30B17).
40. 129 hardcoded blues across 21 files converted to CSS variables.
41. Introduced `--brand` / `--brand-hover` / `--brand-link` / `--brand-rgb` tokens.
42. Brighter red on dark backgrounds for legibility.
43. Added a classic **Blue** theme (the original Apple look, kept as an option).
44. Added a new **Matcha** theme (dark green + lime accent).
45. Real CSS for the **Siri** theme (purple, deep-indigo surfaces).
46. Real CSS for the **Red** theme (immersive dominant red).
47. Theme system expanded to six themes end-to-end.
48. Theme picker shows Blue and Matcha swatches.
49. Navbar accent is fully theme-driven via `--brand`.
50. Footer theme logic fixed to cover all six themes.
51. `color-mix` tints derive surfaces from the brand color.

## Navigation & toolbar
52. Toolbar links no longer clip — converted to a scrollable strip.
53. Fade-edge mask on the nav strip for a polished overflow.
54. Hidden scrollbar on the nav strip.
55. Mobile menu is theme-aware across all themes.
56. "Apple" wordmark: heavy rotating pill border replaced with a thin neon glow.
57. Rainbow glow now hugs the letters instead of a pill outline.
58. Added Apple Watch History and iPod History to the navbar.
59. Footer links added for Watch History, iPod History and the Sideloading hub.
60. Footer external links to r/jailbreak and r/sideloaded.

## Device history
61. Replaced low-res/duplicated renders with real product photos.
62. iPhone history expanded to **every iPhone**, 2007 → iPhone 16e (49 models).
63. Accurate per-model spec dataset (`data/iphoneHistory.ts`).
64. Device image manifest mapping model IDs to photos (`lib/deviceImages.ts`).
65. Graceful vector-render fallback for models without a photo.
66. New **Apple Watch History** timeline (15 models, 2015 → Series 10).
67. New **iPod History** timeline (15 models, 2001 → 2019).
68. Generic, reusable `DeviceTimeline` component powering both.
69. Device switcher (iPhone · Apple Watch · iPod) on every timeline.
70. Spec comparison tables auto-generated from each dataset.
71. Default selection picks the newest model that has a real photo.
72. PhoneRender SVG component for crisp, transparent fallbacks.

## Gallery
73. New **iPhone History** gallery category (all photographed models).
74. New **Apple Watch** gallery category.
75. New **iPod** gallery category.
76. `contain` layout + padding so transparent product shots aren't cropped.
77. Model + year shown in gallery titles and lightbox.
78. Hero photo count updates automatically from the data.

## Image quality
79. Audited all 77 device images via generated contact sheets.
80. Detected watermarks by scanning image bottom strips.
81. Removed the "CITYPNG" watermark from the Apple Watch Series 0 image.
82. Removed the watermark from the Apple Watch Series 10 image.
83. Removed the watermark from the Apple Watch Ultra 2 image.
84. Confirmed iPhone and iPod sets are watermark-free.

## Sideloading hub
85. Rebuilt Sideloading into a comprehensive hub.
86. Tools directory with 10 installers/signers and status badges.
87. Curated, legit open-source app downloads (official releases only).
88. One-tap "Add to AltStore / SideStore" source deep-links.
89. Live Apple **signing status** panel.
90. Recent releases feed from r/sideloaded, r/sideloadly, r/jailbreak.
91. Auto-updating blog section.
92. Clear legality disclaimer (no pirated/cracked apps).

## Jailbreak hub
93. Rebuilt Jailbreak as a companion hub.
94. Current iOS 26 jailbreak-status banner.
95. Sideloading-vs-jailbreaking explainer.
96. Jailbreak tools (palera1n, Dopamine, unc0ver, checkra1n) with support ranges.
97. TrollStore callout with its iOS 14–17.0 caveat.

## Automation & delivery
98. Scheduled task refreshes the feed (signing, releases, blog) every 5 days, then commits & pushes.
99. Auto-deploy pipeline: push to `main` → Vercel rebuilds and deploys.
100. This changelog documenting all of the above.

---

# 100 more (round 2)

## Search fixes & expansion
101. Defined the missing `--glass-bg-strong` token (the search panel had no background).
102. Defined the missing `--glass-border` token.
103. Aliased the legacy `--apple-blue` token to the themed `--brand` (category labels were uncolored).
104. Search overlay now renders correctly across all six themes.
105. Marked the search overlay as a labeled modal dialog (`role="dialog"`, `aria-modal`).
106. Added an `aria-label` to the search input.
107. Disabled autocomplete/autocorrect/spellcheck on the search field.
108. `inputMode="search"` + `enterKeyHint="go"` on the search field.
109. Added iPhone History to the search index.
110. Added Apple Watch History to the search index.
111. Added iPod History to the search index.
112. Added LiveContainer to search.
113. Added SideStore to search.
114. Added Feather to search.
115. Added Scarlet & FlekStore to search.
116. Added TrollStore to search.
117. Added Apple signing-status to search.
118. Corrected the palera1n search entry (checkm8, A8–A11).
119. Corrected the Dopamine search entry (rootless, ≤ iOS 16.6.1).
120. Refreshed the search quick-links (Sideloading, iPhone/Watch History).

## Deploy & security (vercel.json)
121. `X-Content-Type-Options: nosniff`.
122. `X-Frame-Options: SAMEORIGIN`.
123. `Referrer-Policy: strict-origin-when-cross-origin`.
124. `X-DNS-Prefetch-Control: on`.
125. `Permissions-Policy` locks camera, microphone and geolocation.
126. 1-year immutable cache for hashed `/assets`.
127. 1-year immutable cache for `/devices` photos.
128. Short, revalidating cache for the `/data` feed.
129. 1-day cache for sitemap, robots, manifest and icon.
130. SPA rewrite retained so deep links survive a refresh.

## SEO
131. JSON-LD `BreadcrumbList` structured data injected per route.
132. SEO title + description: Apple Vision Pro.
133. SEO title + description: iPadOS.
134. SEO title + description: Best Apps.
135. SEO title + description: Rumors & Leaks.
136. SEO title + description: Apple vs Android.
137. SEO title + description: Buying Guide.
138. SEO title + description: Benchmarks.
139. SEO title + description: iPhone Photography.
140. SEO title + description: Health & Fitness.
141. SEO title + description: Gaming.
142. SEO title + description: Smart Home.
143. SEO title + description: Apple Services.
144. SEO title + description: Apple History.
145. SEO title + description: Tips & Tricks.
146. SEO title + description: Privacy & Security.
147. SEO title + description: Troubleshooting.
148. SEO title + description: Accessories.
149. `apple-touch-icon` link for the iOS home screen.
150. `og:image:alt` for social shares.
151. `application-name` meta.
152. `msapplication-TileColor` meta.
153. `color-scheme` meta.

## Gallery lightbox & keyboard
154. Lightbox is now a labeled modal dialog.
155. Escape closes the lightbox.
156. Right-arrow advances to the next image.
157. Left-arrow goes to the previous image.
158. On-screen Previous button (labeled).
159. On-screen Next button (labeled).
160. Close button labeled for screen readers.
161. Image position counter (e.g. "12 / 77").
162. Gallery cards are keyboard-focusable (`role="button"`, `tabindex`).
163. Enter/Space opens a gallery card.
164. Per-card `aria-label`.
165. Filter buttons expose `aria-pressed`.
166. Filter buttons have descriptive `aria-label`s.
167. Result count is an `aria-live` region.
168. Gallery images decode asynchronously.

## Navigation & controls a11y
169. Hamburger button exposes `aria-expanded` and a dynamic label.
170. Decorative nav icons marked `aria-hidden`.
171. Buy CTA has a descriptive `aria-label`.
172. Device switcher marks the active tab with `aria-current`.
173. Theme picker trigger exposes `aria-haspopup` + `aria-expanded`.
174. Theme picker dropdown is a `role="menu"`.
175. Theme options are `role="menuitemradio"` with `aria-checked`.
176. Theme picker closes on Escape.
177. iPhone timeline year filters expose `aria-pressed`.
178. Watch/iPod timeline year filters expose `aria-pressed`.
179. Footer columns are a labeled navigation landmark.
180. Footer external links announce "(opens in a new tab)".

## Resilience & errors
181. Error boundary hides raw stack traces in production.
182. Friendly error copy instead of a stack dump.
183. Reload + Go Home recovery actions on the error screen.
184. `componentDidCatch` logs errors for debugging.

## Performance
185. Preconnect to the gallery image CDN (files.manuscdn.com).
186. DNS-prefetch for the same CDN.

## Motion & inclusivity
187. iPhone timeline reveals respect `prefers-reduced-motion`.
188. Watch/iPod timeline reveals respect `prefers-reduced-motion`.
189. The SVG phone render carries a `<title>` for screen readers.
190. `<noscript>` fallback message when JavaScript is disabled.

## Content & UX
191. Sideloading shows an "X of Y builds currently signed" summary.
192. Descriptive alt text (model + year) on timeline device images.
193. Improved 404 copy and recovery links (carried from round 1, refined).
194. Consistent themed surfaces via `--brand` across the new pages.

## Documentation
195. Replaced the boilerplate README with a real project README.
196. Documented the stack, structure and feature set.
197. Documented the local dev workflow and build commands.
198. Documented the 5-day auto-update feed pipeline.
199. Added a clear not-affiliated-with-Apple / no-piracy disclaimer to the README.
200. This second changelog (improvements 101–200).
