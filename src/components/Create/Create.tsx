'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi';
import { validationCreateTask } from './validationSchemaCreateTasl';
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
    const onSubmit = (data: SubmitData) => {
        console.log(data)
    }
    return (
        <form action="" className='formCreateTask' onSubmit={handleSubmit(onSubmit)}>
            <input {...register('title')} type="text" placeholder='Title...' className='inputCreateTask' />
            <input {...register('text')} type="text" placeholder='Text...' className='inputCreateTask' />
            <button type='submit' className='btnCreate'>Create</button>
        </form>
    )
}