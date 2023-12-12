import React from 'react'
import Header from '../Text/Header'
import Subheader from '../Text/Subheader'
import LinkText from '../Text/LinkText'
import { TextSection } from '@/app/constants/types'
import Body from '../Text/Body'

const InfoBlock = ({ title, content }: TextSection) => {
  return (
    <div className="flex-1 h-full">
      <Header text={title} />
      <Body text={content.text} />
      {content.link && (
        <LinkText url={content.link.url} linkText={content.link.linkText} />
      )}
    </div>
  )
}

export default InfoBlock
