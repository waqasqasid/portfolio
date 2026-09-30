import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { STATS } from '../constants/data'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-5xl font-semibold tracking-tight text-mist-100 md:text-6xl">
      {display}
      <span className="text-gradient">{suffix}</span>
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="container-x"
      >
        <div className="card grid grid-cols-2 !from-signal-blue/[0.08] !to-ink-900/80 divide-white/[0.07] overflow-hidden md:grid-cols-4 md:divide-x">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 py-8 md:py-10 ${i < 2 ? 'border-b border-white/[0.07] md:border-b-0' : ''} ${
                i % 2 === 0 ? 'border-r border-white/[0.07] md:border-r-0' : ''
              }`}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 font-mono text-[11px] uppercase leading-snug tracking-wider text-mist-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
