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
    <div className="relative text-foreground">
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
            <h3 className="text-secondary-foreground pt-4 text-2xl font-medium tracking-tighter sm:text-xl">
              About Me
            </h3>
            <p className="">
              I'm a Front-end Developer, currently residing in São Paulo. My
              passion lies in creating incredible user experiences by leveraging
              the latest design techniques and continually expanding my
              knowledge. My journey in front-end development has allowed me to
              work with a diverse range of clients across various industries,
              enabling me to blend creativity with strategic thinking to deliver
              top-notch solutions.
              <br />
              <br />I enjoy working on projects that require a mix of creative
              and strategic thinking. When Im not coding, you can find me
              reading, running, or watching movies. Feel free to reach out to
              me. I would love to hear from you.
            </p>
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#ffff] to-transparent dark:from-[#121212] dark:to-transparent pointer-events-none"></div>
      <FooterPages />
    </div>
  );
}
