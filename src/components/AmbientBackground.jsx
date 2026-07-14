import { useMemo } from 'react'
import { motion } from 'framer-motion'

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 10 + Math.random() * 12,
        size: 1 + Math.random() * 2,
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-signal-cyan/40"
          style={{ left: `${p.left}%`, width: p.size, height: p.size, bottom: -10 }}
          animate={{ y: ['0vh', '-110vh'], opacity: [0, 0.8, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-ink-950" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Blobs */}
      <div className="absolute top-[-10%] left-[-5%] h-[420px] w-[420px] rounded-full bg-signal-blue/20 blur-[110px] animate-blob" />
      <div className="absolute top-[30%] right-[-10%] h-[380px] w-[380px] rounded-full bg-signal-cyan/15 blur-[110px] animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-[-10%] left-[20%] h-[360px] w-[360px] rounded-full bg-signal-violet/15 blur-[110px] animate-blob [animation-delay:8s]" />

      <Particles />
    </div>
  )
}
