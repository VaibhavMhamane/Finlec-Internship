import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock3 } from 'lucide-react'
import { useMemo, useState } from 'react'
import GlowButton from '../components/ui/GlowButton'
import SectionHeader from '../components/ui/SectionHeader'
import { PRICING_PLANS } from '../data/siteData'
import { createMailtoHref, submitFormToInbox } from '../utils/formSubmission'

const INITIAL_INQUIRY_FORM = {
  name: '',
  company: '',
  phone: '',
  address: '',
  message: '',
}

function PricingCard({ plan, index, goTo, billingCycle }) {
  const isComingSoon = plan.status === 'coming-soon'
  const hasOptions = Array.isArray(plan.options)
  const activeOption = hasOptions
    ? plan.options.find((option) => option.label.toLowerCase() === billingCycle) ?? plan.options[0]
    : null

  return (
    <motion.article
      className={`card-shadow-soft card-hover-fast card-no-accent relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 ${
        isComingSoon ? 'opacity-95' : ''
      }`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -4, transition: { duration: 0.12, ease: [0.22, 1, 0.36, 1] } }}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xl font-bold tracking-tight">{plan.name}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{plan.highlight}</p>
          </div>
          <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            {isComingSoon ? 'Coming Soon' : 'Available'}
          </span>
        </div>

        <div className="mt-8">
          {hasOptions && activeOption ? (
            <>
              <p className="text-sm font-semibold text-[var(--accent)]">{activeOption.label} Billing</p>
              <p className="mt-4 text-5xl font-black leading-none tracking-tight">{activeOption.price}</p>
              <p className="mt-3 text-sm text-[var(--muted)]">{activeOption.cadence}</p>
            </>
          ) : (
            <>
              <p className={`font-black leading-none tracking-tight ${isComingSoon ? 'text-4xl' : 'text-5xl'}`}>
                {plan.price}
              </p>
              <p className="mt-3 text-sm text-[var(--muted)]">{plan.cadence}</p>
            </>
          )}
        </div>

        <div className="mt-8 space-y-3">
          {plan.points.map((point) => (
            <div key={point} className="flex items-start gap-3 text-sm text-[var(--muted)]">
              {isComingSoon ? (
                <Clock3 className="mt-0.5 size-4 shrink-0 text-[var(--accent)]" />
              ) : (
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent)]" />
              )}
              <span>{point}</span>
            </div>
          ))}
        </div>

        {!isComingSoon && (
          <div className="mt-8">
            <GlowButton
              href="/contact"
              onClick={(event) => {
                event.preventDefault()
                goTo('/contact')
              }}
              variant="primary"
            >
              {`Get ${activeOption?.label ?? 'Subscription'} Plan`} <ArrowRight className="size-4" />
            </GlowButton>
          </div>
        )}
      </div>
    </motion.article>
  )
}

function BillingToggle({ billingCycle, setBillingCycle }) {
  const isYearly = billingCycle === 'yearly'

  return (
    <div className="mb-10 flex justify-center">
      {/* Toggle pill */}
      <div
        className="relative inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-1.5"
        style={{ boxShadow: '0 8px 24px rgba(2,28,16,0.05)' }}
      >
        {/* Green sliding active pill */}
        <span
          className="absolute top-1.5 bottom-1.5 rounded-full"
          style={{
            transitionProperty: 'left, right',
            transitionDuration: '320ms',
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            left: isYearly ? '50%' : '6px',
            right: isYearly ? '6px' : '50%',
            background: 'linear-gradient(135deg, var(--accent) 0%, #22c55e 100%)',
            boxShadow: '0 0 14px rgba(34,197,94,0.35)',
          }}
        />

        {/* Monthly */}
        <button
          type="button"
          onClick={() => setBillingCycle('monthly')}
          className="relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold"
          style={{
            color: !isYearly ? '#fff' : 'var(--text)',
            transition: 'color 0.25s',
          }}
        >
          Monthly
        </button>

        {/* Yearly */}
        <button
          type="button"
          onClick={() => setBillingCycle('yearly')}
          className="relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold"
          style={{
            color: isYearly ? '#fff' : 'var(--text)',
            transition: 'color 0.25s',
          }}
        >
          Yearly
        </button>
      </div>
    </div>
  )
}

export default function PricingPage({ goTo }) {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [form, setForm] = useState(INITIAL_INQUIRY_FORM)
  const [submitState, setSubmitState] = useState('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const mailtoHref = useMemo(() => {
    return createMailtoHref(`White-label inquiry from ${form.company || form.name || 'AutoSensy website'}`, [
      `Name: ${form.name || '-'}`,
      `Company: ${form.company || '-'}`,
      `Phone: ${form.phone || '-'}`,
      `Address: ${form.address || '-'}`,
      '',
      'Requirement:',
      form.message || '-',
    ])
  }, [form])

  const handleChange = (event) => {
    const { name, value } = event.target
    setSubmitState('idle')
    setSubmitMessage('')
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setSubmitState('submitting')
    setSubmitMessage('')

    try {
      await submitFormToInbox({
        formName: 'White-Label Inquiry',
        subject: `White-label inquiry from ${form.company || form.name || 'AutoSensy website'}`,
        fields: {
          name: form.name,
          company: form.company,
          phone: form.phone,
          address: form.address,
          requirement: form.message,
          source_page: 'Pricing Page',
        },
      })

      setSubmitState('success')
      setSubmitMessage('Your inquiry has been sent to autosensy@gmail.com.')
      setForm(INITIAL_INQUIRY_FORM)
    } catch (error) {
      setSubmitState('error')
      setSubmitMessage(error.message || 'Automatic email delivery failed. Use the direct email link below.')
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader
        badge="Pricing"
        title="Simple pricing for monthly and yearly plans"
        subtitle="Choose a billing plan that fits your business requirements with clear monthly and yearly pricing. A lifetime plan is also being prepared and will be announced separately."
      />

      <BillingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />

      <div className="grid gap-6 lg:grid-cols-2">
        {PRICING_PLANS.map((plan, index) => (
          <PricingCard key={plan.name} plan={plan} index={index} goTo={goTo} billingCycle={billingCycle} />
        ))}
      </div>

      <motion.div
        className="card-shadow-soft main-card-accent mt-14 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="inline-flex rounded-full bg-[var(--accent-soft)] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              White-Label Inquiry
            </p>
            <h3 className="mt-4 text-2xl font-black tracking-tight md:text-3xl">
              Discuss your white-label solution requirements
            </h3>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--muted)]">
              Share your business details and white-label requirements. We will review your inquiry and connect with you for the next steps.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Your name</span>
                <input
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm"
                  placeholder="Enter your name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium">Company</span>
                <input
                  required
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm"
                  placeholder="Your company name"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium">Phone number</span>
              <input
                required
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm"
                placeholder="Enter your phone number"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium">Address</span>
              <input
                required
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm"
                placeholder="Enter your address"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium">Requirement details</span>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm"
                placeholder="Tell us what you need for your white-label setup."
              />
            </label>

            <div className="flex flex-wrap gap-3 pt-2">
              <GlowButton type="submit" disabled={submitState === 'submitting'}>
                {submitState === 'submitting' ? 'Sending...' : 'Send White-Label Inquiry'}
              </GlowButton>
              <GlowButton
                href="/contact"
                onClick={(event) => {
                  event.preventDefault()
                  goTo('/contact')
                }}
                variant="secondary"
              >
                Contact Us
              </GlowButton>
            </div>

            {submitState === 'success' && <p className="text-sm text-[var(--accent)]">{submitMessage}</p>}

            {submitState === 'error' && (
              <p className="text-sm text-[var(--muted)]">
                {submitMessage}{' '}
                <a className="font-semibold text-[var(--accent)]" href={mailtoHref}>
                  this direct email link
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  )
} 
