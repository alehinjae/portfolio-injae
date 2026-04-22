interface ProjectCardProps {
  image: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

export function ProjectCard({ image, title, subtitle, onClick }: ProjectCardProps) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
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
        <h2 className="font-light text-black text-[28px] md:text-[33.6px] leading-[1.22]">
          {title}
        </h2>
        <p className="font-light text-black text-[15px] md:text-[16.5px] leading-[25px]">
          {subtitle}
        </p>
      </div>
    </a>
  );
}
