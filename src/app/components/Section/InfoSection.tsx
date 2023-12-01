import React from 'react'
import Header from '../Text/Header'
import Body from '../Text/Body'

const InfoSection = ({ title, content }) => {
  return (
    <div>
      <Header text={title} />
      <Body textContent={content.text} link={content.link} />
    </div>
  )
}

export default InfoSection
