import type { DeviceModel } from "./deviceTypes";

/* Apple Watch history — ordered oldest → newest. Specs summarized. */
export const watchModels: DeviceModel[] = [
  {
    id: "watch-series-0", name: "Apple Watch (1st gen)", year: 2015, priceLabel: "$349 (discontinued)",
    highlight: "The original Apple Watch brought apps, notifications, and fitness tracking to the wrist.",
    specs: [
      { label: "Chip", value: "Apple S1" },
      { label: "Case Sizes", value: "38mm / 42mm" },
      { label: "Display", value: "OLED Retina, Force Touch" },
      { label: "Battery", value: "Up to 18 hours" },
    ],
    tags: ["Digital Crown", "Taptic Engine", "watchOS 1"],
  },
  {
    id: "watch-series-1", name: "Apple Watch Series 1", year: 2016, priceLabel: "$269 (discontinued)",
    highlight: "A faster dual-core S1P chip at a lower price, launched beside the Series 2.",
    specs: [
      { label: "Chip", value: "Apple S1P (dual-core)" },
      { label: "Case Sizes", value: "38mm / 42mm" },
      { label: "Display", value: "OLED Retina" },
      { label: "Battery", value: "Up to 18 hours" },
    ],
    tags: ["Dual-core", "Entry model"],
  },
  {
    id: "watch-series-2", name: "Apple Watch Series 2", year: 2016, priceLabel: "$369 (discontinued)",
    highlight: "Built-in GPS and 50m water resistance made it the first true swim-and-run watch.",
    specs: [
      { label: "Chip", value: "Apple S2 (dual-core)" },
      { label: "Case Sizes", value: "38mm / 42mm" },
      { label: "Display", value: "OLED, 2× brighter" },
      { label: "Battery", value: "Up to 18 hours" },
    ],
    tags: ["Built-in GPS", "50m water resistant", "Swimproof"],
  },
  {
    id: "watch-series-3", name: "Apple Watch Series 3", year: 2017, priceLabel: "$329 (discontinued)",
    highlight: "The first Apple Watch with optional LTE cellular — leave your iPhone at home.",
    specs: [
      { label: "Chip", value: "Apple S3 (dual-core)" },
      { label: "Case Sizes", value: "38mm / 42mm" },
      { label: "Display", value: "OLED Retina" },
      { label: "Battery", value: "Up to 18 hours" },
    ],
    tags: ["LTE cellular", "Altimeter", "Siri speaks"],
  },
  {
    id: "watch-series-4", name: "Apple Watch Series 4", year: 2018, priceLabel: "$399 (discontinued)",
    highlight: "A bigger edge-to-edge display, the ECG app, and fall detection — a health turning point.",
    specs: [
      { label: "Chip", value: "Apple S4 (64-bit)" },
      { label: "Case Sizes", value: "40mm / 44mm" },
      { label: "Display", value: "30% larger LTPO OLED" },
      { label: "Battery", value: "Up to 18 hours" },
    ],
    tags: ["ECG app", "Fall detection", "Bigger display"],
  },
  {
    id: "watch-series-5", name: "Apple Watch Series 5", year: 2019, priceLabel: "$399 (discontinued)",
    highlight: "The Always-On Retina display arrived, alongside a built-in compass.",
    specs: [
      { label: "Chip", value: "Apple S5" },
      { label: "Case Sizes", value: "40mm / 44mm" },
      { label: "Display", value: "Always-On Retina" },
      { label: "Battery", value: "Up to 18 hours" },
    ],
    tags: ["Always-On display", "Compass", "32GB storage"],
  },
  {
    id: "watch-se-1", name: "Apple Watch SE (1st gen)", year: 2020, priceLabel: "$279 (discontinued)",
    highlight: "The core Apple Watch experience — minus Always-On and ECG — at a friendlier price.",
    specs: [
      { label: "Chip", value: "Apple S5" },
      { label: "Case Sizes", value: "40mm / 44mm" },
      { label: "Display", value: "Retina (no Always-On)" },
      { label: "Battery", value: "Up to 18 hours" },
    ],
    tags: ["Value model", "Fall detection", "Compass"],
  },
  {
    id: "watch-series-6", name: "Apple Watch Series 6", year: 2020, priceLabel: "$399 (discontinued)",
    highlight: "Added a blood oxygen sensor and a brighter Always-On display.",
    specs: [
      { label: "Chip", value: "Apple S6" },
      { label: "Case Sizes", value: "40mm / 44mm" },
      { label: "Display", value: "Always-On, 2.5× brighter" },
      { label: "Battery", value: "Up to 18 hours" },
    ],
    tags: ["Blood oxygen", "U1 chip", "Faster charging"],
  },
  {
    id: "watch-series-7", name: "Apple Watch Series 7", year: 2021, priceLabel: "$399 (discontinued)",
    highlight: "A larger, more durable display with a full QWERTY keyboard and faster charging.",
    specs: [
      { label: "Chip", value: "Apple S7" },
      { label: "Case Sizes", value: "41mm / 45mm" },
      { label: "Display", value: "Larger, crack-resistant" },
      { label: "Battery", value: "Up to 18 hours (fast charge)" },
    ],
    tags: ["Bigger display", "IP6X dust", "33% faster charge"],
  },
  {
    id: "watch-ultra", name: "Apple Watch Ultra", year: 2022, priceLabel: "$799 (discontinued)",
    highlight: "A rugged 49mm titanium adventure watch with the Action Button and dual-frequency GPS.",
    specs: [
      { label: "Chip", value: "Apple S8" },
      { label: "Case Size", value: "49mm titanium" },
      { label: "Display", value: "3000-nit, brightest" },
      { label: "Battery", value: "Up to 36 hours" },
    ],
    tags: ["Action Button", "100m water resistant", "Dual-frequency GPS"],
  },
  {
    id: "watch-series-8", name: "Apple Watch Series 8", year: 2022, priceLabel: "$399 (discontinued)",
    highlight: "Temperature sensing, Crash Detection, and cycle-tracking insights.",
    specs: [
      { label: "Chip", value: "Apple S8" },
      { label: "Case Sizes", value: "41mm / 45mm" },
      { label: "Display", value: "Always-On Retina" },
      { label: "Battery", value: "Up to 18 / 36 hours" },
    ],
    tags: ["Temperature sensor", "Crash Detection", "Cycle tracking"],
  },
  {
    id: "watch-se-2", name: "Apple Watch SE (2nd gen)", year: 2022, priceLabel: "$249",
    highlight: "The affordable SE with the latest S8 chip and Crash Detection.",
    specs: [
      { label: "Chip", value: "Apple S8" },
      { label: "Case Sizes", value: "40mm / 44mm" },
      { label: "Display", value: "Retina (no Always-On)" },
      { label: "Battery", value: "Up to 18 hours" },
    ],
    tags: ["Value model", "Crash Detection", "20% faster"],
  },
  {
    id: "watch-series-9", name: "Apple Watch Series 9", year: 2023, priceLabel: "$399",
    highlight: "The S9 chip powers on-device Siri and the new Double Tap gesture.",
    specs: [
      { label: "Chip", value: "Apple S9 SiP" },
      { label: "Case Sizes", value: "41mm / 45mm" },
      { label: "Display", value: "Up to 2000 nits" },
      { label: "Battery", value: "Up to 18 / 36 hours" },
    ],
    tags: ["Double Tap", "On-device Siri", "Precision Finding"],
  },
  {
    id: "watch-ultra-2", name: "Apple Watch Ultra 2", year: 2023, priceLabel: "$799",
    highlight: "Apple’s brightest display ever at 3000 nits, with the new Double Tap gesture.",
    specs: [
      { label: "Chip", value: "Apple S9 SiP" },
      { label: "Case Size", value: "49mm titanium" },
      { label: "Display", value: "3000 nits" },
      { label: "Battery", value: "Up to 36 / 72 hours" },
    ],
    tags: ["Double Tap", "Brightest display", "Modular face"],
  },
  {
    id: "watch-series-10", name: "Apple Watch Series 10", year: 2024, priceLabel: "$399",
    highlight: "Apple’s thinnest watch yet, with a larger wide-angle OLED display.",
    specs: [
      { label: "Chip", value: "Apple S10 SiP" },
      { label: "Case Sizes", value: "42mm / 46mm" },
      { label: "Display", value: "Wide-angle OLED, thinnest" },
      { label: "Battery", value: "Up to 18 hours (fast charge)" },
    ],
    tags: ["Thinnest ever", "Wide-angle OLED", "Depth & water temp"],
  },
  {
    id: "watch-series-11", name: "Apple Watch Series 11", year: 2025, priceLabel: "$399",
    highlight: "A full 24-hour battery, Sleep Score, and a tougher Ion-X display in the Series 10 design.",
    specs: [
      { label: "Chip", value: "Apple S10 SiP" },
      { label: "Case Sizes", value: "42mm / 46mm" },
      { label: "Display", value: "Wide-angle OLED, 2× scratch resistance" },
      { label: "Battery", value: "Up to 24 hours" },
    ],
    tags: ["Sleep Score", "24-hour battery", "5G cellular"],
    isNew: true,
  },
  {
    id: "watch-se-3", name: "Apple Watch SE 3", year: 2025, priceLabel: "$249",
    highlight: "The value Watch gains an Always-On display, fast charging, temperature sensing, and 5G.",
    specs: [
      { label: "Chip", value: "Apple S10 SiP" },
      { label: "Case Sizes", value: "40mm / 44mm" },
      { label: "Display", value: "Always-On Retina" },
      { label: "Battery", value: "Up to 18 hours, fast charge" },
    ],
    tags: ["Always-On", "Fast charging", "5G cellular"],
    isNew: true,
  },
  {
    id: "watch-ultra-3", name: "Apple Watch Ultra 3", year: 2025, priceLabel: "$799",
    highlight: "Satellite communication, Apple Watch’s largest display, and 42-hour battery life for the backcountry.",
    specs: [
      { label: "Chip", value: "Apple S10 SiP" },
      { label: "Case Size", value: "49mm titanium" },
      { label: "Display", value: "LTPO3 wide-angle OLED" },
      { label: "Battery", value: "Up to 42 / 72 hours" },
    ],
    tags: ["Emergency SOS via satellite", "5G cellular", "Dual-frequency GPS"],
    isNew: true,
  },
];
