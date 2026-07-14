import { motion } from 'framer-motion'
import { MapPin, GraduationCap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { PROFILE, EDUCATION } from '../constants/data'

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="~/about"
          title="From diagnostics to deployments"
          description="A short background on how I got here, and what I'm building toward."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <p className="leading-relaxed text-mist-300">
              I started out with a background in mechanical engineering, spending six Months
              doing hands-on diagnostics and system troubleshooting — work that trained me to
              think in root causes, not symptoms. That instinct carried directly into DevOps:
              I care about <span className="text-mist-100">why</span> a system fails, not just
              restarting it.
            </p>
            <p className="mt-4 leading-relaxed text-mist-300">
              Since then I've been deliberately building toward infrastructure and cloud work —
              administering Linux systems day to day, containerizing applications with Docker,
              and provisioning AWS infrastructure (EC2, ECS, ECR) with proper network security in
              place. I'm currently completing a Bachelor's in Information Technology while
              continuing to build hands-on lab experience in CI/CD and automation.
            </p>

            <div className="mt-6 flex items-center gap-2 font-mono text-sm text-mist-400">
              <MapPin className="h-4 w-4 text-signal-cyan" />
              {PROFILE.location}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="flex items-center gap-2 font-mono text-sm text-signal-cyan">
              <GraduationCap className="h-4 w-4" /> education.log
            </h3>
            {EDUCATION.map((ed, i) => (
              <motion.div
                key={ed.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass glass-hover rounded-xl p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-medium text-mist-100">{ed.degree}</p>
                  <span className="whitespace-nowrap font-mono text-xs text-mist-400">
                    {ed.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-mist-400">{ed.institution}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
