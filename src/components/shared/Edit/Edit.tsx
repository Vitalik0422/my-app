'use client'
import React from 'react'

import { useForm } from 'react-hook-form'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'


export default function Edit() {
    const { register, handleSubmit } = useForm()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                type='hidden'
                value={123}
                name='id'
                register={register}
            />
            <Input
                type='text'
                register={register}
                name='title'
                placeholder='Title'
            />
            <Button
                btnLabel='Edit'
                type='submit'
            />
        </form>

    )
}