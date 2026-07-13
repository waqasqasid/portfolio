import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    setEnabled(isFinePointer)
    if (!isFinePointer) return

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      const target = e.target
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
          target.closest('a, button') !== null
      )
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[90] mix-blend-screen"
      animate={{ x: pos.x - 12, y: pos.y - 12, scale: isPointer ? 1.8 : 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.4 }}
    >
      <div className="h-6 w-6 rounded-full bg-signal-cyan/60 blur-[2px]" />
    </motion.div>
  )
}
