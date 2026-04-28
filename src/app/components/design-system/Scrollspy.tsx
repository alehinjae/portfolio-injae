import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ScrollspyItem = {
  id: string;
  label: string;
};

type Props = {
  items: ScrollspyItem[];
};

export function Scrollspy({ items }: Props) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileLabelId, setMobileLabelId] = useState<string | null>(null);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const labelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const flashMobileLabel = (id: string) => {
    setMobileLabelId(id);
    if (labelTimer.current) clearTimeout(labelTimer.current);
    labelTimer.current = setTimeout(() => setMobileLabelId(null), 1400);
  };

  useEffect(() => {
    const showAndScheduleHide = () => {
      setIsVisible(true);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setIsVisible(false), 1200);
    };
    showAndScheduleHide();
    window.addEventListener("scroll", showAndScheduleHide, { passive: true });
    return () => {
      window.removeEventListener("scroll", showAndScheduleHide);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const computeActive = () => {
      const line = window.innerHeight * 0.4;
      let current = items[0]?.id ?? "";
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - line <= 0) current = it.id;
      }
      setActiveId((prev) => {
        if (prev !== current) flashMobileLabel(current);
        return prev === current ? prev : current;
      });
    };

    computeActive();
    window.addEventListener("scroll", computeActive, { passive: true });
    window.addEventListener("resize", computeActive);
    return () => {
      window.removeEventListener("scroll", computeActive);
      window.removeEventListener("resize", computeActive);
    };
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    flashMobileLabel(id);
  };

  return (
    <motion.nav
      animate={{
        opacity: isVisible || hoveredId !== null ? 1 : 0,
        x: isVisible || hoveredId !== null ? 0 : -6,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsVisible(true)}
      className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50"
      aria-label="Scrollspy"
    >
      <ul className="flex flex-col gap-2 md:gap-3">
        {items.map((item, i) => {
          const isActive = activeId === item.id;
          const isHovered = hoveredId === item.id;
          const showLabel =
            (!isMobile && isHovered) || (isMobile && mobileLabelId === item.id);

          return (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleClick(item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group flex items-center gap-3 cursor-pointer"
              >
                <motion.span
                  animate={{
                    backgroundColor: isActive
                      ? "rgb(15, 15, 15)"
                      : isHovered
                        ? "rgba(15,15,15,0.10)"
                        : "rgba(15,15,15,0.04)",
                    color: isActive
                      ? "#fff"
                      : isHovered
                        ? "rgba(15,15,15,0.35)"
                        : "rgba(15,15,15,0.55)",
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-center rounded-full backdrop-blur-md border border-black/5 tabular-nums select-none"
                  style={{
                    width: isMobile ? 26 : 32,
                    height: isMobile ? 26 : 32,
                    fontSize: isMobile ? 10 : 11,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>

                <AnimatePresence>
                  {showLabel && (
                    <motion.span
                      initial={{ opacity: 0, x: -8, filter: "blur(4px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, x: -8, filter: "blur(4px)" }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="px-3 py-1 rounded-full whitespace-nowrap backdrop-blur-md"
                      style={{
                        fontSize: isMobile ? 10 : 12,
                        padding: isMobile ? "2px 8px" : undefined,
                        backgroundColor: isActive
                          ? "rgba(15,15,15,0.9)"
                          : "rgba(15,15,15,0.10)",
                        color: isActive ? "#fff" : "rgba(15,15,15,0.75)",
                      }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
