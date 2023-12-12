import React from 'react'
import Header from '../Text/Header'
import Body from '../Text/Body'
import LinkText from '../Text/LinkText'
import { TextSection } from '@/app/constants/types'

const HighlightSection = ({ title, content }: TextSection) => {
  return (
    <section className="grid grid-cols-12 h-48 bg-red-600">
      <div className="col-span-7 h-full">
        <Header text={title} />
      </div>
      <div className="col-start-8 col-end-13 h-full">
        <Body text={content.text} />
        {content.link && (
          <LinkText url={content.link.url} linkText={content.link.linkText} />
        )}
      </div>
    </section>
  )
}

export default HighlightSection
