type ProjectCardProps = {
  image: string;
};

export function ProjectCard({ image }: ProjectCardProps) {
  return (
    <article className="relative flex flex-col lg:flex-row gap-6 bg-slate-800 border border-sky-600 rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.7)] group">
      <a
        href="https://job-board123.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 z-10"
      />
      <img
        src={image}
        alt="Captura de la plataforma JobBoard"
        className="w-full lg:w-1/2 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="relative z-20 flex-1 px-6 py-6 lg:px-8 lg:py-8 text-slate-100">
        <h3 className="text-xl font-semibold mb-2">
          JobBoard – Plataforma de bolsa de empleo
        </h3>
        <p className="text-sm sm:text-base mb-3 opacity-95">
          Plataforma de empleo con tres tipos de usuarios (candidato, empresa,
          admin) que permite publicar ofertas, postularse y moderar el contenido
          en tiempo real. Desarrollada con Django REST Framework, PostgreSQL,
          React, TypeScript y Tailwind, desplegada en Render y Netlify.
        </p>
        <ul className="text-sm space-y-1 mb-3">
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
        <ul className="text-sm space-y-1 mb-3">
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
          <a
            href="https://job-board123.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center justify-center px-4 py-2 rounded-full bg-sky-600 text-slate-900 text-xs sm:text-sm font-medium border border-slate-200"
          >
            Ver sitio
          </a>
          <a
            href="https://jobboard-backend-g8kv.onrender.com/api/"
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center justify-center px-4 py-2 rounded-full bg-sky-600 text-slate-900 text-xs sm:text-sm font-medium border border-slate-200"
          >
            Ver API
          </a>
          <a
            href="https://github.com/jplatac18-boop/jobboard-frontend"
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center justify-center px-4 py-2 rounded-full bg-sky-600 text-slate-900 text-xs sm:text-sm font-medium border border-slate-200"
          >
            Repo frontend
          </a>
          <a
            href="https://github.com/jplatac18-boop/jobboard-backend"
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex items-center justify-center px-4 py-2 rounded-full bg-sky-600 text-slate-900 text-xs sm:text-sm font-medium border border-slate-200"
          >
            Repo backend
          </a>
        </div>
      </div>
    </article>
  );
}
