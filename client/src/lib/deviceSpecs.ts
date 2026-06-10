// Comprehensive Apple Device Specifications Database
// Used across Compare, IPhones, Timeline, and other pages

export interface DeviceSpec {
  id: string;
  name: string;
  category: "iphone" | "ipad" | "mac" | "watch" | "airpods";
  year: number;
  chip: string;
  display: string;
  displaySize: string;
  resolution: string;
  refreshRate: string;
  ram: string;
  storage: string[];
  mainCamera: string;
  frontCamera: string;
  battery: string;
  weight: string;
  dimensions: string;
  os: string;
  colors: string[];
  startingPrice: number;
  biometrics: string;
  connectivity: string[];
  waterResistance: string;
  charging: string;
  releaseDate: string;
  discontinued: boolean;
  highlights: string[];
}

export const DEVICE_DATABASE: DeviceSpec[] = [
  // iPhone 17 Series (2025)
  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    category: "iphone",
    year: 2025,
    chip: "A19 Pro",
    display: "Super Retina XDR OLED, Always-On",
    displaySize: "6.9\"",
    resolution: "2868 x 1320",
    refreshRate: "1-120Hz ProMotion",
    ram: "12GB",
    storage: ["256GB", "512GB", "1TB", "2TB"],
    mainCamera: "48MP Main + 48MP Ultra Wide + 12MP 5x Telephoto",
    frontCamera: "12MP TrueDepth",
    battery: "4,685 mAh",
    weight: "227g",
    dimensions: "163.0 x 77.6 x 8.25mm",
    os: "iOS 27",
    colors: ["Natural Titanium", "Black Titanium", "White Titanium", "Desert Titanium"],
    startingPrice: 1199,
    biometrics: "Face ID",
    connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "UWB", "NFC", "Satellite"],
    waterResistance: "IP68 (6m, 30 min)",
    charging: "27W wired, 25W MagSafe, 15W Qi2",
    releaseDate: "September 2025",
    discontinued: false,
    highlights: ["2TB storage option", "A19 Pro chip", "48MP ultra-wide", "Apple-designed 5G modem"]
  },
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    category: "iphone",
    year: 2025,
    chip: "A19 Pro",
    display: "Super Retina XDR OLED, Always-On",
    displaySize: "6.3\"",
    resolution: "2622 x 1206",
    refreshRate: "1-120Hz ProMotion",
    ram: "12GB",
    storage: ["256GB", "512GB", "1TB"],
    mainCamera: "48MP Main + 48MP Ultra Wide + 12MP 5x Telephoto",
    frontCamera: "12MP TrueDepth",
    battery: "3,687 mAh",
    weight: "199g",
    dimensions: "146.6 x 70.6 x 8.25mm",
    os: "iOS 27",
    colors: ["Natural Titanium", "Black Titanium", "White Titanium", "Desert Titanium"],
    startingPrice: 999,
    biometrics: "Face ID",
    connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "UWB", "NFC", "Satellite"],
    waterResistance: "IP68 (6m, 30 min)",
    charging: "27W wired, 25W MagSafe, 15W Qi2",
    releaseDate: "September 2025",
    discontinued: false,
    highlights: ["Same cameras as Pro Max", "Titanium frame", "Action button", "USB-C Thunderbolt"]
  },
  {
    id: "iphone-17",
    name: "iPhone 17",
    category: "iphone",
    year: 2025,
    chip: "A19",
    display: "Super Retina XDR OLED",
    displaySize: "6.1\"",
    resolution: "2556 x 1179",
    refreshRate: "60Hz",
    ram: "8GB",
    storage: ["128GB", "256GB", "512GB"],
    mainCamera: "48MP Main + 12MP Ultra Wide",
    frontCamera: "12MP TrueDepth",
    battery: "3,561 mAh",
    weight: "171g",
    dimensions: "146.6 x 71.6 x 7.80mm",
    os: "iOS 27",
    colors: ["Black", "White", "Blue", "Green", "Pink"],
    startingPrice: 799,
    biometrics: "Face ID",
    connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC", "Satellite"],
    waterResistance: "IP68 (6m, 30 min)",
    charging: "25W wired, 15W MagSafe, 7.5W Qi",
    releaseDate: "September 2025",
    discontinued: false,
    highlights: ["A19 chip", "Apple Intelligence", "Dynamic Island", "USB-C"]
  },
  {
    id: "iphone-17-air",
    name: "iPhone 17 Air",
    category: "iphone",
    year: 2025,
    chip: "A19",
    display: "Super Retina XDR OLED",
    displaySize: "6.6\"",
    resolution: "2740 x 1260",
    refreshRate: "120Hz ProMotion",
    ram: "8GB",
    storage: ["128GB", "256GB", "512GB"],
    mainCamera: "48MP Main (single camera)",
    frontCamera: "12MP TrueDepth",
    battery: "3,200 mAh",
    weight: "145g",
    dimensions: "159.0 x 73.0 x 5.5mm",
    os: "iOS 27",
    colors: ["Starlight", "Midnight", "Blue", "Green"],
    startingPrice: 899,
    biometrics: "Face ID",
    connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC"],
    waterResistance: "IP68 (4m, 30 min)",
    charging: "20W wired, 15W MagSafe",
    releaseDate: "September 2025",
    discontinued: false,
    highlights: ["5.5mm thin", "Lightest iPhone ever", "Single camera design", "Apple 5G modem"]
  },
  // iPhone 16 Series (2024)
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    category: "iphone",
    year: 2024,
    chip: "A18 Pro",
    display: "Super Retina XDR OLED, Always-On",
    displaySize: "6.9\"",
    resolution: "2868 x 1320",
    refreshRate: "1-120Hz ProMotion",
    ram: "8GB",
    storage: ["256GB", "512GB", "1TB"],
    mainCamera: "48MP Main + 48MP Ultra Wide + 12MP 5x Telephoto",
    frontCamera: "12MP TrueDepth",
    battery: "4,685 mAh",
    weight: "227g",
    dimensions: "163.0 x 77.6 x 8.25mm",
    os: "iOS 18",
    colors: ["Natural Titanium", "Black Titanium", "White Titanium", "Desert Titanium"],
    startingPrice: 1199,
    biometrics: "Face ID",
    connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "UWB", "NFC", "Satellite"],
    waterResistance: "IP68 (6m, 30 min)",
    charging: "27W wired, 25W MagSafe, 15W Qi2",
    releaseDate: "September 2024",
    discontinued: false,
    highlights: ["Camera Control button", "4K 120fps video", "A18 Pro", "Apple Intelligence"]
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    category: "iphone",
    year: 2024,
    chip: "A18 Pro",
    display: "Super Retina XDR OLED, Always-On",
    displaySize: "6.3\"",
    resolution: "2622 x 1206",
    refreshRate: "1-120Hz ProMotion",
    ram: "8GB",
    storage: ["128GB", "256GB", "512GB", "1TB"],
    mainCamera: "48MP Main + 48MP Ultra Wide + 12MP 5x Telephoto",
    frontCamera: "12MP TrueDepth",
    battery: "3,582 mAh",
    weight: "199g",
    dimensions: "149.6 x 71.5 x 8.25mm",
    os: "iOS 18",
    colors: ["Natural Titanium", "Black Titanium", "White Titanium", "Desert Titanium"],
    startingPrice: 999,
    biometrics: "Face ID",
    connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "UWB", "NFC", "Satellite"],
    waterResistance: "IP68 (6m, 30 min)",
    charging: "27W wired, 25W MagSafe, 15W Qi2",
    releaseDate: "September 2024",
    discontinued: false,
    highlights: ["5x telephoto on Pro size", "Camera Control", "A18 Pro", "Bigger display"]
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    category: "iphone",
    year: 2024,
    chip: "A18",
    display: "Super Retina XDR OLED",
    displaySize: "6.1\"",
    resolution: "2556 x 1179",
    refreshRate: "60Hz",
    ram: "8GB",
    storage: ["128GB", "256GB", "512GB"],
    mainCamera: "48MP Main + 12MP Ultra Wide",
    frontCamera: "12MP TrueDepth",
    battery: "3,561 mAh",
    weight: "170g",
    dimensions: "147.6 x 71.6 x 7.80mm",
    os: "iOS 18",
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
    startingPrice: 799,
    biometrics: "Face ID",
    connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "NFC", "Satellite"],
    waterResistance: "IP68 (6m, 30 min)",
    charging: "25W wired, 15W MagSafe, 7.5W Qi2",
    releaseDate: "September 2024",
    discontinued: false,
    highlights: ["Action button", "Camera Control", "A18 chip", "Apple Intelligence ready"]
  },
  // iPhone 15 Series (2023)
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    category: "iphone",
    year: 2023,
    chip: "A17 Pro",
    display: "Super Retina XDR OLED, Always-On",
    displaySize: "6.7\"",
    resolution: "2796 x 1290",
    refreshRate: "1-120Hz ProMotion",
    ram: "8GB",
    storage: ["256GB", "512GB", "1TB"],
    mainCamera: "48MP Main + 12MP Ultra Wide + 12MP 5x Telephoto",
    frontCamera: "12MP TrueDepth",
    battery: "4,422 mAh",
    weight: "221g",
    dimensions: "159.9 x 76.7 x 8.25mm",
    os: "iOS 17",
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    startingPrice: 1199,
    biometrics: "Face ID",
    connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "UWB", "NFC", "Satellite"],
    waterResistance: "IP68 (6m, 30 min)",
    charging: "27W wired, 15W MagSafe, 7.5W Qi",
    releaseDate: "September 2023",
    discontinued: false,
    highlights: ["First titanium iPhone", "USB-C", "Action button", "5x periscope telephoto"]
  },
  // iPhone 14 Series (2022)
  {
    id: "iphone-14-pro-max",
    name: "iPhone 14 Pro Max",
    category: "iphone",
    year: 2022,
    chip: "A16 Bionic",
    display: "Super Retina XDR OLED, Always-On",
    displaySize: "6.7\"",
    resolution: "2796 x 1290",
    refreshRate: "1-120Hz ProMotion",
    ram: "6GB",
    storage: ["128GB", "256GB", "512GB", "1TB"],
    mainCamera: "48MP Main + 12MP Ultra Wide + 12MP 3x Telephoto",
    frontCamera: "12MP TrueDepth",
    battery: "4,323 mAh",
    weight: "240g",
    dimensions: "160.7 x 77.6 x 7.85mm",
    os: "iOS 16",
    colors: ["Space Black", "Silver", "Gold", "Deep Purple"],
    startingPrice: 1099,
    biometrics: "Face ID",
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3", "UWB", "NFC", "Satellite"],
    waterResistance: "IP68 (6m, 30 min)",
    charging: "27W wired, 15W MagSafe, 7.5W Qi",
    releaseDate: "September 2022",
    discontinued: true,
    highlights: ["Dynamic Island debut", "Always-On Display", "48MP camera", "Crash Detection"]
  },
  // iPhone 13 Series (2021)
  {
    id: "iphone-13-pro-max",
    name: "iPhone 13 Pro Max",
    category: "iphone",
    year: 2021,
    chip: "A15 Bionic",
    display: "Super Retina XDR OLED",
    displaySize: "6.7\"",
    resolution: "2778 x 1284",
    refreshRate: "10-120Hz ProMotion",
    ram: "6GB",
    storage: ["128GB", "256GB", "512GB", "1TB"],
    mainCamera: "12MP Main + 12MP Ultra Wide + 12MP 3x Telephoto",
    frontCamera: "12MP TrueDepth",
    battery: "4,352 mAh",
    weight: "240g",
    dimensions: "160.8 x 78.1 x 7.65mm",
    os: "iOS 15",
    colors: ["Graphite", "Gold", "Silver", "Sierra Blue", "Alpine Green"],
    startingPrice: 1099,
    biometrics: "Face ID",
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0", "UWB", "NFC"],
    waterResistance: "IP68 (6m, 30 min)",
    charging: "27W wired, 15W MagSafe, 7.5W Qi",
    releaseDate: "September 2021",
    discontinued: true,
    highlights: ["First 120Hz iPhone", "ProRes video", "Cinematic Mode", "1TB option"]
  },
  // iPhone 12 Series (2020)
  {
    id: "iphone-12-pro-max",
    name: "iPhone 12 Pro Max",
    category: "iphone",
    year: 2020,
    chip: "A14 Bionic",
    display: "Super Retina XDR OLED",
    displaySize: "6.7\"",
    resolution: "2778 x 1284",
    refreshRate: "60Hz",
    ram: "6GB",
    storage: ["128GB", "256GB", "512GB"],
    mainCamera: "12MP Main + 12MP Ultra Wide + 12MP 2.5x Telephoto",
    frontCamera: "12MP TrueDepth",
    battery: "3,687 mAh",
    weight: "228g",
    dimensions: "160.8 x 78.1 x 7.4mm",
    os: "iOS 14",
    colors: ["Graphite", "Gold", "Silver", "Pacific Blue"],
    startingPrice: 1099,
    biometrics: "Face ID",
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0", "UWB", "NFC"],
    waterResistance: "IP68 (6m, 30 min)",
    charging: "20W wired, 15W MagSafe, 7.5W Qi",
    releaseDate: "November 2020",
    discontinued: true,
    highlights: ["First 5G iPhone", "MagSafe debut", "Flat-edge design return", "LiDAR scanner"]
  },
  // iPhone 11 (2019)
  {
    id: "iphone-11",
    name: "iPhone 11",
    category: "iphone",
    year: 2019,
    chip: "A13 Bionic",
    display: "Liquid Retina LCD",
    displaySize: "6.1\"",
    resolution: "1792 x 828",
    refreshRate: "60Hz",
    ram: "4GB",
    storage: ["64GB", "128GB", "256GB"],
    mainCamera: "12MP Main + 12MP Ultra Wide",
    frontCamera: "12MP TrueDepth",
    battery: "3,110 mAh",
    weight: "194g",
    dimensions: "150.9 x 75.7 x 8.3mm",
    os: "iOS 13",
    colors: ["Black", "Green", "Yellow", "Purple", "Red", "White"],
    startingPrice: 699,
    biometrics: "Face ID",
    connectivity: ["4G LTE", "Wi-Fi 6", "Bluetooth 5.0", "NFC"],
    waterResistance: "IP68 (2m, 30 min)",
    charging: "18W wired, 7.5W Qi",
    releaseDate: "September 2019",
    discontinued: true,
    highlights: ["Night mode", "Ultra Wide camera", "U1 chip", "Spatial audio"]
  },
];

// Utility functions
export function getDevicesByCategory(category: DeviceSpec["category"]): DeviceSpec[] {
  return DEVICE_DATABASE.filter(d => d.category === category);
}

export function getDevicesByYear(year: number): DeviceSpec[] {
  return DEVICE_DATABASE.filter(d => d.year === year);
}

export function getDeviceById(id: string): DeviceSpec | undefined {
  return DEVICE_DATABASE.find(d => d.id === id);
}

export function compareDevices(id1: string, id2: string): { spec: string; device1: string; device2: string }[] {
  const d1 = getDeviceById(id1);
  const d2 = getDeviceById(id2);
  if (!d1 || !d2) return [];

  return [
    { spec: "Chip", device1: d1.chip, device2: d2.chip },
    { spec: "Display", device1: `${d1.displaySize} ${d1.refreshRate}`, device2: `${d2.displaySize} ${d2.refreshRate}` },
    { spec: "Camera", device1: d1.mainCamera, device2: d2.mainCamera },
    { spec: "Battery", device1: d1.battery, device2: d2.battery },
    { spec: "RAM", device1: d1.ram, device2: d2.ram },
    { spec: "Storage", device1: d1.storage.join(", "), device2: d2.storage.join(", ") },
    { spec: "Weight", device1: d1.weight, device2: d2.weight },
    { spec: "Price", device1: `$${d1.startingPrice}`, device2: `$${d2.startingPrice}` },
    { spec: "Water Resistance", device1: d1.waterResistance, device2: d2.waterResistance },
    { spec: "Charging", device1: d1.charging, device2: d2.charging },
  ];
}

export function getLatestDevices(count: number = 5): DeviceSpec[] {
  return [...DEVICE_DATABASE].sort((a, b) => b.year - a.year).slice(0, count);
}

export function searchDevices(query: string): DeviceSpec[] {
  const q = query.toLowerCase();
  return DEVICE_DATABASE.filter(d =>
    d.name.toLowerCase().includes(q) ||
    d.chip.toLowerCase().includes(q) ||
    d.category.includes(q) ||
    d.highlights.some(h => h.toLowerCase().includes(q))
  );
}
