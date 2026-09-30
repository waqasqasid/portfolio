import { motion } from 'framer-motion'
import { Terminal, Container, Cloud, Layers, Network, Workflow } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { SKILL_GROUPS } from '../constants/data'

const ICONS = { Terminal, Container, Cloud, Layers, Network, Workflow }

// Bento layout: wider tiles for the larger groups so each row fills three columns.
const LAYOUT = [
  { category: 'AWS', span: 'lg:col-span-2' },
  { category: 'Linux', span: '' },
  { category: 'Docker', span: '' },
  { category: 'CI/CD & Automation', span: 'lg:col-span-2' },
  { category: 'Virtualization', span: '' },
  { category: 'Networking', span: 'lg:col-span-2' },
]

const ordered = [
  ...LAYOUT.map((l) => {
    const group = SKILL_GROUPS.find((g) => g.category === l.category)
    return group && { ...group, span: l.span }
  }).filter(Boolean),
  ...SKILL_GROUPS.filter((g) => !LAYOUT.some((l) => l.category === g.category)).map((g) => ({
    ...g,
    span: '',
  })),
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="skills"
          title="The stack I operate in"
          description="Grouped by domain — the tools and platforms I use to keep systems running and deployments predictable."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ordered.map((group, i) => {
            const Icon = ICONS[group.icon] ?? Terminal
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className={`card card-hover group overflow-hidden p-7 ${group.span}`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-signal-blue/10 blur-3xl transition-colors duration-500 group-hover:bg-signal-cyan/20" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-signal-blue/30 bg-gradient-to-br from-signal-blue/20 to-signal-cyan/5 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-signal-cyan" />
                  </div>
                  <span className="font-mono text-[11px] text-mist-500">
                    {String(group.skills.length).padStart(2, '0')} tools
                  </span>
                </div>

                <h3 className="relative mt-6 text-xl font-semibold text-mist-100">{group.category}</h3>
                <ul className="relative mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="chip">
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
