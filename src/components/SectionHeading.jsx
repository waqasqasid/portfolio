import { motion } from 'framer-motion'

export default function SectionHeading({ index, eyebrow, title, description, align = 'left' }) {
  const isCenter = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-10 max-w-2xl md:mb-14 ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      <span className="eyebrow">
        {index && <span className="text-mist-500">{index}</span>}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px w-8 origin-left bg-gradient-to-r from-signal-cyan to-transparent"
        />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight tracking-tight text-mist-100 sm:text-3xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-mist-400 sm:text-base md:mt-5 md:text-lg">{description}</p>
      )}
    </motion.div>
  )
}
