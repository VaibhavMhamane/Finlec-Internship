import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const CLIENTS = [
  'InsuranceMajha',
  'IT Roots',
  'A & I Vendor',
  'Mechnnovation Technologies',
  'Spyra Exim',
]

const MARQUEE_ITEMS = [...CLIENTS, ...CLIENTS, ...CLIENTS]

export default function ClientMarqueeStrip() {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      aria-label="Trusted by businesses"
      className="mx-auto max-w-7xl px-6 py-10"
    >
      {/* divider + label */}
      <div className="mb-5 flex items-center gap-4">
        <div className="h-px flex-1 bg-[var(--border)]" />
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--muted)] opacity-60">
          Trusted by businesses
        </p>
        <div className="h-px flex-1 bg-[var(--border)]" />
      </div>

      {/* marquee track */}
      <div className="relative w-full overflow-hidden py-2">
        {/* left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent" />
        {/* right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent" />

        <div
          className="flex w-max gap-5"
          style={
            shouldReduceMotion
              ? undefined
              : { animation: 'clientMarquee 28s linear infinite' }
          }
        >
          {MARQUEE_ITEMS.map((name, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-2 text-[13px] font-semibold text-[var(--muted)] shadow-sm transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent-text)]"
            >
              <span
                className="inline-block size-1.5 shrink-0 rounded-full"
                style={{ background: 'var(--accent)' }}
              />
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes clientMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </motion.section>
  )
}





























/* Project completed successfully by Vaibhav Mhamane on 18/02/2026*/
