"use client";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { CommandDialog } from "@/components/ui/command";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <div className="relative">
      <main className="mt-20 px-6">
        <ThemeToggle />
        <CommandDialog />
        <div className="max-w-[560px] mx-auto flex flex-col gap-20">
          {/* Header */}
          <Header />

          {/* Projects */}
          <Projects />

          {/* Skills */}
          <Stack />

          {/* Contact */}
          <ContactForm />

          {/* Footer */}
          <Footer />
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-[hsl(210,20%,10%)] pointer-events-none"></div>
    </div>
  );
}
