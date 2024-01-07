import React from 'react'
import { Variants } from '@/app/constants/types'

interface HeaderProps {
  text: string
  variant?: string
}

const Header = ({ text, variant = 'default' }: HeaderProps) => {
  const variants: Variants = {
    hero: 'text-6xl',
    default: 'text-5xl',
  }

  return <h2 className={`${variants[variant]} font-bold w-2/3`}>{text}</h2>
}

export default Header
