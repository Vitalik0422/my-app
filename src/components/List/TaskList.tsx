import React from 'react'
import taskList from '../../store/taskList.json'

export default function TaskList() {

    return (
        <div className='taskList'>
            {taskList.tasks.map((item) => (
                <div
                    key={item.id}
                    className='taskContainer'>
                    <div className='checkBoxContainer'>
                        <input type='checkbox' className='taskCheckBox'></input>
                    </div>
                    <div className='taskData'>
                        <div className='taskTitle'>{item.title}</div>
                        <div className='taskText'>{item.text}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
