import { useState, useEffect } from "react";

// Table of Contents — auto-generates from page headings
// Sticky sidebar on desktop, collapsible on mobile

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

export default function TableOfContents({ items, className = "" }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setCollapsed(true);
    }
  };

  if (items.length === 0) return null;

  return (
    <nav className={`${className}`}>
      {/* Mobile toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="md:hidden w-full flex items-center justify-between px-4 py-2 rounded-lg bg-white/5 border border-border/30 text-sm font-medium mb-2"
      >
        <span>On this page</span>
        <svg className={`w-4 h-4 transition-transform ${collapsed ? "" : "rotate-180"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* TOC list */}
      <div className={`${collapsed ? "hidden md:block" : "block"}`}>
        <p className="hidden md:block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">On this page</p>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left text-xs py-1 transition-all hover:text-foreground ${
                  activeId === item.id
                    ? "text-blue-400 font-medium"
                    : "text-muted-foreground"
                }`}
                style={{ paddingLeft: `${(item.level - 2) * 12 + 8}px` }}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
