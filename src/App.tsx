import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { DataProjectCard } from "./components/DataProjectCard";
import { Contact } from "./components/Contact";
import { FinanceProjectCard } from "./components/FinanceProjectCard";
import { Stack } from "./components/Stack";
import { LearningProjectCard } from "./components/LearningProjectCard";

import {
  featuredProject,
  financeProject,
  learningProject,
} from "./data/projects";
import { dataProjects } from "./data/dataProjects";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <main>
        <Stack />

        {/* Panel financiero */}
        <motion.section
          id="finance"
          className="scroll-mt-28 max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12 space-y-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <FinanceProjectCard
            image={financeProject.image}
            demoUrl={financeProject.demoUrl}
            repoUrl={financeProject.repoUrl}
          />
        </motion.section>

        {/* Learning Platform */}
        <motion.section
          id="learning"
          className="scroll-mt-28 max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12 space-y-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <LearningProjectCard
            image={learningProject.image}
            demoUrl={learningProject.demoUrl}
            frontendRepo={learningProject.frontendRepo}
          />
        </motion.section>

                {/* JobBoard */}
        <motion.section
          id="projects"
          className="scroll-mt-28 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 space-y-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-[0.18em] uppercase text-slate-50">
              Proyectos
            </h2>
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
          </div>

          <ProjectCard image={featuredProject.image} />
        </motion.section>

        {/* Otros proyectos */}
        <motion.section
          id="others"
          className="scroll-mt-28 max-w-5xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12"
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
