import React from 'react'
import { useContext } from 'react'
import TaskContext from '../context/Task'
import { TaskShow } from './TaskShow'

export const Tasklist = () => {

  const { tasks } = useContext( TaskContext )

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
