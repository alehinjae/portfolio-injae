import { ReactNode, useEffect, useState } from "react";

interface ModalProps {
  open: boolean;
  children: ReactNode;
  onClose?: () => void;
}

export function Modal({ open, children, onClose }: ModalProps) {
  const [rendered, setRendered] = useState(open);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setRendered(true);
      // double rAF ensures the DOM paints with opacity-0 before transitioning in
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true))
      );
      return () => cancelAnimationFrame(id);
    } else {
      setVisible(false);
      const timer = setTimeout(() => setRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = rendered ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [rendered]);

  if (!rendered) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-[#f8f8f8]" />
      <div
        className={`relative z-10 mx-4 w-full max-w-[440px] rounded-[24px] bg-[#f8f8f8] p-8 transition-all duration-300 ease-out md:p-10 ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-3 scale-95 opacity-0"
        }`}
      >
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#e3e3e3] text-[20px] leading-none text-black transition-colors hover:bg-[#d4d4d4]"
          >
            ×
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
