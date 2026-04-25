import { useEffect, useRef, useState } from "react";

const HEADER_HEIGHT = 72;
const SCROLL_THRESHOLD = 60;

export function useScrollDirection() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      setIsScrolled(currentScrollY > 0);

      if (Math.abs(diff) > SCROLL_THRESHOLD) {
        setIsVisible(diff < 0 || currentScrollY <= 0);
        lastScrollY.current = currentScrollY;
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(update);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--header-height", `${HEADER_HEIGHT}px`);
    document.documentElement.style.setProperty("--header-visible", isVisible ? "1" : "0");
  }, [isVisible]);

  return { isVisible, isScrolled };
}
