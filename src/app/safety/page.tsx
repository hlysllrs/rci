import HeroSection from '../components/Section/HeroSection'

import { SAFETY_DATA } from '../constants'

const Safety = () => {
  return (
    <div>
      <HeroSection
        title={SAFETY_DATA.hero.title}
        description={SAFETY_DATA.hero.description}
      />
    </div>
  )
}

export default Safety
