'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { todosApi } from '@/app/api/todosApi'
type Props = {
    id: string
}


export default function Edit({id}: Readonly<Props>) {
    const { register, handleSubmit } = useForm()
    const [isTodo, setIsTodo] = useState<string>()
    
    const findTodo = async () => {
        const response  = await todosApi.get(id)
        setIsTodo(response.data)
    } 
    useEffect(() => {
        findTodo()
    },[])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                type='hidden'
                value={123}
                name={id}
                register={register}
            />
            <Input
                type='text'
                register={register}
                name='title'
                placeholder={isTodo}
            />
            <Button
                btnLabel='Edit'
                type='submit'
                className='mt-4'
            />
        </form>

    )
}