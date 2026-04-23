import { ReactNode, useEffect } from "react";

interface ModalProps {
  open: boolean;
  children: ReactNode;
  onClose?: () => void;
}

export function Modal({ open, children, onClose }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative z-10 mx-4 w-full max-w-[440px] rounded-[24px] bg-[#f8f8f8] p-8 md:p-10">
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
