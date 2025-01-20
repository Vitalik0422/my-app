'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
type SearchFieldProps={
  readonly onSearch:(query:string) => void,
}

 
export default function SearchField({onSearch}: SearchFieldProps) {

  const {register, handleSubmit} = useForm()

const onSubmit = (query: any) => {
  onSearch(query)
}

  return (
    <><form action="" className='formSearch' onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('query')}
        type="text"
        className='inputsSearch'
        placeholder='Search note...' />
      <button type='submit' className='buttonSearch'>GO</button>
    </form>
      <Link href='/create'><button type='button'className='btnCreateLink'>+</button></Link>
    </>
  )
}
