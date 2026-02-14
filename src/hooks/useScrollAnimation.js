import { useEffect, useRef, useState } from "react";

// hook for scroll animations using intersection observer
// threshold = how much of element should be visible (0.1 = 10%)

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // once visible, stay visible (dont animate again on scroll up)
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(currentRef);

    // cleanup
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}

// might add more animation hooks later
// export function useFadeIn() { ... }
