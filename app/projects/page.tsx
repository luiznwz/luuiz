export default function Project() {
  return (
    <main className="mt-20 px-6">
      <div className="max-w-[560px] mx-auto flex flex-col gap-20">
        <section className="flex flex-col gap-5 md:gap-6">
          <div className="space-y-12 w-full py-12">
            <div className="opacity: 1; filter: blur(0px); transform: translateY(-6px) translateZ(0px)">
              <div className="flex flex-col items-center justify-center space-y-4 ">
                <div className="space-y-2">
                  <h2 className="font-medium">Projects</h2>
                  <h3 className="text-2xl font-medium tracking-tighter sm:text-xl">
                    Check out my latest work
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    I ve worked on a variety of projects, from simple websites
                    to complex web applications. Here are a few of my favorites.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[560px] mx-auto">
              <div className="opacity: 1; filter: blur(0px); transform: translateY(-6px) translateZ(0px);">
                <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out pb-2 h-full ">
                  <a
                    className="block cursor-pointer"
                    href="http://localhost:3000"
                  >
                    <img src="image-s3-image1.jpg" alt="" />
                    {/* <video className="pointer-events-none mx-auto h-40 w-full object-cover object-top">
                      <source
                        src="https://www.pexels.com/pt-br/video/panorama-vista-paisagem-montanhas-4231734/"
                        type="video/mp4"
                      />
                    </video> */}
                  </a>
                  <div className="flex flex-col px-2">
                    <div className="space-y-1">
                      <h3 className="font-semibold tracking-tight mt-1 text-base">
                        ChatCollect
                      </h3>
                      <time className="text-sm">Jan 2024 - Feb 2024</time>
                      <div className="hidden font-sans text-xs underline print:visible"></div>
                      <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        <p>
                          With the release of the {""}
                          <a
                            className="text-black font-medium"
                            href="http://localhost:3000/"
                          >
                            Open GPT Store
                          </a>{" "}
                          I was able to create a chatbot that could collect data
                          from users and store it in a database. This was a fun
                          project to work on and I learned a lot about natural
                          language processing and machine learning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Second Project */}
              <div className="opacity: 1; filter: blur(0px); transform: translateY(-6px) translateZ(0px);">
                <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out pb-2 h-full ">
                  <a
                    className="block cursor-pointer"
                    href="http://localhost:3000"
                  >
                    <img src="image-s3-image1.jpg" alt="" />
                    {/* <video className="pointer-events-none mx-auto h-40 w-full object-cover object-top">
                      <source
                        src="https://www.pexels.com/pt-br/video/panorama-vista-paisagem-montanhas-4231734/"
                        type="video/mp4"
                      />
                    </video> */}
                  </a>
                  <div className="flex flex-col px-2">
                    <div className="space-y-1">
                      <h3 className="font-semibold tracking-tight mt-1 text-base">
                        ChatCollect
                      </h3>
                      <time className="text-sm">Jan 2024 - Feb 2024</time>
                      <div className="hidden font-sans text-xs underline print:visible"></div>
                      <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        <p>
                          With the release of the {""}
                          <a
                            className="text-black font-medium"
                            href="http://localhost:3000/"
                          >
                            Open GPT Store
                          </a>{" "}
                          I was able to create a chatbot that could collect data
                          from users and store it in a database. This was a fun
                          project to work on and I learned a lot about natural
                          language processing and machine learning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
