interface Props {
  modelId: string;
  size?: number;
}

const COLORS = ["#f25f5c", "#f4a261", "#93c5fd", "#f8fafc", "#4ade80", "#f472b6", "#a78bfa", "#ef4444"];

export default function WatchRender({ modelId, size = 260 }: Props) {
  const number = Number(modelId.match(/\d+/)?.[0] ?? 0);
  const ultra = modelId.includes("ultra");
  const se = modelId.includes("se-");
  const accent = ultra ? "#ff6a00" : COLORS[number % COLORS.length];
  const uid = modelId.replace(/[^a-z0-9]/gi, "");
  const width = size * 0.72;

  return (
    <svg width={width} height={size} viewBox="0 0 230 320" role="img" aria-label={`${modelId} transparent render`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`band-${uid}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor={accent} /><stop offset="1" stopColor="#101114" /></linearGradient>
        <linearGradient id={`case-${uid}`} x1="0" y1="0" x2="1" y2="1"><stop stopColor={ultra ? "#eee9df" : "#c8cbd0"} /><stop offset=".52" stopColor={ultra ? "#817c72" : "#3b3c40"} /><stop offset="1" stopColor="#131416" /></linearGradient>
        <radialGradient id={`face-${uid}`} cx="45%" cy="40%" r="70%"><stop stopColor="#1b2744" /><stop offset=".55" stopColor="#07090e" /><stop offset="1" stopColor="#000" /></radialGradient>
        <filter id={`shadow-${uid}`} x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="16" stdDeviation="12" floodOpacity=".5" /></filter>
      </defs>
      <g filter={`url(#shadow-${uid})`}>
        <path d="M77 103 86 10c2-8 10-10 29-10s27 2 29 10l9 93Z" fill={`url(#band-${uid})`} />
        <path d="m77 217 9 93c2 8 10 10 29 10s27-2 29-10l9-93Z" fill={`url(#band-${uid})`} />
        <rect x="38" y="86" width="154" height="148" rx={ultra ? 39 : 48} fill={`url(#case-${uid})`} />
        {ultra && <rect x="28" y="126" width="18" height="62" rx="9" fill="#7d796f" />}
        <rect x="47" y="95" width="136" height="130" rx={ultra ? 31 : 40} fill={`url(#face-${uid})`} stroke="rgba(255,255,255,.18)" strokeWidth="2" />
        <circle cx="196" cy="146" r={ultra ? 16 : 13} fill={ultra ? accent : "#696b70"} stroke="#c8cbd0" strokeWidth="3" />
        <circle cx="115" cy="160" r="45" fill="none" stroke={accent} strokeWidth="5" strokeDasharray={se ? "115 170" : "198 84"} transform="rotate(-88 115 160)" />
        <circle cx="115" cy="160" r="32" fill="none" stroke="#4cc9f0" strokeWidth="4" strokeDasharray="90 111" transform="rotate(40 115 160)" />
        <circle cx="115" cy="160" r="20" fill="none" stroke="#f7d154" strokeWidth="3" strokeDasharray="55 71" transform="rotate(165 115 160)" />
        <path d="M115 160 91 132M115 160l34-13" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="115" cy="160" r="4" fill="#fff" />
        <text x="115" y="113" textAnchor="middle" fill="rgba(255,255,255,.78)" fontFamily="system-ui" fontSize="9" fontWeight="700">{ultra ? "ULTRA" : se ? "SE" : `SERIES ${number || "1"}`}</text>
      </g>
    </svg>
  );
}
