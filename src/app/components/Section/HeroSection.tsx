import React from 'react'

const HeroSection = ({ title, description, link = null }) => {
  v

  return (
    <div>
      <Header />
      <h3>{description}</h3>
      {link ? <p>{link}</p> : null}
    </div>
  )
}

export default HeroSection
