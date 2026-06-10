import { useState } from "react";

// Apple Health & Fitness — Complete guide to Apple's health ecosystem

const healthFeatures = [
  {
    category: "Heart Health",
    features: [
      { name: "Heart Rate Monitoring", description: "Continuous heart rate tracking with resting, walking, workout, and recovery rates.", device: "Apple Watch" },
      { name: "ECG (Electrocardiogram)", description: "Single-lead ECG that can detect atrial fibrillation. FDA-cleared.", device: "Apple Watch Series 4+" },
      { name: "Irregular Rhythm Notifications", description: "Background monitoring alerts you to irregular heart rhythms suggestive of AFib.", device: "Apple Watch" },
      { name: "Cardio Fitness (VO2 Max)", description: "Estimates your cardiorespiratory fitness level and alerts if it drops to low range.", device: "Apple Watch" },
      { name: "High/Low Heart Rate Alerts", description: "Notifications when heart rate exceeds or drops below your configured thresholds.", device: "Apple Watch" },
    ]
  },
  {
    category: "Blood & Oxygen",
    features: [
      { name: "Blood Oxygen (SpO2)", description: "On-demand and background blood oxygen measurements using red and infrared LEDs.", device: "Apple Watch Series 6+" },
      { name: "Blood Pressure", description: "Wrist-based blood pressure monitoring with trend tracking and hypertension alerts.", device: "Apple Watch Series 11+" },
      { name: "Temperature Sensing", description: "Wrist temperature tracking for cycle tracking, illness detection, and sleep quality.", device: "Apple Watch Series 8+" },
    ]
  },
  {
    category: "Sleep",
    features: [
      { name: "Sleep Stages", description: "Tracks REM, Core, and Deep sleep stages using accelerometer and heart rate data.", device: "Apple Watch" },
      { name: "Sleep Apnea Detection", description: "Monitors breathing disturbances during sleep and alerts to potential sleep apnea.", device: "Apple Watch Series 10+" },
      { name: "Respiratory Rate", description: "Measures breaths per minute during sleep for respiratory health monitoring.", device: "Apple Watch" },
      { name: "Sleep Schedule", description: "Wind Down routines, bedtime reminders, and sleep goal tracking.", device: "iPhone + Apple Watch" },
    ]
  },
  {
    category: "Safety",
    features: [
      { name: "Fall Detection", description: "Detects hard falls and automatically calls emergency services if you're unresponsive for 60 seconds.", device: "Apple Watch" },
      { name: "Crash Detection", description: "Detects severe car crashes using accelerometer, gyroscope, barometer, and microphone.", device: "iPhone 14+ / Apple Watch" },
      { name: "Emergency SOS", description: "Press and hold side button to call emergency services. Works via satellite when no cell signal.", device: "iPhone / Apple Watch" },
      { name: "Medical ID", description: "Store allergies, medications, blood type, and emergency contacts accessible from lock screen.", device: "iPhone / Apple Watch" },
    ]
  },
  {
    category: "Women's Health",
    features: [
      { name: "Cycle Tracking", description: "Log periods, symptoms, and ovulation. Predictions improve with wrist temperature data.", device: "iPhone + Apple Watch" },
      { name: "Ovulation Estimates", description: "Retrospective ovulation estimates using temperature shift detection.", device: "Apple Watch Series 8+" },
      { name: "Cycle Deviations", description: "Alerts for irregular cycles, prolonged periods, or persistent spotting.", device: "iPhone" },
    ]
  },
  {
    category: "Mental Health",
    features: [
      { name: "State of Mind Logging", description: "Log your daily emotions and moods. See trends over time and correlations with activity.", device: "iPhone / Apple Watch" },
      { name: "Depression & Anxiety Screening", description: "Validated PHQ-9 and GAD-7 questionnaires available in the Health app.", device: "iPhone" },
      { name: "Daylight Tracking", description: "Measures time spent in daylight — linked to better mood, sleep, and vitamin D.", device: "Apple Watch" },
      { name: "Mindfulness Minutes", description: "Track meditation and breathing exercises. Integrates with third-party apps.", device: "Apple Watch" },
    ]
  },
];

const workoutTypes = [
  "Running", "Walking", "Cycling", "Swimming", "HIIT", "Yoga", "Strength Training",
  "Dance", "Cooldown", "Core Training", "Pilates", "Rowing", "Elliptical", "Stair Stepper",
  "Hiking", "Cross Country Skiing", "Downhill Skiing", "Snowboarding", "Surfing",
  "Tennis", "Pickleball", "Basketball", "Soccer", "Football", "Baseball", "Golf",
  "Martial Arts", "Boxing", "Kickboxing", "Wrestling", "Fencing", "Archery",
  "Climbing", "Paddling", "Wheelchair Walk", "Wheelchair Run", "Multisport",
];

const fitnessPlus = [
  { type: "HIIT", trainers: 12, description: "High-intensity intervals from 10-45 minutes" },
  { type: "Yoga", trainers: 8, description: "Vinyasa, Hatha, and restorative flows" },
  { type: "Strength", trainers: 10, description: "Dumbbell, bodyweight, and resistance band workouts" },
  { type: "Cycling", trainers: 6, description: "Indoor cycling with metrics synced to Apple Watch" },
  { type: "Running", trainers: 5, description: "Treadmill and outdoor audio runs with coaching" },
  { type: "Dance", trainers: 4, description: "Cardio dance in multiple styles" },
  { type: "Meditation", trainers: 3, description: "Guided mindfulness from 5-20 minutes" },
  { type: "Rowing", trainers: 3, description: "Indoor rowing with stroke rate tracking" },
  { type: "Pilates", trainers: 4, description: "Mat-based core and flexibility work" },
  { type: "Kickboxing", trainers: 3, description: "Cardio kickboxing combinations" },
];

const rings = [
  { name: "Move", color: "text-red-400", description: "Active calories burned. Default goal: 500 cal. Adjusts based on your activity level.", tip: "A brisk 30-minute walk burns ~150 calories. Aim for 3-4 walks daily to close the ring." },
  { name: "Exercise", color: "text-green-400", description: "Minutes of brisk activity (elevated heart rate). Goal: 30 minutes.", tip: "Any activity above a brisk walk counts. Even vigorous housework or playing with kids." },
  { name: "Stand", color: "text-blue-400", description: "Hours where you stood and moved for at least 1 minute. Goal: 12 hours.", tip: "Set hourly stand reminders. Even a quick stretch or walk to the kitchen counts." },
];

const integrations = [
  { app: "Strava", category: "Running/Cycling", sync: "Bidirectional" },
  { app: "MyFitnessPal", category: "Nutrition", sync: "Calories to Health" },
  { app: "Peloton", category: "Cycling/Strength", sync: "Workouts to Health" },
  { app: "Headspace", category: "Meditation", sync: "Mindful minutes" },
  { app: "Nike Run Club", category: "Running", sync: "Bidirectional" },
  { app: "Sleep Cycle", category: "Sleep", sync: "Sleep data to Health" },
  { app: "Oura Ring", category: "Sleep/Recovery", sync: "All metrics to Health" },
  { app: "Whoop", category: "Recovery/Strain", sync: "Workouts to Health" },
  { app: "Cronometer", category: "Nutrition", sync: "Nutrients to Health" },
  { app: "Lose It!", category: "Nutrition", sync: "Calories to Health" },
  { app: "WaterMinder", category: "Hydration", sync: "Water intake to Health" },
  { app: "AutoSleep", category: "Sleep", sync: "Detailed sleep to Health" },
];

export default function HealthFitness() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-background to-green-900/20" />
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-medium border border-red-500/20 mb-4">
            Health & Fitness
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Your health, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-green-400 to-blue-400">quantified.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Apple Watch and iPhone work together to monitor your heart, sleep, activity, 
            and mental health — all with industry-leading privacy.
          </p>
        </div>
      </section>

      {/* Activity Rings */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Activity Rings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rings.map(ring => (
              <div key={ring.name} className="p-5 rounded-2xl border border-border/30 bg-white/[0.02] text-center">
                <h3 className={`text-xl font-black ${ring.color}`}>{ring.name}</h3>
                <p className="text-xs text-muted-foreground mt-2">{ring.description}</p>
                <p className="text-xs mt-3 italic text-muted-foreground/70">💡 {ring.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Features by Category */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Health Monitoring</h2>
          <p className="text-center text-muted-foreground text-sm mb-6">Comprehensive health tracking across Apple devices</p>
          
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {healthFeatures.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(i)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === i
                    ? "bg-red-500 text-white shadow-lg shadow-red-500/25"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 border border-border/30"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {healthFeatures[activeCategory].features.map(f => (
              <div key={f.name} className="p-4 rounded-xl border border-border/30 bg-white/[0.02]">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-sm">{f.name}</h3>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground flex-shrink-0">{f.device}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Types */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Supported Workouts</h2>
          <p className="text-center text-muted-foreground text-sm mb-6">{workoutTypes.length} workout types with automatic detection for many</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {workoutTypes.map(type => (
              <span key={type} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-border/30">
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness+ */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Apple Fitness+</h2>
          <p className="text-center text-muted-foreground text-sm mb-6">$9.99/mo or included with Apple One Premier • Requires Apple Watch</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {fitnessPlus.map(f => (
              <div key={f.type} className="p-3 rounded-xl border border-border/30 bg-white/[0.02] text-center">
                <h3 className="font-bold text-sm">{f.type}</h3>
                <p className="text-[10px] text-muted-foreground mt-1">{f.description}</p>
                <p className="text-[10px] text-red-400 mt-1">{f.trainers} trainers</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-party Integrations */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Third-Party Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {integrations.map(app => (
              <div key={app.app} className="p-3 rounded-lg border border-border/30 bg-white/[0.02] flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{app.app}</p>
                  <p className="text-[10px] text-muted-foreground">{app.category}</p>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-400">{app.sync}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
