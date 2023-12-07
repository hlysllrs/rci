import HalfImageSection from '../components/Section/HalfImageSection'
import HeroSection from '../components/Section/HeroSection'
import { SERVICES_DATA } from '../constants'

const Services = () => {
  return (
    <>
      <HeroSection
        title={SERVICES_DATA.hero.title}
        content={SERVICES_DATA.hero.content}
      />
      <HalfImageSection />
      <HalfImageSection />
    </>
  )
}

export default Services
