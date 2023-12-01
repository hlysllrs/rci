import HeroSection from '../components/Section/HeroSection'
import { SERVICES_DATA } from '../constants'

const Services = () => {
  return (
    <>
      <HeroSection
        title={SERVICES_DATA.hero.title}
        description={SERVICES_DATA.hero.description}
      />
    </>
  )
}

export default Services
