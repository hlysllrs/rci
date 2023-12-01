import React from 'react'

interface SubheaderProps {
  text: string
  subheaderStyle?: string
}

const Subheader = ({ text, subheaderStyle }: SubheaderProps) => {
  return <h3 className={subheaderStyle ? subheaderStyle : ''}>{text}</h3>
}

export default Subheader
