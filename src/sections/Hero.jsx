import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react'
import { PROFILE } from '../constants/data'

const COMMANDS = [
  { cmd: 'whoami', out: PROFILE.name },
  { cmd: 'cat role.txt', out: 'DevOps Engineer · Cloud Engineer · Linux Administrator' },
  { cmd: 'echo $LOCATION', out: PROFILE.location },
]

function TerminalLine({ line, showOutput, onDone }) {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    setTyped('')
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setTyped(line.cmd.slice(0, i))
      if (i >= line.cmd.length) {
        clearInterval(interval)
        setTimeout(onDone, 350)
      }
    }, 45)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [line])

  return (
    <div className="font-mono text-sm md:text-base">
      <span className="text-signal-mint">➜</span>{' '}
      <span className="text-signal-cyan">~</span>{' '}
      <span className="text-mist-100">{typed}</span>
      {!showOutput && <span className="animate-blink text-mist-100">▌</span>}
      {showOutput && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-1 pl-5 text-mist-300"
        >
          {line.out}
        </motion.p>
      )}
    </div>
  )
}

export default function Hero() {
  const [step, setStep] = useState(0)
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    setShowOutput(false)
  }, [step])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 md:px-10 lg:px-20 pt-28 pb-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">available for opportunities</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-mist-100">
            Building reliable
            <br />
            <span className="text-gradient">infrastructure</span>,
            <br />
            one deploy at a time.
          </h1>
          <p className="mt-6 max-w-lg text-mist-400 leading-relaxed">{PROFILE.summary}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px -6px rgba(59,130,246,0.7)' }}
              whileTap={{ scale: 0.97 }}
              href={`${import.meta.env.BASE_URL}${PROFILE.resumeFile.replace(/^\//, '')}`}
              download
              className="inline-flex items-center gap-2 rounded-full bg-signal-gradient px-6 py-3 font-medium text-ink-950 shadow-glow-sm"
            >
              <Download className="h-4 w-4" /> Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-mist-100 glass-hover"
            >
              <Github className="h-4 w-4" /> GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-mist-100 glass-hover"
            >
              <Linkedin className="h-4 w-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={`mailto:${PROFILE.email}`}
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-mist-100 glass-hover"
            >
              <Mail className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right: terminal signature element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-signal-blue/10 blur-2xl" />
          <div className="relative glass rounded-2xl overflow-hidden shadow-glow">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-xs text-mist-400">bash — waqas@devops</span>
            </div>
            <div className="min-h-[220px] space-y-4 p-6">
              {COMMANDS.slice(0, step + 1).map((line, idx) => (
                <TerminalLine
                  key={line.cmd}
                  line={line}
                  showOutput={idx < step || showOutput}
                  onDone={() => {
                    setShowOutput(true)
                    setTimeout(() => {
                      if (idx === step && step < COMMANDS.length - 1) {
                        setStep((s) => s + 1)
                      }
                    }, 550)
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mist-400"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  )
}
