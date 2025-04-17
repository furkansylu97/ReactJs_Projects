import React from 'react'

export const TaskShow = ({ task }) => {
    console.log(task);
    
  return (
    <div className='taskshowwrapper'>
      <h3 className='taskshow-title'>Action To Be Taken</h3>
      <p>{ task.title }</p>
      <h3 className='taskshow-title'>Action To Be Taken Description</h3>
      <p>{ task.taskDesc }</p>
      <div>
        <button className='taskshowdel-btn'>Delete</button>
        <button className='taskshowupd-btn'>Update</button>
      </div>
    </div>
  )
}
