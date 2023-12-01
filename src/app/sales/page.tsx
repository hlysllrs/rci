import HeroSection from '../components/Section/HeroSection'

import { SALES_DATA } from '../constants'

const Sales = () => {
  return (
    <div>
      <HeroSection
        title={SALES_DATA.hero.title}
        description={SALES_DATA.hero.description}
      />
    </div>
  )
}

export default Sales
