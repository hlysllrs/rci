import ContactForm from '../components/Form/ContactForm'
import HeroSection from '../components/Section/HeroSection'

import { CONTACT_DATA } from '../constants'

const Contact = () => {
  return (
    <div>
      <HeroSection
        title={CONTACT_DATA.hero.title}
        content={CONTACT_DATA.hero.content}
      />
      <ContactForm />
    </div>
  )
}

export default Contact
