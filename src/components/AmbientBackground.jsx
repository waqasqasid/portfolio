// Fixed positions so particles don't jump between renders.
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  size: 3 + ((i * 7) % 5),
  duration: 14 + ((i * 5) % 12),
  delay: -((i * 3.7) % 20),
}))

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-ink-950" />

      {/* Slow-moving aurora wash */}
      <div
        className="absolute -inset-[20%] animate-aurora"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 30% 10%, rgb(var(--signal-blue) / 0.22), transparent 70%), radial-gradient(ellipse 40% 35% at 85% 20%, rgb(var(--signal-cyan) / 0.18), transparent 70%), radial-gradient(ellipse 45% 40% at 60% 90%, rgb(var(--signal-violet) / 0.12), transparent 70%)',
        }}
      />

      {/* Grid, faded toward the edges */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(var(--signal-blue) / 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--signal-blue) / 0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%)',
        }}
      />

      <div className="absolute left-[-8%] top-[8%] h-[280px] w-[280px] animate-blob sm:h-[460px] sm:w-[460px] rounded-full bg-signal-blue/[0.16] blur-[120px]" />
      <div className="absolute right-[-10%] top-[40%] h-[260px] w-[260px] animate-blob sm:h-[420px] sm:w-[420px] rounded-full bg-signal-cyan/[0.14] blur-[120px] [animation-delay:4s]" />
      <div className="absolute bottom-[-10%] left-[20%] h-[260px] w-[260px] animate-blob sm:h-[420px] sm:w-[420px] rounded-full bg-signal-violet/[0.12] blur-[120px] [animation-delay:9s]" />

      {/* Rising particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-[-20px] animate-rise rounded-full bg-signal-blue/40 shadow-[0_0_12px_rgb(var(--signal-cyan)/0.8)]"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Film grain for depth */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
