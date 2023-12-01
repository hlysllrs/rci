import Link from 'next/link'
import React from 'react'
import LinkText from './LinkText'

const Body = ({ textContent, link }) => {
  return (
    <div>
      {textContent.length > 1 ? (
        textContent.map((para) => <p>{para}</p>)
      ) : (
        <p>{textContent[0]}</p>
      )}
      <LinkText link={link} />
    </div>
  )
}

export default Body
