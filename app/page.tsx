"use client";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { CommandDialog } from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <div className="relative motion-preset-focus bg-background text-[var(--foreground)]">
      <main className="mt-20 px-5 sm:mt-24">
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
        <CommandDialog />
        <div className="max-w-[692px] mx-auto flex flex-col gap-20 sm:gap-24">
          <Header />
          <Projects />
          <ContactForm />
          <Footer />
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#ffff] to-transparent dark:from-[#121212] dark:to-transparent pointer-events-none"></div>
    </div>
  );
}
