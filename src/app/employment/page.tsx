import HeroSection from '../components/Section/HeroSection'
import { EMPLOYMENT_DATA } from '../constants'

const Careers = () => {
  return (
    <div>
      <HeroSection
        title={EMPLOYMENT_DATA.hero.title}
        description={EMPLOYMENT_DATA.hero.description}
      />
    </div>
  )
}

export default Careers
