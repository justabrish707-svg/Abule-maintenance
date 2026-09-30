import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

/**
 * Reusable IntersectionObserver hook with strict typing.
 * Fires ONLY when element enters viewport.
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(threshold = 0.1): {
  ref: RefObject<T | null>;
  isVisible: boolean;
} {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
