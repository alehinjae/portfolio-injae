import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router";

const SESSION_KEY = "portfolio_access";

interface PasswordGateProps {
  children: ReactNode;
}

export function PasswordGate({ children }: PasswordGateProps) {
  const navigate = useNavigate();
  const authenticated = sessionStorage.getItem(SESSION_KEY) === "true";

  useEffect(() => {
    if (!authenticated) navigate("/", { replace: true });
  }, [authenticated, navigate]);

  if (!authenticated) return null;
  return <>{children}</>;
}
