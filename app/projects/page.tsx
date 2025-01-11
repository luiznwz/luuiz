import { FooterPages } from "@/components/footer-pages";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import siteConfig from "@/data/site-config";

export default function Project() {
  const projectsSchema = siteConfig.projectsSchema || [];
  return (
    <div className="relative">
      <main className="mt-12 px-6">
        <div className="max-w-[644px] mx-auto flex flex-col gap-20">
          <section className="flex flex-col gap-5 md:gap-6">
            <div className="space-y-12 w-full py-12">
              <div className="opacity-100 filter blur-0 transform translate-y-0 translate-z-0">
                <div className="flex flex-col space-y-4">
                  <div className="space-y-2">
                    <h3 className="pt-4 text-2xl font-medium tracking-tighter sm:text-xl">
                      Check out my latest work
                    </h3>
                    <p className="text-sm">
                      Ive worked on a variety of projects, from simple websites
                      to complex web applications. Here are a few of my
                      favorites.
                    </p>
                  </div>
                </div>
              </div>
              <h2 className="text-center pt-20">Building...</h2>
            </div>
          </section>
          <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#ffff] to-transparent dark:from-[#121212] dark:to-transparent pointer-events-none"></div>
        </div>
        <FooterPages />
      </main>
    </div>
  );
}
