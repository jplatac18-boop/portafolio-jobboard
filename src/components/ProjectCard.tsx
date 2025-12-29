import { motion } from "framer-motion";

type ProjectCardProps = {
  image: string;
};

export function ProjectCard({ image }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        group relative flex flex-col lg:flex-row gap-6 
        bg-slate-900/80 border border-sky-700/60 rounded-3xl overflow-hidden 
        shadow-[0_18px_40px_rgba(0,0,0,0.7)] 
        transition-transform duration-300 ease-out
        hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(0,0,0,0.85)]
        max-w-6xl mx-auto
      "
    >
      {/* banda/accent */}
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sky-400 via-sky-300 to-cyan-400" />

      {/* Imagen */}
      <div className="relative flex-1 min-h-[220px] sm:min-h-[260px] lg:min-h-[320px] overflow-hidden">
        <img
          src={image}
          alt="Captura de la plataforma JobBoard"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* overlay con CTA */}
        <div
          className="
            pointer-events-none absolute inset-0 
            bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent 
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-500
          "
        >
          <div className="absolute bottom-4 left-4 text-xs font-medium text-slate-100">
            <p className="px-3 py-1 rounded-full bg-sky-600/90 text-slate-900">
              Ver demo en vivo
            </p>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="relative flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          JobBoard – Plataforma de bolsa de empleo
        </h3>

        {/* badges de stack */}
        <div className="flex flex-wrap gap-2 mb-4 text-[0.7rem] font-medium">
          <span className="px-2.5 py-1 rounded-full bg-sky-900/70 text-sky-200 border border-sky-500/60">
            React
          </span>
          <span className="px-2.5 py-1 rounded-full bg-sky-900/70 text-sky-200 border border-sky-500/60">
            TypeScript
          </span>
          <span className="px-2.5 py-1 rounded-full bg-sky-900/70 text-sky-200 border border-sky-500/60">
            Vite
          </span>
          <span className="px-2.5 py-1 rounded-full bg-sky-900/70 text-sky-200 border border-sky-500/60">
            Tailwind CSS
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-900/70 text-emerald-200 border border-emerald-500/60">
            Django REST
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-900/70 text-emerald-200 border border-emerald-500/60">
            PostgreSQL
          </span>
          <span className="px-2.5 py-1 rounded-full bg-amber-900/70 text-amber-200 border border-amber-500/60">
            JWT Auth
          </span>
        </div>

        <p className="text-sm md:text-[0.95rem] mb-3 opacity-95 leading-relaxed max-w-xl">
          Plataforma de empleo con tres tipos de usuarios (candidato, empresa,
          admin) que permite publicar ofertas, postularse y moderar el contenido
          en tiempo real. Desarrollada con Django REST Framework, PostgreSQL,
          React, TypeScript y Tailwind, desplegada en Render y Netlify.
        </p>

        <ul className="text-xs md:text-sm space-y-1.5 mb-3">
          <li>
            <strong>Frontend:</strong> React, TypeScript, Vite, Tailwind CSS
          </li>
          <li>
            <strong>Backend:</strong> Django, Django REST Framework, PostgreSQL,
            JWT
          </li>
          <li>
            <strong>Infraestructura:</strong> Render (backend + base de datos),
            Netlify (frontend)
          </li>
          <li>
            <strong>Base de datos:</strong> PostgreSQL gestionada en Render
            mediante <code>DATABASE_URL</code>
          </li>
        </ul>

        <ul className="text-xs md:text-sm space-y-1.5 mb-5">
          <li>
            3 roles con permisos diferenciados (candidato, empresa, admin) y
            flujos protegidos.
          </li>
          <li>
            Autenticación JWT con refresh tokens y paneles privados para empresa
            y candidato.
          </li>
          <li>
            Panel de administración para bloquear empresas y
            activar/desactivar ofertas.
          </li>
        </ul>

        <div className="flex flex-wrap gap-2">
          {[
            {
              href: "https://job-board123.netlify.app/",
              label: "Ver sitio",
            },
            {
              href: "https://jobboard-backend-g8kv.onrender.com/api/",
              label: "Ver API",
            },
            {
              href: "https://github.com/jplatac18-boop/jobboard-frontend",
              label: "Repo frontend",
            },
            {
              href: "https://github.com/jplatac18-boop/jobboard-backend",
              label: "Repo backend",
            },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center px-4 py-2 rounded-full 
                bg-sky-600 text-slate-900 text-xs md:text-sm font-medium 
                border border-slate-200/80 
                transition 
                hover:bg-sky-400 hover:-translate-y-[1px] 
                active:translate-y-0 active:scale-[0.98]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70
              "
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
