import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Terminal, Container, Cloud } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { PROFILE, EDUCATION } from '../constants/data'

const FOCUS = [
  { icon: Terminal, label: 'Linux administration' },
  { icon: Container, label: 'Containerization' },
  { icon: Cloud, label: 'AWS infrastructure' },
]

export default function About() {
  return (
    <section id="about" className="pb-16 pt-14 sm:pb-24 sm:pt-20 md:pb-32 md:pt-28">
      <div className="container-x">
        <SectionHeading
          index="01"
          eyebrow="about"
          title="From diagnostics to deployments"
          description="A short background on how I got here, and what I'm building toward."
        />

        <div className="grid grid-cols-1 gap-5 sm:gap-8 lg:grid-cols-[1.25fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="card p-6 sm:p-8 md:p-10"
          >
            <p className="text-base leading-relaxed text-mist-300 sm:text-lg">
              I started out with a background in DevOps engineering, spending One-Year
              doing hands-on diagnostics and system troubleshooting — work that trained me to
              think in root causes, not symptoms. That instinct carried directly into DevOps:
              I care about <span className="font-medium text-mist-100">why</span> a system fails,
              not just restarting it.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-mist-400 sm:text-base">
              Since then I&apos;ve been deliberately building toward infrastructure and cloud work —
              administering Linux systems day to day, containerizing applications with Docker,
              and provisioning AWS infrastructure (EC2, ECS, ECR, VPC, S3, Auto Scaling and ELB) with
              proper network security in place. I&apos;m currently completing a Bachelor&apos;s in
              Information Technology while continuing to build hands-on lab experience in CI/CD and
              automation.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.07] pt-6 sm:mt-8 sm:gap-2.5 sm:pt-8">
              {FOCUS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[13px] text-mist-200 sm:px-3.5 sm:text-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-signal-cyan" />
                  {label}
                </span>
              ))}
              <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-xs text-mist-400">
                <MapPin className="h-3.5 w-3.5 text-signal-cyan" />
                {PROFILE.location}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-6 sm:p-8"
          >
            <h3 className="flex items-center gap-2 font-mono text-sm text-signal-cyan">
              <GraduationCap className="h-4 w-4" /> education.log
            </h3>

            <ol className="relative mt-6 space-y-7 border-l border-white/10 pl-6">
              {EDUCATION.map((ed, i) => (
                <motion.li
                  key={ed.degree}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="relative"
                >
                  <span
                    className={`absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-ink-900 ${
                      i === 0 ? 'bg-signal-cyan shadow-glow-sm' : 'bg-mist-500'
                    }`}
                  />
                  <p className="font-mono text-[11px] uppercase tracking-wider text-mist-500">
                    {ed.period}
                  </p>
                  <p className="mt-1.5 font-medium leading-snug text-mist-100">{ed.degree}</p>
                  <p className="mt-1 text-sm text-mist-400">{ed.institution}</p>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
