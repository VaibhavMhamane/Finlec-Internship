import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionHeader({ badge, title, subtitle }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="mb-12 max-w-3xl"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.p
        className="section-badge"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {badge}
      </motion.p>
      <motion.h2
        className="mt-4 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="mt-4 text-base text-[var(--muted)] md:text-lg"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  )
}
