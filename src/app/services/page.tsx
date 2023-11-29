import HeroSection from '../components/HeroSection'
import { SERVICES_DATA } from '../constants'

const Services = () => {
  return (
    <div>
      <HeroSection
        title={SERVICES_DATA.hero.title}
        description={SERVICES_DATA.hero.description}
      />
    </div>
  )
}

export default Services
