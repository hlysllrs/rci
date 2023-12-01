import Link from 'next/link'
import React from 'react'

const LinkText = ({ link }) => {
  return <Link href={link.url}>{link.linkText}</Link>
}

export default LinkText
