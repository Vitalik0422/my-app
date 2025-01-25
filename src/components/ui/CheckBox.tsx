import React, { InputHTMLAttributes } from 'react'

export default function CheckBox(props: Readonly<InputHTMLAttributes<HTMLInputElement>>) {
  return (
    <input className='checkBox' type="checkbox" {...props} />
  )
}

