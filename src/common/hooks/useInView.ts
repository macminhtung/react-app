import { useEffect, useState, useRef, RefObject } from 'react';

type TUseInViewOptions = {
  root: HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export function useInView(options: TUseInViewOptions): [RefObject<HTMLElement | null>, boolean] {
  const { root, rootMargin = '0px', threshold = 0, once = false } = options;
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const element = ref?.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Case: Is intersecting
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        }

        // CASE: Is not intersecting
        else if (!once) setInView(false);
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [root, rootMargin, threshold, once]);

  return [ref, inView];
}
