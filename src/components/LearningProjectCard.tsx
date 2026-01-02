import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiRender,
} from "react-icons/si";

type LearningProjectCardProps = {
  image: string;
  demoUrl: string;
  frontendRepo: string;
};

export function LearningProjectCard({
  image,
  demoUrl,
  frontendRepo,
}: LearningProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative flex flex-col lg:flex-row gap-6 bg-slate-900/80 border border-sky-700/60 rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,0,0,0.85)] max-w-6xl mx-auto"
    >
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sky-400 via-sky-300 to-cyan-400" />

      {/* Imagen */}
      <div className="relative flex-1 min-h-[220px] sm:min-h-[260px] lg:min-h-[320px] overflow-hidden">
        <img
          src={image}
          alt="Captura del panel financiero personal"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Contenido */}
      <div className="relative flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          Learning Platform – Academia online frontend
        </h3>

        {/* badges */}
        <div className="flex flex-wrap gap-2 mb-4 text-[0.7rem] font-medium">
          <span className="px-2.5 py-1 rounded-full bg-sky-900/70 text-sky-200 border border-sky-500/60 inline-flex items-center gap-1.5">
            <SiReact className="text-sky-400" /> React
          </span>
          <span className="px-2.5 py-1 rounded-full bg-sky-900/70 text-sky-200 border border-sky-500/60 inline-flex items-center gap-1.5">
            <SiTypescript className="text-sky-300" /> TypeScript
          </span>
          <span className="px-2.5 py-1 rounded-full bg-sky-900/70 text-sky-200 border border-sky-500/60 inline-flex items-center gap-1.5">
            <SiVite className="text-purple-300" /> Vite
          </span>
          <span className="px-2.5 py-1 rounded-full bg-sky-900/70 text-sky-200 border border-sky-500/60 inline-flex items-center gap-1.5">
            <SiTailwindcss className="text-sky-300" /> Tailwind CSS
          </span>
          <span className="px-2.5 py-1 rounded-full bg-slate-900/70 text-slate-200 border border-slate-500/60 inline-flex items-center gap-1.5">
            <SiGit className="text-orange-300" /> Git
          </span>
          <span className="px-2.5 py-1 rounded-full bg-slate-900/70 text-slate-200 border border-slate-500/60 inline-flex items-center gap-1.5">
            <SiGithub className="text-slate-100" /> GitHub
          </span>
          <span className="px-2.5 py-1 rounded-full bg-slate-900/70 text-slate-200 border border-slate-500/60 inline-flex items-center gap-1.5">
            <SiRender className="text-sky-200" /> Render
          </span>
        </div>

        <p className="text-sm md:text-[0.95rem] mb-3 opacity-95 leading-relaxed max-w-xl">
          Plataforma de cursos online centrada en el frontend, con flujo de
          estudiante para explorar catálogo, inscribirse, navegar por módulos y
          lecciones y realizar quizzes básicos, construida con React,
          TypeScript, Vite y Tailwind CSS y desplegada en Render como SPA.
        </p>

        <ul className="text-xs md:text-sm space-y-1.5 mb-5">
          <li>
            <strong>Arquitectura:</strong> single page application con React +
            TypeScript + Vite, gestión de rutas y estado en el cliente.
          </li>
          <li>
            <strong>Experiencia de usuario:</strong> navegación por cursos,
            módulos y lecciones, marcador de progreso y feedback inmediato en
            quizzes.
          </li>
          <li>
            <strong>Despliegue:</strong> build estático servido desde Render,
            configurado para proyectos Vite.
          </li>
        </ul>

        <div className="flex flex-wrap gap-2">
          {[
            { href: demoUrl, label: "Ver demo" },
            { href: frontendRepo, label: "Repo frontend" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-sky-600 text-slate-900 text-xs md:text-sm font-medium border border-slate-200/80 transition hover:bg-sky-400 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
