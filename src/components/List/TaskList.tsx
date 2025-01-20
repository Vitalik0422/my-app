import React, { useState } from 'react'
import taskList from '../../store/taskList.json'
import { useForm } from 'react-hook-form'

type arrayId = {
    'id': string
}
type MyType= {
    'id': string
    'checked'?: boolean
}


export default function TaskList() {

    const [visibleArticleId, setVisibleArticleId] = useState<arrayId[]>([])
    const [taskToDelete, setTaskToDelete] = useState<MyType[]>([])
   
    const handleToggle = (id: string) => {
        
        if (!visibleArticleId.some((item) => item.id === id)) {
            setVisibleArticleId([...visibleArticleId, { id }])
        } else
            setVisibleArticleId(visibleArticleId.filter((item) => item.id !== id))
    }
    const{register, handleSubmit} = useForm<MyType>()
    
     
     
    const handleConfirm = (data: MyType) => {
        if(!taskToDelete.some((item)=> item.id === data.id)){
            setTaskToDelete((prevIds) => [...prevIds, data])
        }
        console.log(taskToDelete)

    }
    return (
        <form className='taskList' onSubmit = {handleSubmit(handleConfirm)}>
            {taskList.tasks.map((item) => (
                <div
                    key={item.id}
                    className='taskContainer'>
                    <div className='checkBoxContainer'>
                        <input {...register('id')} value={item.id} type='checkbox' className='taskCheckBox'></input>
                    </div>
                    <div className='taskData'>
                        <div className='taskTitle'>{item.title}</div>
                        <div className={visibleArticleId.some((task) => task.id === item.id) ? 'taskText active' : 'taskText'}>{item.text}</div>
                    </div>
                    <button className='btnShowTask' type='button' onClick={() => handleToggle(item.id)}>{visibleArticleId.some((task) => task.id === item.id) ? '🠅' : '🠇'}</button>
                </div>
            ))}
            <button className='btnCreate' type='submit'>Confirm</button>
        </form>
    )
}
