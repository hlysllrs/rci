import React from 'react'

const HeroSection = ({ title, description, link }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
      {link ? <p>{link}</p> : null}
    </div>
  )
}

export default HeroSection
