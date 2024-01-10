import InfoSection from '../components/Section/InfoSection'
import { PageData } from '../constants/types'
import EmploymentHeroImage from 'public/RCI_EMPLOYMENT_1.jpg'
// import { EMPLOYMENT_DATA } from '../constants'

const EMPLOYMENT_DATA: PageData = {
  // HERO INFO SECTION
  info1: {
    title: 'Employment',
    content: {
      text: 'Join our team today!',
    },
    background: {
      bgType: 'Photo',
      imageUrl: 'public/RCI_EMPLOYMENT_1.jpg',
    },
    variant: 'hero',
  },
}

const Employment = () => {
  return (
    <div>
      <InfoSection
        title={EMPLOYMENT_DATA.info1.title}
        content={EMPLOYMENT_DATA.info1.content}
        background={EMPLOYMENT_DATA.info1.background}
        variant={EMPLOYMENT_DATA.info1.variant}
        photo={EmploymentHeroImage}
      />
    </div>
  )
}

export default Employment
