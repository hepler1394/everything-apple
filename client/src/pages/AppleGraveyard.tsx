import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { graveyard, type DeadProduct } from "@/data/graveyard";
import { graveyardMedia } from "@/data/graveyardMedia";

const OLDEST_BIRTH = Math.min(...graveyard.map((p) => p.born));
const LATEST_DEATH = Math.max(...graveyard.map((p) => p.died));

function byDeathDesc(a: DeadProduct, b: DeadProduct): number {
  if (b.died !== a.died) return b.died - a.died;
  const lifeA = a.died - a.born;
  const lifeB = b.died - b.born;
  return lifeB !== lifeA ? lifeB - lifeA : a.name.localeCompare(b.name);
}

function Tombstone({ product, onOpen }: { product: DeadProduct; onOpen: () => void }) {
  const media = graveyardMedia[product.id];
  const lifespan = product.died - product.born;

  return (
    <article
      className="graveyard-card"
      role="button"
      tabIndex={0}
      aria-label={`Open the story of ${product.name}`}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
    >
      <div className="graveyard-card-media">
        {media?.images[0] && (
          <img src={media.images[0]} alt={product.name} loading="lazy" style={{ objectPosition: media.position }} />
        )}
        <div className="graveyard-card-shade" />
        <span className="graveyard-card-open">Open story <span aria-hidden>↗</span></span>
      </div>

      <div className="graveyard-card-copy">
        <div className="graveyard-meta-row">
          <span className="graveyard-category">{product.category}</span>
          <span className="graveyard-rip" aria-hidden>† RIP</span>
        </div>
        <h3>{product.name}</h3>
        <div className="graveyard-years">
          <strong>{product.born} – {product.died}</strong>
          <span>{lifespan === 1 ? "1 year" : `${lifespan} years`}</span>
        </div>
        <p className="graveyard-cause">{product.cause}</p>
        <p className="graveyard-eulogy">{product.eulogy}</p>
      </div>
    </article>
  );
}

function GraveyardModal({ product, onClose }: { product: DeadProduct; onClose: () => void }) {
  const [imageIndex, setImageIndex] = useState(0);
  const media = graveyardMedia[product.id];
  const images = media?.images ?? [];

  useEffect(() => {
    setImageIndex(0);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && images.length > 1) setImageIndex((i) => (i + 1) % images.length);
      if (event.key === "ArrowLeft" && images.length > 1) setImageIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [product.id, images.length, onClose]);

  return (
    <div className="graveyard-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="graveyard-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="graveyard-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="graveyard-modal-close" type="button" onClick={onClose} aria-label="Close story">×</button>

        <div className="graveyard-modal-stage">
          {images[imageIndex] && <img src={images[imageIndex]} alt={`${product.name}, archival view ${imageIndex + 1}`} />}
          <div className="graveyard-modal-count">ARCHIVE {String(imageIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</div>
        </div>

        {images.length > 1 && (
          <div className="graveyard-thumbnails" aria-label="More product images">
            {images.map((src, index) => (
              <button key={src} type="button" className={index === imageIndex ? "is-active" : ""} onClick={() => setImageIndex(index)} aria-label={`Show archival image ${index + 1}`}>
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        )}

        <div className="graveyard-modal-copy">
          <div className="graveyard-meta-row">
            <span className="graveyard-category">{product.category}</span>
            <span className="graveyard-rip">{product.born} – {product.died}</span>
          </div>
          <h2 id="graveyard-modal-title">{product.name}</h2>
          <p className="graveyard-modal-cause">“{product.cause}”</p>
          <p>{product.eulogy}</p>
          <div className="graveyard-modal-footer">
            <span>{product.died - product.born} years in the Apple story</span>
            {media && <a href={media.sourceUrl} target="_blank" rel="noopener noreferrer">Images: {media.sourceLabel} ↗</a>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppleGraveyard() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<DeadProduct | null>(null);

  const categories = useMemo(() => ["All", ...Array.from(new Set(graveyard.map((p) => p.category))).sort()], []);
  const visible = useMemo(() => {
    const list = active === "All" ? [...graveyard] : graveyard.filter((p) => p.category === active);
    return list.sort(byDeathDesc);
  }, [active]);

  return (
    <div className="graveyard-page">
      <section className="section-fog section-pad graveyard-hero">
        <div className="page-container">
          <p className="t-eyebrow" style={{ marginBottom: 12 }}>Everything Apple</p>
          <h1>The <span className="apple-word">Apple</span> Graveyard</h1>
          <p className="graveyard-deck">
            A visual memorial to the products, ports, features, and services Apple left behind—from the Newton MessagePad to Lightning. Select any artifact to open its story and archival gallery.
          </p>
          <p className="graveyard-stat">{graveyard.length} artifacts · {OLDEST_BIRTH}–{LATEST_DEATH} · Real archival imagery</p>
        </div>
      </section>

      <section className="section-snow section-pad">
        <div className="page-container">
          <div className="graveyard-filters" role="group" aria-label="Filter products by category">
            {categories.map((category) => (
              <button key={category} type="button" onClick={() => setActive(category)} aria-pressed={category === active} className={category === active ? "is-active" : ""}>
                {category}
              </button>
            ))}
          </div>

          <h2 className="sr-only">Discontinued Apple products</h2>
          <div className="graveyard-grid">
            {visible.map((product) => <Tombstone key={product.id} product={product} onOpen={() => setSelected(product)} />)}
          </div>
        </div>
      </section>

      <section className="section-fog section-pad graveyard-closing">
        <div className="page-container">
          <h2>The survivors carry on.</h2>
          <p>Every artifact here made way for what came next. Trace the lineage that lived.</p>
          <div>
            <Link href="/iphone-timeline" className="btn-primary">Explore every iPhone</Link>
            <Link href="/devices" className="graveyard-outline-link">Browse the device archive</Link>
          </div>
        </div>
      </section>

      {selected && <GraveyardModal product={selected} onClose={() => setSelected(null)} />}

      <style>{`
        .graveyard-page { color: var(--foreground); background: var(--background); }
        .graveyard-hero { position: relative; overflow: hidden; }
        .graveyard-hero::after { content: ""; position: absolute; width: 520px; height: 520px; right: -150px; top: -260px; border-radius: 50%; background: color-mix(in srgb, var(--brand) 18%, transparent); filter: blur(60px); pointer-events: none; }
        .graveyard-hero h1 { position: relative; margin: 0 0 20px; max-width: 900px; font-family: var(--font-sf-pro-display, system-ui); font-size: clamp(44px, 7vw, 78px); font-weight: 720; line-height: 1.02; letter-spacing: -.045em; color: var(--foreground); }
        .graveyard-deck { position: relative; max-width: 740px; margin: 0 0 22px; font-size: clamp(17px, 2.1vw, 21px); line-height: 1.55; color: var(--muted-foreground); }
        .graveyard-stat { margin: 0; font-size: 14px; font-weight: 650; color: var(--foreground); }
        .graveyard-filters { display: flex; gap: 8px; margin-bottom: 34px; overflow-x: auto; padding: 2px 2px 8px; scrollbar-width: none; }
        .graveyard-filters::-webkit-scrollbar { display: none; }
        .graveyard-filters button { flex: 0 0 auto; padding: 8px 16px; border: 1px solid var(--border); border-radius: 999px; background: color-mix(in srgb, var(--card) 72%, transparent); color: var(--muted-foreground); font: 600 14px/1 var(--font-sf-pro-text, system-ui); cursor: pointer; transition: .2s ease; }
        .graveyard-filters button:hover { color: var(--foreground); border-color: color-mix(in srgb, var(--brand) 55%, var(--border)); }
        .graveyard-filters button.is-active { color: #fff; background: var(--brand); border-color: var(--brand); box-shadow: 0 6px 22px rgba(var(--brand-rgb), .22); }
        .graveyard-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; }
        .graveyard-card { padding: 0; border: 1px solid var(--border); border-radius: 26px; overflow: hidden; background: color-mix(in srgb, var(--card) 82%, var(--background)); color: var(--foreground); cursor: pointer; outline: none; transition: transform .28s cubic-bezier(.2,.8,.2,1), border-color .28s ease, box-shadow .28s ease; }
        .graveyard-card:hover, .graveyard-card:focus-visible { transform: translateY(-5px); border-color: color-mix(in srgb, var(--brand) 45%, var(--border)); box-shadow: 0 24px 60px rgba(0,0,0,.16); }
        .graveyard-card:focus-visible { box-shadow: 0 0 0 3px color-mix(in srgb, var(--brand) 35%, transparent), 0 24px 60px rgba(0,0,0,.16); }
        .graveyard-card-media { position: relative; height: 210px; overflow: hidden; background: radial-gradient(circle at 50% 42%, color-mix(in srgb, var(--brand) 22%, transparent), transparent 52%), linear-gradient(145deg, color-mix(in srgb, var(--card) 80%, #101014), color-mix(in srgb, var(--background) 68%, #000)); }
        .graveyard-card-media img { width: 100%; height: 100%; display: block; object-fit: cover; transition: transform .55s cubic-bezier(.2,.8,.2,1); }
        .graveyard-card:hover .graveyard-card-media img { transform: scale(1.055); }
        .graveyard-card-shade { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 48%, rgba(0,0,0,.62)); }
        .graveyard-card-open { position: absolute; right: 14px; bottom: 14px; padding: 7px 10px; border: 1px solid rgba(255,255,255,.22); border-radius: 999px; color: #fff; background: rgba(0,0,0,.38); backdrop-filter: blur(14px); font-size: 12px; font-weight: 650; }
        .graveyard-card-copy { display: flex; flex-direction: column; gap: 11px; padding: 21px 22px 23px; }
        .graveyard-meta-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .graveyard-category { color: var(--brand); font-size: 11px; font-weight: 750; letter-spacing: .09em; text-transform: uppercase; }
        .graveyard-rip { color: var(--muted-foreground); font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
        .graveyard-card h3 { margin: 0; color: var(--foreground); font-size: 23px; line-height: 1.15; letter-spacing: -.025em; }
        .graveyard-years { display: flex; align-items: baseline; gap: 10px; color: var(--foreground); }
        .graveyard-years strong { font-size: 17px; }
        .graveyard-years span { color: var(--muted-foreground); font-size: 13px; }
        .graveyard-card p { margin: 0; }
        .graveyard-cause { color: var(--foreground); font-size: 15px; font-weight: 650; font-style: italic; line-height: 1.42; }
        .graveyard-eulogy { color: var(--muted-foreground); font-size: 15px; line-height: 1.56; }
        .graveyard-modal-backdrop { position: fixed; inset: 0; z-index: 20000; display: grid; place-items: center; padding: 22px; background: rgba(3,3,6,.76); backdrop-filter: blur(24px) saturate(130%); animation: graveyardFade .2s ease both; }
        .graveyard-modal { position: relative; width: min(980px, 100%); max-height: min(880px, calc(100vh - 44px)); overflow: auto; border: 1px solid rgba(255,255,255,.14); border-radius: 32px; background: color-mix(in srgb, var(--card) 88%, transparent); color: var(--foreground); box-shadow: 0 40px 120px rgba(0,0,0,.5); animation: graveyardLift .28s cubic-bezier(.2,.8,.2,1) both; }
        .graveyard-modal-close { position: absolute; z-index: 3; top: 14px; right: 14px; width: 42px; height: 42px; border: 1px solid rgba(255,255,255,.2); border-radius: 50%; background: rgba(0,0,0,.45); color: #fff; font-size: 27px; line-height: 1; cursor: pointer; backdrop-filter: blur(15px); }
        .graveyard-modal-stage { position: relative; height: min(52vh, 470px); background: radial-gradient(circle at 52% 48%, color-mix(in srgb, var(--brand) 25%, transparent), transparent 58%), #08090d; overflow: hidden; }
        .graveyard-modal-stage img { width: 100%; height: 100%; object-fit: contain; display: block; padding: 20px; }
        .graveyard-modal-count { position: absolute; left: 18px; bottom: 16px; padding: 7px 10px; border: 1px solid rgba(255,255,255,.18); border-radius: 999px; background: rgba(0,0,0,.4); color: rgba(255,255,255,.8); font-size: 10px; font-weight: 700; letter-spacing: .12em; backdrop-filter: blur(15px); }
        .graveyard-thumbnails { display: flex; gap: 8px; padding: 12px 18px 0; overflow-x: auto; }
        .graveyard-thumbnails button { width: 74px; height: 54px; flex: 0 0 auto; padding: 0; overflow: hidden; border: 2px solid transparent; border-radius: 10px; background: #111; cursor: pointer; opacity: .6; }
        .graveyard-thumbnails button.is-active { opacity: 1; border-color: var(--brand); }
        .graveyard-thumbnails img { width: 100%; height: 100%; object-fit: cover; }
        .graveyard-modal-copy { padding: 24px 28px 28px; }
        .graveyard-modal-copy h2 { margin: 13px 0 12px; color: var(--foreground); font-size: clamp(32px, 5vw, 52px); line-height: 1; letter-spacing: -.04em; }
        .graveyard-modal-copy > p { color: var(--muted-foreground); font-size: 17px; line-height: 1.6; }
        .graveyard-modal-copy .graveyard-modal-cause { color: var(--foreground); font-size: 18px; font-weight: 650; font-style: italic; }
        .graveyard-modal-footer { display: flex; justify-content: space-between; gap: 18px; margin-top: 22px; padding-top: 18px; border-top: 1px solid var(--border); color: var(--muted-foreground); font-size: 12px; }
        .graveyard-modal-footer a { color: var(--brand); font-weight: 650; text-decoration: none; }
        .graveyard-closing { text-align: center; }
        .graveyard-closing h2 { margin: 0 0 14px; color: var(--foreground); font-size: clamp(30px, 4vw, 46px); letter-spacing: -.035em; }
        .graveyard-closing p { max-width: 560px; margin: 0 auto 26px; color: var(--muted-foreground); font-size: 17px; }
        .graveyard-closing > div > div { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; }
        .graveyard-outline-link { display: inline-flex; align-items: center; padding: 8px 16px; border: 1px solid var(--brand); border-radius: 999px; color: var(--brand); text-decoration: none; }
        @keyframes graveyardFade { from { opacity: 0; } }
        @keyframes graveyardLift { from { opacity: 0; transform: translateY(18px) scale(.98); } }
        @media (max-width: 680px) {
          .graveyard-grid { grid-template-columns: 1fr; }
          .graveyard-card-media { height: 230px; }
          .graveyard-modal-backdrop { padding: 0; align-items: end; }
          .graveyard-modal { max-height: 92vh; border-radius: 28px 28px 0 0; }
          .graveyard-modal-stage { height: 38vh; }
          .graveyard-modal-copy { padding: 22px; }
          .graveyard-modal-footer { flex-direction: column; gap: 8px; }
        }
        @media (prefers-reduced-motion: reduce) { .graveyard-card, .graveyard-card img, .graveyard-modal, .graveyard-modal-backdrop { animation: none !important; transition: none !important; } }
      `}</style>
    </div>
  );
}
