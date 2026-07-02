import { useEffect, useRef, useState } from 'react';

/**
 * Performance fix: replaces the raw scroll listener with IntersectionObserver.
 * This fires ONLY when elements enter/exit the viewport, not on every pixel scrolled.
 */
export function useIntersectionObserver(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // Stop observing after first reveal — no memory leak
        }
      },
      { threshold }
    );

    observer.observe(el);

    // Cleanup: disconnect observer when component unmounts
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
