import React from 'react'

import { COMPANY_FORMS_DATA } from '../constants'
import InfoSection from '../components/Section/InfoSection'

const CompanyForms = () => {
  return (
    <div>
      <InfoSection
        title={COMPANY_FORMS_DATA.hero.title}
        content={COMPANY_FORMS_DATA.hero.content}
      />
    </div>
  )
}

export default CompanyForms
