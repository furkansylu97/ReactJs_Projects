import React from 'react'
import { useState, useContext } from 'react'
import TaskContext from '../context/Task'

export const TaskCreate = ({ task, taskFormUpdate, onUpdate }) => {

  const { createTask } = useContext( TaskContext )

  const [title, setTitle] = useState(task ? (task.title) : (''))
  const [taskDesc, setTaskDesc] = useState(task ? (task.taskDesc) : (''))

  const handleTitleChange = (event) => {
    setTitle( event.target.value );
  }
  const handleTaskChange = (event) => {
    setTaskDesc( event.target.value );
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc)
    }
    else {
      createTask(title, taskDesc);
    }
    setTitle('');
    setTaskDesc('');
  }

  return (
    <div>
      {taskFormUpdate ? 
      (
        <div className='taskupdatewrapper'>
          <h3>Please Edit Task!</h3>
          <form className='formwrapper'>
              <label className='tasklabel'>Edit Title</label>
              <input value={ title } onChange={ handleTitleChange } className='taskinput' />
              <label className='tasklabel'>Edit Your Task</label>
              <textarea value={ taskDesc } onChange={ handleTaskChange } className='taskinput' rows={5} />
              <button onClick={ handleSubmit } className='taskbtn update-btn'>Edit</button>
          </form>
        </div>
      ) 
      : 
      (
        <div className='taskwrapper'>
          <h3>Please Add Task!</h3>
          <form className='formwrapper'>
              <label className='tasklabel'>Title</label>
              <input value={ title } onChange={ handleTitleChange } className='taskinput' />
              <label className='tasklabel'>Enter Your Task</label>
              <textarea value={ taskDesc } onChange={ handleTaskChange } className='taskinput' rows={5} />
              <button onClick={ handleSubmit } className='taskbtn'>Create</button>
          </form>
        </div>
      )
      }
    </div>
  )
}
