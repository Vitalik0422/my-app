import React, { InputHTMLAttributes } from 'react'
import { UseFormRegister,FieldValues, Path } from 'react-hook-form'


interface InputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<T>
    name: Path<T>
}

export default function Input<T extends FieldValues>({register, name,  ...props}: Readonly<InputProps<T>>) {
  return (
    <input {...register(name)} {...props}  />
  )
}
