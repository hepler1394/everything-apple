/* The classic six-color Apple logo (1977–1998), rendered as an SVG with the
   rainbow bands clipped to the apple silhouette. Used in the ClassicNav tab. */

interface Props {
  size?: number;
  title?: string;
}

// Classic rainbow order, top → bottom.
const BANDS = ["#61bb46", "#fdb827", "#f5821f", "#e03a3e", "#963d97", "#009ddc"];

export default function AppleLogo6({ size = 20, title = "Apple" }: Props) {
  // Unique id so multiple instances don't collide.
  const clipId = `apple6-clip-${size}`;
  const band = 24 / BANDS.length;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      style={{ display: "block", flexShrink: 0 }}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M17.05 12.536c-.03-3.03 2.474-4.485 2.587-4.556-1.41-2.061-3.602-2.343-4.382-2.375-1.866-.19-3.64 1.098-4.586 1.098-.943 0-2.405-1.07-3.957-1.04-2.036.03-3.913 1.183-4.96 3.006-2.114 3.666-.54 9.093 1.516 12.07 1.004 1.456 2.2 3.09 3.77 3.033 1.513-.06 2.084-.98 3.913-.98 1.83 0 2.343.98 3.943.95 1.628-.03 2.66-1.485 3.656-2.945 1.153-1.69 1.627-3.325 1.657-3.41-.036-.016-3.176-1.22-3.21-4.844zM14.09 3.6C14.92 2.59 15.48 1.19 15.33 0c-1.13.046-2.5.757-3.36 1.766-.77.895-1.44 2.32-1.26 3.686 1.26.098 2.55-.643 3.38-1.653z" />
        </clipPath>
      </defs>
      {BANDS.map((c, i) => (
        <rect
          key={c}
          x="0"
          y={i * band}
          width="24"
          height={band + 0.5}
          fill={c}
          clipPath={`url(#${clipId})`}
        />
      ))}
    </svg>
  );
}
