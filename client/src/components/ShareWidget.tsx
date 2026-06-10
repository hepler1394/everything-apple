import { toast } from "sonner";

// Share Widget — uses native Web Share API on mobile, copies URL on desktop

interface ShareWidgetProps {
  title: string;
  text?: string;
  className?: string;
}

export default function ShareWidget({ title, text, className = "" }: ShareWidgetProps) {
  const handleShare = async () => {
    const url = window.location.href;
    
    // Try native share API first (mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: text || `Check out "${title}" on Everything Apple`,
          url,
        });
        return;
      } catch (e) {
        // User cancelled or API failed, fall through to clipboard
        if ((e as Error).name === "AbortError") return;
      }
    }
    
    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied!", { description: "URL copied to clipboard." });
    } catch {
      // Final fallback
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      toast.success("Link copied!");
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-muted-foreground border border-border/50 hover:bg-white/10 transition-all ${className}`}
      title="Share this page"
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
      Share
    </button>
  );
}
