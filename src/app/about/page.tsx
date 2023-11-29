import HeroSection from '../components/HeroSection'
import { ABOUT_DATA } from '../constants'

const About = () => {
  return (
    <div>
      <HeroSection
        title={ABOUT_DATA.hero.title}
        description={ABOUT_DATA.hero.description}
      />
    </div>
  )
}

export default About
