import HeroSection from '../components/Section/HeroSection'
import ImageSection from '../components/Section/ImageSection'
import Timeline from '../components/Section/Timeline'
import { ABOUT_DATA } from '../constants'

const About = () => {
  return (
    <div>
      <HeroSection
        title={ABOUT_DATA.hero.title}
        content={ABOUT_DATA.hero.content}
      />
      <ImageSection images={ABOUT_DATA.imageSection.images} />
      <Timeline />
    </div>
  )
}

export default About
