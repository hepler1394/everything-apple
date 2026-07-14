import { useMemo, useState } from "react";
import { Link } from "wouter";

const MILESTONES = [
  { year: 1976, name: "Apple-1", note: "A bare board sold for $666.66. The garage story begins.", href: "/apple-history", kind: "Computer" },
  { year: 1984, name: "Macintosh", note: "The graphical computer introduced itself to the world.", href: "/macos-deep-dive", kind: "Mac" },
  { year: 1991, name: "PowerBook", note: "The keyboard moved back. The modern laptop silhouette arrived.", href: "/devices", kind: "Mac" },
  { year: 1993, name: "Newton", note: "Too early, too ambitious, and far more influential than its sales suggest.", href: "/apple-graveyard", kind: "Graveyard" },
  { year: 1998, name: "iMac G3", note: "Translucent Bondi blue made the beige computer obsolete overnight.", href: "/apple-history", kind: "Mac" },
  { year: 2001, name: "iPod", note: "A thousand songs in your pocket—and a new center of gravity for Apple.", href: "/ipod-history", kind: "iPod" },
  { year: 2007, name: "iPhone", note: "Phone, widescreen iPod, internet communicator. One piece of glass.", href: "/iphone-timeline", kind: "iPhone" },
  { year: 2008, name: "App Store", note: "Software distribution became a platform—and later, a boundary to push past.", href: "/sideloading", kind: "Software" },
  { year: 2010, name: "iPad", note: "A third category found its reason to exist between phone and laptop.", href: "/devices", kind: "iPad" },
  { year: 2011, name: "Siri", note: "Voice moved from an app into the operating system.", href: "/siri-ai", kind: "Software" },
  { year: 2015, name: "Apple Watch", note: "Apple's most personal computer started by learning your wrist.", href: "/watch-history", kind: "Watch" },
  { year: 2016, name: "AirPods", note: "The headphone jack disappeared; wireless audio became ordinary.", href: "/accessories", kind: "Audio" },
  { year: 2020, name: "Apple silicon", note: "M1 ended a 15-year Intel era and redrew the performance map.", href: "/apple-silicon", kind: "Mac" },
  { year: 2023, name: "Vision Pro", note: "Apple's first spatial computer put windows into the room.", href: "/vision-pro", kind: "Spatial" },
  { year: 2024, name: "Apple Intelligence", note: "Private Cloud Compute and on-device models reframed Apple's AI pitch.", href: "/apple-intelligence", kind: "AI" },
  { year: 2025, name: "Liquid Glass", note: "A shared visual language began moving across Apple's platforms.", href: "/ios-27", kind: "Software" },
] as const;

export default function AppleTimeMachine() {
  const [year, setYear] = useState(2007);
  const active = useMemo(
    () => MILESTONES.reduce((closest, item) => Math.abs(item.year - year) < Math.abs(closest.year - year) ? item : closest),
    [year],
  );

  function step(direction: -1 | 1) {
    const index = MILESTONES.findIndex((item) => item.year === active.year);
    const next = Math.min(MILESTONES.length - 1, Math.max(0, index + direction));
    setYear(MILESTONES[next].year);
  }

  return (
    <section className="time-machine" aria-labelledby="time-machine-title">
      <div className="page-container time-machine-inner">
        <div className="time-machine-intro">
          <p>The Apple Time Machine</p>
          <h2 id="time-machine-title">Fifty years. One scrubber.</h2>
          <span>Move through the moments that changed the company—and the devices around us.</span>
        </div>

        <div className="time-machine-console">
          <div className="time-machine-readout" aria-live="polite">
            <span className="time-machine-year">{active.year}</span>
            <div>
              <span className="time-machine-kind">{active.kind}</span>
              <h3>{active.name}</h3>
              <p>{active.note}</p>
              <Link href={active.href}><span>Open this chapter ›</span></Link>
            </div>
          </div>

          <div className="time-machine-controls">
            <button type="button" onClick={() => step(-1)} disabled={active.year === MILESTONES[0].year} aria-label="Previous Apple milestone">←</button>
            <label>
              <span className="sr-only">Year</span>
              <input
                type="range"
                min="1976"
                max="2025"
                value={year}
                onChange={(event) => setYear(Number(event.target.value))}
                aria-valuetext={`${active.year}: ${active.name}`}
              />
              <span className="time-machine-range"><b>1976</b><b>2025</b></span>
            </label>
            <button type="button" onClick={() => step(1)} disabled={active.year === MILESTONES[MILESTONES.length - 1].year} aria-label="Next Apple milestone">→</button>
          </div>

          <div className="time-machine-marks" aria-hidden="true">
            {MILESTONES.map((item) => (
              <span key={item.year} className={item.year === active.year ? "active" : ""} style={{ left: `${((item.year - 1976) / 49) * 100}%` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
