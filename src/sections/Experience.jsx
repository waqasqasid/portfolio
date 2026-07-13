import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { EXPERIENCE } from '../constants/data'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="~/experience"
          title="Where I've worked"
          description="A timeline of my roles so far — from student support to hands-on DevOps."
        />

        <div className="relative border-l border-white/10 pl-8">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-signal-gradient shadow-glow-sm">
                <Briefcase className="h-4 w-4 text-ink-950" />
              </span>

              <div className="glass glass-hover rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-mist-100">
                    {job.role}
                  </h3>
                  <span className="rounded-full border border-signal-blue/30 px-3 py-1 font-mono text-xs text-signal-cyan">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-mist-400">{job.company}</p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-mist-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-signal-cyan" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
