import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="font-mono text-signal-cyan text-lg md:text-xl flex items-center gap-2">
            <span>booting devops@waqas:~$</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            >
              _
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
