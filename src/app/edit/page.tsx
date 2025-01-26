'use client'
import React from 'react'
import Edit from '@/components/shared/Edit/Edit'
import { useSearchParams } from 'next/navigation'


export default function EditPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id') ?? ''
  return (
    <Edit id={id}/>
  )
}