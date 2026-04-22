import { Header } from "./components/Header";
import { ProjectCard } from "./components/ProjectCard";
import img1 from "../imports/Frame1-1/17484fa76e68e016ea4f9cb7bf74dd4e285d830f.png";
import img2 from "../imports/Frame1-1/4856bf47df4169cdcafa182864346bc9a5a04584.png";
import img3 from "../imports/Frame1-1/a35fc250f16f6bab9eab0bf17339a9d216e594fb.png";
import imgFooter from "../imports/Frame1-1/9d7b0a8aa2d5c323e61cab2d188db4402bad66e0.png";

const projects = [
  { image: img1, title: "Hering Product Page", subtitle: "Visual & A/B Test Analytics" },
  { image: img2, title: "21 Day Challenge", subtitle: "LISTERINE® Campaign Lead Strategy" },
  { image: img3, title: "Maternity Care", subtitle: "Johnson's Baby Hotsite Marketing Strategy" },
];

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#f8f8f8]">
      <Header />

      <main className="mx-auto w-full max-w-[1188px] px-5 md:px-8">
        <section className="flex flex-col gap-8 pt-20 md:pt-[120px]">
          <div className="flex flex-col gap-4 md:gap-[18.8px]">
            <h1 className="font-light text-black text-[40px] md:text-[56px] leading-[1.1]">
              Product Designer
            </h1>
            <p className="font-light text-black text-[15px] md:text-[16.6px] leading-[28px] md:leading-[30px] max-w-[900px]">
              Located in Brazil with 6+ years of experience crafting visually compelling, data-informed experiences,
              strategic design and conversion-focused solutions for B2B, E-commerce and digital products.
            </p>
          </div>
          <p className="text-[#8b8b8b] text-[15px] md:text-[16.7px] leading-[30px]">
            Currently Product Designer at <span className="text-black">Thoughtworks</span>
          </p>
        </section>

        <section className="flex flex-col gap-10 md:gap-12 pt-16 md:pt-[72px]">
          {projects.map((p) => (
            <ProjectCard key={p.title} image={p.image} title={p.title} subtitle={p.subtitle} />
          ))}
        </section>
      </main>

      <footer className="pt-20 md:pt-[120px]">
        <div className="relative w-full overflow-hidden aspect-[1920/669]">
          <img alt="" src={imgFooter} className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </footer>
    </div>
  );
}
