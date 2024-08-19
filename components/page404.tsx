export default function Page404() {
  return (
    <main className="max-w-[692px] place-items-center px-6 sm:py-24 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold text-green-400">404</p>
        <h1 className="mt-4 text-xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 leading-7">
          Sorry, we couldnt finf the page you are looking for.
        </p>
        <div className="mt-10 flex itens-center justify-center gap-x-6">
          <a
            className="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-green-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300 "
            href="#"
          >
            Go Back Home
          </a>
          <a className="text-sm itens-center font-semibold" href="#">
            Contact Me
          </a>
        </div>
      </div>
    </main>
  );
}
