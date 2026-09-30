import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, SquareTerminal } from 'lucide-react'
import { NAV_LINKS, PROFILE } from '../constants/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link for whichever section is in the middle of the viewport.
  useEffect(() => {
    const sections = ['#hero', ...NAV_LINKS.map((l) => l.href)]
      .map((href) => document.querySelector(href))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === 'hero' ? '' : `#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'border border-white/[0.08] bg-ink-950/70 shadow-card backdrop-blur-xl'
            : 'border border-transparent'
        }`}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#hero')
          }}
          className="flex items-center gap-2 font-mono text-sm font-semibold text-mist-100"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal-gradient">
            <SquareTerminal className="h-4 w-4 text-ink-950" />
          </span>
          <span>
            waqas<span className="text-signal-cyan">.sh</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 font-mono text-[13px] md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href
            return (
              <li key={link.href} className="relative">
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative z-10 rounded-full px-4 py-2 transition-colors ${
                    isActive ? 'text-mist-100' : 'text-mist-400 hover:text-mist-100'
                  }`}
                >
                  <span className="text-signal-cyan">~/</span>
                  {link.label}
                </button>
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.06]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        <a
          href={`mailto:${PROFILE.email}`}
          className="hidden items-center gap-2 rounded-full bg-white/[0.06] px-4 py-2 font-mono text-xs text-mist-100 ring-1 ring-white/10 transition-all hover:ring-signal-cyan/50 md:inline-flex"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-mint opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-mint" />
          </span>
          say_hello()
        </a>

        <button
          className="text-mist-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="card mx-auto mt-3 max-w-6xl overflow-hidden bg-ink-950/90 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-white/5 last:border-none">
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full px-6 py-4 text-left font-mono text-sm text-mist-300 hover:text-signal-cyan"
                >
                  <span className="text-signal-cyan">~/</span>
                  {link.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
