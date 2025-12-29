import { motion } from "framer-motion";

export function About() {
  return (
    <motion.section
      id="about"
      className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 text-slate-100 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-3">Sobre mí</h2>
      <p className="text-sm sm:text-base">
        Construyo aplicaciones web usando HTML, CSS, JavaScript, React, Tailwind
        CSS. Me interesa crear
        productos claros, mantenibles y fáciles de usar, desde el diseño de la
        API hasta la interfaz final.
      </p>
    </motion.section>
  );
}
