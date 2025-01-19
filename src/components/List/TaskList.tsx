import React, { useState } from 'react'
import taskList from '../../store/taskList.json'

export default function TaskList() {
    const [visibleArticleId, setVisibleArticleId] = useState<string | null>(null)
    const handleToggle  = (id:string) => {
        setVisibleArticleId((prev) => (prev === id ? null : id));
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
                            <button type='button' onClick={() => handleToggle(item.id)}>Active</button>
                        </div>
                        <div className={visibleArticleId===item.id  ? 'taskText active':'taskText'}>{item.text}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
