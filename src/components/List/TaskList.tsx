import React, { useState } from 'react'
import taskList from '../../store/taskList.json'

export default function TaskList() {
    const [isActive, setIsActive] = useState(true)
    const onActive = () => {
        setIsActive(!isActive)
    }
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
                        <div className='taskTitle'>{item.title}
                            <button type='button' onClick={onActive}>Active</button>
                        </div>
                        <div className={isActive ? 'taskText':'taskText active'}>{item.text}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
