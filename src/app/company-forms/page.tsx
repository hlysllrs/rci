import React from 'react'

import { COMPANY_FORMS_DATA } from '../constants'
import Header from '../components/Text/Header'
import HeroSection from '../components/Section/HeroSection'

const CompanyForms = () => {
  return (
    <div>
      <HeroSection
        title={COMPANY_FORMS_DATA.hero.title}
        description={COMPANY_FORMS_DATA.hero.description}
      />
    </div>
  )
}

export default CompanyForms
