import { useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";

interface NewsItem {
  id: string;
  title: string;
  link: string;
  source: string;
  category: string;
  date: string;
  summary: string;
  image: string;
}

export default function NewsArticle() {
  const [, params] = useRoute("/news/:id");
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const story = useMemo(() => items.find((item) => item.id === params?.id), [items, params?.id]);
  const related = useMemo(() => story ? items.filter((item) => item.id !== story.id && item.category === story.category).slice(0, 4) : [], [items, story]);

  useEffect(() => {
    fetch("/data/news.json", { cache: "no-cache" })
      .then((response) => response.json())
      .then((data) => setItems(Array.isArray(data.items) ? data.items : []))
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (!story) return;
    document.title = `${story.title} — Everything Apple`;
    return () => { document.title = "Everything Apple"; };
  }, [story]);

  if (!loaded) return <div style={{ minHeight: "70vh", background: "var(--background)" }} />;
  if (!story) return (
    <section className="section-snow section-pad"><div className="page-container"><h1>Story unavailable.</h1><Link href="/news"><span style={{ color: "var(--brand)", cursor: "pointer" }}>Back to the news desk</span></Link></div></section>
  );

  return (
    <article style={{ background: "var(--background)", minHeight: "100vh" }}>
      <header style={{ padding: "64px 22px 44px", background: "linear-gradient(180deg, color-mix(in srgb, var(--brand) 9%, var(--background)), var(--background))" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <Link href="/news"><span style={{ display: "inline-block", marginBottom: "28px", color: "var(--brand)", fontSize: "14px", fontWeight: 650, cursor: "pointer" }}>← News desk</span></Link>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "16px", fontSize: "12px", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--brand)" }}>
            <span>{story.source}</span><span style={{ color: "var(--muted-foreground)" }}>·</span><span style={{ color: "var(--muted-foreground)" }}>{new Date(story.date).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}</span>
          </div>
          <h1 style={{ margin: 0, maxWidth: "820px", color: "var(--foreground)", fontSize: "clamp(38px, 6vw, 72px)", lineHeight: 1.02, letterSpacing: "-.045em", fontWeight: 760 }}>{story.title}</h1>
        </div>
      </header>

      <div style={{ maxWidth: "1040px", margin: "0 auto", padding: "0 22px 80px" }}>
        {story.image && <img src={story.image} alt="" style={{ width: "100%", maxHeight: "580px", objectFit: "cover", borderRadius: "28px", background: "var(--secondary)" }} onError={(event) => { event.currentTarget.style.display = "none"; }} />}
        <div style={{ maxWidth: "760px", margin: "42px auto 0" }}>
          <p style={{ fontSize: "11px", fontWeight: 750, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted-foreground)", marginBottom: "14px" }}>Everything Apple briefing</p>
          <p style={{ fontSize: "clamp(20px, 2.5vw, 26px)", lineHeight: 1.55, letterSpacing: "-.02em", color: "var(--foreground)", margin: "0 0 28px" }}>{story.summary || "Open the original report for the complete story and source material."}</p>
          <div style={{ padding: "20px 22px", border: "1px solid var(--border)", borderRadius: "18px", background: "var(--card)", color: "var(--muted-foreground)", fontSize: "14px", lineHeight: 1.55 }}>
            This is a clean on-site briefing, not a copied article. Continue to {story.source} for the complete reporting.
          </div>
          <a href={story.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-block", marginTop: "24px", padding: "12px 22px", textDecoration: "none" }}>Read the full story at {story.source} ↗</a>
        </div>
      </div>

      {related.length > 0 && <section className="section-fog section-pad"><div className="page-container"><h2 style={{ fontSize: "28px", margin: "0 0 22px", color: "var(--foreground)" }}>Keep reading</h2><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "14px" }}>{related.map((item) => <Link key={item.id} href={`/news/${item.id}`}><article className="card" style={{ height: "100%", cursor: "pointer" }}><span style={{ fontSize: "11px", color: "var(--brand)", fontWeight: 700 }}>{item.source}</span><h3 style={{ margin: "8px 0 0", fontSize: "17px", lineHeight: 1.3, color: "var(--foreground)" }}>{item.title}</h3></article></Link>)}</div></div></section>}
    </article>
  );
}
