import { useState, useEffect } from "react";
import { toast } from "sonner";

// Bookmark Button — allows users to save pages to localStorage
// Shows a heart/bookmark icon that fills when bookmarked

interface BookmarkButtonProps {
  pageId: string;
  pageTitle: string;
  className?: string;
}

interface Bookmark {
  id: string;
  title: string;
  path: string;
  savedAt: string;
}

export function getBookmarks(): Bookmark[] {
  try {
    const raw = localStorage.getItem("ea-bookmarks");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isBookmarked(pageId: string): boolean {
  return getBookmarks().some(b => b.id === pageId);
}

export function toggleBookmark(pageId: string, pageTitle: string): boolean {
  const bookmarks = getBookmarks();
  const existing = bookmarks.findIndex(b => b.id === pageId);
  if (existing >= 0) {
    bookmarks.splice(existing, 1);
    localStorage.setItem("ea-bookmarks", JSON.stringify(bookmarks));
    return false;
  } else {
    bookmarks.push({
      id: pageId,
      title: pageTitle,
      path: window.location.pathname,
      savedAt: new Date().toISOString(),
    });
    localStorage.setItem("ea-bookmarks", JSON.stringify(bookmarks));
    return true;
  }
}

export default function BookmarkButton({ pageId, pageTitle, className = "" }: BookmarkButtonProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isBookmarked(pageId));
  }, [pageId]);

  const handleClick = () => {
    const nowSaved = toggleBookmark(pageId, pageTitle);
    setSaved(nowSaved);
    if (nowSaved) {
      toast.success("Bookmarked!", { description: `"${pageTitle}" saved to your bookmarks.` });
    } else {
      toast.info("Removed", { description: `"${pageTitle}" removed from bookmarks.` });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
        saved
          ? "bg-pink-500/10 text-pink-400 border border-pink-500/30"
          : "bg-white/5 text-muted-foreground border border-border/50 hover:bg-white/10"
      } ${className}`}
      title={saved ? "Remove bookmark" : "Bookmark this page"}
    >
      <svg className="w-3.5 h-3.5" fill={saved ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      {saved ? "Saved" : "Save"}
    </button>
  );
}
