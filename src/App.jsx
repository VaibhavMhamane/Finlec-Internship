import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  MessageCircle,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const features = [
  {
    title: 'Conversational Growth Engine',
    desc: 'Automate lead capture, instant replies, and contextual routing from ads to WhatsApp.',
    icon: MessageCircle,
  },
  {
    title: 'AI Sales Co-Pilot',
    desc: 'Use AI to qualify prospects, recommend products, and schedule follow-ups on autopilot.',
    icon: Bot,
  },
  {
    title: 'Campaign Intelligence',
    desc: 'Track CTR, conversion lifts, and funnel performance with beautiful real-time analytics.',
    icon: BarChart3,
  },
]

const channels = ['Meta Ads', 'Google Ads', 'Instagram', 'Messenger', 'RCS', 'Calls']

export default function App() {
  return (
    <div className="aurora-bg animate-gradientShift min-h-screen text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/45 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span className="rounded-lg bg-emerald-400/20 p-2 text-emerald-300">
              <Sparkles className="size-5" />
            </span>
            SensyFlow
          </div>
          <button className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300">
            Book Demo
          </button>
        </nav>
      </header>

      <main>
        <section className="grid-overlay relative overflow-hidden px-6 pb-20 pt-16 md:pt-24">
          <div className="absolute left-1/2 top-28 -z-0 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/30 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <motion.div initial="hidden" animate="show" className="space-y-8">
              <motion.p custom={1} variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200">
                <Zap className="size-4" /> AI-Powered WhatsApp Engagement Platform
              </motion.p>
              <motion.h1 custom={2} variants={fadeUp} className="text-4xl font-extrabold leading-tight md:text-6xl">
                Clone-grade SaaS experience with <span className="text-emerald-300">premium motion</span> and conversion-first design.
              </motion.h1>
              <motion.p custom={3} variants={fadeUp} className="max-w-xl text-lg text-slate-300">
                Inspired by modern conversational marketing brands, this landing page combines strong hero visuals, funnel storytelling, and advanced animation patterns.
              </motion.p>
              <motion.div custom={4} variants={fadeUp} className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-emerald-300">
                  Start Free Trial <ArrowRight className="size-4" />
                </button>
                <button className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10">
                  Watch Demo
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-400/30 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/15 bg-slate-900/70 p-5 shadow-glow backdrop-blur-xl">
                <img src="/assets/dashboard-mock.svg" alt="Platform dashboard" className="w-full rounded-2xl border border-white/10" />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-6 -left-10 hidden w-56 rounded-2xl border border-white/15 bg-white/90 p-3 text-slate-800 shadow-2xl md:block"
                >
                  <img src="/assets/chat-card.svg" alt="Chat widget" className="rounded-xl" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-3">
          {features.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <item.icon className="mb-4 size-10 rounded-xl bg-emerald-300/20 p-2 text-emerald-200" />
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-slate-300">{item.desc}</p>
            </motion.article>
          ))}
        </section>

        <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Omnichannel orchestration around WhatsApp</h2>
            <p className="mb-8 text-slate-300">A ring-based animation inspired by top conversational commerce brands, redesigned with a futuristic dark neon interface.</p>
            <ul className="space-y-3">
              {['One-click campaign journeys', 'Auto-retries and smart segmentation', 'Live agent + AI handoff'].map((text) => (
                <li key={text} className="flex items-center gap-2 text-slate-200">
                  <CheckCircle2 className="size-5 text-emerald-300" /> {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto h-[420px] w-[420px]">
            <div className="absolute inset-10 rounded-full bg-emerald-300/25 blur-2xl animate-pulseSlow" />
            <div className="absolute inset-0 rounded-full border border-emerald-200/30" />
            <div className="absolute inset-16 rounded-full border border-emerald-200/30" />
            <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-300/20 backdrop-blur">
              <Smartphone className="size-16 text-emerald-200" />
            </div>
            {channels.map((channel, i) => (
              <div
                key={channel}
                className="absolute left-1/2 top-1/2 h-0 w-0"
                style={{ transform: `rotate(${i * 60}deg)` }}
              >
                <div className="animate-orbit rounded-full border border-white/15 bg-slate-900/90 px-3 py-2 text-sm text-white shadow-xl">
                  {channel}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
