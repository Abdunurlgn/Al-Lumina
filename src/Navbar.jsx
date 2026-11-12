export default function Navbar() {
  return (
    <header className="border-b border-slate-700 bg-slate-900 px-6 py-4 md:px-10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="text-xl font-bold tracking-tight text-white">
          CodeSignal
        </span>
        <ul className="hidden items-center gap-8 text-slate-300 md:flex">
          <li>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-white"
            >
              Articles
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-white"
            >
              Snippets
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-white"
            >
              Archive
            </a>
          </li>
        </ul>
        <button
          className="cursor-pointer rounded-lg bg-indigo-500 px-5 py-2 font-semibold
         text-white transition-colors duration-200
          hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-indigo-300"
        >
          Subscribe
        </button>
      </nav>
    </header>
  )
}
