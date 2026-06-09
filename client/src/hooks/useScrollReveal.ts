/**
 * useScrollReveal — Apple.com-style scroll-triggered reveal animations
 * Attaches IntersectionObserver to elements with .reveal, .reveal-scale, .reveal-fade, .fade-in-up
 * Adds .visible class when element enters viewport
 * Adds .js-reveal-ready to <html> to enable CSS transitions (progressive enhancement)
 * Built by Cory Hepler
 */
import { useEffect, useRef } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

// Add js-reveal-ready once globally — enables CSS reveal transitions
let revealReady = false;
function enableRevealAnimations() {
  if (!revealReady) {
    revealReady = true;
    document.documentElement.classList.add("js-reveal-ready");
  }
}

/**
 * useScrollReveal — attach to a container element.
 * All .reveal, .reveal-scale, .reveal-fade, .fade-in-up children
 * will animate in when they enter the viewport.
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.12, rootMargin = "0px 0px -40px 0px", once = true } = options;
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Enable CSS reveal transitions (progressive enhancement)
    enableRevealAnimations();

    const container = containerRef.current;
    if (!container) return;

    const selectors = [".reveal", ".reveal-scale", ".reveal-fade", ".fade-in-up", ".reveal-left", ".reveal-right", ".reveal-zoom"];
    const elements = container.querySelectorAll<HTMLElement>(selectors.join(", "));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return containerRef;
}

/**
 * useRevealElement — attach directly to a single element ref.
 * The element itself gets .visible when it enters the viewport.
 */
export function useRevealElement(
  delay = 0,
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.12, rootMargin = "0px 0px -40px 0px", once = true } = options;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    enableRevealAnimations();

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add("visible"), delay);
          } else {
            el.classList.add("visible");
          }
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("visible");
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold, rootMargin, once]);

  return ref;
}

/**
 * RevealOnScroll — a simple wrapper component approach.
 * Use useScrollReveal on a parent container for bulk reveals.
 */
export default useScrollReveal;
