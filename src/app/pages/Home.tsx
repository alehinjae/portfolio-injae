import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ProjectCard } from "../components/ProjectCard";
import img1 from "../../imports/Frame1-1/17484fa76e68e016ea4f9cb7bf74dd4e285d830f.png";
import img2 from "../../imports/Frame1-1/4856bf47df4169cdcafa182864346bc9a5a04584.png";
import img3 from "../../imports/Frame1-1/a35fc250f16f6bab9eab0bf17339a9d216e594fb.png";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const projects = [
  { image: img1, title: "Hering Product Page", subtitle: "Visual & A/B Test Analytics", to: "/projects/hering" },
  { image: img2, title: "21 Day Challenge", subtitle: "LISTERINE® Campaign Lead Strategy", to: "/projects/listerine" },
  { image: img3, title: "Maternity Care", subtitle: "Johnson's Baby Hotsite Marketing Strategy", to: "/projects/maternity" },
];

export function Home() {
  const navigate = useNavigate();

  return (
    <main className="mx-auto w-full max-w-[1188px] px-5 md:px-8">
      <section className="flex flex-col gap-8 pt-20 md:pt-[120px]">
        <div className="flex flex-col gap-4 md:gap-[18.8px]">
          <motion.h1
            className="text-[40px] font-light leading-[1.1] text-black md:text-[56px]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            Product Designer
          </motion.h1>
          <motion.p
            className="max-w-[900px] text-[15px] font-light leading-[28px] text-black md:text-[16.6px] md:leading-[30px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
          >
            Located in Brazil with 6+ years of experience crafting visually compelling, data-informed experiences,
            strategic design and conversion-focused solutions for B2B, E-commerce and digital products.
          </motion.p>
        </div>
        <motion.p
          className="text-[15px] font-light leading-[30px] text-[#8b8b8b] md:text-[16.7px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.2 }}
        >
          Currently Product Designer Latam at{" "}
          <a href="https://www.thoughtworks.com/" target="_blank" rel="noopener noreferrer" className="text-black underline-offset-2 hover:underline">Thoughtworks</a>
        </motion.p>
      </section>

      <section className="flex flex-col gap-10 pt-16 md:gap-12 md:pt-[72px]">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.3 + i * 0.12 }}
          >
            <ProjectCard
              image={p.image}
              title={p.title}
              subtitle={p.subtitle}
              onClick={() => navigate(p.to)}
            />
          </motion.div>
        ))}
      </section>
    </main>
  );
}
