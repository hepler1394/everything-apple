/*
 * The Apple Graveyard — a catalog of discontinued and dead Apple products.
 * Every entry is a real product Apple has killed, with honest years, a
 * one-line "cause of death", and a short eulogy. Ordered loosely by birth;
 * the page re-sorts by death year at render time.
 */

export interface DeadProduct {
  id: string;
  name: string;
  category: string;
  born: number;
  died: number;
  cause: string;
  eulogy: string;
}

export const graveyard: DeadProduct[] = [
  // ── Handhelds ─────────────────────────────────────────────
  {
    id: "newton-messagepad",
    name: "Newton MessagePad",
    category: "Handheld",
    born: 1993,
    died: 1998,
    cause: "Handwriting recognition that got mocked on The Simpsons.",
    eulogy:
      "Apple's first stab at a pocket computer, years ahead of its time. Steve Jobs killed it within months of his return — but its DNA lived on in the iPhone.",
  },
  {
    id: "emate-300",
    name: "eMate 300",
    category: "Handheld",
    born: 1997,
    died: 1998,
    cause: "Newton platform axed in Jobs' 1998 cleanup.",
    eulogy:
      "A translucent green clamshell Newton built for schools — arguably the spiritual ancestor of the iBook and every education Mac since.",
  },

  // ── Consoles / oddities ───────────────────────────────────
  {
    id: "pippin",
    name: "Apple Pippin (Bandai)",
    category: "Console",
    born: 1996,
    died: 1997,
    cause: "A $599 game console nobody asked Apple to make.",
    eulogy:
      "Apple's licensed multimedia console, sold through Bandai, arrived into a market owned by Sony and Nintendo. It sold a rounding error and vanished.",
  },
  {
    id: "twentieth-anniversary-mac",
    name: "20th Anniversary Macintosh",
    category: "Mac",
    born: 1997,
    died: 1998,
    cause: "A $7,499 statement piece in a company near bankruptcy.",
    eulogy:
      "The 'TAM' was a gorgeous flat-panel concierge-delivered Mac celebrating Apple's 20th year. Beautiful, absurd, and quietly fire-saled to $1,995.",
  },

  // ── Macs ──────────────────────────────────────────────────
  {
    id: "imac-g3",
    name: "iMac G3",
    category: "Mac",
    born: 1998,
    died: 2003,
    cause: "The CRT bubble popped; flat panels took over.",
    eulogy:
      "Bondi Blue, translucent, and the machine that saved Apple. It made computers friendly, colorful, and — critically — profitable again.",
  },
  {
    id: "power-mac-g4-cube",
    name: "Power Mac G4 Cube",
    category: "Mac",
    born: 2000,
    died: 2001,
    cause: "Priced like a tower, cracked like an egg.",
    eulogy:
      "An eight-inch acrylic sculpture of a computer. Too expensive, plagued by hairline cracks, and now enshrined in the Museum of Modern Art.",
  },
  {
    id: "xserve",
    name: "Xserve",
    category: "Mac",
    born: 2002,
    died: 2011,
    cause: "Apple decided it didn't want to be in the server room.",
    eulogy:
      "Apple's 1U rack server for the enterprise. Discontinued with a curt 'buy a Mac Pro or Mac mini instead' — Apple's polite goodbye to the data center.",
  },
  {
    id: "macbook-12",
    name: "MacBook (12-inch)",
    category: "Mac",
    born: 2015,
    died: 2019,
    cause: "One USB-C port, a bad keyboard, and no more.",
    eulogy:
      "The thinnest, lightest Mac ever — fanless, gold, and gorgeous. Undone by a single port and the butterfly keyboard it debuted.",
  },

  // ── iPods ─────────────────────────────────────────────────
  {
    id: "ipod-classic",
    name: "iPod Classic",
    category: "iPod",
    born: 2001,
    died: 2014,
    cause: "The spinning hard drive parts dried up.",
    eulogy:
      "The scroll-wheel original that put 1,000 songs in your pocket. Apple couldn't source the tiny hard drive anymore, so the icon simply retired.",
  },
  {
    id: "ipod-mini",
    name: "iPod Mini",
    category: "iPod",
    born: 2004,
    died: 2005,
    cause: "Cannibalized by its own successor, the Nano.",
    eulogy:
      "The anodized-aluminum darling that made the iPod a fashion object. Wildly popular — and killed at its peak to make room for the Nano.",
  },
  {
    id: "ipod-shuffle",
    name: "iPod Shuffle",
    category: "iPod",
    born: 2005,
    died: 2017,
    cause: "Screenless music lost to streaming and phones.",
    eulogy:
      "A gumstick with no screen and a philosophy: press play and trust the shuffle. The clip-on second gen was the purest gadget Apple ever shipped.",
  },
  {
    id: "ipod-nano",
    name: "iPod Nano",
    category: "iPod",
    born: 2005,
    died: 2017,
    cause: "The phone in your pocket already played music.",
    eulogy:
      "Seven generations of reinvention, from tall-and-thin to a square touchscreen watch-wannabe. The most restless product Apple ever made.",
  },
  {
    id: "ipod-touch",
    name: "iPod Touch",
    category: "iPod",
    born: 2007,
    died: 2022,
    cause: "An iPhone without the phone finally ran out of reasons.",
    eulogy:
      "The last iPod standing — a gateway drug to iOS for a generation of kids. Its 2022 discontinuation officially ended the iPod era.",
  },
  {
    id: "ipod-hifi",
    name: "iPod Hi-Fi",
    category: "iPod",
    born: 2006,
    died: 2007,
    cause: "A $349 boombox in a world of cheap docks.",
    eulogy:
      "Apple's brief, expensive foray into home speakers. It sounded great and sold poorly — a rehearsal for the HomePod a decade early.",
  },
  {
    id: "ipod-socks",
    name: "iPod Socks",
    category: "Accessory",
    born: 2004,
    died: 2012,
    cause: "They were, in fact, just socks.",
    eulogy:
      "Six colorful knit sleeves for your iPod, unveiled on stage by Steve Jobs with a completely straight face. Peak mid-2000s Apple whimsy.",
  },

  // ── Connectors ────────────────────────────────────────────
  {
    id: "30-pin-dock",
    name: "30-Pin Dock Connector",
    category: "Connector",
    born: 2003,
    died: 2012,
    cause: "Replaced overnight by the reversible Lightning.",
    eulogy:
      "The wide connector that anchored a decade of docks, speakers, and alarm clocks. Its death instantly obsoleted a billion dollars of accessories.",
  },
  {
    id: "firewire",
    name: "FireWire",
    category: "Connector",
    born: 1999,
    died: 2012,
    cause: "USB and Thunderbolt ate its lunch.",
    eulogy:
      "Apple's high-speed 400/800 port, beloved by video editors everywhere. Faster than USB of its day, but it lost the standards war anyway.",
  },
  {
    id: "lightning",
    name: "Lightning Connector",
    category: "Connector",
    born: 2012,
    died: 2024,
    cause: "The EU made USB-C the law.",
    eulogy:
      "The slim reversible port that defined iPhone for twelve years. Phased off the iPhone in 2024 when regulators mandated USB-C across Europe.",
  },

  // ── Features ──────────────────────────────────────────────
  {
    id: "headphone-jack",
    name: "The Headphone Jack (iPhone)",
    category: "Feature",
    born: 2007,
    died: 2016,
    cause: '"Courage." (And AirPods to sell.)',
    eulogy:
      "The humble 3.5mm jack, removed from the iPhone 7 amid audible groans. Apple called it courage; everyone else called it a dongle purchase.",
  },
  {
    id: "3d-touch",
    name: "3D Touch",
    category: "Feature",
    born: 2015,
    died: 2019,
    cause: "Nobody remembered how hard to press.",
    eulogy:
      "A pressure-sensitive screen that popped open menus and previews. Clever, invisible, and undiscoverable — quietly swapped for the simpler Haptic Touch.",
  },
  {
    id: "force-touch",
    name: "Force Touch",
    category: "Feature",
    born: 2015,
    died: 2019,
    cause: "Folded into the trackpad; retired on watches.",
    eulogy:
      "The press-harder gesture that arrived on the Apple Watch and Mac trackpads. Handy on the Mac, forgotten on the wrist, gone by watchOS 7.",
  },
  {
    id: "touch-bar",
    name: "Touch Bar",
    category: "Feature",
    born: 2016,
    died: 2023,
    cause: "A touchscreen where your function keys used to be.",
    eulogy:
      "A slim OLED strip that replaced physical F-keys on the MacBook Pro. Pros wanted their Escape key back — and in 2023, they got it.",
  },
  {
    id: "butterfly-keyboard",
    name: "Butterfly Keyboard",
    category: "Feature",
    born: 2015,
    died: 2019,
    cause: "A single crumb could kill a key.",
    eulogy:
      "The ultra-thin mechanism that made MacBooks slimmer and typing miserable. It spawned a repair program and a class-action suit before Apple went back to scissors.",
  },
  {
    id: "rosetta-1",
    name: "Rosetta (PowerPC)",
    category: "Software",
    born: 2006,
    died: 2011,
    cause: "PowerPC apps stopped mattering.",
    eulogy:
      "The invisible translator that let PowerPC apps run on the first Intel Macs. It did its job so well nobody noticed — then Lion pulled the plug.",
  },

  // ── Software ──────────────────────────────────────────────
  {
    id: "itunes",
    name: "iTunes",
    category: "Software",
    born: 2001,
    died: 2019,
    cause: "Bloated into a monster, then split into three.",
    eulogy:
      "The jukebox that became a store, a phone syncer, a movie shop, and a running joke about scope creep. Broken up into Music, TV, and Podcasts.",
  },
  {
    id: "quicktime-windows",
    name: "QuickTime for Windows",
    category: "Software",
    born: 1992,
    died: 2016,
    cause: "Security holes and no more patches.",
    eulogy:
      "Apple's media player on the PC, quietly abandoned. When the security warnings came with no fixes in sight, everyone was told to just uninstall it.",
  },
  {
    id: "dashboard",
    name: "Dashboard",
    category: "Software",
    born: 2005,
    died: 2019,
    cause: "Widgets moved to Notification Center.",
    eulogy:
      "The F12 layer of flippy little widgets — weather, stocks, a calculator. Charming and largely ignored, it faded out over a decade of macOS releases.",
  },
  {
    id: "iphoto",
    name: "iPhoto",
    category: "Software",
    born: 2002,
    died: 2015,
    cause: "Replaced by the new Photos app.",
    eulogy:
      "The app that organized a generation of digital photos and shoeboxed them into Events. Retired when Photos unified the Mac and iOS libraries.",
  },
  {
    id: "aperture",
    name: "Aperture",
    category: "Software",
    born: 2005,
    died: 2015,
    cause: "Apple ceded pro photo editing to Adobe.",
    eulogy:
      "Apple's serious tool for professional photographers, a real Lightroom rival. Its discontinuation pushed a loyal pro community straight into Adobe's arms.",
  },
  {
    id: "iweb",
    name: "iWeb",
    category: "Software",
    born: 2006,
    died: 2012,
    cause: "Died with MobileMe hosting.",
    eulogy:
      "The drag-and-drop website builder in iLife. When MobileMe shut down and took its hosting along, iWeb had nowhere left to publish.",
  },
  {
    id: "bento",
    name: "Bento",
    category: "Software",
    born: 2008,
    died: 2013,
    cause: "FileMaker pulled the plug on the consumer version.",
    eulogy:
      "A friendly personal database from Apple's FileMaker subsidiary. Approachable and well-loved, then discontinued with a terse migration notice.",
  },

  // ── Services ──────────────────────────────────────────────
  {
    id: "mobileme",
    name: "MobileMe / .Mac",
    category: "Service",
    born: 2000,
    died: 2012,
    cause: "'It's not up to Apple's standards.' — Steve Jobs.",
    eulogy:
      "Apple's paid cloud suite of mail, sync, and web hosting, infamous for a botched launch. Reincarnated, free and reliable, as iCloud.",
  },
  {
    id: "ping",
    name: "Ping",
    category: "Service",
    born: 2010,
    died: 2012,
    cause: "A music social network no one joined.",
    eulogy:
      "Apple's attempt at a social network bolted onto iTunes. Spam-ridden, friendless, and gone in two years — Apple's clearest social-media misfire.",
  },

  // ── Accessories / hardware ────────────────────────────────
  {
    id: "isight",
    name: "iSight",
    category: "Accessory",
    born: 2003,
    died: 2008,
    cause: "Webcams got built into every Mac.",
    eulogy:
      "A polished aluminum FireWire webcam for iChat video calls. It was so good Apple absorbed it — the name lived on inside every Mac and iPhone camera.",
  },
  {
    id: "airport",
    name: "AirPort / Time Capsule",
    category: "Accessory",
    born: 1999,
    died: 2018,
    cause: "Apple lost interest in making routers.",
    eulogy:
      "The friendly Wi-Fi base stations — including the Time Capsule that backed up your Mac wirelessly. Apple exited networking and left the mesh to others.",
  },
  {
    id: "homepod-original",
    name: "HomePod (original)",
    category: "Accessory",
    born: 2018,
    died: 2021,
    cause: "Great sound, bad price, worse Siri.",
    eulogy:
      "A $349 audiophile smart speaker outsold by cheaper rivals. Discontinued in favor of the mini — then quietly resurrected two years later.",
  },

  // ── iPhone lineage ────────────────────────────────────────
  {
    id: "iphone-mini",
    name: "iPhone mini",
    category: "iPhone",
    born: 2020,
    died: 2022,
    cause: "Small phones don't sell anymore.",
    eulogy:
      "The 12 mini and 13 mini were the last truly compact flagships — beloved by a vocal few and bought by too few. The Plus took its slot in the lineup.",
  },
];
