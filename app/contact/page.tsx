import { FooterPages } from "@/components/footer-pages";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function ContactPage() {
  return (
    <div className="relative">
      <main className="mt-20 px-6">
        <div className="max-w-[692px] mx-auto flex flex-col space-y-4">
          <div className="space-y-2">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Contact</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h3 className="pt-4 text-2xl font-medium tracking-tighter sm:text-xl">
              Contact Me
            </h3>
            <p className="text-muted-foreground text-sm">
              Im always open to new projects, collaborations, or if you just
              want to chat. Feel free to reach out to me.
            </p>
          </div>
        </div>
        <div className="max-w-[644px] mx-auto mt-8">{/* Contact Form */}</div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#ffff] to-transparent dark:from-[#121212] dark:to-transparent pointer-events-none"></div>
      <FooterPages />
    </div>
  );
}
