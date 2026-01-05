import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReactquery,
  SiCypress,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

type FinanceProjectCardProps = {
  image: string;
  demoUrl: string;
  repoUrl: string;
};

export function FinanceProjectCard({
  image,
  demoUrl,
  repoUrl,
}: FinanceProjectCardProps) {
  return (
    <motion.article
      id="Panel financiero"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative flex flex-col lg:flex-row gap-5 sm:gap-6 bg-slate-900/80 border border-emerald-600/60 rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,0,0,0.85)] max-w-6xl mx-auto"
    >
      {/* banda/accent */}
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-400 via-emerald-300 to-teal-400" />

      {/* Imagen */}
      <div className="relative flex-1 min-h-[200px] sm:min-h-[230px] lg:min-h-[320px] overflow-hidden">
        <img
          src={image}
          alt="Captura del panel financiero personal"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-[0.7rem] sm:text-xs font-medium text-slate-100">
            <p className="px-3 py-1 rounded-full bg-emerald-500/90 text-slate-900">
              Dashboard interactivo
            </p>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="relative flex-1 px-4 sm:px-6 lg:px-8 py-5 lg:py-7">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Panel financiero
        </h3>

        {/* badges */}
        <div className="flex flex-wrap gap-2 mb-4 text-[0.7rem] font-medium">
          <span className="px-2.5 py-1 rounded-full bg-sky-900/70 text-sky-200 border border-sky-500/60 inline-flex items-center gap-1.5">
            <SiNextdotjs className="text-slate-100" /> Next.js
          </span>
          <span className="px-2.5 py-1 rounded-full bg-sky-900/70 text-sky-200 border border-sky-500/60 inline-flex items-center gap-1.5">
            <SiTypescript className="text-sky-300" /> TypeScript
          </span>
          <span className="px-2.5 py-1 rounded-full bg-sky-900/70 text-sky-200 border border-sky-500/60 inline-flex items-center gap-1.5">
            <SiTailwindcss className="text-sky-300" /> Tailwind CSS
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-900/70 text-emerald-200 border border-emerald-500/60 inline-flex items-center gap-1.5">
            <SiReactquery className="text-emerald-300" /> TanStack Query
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-900/70 text-emerald-200 border border-emerald-500/60">
            Zustand
          </span>
          <span className="px-2.5 py-1 rounded-full bg-amber-900/70 text-amber-200 border border-amber-500/60 inline-flex items-center gap-1.5">
            <SiCypress className="text-amber-300" /> Cypress
          </span>
          <span className="px-2.5 py-1 rounded-full bg-slate-900/70 text-slate-200 border border-slate-500/60 inline-flex items-center gap-1.5">
            <SiGit className="text-orange-300" /> Git
          </span>
          <span className="px-2.5 py-1 rounded-full bg-slate-900/70 text-slate-200 border border-slate-500/60 inline-flex items-center gap-1.5">
            <SiGithub className="text-slate-100" /> GitHub
          </span>
          <span className="px-2.5 py-1 rounded-full bg-slate-900/70 text-slate-200 border border-slate-500/60 inline-flex items-center gap-1.5">
            <SiVercel className="text-slate-100" /> Vercel
          </span>
        </div>

        <p className="text-xs sm:text-sm md:text-[0.95rem] mb-3 opacity-95 leading-relaxed max-w-xl">
          Dashboard de finanzas personales con soporte multi‑moneda, reglas
          inteligentes de categorización y vistas avanzadas por mes, cuenta y
          categoría. Permite importar movimientos desde archivos CSV o Excel.
        </p>

        <ul className="text-[0.7rem] sm:text-xs md:text-sm space-y-1.5 mb-5">
          <li>
            <strong>Importación inteligente:</strong> carga archivos CSV o Excel
            con detección de columnas y validación básica.
          </li>
          <li>
            <strong>Vistas dinámicas:</strong> filtros por mes, cuenta y
            categoría y conversión de moneda en tiempo real.
          </li>
          <li>
            <strong>Cálculos y alertas:</strong> proyección de cierre de mes y
            avisos si el gasto se desvía de lo planeado.
          </li>
          <li>
            <strong>Calidad:</strong> tests E2E con Cypress para importación,
            reglas y validación de totales.
          </li>
        </ul>

        <div className="flex flex-wrap gap-2">
          {[
            { href: demoUrl, label: "Ver demo" },
            { href: repoUrl, label: "Repo frontend" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-emerald-500 text-slate-900 text-xs md:text-sm font-medium border border-slate-200/80 transition hover:bg-emerald-400 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
