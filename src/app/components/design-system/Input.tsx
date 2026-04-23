import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = "", ...rest }: InputProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label className="text-[14px] font-light text-black">{label}</label>
      )}
      <input
        className={`w-full rounded-full border border-[#e3e3e3] bg-white px-5 py-3 text-[15px] font-light text-black outline-none transition-colors duration-200 focus:border-[#1f1f1f] ${className}`}
        {...rest}
      />
      {error && (
        <p className="text-[13px] font-light text-red-500">{error}</p>
      )}
    </div>
  );
}
