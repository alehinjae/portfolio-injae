import { Link } from "react-router";

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  to: string;
}

export function ProjectCard({ image, title, subtitle, to }: ProjectCardProps) {
  return (
    <Link
      to={to}
      className="group flex w-full flex-col items-start justify-end no-underline"
    >
      <div className="relative w-full overflow-hidden rounded-[24px] aspect-[1188/594]">
        <img
          alt={title}
          src={image}
          className="absolute inset-0 h-full w-full object-cover grayscale-0 transition-all duration-500 ease-out group-hover:grayscale group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex w-full flex-col gap-3 py-6 md:py-8">
        <h2 className="text-[28px] font-light leading-[1.22] text-black md:text-[33.6px]">
          {title}
        </h2>
        <p className="text-[15px] font-light leading-[25px] text-black md:text-[16.5px]">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}
