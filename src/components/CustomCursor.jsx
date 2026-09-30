import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const on = isFinePointer && !reduceMotion
    setEnabled(on)
    if (!on) return

    const move = (e) => {
      x.set(e.clientX - 16)
      y.set(e.clientY - 16)
      setIsPointer(e.target.closest('a, button, input, textarea, label') !== null)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90]"
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    >
      <motion.div
        animate={{ scale: isPointer ? 1.5 : 1, opacity: isPointer ? 1 : 0.6 }}
        transition={{ duration: 0.2 }}
        className="h-8 w-8 rounded-full border border-signal-cyan/60 bg-signal-cyan/[0.06]"
      />
    </motion.div>
  )
}
