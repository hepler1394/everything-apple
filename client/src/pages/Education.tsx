import { useState } from "react";

// Apple in Education — iPad in schools, Mac for students, coding resources

const studentDeals = [
  { product: "MacBook Air M4", regularPrice: "$1,099", studentPrice: "$999", savings: "$100", includes: "Free AirPods 4" },
  { product: "MacBook Pro M4", regularPrice: "$1,599", studentPrice: "$1,499", savings: "$100", includes: "Free AirPods 4" },
  { product: "Mac Mini M4", regularPrice: "$599", studentPrice: "$499", savings: "$100", includes: "Free AirPods 4" },
  { product: "iMac M4", regularPrice: "$1,299", studentPrice: "$1,199", savings: "$100", includes: "Free AirPods 4" },
  { product: "iPad Air M3", regularPrice: "$599", studentPrice: "$549", savings: "$50", includes: "Free Apple Pencil" },
  { product: "iPad Pro M4", regularPrice: "$999", studentPrice: "$899", savings: "$100", includes: "Free Apple Pencil Pro" },
  { product: "Apple Music", regularPrice: "$10.99/mo", studentPrice: "$5.99/mo", savings: "45% off", includes: "Apple TV+ included" },
  { product: "Apple One", regularPrice: "$19.95/mo", studentPrice: "$11.99/mo", savings: "40% off", includes: "Music + TV+ + Arcade + iCloud 50GB" },
];

const codingResources = [
  { name: "Swift Playgrounds", platform: "iPad / Mac", level: "Beginner", description: "Learn Swift through interactive puzzles and guided lessons. Build real apps." },
  { name: "Xcode", platform: "Mac", level: "Intermediate-Advanced", description: "Apple's full IDE for building iOS, macOS, watchOS, and tvOS apps." },
  { name: "Everyone Can Code", platform: "iPad", level: "Beginner", description: "Apple's curriculum for K-12 schools. Teacher guides and student activities." },
  { name: "Apple Developer Tutorials", platform: "Web/Xcode", level: "Intermediate", description: "Step-by-step tutorials for SwiftUI, UIKit, ARKit, and more." },
  { name: "WWDC Sessions", platform: "Web/Apple Developer App", level: "All levels", description: "Hundreds of technical sessions from WWDC, searchable and transcribed." },
  { name: "Apple Developer Academy", platform: "In-person (global)", level: "All levels", description: "Free 9-month program in select cities. Learn app development and entrepreneurship." },
  { name: "App Development with Swift", platform: "Mac", level: "Intermediate", description: "College-level curriculum with certification. AP Computer Science aligned." },
  { name: "Reality Composer Pro", platform: "Mac", level: "Intermediate", description: "Build AR and visionOS experiences with 3D content and spatial computing." },
];

const classroomTools = [
  { name: "Apple School Manager", description: "IT admins manage devices, apps, and accounts for entire school districts. Zero-touch deployment.", category: "Administration" },
  { name: "Classroom App", description: "Teachers guide students through lessons, see their screens, open apps, and share documents in real-time.", category: "Teaching" },
  { name: "Schoolwork", description: "Teachers assign activities, track progress, and provide feedback. Students see all assignments in one place.", category: "Teaching" },
  { name: "Managed Apple IDs", description: "School-created Apple IDs with privacy controls. No personal data collection. 200GB iCloud storage.", category: "Administration" },
  { name: "Shared iPad", description: "Multiple students share one iPad with individual logins. Each student gets their own space.", category: "Device Management" },
  { name: "Apple Configurator", description: "Bulk configure and deploy iPads and Macs. Create blueprints and automate enrollment.", category: "IT" },
  { name: "Assessment Mode", description: "Lock iPad to a single app during tests. Prevents switching apps or accessing notifications.", category: "Testing" },
  { name: "Keynote / Pages / Numbers", description: "Free productivity suite for all students. Real-time collaboration and Apple Pencil support.", category: "Productivity" },
];

const creativeApps = [
  { name: "GarageBand", subject: "Music", description: "Record, mix, and produce music. Virtual instruments, loops, and lessons." },
  { name: "iMovie", subject: "Film", description: "Edit video with trailers, green screen, and picture-in-picture." },
  { name: "Clips", subject: "Media", description: "Create fun videos with animated text, stickers, and AR scenes." },
  { name: "Keynote", subject: "Presentations", description: "Create stunning presentations with animations and Apple Pencil drawings." },
  { name: "Freeform", subject: "Collaboration", description: "Infinite canvas for brainstorming, planning, and visual thinking." },
  { name: "Swift Playgrounds", subject: "Coding", description: "Learn to code with interactive Swift lessons and build real apps." },
  { name: "Reality Composer", subject: "AR/3D", description: "Build augmented reality experiences without code." },
  { name: "Pages", subject: "Writing", description: "Word processing with templates, drawing, and ebook publishing." },
];

const certifications = [
  { name: "Apple Certified Support Professional (ACSP)", description: "macOS troubleshooting and support for enterprise environments", duration: "Self-paced", cost: "$149 exam" },
  { name: "Apple Certified IT Professional", description: "Advanced macOS deployment, management, and security", duration: "Self-paced", cost: "$149 exam" },
  { name: "App Development with Swift Certified User", description: "Swift programming fundamentals and iOS app development", duration: "Semester course", cost: "Through school" },
  { name: "Apple Teacher", description: "Free program recognizing educators who use Apple products effectively", duration: "Self-paced", cost: "Free" },
  { name: "Apple Distinguished Educator", description: "Recognition for innovative educators who transform teaching with Apple tech", duration: "Application-based", cost: "Free" },
];

export default function Education() {
  const [activeSection, setActiveSection] = useState<"deals" | "coding" | "classroom" | "creative">("deals");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-green-900/20" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20 mb-4">
            Education
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Learn. Create. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Discover.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Student discounts, coding resources, classroom tools, and creative apps — 
            Apple's education ecosystem helps students and teachers do their best work.
          </p>
        </div>
      </section>

      {/* Section Tabs */}
      <section className="py-8 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 justify-center mb-8">
            {[
              { key: "deals", label: "Student Deals" },
              { key: "coding", label: "Learn to Code" },
              { key: "classroom", label: "Classroom Tools" },
              { key: "creative", label: "Creative Apps" },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveSection(tab.key as typeof activeSection)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeSection === tab.key
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Student Deals */}
          {activeSection === "deals" && (
            <div>
              <h2 className="text-2xl font-bold text-center mb-2">Education Pricing</h2>
              <p className="text-center text-muted-foreground text-sm mb-6">Available to college students, teachers, and education staff • Verify at apple.com/shop/education</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {studentDeals.map(deal => (
                  <div key={deal.product} className="p-4 rounded-xl border border-border/30 bg-white/[0.02] flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm">{deal.product}</h3>
                      <p className="text-xs text-muted-foreground"><s>{deal.regularPrice}</s> → <span className="text-green-400 font-bold">{deal.studentPrice}</span></p>
                      <p className="text-[10px] text-blue-400 mt-0.5">+ {deal.includes}</p>
                    </div>
                    <span className="text-sm font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded">-{deal.savings}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Coding Resources */}
          {activeSection === "coding" && (
            <div>
              <h2 className="text-2xl font-bold text-center mb-6">Learn to Code with Apple</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {codingResources.map(r => (
                  <div key={r.name} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-sm">{r.name}</h3>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-300">{r.level}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{r.platform}</p>
                    <p className="text-xs text-muted-foreground mt-1">{r.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Classroom Tools */}
          {activeSection === "classroom" && (
            <div>
              <h2 className="text-2xl font-bold text-center mb-6">Classroom & IT Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {classroomTools.map(tool => (
                  <div key={tool.name} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-sm">{tool.name}</h3>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-300">{tool.category}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Creative Apps */}
          {activeSection === "creative" && (
            <div>
              <h2 className="text-2xl font-bold text-center mb-6">Creative Apps for Students</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {creativeApps.map(app => (
                  <div key={app.name} className="p-4 rounded-xl border border-border/30 bg-white/[0.02] text-center">
                    <h3 className="font-bold text-sm">{app.name}</h3>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-300">{app.subject}</span>
                    <p className="text-xs text-muted-foreground mt-2">{app.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Apple Certifications</h2>
          <div className="space-y-3">
            {certifications.map(cert => (
              <div key={cert.name} className="p-4 rounded-xl border border-border/30 bg-white/[0.02] flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground">{cert.description}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{cert.duration}</p>
                </div>
                <span className="text-xs font-medium text-blue-400">{cert.cost}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
