import { useState } from "react";
import { useNavigate } from "react-router";
import { ProjectCard } from "../components/ProjectCard";
import { Modal } from "../components/design-system/Modal";
import { Input } from "../components/design-system/Input";
import { Button } from "../components/design-system/Button";
import img1 from "../../imports/Frame1-1/17484fa76e68e016ea4f9cb7bf74dd4e285d830f.png";
import img2 from "../../imports/Frame1-1/4856bf47df4169cdcafa182864346bc9a5a04584.png";
import img3 from "../../imports/Frame1-1/a35fc250f16f6bab9eab0bf17339a9d216e594fb.png";

const SESSION_KEY = "portfolio_access";
const CORRECT_PASSWORD = "12345";

const projects = [
  { image: img1, title: "Hering Product Page", subtitle: "Visual & A/B Test Analytics", to: "/projects/hering" },
  { image: img2, title: "21 Day Challenge", subtitle: "LISTERINE® Campaign Lead Strategy", to: "/projects/listerine" },
  { image: img3, title: "Maternity Care", subtitle: "Johnson's Baby Hotsite Marketing Strategy", to: "/projects/maternity" },
];

export function Home() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingRoute, setPendingRoute] = useState<string | null>(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleCardClick(to: string) {
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      navigate(to);
    } else {
      setPendingRoute(to);
      setModalOpen(true);
    }
  }

  function handleClose() {
    setModalOpen(false);
    setValue("");
    setError("");
    setPendingRoute(null);
  }

  function handleSubmit() {
    if (value === CORRECT_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setModalOpen(false);
      setTimeout(() => {
        if (pendingRoute) navigate(pendingRoute);
      }, 320);
    } else {
      setError("Incorrect password. Please try again.");
      setValue("");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleSubmit();
  }

  return (
    <>
      <main className="mx-auto w-full max-w-[1188px] px-5 md:px-8">
        <section className="flex flex-col gap-8 pt-20 md:pt-[120px]">
          <div className="flex flex-col gap-4 md:gap-[18.8px]">
            <h1 className="text-[40px] font-light leading-[1.1] text-black md:text-[56px]">
              Product Designer
            </h1>
            <p className="max-w-[900px] text-[15px] font-light leading-[28px] text-black md:text-[16.6px] md:leading-[30px]">
              Located in Brazil with 6+ years of experience crafting visually compelling, data-informed experiences,
              strategic design and conversion-focused solutions for B2B, E-commerce and digital products.
            </p>
          </div>
          <p className="text-[15px] font-light leading-[30px] text-[#8b8b8b] md:text-[16.7px]">
            Currently Product Designer Latam at <span className="text-black">Thoughtworks</span>
          </p>
        </section>

        <section className="flex flex-col gap-10 pt-16 md:gap-12 md:pt-[72px]">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              image={p.image}
              title={p.title}
              subtitle={p.subtitle}
              onClick={() => handleCardClick(p.to)}
            />
          ))}
        </section>
      </main>

      <Modal open={modalOpen} onClose={handleClose}>
        <div className="flex flex-col gap-6 pt-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-[28px] font-light leading-[1.2] text-black">Protected content</h2>
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
    </>
  );
}
