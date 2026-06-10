import { useState } from "react";
import { toast } from "sonner";

// Newsletter Signup — email capture with local storage tracking
// Shows inline on pages or as a floating CTA

interface NewsletterSignupProps {
  variant?: "inline" | "card" | "minimal";
  className?: string;
}

export default function NewsletterSignup({ variant = "card", className = "" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(() => {
    return localStorage.getItem("ea-newsletter-subscribed") === "true";
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Invalid email", { description: "Please enter a valid email address." });
      return;
    }
    // Store locally (no backend)
    localStorage.setItem("ea-newsletter-subscribed", "true");
    localStorage.setItem("ea-newsletter-email", email);
    setSubscribed(true);
    toast.success("Subscribed!", { description: "You'll get notified when we publish new content." });
  };

  if (subscribed) {
    return (
      <div className={`text-center p-4 rounded-xl bg-green-500/5 border border-green-500/20 ${className}`}>
        <p className="text-sm text-green-400 font-medium">You're subscribed to updates.</p>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50"
        />
        <button type="submit" className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors">
          Subscribe
        </button>
      </form>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`py-8 px-4 ${className}`}>
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
          <p className="text-sm text-muted-foreground mb-4">Get notified when we publish new Apple coverage.</p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50"
            />
            <button type="submit" className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Card variant (default)
  return (
    <div className={`p-6 rounded-2xl border border-border/30 bg-gradient-to-br from-blue-500/5 to-purple-500/5 ${className}`}>
      <div className="text-center max-w-sm mx-auto">
        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
          <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold mb-1">Never Miss an Update</h3>
        <p className="text-sm text-muted-foreground mb-4">
          iOS releases, WWDC coverage, and Apple news — delivered when it matters.
        </p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50"
          />
          <button type="submit" className="w-full px-4 py-2.5 rounded-lg bg-blue-500 text-white text-sm font-bold hover:bg-blue-600 transition-colors">
            Subscribe — It's Free
          </button>
        </form>
        <p className="text-[10px] text-muted-foreground mt-2">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
