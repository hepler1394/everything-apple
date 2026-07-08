import { useMemo, useState } from "react";
import { Link } from "wouter";
import { graveyard, type DeadProduct } from "@/data/graveyard";

/* ── Palette (works on the default light "Aqua" canvas) ── */
const INK = "#1d1d1f";
const MUTED = "#707070";

/* Years span for the hero stat line */
const OLDEST_BIRTH = Math.min(...graveyard.map((p) => p.born));
const LATEST_DEATH = Math.max(...graveyard.map((p) => p.died));

/* Newest death first; ties broken by longest-lived, then name */
function byDeathDesc(a: DeadProduct, b: DeadProduct): number {
  if (b.died !== a.died) return b.died - a.died;
  const lifeA = a.died - a.born;
  const lifeB = b.died - b.born;
  if (lifeB !== lifeA) return lifeB - lifeA;
  return a.name.localeCompare(b.name);
}

function Tombstone({ product }: { product: DeadProduct }) {
  const [hover, setHover] = useState(false);
  const lifespan = product.died - product.born;
  const lifespanLabel =
    lifespan <= 1 ? `${lifespan} year` : `${lifespan} years`;

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: 24,
        border: "1px solid var(--border)",
        transition: "transform 0.344s ease",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        cursor: "default",
      }}
    >
      {/* Header: category tag + RIP mark */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sf-pro-text, system-ui)",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--brand)",
          }}
        >
          {product.category}
        </span>
        <span
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-sf-pro-text, system-ui)",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: MUTED,
          }}
        >
          &#8224; RIP
        </span>
      </div>

      {/* Name */}
      <h3
        style={{
          margin: 0,
          fontFamily: "var(--font-sf-pro-display, system-ui)",
          fontSize: 21,
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
          color: INK,
        }}
      >
        {product.name}
      </h3>

      {/* Born – died */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 10,
          fontFamily: "var(--font-sf-pro-text, system-ui)",
        }}
      >
        <span style={{ fontSize: 17, fontWeight: 600, color: INK }}>
          {product.born} &ndash; {product.died}
        </span>
        <span style={{ fontSize: 13, color: MUTED }}>{lifespanLabel}</span>
      </div>

      {/* Cause of death — emphasized */}
      <p
        style={{
          margin: 0,
          fontFamily: "var(--font-sf-pro-text, system-ui)",
          fontSize: 15,
          fontWeight: 600,
          fontStyle: "italic",
          lineHeight: 1.4,
          color: INK,
        }}
      >
        {product.cause}
      </p>

      {/* Eulogy */}
      <p
        style={{
          margin: 0,
          fontFamily: "var(--font-sf-pro-text, system-ui)",
          fontSize: 14,
          lineHeight: 1.5,
          color: MUTED,
        }}
      >
        {product.eulogy}
      </p>
    </article>
  );
}

export default function AppleGraveyard() {
  const [active, setActive] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set(graveyard.map((p) => p.category));
    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);

  const visible = useMemo(() => {
    const list =
      active === "All"
        ? graveyard.slice()
        : graveyard.filter((p) => p.category === active);
    return list.sort(byDeathDesc);
  }, [active]);

  return (
    <div className="page-container-wrapper">
      {/* ── HERO ── */}
      <section className="section-fog section-pad">
        <div className="page-container">
          <p className="t-eyebrow" style={{ marginBottom: 12 }}>
            Everything Apple
          </p>
          <h1
            style={{
              margin: "0 0 20px",
              fontFamily: "var(--font-sf-pro-display, system-ui)",
              fontSize: "clamp(40px, 7vw, 76px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: INK,
            }}
          >
            The Apple Graveyard
          </h1>
          <p
            style={{
              maxWidth: 720,
              margin: "0 0 20px",
              fontFamily: "var(--font-sf-pro-text, system-ui)",
              fontSize: "clamp(17px, 2.2vw, 21px)",
              lineHeight: 1.5,
              color: MUTED,
            }}
          >
            For every iPhone that lived, Cupertino has quietly buried a Newton, a
            Cube, a Shuffle, or a beloved app. This is the resting place of the
            products, ports, features, and services Apple has discontinued &mdash;
            a nostalgic walk through everything Apple has killed, from the 1993
            Newton MessagePad to the Lightning connector.
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-sf-pro-text, system-ui)",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.01em",
              color: INK,
            }}
          >
            {graveyard.length} products &middot; {OLDEST_BIRTH}&ndash;
            {LATEST_DEATH} &middot; Rest in peace
          </p>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="section-snow section-pad">
        <div className="page-container">
          {/* Category filter pills */}
          <div
            role="group"
            aria-label="Filter products by category"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 32,
            }}
          >
            {categories.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  aria-pressed={isActive}
                  style={{
                    fontFamily: "var(--font-sf-pro-text, system-ui)",
                    fontSize: 14,
                    fontWeight: 500,
                    padding: "7px 16px",
                    borderRadius: 999,
                    cursor: "pointer",
                    border: isActive
                      ? "1px solid var(--brand)"
                      : "1px solid var(--border)",
                    backgroundColor: isActive ? "var(--brand)" : "transparent",
                    color: isActive ? "#ffffff" : INK,
                    transition:
                      "background-color 0.1s ease, border-color 0.1s ease, color 0.1s ease",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Tombstone grid */}
          <h2 className="sr-only">Discontinued Apple products</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {visible.map((product) => (
              <Tombstone key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="section-fog section-pad">
        <div className="page-container" style={{ textAlign: "center" }}>
          <h2
            style={{
              margin: "0 0 16px",
              fontFamily: "var(--font-sf-pro-display, system-ui)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: INK,
            }}
          >
            The survivors carry on.
          </h2>
          <p
            style={{
              maxWidth: 560,
              margin: "0 auto 28px",
              fontFamily: "var(--font-sf-pro-text, system-ui)",
              fontSize: 17,
              lineHeight: 1.5,
              color: MUTED,
            }}
          >
            Every product here made way for what came next. Trace the lineage
            that lived.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            <Link href="/iphone-timeline" className="btn-primary">
              Explore the survivors &mdash; every iPhone ever
            </Link>
            <Link
              href="/devices"
              className="btn-primary"
              style={{
                backgroundColor: "transparent",
                color: "var(--brand)",
                border: "1px solid var(--brand)",
              }}
            >
              Browse the full device archive
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
