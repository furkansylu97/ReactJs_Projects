import React from 'react'
import { useState } from 'react'

export const TaskCreate = () => {

  const [title, setTitle] = useState('')

  const handleTitleChange = (event) => {
    setTitle( event.target.value );
  }

  return (
    <div className='taskwrapper'>
        <h3>Please Add Task!</h3>
        <form className='formwrapper'>
            <label className='tasklabel'>Title</label>
            <input value={ title } onChange={ handleTitleChange } className='taskinput' />
            <label className='tasklabel'>Enter Your Task</label>
            <textarea className='taskinput' rows={5} />
            <button className='taskbtn'>Create</button>
        </form>
    </div>
  )
}
