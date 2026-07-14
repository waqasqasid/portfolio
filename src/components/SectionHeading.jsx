import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const isCenter = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-14 max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-mist-100 tracking-tight">
        {title}
      </h2>
      {description && <p className="mt-4 text-mist-400 leading-relaxed">{description}</p>}
    </motion.div>
  )
}
