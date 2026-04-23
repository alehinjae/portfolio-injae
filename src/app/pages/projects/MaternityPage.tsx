import { PasswordGate } from "../../components/design-system/PasswordGate";
import { UnderConstruction } from "../../components/UnderConstruction";

export function MaternityPage() {
  return (
    <PasswordGate>
      <UnderConstruction title="Maternity Care" />
    </PasswordGate>
  );
}
