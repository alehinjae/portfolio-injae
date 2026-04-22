import { Logo } from "./design-system/Logo";
import { Button } from "./design-system/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#f8f8f8]/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1188px] items-center justify-between px-5 py-4 md:px-8">
        <Logo />
        <nav className="flex items-center gap-2">
          <Button variant="primary">Home</Button>
          <Button variant="secondary">About</Button>
        </nav>
      </div>
    </header>
  );
}
