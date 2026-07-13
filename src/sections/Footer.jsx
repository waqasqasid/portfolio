import { Github, Linkedin, Mail } from 'lucide-react'
import { PROFILE } from '../constants/data'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10 md:px-10 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-xs text-mist-400">
          © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind & Framer Motion.
        </p>
        <div className="flex gap-4">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-mist-400 hover:text-signal-cyan">
            <Github className="h-4 w-4" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-mist-400 hover:text-signal-cyan">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="text-mist-400 hover:text-signal-cyan">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
