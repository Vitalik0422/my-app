'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi';
import { validationCreateTask } from './validationSchemaCreateTasl';
import { todosApi } from '@/app/api/todosApi';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
type SubmitData = {
    'title': string,
    'text': string
}
const resolver = joiResolver(validationCreateTask)

export default function Create() {

    const { register,
        handleSubmit
    } = useForm<SubmitData>({
        resolver
    })
    const onSubmit = async (data: SubmitData) => {
        await todosApi.create(data)

    }
    return (
        <form action="" className='formCreateTask' onSubmit={handleSubmit(onSubmit)}>
            <Input
                type='text'
                register={register}
                name='title'
                placeholder='Title'
            />
            <Button
                btnLabel='Create'
                type='submit'
            />
        </form>
    )
}