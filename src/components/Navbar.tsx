import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "stack", label: "Stack" },
  { id: "finance", label: "Panel financiero" },
  { id: "learning", label: "Learning Platform" },
  { id: "projects", label: "JobBoard" },
  { id: "hotel-booking", label: "Hotel Booking" },
  { id: "others", label: "Otros proyectos" },
];

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      let current: string | null = null;

      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = section.id;
          break;
        }
      }

      setActive(current);
    };

    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-slate-900/90 border-b border-sky-700/40">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between">
        <a
          href="#top"
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-sky-600 text-slate-900 font-bold"
        >
          JP
        </a>

        {/* Botón hamburguesa móvil */}
        <button
          className="relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-sky-500 bg-slate-900/80 text-slate-100 shadow-sm sm:hidden transition hover:bg-sky-500/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir navegación"
        >
          <span
            className={`
              absolute block h-[2px] w-4 rounded-full bg-sky-200 transition-transform duration-200
              ${open ? "rotate-45 translate-y-[1px]" : "-translate-y-[4px]"}
            `}
          />
          <span
            className={`
              absolute block h-[2px] w-4 rounded-full bg-sky-200 transition-opacity duration-150
              ${open ? "opacity-0" : "opacity-100"}
            `}
          />
          <span
            className={`
              absolute block h-[2px] w-4 rounded-full bg-sky-200 transition-transform duration-200
              ${open ? "-rotate-45 -translate-y-[1px]" : "translate-y-[4px]"}
            `}
          />
        </button>

        {/* Nav escritorio */}
        <nav className="hidden sm:flex gap-4 text-xs sm:text-sm text-slate-100">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative group ${
                active === s.id ? "text-sky-300" : "opacity-80"
              }`}
            >
              <span className="transition">{s.label}</span>
              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] bg-sky-300 transition-all
                  ${active === s.id ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </a>
          ))}
        </nav>
      </div>

      {/* Nav móvil desplegable */}
      {open && (
        <nav className="sm:hidden border-t border-sky-800 bg-slate-950/95 backdrop-blur">
          <div className="max-w-5xl mx-auto px-4 py-2 flex flex-col gap-1 text-sm text-slate-100">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={handleNavClick}
                className={`py-2 border-b border-slate-800/60 last:border-b-0 ${
                  active === s.id ? "text-sky-300" : "opacity-85"
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
