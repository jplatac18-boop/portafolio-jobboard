import { motion } from "framer-motion";

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-3xl mx-auto px-6 py-10 text-center text-slate-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-3">Contacto</h2>
      <p className="text-sm sm:text-base">
        Si te interesa este proyecto o quieres hablar de una posible
        colaboración, actualmente estoy abierto a oportunidades como
        desarrollador frontend / full‑stack junior.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
        <span className="px-3 py-1 rounded-full border border-sky-700 bg-slate-800">
          Correo: jpltac18@gmail.com
        </span>
        <a
          href="https://www.linkedin.com/in/jesus-daniel-plata-castro-44b514218/"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 rounded-full border border-sky-700 bg-slate-800 hover:bg-sky-600 hover:text-slate-900 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/jplatac18-boop"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 rounded-full border border-sky-700 bg-slate-800 hover:bg-sky-600 hover:text-slate-900 transition"
        >
          GitHub
        </a>
      </div>
    </motion.section>
  );
}
