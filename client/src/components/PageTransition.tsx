/*
  PageTransition — Everything Apple
  Design: Apple.com smooth page transitions
  - Fade + subtle upward translate on route change
  - 280ms enter, instant exit (Apple's pattern)
  - Uses Wouter's useLocation to detect route changes
  - Resets scroll to top on each navigation
  Built by Cory Hepler
*/
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionState, setTransitionState] = useState<"entering" | "entered" | "exiting">("entered");
  const prevLocation = useRef(location);

  useEffect(() => {
    if (location === prevLocation.current) return;
    prevLocation.current = location;

    // Start exit
    setTransitionState("exiting");

    const exitTimer = setTimeout(() => {
      // Swap content and reset scroll
      setDisplayLocation(location);
      window.scrollTo({ top: 0, behavior: "instant" });
      setTransitionState("entering");

      const enterTimer = setTimeout(() => {
        setTransitionState("entered");
      }, 280);

      return () => clearTimeout(enterTimer);
    }, 120);

    return () => clearTimeout(exitTimer);
  }, [location]);

  const styles: Record<string, React.CSSProperties> = {
    entering: {
      opacity: 0,
      transform: "translateY(12px)",
      transition: "opacity 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    },
    entered: {
      opacity: 1,
      transform: "translateY(0)",
      transition: "opacity 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    },
    exiting: {
      opacity: 0,
      transform: "translateY(-6px)",
      transition: "opacity 0.12s ease, transform 0.12s ease",
    },
  };

  return (
    <div style={{ ...styles[transitionState], willChange: "opacity, transform" }}>
      {children}
    </div>
  );
}
