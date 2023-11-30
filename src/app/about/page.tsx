import HeroSection from '../components/Section/HeroSection'
import { COMPANY_FORMS_DATA } from '../constants'

const About = () => {
  return (
    <div>
      <HeroSection
        title={COMPANY_FORMS_DATA.hero.title}
        description={COMPANY_FORMS_DATA.hero.description}
      />
    </div>
  )
}

export default About
