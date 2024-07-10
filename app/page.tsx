"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import AutoScroll from "embla-carousel-auto-scroll";
import React from "react";

export default function Home() {
  const autoScroll = React.useRef(
    AutoScroll({ playOnInit: false, speed: 1000 })
  );

  const images = [
    "https://skillicons.dev/icons?i=git",
    "https://skillicons.dev/icons?i=js",
    "https://skillicons.dev/icons?i=ts",
    "https://skillicons.dev/icons?i=docker",
    "https://skillicons.dev/icons?i=aws",
    "https://skillicons.dev/icons?i=tailwind",
    "https://skillicons.dev/icons?i=react",
    "https://skillicons.dev/icons?i=prisma",
    "https://skillicons.dev/icons?i=html",
  ];

  return (
    <main className="my-20 px-6">
      <div className="max-w-[560px] mx-auto flex flex-col gap-20">
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
              <span className="text-sm text-gray-400">
                Desenvolvedor Front-end
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <h2>About</h2>
            <p className="text-sm text-gray-400">
              I'm a Desenvolvedor Front-end and live in Sao Paulo. I currently
              work at {""}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button
                    className="h-0 text-sm text-green-500 hover:text-green-400 transition duration-500 ease-in-out p-0"
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
            <p className="text-sm text-gray-400 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              vero iure accusamus dolore sapiente rem explicabo inventore fuga.
              Accusantium voluptatum nihil ut quam iste reiciendis. Sit autem et
              nam quae.
            </p>
            <p className="text-sm text-gray-400">
              You can see more of my work on `Linkedin` and `Twitter` or my code
              on `Github`. I also have a personal `Instagram`.
            </p>
          </div>
        </section>

        {/* Skills */}

        <section className=" max-w-[560px] flex flex-col gap-5 md:gap-6 ">
          <h2>Skills</h2>
          <div className="flex overflow-hidden space-x-16 group">
            <div className="flex space-x-4 animate-loop-scroll group-hover:paused">
              {images.map((imageUrl, index) => (
                <img
                  className="cursor-pointer"
                  key={index}
                  loading="lazy"
                  src={imageUrl}
                  alt={`Skill Icon ${index + 1}`}
                />
              ))}
            </div>
          </div>
          {/* <p className="center">
            <a href="https://skillicons.dev">
              <img
                src="https://skillicons.dev/icons?i=git,js,ts,html,go,github,figma,express,css,aws,tailwind,react,prisma,postman,c,docker,c+"
                alt="Skill Icons"
              />
            </a>
          </p> */}
          {/* <Carousel className="w-full max-w-[560px] mx-auto">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="basis-1/1">
                  <div className="p-1">
                    <img
                      src={image.src}
                      alt={`Imagem ${index + 1}`}
                      className="w-8 object-cover h-full w-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel> */}
        </section>

        {/* Projects */}

        {/* Skills */}

        {/* Footer */}
        <footer className="text-center">
          @ 2024 Luiz Message. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
