import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, TerminalSquare } from 'lucide-react'
import { NAV_LINKS, PROFILE } from '../constants/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 lg:px-20">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#hero')
          }}
          className="flex items-center gap-2 font-mono text-mist-100 font-semibold"
        >
          <TerminalSquare className="h-5 w-5 text-signal-cyan" />
          <span>
            waqas<span className="text-signal-cyan">.sh</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-mist-400">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="group relative py-1 hover:text-mist-100 transition-colors"
              >
                <span className="text-signal-cyan">~/</span>
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-signal-gradient transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${PROFILE.email}`}
          className="hidden md:inline-flex items-center rounded-full border border-signal-blue/40 px-4 py-2 font-mono text-xs text-signal-cyan hover:bg-signal-blue/10 hover:shadow-glow-sm transition-all"
        >
          say_hello()
        </a>

        <button
          className="md:hidden text-mist-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass mt-4 mx-6 rounded-2xl"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-white/5 last:border-none">
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-6 py-4 font-mono text-sm text-mist-300 hover:text-signal-cyan"
                >
                  ~/{link.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
