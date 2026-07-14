/* Shared navigation model — the site's focus after the 2026 nostalgia rebuild:
   Apple history, the device archive, the Graveyard, sideloading & jailbreak.
   Both the modern Navbar and the ClassicNav (Aqua tab bar) read from these. */

export interface NavLink {
  href: string;
  label: string;
  isNew?: boolean;
}

/** Primary tabs — the brushed-metal Aqua tab row in the classic theme. */
export const primaryNav: NavLink[] = [
  { href: "/blog", label: "News", isNew: true },
  { href: "/iphone-timeline", label: "iPhone History" },
  { href: "/devices", label: "All Devices", isNew: true },
  { href: "/apple-graveyard", label: "Graveyard", isNew: true },
  { href: "/sideloading", label: "Sideloading" },
  { href: "/jailbreak", label: "Jailbreak" },
];

/** Secondary text links — the era-correct "Hot News · Hardware · …" sub-row. */
export const secondaryNav: NavLink[] = [
  { href: "/apple-history", label: "Apple History" },
  { href: "/iphones", label: "iPhones" },
  { href: "/watch-history", label: "Watch" },
  { href: "/ipod-history", label: "iPod" },
  { href: "/apple-silicon", label: "Apple Silicon" },
  { href: "/community", label: "Community" },
];

/** Everything, for the modern Navbar's single scrolling row. */
export const allNav: NavLink[] = [...primaryNav, ...secondaryNav];
