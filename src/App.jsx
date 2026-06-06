import HeaderNavigation from './components/layout/HeaderNavigation'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import ExperienceSection from './components/sections/ExperienceSection'
import FAQSection from './components/sections/FAQSection'
import HeroSection from './components/sections/HeroSection'
import PricingSection from './components/sections/PricingSection'

function App() {
  return (
    <>
      <HeaderNavigation />
        <main className="h-auto w-full overflow-y-visible scroll-smooth md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory md:scroll-pt-24">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App
