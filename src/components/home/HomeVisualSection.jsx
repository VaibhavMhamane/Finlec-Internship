import { motion } from 'framer-motion'
import { ASSET_VERSION, HERO_SECTION_IMAGE } from '../../data/siteData'

export default function HomeVisualSection() {
  return (
    <section className="mx-auto max-w-7xl px-10 py-20 md:px-14 lg:px-20">
      <motion.figure
        className="overflow-hidden rounded-3xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <img
          src={`${HERO_SECTION_IMAGE}?v=${ASSET_VERSION}`}
          alt="Hero section visual"
          className="h-auto w-full rounded-3xl object-cover"
          loading="lazy"
          draggable={false}
        />
      </motion.figure>
    </section>
  )
}
