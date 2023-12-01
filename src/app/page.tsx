import HeroSection from './components/Section/HeroSection'
import Contact from './contact/page'

import { HOME_DATA } from './constants'
import InfoSection from './components/Section/InfoSection'

export default function Home() {
  return (
    <>
      <HeroSection
        title={HOME_DATA.hero.title}
        description={HOME_DATA.hero.description}
      />
      <InfoSection content={HOME_DATA.infoSection} />
      <Contact />
    </>
  )
}
