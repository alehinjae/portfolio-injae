import { useCallback, useEffect, useRef, useState } from "react";

export function ScrollBar() {
  const [thumbHeight, setThumbHeight] = useState(20);
  const [thumbTop, setThumbTop] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateThumb = useCallback(() => {
    const total = document.documentElement.scrollHeight;
    const viewport = window.innerHeight;
    if (total <= viewport) return;

    const heightPct = Math.max((viewport / total) * 100, 6);
    const scrollPct = window.scrollY / (total - viewport);
    setThumbHeight(heightPct);
    setThumbTop(scrollPct * (100 - heightPct));
  }, []);

  const show = useCallback(() => {
    if (document.body.style.overflow === "hidden") return;
    setVisible(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setVisible(false), 1500);
  }, []);

  useEffect(() => {
    function onScroll() { updateThumb(); show(); }
    updateThumb();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateThumb, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateThumb);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [updateThumb, show]);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    const startY = e.clientY;
    const startScroll = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const trackH = trackRef.current?.clientHeight ?? window.innerHeight;
    const thumbPx = (thumbHeight / 100) * trackH;

    function onMove(ev: MouseEvent) {
      const delta = ev.clientY - startY;
      window.scrollTo({ top: startScroll + (delta / (trackH - thumbPx)) * total });
    }
    function onUp() {
      setDragging(false);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, [thumbHeight]);

  return (
    <div
      ref={trackRef}
      className={`fixed right-1.5 top-0 z-50 h-full w-[5px] py-3 transition-opacity duration-500 ease-out pointer-events-none ${
        visible || dragging ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute w-full cursor-pointer rounded-full bg-[#1f1f1f]/20 transition-colors duration-200 hover:bg-[#1f1f1f]/40 pointer-events-auto"
        style={{ height: `${thumbHeight}%`, top: `${thumbTop}%` }}
        onMouseDown={onMouseDown}
      />
    </div>
  );
}
