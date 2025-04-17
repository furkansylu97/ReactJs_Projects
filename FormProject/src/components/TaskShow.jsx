import React from 'react'
import { useState } from 'react'
import { TaskCreate } from './TaskCreate'

export const TaskShow = ({ task, onDelete, onUpdate }) => {
  const [showUpdate, setShowUpdate] = useState(false)
    
  const handleDeleteClick = () => {
    onDelete(task.id)
  }

  const handleUpdateClick = () => {
    setShowUpdate(!showUpdate);
  }

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowUpdate(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  }

  return (
    <div className='taskshowwrapper'>
      {showUpdate ? 
      (<TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>) 
      :       
      (
        <div>
          <h3 className='taskshow-title'>Action To Be Taken</h3>
          <p>{ task.title }</p>
          <h3 className='taskshow-title'>Action To Be Taken Description</h3>
          <p>{ task.taskDesc }</p>
          <div>
            <button className='taskshowdel-btn' onClick={ handleDeleteClick }>Delete</button>
            <button className='taskshowupd-btn' onClick={ handleUpdateClick }>Update</button>
          </div>
        </div>
      )
      }
    </div>
  )
}
