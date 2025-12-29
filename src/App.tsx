import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ProjectCard } from "./components/ProjectCard";
import { DataProjectCard } from "./components/DataProjectCard";
import { Contact } from "./components/Contact";

import { featuredProject } from "./data/projects";
import { dataProjects } from "./data/dataProjects";
import { motion } from "framer-motion";
import { Stack } from "./components/Stack"

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Stack />

        {/* Proyecto destacado */}
        <motion.section
          id="projects"
          className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 space-y-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <p className="uppercase text-xs tracking-[0.15em] text-slate-300">
            Proyecto destacado
          </p>
          <h2 className="text-2xl font-semibold mb-2">
            JobBoard – Bolsa de empleo completa
          </h2>
          <ProjectCard image={featuredProject.image} />
        </motion.section>

        {/* Otros proyectos */}
        <motion.section
          className="max-w-5xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="uppercase text-xs tracking-[0.15em] text-slate-300 mb-1">
            Otros proyectos
          </p>
          <h2 className="text-2xl font-semibold mb-4">
            Análisis de datos con Python
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {dataProjects.map((p) => (
              <DataProjectCard key={p.title} {...p} />
            ))}
          </div>
        </motion.section>

        <Contact />
      </main>
    </div>
  );
}
