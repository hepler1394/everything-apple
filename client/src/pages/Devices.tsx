/*
 * Devices — the full Apple device archive in one browsable carousel.
 * Switch families (iPhone · Apple Watch · iPod) and scroll every model
 * ever made, oldest → newest, with real product photography.
 */

import { useMemo, useState } from "react";
import { Link } from "wouter";
import DeviceCarousel, { type CarouselItem } from "@/components/DeviceCarousel";
import { iPhoneModels } from "@/data/iphoneHistory";
import { watchModels } from "@/data/watchHistory";
import { ipodModels } from "@/data/ipodHistory";
import { ipadModels } from "@/data/ipadHistory";
import { macModels } from "@/data/macHistory";
import { iphoneImage, watchImage, ipodImage } from "@/lib/deviceImages";
import type { DeviceModel } from "@/data/deviceTypes";

type FamilyId = "iphone" | "ipad" | "mac" | "watch" | "ipod";

const FAMILIES: { id: FamilyId; label: string; blurb: string; timeline?: string }[] = [
  { id: "iphone", label: "iPhone", blurb: "Every iPhone from the 2007 original to today.", timeline: "/iphone-timeline" },
  { id: "ipad", label: "iPad", blurb: "The tablet that stuck, 2010 to the M4 era." },
  { id: "mac", label: "Mac", blurb: "From the 1984 Macintosh to Apple Silicon — the milestones." },
  { id: "watch", label: "Apple Watch", blurb: "The wrist, from Series 0 to the latest Ultra.", timeline: "/watch-history" },
  { id: "ipod", label: "iPod", blurb: "1,000 songs in your pocket — the whole run.", timeline: "/ipod-history" },
];

// Families sharing the generic DeviceModel shape (specs array + priceLabel).
const GENERIC: Record<Exclude<FamilyId, "iphone">, { models: DeviceModel[]; img: (id: string) => string | null }> = {
  ipad: { models: ipadModels, img: () => null },
  mac: { models: macModels, img: () => null },
  watch: { models: watchModels, img: watchImage },
  ipod: { models: ipodModels, img: ipodImage },
};

function buildItems(family: FamilyId): CarouselItem[] {
  if (family === "iphone") {
    const last = iPhoneModels.length - 1;
    return iPhoneModels.map((m, i) => ({
      id: m.id,
      name: m.name,
      year: m.year,
      image: iphoneImage(m.id),
      highlight: m.highlight,
      priceLabel: m.startingPrice,
      isNew: i === last,
      specs: [
        { label: "Chip", value: m.chip },
        { label: "Display", value: m.display },
        { label: "Camera", value: m.camera },
        { label: "Max iOS", value: m.maxIOS },
      ],
    }));
  }
  const { models, img } = GENERIC[family];
  const last = models.length - 1;
  return models.map((m, i) => ({
    id: m.id,
    name: m.name,
    year: m.year,
    image: img(m.id),
    highlight: m.highlight,
    priceLabel: m.priceLabel,
    isNew: i === last,
    specs: m.specs,
  }));
}

export default function Devices() {
  const [family, setFamily] = useState<FamilyId>("iphone");
  const items = useMemo(() => buildItems(family), [family]);
  const current = FAMILIES.find((f) => f.id === family)!;
  const span = `${items[0]?.year}–${items[items.length - 1]?.year}`;

  return (
    <>
      {/* Hero */}
      <section className="section-snow section-pad-sm">
        <div className="page-container">
          <p className="t-eyebrow" style={{ marginBottom: "12px" }}>The Device Archive</p>
          <h1
            style={{
              fontFamily: "var(--font-sf-pro-display, system-ui)",
              fontSize: "clamp(36px, 5.5vw, 60px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "var(--foreground, #1d1d1f)",
              margin: "0 0 16px",
            }}
          >
            Every <span className="apple-word">Apple</span> device, in one place.
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.5, color: "var(--muted-foreground, #707070)", maxWidth: "640px", margin: 0 }}>
            A living archive of the hardware that defined Apple. Pick a family and scroll through every model
            ever made — with real photography, specs, and the story of each generation.
          </p>
        </div>
      </section>

      {/* Family switcher + carousel */}
      <section className="section-fog section-pad">
        <div className="page-container">
          <div role="tablist" aria-label="Device family" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
            {FAMILIES.map((f) => {
              const activeFam = f.id === family;
              return (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={activeFam}
                  onClick={() => setFamily(f.id)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "999px",
                    border: activeFam ? "1px solid var(--brand)" : "1px solid var(--border, #d5d6dd)",
                    background: activeFam ? "var(--brand)" : "var(--card, #fff)",
                    color: activeFam ? "#fff" : "var(--foreground, #1d1d1f)",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Family caption */}
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", marginBottom: "8px" }}>
            <p style={{ fontSize: "16px", color: "var(--muted-foreground, #707070)", margin: 0 }}>{current.blurb}</p>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--muted-foreground, #8a8a8f)" }}>
              {items.length} models · {span}
            </span>
          </div>

          <DeviceCarousel items={items} />

          {current.timeline && (
            <div style={{ marginTop: "24px", textAlign: "center" }}>
              <Link href={current.timeline}>
                <span className="btn-primary" style={{ padding: "10px 22px" }}>
                  Open the full {current.label} timeline
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Cross-links */}
      <section className="section-snow section-pad-sm">
        <div className="page-container" style={{ textAlign: "center" }}>
          <p style={{ fontSize: "15px", color: "var(--muted-foreground, #707070)", margin: "0 0 16px" }}>
            Looking for the ones that didn't make it?
          </p>
          <Link href="/apple-graveyard">
            <span style={{ fontSize: "17px", fontWeight: 600, color: "var(--brand-link, var(--brand))", textDecoration: "none", borderBottom: "1px solid currentColor", paddingBottom: "2px" }}>
              Visit the Apple Graveyard ›
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
