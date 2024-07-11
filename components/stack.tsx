export interface StackProps {}

import siteConfig from "../data/site-config";

export const Stack: React.FC<StackProps> = () => {
  const imagesLink = siteConfig.imagesLink || [];

  return (
    <section className=" max-w-[560px] flex flex-col gap-5 md:gap-6 ">
      <h2 className="font-medium">Skills</h2>
      <div className="relative overflow-hidden group">
        <div className="flex space-x-16">
          <div className="flex space-x-4 animate-loop-scroll group-hover:paused">
            {imagesLink.map((image, index) => (
              <img
                className="cursor-pointer"
                key={index}
                loading="lazy"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
        {/* Gradientes para bordas no tema claro e escuro */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent dark:from-[hsl(210,20%,10%)]"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent dark:from-[hsl(210,20%,10%)]"></div>
        </div>
      </div>
    </section>
  );
};
