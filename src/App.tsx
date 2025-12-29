import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ProjectCard } from "./components/ProjectCard";
import { DataProjectCard } from "./components/DataProjectCard";
import { Contact } from "./components/Contact";

import { featuredProject } from "./data/projects";
import { dataProjects } from "./data/dataProjects";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <main>
        <About />

        <section
          id="projects"
          className="max-w-6xl mx-auto px-6 py-12 space-y-4"
        >
          <p className="uppercase text-xs tracking-[0.15em] text-slate-300">
            Proyecto destacado
          </p>
          <h2 className="text-2xl font-semibold mb-2">
            JobBoard – Bolsa de empleo completa
          </h2>
          <ProjectCard image={featuredProject.image} />
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12">
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
        </section>

        <Contact />
      </main>
    </div>
  );
}
