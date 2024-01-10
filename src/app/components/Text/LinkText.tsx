import { TextLink, Variants } from '@/app/constants/types'
import Link from 'next/link'
import React from 'react'

const LinkText = ({ linkText, url, variant = 'default' }: TextLink) => {
  const variants: Variants = {
    default: 'border-b-red hover:text-red',
    highlight: 'border-b-black hover:text-black',
  }

  return (
    <>
      <Link
        href={url}
        className={`border-b-4 ${variants[variant]} hover:border-b-white font-bold block w-fit mb-2 last:mb-0`}
      >
        {linkText}
      </Link>
    </>
  )
}

export default LinkText
