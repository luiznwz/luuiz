import { FooterPages } from "@/components/footer-pages";
import siteConfig from "@/data/site-config";

export default function Project() {
  const projectsSchema = siteConfig.projectsSchema || [];
  return (
    <main className="mt-12 px-6">
      <div className="max-w-[560px] mx-auto flex flex-col gap-20">
        <section className="flex flex-col gap-5 md:gap-6">
          <div className="space-y-12 w-full py-12">
            <div className="opacity-100 filter blur-0 transform translate-y-0 translate-z-0">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="font-medium">Projects</h2>
                  <h3 className="text-2xl font-medium tracking-tighter sm:text-xl">
                    Check out my latest work
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Ive worked on a variety of projects, from simple websites to
                    complex web applications. Here are a few of my favorites.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[560px] mx-auto">
              {projectsSchema.map((project, index) => (
                <div
                  key={index}
                  className="transition-transform transform hover:translate-y-[-2px] duration-300"
                >
                  <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-shadow duration-300 pb-2 h-full">
                    <a
                      className="block cursor-pointer"
                      href={project.projectUrl}
                    >
                      <img src={project.imageUrl} alt={project.title} />
                      {/* Uncomment and use video element if needed
                      <video className="pointer-events-none mx-auto h-40 w-full object-cover object-top">
                        <source src="https://www.pexels.com/pt-br/video/panorama-vista-paisagem-montanhas-4231734/" type="video/mp4" />
                      </video>
                      */}
                    </a>
                    <div className="flex flex-col px-2">
                      <div className="space-y-1">
                        <h3 className="font-semibold tracking-tight mt-1 text-base">
                          {project.title}
                        </h3>
                        <time className="text-sm">{project.period}</time>
                        <div className="hidden font-sans text-xs underline print:visible"></div>
                        <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <FooterPages />
      </div>
    </main>
  );
}
