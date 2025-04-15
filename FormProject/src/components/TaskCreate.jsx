import React from 'react'

export const TaskCreate = () => {
  return (
    <div className='taskwrapper'>
        <h3>Please Add Task!</h3>
        <form className='formwrapper'>
            <label className='tasklabel'>Title</label>
            <input className='taskinput' />
            <label className='tasklabel'>Enter Your Task</label>
            <textarea className='taskinput' rows={5} />
            <button className='taskbtn'>Create</button>
        </form>
    </div>
  )
}
