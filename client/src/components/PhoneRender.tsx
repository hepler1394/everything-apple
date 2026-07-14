/* =============================================================
   PhoneRender — Crisp vector iPhone renders (transparent bg)
   Replaces low-res / duplicated CDN photos on the history page.
   Renders the back of each model so the camera layout + finish
   visually distinguish every generation. Scales without blur.
   ============================================================= */

type CameraLayout = "dual-square" | "dual-diagonal" | "dual-pill" | "triple";

interface RenderConfig {
  body: string;   // back-glass finish
  frame: string;  // metal rail
  camera: CameraLayout;
}

/* Per-model finish + camera layout */
const CONFIG: Record<string, RenderConfig> = {
  "iphone-11":      { body: "#ededef", frame: "#cfd0d2", camera: "dual-square" },
  "iphone-11-pro":  { body: "#4d584f", frame: "#aeb4a6", camera: "triple" },
  "iphone-12":      { body: "#27598e", frame: "#5b86b3", camera: "dual-diagonal" },
  "iphone-12-pro":  { body: "#2e4a62", frame: "#c9b27a", camera: "triple" },
  "iphone-13":      { body: "#20243033", frame: "#3a4150", camera: "dual-diagonal" },
  "iphone-13-pro":  { body: "#9bb6d4", frame: "#c8d3df", camera: "triple" },
  "iphone-14":      { body: "#cdd8ea", frame: "#dde4ee", camera: "dual-diagonal" },
  "iphone-14-pro":  { body: "#574d63", frame: "#8d8499", camera: "triple" },
  "iphone-15":      { body: "#c9d6db", frame: "#d8e0e4", camera: "dual-diagonal" },
  "iphone-15-pro":  { body: "#b7b1a8", frame: "#c9c4bc", camera: "triple" },
  "iphone-16":      { body: "#4d63c4", frame: "#8a99dd", camera: "dual-pill" },
  "iphone-16-pro":  { body: "#c0a886", frame: "#d8c7ad", camera: "triple" },
  "iphone-17":      { body: "#b6d2ec", frame: "#cfe0f1", camera: "dual-pill" },
  "iphone-17-pro":  { body: "#c8a3a0", frame: "#dcc0bd", camera: "triple" },
};

const FALLBACK: RenderConfig = { body: "#d8d8d2", frame: "#8b8b88", camera: "dual-square" };

function configFor(modelId: string): RenderConfig {
  if (CONFIG[modelId]) return CONFIG[modelId];
  const family = Object.keys(CONFIG).sort((a, b) => b.length - a.length).find((id) => modelId.startsWith(`${id}-`));
  if (family) return CONFIG[family];
  if (/iphone-(2g|3g|3gs)/.test(modelId)) return { body: "#18191b", frame: "#aeb0b3", camera: "dual-square" };
  if (/iphone-(4|4s)/.test(modelId)) return { body: "#f4f4f2", frame: "#aeb0b3", camera: "dual-square" };
  if (/iphone-(5|5s|se-1)/.test(modelId)) return { body: "#d9d3c8", frame: "#b8b2a7", camera: "dual-square" };
  if (modelId === "iphone-5c") return { body: "#63cfe3", frame: "#85e4f2", camera: "dual-square" };
  if (/iphone-(6|6s|7|8|se-2|se-3)/.test(modelId)) return { body: "#d6b4a7", frame: "#c7a89d", camera: "dual-square" };
  if (/iphone-(x|xs|xs-max)/.test(modelId)) return { body: "#ddd8cf", frame: "#aaa39a", camera: "dual-pill" };
  if (modelId === "iphone-xr") return { body: "#ef4b4f", frame: "#f37475", camera: "dual-square" };
  return FALLBACK;
}

/* Rough luminance so the Apple logo + lenses contrast the finish */
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

function Lens({ cx, cy, r = 15 }: { cx: number; cy: number; r?: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="#1b1b1d" stroke="rgba(255,255,255,0.18)" strokeWidth={1.5} />
      <circle cx={cx} cy={cy} r={r - 4} fill="#0a0a0b" />
      <circle cx={cx} cy={cy} r={r - 8} fill="#12243a" />
      <circle cx={cx - r * 0.28} cy={cy - r * 0.28} r={r * 0.22} fill="rgba(120,170,230,0.55)" />
    </g>
  );
}

export default function PhoneRender({ modelId, size = 360, style, className }: PhoneRenderProps) {
  const cfg = configFor(modelId);
  const logoColor = isLight(cfg.body) ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.9)";
  const uid = modelId.replace(/[^a-z0-9]/gi, "");
  const width = (size * 220) / 440;

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
          <stop offset="0" stopColor={cfg.frame} stopOpacity="0.6" />
          <stop offset="0.18" stopColor={cfg.frame} />
          <stop offset="0.5" stopColor={cfg.frame} stopOpacity="0.85" />
          <stop offset="0.82" stopColor={cfg.frame} />
          <stop offset="1" stopColor={cfg.frame} stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id={`body-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={cfg.body} stopOpacity="0.92" />
          <stop offset="0.5" stopColor={cfg.body} />
          <stop offset="1" stopColor={cfg.body} stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id={`sheen-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="0.35" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Side buttons */}
      <rect x="24" y="120" width="4" height="34" rx="2" fill={cfg.frame} opacity="0.9" />
      <rect x="24" y="168" width="4" height="34" rx="2" fill={cfg.frame} opacity="0.9" />
      <rect x="192" y="140" width="4" height="48" rx="2" fill={cfg.frame} opacity="0.9" />

      {/* Metal frame */}
      <rect x="26" y="6" width="168" height="428" rx="50" fill={`url(#frame-${uid})`} />
      {/* Back glass */}
      <rect x="32" y="12" width="156" height="416" rx="44" fill={`url(#body-${uid})`} />
      {/* Glass sheen */}
      <rect x="32" y="12" width="156" height="416" rx="44" fill={`url(#sheen-${uid})`} />

      {/* Apple logo (centered) */}
      <g transform="translate(110 250) scale(0.95)" fill={logoColor}>
        <path d="M13.5 -4.2c-0.1 -3.2 2.6 -4.7 2.7 -4.8 -1.5 -2.1 -3.7 -2.4 -4.5 -2.4 -1.9 -0.2 -3.7 1.1 -4.7 1.1 -1 0 -2.4 -1.1 -4 -1 -2.1 0 -4 1.2 -5 3 -2.2 3.7 -0.6 9.3 1.5 12.3 1 1.5 2.3 3.1 3.9 3 1.6 -0.1 2.1 -1 4 -1 1.8 0 2.3 1 4 1 1.6 0 2.7 -1.5 3.7 -2.9 1.2 -1.7 1.6 -3.3 1.7 -3.4 0 0 -3.3 -1.3 -3.4 -5z" />
        <path d="M10.5 -13.2c0.8 -1 1.4 -2.4 1.2 -3.8 -1.2 0.1 -2.7 0.8 -3.5 1.8 -0.8 0.9 -1.5 2.3 -1.3 3.7 1.3 0.1 2.7 -0.7 3.6 -1.7z" />
      </g>

      {/* Camera module */}
      {cfg.camera === "triple" && (
        <g>
          <rect x="44" y="26" width="90" height="90" rx="26" fill="rgba(0,0,0,0.10)" stroke="rgba(0,0,0,0.10)" />
          <Lens cx={70} cy={52} r={16} />
          <Lens cx={108} cy={52} r={16} />
          <Lens cx={70} cy={90} r={16} />
          {/* flash */}
          <circle cx={110} cy={92} r={7} fill="#fdf6e3" stroke="rgba(0,0,0,0.15)" />
          {/* LiDAR */}
          <circle cx={110} cy={92} r={0} />
          <circle cx={92} cy={92} r={6} fill="#23150f" />
        </g>
      )}

      {cfg.camera === "dual-square" && (
        <g>
          <rect x="46" y="26" width="72" height="84" rx="24" fill="rgba(0,0,0,0.08)" />
          <Lens cx={70} cy={52} r={16} />
          <Lens cx={70} cy={86} r={16} />
          <circle cx={102} cy={70} r={6} fill="#fdf6e3" stroke="rgba(0,0,0,0.15)" />
        </g>
      )}

      {cfg.camera === "dual-diagonal" && (
        <g>
          <rect x="46" y="26" width="80" height="80" rx="24" fill="rgba(0,0,0,0.07)" />
          <Lens cx={72} cy={50} r={16} />
          <Lens cx={100} cy={82} r={16} />
          <circle cx={72} cy={84} r={5} fill="#fdf6e3" stroke="rgba(0,0,0,0.15)" />
        </g>
      )}

      {cfg.camera === "dual-pill" && (
        <g>
          <rect x="52" y="26" width="46" height="96" rx="23" fill="rgba(0,0,0,0.10)" />
          <Lens cx={75} cy={50} r={16} />
          <Lens cx={75} cy={92} r={16} />
        </g>
      )}
    </svg>
  );
}
