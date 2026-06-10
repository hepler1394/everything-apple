import { Link } from "wouter";

// Related Pages — shows relevant links at the bottom of each page
// Helps users discover more content and improves internal linking

interface RelatedPage {
  title: string;
  description: string;
  path: string;
  tag?: string;
}

interface RelatedPagesProps {
  pages: RelatedPage[];
  title?: string;
  className?: string;
}

export default function RelatedPages({ pages, title = "Related Content", className = "" }: RelatedPagesProps) {
  if (pages.length === 0) return null;

  return (
    <section className={`py-10 px-4 border-t border-border/30 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {pages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="group p-4 rounded-xl border border-border/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all hover:border-blue-500/30"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  {page.tag && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 font-medium mb-1 inline-block">
                      {page.tag}
                    </span>
                  )}
                  <h3 className="text-sm font-bold group-hover:text-blue-400 transition-colors">{page.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{page.description}</p>
                </div>
                <svg className="w-4 h-4 text-muted-foreground group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
