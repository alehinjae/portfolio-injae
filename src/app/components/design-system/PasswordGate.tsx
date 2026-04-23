import { ReactNode, useState } from "react";
import { Modal } from "./Modal";
import { Input } from "./Input";
import { Button } from "./Button";

const SESSION_KEY = "portfolio_access";
const CORRECT_PASSWORD = "12345";

interface PasswordGateProps {
  children: ReactNode;
  onClose?: () => void;
}

export function PasswordGate({ children, onClose }: PasswordGateProps) {
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === "true"
  );
  const [modalOpen, setModalOpen] = useState(true);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  // closes modal with animation, then runs callback
  function closeWithAnimation(callback: () => void) {
    setModalOpen(false);
    setTimeout(callback, 320);
  }

  function handleClose() {
    closeWithAnimation(onClose ?? (() => window.history.back()));
  }

  function handleSubmit() {
    if (value === CORRECT_PASSWORD) {
      closeWithAnimation(() => {
        sessionStorage.setItem(SESSION_KEY, "true");
        setAuthenticated(true);
      });
    } else {
      setError("Incorrect password. Please try again.");
      setValue("");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSubmit();
  }

  if (authenticated) return <>{children}</>;

  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <div className="flex flex-col gap-6 pt-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-[28px] font-light leading-[1.2] text-black">
            Protected content
          </h2>
          <p className="text-[15px] font-light leading-[26px] text-[#8b8b8b]">
            This project is password protected. Enter the password to continue.
          </p>
        </div>
        <Input
          type="password"
          placeholder="Enter password"
          value={value}
          error={error}
          autoFocus
          onChange={(e) => { setValue(e.target.value); setError(""); }}
          onKeyDown={handleKeyDown}
        />
        <Button type="button" variant="primary" className="w-full" onClick={handleSubmit}>
          Continue
        </Button>
      </div>
    </Modal>
  );
}
