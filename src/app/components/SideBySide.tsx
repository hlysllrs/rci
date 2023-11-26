import React from 'react'

const SideBySide = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="">
        <h2>Left Heading</h2>
        <h3>Left Subheading</h3>
        <p>Left Content</p>
      </div>
      <div>
        <h2>Right Heading</h2>
        <h3>Right Subheading</h3>
        <p>Right Content</p>
      </div>
    </div>
  )
}

export default SideBySide
