import React from 'react'

interface HeaderProps {
  text: string
  headerStyle?: string
}

const Header = ({ text, headerStyle }: HeaderProps) => {
  const variants = {
    default: '',
  }

  return <h2 className={headerStyle ? headerStyle : ''}>{text}</h2>
}

export default Header
