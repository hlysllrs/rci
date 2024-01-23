import React from 'react'
import Header from '../Text/Header'

const Timeline = ({ title, data }) => {
  return (
    <div className="bg-lightgrey text-black h-96 px-6 grid grid-cols-1 lg:grid-cols-12 relative w-full">
      <div className="lg:col-span-6 h-full">
        <Header text={title} />
      </div>
      {data
        ? data.map((event) => (
            <>
              <div className="lg:col-start-1 lg:col-span-6 h-full">
                <p>{event.year}</p>
              </div>
              <div className="lg:col-start-6 lg:col-end-7 h-full text-center">
                |
              </div>
              <div className="lg:col-start-7 lg:col-end-13 h-full">
                <p>{event.event}</p>
              </div>
            </>
          ))
        : null}
    </div>
  )
}

export default Timeline
