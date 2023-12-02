import Link from 'next/link'
import React from 'react'
import LinkText from './LinkText'
import { BodyContent } from '@/app/constants/types'

const Body = ({ text, link }: BodyContent) => {
  return (
    <div>
      {typeof text === 'object' ? (
        text.map((para) => <p>{para}</p>)
      ) : (
        <p>{text}</p>
      )}
      {link ? <LinkText linkText={link?.linkText} url={link?.url} /> : null}
    </div>
  )
}

export default Body
