import React from 'react'
import Header from '../Text/Header'
import Subheader from '../Text/Subheader'
import LinkText from '../Text/LinkText'

interface InfoBlockProps {
  title: string
  description: string
  link?: string
}

const InfoBlock = ({ title, description, link }: InfoBlockProps) => {
  return (
    <div>
      <Header text={title} />
      <Subheader text={description} />
      {link ? <LinkText text={link} /> : null}
    </div>
  )
}

export default InfoBlock
