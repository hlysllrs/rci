import { TextLink } from '@/app/constants/types'
import Link from 'next/link'
import React from 'react'

const LinkText = ({ linkText, url }: TextLink) => {
  return <Link href={url}>{linkText}</Link>
}

export default LinkText
