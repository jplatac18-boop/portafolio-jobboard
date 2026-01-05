import { motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineClipboard, HiCheck } from "react-icons/hi2";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "jpltac18@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // opcional
    }
  };

  return (
    <section
      id="top"
      className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 bg-gradient-to-br from-slate-800 via-sky-900 to-sky-700 text-slate-100"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8 sm:gap-10">
        {/* Columna foto */}
        <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-1/3">
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-[2px] border-sky-400 shadow-xl">
            <img
              src="/img/avatar.jpeg"
              alt="Foto de Jesús D. Plata Castro"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left text-sm">
            <p className="font-semibold text-lg sm:text-xl md:text-2xl">
              Jesús D. Plata Castro
            </p>
            <p className="text-slate-200 text-xs sm:text-sm">
              Desarrollador Web Frontend
            </p>
          </div>
        </div>

        {/* Columna texto + contacto */}
        <motion.div
          className="w-full md:w-2/3 text-content md:text-left space-y-3 bg-slate-950/40 border border-sky-700/50 rounded-2xl p-4 sm:p-5 md:p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
              Sobre mí
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-200">
              Soy estudiante de Administración Industrial y me apasiona crear
              interfaces web frontend que se sientan claras, modernas y fáciles
              de usar.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-slate-200 mt-2">
              Además de español, hablo inglés y portugués a nivel
              conversacional, lo que me ayuda a comunicarme con equipos y
              usuarios de diferentes contextos.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-slate-200 mt-2">
              Disfruto resolver problemas, aprender rápido y mantener la calma
              bajo presión. Me caracterizo por la comunicación clara, el trabajo
              en equipo, la responsabilidad con los plazos y la atención al
              detalle en cada proyecto.
            </p>
          </div>

          {/* Email + copiar + enlaces en una fila (wrap en móvil) */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-2">
            <span className="px-3 py-1 rounded-full border border-sky-700 bg-slate-900/70 text-[0.7rem] sm:text-xs md:text-sm">
              {email}
            </span>

            <button
              onClick={handleCopy}
              className="px-3 py-1 rounded-full border border-sky-700 bg-slate-900/70 hover:bg-sky-100 hover:text-slate-900 transition text-[0.7rem] sm:text-xs md:text-sm flex items-center justify-center"
              aria-label="Copiar correo"
            >
              {copied ? (
                <HiCheck className="w-4 h-4" />
              ) : (
                <HiOutlineClipboard className="w-4 h-4" />
              )}
            </button>

            <a
              href="https://www.linkedin.com/in/jesus-daniel-plata-castro-44b514218/"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-full border border-sky-700 bg-slate-900/70 hover:bg-sky-100 hover:text-slate-900 transition text-[0.7rem] sm:text-xs md:text-sm"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/jplatac18-boop"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-full border border-sky-700 bg-slate-900/70 hover:bg-sky-100 hover:text-slate-900 transition text-[0.7rem] sm:text-xs md:text-sm"
            >
              GitHub
            </a>

            <a
              href="https://drive.google.com/file/d/1rIYV677KDM5i-Lp_dWhHq3Wbq7bZm8km/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-full border border-sky-700 bg-slate-900/70 hover:bg-sky-100 hover:text-slate-900 transition text-[0.7rem] sm:text-xs md:text-sm"
            >
              Ver Curriculum
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
