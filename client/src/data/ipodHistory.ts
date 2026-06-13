import type { DeviceModel } from "./deviceTypes";

/* iPod history — ordered oldest → newest. Specs summarized. */
export const ipodModels: DeviceModel[] = [
  {
    id: "ipod-classic-1", name: "iPod (1st gen)", year: 2001, priceLabel: "$399 (discontinued)",
    highlight: "‘1,000 songs in your pocket.’ The original, with its mechanical scroll wheel and FireWire.",
    specs: [
      { label: "Storage", value: "5 GB (~1,000 songs)" },
      { label: "Display", value: "2-inch monochrome" },
      { label: "Battery", value: "Up to 10 hours" },
      { label: "Controls", value: "Mechanical scroll wheel" },
    ],
    tags: ["FireWire", "Mac only"],
  },
  {
    id: "ipod-classic-2", name: "iPod (2nd gen)", year: 2002, priceLabel: "$399 (discontinued)",
    highlight: "Doubled the capacity, added a touch-sensitive wheel and Windows support.",
    specs: [
      { label: "Storage", value: "10 / 20 GB" },
      { label: "Display", value: "2-inch monochrome" },
      { label: "Battery", value: "Up to 10 hours" },
      { label: "Controls", value: "Touch wheel" },
    ],
    tags: ["Windows support", "Touch wheel"],
  },
  {
    id: "ipod-classic-3", name: "iPod (3rd gen)", year: 2003, priceLabel: "$299 (discontinued)",
    highlight: "Slimmer body with the new Dock Connector and touch-sensitive control buttons.",
    specs: [
      { label: "Storage", value: "10 – 40 GB" },
      { label: "Display", value: "2-inch monochrome" },
      { label: "Battery", value: "Up to 8 hours" },
      { label: "Controls", value: "Touch buttons + wheel" },
    ],
    tags: ["Dock Connector", "iTunes for Windows"],
  },
  {
    id: "ipod-mini", name: "iPod mini", year: 2004, priceLabel: "$249 (discontinued)",
    highlight: "The anodized-aluminium mini that introduced the iconic Click Wheel.",
    specs: [
      { label: "Storage", value: "4 GB (Microdrive)" },
      { label: "Display", value: "1.67-inch monochrome" },
      { label: "Battery", value: "Up to 8 hours" },
      { label: "Controls", value: "Click Wheel" },
    ],
    tags: ["Click Wheel", "5 colors", "Aluminium"],
  },
  {
    id: "ipod-classic-4", name: "iPod (4th gen)", year: 2004, priceLabel: "$299 (discontinued)",
    highlight: "Brought the Click Wheel to the full-size iPod; the Photo edition added a color screen.",
    specs: [
      { label: "Storage", value: "20 / 40 GB" },
      { label: "Display", value: "2-inch (color on Photo)" },
      { label: "Battery", value: "Up to 12 hours" },
      { label: "Controls", value: "Click Wheel" },
    ],
    tags: ["Click Wheel", "iPod Photo", "Album art"],
  },
  {
    id: "ipod-classic-5", name: "iPod (5th gen)", year: 2005, priceLabel: "$299 (discontinued)",
    highlight: "The ‘Video’ iPod — watch movies and TV shows on a 2.5-inch color screen.",
    specs: [
      { label: "Storage", value: "30 / 60 / 80 GB" },
      { label: "Display", value: "2.5-inch color" },
      { label: "Battery", value: "Up to 14 hours audio" },
      { label: "Controls", value: "Click Wheel" },
    ],
    tags: ["Video playback", "Thinner body"],
  },
  {
    id: "ipod-nano-1", name: "iPod nano (1st gen)", year: 2005, priceLabel: "$199 (discontinued)",
    highlight: "A flash-based, pencil-thin replacement for the mini that stunned at launch.",
    specs: [
      { label: "Storage", value: "2 / 4 GB flash" },
      { label: "Display", value: "1.5-inch color" },
      { label: "Battery", value: "Up to 14 hours" },
      { label: "Controls", value: "Click Wheel" },
    ],
    tags: ["Flash storage", "Ultra-thin"],
  },
  {
    id: "ipod-shuffle-1", name: "iPod shuffle (1st gen)", year: 2005, priceLabel: "$99 (discontinued)",
    highlight: "The gum-stick, screen-free shuffle — music, randomized, in the smallest body yet.",
    specs: [
      { label: "Storage", value: "512 MB / 1 GB" },
      { label: "Display", value: "None" },
      { label: "Battery", value: "Up to 12 hours" },
      { label: "Controls", value: "Button ring" },
    ],
    tags: ["No screen", "USB stick design"],
  },
  {
    id: "ipod-classic-6", name: "iPod classic (6th gen)", year: 2007, priceLabel: "$249 (discontinued)",
    highlight: "The aluminium ‘classic’ — up to 160 GB and a battery that lasted for days of music.",
    specs: [
      { label: "Storage", value: "80 / 160 GB" },
      { label: "Display", value: "2.5-inch color" },
      { label: "Battery", value: "Up to 40 hours audio" },
      { label: "Controls", value: "Click Wheel" },
    ],
    tags: ["Up to 160 GB", "Cover Flow", "Metal body"],
  },
  {
    id: "ipod-nano-3", name: "iPod nano (3rd gen)", year: 2007, priceLabel: "$149 (discontinued)",
    highlight: "The stubby ‘fatty’ nano added video playback and Cover Flow.",
    specs: [
      { label: "Storage", value: "4 / 8 GB" },
      { label: "Display", value: "2-inch color" },
      { label: "Battery", value: "Up to 24 hours audio" },
      { label: "Controls", value: "Click Wheel" },
    ],
    tags: ["Video playback", "Cover Flow"],
  },
  {
    id: "ipod-touch-1", name: "iPod touch (1st gen)", year: 2007, priceLabel: "$299 (discontinued)",
    highlight: "An iPhone without the phone — multi-touch, Wi-Fi, and Safari in your pocket.",
    specs: [
      { label: "Storage", value: "8 / 16 / 32 GB" },
      { label: "Display", value: "3.5-inch multi-touch" },
      { label: "Battery", value: "Up to 22 hours audio" },
      { label: "Controls", value: "Multi-touch" },
    ],
    tags: ["Wi-Fi", "Safari", "Multi-touch"],
  },
  {
    id: "ipod-touch-4", name: "iPod touch (4th gen)", year: 2010, priceLabel: "$229 (discontinued)",
    highlight: "Added a Retina display, FaceTime cameras, and Game Center.",
    specs: [
      { label: "Storage", value: "8 – 64 GB" },
      { label: "Display", value: "3.5-inch Retina" },
      { label: "Battery", value: "Up to 40 hours audio" },
      { label: "Controls", value: "Multi-touch" },
    ],
    tags: ["Retina display", "FaceTime", "A4 chip"],
  },
  {
    id: "ipod-shuffle-4", name: "iPod shuffle (4th gen)", year: 2010, priceLabel: "$49 (discontinued)",
    highlight: "The clip-on shuffle brought buttons back, with VoiceOver to announce tracks.",
    specs: [
      { label: "Storage", value: "2 GB" },
      { label: "Display", value: "None" },
      { label: "Battery", value: "Up to 15 hours" },
      { label: "Controls", value: "Buttons + VoiceOver" },
    ],
    tags: ["Clip design", "VoiceOver"],
  },
  {
    id: "ipod-nano-7", name: "iPod nano (7th gen)", year: 2012, priceLabel: "$149 (discontinued)",
    highlight: "A tall touchscreen nano with Bluetooth, a home button, and Lightning.",
    specs: [
      { label: "Storage", value: "16 GB" },
      { label: "Display", value: "2.5-inch multi-touch" },
      { label: "Battery", value: "Up to 30 hours audio" },
      { label: "Controls", value: "Multi-touch + Home" },
    ],
    tags: ["Bluetooth", "Lightning", "FM radio"],
  },
  {
    id: "ipod-touch-7", name: "iPod touch (7th gen)", year: 2019, priceLabel: "$199 (discontinued)",
    highlight: "The final iPod — an A10 Fusion chip, Group FaceTime, and up to 256 GB.",
    specs: [
      { label: "Storage", value: "32 / 128 / 256 GB" },
      { label: "Display", value: "4-inch Retina" },
      { label: "Battery", value: "Up to 40 hours audio" },
      { label: "Controls", value: "Multi-touch" },
    ],
    tags: ["A10 Fusion", "Group FaceTime", "The last iPod"],
  },
];
