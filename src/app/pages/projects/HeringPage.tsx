import { PasswordGate } from "../../components/design-system/PasswordGate";
import { UnderConstruction } from "../../components/UnderConstruction";

export function HeringPage() {
  return (
    <PasswordGate>
      <UnderConstruction title="Hering Product Page" />
    </PasswordGate>
  );
}
