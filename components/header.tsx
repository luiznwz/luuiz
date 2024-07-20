import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <section className="flex flex-col gap-5 sm:gap-6">
      <div className="flex items-center">
        <Avatar>
          <a href="https://github.com/luiznwz">
            <AvatarImage src="https://github.com/luiznwz.png" />
            <AvatarFallback>LR</AvatarFallback>
          </a>
        </Avatar>
        <div className="mx-3">
          <h1 className="font-medium text-primary text-base">Luiz Renan</h1>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-secondary-foreground">About</h2>
        <p className="text-foreground font-normal text-base leading-[1.65]">
          Im a Desenvolvedor Front-end at{" "}
          <a
            href="https://shakersagencia.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-400"
          >
            ShakersAgency
          </a>{" "}
          and live in São Paulo. My goal is to create incredible experiences for
          users with the new design techniques I#m constantly studying and
          learning.
        </p>
        <p className="text-foreground font-normal text-base leading-[1.65]">
          Im also developing the _query_, my library of components that elevate
          web design.
        </p>
      </div>
    </section>
  );
};
