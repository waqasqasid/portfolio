import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { PROFILE } from '../constants/data'

const initialForm = { name: '', email: '', message: '' }

export default function Contact({ onToast }) {
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      onToast({ type: 'error', message: 'Please fill in every field.' })
      return
    }
    setSubmitting(true)
    // No backend is wired up yet — this opens a pre-filled email as the delivery method.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
    onToast({ type: 'success', message: 'Opening your email client…' })
    setForm(initialForm)
    setSubmitting(false)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="~/contact"
          title="Let's talk infrastructure"
          description="Open to DevOps, Cloud, and Linux administration roles — reach out and I'll get back to you."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {[
              { icon: Mail, label: PROFILE.email, href: `mailto:${PROFILE.email}` },
              { icon: Phone, label: PROFILE.phone, href: `tel:${PROFILE.phone}` },
              { icon: MapPin, label: PROFILE.location, href: null },
            ].map((item) => (
              <div key={item.label} className="glass flex items-center gap-4 rounded-xl p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-signal-blue/10 text-signal-cyan">
                  <item.icon className="h-4 w-4" />
                </span>
                {item.href ? (
                  <a href={item.href} className="font-mono text-sm text-mist-200 hover:text-signal-cyan">
                    {item.label}
                  </a>
                ) : (
                  <span className="font-mono text-sm text-mist-200">{item.label}</span>
                )}
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 glass-hover text-mist-100"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 glass-hover text-mist-100"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass space-y-5 rounded-2xl p-8"
          >
            <div>
              <label className="mb-2 block font-mono text-xs text-mist-400">name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-mist-100 placeholder:text-mist-400/60 focus:border-signal-cyan/60 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="mb-2 block font-mono text-xs text-mist-400">email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-mist-100 placeholder:text-mist-400/60 focus:border-signal-cyan/60 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="mb-2 block font-mono text-xs text-mist-400">message</label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role or project…"
                className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-mist-100 placeholder:text-mist-400/60 focus:border-signal-cyan/60 outline-none transition-colors"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal-gradient px-6 py-3 font-medium text-ink-950 shadow-glow-sm disabled:opacity-60"
            >
              <Send className="h-4 w-4" /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
