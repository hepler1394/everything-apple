import type { DeviceModel } from "./deviceTypes";

/* Mac history — ordered oldest → newest. Iconic milestones, specs summarized. */
export const macModels: DeviceModel[] = [
  {
    id: "macintosh-128k", name: "Macintosh 128K", year: 1984, priceLabel: "$2,495 (discontinued)",
    highlight: "The original Macintosh brought the mouse and graphical desktop to the masses.",
    specs: [
      { label: "CPU", value: "Motorola 68000 @ 8 MHz" },
      { label: "Display", value: "9-inch monochrome" },
      { label: "RAM", value: "128 KB" },
      { label: "OS", value: "System 1.0" },
    ],
    tags: ["First Mac", "68000", "GUI + mouse"],
  },
  {
    id: "macintosh-se", name: "Macintosh SE", year: 1987, priceLabel: "$2,900 (discontinued)",
    highlight: "The all-in-one compact Mac that added an internal hard drive and expansion slot.",
    specs: [
      { label: "CPU", value: "Motorola 68000 @ 8 MHz" },
      { label: "Display", value: "9-inch monochrome" },
      { label: "Storage", value: "Internal hard drive option" },
      { label: "OS", value: "System 4.0" },
    ],
    tags: ["Compact Mac", "Expansion slot", "68000"],
  },
  {
    id: "macintosh-ii", name: "Macintosh II", year: 1987, priceLabel: "$5,498 (discontinued)",
    highlight: "The first modular, color-capable Mac with six NuBus expansion slots.",
    specs: [
      { label: "CPU", value: "Motorola 68020 @ 16 MHz" },
      { label: "Display", value: "External color (up to 640×480)" },
      { label: "Expansion", value: "6 NuBus slots" },
      { label: "OS", value: "System 4.1" },
    ],
    tags: ["First color Mac", "Modular", "68020"],
  },
  {
    id: "macintosh-portable", name: "Macintosh Portable", year: 1989, priceLabel: "$6,500 (discontinued)",
    highlight: "Apple's first battery-powered Mac — a heavy but true portable with an active-matrix screen.",
    specs: [
      { label: "CPU", value: "Motorola 68000 @ 16 MHz" },
      { label: "Display", value: "9.8-inch active-matrix LCD" },
      { label: "RAM", value: "1 MB (up to 9 MB)" },
      { label: "OS", value: "System 6.0" },
    ],
    tags: ["First portable Mac", "Battery", "Active-matrix"],
  },
  {
    id: "powerbook-100", name: "PowerBook 100", year: 1991, priceLabel: "$2,300 (discontinued)",
    highlight: "Set the template for the modern laptop with a palm rest and centered trackball.",
    specs: [
      { label: "CPU", value: "Motorola 68000 @ 16 MHz" },
      { label: "Display", value: "9-inch monochrome LCD" },
      { label: "RAM", value: "2 MB (up to 8 MB)" },
      { label: "OS", value: "System 7.0" },
    ],
    tags: ["First PowerBook", "Palm rest", "Trackball"],
  },
  {
    id: "power-macintosh", name: "Power Macintosh 6100", year: 1994, priceLabel: "$1,819 (discontinued)",
    highlight: "The first Mac on PowerPC, marking Apple's transition away from the 68000 family.",
    specs: [
      { label: "CPU", value: "PowerPC 601 @ 60 MHz" },
      { label: "Display", value: "External color" },
      { label: "RAM", value: "8 MB (up to 72 MB)" },
      { label: "OS", value: "System 7.1.2" },
    ],
    tags: ["First PowerPC Mac", "601", "RISC"],
  },
  {
    id: "power-mac-g3", name: "Power Macintosh G3", year: 1997, priceLabel: "$2,000 (discontinued)",
    highlight: "Jobs's first post-return Mac — the PowerPC G3 delivered a big performance jump.",
    specs: [
      { label: "CPU", value: "PowerPC G3 @ 233 MHz" },
      { label: "Display", value: "External color" },
      { label: "RAM", value: "32 MB (up to 384 MB)" },
      { label: "OS", value: "Mac OS 8" },
    ],
    tags: ["PowerPC G3", "Beige tower", "Fast cache"],
  },
  {
    id: "imac-g3", name: "iMac G3", year: 1998, priceLabel: "$1,299 (discontinued)",
    highlight: "The translucent Bondi-blue all-in-one that saved Apple and killed the floppy drive.",
    specs: [
      { label: "CPU", value: "PowerPC G3 @ 233 MHz" },
      { label: "Display", value: "15-inch CRT" },
      { label: "Ports", value: "USB (no floppy)" },
      { label: "OS", value: "Mac OS 8.1" },
    ],
    tags: ["Bondi blue", "USB", "All-in-one"],
  },
  {
    id: "ibook", name: "iBook G3", year: 1999, priceLabel: "$1,599 (discontinued)",
    highlight: "The clamshell consumer laptop that debuted built-in Wi-Fi with AirPort.",
    specs: [
      { label: "CPU", value: "PowerPC G3 @ 300 MHz" },
      { label: "Display", value: "12.1-inch LCD" },
      { label: "Wireless", value: "AirPort Wi-Fi" },
      { label: "OS", value: "Mac OS 8.6" },
    ],
    tags: ["Clamshell", "AirPort Wi-Fi", "Consumer laptop"],
  },
  {
    id: "power-mac-g4-cube", name: "Power Mac G4 Cube", year: 2000, priceLabel: "$1,799 (discontinued)",
    highlight: "A striking 8-inch acrylic cube — fanless, silent, and now a museum piece.",
    specs: [
      { label: "CPU", value: "PowerPC G4 @ 450 MHz" },
      { label: "Form factor", value: "8-inch acrylic cube" },
      { label: "Cooling", value: "Fanless convection" },
      { label: "OS", value: "Mac OS 9" },
    ],
    tags: ["G4 Cube", "Fanless", "Design icon"],
  },
  {
    id: "imac-g4", name: "iMac G4", year: 2002, priceLabel: "$1,299 (discontinued)",
    highlight: "The 'sunflower' iMac — a flat panel floating on a chrome arm over a domed base.",
    specs: [
      { label: "CPU", value: "PowerPC G4 @ 700 MHz" },
      { label: "Display", value: "15-inch flat panel" },
      { label: "Design", value: "Adjustable chrome arm" },
      { label: "OS", value: "Mac OS X 10.1" },
    ],
    tags: ["Sunflower", "Flat panel", "G4"],
  },
  {
    id: "power-mac-g5", name: "Power Mac G5", year: 2003, priceLabel: "$1,999 (discontinued)",
    highlight: "The 64-bit aluminium tower Apple billed as the first desktop with a 64-bit chip.",
    specs: [
      { label: "CPU", value: "PowerPC G5 @ 2 GHz (64-bit)" },
      { label: "Display", value: "External" },
      { label: "RAM", value: "512 MB (up to 8 GB)" },
      { label: "OS", value: "Mac OS X 10.2" },
    ],
    tags: ["PowerPC G5", "64-bit", "Aluminium tower"],
  },
  {
    id: "mac-mini", name: "Mac mini", year: 2005, priceLabel: "$499 (discontinued)",
    highlight: "Apple's first tiny, low-cost, bring-your-own-peripherals desktop.",
    specs: [
      { label: "CPU", value: "PowerPC G4 @ 1.25 GHz" },
      { label: "Form factor", value: "6.5-inch square, 2-inch tall" },
      { label: "RAM", value: "256 MB (up to 1 GB)" },
      { label: "OS", value: "Mac OS X 10.3" },
    ],
    tags: ["First Mac mini", "BYODKM", "Compact"],
  },
  {
    id: "macbook-pro-intel", name: "MacBook Pro (Intel)", year: 2006, priceLabel: "$1,999 (discontinued)",
    highlight: "The first Intel Mac laptop, launching Apple's move off PowerPC to Intel Core.",
    specs: [
      { label: "CPU", value: "Intel Core Duo @ 1.83 GHz" },
      { label: "Display", value: "15.4-inch LCD" },
      { label: "Feature", value: "MagSafe, iSight camera" },
      { label: "OS", value: "Mac OS X 10.4" },
    ],
    tags: ["First Intel Mac", "MagSafe", "Core Duo"],
  },
  {
    id: "macbook-air-2008", name: "MacBook Air", year: 2008, priceLabel: "$1,799 (discontinued)",
    highlight: "Unveiled from a manila envelope — the world's thinnest laptop at the time.",
    specs: [
      { label: "CPU", value: "Intel Core 2 Duo @ 1.6 GHz" },
      { label: "Display", value: "13.3-inch LED" },
      { label: "Design", value: "0.16–0.76-inch tapered" },
      { label: "OS", value: "Mac OS X 10.5" },
    ],
    tags: ["First Air", "Ultra-thin", "Envelope reveal"],
  },
  {
    id: "imac-unibody-2012", name: "iMac (unibody)", year: 2012, priceLabel: "$1,299 (discontinued)",
    highlight: "The dramatically slimmed all-in-one with a laminated, edge-to-edge 5mm-thin profile.",
    specs: [
      { label: "CPU", value: "Intel Core i5 (Ivy Bridge)" },
      { label: "Display", value: "21.5 / 27-inch LCD" },
      { label: "Design", value: "5mm-thin edge" },
      { label: "OS", value: "OS X 10.8" },
    ],
    tags: ["Thin edge", "Fusion Drive", "Laminated display"],
  },
  {
    id: "macbook-pro-retina", name: "MacBook Pro (Retina)", year: 2012, priceLabel: "$2,199 (discontinued)",
    highlight: "The first Retina Mac notebook, packing a 2880×1800 display into a thinner body.",
    specs: [
      { label: "CPU", value: "Intel Core i7 (Ivy Bridge)" },
      { label: "Display", value: "15.4-inch Retina" },
      { label: "Storage", value: "Flash SSD" },
      { label: "OS", value: "OS X 10.7" },
    ],
    tags: ["First Retina Mac", "Flash storage", "Thinner"],
  },
  {
    id: "macbook-12-2015", name: "MacBook (12-inch)", year: 2015, priceLabel: "$1,299 (discontinued)",
    highlight: "The fanless, ultraportable Retina MacBook with a single USB-C port and butterfly keyboard.",
    specs: [
      { label: "CPU", value: "Intel Core M (fanless)" },
      { label: "Display", value: "12-inch Retina" },
      { label: "Ports", value: "Single USB-C" },
      { label: "OS", value: "OS X 10.10" },
    ],
    tags: ["Fanless", "USB-C", "2 lbs"],
  },
  {
    id: "imac-pro", name: "iMac Pro", year: 2017, priceLabel: "$4,999 (discontinued)",
    highlight: "A space-gray, workstation-class all-in-one built for pros with up to 18 Xeon cores.",
    specs: [
      { label: "CPU", value: "Intel Xeon W (up to 18-core)" },
      { label: "Display", value: "27-inch 5K Retina" },
      { label: "RAM", value: "Up to 128 GB ECC" },
      { label: "OS", value: "macOS 10.13" },
    ],
    tags: ["Xeon W", "Space gray", "Workstation"],
  },
  {
    id: "mac-pro-2019", name: "Mac Pro", year: 2019, priceLabel: "$5,999 (discontinued)",
    highlight: "The 'cheese grater' modular tower returned with up to 28 Xeon cores and MPX modules.",
    specs: [
      { label: "CPU", value: "Intel Xeon W (up to 28-core)" },
      { label: "Display", value: "External (Pro Display XDR)" },
      { label: "RAM", value: "Up to 1.5 TB" },
      { label: "OS", value: "macOS 10.15" },
    ],
    tags: ["Modular tower", "MPX modules", "Cheese grater"],
  },
  {
    id: "macbook-air-m1", name: "MacBook Air (M1)", year: 2020, priceLabel: "$999 (discontinued)",
    highlight: "The first Apple Silicon Mac — the fanless M1 transformed battery life and speed.",
    specs: [
      { label: "Chip", value: "Apple M1" },
      { label: "Display", value: "13.3-inch Retina" },
      { label: "Battery", value: "Up to 18 hours" },
      { label: "OS", value: "macOS 11 Big Sur" },
    ],
    tags: ["First Apple Silicon", "M1", "Fanless"],
  },
  {
    id: "mac-studio", name: "Mac Studio", year: 2022, priceLabel: "$1,999 (discontinued)",
    highlight: "A compact powerhouse desktop introducing the M1 Max and stacked M1 Ultra chips.",
    specs: [
      { label: "Chip", value: "Apple M1 Max / M1 Ultra" },
      { label: "Display", value: "External (Studio Display)" },
      { label: "Ports", value: "Thunderbolt 4, front SD/USB-C" },
      { label: "OS", value: "macOS 12 Monterey" },
    ],
    tags: ["M1 Ultra", "Compact desktop", "Pro I/O"],
  },
  {
    id: "macbook-pro-m4", name: "MacBook Pro (M4)", year: 2024, priceLabel: "$1,599", isNew: true,
    highlight: "The latest Pro line on the M4 family, with a brighter display and Apple Intelligence.",
    specs: [
      { label: "Chip", value: "Apple M4 / M4 Pro / M4 Max" },
      { label: "Display", value: "14 / 16-inch Liquid Retina XDR" },
      { label: "Battery", value: "Up to 24 hours" },
      { label: "OS", value: "macOS 15 Sequoia" },
    ],
    tags: ["M4 family", "Apple Intelligence", "XDR display"],
  },
];
