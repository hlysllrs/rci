import React from 'react'

interface ButtonProps {
  text: string
  action: () => {}
}

const Button = ({ text, action }: ButtonProps) => {
  return <button onClick={action}>{text}</button>
}

export default Button
