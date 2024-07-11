import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
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
        <h2 className="font-medium">About</h2>
        <p className="text-sm">
          Im a Desenvolvedor Front-end and live in Sao Paulo. I currently work
          at {""}
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button
                className="text-sm text-green-400 hover:text-green-300 transition duration-400 ease-in-out p-0 h-5"
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta vero
          iure accusamus dolore sapiente rem explicabo inventore fuga.
          Accusantium voluptatum nihil ut quam iste reiciendis. Sit autem et nam
          quae.
        </p>
        <p className="text-sm">
          You can see more of my work on{" "}
          <a
            href="https://www.linkedin.com"
            className="text-green-400 hover:text-green-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin{" "}
          </a>
          and{" "}
          <a
            href="https://twitter.com"
            className="text-green-400 hover:text-green-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter{" "}
          </a>
          or my code on{" "}
          <a
            href="https://github.com"
            className="text-green-400 hover:text-green-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          . I also have a personal{" "}
          <a
            href="https://www.instagram.com"
            className="text-green-400 hover:text-green-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          .
        </p>
      </div>
    </section>
  );
};
