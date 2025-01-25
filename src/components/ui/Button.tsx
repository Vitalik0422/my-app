import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{ 
    btnLabel: string
}

export default function Button({btnLabel, ...props}: Readonly<ButtonProps>) {
    return <button {...props}>{btnLabel}</button>
}