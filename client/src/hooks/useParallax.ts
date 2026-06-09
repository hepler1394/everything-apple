/**
 * useParallax — Apple.com-style parallax scroll effect
 * Moves an element at a fraction of the scroll speed
 * Built by Cory Hepler
 */
import { useEffect, useRef } from "react";

/**
 * Attach to an element to give it a parallax scroll effect.
 * @param speed - 0 = no movement, 0.4 = moves at 40% of scroll speed (slower = more depth)
 */
export function useParallax(speed = 0.35) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Only run parallax on non-reduced-motion devices
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let rafId: number;
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const offset = (scrollY - elementTop) * speed;
        el.style.transform = `translateY(${offset}px)`;
        lastScrollY = scrollY;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial position
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return ref;
}

export default useParallax;
