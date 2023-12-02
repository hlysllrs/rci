import HeroSection from '../components/Section/HeroSection'

import { EMPLOYMENT_DATA } from '../constants'

const Employment = () => {
  return (
    <div>
      <HeroSection
        title={EMPLOYMENT_DATA.hero.title}
        content={EMPLOYMENT_DATA.hero.content}
      />
    </div>
  )
}

export default Employment
