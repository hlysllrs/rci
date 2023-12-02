import HeroSection from '../components/Section/HeroSection'
import { SERVICES_DATA } from '../constants'

const Services = () => {
  return (
    <>
      <HeroSection
        title={SERVICES_DATA.hero.title}
        content={SERVICES_DATA.hero.content}
      />
    </>
  )
}

export default Services
