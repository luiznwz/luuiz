import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
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
            <p className="text-sm text-gray-400">
              I'm a Desenvolvedor Front-end and live in Sao Paulo. I currently
              work at
              <a
                href="#"
                className="text-green-500 hover:text-green-400 transition duration-200 ease-in-out px-2 py-1 rounded-md"
              >
                Shakers Agência.
              </a>
            </p>
            <p className="text-sm text-gray-400">
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

        {/* Projects */}

        <section className="flex flex-col gap-5 md:gap-6">
          <h2>Projects</h2>
        </section>

        {/* Projects */}

        {/* Skills */}

        {/* Footer */}
        <footer>
          <p>Feito com ❤️ por Luiz </p>
        </footer>
      </div>
    </main>
  );
}
