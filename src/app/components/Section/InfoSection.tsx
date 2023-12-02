import React from 'react'
import Header from '../Text/Header'
import Body from '../Text/Body'
import { TextSection } from '@/app/constants/types'

const InfoSection = ({ title, content }: TextSection) => {
  return (
    <section className="grid grid-cols-12 h-80">
      <div className="col-span-7 h-full">
        <Header text={title} />
      </div>
      <div className="col-start-8 col-end-13 h-full">
        <Body text={content.text} link={content.link} />
      </div>
    </section>
  )
}

export default InfoSection
