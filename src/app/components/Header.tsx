import { Link, useLocation } from "react-router";
import { Logo } from "./design-system/Logo";
import { Button } from "./design-system/Button";

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f8f8f8]/90 backdrop-blur">
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
