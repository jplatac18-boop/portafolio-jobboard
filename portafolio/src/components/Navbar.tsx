export function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-slate-900/90 border-b border-sky-700/40">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#top"
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-sky-600 text-slate-900 font-bold"
        >
          JP
        </a>
        <nav className="flex gap-5 text-sm text-slate-100">
          <a href="#about" className="relative group">
            <span className="opacity-90 group-hover:opacity-100 transition">
              Sobre mí
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-300 group-hover:w-full transition-all" />
          </a>
          <a href="#projects" className="relative group">
            <span className="opacity-90 group-hover:opacity-100 transition">
              Proyecto JobBoard
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-300 group-hover:w-full transition-all" />
          </a>
          <a href="#contact" className="relative group">
            <span className="opacity-90 group-hover:opacity-100 transition">
              Contacto
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-300 group-hover:w-full transition-all" />
          </a>
        </nav>
      </div>
    </header>
  );
}
