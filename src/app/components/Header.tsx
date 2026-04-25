import { Link, useLocation } from "react-router";
import { Logo } from "./design-system/Logo";
import { Button } from "./design-system/Button";
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
          <Logo />
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/" className="no-underline">
            <Button type="button" variant={pathname === "/" ? "primary" : "secondary"}>
              Home
            </Button>
          </Link>
          <Link to="/about" className="no-underline">
            <Button type="button" variant={pathname === "/about" ? "primary" : "secondary"}>
              About
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
