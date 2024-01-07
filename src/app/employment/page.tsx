import InfoSection from '../components/Section/InfoSection'

import { EMPLOYMENT_DATA } from '../constants'

const Employment = () => {
  return (
    <div>
      <InfoSection
        title={EMPLOYMENT_DATA.hero.title}
        content={EMPLOYMENT_DATA.hero.content}
      />
    </div>
  )
}

export default Employment
