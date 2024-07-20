import { FooterPages } from "@/components/footer-pages";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function About() {
  return (
    <div className="relative">
      <main className="mt-20 px-6">
        <div className="max-w-[560px] mx-auto flex flex-col space-y-4">
          <div className="space-y-2">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>About</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h3 className="pt-4 text-2xl font-medium tracking-tighter sm:text-xl">
              About Me
            </h3>
            <p className="text-muted-foreground text-sm">
              Im a software engineer based in Lagos, Nigeria. I specialize in
              building websites and applications that are fast, accessible, and
              easy to use. I have experience working with a variety of clients
              in different industries. I enjoy working on projects that require
              a mix of creative and strategic thinking. When Im not coding, you
              can find me reading, running, or watching movies. Feel free to
              reach out to me. I would love to hear from you.
            </p>
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#ffff] to-transparent dark:from-[#121212] dark:to-transparent pointer-events-none"></div>
      <FooterPages />
    </div>
  );
}
