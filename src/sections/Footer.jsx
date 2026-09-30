import { Github, Linkedin, Mail, SquareTerminal } from 'lucide-react'
import { NAV_LINKS, PROFILE } from '../constants/data'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="container-x flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 font-mono text-sm font-semibold text-mist-100">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-signal-gradient">
              <SquareTerminal className="h-3.5 w-3.5 text-ink-950" />
            </span>
            waqas<span className="-ml-2 text-signal-cyan">.sh</span>
          </div>
          <p className="mt-3 text-sm text-mist-500">
            © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.role}
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-mist-400">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-signal-cyan">
                ~/{link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn h-9 w-9">
            <Github className="h-4 w-4" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn h-9 w-9">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="icon-btn h-9 w-9">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
