import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { motion } from "framer-motion";

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <section className="flex flex-col gap-5 sm:gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        <Avatar>
          <a href="https://github.com/luiznwz">
            <AvatarImage src="https://github.com/luiznwz.png" />
            <AvatarFallback>LR</AvatarFallback>
          </a>
        </Avatar>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-3"
        >
          <h1 className="font-medium text-primary text-base">Luiz Renan</h1>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-secondary-foreground">About</h2>
        <p className="text-foreground font-normal text-base leading-[1.65]">
          I{"'"}m a Front-end Developer at{" "}
          <a
            href="https://shakersagencia.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-neutral-500 underline-offset-2 hover:decoration-neutral-400 duration-400 transition"
          >
            ShakersAgency
          </a>{" "}
          and live in São Paulo. My goal is to create incredible experiences for
          users with the new design techniques using Liquid and Shopify, I{"'"}m constantly studying and
          learning.
        </p>
        <p className="text-foreground font-normal text-base leading-[1.65]">
          I'm always exploring new design and development techniques to balance
          aesthetics, speed, and conversion, ensuring that every project
          delivers real value to users and businesses.
        </p>
      </motion.div>
    </section>
  );
};
