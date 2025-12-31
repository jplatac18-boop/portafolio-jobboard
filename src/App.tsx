import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ProjectCard } from "./components/ProjectCard";
import { DataProjectCard } from "./components/DataProjectCard";
import { Contact } from "./components/Contact";
import { FinanceProjectCard } from "./components/FinanceProjectCard";
import { Stack } from "./components/Stack";

import { featuredProject, financeProject } from "./data/projects";
import { dataProjects } from "./data/dataProjects";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Stack />

        <motion.section
          id="projects"
          className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 space-y-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <h2 className="uppercase text-xl tracking-[0.15em] text-center">
            Proyectos
          </h2>
          <h3 className="text-2xl font-semibold mb-2">
            JobBoard
          </h3>
          <ProjectCard image={featuredProject.image} />
        </motion.section>

        <motion.section
          className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12 space-y-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <h2 className="text-2xl font-semibold mb-2">
            Panel financiero
          </h2>
          <FinanceProjectCard
            image={financeProject.image}
            demoUrl={financeProject.demoUrl}
            repoUrl={financeProject.repoUrl}
          />
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
