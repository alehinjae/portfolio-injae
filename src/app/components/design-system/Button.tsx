import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...rest }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-full text-[16.6px] transition-colors duration-200 cursor-pointer whitespace-nowrap";
  const styles =
    variant === "primary"
      ? "bg-[#1f1f1f] text-white hover:bg-black"
      : "bg-[#e3e3e3] text-black hover:bg-[#d4d4d4]";
  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}
