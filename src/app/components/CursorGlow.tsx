import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let visible = false;

    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
      if (!visible) {
        el.style.opacity = "1";
        visible = true;
      }
    };

    const onLeave = () => {
      el.style.opacity = "0";
      visible = false;
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9998,
        opacity: 0,
        transition: "opacity 0.4s ease",
        background:
          "radial-gradient(circle 380px at var(--x, -9999px) var(--y, -9999px), rgba(0,0,0,0.055) 0%, transparent 100%)",
      }}
    />
  );
}
