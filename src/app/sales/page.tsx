import HeroSection from '../components/Section/HeroSection'

import { SALES_DATA } from '../constants'

const Sales = () => {
  return (
    <div>
      <HeroSection
        title={SALES_DATA.hero.title}
        content={SALES_DATA.hero.content}
      />
    </div>
  )
}

export default Sales
