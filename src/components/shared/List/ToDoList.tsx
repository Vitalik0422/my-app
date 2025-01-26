import React, { useState, useEffect } from 'react'
import { todosStore } from '@/store/todosStore'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import CheckBox from '@/components/ui/CheckBox'
import { todosApi } from '@/app/api/todosApi'
type Todos = {
    'id': number,
    'title': string,
    'isCompleted': boolean
}[]

type HandleComplete = {
    id: number,
    isCompleted: boolean
}


export default function ToDoList() {
    const router = useRouter()
    const [todos, setTodos] = useState<Todos>()


    const handleComplete = async (data: HandleComplete) => {
        await todosApi.isCompleted(data)
        getAllTodo()
    }

    useEffect(() => {
        getAllTodo()
    }, [])

    const getAllTodo = async () => {
        const response = await todosStore.getTodo()
        setTodos(response)
        console.log(response);

    }
    return (
        <>
            {!todos ? (
                <div>There are no ToDo yet.</div>
            ) : (
                <form className='taskList'>
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
                            <div className='taskData'>
                                <div className={!item.isCompleted ? '' : 'completed'}>{item.title}</div>
                            </div>
                            <Button
                                btnLabel='✎'
                                type='button'
                                onClick={() => {
                                    router.push(`/edit?id=${item.id}`)
                                }}
                            />
                        </div>
                    ))}
                </form>)
            }
        </>
    )
}