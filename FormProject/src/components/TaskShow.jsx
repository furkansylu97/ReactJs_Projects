import React from 'react'

export const TaskShow = ({ task }) => {
    console.log(task);
    
  return (
    <div>
      <h3>Action To Be Taken</h3>
      <p>{ task.title }</p>
      <h3>Action To Be Taken Description</h3>
      <p>{ task.taskDesc }</p>
    </div>
  )
}
