import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../../data/siteData'
import SectionHeader from '../ui/SectionHeader'

const AVATARS = [
  '/assets/img/img1.jpeg',
  '/assets/img/img2.jpeg',
  '/assets/img/img3.jpeg',
]

const AVATAR_POS = ['center 10%', 'center 5%', 'center 10%']

function TestimonialCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -3, transition: { duration: 0.1, ease: [0.22, 1, 0.36, 1] } }}
      className="card-shadow-soft card-hover-fast card-no-accent relative overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-5 hover:shadow-[0_18px_36px_rgba(2,28,16,0.07)]"
    >
      <div className="absolute right-4 top-3 text-5xl font-serif leading-none text-[var(--accent)] opacity-[0.15]">"</div>

      {/* ── avatar + name row ── */}
      <div className="flex items-center gap-3">
        <img
          src={AVATARS[index]}
          alt={item.company}
          style={{ objectPosition: AVATAR_POS[index] }}
          className="size-14 shrink-0 rounded-full object-cover ring-2 ring-[var(--accent)]/20"
        />
        <div>
          <p className="text-base font-semibold tracking-tight">{item.company}</p>
          <p className="mt-0.5 text-xs font-medium text-[var(--muted)]">{item.clientCompany}</p>
        </div>
      </div>

      {/* ── stars ── */}
      <div className="mt-4 flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
        {Array.from({ length: item.rating }).map((_, starIndex) => (
          <Star key={starIndex} className="size-3 fill-[var(--accent)] text-[var(--accent)]" />
        ))}
      </div>

      {/* ── quote ── */}
      <p className="mt-3 min-h-24 text-sm leading-7 text-[var(--muted)]">"{item.quote}"</p>
    </motion.article>
  )
}

export default function HomeTestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-[4.5rem]" id="testimonials">
      <SectionHeader
        badge="Testimonials"
        title="Businesses use this to scale WhatsApp communication"
        subtitle="Real business use cases focused on lead response, customer engagement, and conversion growth."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {TESTIMONIALS.map((item, index) => (
          <TestimonialCard key={`${item.company}-${item.author}`} item={item} index={index} />
        ))}
      </div>
    </section>
  )
} 