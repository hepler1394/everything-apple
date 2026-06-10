import { useState } from "react";

// Apple Developer Tools & Resources
// Everything developers need to build for Apple platforms

interface DevTool {
  id: number;
  name: string;
  description: string;
  features: string[];
  platforms: string[];
  pricing: string;
  category: "ide" | "framework" | "testing" | "distribution" | "design" | "performance" | "api";
  url: string;
}

const DEV_TOOLS: DevTool[] = [
  {
    id: 1,
    name: "Xcode 18",
    description: "Apple's integrated development environment with AI-powered coding assistant, Interface Builder, and comprehensive debugging tools.",
    features: [
      "AI code completion powered by on-device LLM",
      "SwiftUI live preview with interactive canvas",
      "Interface Builder for UIKit storyboards",
      "Integrated debugger with LLDB",
      "Memory graph debugger for leak detection",
      "Network inspector for API debugging",
      "Git integration with visual diff",
      "Simulator for all Apple devices",
      "Instruments for performance profiling",
      "Asset catalog management",
      "Localization workflow",
      "TestFlight integration for beta distribution"
    ],
    platforms: ["macOS"],
    pricing: "Free",
    category: "ide",
    url: "https://developer.apple.com/xcode/"
  },
  {
    id: 2,
    name: "SwiftUI",
    description: "Declarative UI framework for building apps across all Apple platforms with a single codebase.",
    features: [
      "Declarative syntax: describe what UI should look like",
      "Live previews in Xcode canvas",
      "Automatic support for Dark Mode, Dynamic Type, localization",
      "Built-in animations and transitions",
      "Cross-platform: iOS, macOS, watchOS, tvOS, visionOS",
      "Interoperable with UIKit and AppKit",
      "State management with @State, @Binding, @Observable",
      "Navigation stack and split view APIs",
      "Charts framework for data visualization",
      "MapKit integration"
    ],
    platforms: ["iOS", "macOS", "watchOS", "tvOS", "visionOS"],
    pricing: "Free",
    category: "framework",
    url: "https://developer.apple.com/swiftui/"
  },
  {
    id: 3,
    name: "TestFlight",
    description: "Beta testing platform for distributing pre-release apps to up to 10,000 testers.",
    features: [
      "Distribute beta builds to up to 10,000 external testers",
      "Internal testing for team members (up to 100)",
      "Automatic crash reports and feedback",
      "Testers can submit screenshots with feedback",
      "Multiple build groups for A/B testing",
      "Automatic updates when new builds are uploaded",
      "90-day build expiration",
      "Works on iOS, macOS, watchOS, tvOS, visionOS"
    ],
    platforms: ["iOS", "macOS", "watchOS", "tvOS", "visionOS"],
    pricing: "Free (requires Apple Developer Program)",
    category: "distribution",
    url: "https://developer.apple.com/testflight/"
  },
  {
    id: 4,
    name: "Instruments",
    description: "Performance analysis and profiling tool for finding bottlenecks, memory leaks, and energy issues.",
    features: [
      "Time Profiler: find slow functions and methods",
      "Allocations: track memory usage over time",
      "Leaks: detect memory leaks automatically",
      "Energy Log: measure battery impact",
      "Network: monitor HTTP requests and bandwidth",
      "Core Animation: measure frame rate and GPU usage",
      "System Trace: low-level thread and process analysis",
      "Metal System Trace: GPU pipeline analysis",
      "Custom instruments with os_signpost",
      "Record and compare multiple runs"
    ],
    platforms: ["macOS"],
    pricing: "Free (included with Xcode)",
    category: "performance",
    url: "https://developer.apple.com/instruments/"
  },
  {
    id: 5,
    name: "Swift Package Manager",
    description: "Official dependency manager for Swift, integrated directly into Xcode.",
    features: [
      "Declare dependencies in Package.swift manifest",
      "Automatic resolution of transitive dependencies",
      "Semantic versioning support",
      "Local package development",
      "Binary framework distribution (XCFramework)",
      "Plugin system for build tools and commands",
      "Integrated into Xcode project navigator",
      "Works with GitHub, GitLab, and custom registries"
    ],
    platforms: ["macOS", "Linux"],
    pricing: "Free",
    category: "framework",
    url: "https://www.swift.org/package-manager/"
  },
  {
    id: 6,
    name: "Reality Composer Pro",
    description: "3D content creation tool for building immersive experiences for Apple Vision Pro.",
    features: [
      "Visual 3D scene editor",
      "Import USDZ, glTF, and OBJ models",
      "Particle effects system",
      "Physics simulation",
      "Spatial audio placement",
      "Material editor with PBR workflows",
      "Animation timeline",
      "Preview directly on Vision Pro",
      "Integration with RealityKit framework",
      "Collaboration with Blender and Maya workflows"
    ],
    platforms: ["macOS", "visionOS"],
    pricing: "Free",
    category: "design",
    url: "https://developer.apple.com/augmented-reality/tools/"
  },
  {
    id: 7,
    name: "Core ML",
    description: "Machine learning framework for running trained models on-device with hardware acceleration.",
    features: [
      "Run ML models on-device (no internet required)",
      "Automatic hardware optimization (CPU, GPU, Neural Engine)",
      "Support for vision, NLP, sound, and tabular models",
      "Convert models from PyTorch, TensorFlow, scikit-learn",
      "Create ML app for training without code",
      "Model compression for smaller app size",
      "On-device training for personalization",
      "Async prediction API for non-blocking inference"
    ],
    platforms: ["iOS", "macOS", "watchOS", "tvOS", "visionOS"],
    pricing: "Free",
    category: "api",
    url: "https://developer.apple.com/machine-learning/"
  },
  {
    id: 8,
    name: "App Store Connect",
    description: "Manage your apps on the App Store: submit builds, manage metadata, view analytics, and handle payments.",
    features: [
      "Submit app builds for review",
      "Manage app metadata, screenshots, and descriptions",
      "App Analytics: downloads, usage, crashes, revenue",
      "In-App Purchase and subscription management",
      "Pricing and availability by region",
      "App Clips configuration",
      "Custom product pages for A/B testing",
      "Pre-orders and phased releases",
      "Developer response to reviews",
      "Financial reports and payment processing"
    ],
    platforms: ["Web", "iOS", "macOS"],
    pricing: "$99/year (Apple Developer Program)",
    category: "distribution",
    url: "https://appstoreconnect.apple.com/"
  },
  {
    id: 9,
    name: "Game Porting Toolkit 3",
    description: "Translate Windows DirectX games to Metal for Mac with minimal code changes.",
    features: [
      "DirectX 12 to Metal translation layer",
      "Run unmodified Windows game executables for evaluation",
      "Performance profiling specific to Metal",
      "Shader conversion tools",
      "Input mapping for Mac keyboards and controllers",
      "Audio translation from DirectSound/XAudio2",
      "Supports ray tracing via Metal 3",
      "Integration with Xcode for native port development"
    ],
    platforms: ["macOS"],
    pricing: "Free",
    category: "framework",
    url: "https://developer.apple.com/games/"
  },
  {
    id: 10,
    name: "CloudKit",
    description: "Apple's cloud database and storage service for syncing app data across devices.",
    features: [
      "Public and private databases",
      "Automatic sync across user devices via iCloud",
      "Push notifications on data changes",
      "Structured data with records and zones",
      "Asset storage for files and images",
      "Sharing: share records between users",
      "Server-to-server API for web backends",
      "CloudKit Console for database management",
      "Generous free tier: 1GB asset storage, 100MB database"
    ],
    platforms: ["iOS", "macOS", "watchOS", "tvOS", "Web"],
    pricing: "Free tier included; scales with usage",
    category: "api",
    url: "https://developer.apple.com/icloud/cloudkit/"
  },
];

const CATEGORY_META: Record<string, { label: string; color: string }> = {
  ide: { label: "IDE", color: "text-blue-400" },
  framework: { label: "Framework", color: "text-purple-400" },
  testing: { label: "Testing", color: "text-green-400" },
  distribution: { label: "Distribution", color: "text-orange-400" },
  design: { label: "Design", color: "text-pink-400" },
  performance: { label: "Performance", color: "text-red-400" },
  api: { label: "API & Services", color: "text-cyan-400" },
};

export default function DeveloperTools() {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = categoryFilter === "all"
    ? DEV_TOOLS
    : DEV_TOOLS.filter(t => t.category === categoryFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Build for Apple</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Developer Tools</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Every tool, framework, and service Apple provides for developers. 
            From Xcode to CloudKit — everything you need to ship apps.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 px-4 border-y border-border/30 sticky top-[44px] z-20 bg-background/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setCategoryFilter("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              categoryFilter === "all" ? "bg-cyan-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
            }`}
          >
            All ({DEV_TOOLS.length})
          </button>
          {Object.entries(CATEGORY_META).map(([key, meta]) => {
            const count = DEV_TOOLS.filter(t => t.category === key).length;
            if (count === 0) return null;
            return (
              <button
                key={key}
                onClick={() => setCategoryFilter(key)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  categoryFilter === key ? "bg-cyan-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/50"
                }`}
              >
                {meta.label} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Tools */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-3">
          {filtered.map(tool => {
            const isExpanded = expandedId === tool.id;
            const catMeta = CATEGORY_META[tool.category];
            return (
              <div
                key={tool.id}
                className="rounded-xl border border-border/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden cursor-pointer"
                onClick={() => setExpandedId(isExpanded ? null : tool.id)}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`text-xs ${catMeta.color}`}>{catMeta.label}</span>
                        <span className="text-[10px] text-muted-foreground">{tool.pricing}</span>
                      </div>
                      <h3 className="text-lg font-bold mt-1">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {tool.platforms.map(p => (
                          <span key={p} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground border border-border/30">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                    <svg className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-border/20 pt-4">
                    <h4 className="text-sm font-semibold mb-3 text-cyan-400">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {tool.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm text-cyan-400 hover:text-cyan-300 underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Learn more on Apple Developer
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02] text-center">
              <p className="text-2xl font-bold text-cyan-400 mb-2">1</p>
              <h3 className="font-semibold text-sm mb-1">Install Xcode</h3>
              <p className="text-xs text-muted-foreground">Download from Mac App Store. Includes all SDKs and simulators.</p>
            </div>
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02] text-center">
              <p className="text-2xl font-bold text-cyan-400 mb-2">2</p>
              <h3 className="font-semibold text-sm mb-1">Learn Swift</h3>
              <p className="text-xs text-muted-foreground">Apple's modern programming language. Start with Swift Playgrounds on iPad.</p>
            </div>
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02] text-center">
              <p className="text-2xl font-bold text-cyan-400 mb-2">3</p>
              <h3 className="font-semibold text-sm mb-1">Build with SwiftUI</h3>
              <p className="text-xs text-muted-foreground">Declarative UI framework. One codebase for all Apple platforms.</p>
            </div>
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02] text-center">
              <p className="text-2xl font-bold text-cyan-400 mb-2">4</p>
              <h3 className="font-semibold text-sm mb-1">Ship to App Store</h3>
              <p className="text-xs text-muted-foreground">Join Apple Developer Program ($99/yr) and submit via App Store Connect.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
