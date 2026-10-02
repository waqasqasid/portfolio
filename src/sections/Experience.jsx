import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { EXPERIENCE } from '../constants/data'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="experience"
          title="Where I've worked"
          description="A timeline of my roles so far — from student support to hands-on DevOps."
        />

        <div className="relative">
          {/* Timeline rail */}
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-signal-cyan via-signal-blue/40 to-transparent md:left-[calc(12rem+7px)]" />

          <div className="space-y-8 md:space-y-10">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative grid grid-cols-1 gap-3 pl-7 md:grid-cols-[12rem_1fr] md:gap-10 md:pl-0"
              >
                <span
                  className={`absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-ink-950 md:left-48 ${
                    i === 0 ? 'bg-signal-cyan shadow-glow-sm' : 'bg-mist-500'
                  }`}
                />

                <div className="md:pr-8 md:pt-1 md:text-right">
                  <span className="font-mono text-xs uppercase tracking-wider text-signal-cyan">
                    {job.period}
                  </span>
                  <p className="mt-1 text-sm text-mist-400">{job.company}</p>
                </div>

                <div className="card card-hover p-5 sm:p-7 md:ml-8">
                  <h3 className="text-lg font-semibold text-mist-100 sm:text-xl">{job.role}</h3>
                  <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[14px] leading-relaxed text-mist-300 sm:text-[15px]">
                        <span className="mt-2.5 h-1 w-3 flex-shrink-0 rounded-full bg-signal-gradient" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
