import React from 'react'

import { COMPANY_FORMS_DATA } from '../constants'
import HeroSection from '../components/Section/HeroSection'

const CompanyForms = () => {
  return (
    <div>
      <HeroSection
        title={COMPANY_FORMS_DATA.hero.title}
        content={COMPANY_FORMS_DATA.hero.content}
      />
    </div>
  )
}

export default CompanyForms
