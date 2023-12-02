import React from 'react'
import Header from '../Text/Header'
import { TextSection } from '@/app/constants/types'
import Body from '../Text/Body'

const HeroSection = ({ title, content }: TextSection) => {
  const styles = {
    header: 'text-6xl font-bold',
  }

  return (
    <section className="grid grid-cols-12 h-80">
      <div className="col-span-7 h-full">
        <Header text={title} headerStyle={styles.header} />
      </div>
      <div className="col-start-8 col-end-13 h-full">
        <Body text={content.text} link={content.link} />
      </div>
    </section>
  )
}

export default HeroSection
