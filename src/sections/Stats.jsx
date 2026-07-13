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
    <span ref={ref} className="text-4xl md:text-5xl font-display font-semibold text-gradient">
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="section-padding !py-16">
      <div className="mx-auto max-w-6xl grid grid-cols-2 gap-6 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-hover rounded-2xl p-6 text-center"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-mist-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
