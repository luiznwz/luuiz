"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import siteConfig from "../data/site-config";

export default function Home() {
  const socialLinks = siteConfig.socialLinks || [];
  const navLinks = siteConfig.footerNavLinks || [];
  const imagesLink = siteConfig.imagesLink || [];

  return (
    <main className="mt-20 px-6">
      <div className="max-w-[560px] mx-auto flex flex-col gap-20">
        {/* Header */}
        <section className="flex flex-col gap-5 md:gap-6">
          <div className="flex">
            <Avatar>
              <a href="https://github.com/luiznwz">
                <AvatarImage src="https://github.com/luiznwz.png" />
                <AvatarFallback>LR</AvatarFallback>
              </a>
            </Avatar>
            <div className="mx-3">
              <h1 className="font-medium mt-1 text-primary text-sm leading-none">
                Luiz Renan
              </h1>
              <span className="text-sm">Desenvolvedor Front-end</span>
            </div>
          </div>
          <div className="space-y-4">
            <h2>About</h2>
            <p className="text-sm">
              Im a Desenvolvedor Front-end and live in Sao Paulo. I currently
              work at {""}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button
                    className="h-0 text-sm text-green-400 hover:text-green-300 transition duration-500 ease-in-out p-0"
                    variant="link"
                  >
                    ShakersAgency
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shakersagencia.png" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Shakers Agency</h4>
                      <p className="text-sm">
                        The React Framework – created and maintained by @vercel.
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="text-xs text-muted-foreground">
                          Joined March 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </p>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              vero iure accusamus dolore sapiente rem explicabo inventore fuga.
              Accusantium voluptatum nihil ut quam iste reiciendis. Sit autem et
              nam quae.
            </p>
            <p className="text-sm">
              You can see more of my work on `Linkedin` and `Twitter` or my code
              on `Github`. I also have a personal `Instagram`.
            </p>
          </div>
        </section>

        {/* Projects */}
        <div className="flex flex-col gap-5 md:gap-6">
          <h2>Projects</h2>
          {/* Projects List */}
          <a
            className="flex justify-between items-start gap-8 group mb-5 sm:mb-3"
            href=""
          >
            <div className="grow">
              <h3 className="text-xl leading-tight font-medium group-hover:underline group-hover:decoration-dashed group-hover:underline-offset-4 group-hover:decoration-1 ">
                TimeWarp - Travel Agency
              </h3>
              <div className="mt-1 text-sm leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                cupiditate vel unde! Omnis repudiandae aspernatur, provident
                quasi, commodi libero numquam ipsa architecto, voluptates eos
                quia optio. Ducimus eum natus dolore.
              </div>
            </div>
            <div className="hidden italic opacity-0 transition group-hover:opacity-100 sm:inline-flex sm:gap-1 sm:items-center sm:shrink-0">
              <span className="text-sm ">View Project</span>
            </div>
          </a>
          <a
            className="flex justify-between items-start gap-8 group mb-10 sm:mb-12"
            href=""
          >
            <div className="grow">
              <h3 className="text-xl leading-tight font-medium group-hover:underline group-hover:decoration-dashed group-hover:underline-offset-4 group-hover:decoration-1">
                TimeWarp - Travel Agency
              </h3>
              <div className="mt-1 text-sm leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                cupiditate vel unde! Omnis repudiandae aspernatur, provident
                quasi, commodi libero numquam ipsa architecto, voluptates eos
                quia optio. Ducimus eum natus dolore.
              </div>
            </div>
            <div className="hidden italic opacity-0 transition group-hover:opacity-100 sm:inline-flex sm:gap-1 sm:items-center sm:shrink-0">
              <span className="text-sm ">View Project</span>
            </div>
          </a>
          <div className="">
            <a
              className="inline-flex items-center justify-center px-6 py-2 font-serif text-sm leading-tight italic  text-main bg-main border border-main rounded-full transition hover:bg-muted"
              href=""
            >
              View All Projects
            </a>
          </div>
        </div>

        {/* Skills */}
        <section className=" max-w-[560px] flex flex-col gap-5 md:gap-6 ">
          <h2>Skills</h2>
          <div className="flex overflow-hidden space-x-16 group">
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
        </section>

        {/* Footer */}
        <footer className="text-center">
          <footer className="w-full max-w-3xl mx-auto pt-12 pb-10 sm:pt-24 sm:pb-14">
            {navLinks.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-x-6 gap-y-1">
                {navLinks.map((link) => (
                  <a
                    className="font-serif hover:underline hover:underline-offset-2"
                    href={link.href}
                    key={link.text}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
            <div
              className={`pt-6 flex flex-col gap-4 border-t border-dashed border-main ${
                socialLinks.length > 0
                  ? "sm:flex-row-reverse sm:justify-between sm:items-center"
                  : ""
              }`}
            >
              {socialLinks.length > 0 && (
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {socialLinks.map((link) => (
                    <a
                      className="inline-flex items-center justify-center text-sm hover:underline hover:underline-offset-2"
                      href={link.href}
                      key={link.text}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
              <p className="text-sm">
                &copy; {new Date().getFullYear()}&nbsp;
                <a
                  className="hover:underline hover:underline-offset-2"
                  href="/"
                >
                  {siteConfig.title}
                </a>
                . All rights reserved.
              </p>
            </div>
          </footer>
        </footer>
      </div>
    </main>
  );
}
