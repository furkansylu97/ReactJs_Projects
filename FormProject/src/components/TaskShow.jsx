import React from 'react'
import { useState, useContext } from 'react'
import { TaskCreate } from './TaskCreate'
import TaskContext from './context/Task'

export const TaskShow = ({ deleteTaskById, editTaskById }) => {
  const { task } = useContext( TaskContext )
  
  const [showUpdate, setShowUpdate] = useState(false)
    
  const handleDeleteClick = () => {
    deleteTaskById(task.id)
  }

  const handleUpdateClick = () => {
    setShowUpdate(!showUpdate);
  }

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowUpdate(false);
    editTaskById(id, updatedTitle, updatedTaskDesc);
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
