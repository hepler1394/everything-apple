/* =============================================================
   iPhone history dataset — every model, 2007 → present
   Specs are summarized for the timeline view. Ordered oldest → newest.
   ============================================================= */

export interface PhoneModel {
  id: string;
  name: string;
  year: number;
  chip: string;
  display: string;
  camera: string;
  battery: string;
  colors: string[];
  startingPrice: string;
  ios: string;
  maxIOS: string;
  highlight: string;
  isNew?: boolean;
}

export const iPhoneModels: PhoneModel[] = [
  {
    id: "iphone-2g", name: "iPhone", year: 2007, chip: "Samsung S5L8900 (412 MHz)",
    display: "3.5-inch 320×480 LCD", camera: "2MP", battery: "Up to 8 hrs talk",
    colors: ["Aluminum / Black"], startingPrice: "$499 (discontinued)", ios: "iPhone OS 1", maxIOS: "iPhone OS 3.1.3",
    highlight: "The original. Multi-touch glass, visual voicemail, EDGE data — and no App Store yet.",
  },
  {
    id: "iphone-3g", name: "iPhone 3G", year: 2008, chip: "Samsung ARM11 (412 MHz)",
    display: "3.5-inch 320×480 LCD", camera: "2MP", battery: "Up to 10 hrs talk (2G)",
    colors: ["Black", "White"], startingPrice: "$199 (discontinued)", ios: "iPhone OS 2", maxIOS: "iOS 4.2.1",
    highlight: "Added 3G data and GPS, and launched alongside the very first App Store.",
  },
  {
    id: "iphone-3gs", name: "iPhone 3GS", year: 2009, chip: "Samsung APL0298 (600 MHz)",
    display: "3.5-inch 320×480 LCD", camera: "3MP with video", battery: "Up to 12 hrs talk (2G)",
    colors: ["Black", "White"], startingPrice: "$199 (discontinued)", ios: "iPhone OS 3", maxIOS: "iOS 6.1.6",
    highlight: "‘S’ for Speed — twice as fast, plus the first video recording and Voice Control.",
  },
  {
    id: "iphone-4", name: "iPhone 4", year: 2010, chip: "Apple A4",
    display: "3.5-inch Retina 640×960", camera: "5MP + front VGA", battery: "Up to 7 hrs talk (3G)",
    colors: ["Black", "White"], startingPrice: "$199 (discontinued)", ios: "iOS 4", maxIOS: "iOS 7.1.2",
    highlight: "Retina display, FaceTime, and the iconic glass-and-stainless-steel design.",
  },
  {
    id: "iphone-4s", name: "iPhone 4S", year: 2011, chip: "Apple A5",
    display: "3.5-inch Retina 640×960", camera: "8MP, 1080p video", battery: "Up to 8 hrs talk (3G)",
    colors: ["Black", "White"], startingPrice: "$199 (discontinued)", ios: "iOS 5", maxIOS: "iOS 9.3.6",
    highlight: "Introduced Siri, an 8MP camera, and 1080p video recording.",
  },
  {
    id: "iphone-5", name: "iPhone 5", year: 2012, chip: "Apple A6",
    display: "4-inch Retina 640×1136", camera: "8MP", battery: "Up to 8 hrs talk (LTE)",
    colors: ["Black & Slate", "White & Silver"], startingPrice: "$199 (discontinued)", ios: "iOS 6", maxIOS: "iOS 10.3.4",
    highlight: "Taller 4-inch screen, all-aluminum body, LTE, and the new Lightning connector.",
  },
  {
    id: "iphone-5c", name: "iPhone 5C", year: 2013, chip: "Apple A6",
    display: "4-inch Retina 640×1136", camera: "8MP", battery: "Up to 10 hrs talk (3G)",
    colors: ["Blue", "Green", "Pink", "Yellow", "White"], startingPrice: "$99 (discontinued)", ios: "iOS 7", maxIOS: "iOS 10.3.4",
    highlight: "The colorful, polycarbonate budget iPhone launched beside the 5S.",
  },
  {
    id: "iphone-5s", name: "iPhone 5S", year: 2013, chip: "Apple A7 (64-bit)",
    display: "4-inch Retina 640×1136", camera: "8MP True Tone flash", battery: "Up to 10 hrs talk (3G)",
    colors: ["Space Gray", "Silver", "Gold"], startingPrice: "$199 (discontinued)", ios: "iOS 7", maxIOS: "iOS 12.5.7",
    highlight: "First 64-bit smartphone chip and the debut of Touch ID fingerprint sensing.",
  },
  {
    id: "iphone-6", name: "iPhone 6", year: 2014, chip: "Apple A8",
    display: "4.7-inch Retina HD 750×1334", camera: "8MP Focus Pixels", battery: "Up to 14 hrs talk (3G)",
    colors: ["Space Gray", "Silver", "Gold"], startingPrice: "$199 (discontinued)", ios: "iOS 8", maxIOS: "iOS 12.5.7",
    highlight: "Bigger, thinner design with a 4.7-inch display and Apple Pay.",
  },
  {
    id: "iphone-6-plus", name: "iPhone 6 Plus", year: 2014, chip: "Apple A8",
    display: "5.5-inch Full HD 1080p", camera: "8MP with OIS", battery: "Up to 24 hrs talk (3G)",
    colors: ["Space Gray", "Silver", "Gold"], startingPrice: "$299 (discontinued)", ios: "iOS 8", maxIOS: "iOS 12.5.7",
    highlight: "The first ‘Plus’ — a 5.5-inch display with optical image stabilization.",
  },
  {
    id: "iphone-6s", name: "iPhone 6S", year: 2015, chip: "Apple A9",
    display: "4.7-inch Retina HD", camera: "12MP, 4K video", battery: "Up to 14 hrs talk (3G)",
    colors: ["Space Gray", "Silver", "Gold", "Rose Gold"], startingPrice: "$199 (discontinued)", ios: "iOS 9", maxIOS: "iOS 15.8.x",
    highlight: "3D Touch, a 12MP camera with 4K video, and Live Photos.",
  },
  {
    id: "iphone-6s-plus", name: "iPhone 6S Plus", year: 2015, chip: "Apple A9",
    display: "5.5-inch Full HD 1080p", camera: "12MP with OIS, 4K", battery: "Up to 24 hrs talk (3G)",
    colors: ["Space Gray", "Silver", "Gold", "Rose Gold"], startingPrice: "$299 (discontinued)", ios: "iOS 9", maxIOS: "iOS 15.8.x",
    highlight: "The larger 6S with OIS and the same 3D Touch experience.",
  },
  {
    id: "iphone-se-1", name: "iPhone SE (1st gen)", year: 2016, chip: "Apple A9",
    display: "4-inch Retina 640×1136", camera: "12MP, 4K video", battery: "Up to 14 hrs talk (3G)",
    colors: ["Space Gray", "Silver", "Gold", "Rose Gold"], startingPrice: "$399 (discontinued)", ios: "iOS 9", maxIOS: "iOS 15.8.x",
    highlight: "6S internals in the beloved compact 4-inch iPhone 5 body.",
  },
  {
    id: "iphone-7", name: "iPhone 7", year: 2016, chip: "Apple A10 Fusion",
    display: "4.7-inch Retina HD", camera: "12MP, OIS", battery: "Up to 14 hrs talk",
    colors: ["Jet Black", "Black", "Silver", "Gold", "Rose Gold", "Product Red"], startingPrice: "$649 (discontinued)", ios: "iOS 10", maxIOS: "iOS 15.8.x",
    highlight: "Water resistance, a solid-state home button — and goodbye headphone jack.",
  },
  {
    id: "iphone-7-plus", name: "iPhone 7 Plus", year: 2016, chip: "Apple A10 Fusion",
    display: "5.5-inch Full HD 1080p", camera: "Dual 12MP (Wide + Tele)", battery: "Up to 21 hrs talk",
    colors: ["Jet Black", "Black", "Silver", "Gold", "Rose Gold", "Product Red"], startingPrice: "$769 (discontinued)", ios: "iOS 10", maxIOS: "iOS 15.8.x",
    highlight: "Apple’s first dual-camera system and the debut of Portrait mode.",
  },
  {
    id: "iphone-8", name: "iPhone 8", year: 2017, chip: "Apple A11 Bionic",
    display: "4.7-inch Retina HD", camera: "12MP", battery: "Up to 14 hrs talk",
    colors: ["Space Gray", "Silver", "Gold", "Product Red"], startingPrice: "$699 (discontinued)", ios: "iOS 11", maxIOS: "iOS 16.7.x",
    highlight: "Glass back for wireless charging, True Tone display, and the A11 Bionic.",
  },
  {
    id: "iphone-8-plus", name: "iPhone 8 Plus", year: 2017, chip: "Apple A11 Bionic",
    display: "5.5-inch Full HD 1080p", camera: "Dual 12MP, Portrait Lighting", battery: "Up to 21 hrs talk",
    colors: ["Space Gray", "Silver", "Gold", "Product Red"], startingPrice: "$799 (discontinued)", ios: "iOS 11", maxIOS: "iOS 16.7.x",
    highlight: "Dual cameras with Portrait Lighting and glass-back wireless charging.",
  },
  {
    id: "iphone-x", name: "iPhone X", year: 2017, chip: "Apple A11 Bionic",
    display: "5.8-inch Super Retina OLED", camera: "Dual 12MP", battery: "Up to 21 hrs talk",
    colors: ["Space Gray", "Silver"], startingPrice: "$999 (discontinued)", ios: "iOS 11", maxIOS: "iOS 16.7.x",
    highlight: "The reinvention: edge-to-edge OLED, Face ID, the notch, and swipe gestures.",
  },
  {
    id: "iphone-xr", name: "iPhone XR", year: 2018, chip: "Apple A12 Bionic",
    display: "6.1-inch Liquid Retina LCD", camera: "12MP single", battery: "Up to 25 hrs talk",
    colors: ["Black", "White", "Blue", "Yellow", "Coral", "Product Red"], startingPrice: "$749 (discontinued)", ios: "iOS 12", maxIOS: "iOS 18.x",
    highlight: "Colorful, affordable, single-camera flagship with all-day battery.",
  },
  {
    id: "iphone-xs", name: "iPhone XS", year: 2018, chip: "Apple A12 Bionic",
    display: "5.8-inch Super Retina OLED", camera: "Dual 12MP, Smart HDR", battery: "Up to 20 hrs talk",
    colors: ["Space Gray", "Silver", "Gold"], startingPrice: "$999 (discontinued)", ios: "iOS 12", maxIOS: "iOS 18.x",
    highlight: "Smart HDR, dual-SIM, and the first A12 7nm chip.",
  },
  {
    id: "iphone-xs-max", name: "iPhone XS Max", year: 2018, chip: "Apple A12 Bionic",
    display: "6.5-inch Super Retina OLED", camera: "Dual 12MP, Smart HDR", battery: "Up to 25 hrs talk",
    colors: ["Space Gray", "Silver", "Gold"], startingPrice: "$1,099 (discontinued)", ios: "iOS 12", maxIOS: "iOS 18.x",
    highlight: "The largest iPhone display yet at the time, with a 6.5-inch OLED.",
  },
  {
    id: "iphone-11", name: "iPhone 11", year: 2019, chip: "Apple A13 Bionic",
    display: "6.1-inch Liquid Retina LCD", camera: "Dual 12MP (Wide + Ultra Wide)", battery: "Up to 17 hrs video",
    colors: ["Black", "White", "Product Red", "Yellow", "Purple", "Green"], startingPrice: "$699 (discontinued)", ios: "iOS 13", maxIOS: "iOS 18.x",
    highlight: "Brought Night Mode and Ultra Wide to the mainstream lineup.",
  },
  {
    id: "iphone-11-pro", name: "iPhone 11 Pro", year: 2019, chip: "Apple A13 Bionic",
    display: "5.8-inch Super Retina XDR", camera: "Triple 12MP", battery: "Up to 18 hrs video",
    colors: ["Space Gray", "Silver", "Gold", "Midnight Green"], startingPrice: "$999 (discontinued)", ios: "iOS 13", maxIOS: "iOS 18.x",
    highlight: "First triple-camera iPhone and the first ‘Pro’ branding.",
  },
  {
    id: "iphone-11-pro-max", name: "iPhone 11 Pro Max", year: 2019, chip: "Apple A13 Bionic",
    display: "6.5-inch Super Retina XDR", camera: "Triple 12MP", battery: "Up to 20 hrs video",
    colors: ["Space Gray", "Silver", "Gold", "Midnight Green"], startingPrice: "$1,099 (discontinued)", ios: "iOS 13", maxIOS: "iOS 18.x",
    highlight: "The biggest battery in an iPhone yet, paired with the triple-camera Pro system.",
  },
  {
    id: "iphone-se-2", name: "iPhone SE (2nd gen)", year: 2020, chip: "Apple A13 Bionic",
    display: "4.7-inch Retina HD LCD", camera: "12MP single", battery: "Up to 13 hrs video",
    colors: ["Black", "White", "Product Red"], startingPrice: "$399 (discontinued)", ios: "iOS 13", maxIOS: "iOS 18.x",
    highlight: "Flagship A13 speed with Touch ID in a classic 4.7-inch body.",
  },
  {
    id: "iphone-12-mini", name: "iPhone 12 mini", year: 2020, chip: "Apple A14 Bionic",
    display: "5.4-inch Super Retina XDR OLED", camera: "Dual 12MP", battery: "Up to 15 hrs video",
    colors: ["Black", "White", "Product Red", "Green", "Blue", "Purple"], startingPrice: "$699 (discontinued)", ios: "iOS 14", maxIOS: "iOS 18.x",
    highlight: "A full 5G flagship shrunk into the smallest modern iPhone.",
  },
  {
    id: "iphone-12", name: "iPhone 12", year: 2020, chip: "Apple A14 Bionic",
    display: "6.1-inch Super Retina XDR OLED", camera: "Dual 12MP", battery: "Up to 17 hrs video",
    colors: ["Black", "White", "Product Red", "Green", "Blue", "Purple"], startingPrice: "$799 (discontinued)", ios: "iOS 14", maxIOS: "iOS 18.x",
    highlight: "5G, flat edges, Ceramic Shield, and MagSafe.",
  },
  {
    id: "iphone-12-pro", name: "iPhone 12 Pro", year: 2020, chip: "Apple A14 Bionic",
    display: "6.1-inch Super Retina XDR OLED", camera: "Triple 12MP + LiDAR", battery: "Up to 17 hrs video",
    colors: ["Graphite", "Silver", "Gold", "Pacific Blue"], startingPrice: "$999 (discontinued)", ios: "iOS 14", maxIOS: "iOS 18.x",
    highlight: "LiDAR scanner for AR and night portraits, plus ProRAW.",
  },
  {
    id: "iphone-12-pro-max", name: "iPhone 12 Pro Max", year: 2020, chip: "Apple A14 Bionic",
    display: "6.7-inch Super Retina XDR OLED", camera: "Triple 12MP + LiDAR", battery: "Up to 20 hrs video",
    colors: ["Graphite", "Silver", "Gold", "Pacific Blue"], startingPrice: "$1,099 (discontinued)", ios: "iOS 14", maxIOS: "iOS 18.x",
    highlight: "Largest sensor yet with sensor-shift stabilization and a 6.7-inch screen.",
  },
  {
    id: "iphone-13-mini", name: "iPhone 13 mini", year: 2021, chip: "Apple A15 Bionic",
    display: "5.4-inch Super Retina XDR OLED", camera: "Dual 12MP, Cinematic", battery: "Up to 17 hrs video",
    colors: ["Midnight", "Starlight", "Blue", "Pink", "Product Red", "Green"], startingPrice: "$699 (discontinued)", ios: "iOS 15", maxIOS: "iOS 18.x",
    highlight: "The last small iPhone, with Cinematic mode and big battery gains.",
  },
  {
    id: "iphone-13", name: "iPhone 13", year: 2021, chip: "Apple A15 Bionic",
    display: "6.1-inch Super Retina XDR OLED", camera: "Dual 12MP, Cinematic", battery: "Up to 19 hrs video",
    colors: ["Midnight", "Starlight", "Blue", "Pink", "Product Red", "Green"], startingPrice: "$799 (discontinued)", ios: "iOS 15", maxIOS: "iOS 18.x",
    highlight: "Cinematic mode, a smaller notch, and a big jump in battery life.",
  },
  {
    id: "iphone-13-pro", name: "iPhone 13 Pro", year: 2021, chip: "Apple A15 Bionic",
    display: "6.1-inch ProMotion 120Hz OLED", camera: "Triple 12MP, macro", battery: "Up to 22 hrs video",
    colors: ["Graphite", "Gold", "Silver", "Sierra Blue", "Alpine Green"], startingPrice: "$999 (discontinued)", ios: "iOS 15", maxIOS: "iOS 18.x",
    highlight: "First ProMotion 120Hz adaptive display and macro photography.",
  },
  {
    id: "iphone-13-pro-max", name: "iPhone 13 Pro Max", year: 2021, chip: "Apple A15 Bionic",
    display: "6.7-inch ProMotion 120Hz OLED", camera: "Triple 12MP, macro", battery: "Up to 28 hrs video",
    colors: ["Graphite", "Gold", "Silver", "Sierra Blue", "Alpine Green"], startingPrice: "$1,099 (discontinued)", ios: "iOS 15", maxIOS: "iOS 18.x",
    highlight: "ProMotion on the biggest screen with the best battery life of its era.",
  },
  {
    id: "iphone-se-3", name: "iPhone SE (3rd gen)", year: 2022, chip: "Apple A15 Bionic",
    display: "4.7-inch Retina HD LCD", camera: "12MP single", battery: "Up to 15 hrs video",
    colors: ["Midnight", "Starlight", "Product Red"], startingPrice: "$429 (discontinued)", ios: "iOS 15", maxIOS: "iOS 18.x",
    highlight: "Added 5G and A15 speed while keeping Touch ID and the classic body.",
  },
  {
    id: "iphone-14", name: "iPhone 14", year: 2022, chip: "Apple A15 Bionic",
    display: "6.1-inch Super Retina XDR OLED", camera: "Dual 12MP, Action mode", battery: "Up to 20 hrs video",
    colors: ["Midnight", "Starlight", "Blue", "Purple", "Product Red", "Yellow"], startingPrice: "$799 (discontinued)", ios: "iOS 16", maxIOS: "iOS 18.x",
    highlight: "Emergency SOS via satellite, Crash Detection, and Action mode video.",
  },
  {
    id: "iphone-14-plus", name: "iPhone 14 Plus", year: 2022, chip: "Apple A15 Bionic",
    display: "6.7-inch Super Retina XDR OLED", camera: "Dual 12MP, Action mode", battery: "Up to 26 hrs video",
    colors: ["Midnight", "Starlight", "Blue", "Purple", "Product Red", "Yellow"], startingPrice: "$899 (discontinued)", ios: "iOS 16", maxIOS: "iOS 18.x",
    highlight: "Big-screen battery champ that brought the 6.7-inch size to the non-Pro line.",
  },
  {
    id: "iphone-14-pro", name: "iPhone 14 Pro", year: 2022, chip: "Apple A16 Bionic",
    display: "6.1-inch Always-On ProMotion", camera: "48MP main + triple", battery: "Up to 23 hrs video",
    colors: ["Space Black", "Silver", "Gold", "Deep Purple"], startingPrice: "$999 (discontinued)", ios: "iOS 16", maxIOS: "iOS 18.x",
    highlight: "Dynamic Island replaces the notch, plus the first 48MP camera and Always-On display.",
  },
  {
    id: "iphone-14-pro-max", name: "iPhone 14 Pro Max", year: 2022, chip: "Apple A16 Bionic",
    display: "6.7-inch Always-On ProMotion", camera: "48MP main + triple", battery: "Up to 29 hrs video",
    colors: ["Space Black", "Silver", "Gold", "Deep Purple"], startingPrice: "$1,099 (discontinued)", ios: "iOS 16", maxIOS: "iOS 18.x",
    highlight: "The 48MP Pro experience on the largest, longest-lasting display.",
  },
  {
    id: "iphone-15", name: "iPhone 15", year: 2023, chip: "Apple A16 Bionic",
    display: "6.1-inch Dynamic Island OLED", camera: "48MP main + 12MP UW", battery: "Up to 20 hrs video",
    colors: ["Black", "Blue", "Green", "Yellow", "Pink"], startingPrice: "$699", ios: "iOS 17", maxIOS: "iOS 18+",
    highlight: "Dynamic Island for everyone and the switch to USB-C.",
  },
  {
    id: "iphone-15-plus", name: "iPhone 15 Plus", year: 2023, chip: "Apple A16 Bionic",
    display: "6.7-inch Dynamic Island OLED", camera: "48MP main + 12MP UW", battery: "Up to 26 hrs video",
    colors: ["Black", "Blue", "Green", "Yellow", "Pink"], startingPrice: "$899", ios: "iOS 17", maxIOS: "iOS 18+",
    highlight: "The big-screen 15 with USB-C and class-leading battery life.",
  },
  {
    id: "iphone-15-pro", name: "iPhone 15 Pro", year: 2023, chip: "Apple A17 Pro",
    display: "6.1-inch Always-On ProMotion", camera: "48MP + 12MP UW + 3x Tele", battery: "Up to 23 hrs video",
    colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"], startingPrice: "$999", ios: "iOS 17", maxIOS: "iOS 18+",
    highlight: "Titanium frame, the Action Button, USB 3 speeds, and the A17 Pro.",
  },
  {
    id: "iphone-15-pro-max", name: "iPhone 15 Pro Max", year: 2023, chip: "Apple A17 Pro",
    display: "6.7-inch Always-On ProMotion", camera: "48MP + 12MP UW + 5x Tetraprism", battery: "Up to 29 hrs video",
    colors: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"], startingPrice: "$1,199", ios: "iOS 17", maxIOS: "iOS 18+",
    highlight: "First 5x tetraprism telephoto, titanium build, and the Action Button.",
  },
  {
    id: "iphone-16", name: "iPhone 16", year: 2024, chip: "Apple A18",
    display: "6.1-inch Super Retina XDR OLED", camera: "48MP Fusion + 12MP UW", battery: "Up to 22 hrs video",
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"], startingPrice: "$799", ios: "iOS 18", maxIOS: "iOS 18+",
    highlight: "Camera Control button, Apple Intelligence, and the A18 chip.",
  },
  {
    id: "iphone-16-plus", name: "iPhone 16 Plus", year: 2024, chip: "Apple A18",
    display: "6.7-inch Super Retina XDR OLED", camera: "48MP Fusion + 12MP UW", battery: "Up to 27 hrs video",
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"], startingPrice: "$899", ios: "iOS 18", maxIOS: "iOS 18+",
    highlight: "The large 16 with Camera Control and excellent battery life.",
  },
  {
    id: "iphone-16-pro", name: "iPhone 16 Pro", year: 2024, chip: "Apple A18 Pro",
    display: "6.3-inch Always-On ProMotion", camera: "48MP Fusion + 48MP UW + 5x Tele", battery: "Up to 27 hrs video",
    colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"], startingPrice: "$999", ios: "iOS 18", maxIOS: "iOS 18+",
    highlight: "Larger 6.3-inch display, 4K 120fps video, and Camera Control.",
  },
  {
    id: "iphone-16-pro-max", name: "iPhone 16 Pro Max", year: 2024, chip: "Apple A18 Pro",
    display: "6.9-inch Always-On ProMotion", camera: "48MP Fusion + 48MP UW + 5x Tele", battery: "Up to 33 hrs video",
    colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"], startingPrice: "$1,199", ios: "iOS 18", maxIOS: "iOS 18+",
    highlight: "The biggest iPhone display ever and the longest battery life in the lineup.",
  },
  {
    id: "iphone-16e", name: "iPhone 16e", year: 2025, chip: "Apple A18",
    display: "6.1-inch Super Retina XDR OLED", camera: "48MP Fusion single", battery: "Up to 26 hrs video",
    colors: ["Black", "White"], startingPrice: "$599", ios: "iOS 18", maxIOS: "iOS 18+",
    highlight: "The budget model replacing the SE — A18, Apple Intelligence, and Apple’s first in-house C1 modem.",
  },
  {
    id: "iphone-17", name: "iPhone 17", year: 2025, chip: "Apple A19",
    display: "6.3-inch ProMotion 120Hz OLED", camera: "48MP Fusion + 48MP UW", battery: "Up to 30 hrs video",
    colors: ["Black", "White", "Sage", "Mist Blue", "Lavender"], startingPrice: "$799", ios: "iOS 26", maxIOS: "iOS 26+",
    highlight: "ProMotion finally comes to the standard model, with a bigger 6.3-inch display.",
    isNew: true,
  },
  {
    id: "iphone-17-pro", name: "iPhone 17 Pro", year: 2025, chip: "Apple A19 Pro",
    display: "6.3-inch Always-On ProMotion", camera: "48MP triple Fusion + 8x Tele", battery: "Up to 33 hrs video",
    colors: ["Silver", "Cosmic Orange", "Deep Blue"], startingPrice: "$1,099", ios: "iOS 26", maxIOS: "iOS 26+",
    highlight: "Redesigned aluminum unibody, vapor chamber cooling, and an 8x telephoto.",
    isNew: true,
  },
];
