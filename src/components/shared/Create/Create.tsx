'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi';
import { validationCreateTask } from './validationSchemaCreateTasl';
import { todosApi } from '@/app/api/todosApi';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import SnackBar from '@/components/ui/SnackBar';
import { useRouter } from 'next/navigation';
type SubmitData = {
    'title': string,
    'text': string
}
type SnackBarStatus = {
    status: number | undefined
}

const resolver = joiResolver(validationCreateTask)


export default function Create() {
    const [isStatus, setIsStatus] = useState<SnackBarStatus>()
    const router = useRouter()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<SubmitData>({
        resolver
    })
    const timerRedirect = setTimeout(() =>{
        setIsStatus(undefined)
        router.push('/list')
    }, 4000)

    const onSubmit = async (data: SubmitData) => {
        clearTimeout(timerRedirect)
        try {
            const response = await todosApi.create(data)
            if (response.status === 201) {
                setIsStatus({ status: 201 })
                reset()
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error);
        }

    }
    return (
        <>
            <form action="" className='formCreateTask' onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type='text'
                    register={register}
                    name='title'
                    placeholder='Title'
                />
                {errors.title && (
                    <p className="text-red-500">
                        {errors.title.message}
                    </p>
                )}
                <Button
                    btnLabel='Create'
                    type='submit'
                />
            </form>
            {isStatus && <SnackBar message='Success' type='success' duration={4000}/>}
        </>
    )
}