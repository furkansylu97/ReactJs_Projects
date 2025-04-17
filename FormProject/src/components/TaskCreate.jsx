import React from 'react'
import { useState } from 'react'

export const TaskCreate = ({ onCreate, taskFormUpdate }) => {

  const [title, setTitle] = useState('')
  const [taskDesc, setTaskDesc] = useState('')

  const handleTitleChange = (event) => {
    setTitle( event.target.value );
  }
  const handleTaskChange = (event) => {
    setTaskDesc( event.target.value );
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
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
