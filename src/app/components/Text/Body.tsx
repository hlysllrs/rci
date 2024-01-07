import Link from 'next/link'
import React from 'react'
import LinkText from './LinkText'
import { BodyContent } from '@/app/constants/types'

const Body = ({ text }: BodyContent) => {
  return (
    <div>
      {typeof text === 'object' ? (
        text.map((para) => <p className="pb-5">{para}</p>)
      ) : (
        <p className="pb-5">{text}</p>
      )}
    </div>
  )
}

export default Body
