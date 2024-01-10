import React from 'react'
import Header from '../Text/Header'

const Timeline = () => {
  return (
    <div className="bg-lightgrey text-black h-96 px-6 grid grid-cols-1 lg:grid-cols-12 relative w-full">
      <div className="lg:col-span-6 h-full">
        <Header text="Timeline" />
      </div>
      <div className="lg:col-start-7 lg:col-end-8 h-full text-center">|</div>
      <div className="lg:col-start-8 lg:col-end-13 h-full">
        <p>Timeline Text</p>
      </div>
    </div>
  )
}

export default Timeline
