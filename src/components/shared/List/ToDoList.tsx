import React, { useState, useEffect } from 'react'
import { todosStore } from '@/store/todosStore'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import CheckBox from '@/components/ui/CheckBox'
import { todosApi } from '@/app/api/todosApi'
import Input from '@/components/ui/Input'
import { useForm } from 'react-hook-form'
type Todos = {
    'id': number,
    'title': string,
    'isCompleted': boolean
}[]

type HandleComplete = {
    id: number,
    isCompleted: boolean
}
type HandleDelete = {
    id: number
}

export default function ToDoList() {
    const router = useRouter()
    const [todos, setTodos] = useState<Todos>()
    const { register, handleSubmit } = useForm()


    const handleComplete = async (data: HandleComplete) => {
        await todosApi.isCompleted(data)
        getAllTodo()
    }
    const handleDelete = async (data: HandleDelete) => {
        try {
            await todosApi.delete(data)
            setTodos(prev => prev?.filter(item => item.id !== data.id))
        } catch (error) {
            console.log(error);
        }
    }
    const handelSearch = async () => {

    }

    useEffect(() => {
        getAllTodo()
    }, [])

    const getAllTodo = async () => {
        const response = await todosStore.getTodo()
        setTodos(response)

    }
    return (
        <>
            <form action="" onSubmit={handleSubmit(handelSearch)} className='searchForm'>
                <Input register={register} name='searchTodo' placeholder='search Todo' />
                <Button btnLabel='Search' />
            </form>
            {!todos ? (
                <div>There are no ToDo yet.</div>
            ) : (
                <div className='taskList'>
                    {todos.map((item) => (
                        <div
                            key={item.id}
                            className='taskContainer'>
                            <div className='checkBoxContainer'>
                                <CheckBox
                                    checked={item.isCompleted}
                                    value={item.id}
                                    onChange={() => { handleComplete({ id: item.id, isCompleted: !item.isCompleted }) }}
                                />
                            </div>
                            <div className={!item.isCompleted ? '' : 'completed'}>{item.title}</div>
                            <Button
                                btnLabel='✎'
                                type='button'
                                onClick={() => { router.push(`/edit?id=${item.id}`) }}
                            />
                            <Button
                                btnLabel='DELETE'
                                type='button'
                                onClick={() => { handleDelete({ id: item.id }) }} />
                        </div>
                    ))}
                </div>)
            }
        </>
    )
}