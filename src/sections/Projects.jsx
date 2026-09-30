import { motion } from 'framer-motion'
import {
  Github,
  ArrowUpRight,
  Container,
  Server,
  Package,
  Terminal,
  FolderSync,
  Layers,
  Workflow,
  CloudUpload,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { PROJECTS } from '../constants/data'

// One icon per project, in the same order as PROJECTS.
const ICONS = [Container, Server, Package, Terminal, FolderSync, Layers, Workflow, CloudUpload]

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="projects"
          title="Hands-on lab work"
          description="Practical projects I've built to apply DevOps concepts — containerization, cloud infrastructure, networking, and automation."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {PROJECTS.map((project, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                whileHover={{ y: -4 }}
                className="card card-hover group flex flex-col p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-mist-200 transition-colors duration-300 group-hover:border-signal-cyan/40 group-hover:text-signal-cyan">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs text-mist-500">
                    lab/{String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-mist-100">{project.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-mist-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-mist-200 transition-colors hover:text-signal-cyan"
                  >
                    <Github className="h-3.5 w-3.5" /> View code
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-signal-cyan"
                    >
                      Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-mist-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal-mint/70" />
                      lab environment
                    </span>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
