import { useEffect, useRef } from "react";
import animationData from "../../imports/motion/logo-head.json";

const PLAYED_KEY = "logo-intro-played";

// The intro plays once per browser session; afterwards (and for reduced-motion users)
// the logo renders directly on its final frame.
function shouldPlayIntro() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return sessionStorage.getItem(PLAYED_KEY) !== "1";
  } catch {
    return true;
  }
}

export function HeaderLogo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let destroyed = false;
    let anim: { destroy: () => void } | null = null;

    import("lottie-web/build/player/lottie_light").then(({ default: lottie }) => {
      if (destroyed || !containerRef.current) return;
      const play = shouldPlayIntro();
      const instance = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: play,
        animationData,
        rendererSettings: { preserveAspectRatio: "xMinYMid meet" },
      });
      if (play) {
        try {
          sessionStorage.setItem(PLAYED_KEY, "1");
        } catch {
          // storage unavailable: the intro may replay, which is harmless
        }
      } else {
        instance.addEventListener("DOMLoaded", () => instance.goToAndStop(instance.totalFrames - 1, true));
      }
      anim = instance;
    });

    return () => {
      destroyed = true;
      anim?.destroy();
    };
  }, []);

  return <div ref={containerRef} className="h-[18px] w-[175px]" aria-hidden="true" />;
}
