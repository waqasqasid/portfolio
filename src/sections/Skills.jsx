import { motion } from 'framer-motion'
import {
  Terminal,
  Container,
  Cloud,
  Layers,
  Network,
  Workflow,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { SKILL_GROUPS } from '../constants/data'

const ICONS = { Terminal, Container, Cloud, Layers, Network, Workflow }

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="~/skills"
          title="The stack I operate in"
          description="Grouped by domain — the tools and platforms I use to keep systems running and deployments predictable."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = ICONS[group.icon]
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass glass-hover group relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-signal-blue/10 blur-2xl transition-all duration-500 group-hover:bg-signal-cyan/20" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-gradient/20 border border-signal-blue/30">
                  <Icon className="h-5 w-5 text-signal-cyan" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-mist-100">
                  {group.category}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-xs text-mist-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
