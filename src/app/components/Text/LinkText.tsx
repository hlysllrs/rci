import React from 'react'

interface LinkTextProps {
  text: string
  linkTextStyle?: string
}

const LinkText = ({ text, linkTextStyle }: LinkTextProps) => {
  return <div className={linkTextStyle ? linkTextStyle : ''}>{text}</div>
}

export default LinkText
