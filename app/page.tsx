"use client";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { CommandDialog } from "@/components/ui/command";
import ThemeToggle from "@/components/ui/ThemeToggle";
import siteConfig from "../data/site-config";

export default function Home() {
  const socialLinks = siteConfig.socialLinks || [];
  const navLinks = siteConfig.footerNavLinks || [];
  const imagesLink = siteConfig.imagesLink || [];

  return (
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
  );
}
