import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { PROJECTS } from '../constants/data'

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="~/projects"
          title="Hands-on lab work"
          description="Practical projects I've built to apply DevOps concepts — containerization, cloud infrastructure, networking, and automation."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -6, borderColor: 'rgba(59,130,246,0.4)' }}
              className="glass flex flex-col rounded-2xl p-6"
            >
              <span className="font-mono text-xs text-signal-cyan">
                lab/{String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-mist-100">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-mist-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-xs text-mist-100 glass-hover"
                >
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-signal-gradient px-4 py-2 font-mono text-xs text-ink-950"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                  </a>
                ) : (
                  <span className="font-mono text-xs text-mist-400/70">lab environment</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
