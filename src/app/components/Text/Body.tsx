import Link from 'next/link'
import React from 'react'
import LinkText from './LinkText'
import { BodyContent } from '@/app/constants/types'

const Body = ({ text }: BodyContent) => {
  return (
    <div>
      {typeof text === 'object' ? (
        text.map((para) => <p>{para}</p>)
      ) : (
        <p>{text}</p>
      )}
    </div>
  )
}

export default Body
