import type { DeviceModel } from "./deviceTypes";

/* iPad history — ordered oldest → newest. Milestone models, specs summarized. */
export const ipadModels: DeviceModel[] = [
  {
    id: "ipad-1", name: "iPad (1st gen)", year: 2010, priceLabel: "$499 (discontinued)",
    highlight: "The tablet that defined the category — a 9.7-inch screen on Apple's own A4 chip.",
    specs: [
      { label: "Chip", value: "Apple A4" },
      { label: "Display", value: "9.7-inch LCD" },
      { label: "Storage", value: "16 / 32 / 64 GB" },
      { label: "Software", value: "iPhone OS 3.2" },
    ],
    tags: ["First iPad", "A4 chip", "30-pin"],
  },
  {
    id: "ipad-2", name: "iPad 2", year: 2011, priceLabel: "$499 (discontinued)",
    highlight: "Thinner and lighter with dual cameras and the dual-core A5 for FaceTime.",
    specs: [
      { label: "Chip", value: "Apple A5" },
      { label: "Display", value: "9.7-inch LCD" },
      { label: "Storage", value: "16 / 32 / 64 GB" },
      { label: "Software", value: "iOS 4.3" },
    ],
    tags: ["Dual cameras", "Smart Cover", "A5 chip"],
  },
  {
    id: "ipad-3", name: "iPad (3rd gen)", year: 2012, priceLabel: "$499 (discontinued)",
    highlight: "The first Retina iPad — a 2048×1536 display that quadrupled the pixels.",
    specs: [
      { label: "Chip", value: "Apple A5X" },
      { label: "Display", value: "9.7-inch Retina" },
      { label: "Storage", value: "16 / 32 / 64 GB" },
      { label: "Software", value: "iOS 5.1" },
    ],
    tags: ["Retina display", "A5X", "LTE"],
  },
  {
    id: "ipad-mini-1", name: "iPad mini", year: 2012, priceLabel: "$329 (discontinued)",
    highlight: "Shrunk the iPad to a 7.9-inch frame you could hold in one hand.",
    specs: [
      { label: "Chip", value: "Apple A5" },
      { label: "Display", value: "7.9-inch LCD" },
      { label: "Storage", value: "16 / 32 / 64 GB" },
      { label: "Software", value: "iOS 6.0" },
    ],
    tags: ["7.9-inch", "One-handed", "First mini"],
  },
  {
    id: "ipad-air-1", name: "iPad Air", year: 2013, priceLabel: "$499 (discontinued)",
    highlight: "A dramatically thinner, lighter redesign powered by the 64-bit A7.",
    specs: [
      { label: "Chip", value: "Apple A7 (64-bit)" },
      { label: "Display", value: "9.7-inch Retina" },
      { label: "Storage", value: "16 – 128 GB" },
      { label: "Software", value: "iOS 7.0" },
    ],
    tags: ["Air redesign", "64-bit", "Thin bezels"],
  },
  {
    id: "ipad-air-2", name: "iPad Air 2", year: 2014, priceLabel: "$499 (discontinued)",
    highlight: "The thinnest iPad ever at the time, adding Touch ID and a laminated display.",
    specs: [
      { label: "Chip", value: "Apple A8X" },
      { label: "Display", value: "9.7-inch laminated Retina" },
      { label: "Storage", value: "16 / 64 / 128 GB" },
      { label: "Security", value: "Touch ID" },
    ],
    tags: ["Touch ID", "6.1mm thin", "A8X"],
  },
  {
    id: "ipad-pro-12-1", name: "iPad Pro 12.9\"", year: 2015, priceLabel: "$799 (discontinued)",
    highlight: "The first Pro — a big-screen iPad with Apple Pencil and Smart Keyboard support.",
    specs: [
      { label: "Chip", value: "Apple A9X" },
      { label: "Display", value: "12.9-inch Retina" },
      { label: "Storage", value: "32 / 128 / 256 GB" },
      { label: "Pencil", value: "1st-gen Apple Pencil" },
    ],
    tags: ["First iPad Pro", "Apple Pencil", "Smart Keyboard"],
  },
  {
    id: "ipad-pro-10-5", name: "iPad Pro 10.5\"", year: 2017, priceLabel: "$649 (discontinued)",
    highlight: "Introduced the 120Hz ProMotion display in a slim 10.5-inch body.",
    specs: [
      { label: "Chip", value: "Apple A10X Fusion" },
      { label: "Display", value: "10.5-inch ProMotion" },
      { label: "Storage", value: "64 / 256 / 512 GB" },
      { label: "Pencil", value: "1st-gen Apple Pencil" },
    ],
    tags: ["ProMotion 120Hz", "A10X", "True Tone"],
  },
  {
    id: "ipad-9-7-2017", name: "iPad (9.7\", 2017)", year: 2017, priceLabel: "$329 (discontinued)",
    highlight: "Brought the iPad back to an affordable starting price with the A9 chip.",
    specs: [
      { label: "Chip", value: "Apple A9" },
      { label: "Display", value: "9.7-inch Retina" },
      { label: "Storage", value: "32 / 128 GB" },
      { label: "Pencil", value: "None" },
    ],
    tags: ["Budget iPad", "$329", "A9 chip"],
  },
  {
    id: "ipad-pro-2018", name: "iPad Pro (2018)", year: 2018, priceLabel: "$799 (discontinued)",
    highlight: "An edge-to-edge redesign that dropped Home in favor of Face ID and added USB-C.",
    specs: [
      { label: "Chip", value: "Apple A12X Bionic" },
      { label: "Display", value: "11 / 12.9-inch Liquid Retina" },
      { label: "Connector", value: "USB-C" },
      { label: "Pencil", value: "2nd-gen Apple Pencil" },
    ],
    tags: ["Face ID", "USB-C", "Pencil 2"],
  },
  {
    id: "ipad-mini-5", name: "iPad mini (5th gen)", year: 2019, priceLabel: "$399 (discontinued)",
    highlight: "Revived the mini with the A12 Bionic and Apple Pencil support.",
    specs: [
      { label: "Chip", value: "Apple A12 Bionic" },
      { label: "Display", value: "7.9-inch Retina" },
      { label: "Storage", value: "64 / 256 GB" },
      { label: "Pencil", value: "1st-gen Apple Pencil" },
    ],
    tags: ["A12 Bionic", "Pencil support", "True Tone"],
  },
  {
    id: "ipad-air-4", name: "iPad Air (4th gen)", year: 2020, priceLabel: "$599 (discontinued)",
    highlight: "A Pro-style flat-edge redesign with USB-C and Touch ID in the power button.",
    specs: [
      { label: "Chip", value: "Apple A14 Bionic" },
      { label: "Display", value: "10.9-inch Liquid Retina" },
      { label: "Connector", value: "USB-C" },
      { label: "Security", value: "Touch ID (top button)" },
    ],
    tags: ["A14 Bionic", "USB-C", "Pencil 2"],
  },
  {
    id: "ipad-pro-m1", name: "iPad Pro (M1)", year: 2021, priceLabel: "$1,099 (discontinued)",
    highlight: "Put the Mac's M1 chip in a tablet, with a mini-LED XDR display on the 12.9-inch.",
    specs: [
      { label: "Chip", value: "Apple M1" },
      { label: "Display", value: "12.9-inch Liquid Retina XDR" },
      { label: "Connector", value: "Thunderbolt / USB-C" },
      { label: "Pencil", value: "2nd-gen Apple Pencil" },
    ],
    tags: ["M1 chip", "mini-LED XDR", "Thunderbolt"],
  },
  {
    id: "ipad-10", name: "iPad (10th gen)", year: 2022, priceLabel: "$449",
    highlight: "Redesigned the entry iPad with flat edges, USB-C, and a landscape camera.",
    specs: [
      { label: "Chip", value: "Apple A14 Bionic" },
      { label: "Display", value: "10.9-inch Liquid Retina" },
      { label: "Connector", value: "USB-C" },
      { label: "Pencil", value: "1st-gen (with adapter)" },
    ],
    tags: ["USB-C", "Landscape camera", "Colorful"],
  },
  {
    id: "ipad-air-m2", name: "iPad Air (M2)", year: 2024, priceLabel: "$599",
    highlight: "Added the M2 chip and, for the first time, a larger 13-inch Air option.",
    specs: [
      { label: "Chip", value: "Apple M2" },
      { label: "Display", value: "11 / 13-inch Liquid Retina" },
      { label: "Connector", value: "USB-C" },
      { label: "Pencil", value: "Apple Pencil Pro" },
    ],
    tags: ["M2 chip", "13-inch option", "Pencil Pro"],
  },
  {
    id: "ipad-mini-a17", name: "iPad mini (A17 Pro)", year: 2024, priceLabel: "$499",
    highlight: "Updated the mini with the A17 Pro chip and Apple Intelligence support.",
    specs: [
      { label: "Chip", value: "Apple A17 Pro" },
      { label: "Display", value: "8.3-inch Liquid Retina" },
      { label: "Connector", value: "USB-C" },
      { label: "Pencil", value: "Apple Pencil Pro" },
    ],
    tags: ["A17 Pro", "Apple Intelligence", "Pencil Pro"],
  },
  {
    id: "ipad-pro-m4", name: "iPad Pro (M4)", year: 2024, priceLabel: "$999", isNew: true,
    highlight: "The thinnest Apple product ever, with a dual-layer Tandem OLED Ultra Retina display.",
    specs: [
      { label: "Chip", value: "Apple M4" },
      { label: "Display", value: "11 / 13-inch Tandem OLED" },
      { label: "Connector", value: "Thunderbolt / USB-C" },
      { label: "Pencil", value: "Apple Pencil Pro" },
    ],
    tags: ["M4 chip", "Tandem OLED", "5.1mm thin"],
  },
];
