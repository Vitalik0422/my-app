'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { todosApi } from '@/app/api/todosApi'
import { updateTodo } from '@/store/todosStore/types'
import { joiResolver } from '@hookform/resolvers/joi'
import { validationUpdateTask } from './validationSchemaUpdateTask'
type Props = {
    id: string
}

const resolver = joiResolver(validationUpdateTask)

export default function Edit({ id }: Readonly<Props>) {

    const { register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm<updateTodo>({ resolver })

    const [isTodo, setIsTodo] = useState<string>()




    const findTodo = useCallback(async () => {
        const response = await todosApi.get({ id: id });
        setIsTodo(response.data.title);
    }, [id]);

    useEffect(() => {
        findTodo()
    }, [findTodo])

    const onSubmit = async (data: updateTodo) => {
        try {
            const response = await todosApi.update(data)
            if (response.status === 200) {

                reset()

            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error)
        }
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                type='hidden'
                value={id}
                name='id'
                register={register}
            />
            <Input
                type='text'
                register={register}
                name='title'
                placeholder={isTodo}
            />
            {errors.title && <p>{errors.title.message}</p>}
            <Button
                btnLabel='Edit'
                type='submit'
                className='mt-4'
            />
        </form>
    )
}