/* =============================================================
   Community Page — Apple.com design language
   Reddit threads, subreddits, community links — no emojis
   Built by Cory Hepler
   ============================================================= */

import { useEffect, useRef } from "react";
import Footer from "../components/Footer";

const subreddits = [
  { name: "r/apple", desc: "The largest Apple community on Reddit. News, discussions, and everything Apple.", members: "3.2M", url: "https://reddit.com/r/apple" },
  { name: "r/ios", desc: "iOS tips, tricks, questions, and news. The go-to place for iPhone software.", members: "1.1M", url: "https://reddit.com/r/ios" },
  { name: "r/iphone", desc: "Everything iPhone. Hardware, software, accessories, and comparisons.", members: "1.8M", url: "https://reddit.com/r/iphone" },
  { name: "r/jailbreak", desc: "The official jailbreak community. Releases, tweaks, repos, and support.", members: "680K", url: "https://reddit.com/r/jailbreak" },
  { name: "r/AppleWatch", desc: "Apple Watch news, reviews, bands, and watchOS tips.", members: "520K", url: "https://reddit.com/r/AppleWatch" },
  { name: "r/MacOS", desc: "macOS news, tips, and discussions. Now covering macOS Golden Gate.", members: "290K", url: "https://reddit.com/r/MacOS" },
  { name: "r/AppleSilicon", desc: "M-series chip performance, benchmarks, and developer discussions.", members: "180K", url: "https://reddit.com/r/AppleSilicon" },
  { name: "r/sideloaded", desc: "Sideloading apps on iOS without jailbreak. AltStore, Sideloadly, TrollStore.", members: "95K", url: "https://reddit.com/r/sideloaded" },
];

const hotThreads = [
  { sub: "r/apple", title: "WWDC 2026 Megathread — All Announcements, Reactions and Discussion", votes: "48.2K", comments: "12,400", url: "https://reddit.com/r/apple", flair: "WWDC 2026", time: "Today" },
  { sub: "r/apple", title: "Siri AI is actually incredible — tested it for 2 hours and here are my thoughts", votes: "32.1K", comments: "4,200", url: "https://reddit.com/r/apple", flair: "Discussion", time: "Today" },
  { sub: "r/ios", title: "iOS 27 features megathread — everything new, screenshots and first impressions", votes: "28.7K", comments: "3,800", url: "https://reddit.com/r/ios", flair: "iOS 27", time: "Today" },
  { sub: "r/apple", title: "The new Parental Controls are genuinely the best thing Apple announced today", votes: "21.4K", comments: "2,900", url: "https://reddit.com/r/apple", flair: "Discussion", time: "Today" },
  { sub: "r/iphone", title: "macOS Golden Gate looks stunning — comparison screenshots vs Sequoia", votes: "18.9K", comments: "1,600", url: "https://reddit.com/r/iphone", flair: "macOS", time: "Today" },
  { sub: "r/jailbreak", title: "iOS 27 beta is out — what are the chances of a jailbreak? Discussion thread", votes: "15.3K", comments: "2,100", url: "https://reddit.com/r/jailbreak", flair: "Discussion", time: "Today" },
  { sub: "r/apple", title: "Tim Cook retirement confirmed — who do you think takes over as CEO?", votes: "41.8K", comments: "8,700", url: "https://reddit.com/r/apple", flair: "Apple", time: "Today" },
  { sub: "r/ios", title: "Siri AI waitlist is now live — how to sign up and what to expect", votes: "12.6K", comments: "980", url: "https://reddit.com/r/ios", flair: "Siri AI", time: "Today" },
  { sub: "r/jailbreak", title: "palera1n 2.0 update — iOS 18.3.2 support confirmed, download and changelog", votes: "9.4K", comments: "1,240", url: "https://reddit.com/r/jailbreak", flair: "Release", time: "2 hours ago" },
  { sub: "r/apple", title: "Apple Watch For Your Kids hands-on — first look at the new experience", votes: "7.2K", comments: "640", url: "https://reddit.com/r/apple", flair: "Apple Watch", time: "Today" },
];

const newsOutlets = [
  { name: "9to5Mac", desc: "Breaking Apple news and rumors", url: "https://9to5mac.com" },
  { name: "MacRumors", desc: "Apple news, rumors, and forums", url: "https://macrumors.com" },
  { name: "The Verge", desc: "Tech news with strong Apple coverage", url: "https://theverge.com/apple" },
  { name: "Daring Fireball", desc: "John Gruber's Apple analysis", url: "https://daringfireball.net" },
  { name: "Macworld", desc: "Apple product reviews and how-tos", url: "https://macworld.com" },
  { name: "AppleInsider", desc: "Apple news, analysis, and price guides", url: "https://appleinsider.com" },
];

function FadeSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="fade-in-up">{children}</div>;
}

export default function Reddit() {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section
        style={{
          background: "#000",
          padding: "140px 22px 80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "16px",
          }}
        >
          Community
        </div>
        <h1
          className="apple-headline-hero"
          style={{ color: "#f5f5f7", marginBottom: "20px" }}
        >
          The Apple Community.
        </h1>
        <p
          className="apple-body-large"
          style={{ color: "rgba(255,255,255,0.65)", maxWidth: "600px", margin: "0 auto" }}
        >
          The best Apple discussions happening right now. Hot threads from today's WWDC, jailbreak releases, and the communities you should be following.
        </p>
      </section>

      {/* ── Hot Threads ── */}
      <section style={{ background: "#1d1d1f", padding: "80px 0" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
              }}
            >
              Hot Today
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", marginBottom: "40px" }}
            >
              What everyone is talking about.
            </h2>
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "18px",
                overflow: "hidden",
              }}
            >
              {hotThreads.map((thread, i) => (
                <a
                  key={i}
                  href={thread.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    padding: "20px 24px",
                    borderBottom: i < hotThreads.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    textDecoration: "none",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "#0071e3",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {thread.sub}
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.3)",
                        padding: "2px 8px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "980px",
                      }}
                    >
                      {thread.flair}
                    </span>
                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", marginLeft: "auto" }}>
                      {thread.time}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 400,
                      letterSpacing: "-0.022em",
                      color: "#f5f5f7",
                      lineHeight: 1.4,
                      marginBottom: "8px",
                    }}
                  >
                    {thread.title}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                    }}
                  >
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
                      {thread.votes} upvotes
                    </span>
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
                      {thread.comments} comments
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Subreddits ── */}
      <section style={{ background: "#000", padding: "100px 0" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              Communities to Follow
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "60px" }}
            >
              The best Apple subreddits.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "2px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "18px",
                overflow: "hidden",
              }}
              className="subreddits-grid-responsive"
            >
              {subreddits.map((sub) => (
                <a
                  key={sub.name}
                  href={sub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#000",
                    padding: "28px 28px",
                    textDecoration: "none",
                    display: "block",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#111"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#000"; }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "8px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        letterSpacing: "-0.022em",
                        color: "#f5f5f7",
                        margin: 0,
                      }}
                    >
                      {sub.name}
                    </h3>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.4)",
                        whiteSpace: "nowrap",
                        marginLeft: "12px",
                      }}
                    >
                      {sub.members} members
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.5,
                      letterSpacing: "-0.01em",
                      margin: "0 0 12px 0",
                    }}
                  >
                    {sub.desc}
                  </p>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#0071e3",
                      fontWeight: 400,
                    }}
                  >
                    Join community &rsaquo;
                  </span>
                </a>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── News Outlets ── */}
      <section style={{ background: "#1d1d1f", padding: "100px 0" }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 22px" }}>
          <FadeSection>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              Apple News Sources
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", textAlign: "center", marginBottom: "60px" }}
            >
              Where the Apple world gets its news.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "18px",
                overflow: "hidden",
              }}
              className="outlets-grid-responsive"
            >
              {newsOutlets.map((outlet) => (
                <a
                  key={outlet.name}
                  href={outlet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#1d1d1f",
                    padding: "28px 24px",
                    textDecoration: "none",
                    display: "block",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#222"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#1d1d1f"; }}
                >
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 600,
                      letterSpacing: "-0.022em",
                      color: "#f5f5f7",
                      marginBottom: "6px",
                    }}
                  >
                    {outlet.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.4,
                      letterSpacing: "-0.01em",
                      margin: "0 0 12px 0",
                    }}
                  >
                    {outlet.desc}
                  </p>
                  <span style={{ fontSize: "13px", color: "#0071e3" }}>
                    Visit &rsaquo;
                  </span>
                </a>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── About Everything Apple ── */}
      <section style={{ background: "#000", padding: "100px 0" }}>
        <FadeSection>
          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              padding: "0 22px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "16px",
              }}
            >
              About This Site
            </div>
            <h2
              className="apple-headline-section"
              style={{ color: "#f5f5f7", marginBottom: "20px" }}
            >
              Built by Cory Hepler.
            </h2>
            <p
              className="apple-body-large"
              style={{ color: "rgba(255,255,255,0.65)", marginBottom: "16px" }}
            >
              Everything Apple is an independent fan site dedicated to covering Apple news, products, and the community with the depth and care it deserves.
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
                letterSpacing: "-0.022em",
              }}
            >
              This site is not affiliated with Apple Inc. All product names, logos, and brands are property of their respective owners.
            </p>
          </div>
        </FadeSection>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .subreddits-grid-responsive {
            grid-template-columns: 1fr !important;
          }
          .outlets-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
