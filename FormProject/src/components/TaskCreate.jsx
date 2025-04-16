import React from 'react'
import { useState } from 'react'

export const TaskCreate = ({ onCreate }) => {

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
