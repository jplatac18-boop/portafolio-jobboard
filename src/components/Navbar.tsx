import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "stack", label: "Stack" },
  { id: "finance", label: "Panel financiero" },
  { id: "learning", label: "Learning Platform" },
  { id: "projects", label: "JobBoard" },
  { id: "hotel-booking", label: "Hotel Booking" }, // nueva sección
  { id: "others", label: "Otros proyectos" },
  { id: "contact", label: "Contacto" },
];

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);

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

  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-slate-900/90 border-b border-sky-700/40">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between">
        <a
          href="#top"
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-sky-600 text-slate-900 font-bold"
        >
          JP
        </a>
        <nav className="flex gap-3 sm:gap-5 text-xs sm:text-sm text-slate-100">
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
    </header>
  );
}
