/* =============================================================
   PhoneRender — Crisp vector iPhone renders (transparent bg)
   Replaces low-res / duplicated CDN photos on the history page.
   Renders the back of each model so the camera layout + finish
   visually distinguish every generation. Scales without blur.

   2026-07 redraw: true-to-hardware proportions (body corner
   radius ~14% of width instead of 30%), smaller camera modules
   with ringed lenses, darker metal rail, grounded drop shadow,
   plus two new layouts — "single" for the one-camera era
   (2G→8/SE) and "plateau" for the iPhone 17 Pro's full-width
   camera bar.
   ============================================================= */

type CameraLayout =
  | "single"
  | "dual-square"
  | "dual-diagonal"
  | "dual-pill"
  | "triple"
  | "plateau";

interface RenderConfig {
  body: string;   // back-glass finish
  frame: string;  // metal rail
  camera: CameraLayout;
}

/* Per-model finish + camera layout */
const CONFIG: Record<string, RenderConfig> = {
  "iphone-11":      { body: "#ededef", frame: "#c9cacd", camera: "dual-square" },
  "iphone-11-pro":  { body: "#4d584f", frame: "#39423b", camera: "triple" },
  "iphone-12":      { body: "#27598e", frame: "#1d4470", camera: "dual-diagonal" },
  "iphone-12-pro":  { body: "#2e4a62", frame: "#a9925c", camera: "triple" },
  "iphone-13":      { body: "#202430", frame: "#171b24", camera: "dual-diagonal" },
  "iphone-13-pro":  { body: "#9bb6d4", frame: "#7e99b5", camera: "triple" },
  "iphone-14":      { body: "#cdd8ea", frame: "#a9b6ca", camera: "dual-diagonal" },
  "iphone-14-pro":  { body: "#574d63", frame: "#453c50", camera: "triple" },
  "iphone-15":      { body: "#c9d6db", frame: "#a7b6bc", camera: "dual-diagonal" },
  "iphone-15-pro":  { body: "#b7b1a8", frame: "#96908a", camera: "triple" },
  "iphone-16":      { body: "#4d63c4", frame: "#3a4da3", camera: "dual-pill" },
  "iphone-16-pro":  { body: "#c0a886", frame: "#a08a6c", camera: "triple" },
  "iphone-17":      { body: "#b6d2ec", frame: "#93b1cd", camera: "dual-pill" },
  "iphone-17-pro":  { body: "#c8a3a0", frame: "#b08b88", camera: "plateau" },
};

const FALLBACK: RenderConfig = { body: "#d8d8d2", frame: "#9d9d99", camera: "single" };

function configFor(modelId: string): RenderConfig {
  if (CONFIG[modelId]) return CONFIG[modelId];
  const family = Object.keys(CONFIG).sort((a, b) => b.length - a.length).find((id) => modelId.startsWith(`${id}-`));
  if (family) return CONFIG[family];
  /* The one-camera era — 2G through 8 and the SEs. */
  if (/iphone-(2g|3g|3gs)/.test(modelId)) return { body: "#18191b", frame: "#0e0f11", camera: "single" };
  if (/iphone-(4|4s)/.test(modelId)) return { body: "#f4f4f2", frame: "#8f9194", camera: "single" };
  if (/iphone-(5|5s|se-1)/.test(modelId)) return { body: "#d9d3c8", frame: "#a29c91", camera: "single" };
  if (modelId === "iphone-5c") return { body: "#63cfe3", frame: "#3fb4ca", camera: "single" };
  if (/iphone-(6|6s|7|8|se-2|se-3)/.test(modelId)) return { body: "#d6b4a7", frame: "#bd9c8f", camera: "single" };
  if (/iphone-(x|xs|xs-max)/.test(modelId)) return { body: "#ddd8cf", frame: "#a8a196", camera: "dual-pill" };
  if (modelId === "iphone-xr") return { body: "#ef4b4f", frame: "#c93438", camera: "single" };
  return FALLBACK;
}

/* Rough luminance so the Apple logo contrasts the finish */
function isLight(hex: string): boolean {
  const h = hex.replace("#", "").slice(0, 6).padEnd(6, "0");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6;
}

interface PhoneRenderProps {
  modelId: string;
  /** rendered height in px (width scales with the 220×440 viewBox) */
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

/* Ringed lens: metal rim → barrel → element → blue reflection */
function Lens({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#26262a" />
      <circle cx={cx} cy={cy} r={r - 1.5} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth={1} />
      <circle cx={cx} cy={cy} r={r * 0.66} fill="#0b0b0d" />
      <circle cx={cx} cy={cy} r={r * 0.4} fill="#101c2e" />
      <circle cx={cx} cy={cy} r={r * 0.4} fill="none" stroke="rgba(90,130,190,0.4)" strokeWidth={0.8} />
      <circle cx={cx - r * 0.3} cy={cy - r * 0.3} r={r * 0.14} fill="rgba(150,190,240,0.75)" />
    </g>
  );
}

function Flash({ cx, cy, r = 4.5 }: { cx: number; cy: number; r?: number }) {
  return <circle cx={cx} cy={cy} r={r} fill="#f4ecd8" stroke="rgba(0,0,0,0.18)" />;
}

export default function PhoneRender({ modelId, size = 360, style, className }: PhoneRenderProps) {
  const cfg = configFor(modelId);
  const logoColor = isLight(cfg.body) ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.85)";
  const uid = modelId.replace(/[^a-z0-9]/gi, "");
  const width = (size * 220) / 440;
  const moduleFill = "rgba(0,0,0,0.11)";
  const moduleRim = "rgba(255,255,255,0.28)";

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 220 440"
      className={className}
      style={style}
      role="img"
      aria-label={`${modelId} render`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{modelId} vector render</title>
      <defs>
        <linearGradient id={`frame-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0.28" />
          <stop offset="0.06" stopColor={cfg.frame} />
          <stop offset="0.5" stopColor={cfg.frame} stopOpacity="0.92" />
          <stop offset="0.94" stopColor={cfg.frame} />
          <stop offset="1" stopColor="#000" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id={`body-${uid}`} x1="0.15" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor={cfg.body} />
          <stop offset="0.55" stopColor={cfg.body} />
          <stop offset="1" stopColor="#000" stopOpacity="0.14" />
        </linearGradient>
        <linearGradient id={`sheen-${uid}`} x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="0.3" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="110" cy="430" rx="72" ry="7" fill="rgba(0,0,0,0.10)" />

      {/* Side buttons */}
      <rect x="30" y="122" width="3.5" height="30" rx="1.75" fill={cfg.frame} />
      <rect x="30" y="162" width="3.5" height="30" rx="1.75" fill={cfg.frame} />
      <rect x="186.5" y="138" width="3.5" height="46" rx="1.75" fill={cfg.frame} />

      {/* Metal frame */}
      <rect x="32" y="8" width="156" height="416" rx="34" fill={`url(#frame-${uid})`} />
      {/* Back glass */}
      <rect x="37" y="13" width="146" height="406" rx="29" fill={`url(#body-${uid})`} />
      {/* Glass sheen */}
      <rect x="37" y="13" width="146" height="406" rx="29" fill={`url(#sheen-${uid})`} />

      {/* Apple logo (upper-center, like the hardware) */}
      <g transform="translate(110 210) scale(1.05)" fill={logoColor}>
        <path d="M13.5 -4.2c-0.1 -3.2 2.6 -4.7 2.7 -4.8 -1.5 -2.1 -3.7 -2.4 -4.5 -2.4 -1.9 -0.2 -3.7 1.1 -4.7 1.1 -1 0 -2.4 -1.1 -4 -1 -2.1 0 -4 1.2 -5 3 -2.2 3.7 -0.6 9.3 1.5 12.3 1 1.5 2.3 3.1 3.9 3 1.6 -0.1 2.1 -1 4 -1 1.8 0 2.3 1 4 1 1.6 0 2.7 -1.5 3.7 -2.9 1.2 -1.7 1.6 -3.3 1.7 -3.4 0 0 -3.3 -1.3 -3.4 -5z" />
        <path d="M10.5 -13.2c0.8 -1 1.4 -2.4 1.2 -3.8 -1.2 0.1 -2.7 0.8 -3.5 1.8 -0.8 0.9 -1.5 2.3 -1.3 3.7 1.3 0.1 2.7 -0.7 3.6 -1.7z" />
      </g>

      {/* Camera module */}
      {cfg.camera === "plateau" && (
        <g>
          <rect x="38" y="26" width="144" height="62" rx="22" fill={moduleFill} />
          <rect x="38.75" y="26.75" width="142.5" height="60.5" rx="21.5" fill="none" stroke={moduleRim} strokeWidth={1.5} />
          <Lens cx={62} cy={44} r={12} />
          <Lens cx={62} cy={70} r={12} />
          <Lens cx={90} cy={57} r={12} />
          <Flash cx={158} cy={44} r={5} />
          <circle cx={158} cy={70} r={4} fill="#1c1210" />
          <circle cx={130} cy={57} r={2.5} fill="#0d0d0f" />
        </g>
      )}

      {cfg.camera === "triple" && (
        <g>
          <rect x="44" y="26" width="74" height="74" rx="24" fill={moduleFill} />
          <rect x="44.75" y="26.75" width="72.5" height="72.5" rx="23.5" fill="none" stroke={moduleRim} strokeWidth={1.5} />
          <Lens cx={66} cy={48} r={13} />
          <Lens cx={66} cy={78} r={13} />
          <Lens cx={96} cy={63} r={13} />
          <Flash cx={96} cy={38} />
          <circle cx={96} cy={88} r={3.5} fill="#1c1210" />
        </g>
      )}

      {cfg.camera === "dual-square" && (
        <g>
          <rect x="44" y="26" width="62" height="62" rx="20" fill={moduleFill} />
          <rect x="44.75" y="26.75" width="60.5" height="60.5" rx="19.5" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth={1.5} />
          <Lens cx={64} cy={45} r={11.5} />
          <Lens cx={64} cy={69} r={11.5} />
          <Flash cx={90} cy={45} r={4} />
          <circle cx={90} cy={69} r={3} fill="#141416" />
        </g>
      )}

      {cfg.camera === "dual-diagonal" && (
        <g>
          <rect x="44" y="26" width="66" height="66" rx="21" fill={moduleFill} />
          <rect x="44.75" y="26.75" width="64.5" height="64.5" rx="20.5" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth={1.5} />
          <Lens cx={64} cy={46} r={12.5} />
          <Lens cx={90} cy={72} r={12.5} />
          <Flash cx={90} cy={46} r={4} />
        </g>
      )}

      {cfg.camera === "dual-pill" && (
        <g>
          <rect x="48" y="26" width="40" height="82" rx="20" fill={moduleFill} />
          <rect x="48.75" y="26.75" width="38.5" height="80.5" rx="19.5" fill="none" stroke={moduleRim} strokeWidth={1.5} />
          <Lens cx={68} cy={46} r={12.5} />
          <Lens cx={68} cy={88} r={12.5} />
          <Flash cx={100} cy={40} />
        </g>
      )}

      {cfg.camera === "single" && (
        <g>
          <rect x="46" y="28" width="46" height="26" rx="13" fill={moduleFill} />
          <Lens cx={60} cy={41} r={9.5} />
          <Flash cx={78} cy={41} r={4} />
        </g>
      )}
    </svg>
  );
}
