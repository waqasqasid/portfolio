import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="w-64 font-mono text-sm">
            <div className="flex items-center gap-2 text-signal-cyan">
              <span>booting waqas@devops</span>
              <span className="animate-blink">_</span>
            </div>
            <div className="mt-4 h-px w-full overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-signal-gradient"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
