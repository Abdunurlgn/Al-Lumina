function Hero() {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center
     bg-slate-900 px-6 py-20 text-center md:px-10"
    >
      <h1 className="mx-auto max-w-4xl text-4xl font-bold text-white md:text-6xl lg:text-7xl">
        Design emails people actually want to read
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300 md:text-xl">
        Build, send, and track high-converting newsletters without spending
        hours on layout.
      </p>
      <button
        className="mt-8 w-full cursor-pointer rounded-lg
             bg-indigo-500 px-6 py-3 font-semibold text-white transition-colors duration-200
              hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2
               focus-visible:outline-indigo-300 md:w-auto"
      >
        Get Started
      </button>
    </section>
  )
}
export default Hero
