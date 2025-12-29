import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript (ES6+)", "React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    title: "Backend & Datos",
    items: ["Python", "Django REST Framework", "PostgreSQL", "JWT Auth"],
  },
  {
    title: "Testing & Otros",
    items: ["Cypress", "Jest", "Testing Library", "Git", "Netlify", "Render"],
  },
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
      <p className="uppercase text-xs tracking-[0.15em] text-slate-300 mb-1">
        Stack principal
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        Tecnologías con las que trabajo
      </h2>
      <p className="text-sm sm:text-base mb-6 max-w-2xl">
        Este portafolio y el proyecto JobBoard están construidos con un stack
        moderno orientado a desarrollo full‑stack: React + TypeScript en el
        frontend.
      </p>

      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl bg-slate-900/70 border border-sky-700/40 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <h3 className="text-sm font-semibold mb-3 text-sky-200">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-full bg-slate-800 text-[0.7rem] text-slate-100 border border-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
