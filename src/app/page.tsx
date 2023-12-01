import Image from 'next/image'
import HeroSection from './components/Section/HeroSection'
import Contact from './contact/page'

import { HOME_DATA } from './constants'

export default function Home() {
  return (
    <>
      <HeroSection
        title={HOME_DATA.hero.title}
        description={HOME_DATA.hero.description}
      />
      <Contact />
    </>
  )
}
