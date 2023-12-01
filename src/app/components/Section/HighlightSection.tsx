import React from 'react'
import Header from '../Text/Header'
import LinkText from '../Text/LinkText'

interface HighlightSectionProps {
  title: string
  text: string
  link?: string
}

const HighlightSection = ({ title, text, link }: HighlightSectionProps) => {
  return (
    <section>
      <Header text={title} />
      {link ? <LinkText link={link} /> : null}
    </section>
  )
}

export default HighlightSection
