import HalfImageSection from '../components/Section/HalfImageSection'
import InfoSection from '../components/Section/InfoSection'
import { SERVICES_DATA } from '../constants'

const Services = () => {
  return (
    <>
      <InfoSection
        title={SERVICES_DATA.hero.title}
        content={SERVICES_DATA.hero.content}
      />
      <HalfImageSection />
      <HalfImageSection />
    </>
  )
}

export default Services
