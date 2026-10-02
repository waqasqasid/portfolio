import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Github, Linkedin, Copy, Check } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { PROFILE } from '../constants/data'

const initialForm = { name: '', email: '', message: '' }

export default function Contact({ onToast }) {
  const [form, setForm] = useState(initialForm)
  const [copied, setCopied] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      onToast({ type: 'error', message: 'Please fill in every field.' })
      return
    }
    // No backend is wired up yet — this opens a pre-filled email as the delivery method.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
    onToast({ type: 'success', message: 'Opening your email client…' })
    setForm(initialForm)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopied(true)
      onToast({ type: 'success', message: 'Email copied to clipboard' })
      setTimeout(() => setCopied(false), 2000)
    } catch {
      onToast({ type: 'error', message: 'Could not copy — please select it manually.' })
    }
  }

  const contacts = [
    { icon: Phone, label: 'Phone', value: PROFILE.phoneDisplay, href: `tel:${PROFILE.phone}` },
    { icon: MapPin, label: 'Location', value: PROFILE.location, href: null },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-x">
        <SectionHeading
          index="05"
          eyebrow="contact"
          title="Let's talk infrastructure"
          description="Open to DevOps, Cloud, and Linux administration roles — reach out and I'll get back to you."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="card gradient-ring grid grid-cols-1 overflow-hidden lg:grid-cols-[0.9fr_1.1fr]"
        >
          {/* Info panel */}
          <div className="relative flex flex-col justify-between gap-8 border-b border-white/[0.07] bg-gradient-to-br from-signal-blue/[0.12] via-transparent to-transparent p-6 sm:p-8 md:gap-10 md:p-10 lg:border-b-0 lg:border-r">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-mist-400">Email me at</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="break-all font-display text-lg font-semibold sm:text-xl text-mist-100 transition-colors hover:text-signal-cyan md:text-2xl"
                >
                  {PROFILE.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-mist-400 transition-colors hover:border-signal-cyan/40 hover:text-signal-cyan"
                >
                  {copied ? <Check className="h-4 w-4 text-signal-mint" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <ul className="mt-8 space-y-5 md:mt-10">
                {contacts.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-signal-cyan">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-mist-500">{label}</p>
                      {href ? (
                        <a href={href} className="text-mist-200 transition-colors hover:text-signal-cyan">
                          {value}
                        </a>
                      ) : (
                        <p className="text-mist-200">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn">
                <Github className="h-4 w-4" />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="icon-btn">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8 md:p-10" noValidate>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block font-mono text-xs text-mist-400">
                  name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block font-mono text-xs text-mist-400">
                  email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="field"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block font-mono text-xs text-mist-400">
                message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role or project…"
                className="field resize-none"
              />
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-primary w-full py-3.5"
            >
              <Send className="h-4 w-4" /> Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
