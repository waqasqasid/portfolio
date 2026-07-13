import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, AlertCircle } from 'lucide-react'

export default function Toast({ toast }) {
  return (
    <div className="fixed top-6 right-6 z-[100] flex flex-col gap-3">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            className={`glass flex items-center gap-3 rounded-xl px-5 py-4 shadow-glow-sm ${
              toast.type === 'error' ? 'border-red-400/40' : 'border-signal-cyan/40'
            }`}
          >
            {toast.type === 'error' ? (
              <AlertCircle className="h-5 w-5 text-red-400" />
            ) : (
              <CheckCircle2 className="h-5 w-5 text-signal-cyan" />
            )}
            <span className="font-mono text-sm text-mist-100">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
