import React, { useState, useEffect } from 'react'
import { todosStore } from '@/store/todosStore'
import { useForm } from 'react-hook-form'


type Todos = {
    'id': number,
    'title': string,
    'text': string
}[]

type updateTodo = {
    'id': number,
    'title': string,
    'text': string
}


export default function ToDoList() {
    const [todos, setTodos] = useState<Todos>()
    const [visibleToDoId, setVisibleToDoId] = useState<number[]>([])
    const [toDoToDelete, setToDoToDelete] = useState<number[]>([])
    const [toDoUpdateForm, setToDoUpdateForm] = useState<number>()
    const {register, handleSubmit} = useForm<updateTodo>()
    const handleToggle = (id: number) => {
        if (!visibleToDoId.includes(id)) {
            setVisibleToDoId([...visibleToDoId, id])
        } else {
            setVisibleToDoId(visibleToDoId.filter(item => item !== id))
        }
    }
    const handleConfirm = async () => {
        await todosStore.deleteTodo(toDoToDelete)
        getAllTodo()
    }
    const handelUpdateForm = (id: number) => {
        if (toDoUpdateForm === id) {
            setToDoUpdateForm(undefined)
        } else {
            setToDoUpdateForm(id)
        }
    }
    const handleUpdate = async (data: updateTodo) => {
        await todosStore.updateTodo(data)
        await getAllTodo()
        setToDoUpdateForm(undefined)

    }
    const checkToDoToDelete = (id: number) => {
        if (!toDoToDelete.includes(id)) {
            setToDoToDelete((prevIds) => [...prevIds, id])
        } else {
            setToDoToDelete(toDoToDelete.filter((item) => item !== id))
        }

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
            {!todos ? (
                <div>There are no ToDo yet.</div>
            ) : (
                <form className='taskList' onSubmit={handleSubmit(handleUpdate)}>
                    {todos.map((item) => (
                        <div
                            key={item.id}
                            className='taskContainer'>
                            <div className='checkBoxContainer'>
                                <input onChange={() => { checkToDoToDelete(item.id) }} value={item.id} type='checkbox' className='taskCheckBox'></input>
                            </div>
                            {toDoUpdateForm !== item.id ?
                                (<>
                                    <div className='taskData'>
                                        <div className='todoTitle'>{item.title}</div>
                                        <div className={visibleToDoId.some((task) => task === item.id) ? 'taskText active' : 'taskText'}>{item.text}</div>
                                    </div>
                                    <button type="button" onClick={() => handelUpdateForm(item.id)}>edit</button>
                                    <button className='btnShowTask' type='button' onClick={() => handleToggle(item.id)}>{visibleToDoId.some((task) => task === item.id) ? '🠅' : '🠇'}</button>
                                </>) :
                                (<div className='todoUpdateContainer'>
                                    <input type="hidden" {...register('id')} value={item.id} />
                                    <input {...register('title')} className='todoUpdateInput' type="text" placeholder={item.title} />
                                    <input {...register('text')} className='todoUpdateInput' type="text" placeholder={item.text} />
                                    <button type='submit'>accept</button>
                                    <button onClick={() => handelUpdateForm(item.id)}>cancel</button>
                                </div>)}

                        </div>
                    ))}
                    <button className='btnCreate' type='button' onClick={() => handleConfirm()}>Confirm</button>
                </form>)}
        </>
    )
}

