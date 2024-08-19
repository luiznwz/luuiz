"use client";
import siteConfig from "../data/site-config";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export interface StackProps {}

export const Stack: React.FC<StackProps> = () => {
  const imagesLink = siteConfig.imagesLink || [];

  return (
    <section className="max-w-[692px] flex flex-col gap-5 md:gap-6">
      <h2 className="font-medium text-secondary-foreground">Skills</h2>
      <div className="relative overflow-hidden group">
        <div className="flex space-x-16">
          <TooltipProvider delayDuration={0}>
            <div className="flex space-x-4 animate-loop-scroll group-hover:paused shadow-dark">
              {imagesLink.map((image, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <img
                      className="cursor-pointer"
                      loading="lazy"
                      src={image.src}
                      alt={image.alt}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <p>{image.caption || "Tooltip content"}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
        {/* Gradientes para bordas no tema claro e escuro */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#ffff] to-transparent dark:from-[#121212] dark:to-transparent"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#ffff] to-transparent dark:from-[#121212] dark:to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
