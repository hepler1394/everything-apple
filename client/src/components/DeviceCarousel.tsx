/*
 * DeviceCarousel — a robust, keyboard- and touch-friendly filmstrip for
 * browsing an entire device family in order. Scroll-snap, prev/next arrows,
 * and a live year readout. Fed a normalized list so any family plugs in.
 */

import { useRef, useState, useCallback, useEffect } from "react";

export interface CarouselItem {
  id: string;
  name: string;
  year: number;
  image: string | null;
  highlight: string;
  priceLabel?: string;
  specs: { label: string; value: string }[];
  isNew?: boolean;
}

interface Props {
  items: CarouselItem[];
  accent?: string;
}

export default function DeviceCarousel({ items, accent = "var(--brand)" }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(items.length - 1, i));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - 8, behavior: "smooth" });
  }, [items.length]);

  // Track which card is centered as the user scrolls/drags.
  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((c, i) => {
      const el = c as HTMLElement;
      const cardCenter = el.offsetLeft + el.offsetWidth / 2;
      const d = Math.abs(cardCenter - center);
      if (d < bestDist) { bestDist = d; best = i; }
    });
    setActive(best);
  }, []);

  const onKey = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); scrollToIndex(active + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); scrollToIndex(active - 1); }
  }, [active, scrollToIndex]);

  // Reset to the first card when the family changes.
  useEffect(() => {
    const track = trackRef.current;
    if (track) track.scrollTo({ left: 0 });
    setActive(0);
  }, [items]);

  const current = items[active];

  return (
    <div>
      {/* Readout + controls */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px", gap: "16px", flexWrap: "wrap" }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: accent }}>
            {current?.year}
          </div>
          <div style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--foreground, #1d1d1f)" }}>
            {current?.name}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "13px", color: "var(--muted-foreground, #707070)" }}>
            {active + 1} / {items.length}
          </span>
          <CarouselButton label="Previous device" disabled={active === 0} onClick={() => scrollToIndex(active - 1)} accent={accent}>‹</CarouselButton>
          <CarouselButton label="Next device" disabled={active === items.length - 1} onClick={() => scrollToIndex(active + 1)} accent={accent}>›</CarouselButton>
        </div>
      </div>

      {/* Filmstrip */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        onKeyDown={onKey}
        tabIndex={0}
        role="listbox"
        aria-label="Device history"
        className="device-carousel-track"
        style={{
          display: "flex",
          gap: "16px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          padding: "8px 4px 20px",
          scrollbarWidth: "thin",
          outline: "none",
        }}
      >
        {items.map((it, i) => {
          const selected = i === active;
          return (
            <article
              key={it.id}
              role="option"
              aria-selected={selected}
              onClick={() => scrollToIndex(i)}
              style={{
                scrollSnapAlign: "center",
                flex: "0 0 auto",
                width: "clamp(240px, 78vw, 300px)",
                background: "var(--card, #fff)",
                border: `1px solid ${selected ? accent : "var(--border, #d5d6dd)"}`,
                borderRadius: "16px",
                padding: "20px",
                cursor: "pointer",
                transition: "border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                transform: selected ? "translateY(-3px)" : "none",
                boxShadow: selected ? "0 10px 30px rgba(20,30,60,0.12)" : "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image */}
              <div style={{ height: "220px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                {it.image ? (
                  <img
                    src={it.image}
                    alt={it.name}
                    loading="lazy"
                    style={{ maxHeight: "220px", maxWidth: "100%", objectFit: "contain", display: "block" }}
                  />
                ) : (
                  <div style={{ fontSize: "44px", fontWeight: 800, color: "var(--border, #d5d6dd)", letterSpacing: "-0.04em" }}>
                    {it.year}
                  </div>
                )}
              </div>

              {/* Meta */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "6px" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: accent }}>{it.year}</span>
                {it.isNew && (
                  <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: accent }}>Latest</span>
                )}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--foreground, #1d1d1f)", margin: "0 0 8px", lineHeight: 1.2 }}>
                {it.name}
              </h3>
              <p style={{ fontSize: "13px", lineHeight: 1.5, color: "var(--muted-foreground, #707070)", margin: "0 0 14px" }}>
                {it.highlight}
              </p>

              {/* Specs */}
              <dl style={{ margin: 0, display: "grid", gap: "6px" }}>
                {it.specs.slice(0, 4).map((s) => (
                  <div key={s.label} style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "12px", borderTop: "1px solid var(--border, #ececf0)", paddingTop: "6px" }}>
                    <dt style={{ color: "var(--muted-foreground, #8a8a8f)" }}>{s.label}</dt>
                    <dd style={{ margin: 0, color: "var(--foreground, #1d1d1f)", fontWeight: 500, textAlign: "right" }}>{s.value}</dd>
                  </div>
                ))}
              </dl>
              {it.priceLabel && (
                <div style={{ marginTop: "auto", paddingTop: "12px", fontSize: "12px", color: "var(--muted-foreground, #8a8a8f)" }}>
                  {it.priceLabel}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Dot scrubber */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: "center", marginTop: "4px" }}>
        {items.map((it, i) => (
          <button
            key={it.id}
            aria-label={`Go to ${it.name}`}
            onClick={() => scrollToIndex(i)}
            style={{
              width: i === active ? "22px" : "8px",
              height: "8px",
              borderRadius: "999px",
              border: "none",
              padding: 0,
              cursor: "pointer",
              background: i === active ? accent : "var(--border, #cfcfd6)",
              transition: "width 0.2s ease, background 0.2s ease",
            }}
          />
        ))}
      </div>

      <style>{`
        .device-carousel-track::-webkit-scrollbar { height: 8px; }
        .device-carousel-track::-webkit-scrollbar-thumb { background: var(--border, #cfcfd6); border-radius: 999px; }
        .device-carousel-track:focus-visible { box-shadow: 0 0 0 2px ${"var(--brand)"}; border-radius: 12px; }
      `}</style>
    </div>
  );
}

function CarouselButton({ children, onClick, disabled, label, accent }: { children: React.ReactNode; onClick: () => void; disabled?: boolean; label: string; accent: string }) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "36px",
        height: "36px",
        borderRadius: "999px",
        border: "1px solid var(--border, #d5d6dd)",
        background: "var(--card, #fff)",
        color: disabled ? "var(--border, #cfcfd6)" : accent,
        fontSize: "22px",
        lineHeight: 1,
        cursor: disabled ? "default" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: disabled ? 0.5 : 1,
        transition: "background 0.15s ease, transform 0.1s ease",
      }}
    >
      <span style={{ marginTop: "-2px" }}>{children}</span>
    </button>
  );
}
