import ContactForm from '../components/Form/ContactForm'
import InfoSection from '../components/Section/InfoSection'

import { CONTACT_DATA } from '../constants'

const Contact = () => {
  return (
    <div>
      <InfoSection
        title={CONTACT_DATA.hero.title}
        content={CONTACT_DATA.hero.content}
      />
      <ContactForm />
    </div>
  )
}

export default Contact
