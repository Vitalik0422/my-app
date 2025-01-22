import React, { useState, useEffect } from 'react'
import { todosStore } from '@/store/todosStore'
import { useForm } from 'react-hook-form'

type arrayId = {
    'id': string
}

type Todos = {
    'id': string,
    'title': string,
    'text': string
}[]

type updateTodo = {
    'id': string,
    'title': string,
    'text': string
}


export default function ToDoList() {
    const [todos, setTodos] = useState<Todos>()
    const [visibleToDoId, setVisibleToDoId] = useState<arrayId[]>([])
    const [toDoToDelete, setToDoToDelete] = useState<arrayId[]>([])
    const [toDoUpdateForm, setToDoUpdateForm] = useState<string>()
    const {register, handleSubmit} = useForm<updateTodo>()

    const handleToggle = (id: string) => {
        if (!visibleToDoId.some((item: arrayId) => item.id === id)) {
            setVisibleToDoId([...visibleToDoId, { id }])
        } else {
            setVisibleToDoId(visibleToDoId.filter((item: arrayId) => item.id !== id))
        }
    }
    const handleConfirm = async () => {
        await todosStore.deleteTodo(toDoToDelete)
        getAllTodo()
    }
    const handelUpdateForm = (id: string) => {
        if (toDoUpdateForm === id) {
            setToDoUpdateForm(undefined)
        } else {
            setToDoUpdateForm(id)
        }
    }
    const handleUpdate = (data: updateTodo) => {
        todosStore.updateTodo(data)
        getAllTodo()
        setToDoUpdateForm(undefined)

    }
    const checkToDoToDelete = (id: string) => {
        if (!toDoToDelete.some((item) => item.id === id)) {
            setToDoToDelete((prevIds) => [...prevIds, { id }])
        } else {
            setToDoToDelete(toDoToDelete.filter((item) => item.id !== id))
        }

    }

    useEffect(() => {
        getAllTodo()
    }, [todos])

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
                                        <div className={visibleToDoId.some((task: arrayId) => task.id === item.id) ? 'taskText active' : 'taskText'}>{item.text}</div>
                                    </div>
                                    <button type="button" onClick={() => handelUpdateForm(item.id)}>edit</button>
                                    <button className='btnShowTask' type='button' onClick={() => handleToggle(item.id)}>{visibleToDoId.some((task: arrayId) => task.id === item.id) ? '🠅' : '🠇'}</button>
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

