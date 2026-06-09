/*
  Community Page — Everything Apple
  Design: Apple.com aesthetic
  - Live Reddit JSON feed from r/apple, r/jailbreak, r/ios
  - Pure black/white sections
  - Scroll-triggered reveal animations
  Built by Cory Hepler
*/
import { useState, useEffect } from "react";
import { Link } from "wouter";
import useScrollReveal from "../hooks/useScrollReveal";

interface RedditPost {
  id: string;
  title: string;
  author: string;
  score: number;
  num_comments: number;
  url: string;
  permalink: string;
  created_utc: number;
  subreddit: string;
  thumbnail: string;
  selftext: string;
}

function timeAgo(utc: number): string {
  const diff = Date.now() / 1000 - utc;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function formatScore(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

const SUBREDDITS = [
  { id: "apple", label: "r/apple", description: "Apple news, rumors, and discussion" },
  { id: "jailbreak", label: "r/jailbreak", description: "iOS jailbreaking tools and guides" },
  { id: "ios", label: "r/ios", description: "iOS tips, tricks, and updates" },
  { id: "iphone", label: "r/iphone", description: "iPhone news and community" },
];

function useRedditFeed(subreddit: string) {
  const [posts, setPosts] = useState<RedditPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=10`)
      .then(r => r.json())
      .then(data => {
        const items = data?.data?.children?.map((c: { data: RedditPost }) => c.data) ?? [];
        setPosts(items);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [subreddit]);

  return { posts, loading, error };
}

function PostCard({ post }: { post: RedditPost }) {
  return (
    <a
      href={`https://reddit.com${post.permalink}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "block", textDecoration: "none" }}
    >
      <div
        style={{
          padding: "20px 0",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          transition: "background 0.15s ease",
          cursor: "pointer",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.02)")}
        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
      >
        <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
          {/* Score */}
          <div style={{ minWidth: "48px", textAlign: "center", paddingTop: "2px" }}>
            <p style={{ fontSize: "17px", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.022em" }}>{formatScore(post.score)}</p>
            <p style={{ fontSize: "11px", color: "#6e6e73", letterSpacing: "0.02em" }}>points</p>
          </div>
          {/* Content */}
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "17px", fontWeight: 500, color: "#1d1d1f", letterSpacing: "-0.022em", lineHeight: 1.4, marginBottom: "8px" }}>
              {post.title}
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", color: "#6e6e73" }}>by u/{post.author}</span>
              <span style={{ fontSize: "12px", color: "#6e6e73" }}>{post.num_comments} comments</span>
              <span style={{ fontSize: "12px", color: "#6e6e73" }}>{timeAgo(post.created_utc)}</span>
            </div>
          </div>
          {/* Arrow */}
          <div style={{ paddingTop: "4px", color: "#0071e3", fontSize: "17px" }}>→</div>
        </div>
      </div>
    </a>
  );
}

function LiveFeed() {
  const [activeTab, setActiveTab] = useState("apple");
  const { posts, loading, error } = useRedditFeed(activeTab);
  const ref = useScrollReveal({ threshold: 0.06 });

  return (
    <section className="apple-section section-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{ marginBottom: "40px" }}>
          <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>Live Feed</p>
          <h2 className="apple-headline reveal reveal-delay-1" style={{ color: "#1d1d1f", marginBottom: "8px" }}>
            What Reddit is saying.
          </h2>
          <p className="apple-lead reveal reveal-delay-2" style={{ color: "#6e6e73" }}>
            Live posts from the Apple community on Reddit.
          </p>
        </div>

        {/* Subreddit tabs */}
        <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "0", borderBottom: "1px solid rgba(0,0,0,0.1)", marginBottom: "40px", overflowX: "auto" }}>
          {SUBREDDITS.map(sub => (
            <button
              key={sub.id}
              onClick={() => setActiveTab(sub.id)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === sub.id ? "2px solid #0071e3" : "2px solid transparent",
                padding: "14px 20px",
                fontSize: "15px",
                fontWeight: activeTab === sub.id ? 600 : 400,
                color: activeTab === sub.id ? "#0071e3" : "#6e6e73",
                cursor: "pointer",
                letterSpacing: "-0.022em",
                whiteSpace: "nowrap",
                transition: "color 0.2s ease, border-color 0.2s ease",
                fontFamily: "inherit",
                marginBottom: "-1px",
              }}
            >
              {sub.label}
            </button>
          ))}
        </div>

        {/* Posts */}
        {loading && (
          <div style={{ padding: "60px 0", textAlign: "center" }}>
            <p style={{ fontSize: "17px", color: "#6e6e73" }}>Loading posts from {activeTab}...</p>
          </div>
        )}
        {error && (
          <div style={{ padding: "60px 0", textAlign: "center" }}>
            <p style={{ fontSize: "17px", color: "#6e6e73" }}>Unable to load Reddit posts. Reddit may be temporarily unavailable.</p>
            <a href={`https://reddit.com/r/${activeTab}`} target="_blank" rel="noopener noreferrer" style={{ color: "#0071e3", fontSize: "15px", marginTop: "12px", display: "inline-block" }}>
              Visit r/{activeTab} directly
            </a>
          </div>
        )}
        {!loading && !error && posts.length > 0 && (
          <div>
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
            <div style={{ paddingTop: "32px", textAlign: "center" }}>
              <a
                href={`https://reddit.com/r/${activeTab}`}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn apple-btn-blue"
              >
                View all on Reddit
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section style={{ background: "#000", paddingTop: "140px", paddingBottom: "100px" }}>
      <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px", textAlign: "center" }}>
        <p className="animate-fade-in" style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2997ff", marginBottom: "16px" }}>Community</p>
        <h1 className="apple-headline animate-fade-in delay-200" style={{ color: "#f5f5f7", marginBottom: "20px" }}>
          The Apple community,<br />all in one place.
        </h1>
        <p className="animate-fade-in delay-300" style={{ fontSize: "clamp(17px, 2.2vw, 21px)", color: "rgba(245,245,247,0.7)", lineHeight: 1.5, maxWidth: "560px", margin: "0 auto 40px", letterSpacing: "-0.022em" }}>
          Live posts from r/apple, r/jailbreak, r/ios, and r/iphone — the most active Apple communities on Reddit.
        </p>
      </div>
    </section>
  );
}

function SubredditGrid() {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <section className="apple-section-sm section-offwhite" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", background: "rgba(0,0,0,0.06)" }}>
          {[
            { sub: "apple", members: "3.2M", desc: "Apple news, rumors, and community discussion" },
            { sub: "jailbreak", members: "890K", desc: "iOS jailbreaking tools, tweaks, and guides" },
            { sub: "ios", members: "1.4M", desc: "iOS tips, tricks, and software discussion" },
            { sub: "iphone", members: "2.1M", desc: "iPhone hardware, cases, and accessories" },
          ].map((item, i) => (
            <a
              key={i}
              href={`https://reddit.com/r/${item.sub}`}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal"
              style={{ display: "block", background: "#fff", padding: "32px 24px", transitionDelay: `${i * 0.08}s`, textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#f5f5f7")}
              onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
            >
              <p style={{ fontSize: "19px", fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.002em", marginBottom: "4px" }}>r/{item.sub}</p>
              <p style={{ fontSize: "12px", color: "#0071e3", marginBottom: "12px" }}>{item.members} members</p>
              <p style={{ fontSize: "14px", color: "#6e6e73", lineHeight: 1.5 }}>{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsOutlets() {
  const ref = useScrollReveal({ threshold: 0.08 });
  const outlets = [
    { name: "9to5Mac", url: "https://9to5mac.com", desc: "Breaking Apple news and reviews" },
    { name: "MacRumors", url: "https://macrumors.com", desc: "Apple rumors and community forums" },
    { name: "The Verge", url: "https://theverge.com/apple", desc: "Apple coverage from The Verge" },
    { name: "AppleInsider", url: "https://appleinsider.com", desc: "In-depth Apple analysis" },
    { name: "Daring Fireball", url: "https://daringfireball.net", desc: "John Gruber's Apple commentary" },
    { name: "MacStories", url: "https://macstories.net", desc: "Apple app reviews and workflows" },
  ];
  return (
    <section className="apple-section section-black" ref={ref as React.RefObject<HTMLElement>}>
      <div className="apple-content-wide">
        <div style={{ marginBottom: "48px", textAlign: "center" }}>
          <p className="apple-eyebrow reveal" style={{ marginBottom: "16px" }}>Apple Media</p>
          <h2 className="apple-subheadline reveal reveal-delay-1" style={{ color: "#f5f5f7" }}>Where to follow Apple news.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(255,255,255,0.08)" }}>
          {outlets.map((outlet, i) => (
            <a
              key={i}
              href={outlet.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal"
              style={{ display: "block", background: "#000", padding: "36px 28px", transitionDelay: `${(i % 3) * 0.08}s`, textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#111")}
              onMouseLeave={e => (e.currentTarget.style.background = "#000")}
            >
              <p style={{ fontSize: "19px", fontWeight: 600, color: "#f5f5f7", letterSpacing: "-0.002em", marginBottom: "8px" }}>{outlet.name}</p>
              <p style={{ fontSize: "14px", color: "rgba(245,245,247,0.5)", lineHeight: 1.5 }}>{outlet.desc}</p>
              <p style={{ fontSize: "14px", color: "#2997ff", marginTop: "12px" }}>Visit site</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Community() {
  return (
    <div style={{ background: "#000" }}>
      <Hero />
      <SubredditGrid />
      <LiveFeed />
      <NewsOutlets />
    </div>
  );
}
