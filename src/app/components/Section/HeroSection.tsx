import React from 'react'
import Subheader from '../Text/Subheader'
import Header from '../Text/Header'
import LinkText from '../Text/LinkText'

interface HeroSectionProps {
  title: string
  description: string
  link?: string
}

const HeroSection = ({ title, description, link }: HeroSectionProps) => {
  const styles = {
    header: 'text-6xl font-bold',
  }

  return (
    <section className="grid grid-cols-12 h-1/3">
      <div className="col-span-7 h-full">
        <Header text={title} headerStyle={styles.header} />
      </div>
      <div className="col-start-8 col-end-13 h-full">
        <Subheader text={description} />
        {link ? <LinkText text={link} /> : null}
      </div>
    </section>
  )
}

export default HeroSection
