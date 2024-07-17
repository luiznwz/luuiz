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
        <div className="max-w-[560px] mx-auto flex flex-col space-y-4">
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
      </main>
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-[hsl(210,20%,10%)] pointer-events-none"></div>
      <FooterPages />
    </div>
  );
}
