import { PasswordGate } from "../../components/design-system/PasswordGate";
import { UnderConstruction } from "../../components/UnderConstruction";

export function ListerinePage() {
  return (
    <PasswordGate>
      <UnderConstruction title="21 Day Challenge" />
    </PasswordGate>
  );
}
