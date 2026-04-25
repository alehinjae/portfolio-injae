import { Link, useLocation } from "react-router";
import { useScrollDirection } from "../hooks/useScrollDirection";

export function Header() {
  const { pathname } = useLocation();
  const { isVisible, isScrolled } = useScrollDirection();

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled ? "bg-[#f8f8f8]/90 backdrop-blur shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : "bg-[#f8f8f8]",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1188px] items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="no-underline">
          <span className="text-[18px] font-normal text-[#757575]">Alexandre In Jae</span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/" className="no-underline">
            <span
              className={[
                "inline-flex cursor-pointer items-center rounded-full px-[18px] pb-[8px] pt-[6px] text-[14px] font-normal transition-colors duration-200",
                pathname === "/" ? "bg-[#1f1f1f] text-white hover:bg-black" : "bg-[#e3e3e3] text-[#1f1f1f] hover:bg-[#d4d4d4]",
              ].join(" ")}
            >
              Home
            </span>
          </Link>
          <Link to="/about" className="no-underline">
            <span
              className={[
                "inline-flex cursor-pointer items-center rounded-full px-[18px] pb-[8px] pt-[6px] text-[14px] font-normal transition-colors duration-200",
                pathname === "/about" ? "bg-[#1f1f1f] text-white hover:bg-black" : "bg-[#e3e3e3] text-[#1f1f1f] hover:bg-[#d4d4d4]",
              ].join(" ")}
            >
              About
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
