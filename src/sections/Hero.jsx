import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown, MapPin, Cloud, Container, Terminal as TerminalIcon, GitBranch } from 'lucide-react'
import profileImg from '../assets/profile.jpg'
import { PROFILE } from '../constants/data'

const COMMANDS = [
  { cmd: 'whoami', out: PROFILE.name },
  { cmd: 'cat role.txt', out: 'DevOps Engineer · Cloud Engineer · Linux Admin' },
  { cmd: 'ls ~/stack', out: 'linux  docker  aws  ci-cd' },
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
        setTimeout(onDone, 300)
      }
    }, 40)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [line])

  return (
    <div className="font-mono text-[12px] leading-relaxed sm:text-[13px]">
      <span className="text-signal-mint">➜</span>{' '}
      <span className="text-signal-cyan">~</span>{' '}
      <span className="text-mist-100">{typed}</span>
      {!showOutput && <span className="animate-blink text-signal-cyan">▌</span>}
      {showOutput && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="pl-5 text-mist-400"
        >
          {line.out}
        </motion.p>
      )}
    </div>
  )
}

function Terminal() {
  const [step, setStep] = useState(0)
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    setShowOutput(false)
  }, [step])

  return (
    <div className="theme-dark card overflow-hidden bg-ink-900/95 shadow-glow">
      <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[11px] text-mist-500">bash — waqas@devops</span>
      </div>
      <div className="min-h-[168px] space-y-3 p-4 sm:p-5">
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
              }, 500)
            }}
          />
        ))}
      </div>
    </div>
  )
}

const WORDS = ['reliable', 'scalable', 'secure', 'automated']
const LONGEST_WORD = WORDS.reduce((a, b) => (b.length > a.length ? b : a))

function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2400)
    return () => clearInterval(timer)
  }, [])

  return (
    // Invisible longest word reserves the width so the line never collapses between words.
    <span className="relative inline-grid overflow-hidden pb-2 align-bottom">
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {LONGEST_WORD}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient col-start-1 row-start-1"
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const BADGES = [
  { Icon: Cloud, label: 'AWS', className: 'left-0 top-[12%]', delay: 0 },
  { Icon: Container, label: 'Docker', className: 'right-[-4%] top-[30%]', delay: 0.8 },
  { Icon: GitBranch, label: 'CI/CD', className: 'left-[4%] top-[48%]', delay: 1.6 },
  { Icon: TerminalIcon, label: 'Linux', className: 'right-[2%] top-[2%]', delay: 2.4 },
]

function FloatingBadge({ Icon, label, className, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
      transition={{
        opacity: { duration: 0.5, delay: 0.8 + delay * 0.2 },
        scale: { duration: 0.5, delay: 0.8 + delay * 0.2 },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay },
      }}
      className={`absolute z-20 hidden items-center gap-2 rounded-xl border border-signal-blue/25 bg-ink-900/90 px-3 py-2 text-xs font-semibold text-mist-200 shadow-glow-sm backdrop-blur-md sm:flex ${className}`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-signal-gradient text-ink-900">
        <Icon className="h-3.5 w-3.5" />
      </span>
      {label}
    </motion.div>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const resumeHref = `${import.meta.env.BASE_URL}${PROFILE.resumeFile.replace(/^\//, '')}`

  return (
    <section id="hero" className="relative flex overflow-x-clip min-h-[100svh] items-center pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="container-x grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div>
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-signal-mint/25 bg-signal-mint/[0.06] px-3.5 py-1.5 font-mono text-xs text-signal-mint">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-mint opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-mint" />
              </span>
              Available for DevOps &amp; Cloud roles
            </span>
          </motion.div>

          <motion.p {...fadeUp(0.08)} className="mt-6 font-mono text-sm text-mist-400 md:mt-8">
            Hi, I&apos;m <span className="text-mist-100">{PROFILE.name}</span> —
          </motion.p>

          <motion.h1
            {...fadeUp(0.14)}
            className="mt-3 text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-mist-100 sm:text-6xl lg:text-7xl"
          >
            I build <RotatingWord />
            <br />
            infrastructure.
          </motion.h1>

          <motion.p {...fadeUp(0.22)} className="mt-5 max-w-xl text-[15px] leading-relaxed sm:text-base md:mt-7 text-mist-400 md:text-lg">
            {PROFILE.summary}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
            <a href={resumeHref} download className="btn-primary w-full sm:w-auto">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn-ghost flex-1 sm:flex-none">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="icon-btn">
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Right: portrait + terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[340px] sm:max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-signal-blue/15 blur-3xl" />

          {BADGES.map((b) => (
            <FloatingBadge key={b.label} {...b} />
          ))}

          <div className="relative ml-auto w-[82%] overflow-hidden rounded-[2rem] p-[3px] shadow-glow">
            {/* Spinning gradient border */}
            <div className="absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow bg-[conic-gradient(from_0deg,rgb(var(--signal-blue)),rgb(var(--signal-cyan)),transparent_40%,rgb(var(--signal-violet)),rgb(var(--signal-blue)))]" />
            <div className="relative rounded-[1.85rem] bg-ink-900 p-2">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <img
                src={profileImg}
                alt={PROFILE.name}
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/30" />
              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-950/70 px-3 py-1.5 font-mono text-[11px] text-mist-200 backdrop-blur-md">
                <MapPin className="h-3 w-3 text-signal-cyan" />
                {PROFILE.location}
              </div>
            </div>
            </div>
          </div>

          <div className="relative -mt-20 w-[92%] animate-float sm:-mt-28 sm:w-[88%]">
            <Terminal />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mist-500 hover:text-signal-cyan md:flex"
      >
        <ArrowDown className="h-3.5 w-3.5" /> scroll
      </motion.a>
    </section>
  )
}
