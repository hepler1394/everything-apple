import { useState } from "react";

// Apple HomeKit & Smart Home — Complete guide to building an Apple-powered smart home

const homeKitCategories = [
  {
    name: "Lighting",
    devices: [
      { brand: "Philips Hue", product: "Starter Kit (4 bulbs + bridge)", price: "$179", rating: 4.8, features: ["16M colors", "Thread/Zigbee", "Scenes", "Automations"] },
      { brand: "Nanoleaf", product: "Shapes Hexagons (9 panels)", price: "$199", rating: 4.6, features: ["Touch reactive", "Music sync", "Thread", "Screen mirror"] },
      { brand: "LIFX", product: "A19 Color Bulb", price: "$39", rating: 4.5, features: ["No hub needed", "Wi-Fi direct", "1600 lumens", "HomeKit native"] },
      { brand: "Eve", product: "Light Strip (6.6ft)", price: "$49", rating: 4.4, features: ["Thread", "No cloud", "Adaptive lighting", "Full color"] },
      { brand: "Lutron Caseta", product: "Smart Dimmer Switch", price: "$59", rating: 4.9, features: ["Works with existing bulbs", "Pico remote", "Clear Connect RF", "Rock solid reliability"] },
    ]
  },
  {
    name: "Security",
    devices: [
      { brand: "Eve", product: "Outdoor Cam", price: "$249", rating: 4.5, features: ["HomeKit Secure Video", "No subscription", "Thread", "Local processing"] },
      { brand: "Logitech", product: "Circle View Doorbell", price: "$199", rating: 4.3, features: ["HomeKit Secure Video", "Head-to-toe view", "Face recognition", "Night vision"] },
      { brand: "Aqara", product: "Camera Hub G3", price: "$109", rating: 4.4, features: ["HomeKit Secure Video", "Zigbee hub", "Pan/tilt", "AI gestures"] },
      { brand: "Yale", product: "Assure Lock 2", price: "$279", rating: 4.6, features: ["Home Key (NFC)", "Auto-lock", "DoorSense", "Thread/Wi-Fi"] },
      { brand: "Level", product: "Lock+", price: "$329", rating: 4.5, features: ["Home Key", "Invisible design", "Auto-unlock", "HomeKit native"] },
    ]
  },
  {
    name: "Climate",
    devices: [
      { brand: "ecobee", product: "Smart Thermostat Premium", price: "$249", rating: 4.7, features: ["HomeKit native", "Room sensors", "Built-in Siri", "Air quality monitor"] },
      { brand: "Eve", product: "Thermo (Radiator Valve)", price: "$79", rating: 4.3, features: ["Thread", "No cloud", "Schedules", "Window detection"] },
      { brand: "Dyson", product: "Purifier Hot+Cool", price: "$569", rating: 4.5, features: ["HomeKit", "HEPA filter", "Heat + cool", "Air quality sensors"] },
      { brand: "Vocolinc", product: "Smart AC Controller", price: "$49", rating: 4.2, features: ["HomeKit native", "IR blaster", "Temperature sensor", "Schedules"] },
    ]
  },
  {
    name: "Sensors",
    devices: [
      { brand: "Eve", product: "Door & Window Sensor", price: "$39", rating: 4.6, features: ["Thread", "No cloud", "Instant alerts", "Automation trigger"] },
      { brand: "Eve", product: "Motion Sensor", price: "$39", rating: 4.5, features: ["Thread", "IPX3 rated", "Light level sensor", "No cloud"] },
      { brand: "Aqara", product: "Water Leak Sensor", price: "$19", rating: 4.7, features: ["Zigbee", "IP67", "Instant alerts", "Long battery"] },
      { brand: "Eve", product: "Room (Air Quality)", price: "$99", rating: 4.4, features: ["Thread", "VOC/temp/humidity", "No cloud", "Historical data"] },
      { brand: "Aqara", product: "Temperature & Humidity Sensor", price: "$15", rating: 4.6, features: ["Zigbee", "E-ink display", "2-year battery", "Automation trigger"] },
    ]
  },
  {
    name: "Entertainment",
    devices: [
      { brand: "Apple", product: "HomePod (2nd gen)", price: "$299", rating: 4.6, features: ["Spatial Audio", "Home hub", "Thread border router", "Temperature sensor"] },
      { brand: "Apple", product: "HomePod mini", price: "$99", rating: 4.5, features: ["Siri", "Thread border router", "Intercom", "Handoff"] },
      { brand: "Apple", product: "Apple TV 4K", price: "$129", rating: 4.8, features: ["Home hub", "Thread border router", "tvOS apps", "AirPlay receiver"] },
      { brand: "Sonos", product: "Era 300", price: "$449", rating: 4.7, features: ["AirPlay 2", "Spatial Audio", "Trueplay tuning", "Voice control"] },
    ]
  },
  {
    name: "Power & Plugs",
    devices: [
      { brand: "Eve", product: "Energy (Smart Plug)", price: "$39", rating: 4.5, features: ["Thread", "Energy monitoring", "No cloud", "Schedules"] },
      { brand: "Wemo", product: "Smart Plug with Thread", price: "$24", rating: 4.3, features: ["Thread", "Compact design", "Away mode", "HomeKit native"] },
      { brand: "Meross", product: "Smart Power Strip", price: "$35", rating: 4.4, features: ["4 outlets + USB", "Individual control", "HomeKit native", "Energy monitoring"] },
      { brand: "ConnectSense", product: "Smart Outlet 2", price: "$59", rating: 4.2, features: ["In-wall", "Energy monitoring", "HomeKit native", "Two outlets"] },
    ]
  },
];

const automationIdeas = [
  { name: "Good Morning", trigger: "First person arrives home OR alarm dismissed", actions: ["Turn on kitchen lights to 60%", "Set thermostat to 72°F", "Play morning playlist on HomePod", "Unlock front door"] },
  { name: "Leaving Home", trigger: "Last person leaves", actions: ["Turn off all lights", "Lock all doors", "Set thermostat to eco mode", "Arm security cameras", "Close garage door"] },
  { name: "Movie Night", trigger: "Hey Siri, movie time", actions: ["Dim living room to 10%", "Turn on bias lighting behind TV", "Close blinds", "Set Apple TV to Cinema mode"] },
  { name: "Bedtime", trigger: "Bedtime schedule activates", actions: ["Turn off all lights except bedroom", "Lock front door", "Set thermostat to 68°F", "Enable Do Not Disturb", "Play white noise on bedroom HomePod"] },
  { name: "Someone at Door", trigger: "Doorbell pressed OR motion at door", actions: ["Show camera feed on Apple TV", "Flash hallway lights", "Send notification with snapshot", "If after 10pm, turn on porch light"] },
  { name: "Water Leak Detected", trigger: "Water sensor triggered", actions: ["Send critical alert to all family", "Turn off smart water valve", "Flash all lights red 3 times", "Play alert on all HomePods"] },
  { name: "Sunrise Simulation", trigger: "30 minutes before alarm", actions: ["Gradually increase bedroom light from 0% to 50% over 30 min", "Shift color from warm red to daylight white", "Start coffee maker at 80% brightness"] },
  { name: "Focus Mode Sync", trigger: "Work Focus activates on iPhone", actions: ["Turn on desk lamp", "Set office thermostat to 70°F", "Mute living room HomePod", "Set office lights to cool white"] },
];

const matterDevices = [
  "All Thread devices (Eve, Nanoleaf, Wemo)",
  "Amazon Echo (4th gen+)",
  "Google Nest Hub/Thermostat",
  "Samsung SmartThings",
  "IKEA DIRIGERA hub",
  "Aqara M2/M3 hubs",
  "TP-Link Tapo/Kasa",
  "Meross smart plugs",
  "Yale/August locks",
  "Nanoleaf Essentials",
];

const threadInfo = [
  { aspect: "What is Thread?", answer: "A low-power mesh networking protocol. Devices relay signals to each other, extending range and improving reliability." },
  { aspect: "Why does it matter?", answer: "No Wi-Fi congestion, instant response times (<100ms), self-healing mesh, and works even if your internet goes down." },
  { aspect: "Border Routers", answer: "HomePod mini, HomePod 2nd gen, and Apple TV 4K act as Thread border routers — connecting Thread devices to your home network." },
  { aspect: "Range", answer: "Each Thread device extends the mesh. A typical home with 10+ Thread devices has complete coverage with zero dead spots." },
  { aspect: "Battery Life", answer: "Thread devices use extremely low power. Sensors last 2-5 years on a single coin cell battery." },
  { aspect: "vs Wi-Fi", answer: "Thread: low power, mesh, no router congestion. Wi-Fi: high bandwidth (cameras/streaming), but drains batteries and congests networks." },
  { aspect: "vs Zigbee", answer: "Thread is IP-based (native internet protocol), Zigbee requires translation. Thread devices can communicate directly with your phone." },
];

const homeKeyInfo = {
  description: "Home Key lets you unlock your door by tapping your iPhone or Apple Watch to a compatible smart lock — just like Apple Pay.",
  features: [
    "Works in Wallet app alongside credit cards and transit passes",
    "Express Mode: unlock without Face ID/Touch ID (just tap)",
    "Works even when iPhone battery is dead (Power Reserve)",
    "Share keys with family members via Messages",
    "Set time-based access for guests",
    "NFC-based — works without internet connection",
  ],
  compatibleLocks: ["Yale Assure Lock 2", "Level Lock+", "Schlage Encode Plus", "Aqara U200"],
};

export default function SmartHome() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [showAllAutomations, setShowAllAutomations] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-background to-yellow-900/20" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium border border-orange-500/20 mb-4">
            Smart Home
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Your home, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">intelligent.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            HomeKit, Matter, Thread, and Home Key — build a smart home that's private, 
            reliable, and works seamlessly with iPhone, Apple Watch, and Siri.
          </p>
        </div>
      </section>

      {/* Home Key */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Home Key</h2>
          <p className="text-center text-sm text-muted-foreground mb-6">{homeKeyInfo.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-sm mb-3">Features</h3>
              <ul className="space-y-2">
                {homeKeyInfo.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <span className="text-orange-400 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-2xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold text-sm mb-3">Compatible Locks</h3>
              <div className="space-y-2">
                {homeKeyInfo.compatibleLocks.map((lock, i) => (
                  <div key={i} className="text-xs p-2 rounded-lg bg-white/5">{lock}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Categories */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">HomeKit Devices</h2>
          <p className="text-center text-muted-foreground text-sm mb-6">Our top picks for every room and category</p>
          
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {homeKitCategories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(i)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === i
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/30"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {homeKitCategories[activeCategory].devices.map(d => (
              <div key={d.product} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] text-muted-foreground">{d.brand}</p>
                    <h3 className="font-bold text-sm">{d.product}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-orange-400">{d.price}</span>
                    <p className="text-[10px] text-yellow-400">★ {d.rating}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {d.features.map((f, i) => (
                    <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automations */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Automation Ideas</h2>
          <div className="space-y-3">
            {automationIdeas.slice(0, showAllAutomations ? undefined : 4).map(auto => (
              <div key={auto.name} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-sm">{auto.name}</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/10 text-orange-300">Trigger: {auto.trigger}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {auto.actions.map((action, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className="text-green-400 text-[10px]">→</span>
                      {action}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {!showAllAutomations && (
            <button
              onClick={() => setShowAllAutomations(true)}
              className="mt-4 mx-auto block text-sm text-orange-400 hover:text-orange-300 transition-colors"
            >
              Show all {automationIdeas.length} automations →
            </button>
          )}
        </div>
      </section>

      {/* Thread */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Thread Networking</h2>
          <div className="space-y-3">
            {threadInfo.map(t => (
              <div key={t.aspect} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                <h3 className="font-bold text-sm text-orange-400">{t.aspect}</h3>
                <p className="text-xs text-muted-foreground mt-1">{t.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matter */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Matter Compatibility</h2>
          <p className="text-center text-muted-foreground text-sm mb-6">Matter is the universal smart home standard. Buy once, works everywhere — HomeKit, Alexa, Google Home.</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {matterDevices.map(d => (
              <span key={d} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-border/30">{d}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
