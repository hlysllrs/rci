import InfoSection from '../components/Section/InfoSection'

import { SALES_DATA } from '../constants'

const Sales = () => {
  return (
    <div>
      <InfoSection
        title={SALES_DATA.hero.title}
        content={SALES_DATA.hero.content}
      />
    </div>
  )
}

export default Sales
