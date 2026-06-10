import { useState } from "react";

// Apple Accessibility — The most comprehensive guide to Apple's accessibility features

const visionFeatures = [
  { name: "VoiceOver", description: "Screen reader that describes everything on screen. Works with gestures on iPhone, keyboard on Mac. Supports braille displays.", category: "Blindness", platforms: ["iPhone", "iPad", "Mac", "Apple Watch", "Apple TV"] },
  { name: "Magnifier", description: "Turn your iPhone into a digital magnifying glass. Detection Mode identifies doors, people, text, and objects around you.", category: "Low Vision", platforms: ["iPhone", "iPad"] },
  { name: "Zoom", description: "Full-screen or window zoom up to 1500%. Works everywhere including third-party apps. Picture-in-picture zoom.", category: "Low Vision", platforms: ["iPhone", "iPad", "Mac", "Apple Watch"] },
  { name: "Display Accommodations", description: "Color filters for color blindness, reduce white point, smart invert colors, increase contrast.", category: "Low Vision", platforms: ["iPhone", "iPad", "Mac"] },
  { name: "Larger Text", description: "Dynamic Type scales text across all apps that support it. Up to 310% larger than default.", category: "Low Vision", platforms: ["iPhone", "iPad", "Mac"] },
  { name: "Hover Text", description: "Hold Command key and hover over any text to see it enlarged in a dedicated window.", category: "Low Vision", platforms: ["Mac"] },
  { name: "Spoken Content", description: "Speak Screen reads entire pages. Speak Selection reads highlighted text. Typing Feedback speaks each character.", category: "Low Vision", platforms: ["iPhone", "iPad", "Mac"] },
  { name: "Audio Descriptions", description: "Narrated descriptions of visual content in movies and TV shows. Available in Apple TV+ content.", category: "Blindness", platforms: ["iPhone", "iPad", "Mac", "Apple TV"] },
  { name: "Point and Speak", description: "Point iPhone camera at physical objects (appliances, keypads) and VoiceOver reads the labels aloud.", category: "Blindness", platforms: ["iPhone"] },
  { name: "Personal Voice", description: "Create a synthesized voice that sounds like you. Type to speak in your own voice during FaceTime calls.", category: "Speech", platforms: ["iPhone", "iPad", "Mac"] },
];

const hearingFeatures = [
  { name: "Made for iPhone Hearing Aids", description: "Stream audio directly to compatible hearing aids. Adjust volume and EQ per ear. Live Listen uses iPhone mic.", category: "Hearing Loss", platforms: ["iPhone", "iPad"] },
  { name: "Sound Recognition", description: "iPhone listens for specific sounds (doorbell, baby crying, fire alarm, dog barking) and sends notifications.", category: "Deafness", platforms: ["iPhone", "iPad", "Mac"] },
  { name: "Live Captions", description: "Real-time captions for any audio — FaceTime calls, videos, podcasts, in-person conversations. On-device processing.", category: "Deafness", platforms: ["iPhone", "iPad", "Mac"] },
  { name: "Conversation Boost", description: "AirPods Pro focus on the person in front of you, reducing background noise. Computational audio beamforming.", category: "Hearing Loss", platforms: ["AirPods Pro"] },
  { name: "Headphone Accommodations", description: "Amplify soft sounds, adjust frequencies for your hearing profile. Custom audio based on audiogram.", category: "Hearing Loss", platforms: ["iPhone", "iPad", "Mac"] },
  { name: "Background Sounds", description: "Play rain, ocean, stream, or noise to mask distracting environmental sounds. Mixes with other audio.", category: "Sensory", platforms: ["iPhone", "iPad", "Mac"] },
  { name: "Hearing Test (AirPods Pro 2)", description: "Clinical-grade hearing test using AirPods Pro 2. Creates personalized hearing profile. FDA-cleared.", category: "Hearing Loss", platforms: ["iPhone"] },
  { name: "Hearing Aid Mode (AirPods Pro 2)", description: "AirPods Pro 2 function as over-the-counter hearing aids. Amplify sounds based on your hearing test results.", category: "Hearing Loss", platforms: ["iPhone"] },
];

const motorFeatures = [
  { name: "AssistiveTouch", description: "On-screen menu for common actions. Customize gestures. Use head movements or external switches to control iPhone.", category: "Limited Mobility", platforms: ["iPhone", "iPad", "Apple Watch"] },
  { name: "Switch Control", description: "Control your entire device with one or more switches. Scanning interface, head tracking, or external Bluetooth switches.", category: "Limited Mobility", platforms: ["iPhone", "iPad", "Mac"] },
  { name: "Voice Control", description: "Control your device entirely by voice. Dictate text, navigate UI, tap buttons, swipe, and use complex gestures — all hands-free.", category: "Limited Mobility", platforms: ["iPhone", "iPad", "Mac"] },
  { name: "Eye Tracking", description: "Control iPhone and iPad with just your eyes using the front camera. No additional hardware needed. Dwell to select.", category: "Limited Mobility", platforms: ["iPhone", "iPad"] },
  { name: "Dwell Control", description: "Hover the pointer over an element for a set duration to click. Configurable dwell time and action.", category: "Limited Mobility", platforms: ["Mac"] },
  { name: "Keyboard Shortcuts", description: "Full keyboard navigation for all UI elements. Custom shortcuts for any action. Sticky keys, slow keys, mouse keys.", category: "Limited Mobility", platforms: ["Mac"] },
  { name: "Back Tap", description: "Double-tap or triple-tap the back of iPhone to trigger custom actions: screenshot, Control Center, Shortcuts, accessibility features.", category: "Limited Mobility", platforms: ["iPhone"] },
  { name: "Touch Accommodations", description: "Adjust how the screen responds to touch. Hold duration, ignore repeats, tap assistance for tremors.", category: "Limited Mobility", platforms: ["iPhone", "iPad"] },
  { name: "Adaptive Accessories", description: "Connect game controllers, switches, or custom hardware via Bluetooth. Map any action to any button.", category: "Limited Mobility", platforms: ["iPhone", "iPad", "Mac", "Apple TV"] },
];

const cognitiveFeatures = [
  { name: "Assistive Access", description: "Simplified interface with large buttons, high contrast, and limited app selection. Designed for cognitive disabilities.", category: "Cognitive", platforms: ["iPhone", "iPad"] },
  { name: "Guided Access", description: "Lock iPhone to a single app. Disable specific screen areas, buttons, or motion. Perfect for focus or shared devices.", category: "Focus", platforms: ["iPhone", "iPad"] },
  { name: "Reduce Motion", description: "Minimize animations and parallax effects. Crossfade transitions instead of zoom. Reduces motion sickness.", category: "Sensory", platforms: ["iPhone", "iPad", "Mac"] },
  { name: "Focus Modes", description: "Filter notifications and apps by context (Work, Personal, Sleep). Reduce cognitive load by showing only relevant content.", category: "Focus", platforms: ["iPhone", "iPad", "Mac", "Apple Watch"] },
  { name: "Siri Shortcuts", description: "Automate complex multi-step tasks into a single voice command or button press. Reduce cognitive steps.", category: "Cognitive", platforms: ["iPhone", "iPad", "Mac", "Apple Watch"] },
  { name: "Reading Content", description: "Safari Reader strips ads and distractions. Adjustable font, size, and background. Reduces cognitive load.", category: "Reading", platforms: ["iPhone", "iPad", "Mac"] },
];

const developerGuidelines = [
  { guideline: "Support Dynamic Type", description: "Use system fonts and text styles. Test at all accessibility sizes (up to 310%). Ensure layout doesn't break." },
  { guideline: "Label all interactive elements", description: "Every button, image, and control needs an accessibility label. VoiceOver users can't see your icons." },
  { guideline: "Support VoiceOver navigation", description: "Ensure logical reading order. Group related elements. Use accessibility traits (button, header, link)." },
  { guideline: "Provide sufficient color contrast", description: "Minimum 4.5:1 for normal text, 3:1 for large text. Don't convey information by color alone." },
  { guideline: "Support Reduce Motion", description: "Check UIAccessibility.isReduceMotionEnabled. Replace animations with crossfades or remove them entirely." },
  { guideline: "Support Bold Text", description: "Use system font weights. When Bold Text is enabled, all text should appear bolder." },
  { guideline: "Test with VoiceOver", description: "Navigate your entire app with VoiceOver enabled. Every screen should be fully usable without seeing." },
  { guideline: "Support Switch Control", description: "Ensure all interactive elements are reachable via scanning. Test with external switches." },
  { guideline: "Provide haptic feedback", description: "Use UIFeedbackGenerator for confirmations, errors, and selections. Haptics help when visual/audio is limited." },
  { guideline: "Support keyboard navigation (Mac)", description: "Every control must be reachable via Tab. Show focus rings. Support standard keyboard shortcuts." },
];

const timeline = [
  { year: 2009, feature: "VoiceOver on iPhone", impact: "First smartphone fully accessible to blind users out of the box" },
  { year: 2011, feature: "AssistiveTouch", impact: "Physical button alternatives for users with motor disabilities" },
  { year: 2013, feature: "Switch Control", impact: "Full device control with external switches for severe motor disabilities" },
  { year: 2014, feature: "Made for iPhone Hearing Aids", impact: "Direct audio streaming to hearing aids without intermediary devices" },
  { year: 2016, feature: "Magnifier app", impact: "iPhone camera as a digital magnifying glass for low vision" },
  { year: 2017, feature: "Smart Invert Colors", impact: "Intelligent dark mode that preserves image colors" },
  { year: 2019, feature: "Voice Control", impact: "Complete hands-free device control with custom vocabulary" },
  { year: 2020, feature: "Sound Recognition", impact: "iPhone alerts deaf users to important environmental sounds" },
  { year: 2021, feature: "Background Sounds", impact: "Built-in ambient sounds for focus and sensory regulation" },
  { year: 2022, feature: "Door Detection", impact: "iPhone identifies doors and reads signs for blind navigation" },
  { year: 2023, feature: "Personal Voice & Live Speech", impact: "Users at risk of losing speech can create a synthetic voice" },
  { year: 2023, feature: "Assistive Access", impact: "Simplified interface for cognitive disabilities" },
  { year: 2024, feature: "Eye Tracking", impact: "Control iPhone with eyes alone — no additional hardware" },
  { year: 2024, feature: "Music Haptics", impact: "Feel music through iPhone's Taptic Engine for deaf users" },
  { year: 2024, feature: "Hearing Aid Mode (AirPods Pro 2)", impact: "FDA-cleared OTC hearing aids built into AirPods" },
  { year: 2025, feature: "Live Captions everywhere", impact: "Real-time captions for all audio across all apps" },
];

export default function Accessibility() {
  const [activeCategory, setActiveCategory] = useState<"vision" | "hearing" | "motor" | "cognitive">("vision");

  const features = activeCategory === "vision" ? visionFeatures :
                   activeCategory === "hearing" ? hearingFeatures :
                   activeCategory === "motor" ? motorFeatures : cognitiveFeatures;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-purple-900/20" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20 mb-4">
            Accessibility
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Technology for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">everyone.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Apple builds accessibility into every product from the start — not as an afterthought. 
            Explore every feature designed to make technology usable by all.
          </p>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 justify-center mb-8">
            {[
              { key: "vision", label: "Vision", count: visionFeatures.length },
              { key: "hearing", label: "Hearing", count: hearingFeatures.length },
              { key: "motor", label: "Motor", count: motorFeatures.length },
              { key: "cognitive", label: "Cognitive", count: cognitiveFeatures.length },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key as typeof activeCategory)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCategory === tab.key
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/30"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map(f => (
              <div key={f.name} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-sm">{f.name}</h3>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-300">{f.category}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{f.description}</p>
                <div className="flex flex-wrap gap-1">
                  {f.platforms.map(p => (
                    <span key={p} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground">{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Accessibility Timeline</h2>
          <div className="space-y-2">
            {timeline.map(t => (
              <div key={t.feature} className="p-3 rounded-lg border border-border/30 bg-white/[0.02] flex gap-4 items-start">
                <span className="text-xs font-bold text-blue-400 w-10 flex-shrink-0">{t.year}</span>
                <div>
                  <p className="text-xs font-medium">{t.feature}</p>
                  <p className="text-[10px] text-muted-foreground">{t.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Guidelines */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Developer Guidelines</h2>
          <p className="text-center text-muted-foreground text-sm mb-6">Building accessible iOS/macOS apps — Apple's requirements and best practices</p>
          <div className="space-y-2">
            {developerGuidelines.map(g => (
              <div key={g.guideline} className="p-3 rounded-lg border border-border/30 bg-white/[0.02]">
                <h3 className="text-xs font-bold text-blue-400">{g.guideline}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
