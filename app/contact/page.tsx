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
        <div className="max-w-[644px] mx-auto flex flex-col space-y-4">
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
        <div className="max-w-[644px] mx-auto mt-8">
          <form
            action="https://formspree.io/f/xnqoqzqz"
            method="POST"
            className="space-y-4"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-muted-foreground text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full p-2 border border-muted-foreground dark:border-muted-foreground-dark focus:outline-none focus:border-primary dark:bg-[#121212] dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-muted-foreground text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full p-2 border border-muted-foreground dark:border-muted-foreground-dark focus:outline-none focus:border-primary dark:bg-[#121212] dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-muted-foreground text-sm"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="w-full p-2 border border-muted-foreground dark:border-muted-foreground-dark focus:outline-none focus:border-primary dark:bg-[#121212] dark:text-white"
              ></textarea>
            </div>
            <button type="submit" className="w-full py-2 ">
              Send
            </button>
          </form>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#ffff] to-transparent dark:from-[#121212] dark:to-transparent pointer-events-none"></div>
      <FooterPages />
    </div>
  );
}
