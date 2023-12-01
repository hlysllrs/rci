import React from 'react'

interface HeaderProps {
  text: string
  headerStyle?: string
}

const Header = ({ text, headerStyle }: HeaderProps) => {
  return (
    <h2 className={headerStyle ? headerStyle : 'text-4xl font-bold'}>{text}</h2>
  )
}

export default Header
