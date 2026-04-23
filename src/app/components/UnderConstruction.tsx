interface UnderConstructionProps {
  title: string;
}

export function UnderConstruction({ title }: UnderConstructionProps) {
  return (
    <main className="mx-auto w-full max-w-[1188px] px-5 md:px-8">
      <section className="flex flex-col gap-4 pb-20 pt-20 md:pt-[120px]">
        <h1 className="text-[40px] font-light leading-[1.1] text-black md:text-[56px]">
          {title}
        </h1>
        <p className="text-[15px] font-light leading-[28px] text-[#8b8b8b] md:text-[16.6px] md:leading-[30px]">
          This page is under construction. Check back soon.
        </p>
      </section>
    </main>
  );
}
