import React from 'react'
import { TaskShow } from './TaskShow'

export const Tasklist = ({ tasks }) => {
  return (
    <div className='tasklistwrapper'>
      {tasks.map((task, index) => {
        return (
          <TaskShow key={index} task={task} />
        )
      })}
    </div>
  )
}
