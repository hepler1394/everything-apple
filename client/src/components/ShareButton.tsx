/*
  ShareButton — Everything Apple
  Design: Apple.com minimal icon button
  - Uses Web Share API on mobile (native iOS share sheet)
  - Falls back to clipboard copy on desktop
  - Shows brief "Copied" confirmation
  - No emoji, no color unless active
  Built by Cory Hepler
*/
import { useState } from "react";
import { toast } from "sonner";

interface ShareButtonProps {
  title: string;
  text?: string;
  url?: string;
  dark?: boolean; // true = white icon (for dark sections)
}

export default function ShareButton({ title, text, url, dark = false }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: text || title, url: shareUrl });
      } catch {
        // User cancelled — no error needed
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        toast.success("Link copied to clipboard");
        setTimeout(() => setCopied(false), 2000);
      } catch {
        toast.error("Could not copy link");
      }
    }
  }

  const color = dark ? "rgba(245,245,247,0.6)" : "rgba(29,29,31,0.5)";
  const hoverColor = dark ? "#f5f5f7" : "#1d1d1f";

  return (
    <button
      onClick={handleShare}
      aria-label="Share this page"
      title="Share"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: "none",
        border: `1px solid ${dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)"}`,
        borderRadius: "980px",
        padding: "8px 16px",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: 500,
        letterSpacing: "-0.01em",
        color: copied ? (dark ? "#30d158" : "#34c759") : color,
        transition: "all 0.2s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.color = hoverColor;
        (e.currentTarget as HTMLElement).style.borderColor = dark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.25)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.color = copied ? (dark ? "#30d158" : "#34c759") : color;
        (e.currentTarget as HTMLElement).style.borderColor = dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)";
      }}
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M10 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM4 5a1.5 1.5 0 1 1 0 3A1.5 1.5 0 0 1 4 5zm6 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM5.3 6.6l3.4-2M5.3 7.4l3.4 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          Share
        </>
      )}
    </button>
  );
}
