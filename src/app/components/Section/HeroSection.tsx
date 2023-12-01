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
  return (
    <div>
      <Header text={title} />
      <Subheader text={description} />
      {link ? <LinkText text={link} /> : null}
    </div>
  )
}

export default HeroSection
