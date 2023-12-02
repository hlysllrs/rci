import HeroSection from '../components/Section/HeroSection'

import { SAFETY_DATA } from '../constants'

const Safety = () => {
  return (
    <div>
      <HeroSection
        title={SAFETY_DATA.hero.title}
        content={SAFETY_DATA.hero.content}
      />
    </div>
  )
}

export default Safety
