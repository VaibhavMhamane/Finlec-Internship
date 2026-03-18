import HomeFeaturesSection from '../components/home/HomeFeaturesSection'
import HomeHeroSection from '../components/home/HomeHeroSection'
import HomeOnboardingSection from '../components/home/HomeOnboardingSection'
import HomeTestimonialsSection from '../components/home/HomeTestimonialsSection'
import HomeVisualSection from '../components/home/HomeVisualSection'
import HomeWhyWhatsAppSection from '../components/home/HomeWhyWhatsAppSection'
import ClientMarqueeStrip from '../components/home/ClientMarqueeStrip'

export default function HomePage({ goTo }) {
  return (
    <>
      <HomeHeroSection goTo={goTo} />
      <HomeWhyWhatsAppSection />
      <ClientMarqueeStrip />
      <HomeFeaturesSection goTo={goTo} />
      <HomeVisualSection />
      <HomeTestimonialsSection />
      <HomeOnboardingSection goTo={goTo} />
    </>
  )
}