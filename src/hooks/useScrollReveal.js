import { useEffect, useRef } from "react";

/**
 * Custom hook that observes a DOM element and adds the "revealed" class
 * when it enters the viewport. Perfect for scroll-triggered animations.
 *
 * @param {Object}  options
 * @param {string}  options.threshold  - Intersection ratio to trigger (default 0.15)
 * @param {string}  options.rootMargin - Margin around root (default "0px 0px -60px 0px")
 * @param {boolean} options.once       - If true, unobserve after first reveal (default true)
 * @returns {React.RefObject}
 */
export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  once = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          if (once) observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * Variant that accepts a callback ref for mapping over lists.
 * Returns a function you can spread as `ref={addRevealRef}` on each item.
 *
 * @param {Object} options - Same options as useScrollReveal
 * @returns {Function} callback ref
 */
export function useScrollRevealList({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  once = true,
} = {}) {
  const nodesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    const currentNodes = nodesRef.current;
    currentNodes.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  const addRef = (index) => (el) => {
    if (el) {
      nodesRef.current[index] = el;
    }
  };

  return addRef;
}
