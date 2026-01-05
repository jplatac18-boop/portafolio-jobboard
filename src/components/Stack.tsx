import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiSass,
  SiPython,
  SiPostgresql,
  SiJest,
  SiCypress,
  SiGit,
  SiGithub,
} from "react-icons/si";

type TechItem = {
  name: string;
  icon?: React.ReactNode;
};

const tech: TechItem[] = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-400" /> },
  { name: "CSS", icon: <SiCss3 className="text-sky-400" /> },
  { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "Flexbox" },
  { name: "CSS Grid" },
  { name: "Sass / SCSS", icon: <SiSass className="text-pink-300" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
  { name: "React", icon: <SiReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-slate-100" /> },
  { name: "Vite", icon: <SiVite className="text-purple-300" /> },
  { name: "Zustand" },
  { name: "TanStack Query" },
  { name: "Python", icon: <SiPython className="text-yellow-300" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-300" /> },
  { name: "Jest", icon: <SiJest className="text-rose-300" /> },
  { name: "Cypress", icon: <SiCypress className="text-emerald-300" /> },
  { name: "Git", icon: <SiGit className="text-orange-300" /> },
  { name: "GitHub", icon: <SiGithub className="text-slate-200" /> },
];

export function Stack() {
  return (
    <motion.section
      id="stack"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 text-slate-100"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl sm:text-2xl font-semibold mb-3">
        Tecnologías con las que trabajo
      </h2>
      <p className="text-xs sm:text-sm md:text-base mb-5 sm:mb-6 max-w-2xl">
        Este portafolio y los proyectos destacados están construidos con un
        stack moderno orientado a desarrollo web, combinando herramientas para
        la interfaz, la lógica de negocio, los datos y el testing.
      </p>

      <div className="rounded-3xl bg-slate-900/70 border border-sky-700/40 p-4 sm:p-5 md:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {tech.map((t) => (
            <span
              key={t.name}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-800 text-[0.7rem] sm:text-[0.75rem] text-slate-100 border border-slate-600"
            >
              {t.icon && <span className="text-sm sm:text-base">{t.icon}</span>}
              <span>{t.name}</span>
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
