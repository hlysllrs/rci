import InfoSection from '../components/Section/InfoSection'

import { SAFETY_DATA } from '../constants'

const Safety = () => {
  return (
    <div>
      <InfoSection
        title={SAFETY_DATA.hero.title}
        content={SAFETY_DATA.hero.content}
      />
    </div>
  )
}

export default Safety
