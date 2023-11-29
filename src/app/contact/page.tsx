import ContactForm from '../components/ContactForm'
import HeroSection from '../components/HeroSection'
import { CONTACT_DATA } from '../constants'

const Contact = () => {
  return (
    <div>
      <HeroSection
        title={CONTACT_DATA.hero.title}
        description={CONTACT_DATA.hero.description}
      />
      <ContactForm />
    </div>
  )
}

export default Contact
