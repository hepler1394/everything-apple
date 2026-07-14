import { useEffect, useMemo, useRef } from "react";

export interface StageDevice {
  id: string;
  name: string;
  year: number;
  isNew?: boolean;
}

interface Props<T extends StageDevice> {
  items: T[];
  activeId: string;
  onSelect: (item: T) => void;
  renderVisual: (item: T, size: number) => React.ReactNode;
  ariaLabel: string;
}

export default function DeviceStageCarousel<T extends StageDevice>({
  items,
  activeId,
  onSelect,
  renderVisual,
  ariaLabel,
}: Props<T>) {
  const pointerStart = useRef<number | null>(null);
  const activeIndex = Math.max(0, items.findIndex((item) => item.id === activeId));
  const visible = useMemo(
    () => items.map((item, index) => ({ item, index, offset: index - activeIndex })).filter(({ offset }) => Math.abs(offset) <= 3),
    [activeIndex, items],
  );

  const move = (direction: -1 | 1) => {
    const next = Math.min(items.length - 1, Math.max(0, activeIndex + direction));
    if (items[next]) onSelect(items[next]);
  };

  useEffect(() => {
    if (!items.some((item) => item.id === activeId) && items.length) onSelect(items[items.length - 1]);
  }, [activeId, items, onSelect]);

  if (!items.length) return null;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
      }}
      onPointerDown={(event) => { pointerStart.current = event.clientX; }}
      onPointerUp={(event) => {
        if (pointerStart.current === null) return;
        const distance = event.clientX - pointerStart.current;
        pointerStart.current = null;
        if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1);
      }}
      style={{ position: "relative", height: "390px", maxWidth: "1180px", margin: "0 auto", overflow: "hidden", outline: "none", perspective: "1100px", touchAction: "pan-y" }}
    >
      <div aria-hidden style={{ position: "absolute", left: "18%", right: "18%", bottom: "49px", height: "42px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(100,155,255,0.19), rgba(0,0,0,0) 68%)", filter: "blur(10px)" }} />

      {visible.map(({ item, index, offset }) => {
        const distance = Math.abs(offset);
        const active = offset === 0;
        const x = offset * 205;
        const rotate = offset * -18;
        return (
          <button
            key={item.id}
            type="button"
            aria-label={`Show ${item.name}, ${item.year}`}
            aria-current={active ? "true" : undefined}
            onClick={() => onSelect(item)}
            style={{
              position: "absolute",
              left: "50%",
              top: active ? "18px" : "46px",
              width: "190px",
              height: "300px",
              padding: 0,
              border: 0,
              background: "transparent",
              color: "#f5f5f7",
              cursor: "pointer",
              opacity: Math.max(0.18, 1 - distance * 0.24),
              zIndex: 10 - distance,
              transform: `translateX(calc(-50% + ${x}px)) translateZ(${-distance * 95}px) rotateY(${rotate}deg) scale(${active ? 1 : 0.86})`,
              transformStyle: "preserve-3d",
              transition: "transform 620ms cubic-bezier(.2,.8,.2,1), opacity 420ms ease, top 620ms cubic-bezier(.2,.8,.2,1)",
            }}
          >
            {item.isNew && active && <span style={{ position: "absolute", top: 0, right: "12px", zIndex: 2, padding: "4px 8px", borderRadius: "999px", fontSize: "9px", fontWeight: 800, letterSpacing: ".08em", background: "#f5f5f7", color: "#050505" }}>NEW</span>}
            <span style={{ height: "226px", display: "flex", alignItems: "center", justifyContent: "center", filter: active ? "drop-shadow(0 24px 22px rgba(0,0,0,.58))" : "drop-shadow(0 14px 16px rgba(0,0,0,.44))" }}>
              {renderVisual(item, active ? 224 : 190)}
            </span>
            <span style={{ display: "block", marginTop: "10px", fontSize: active ? "15px" : "13px", fontWeight: 650, letterSpacing: "-.02em", whiteSpace: "nowrap" }}>{item.name}</span>
            <span style={{ display: "block", marginTop: "4px", fontSize: "11px", color: "rgba(255,255,255,.48)" }}>{item.year}</span>
            {active && <span style={{ display: "block", width: "28px", height: "2px", margin: "13px auto 0", borderRadius: "2px", background: "#fff" }} />}
          </button>
        );
      })}

      <button type="button" aria-label="Previous device" disabled={activeIndex === 0} onClick={() => move(-1)} style={navButton("left", activeIndex === 0)}>‹</button>
      <button type="button" aria-label="Next device" disabled={activeIndex === items.length - 1} onClick={() => move(1)} style={navButton("right", activeIndex === items.length - 1)}>›</button>
      <div style={{ position: "absolute", left: "50%", bottom: "9px", transform: "translateX(-50%)", fontSize: "10px", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.34)" }}>
        {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")} · drag or use arrows
      </div>
    </div>
  );
}

function navButton(side: "left" | "right", disabled: boolean): React.CSSProperties {
  return {
    position: "absolute", [side]: "max(12px, 3vw)", top: "154px", zIndex: 20,
    width: "44px", height: "44px", borderRadius: "50%", border: "1px solid rgba(255,255,255,.18)",
    background: "rgba(20,20,22,.72)", backdropFilter: "blur(18px)", color: "#fff", fontSize: "28px",
    lineHeight: 1, cursor: disabled ? "default" : "pointer", opacity: disabled ? 0.22 : 1,
  };
}
