import { useState } from 'react'
import './App.css'
import { TaskCreate } from './components/TaskCreate'
import { Tasklist } from './components/Tasklist'

function App() {
  const [tasks, setTasks] = useState([])

  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks, {
        id:Math.round(Math.random()*999999),
        title,
        taskDesc
      }
    ];
    setTasks(createdTasks);
  }

  const deleteTaskById = (id)  => {
    const afterDeletingTasks = tasks.filter((tasks) => {
      return tasks.id !== id;
    })
    setTasks(afterDeletingTasks);
  }

  const editTaskById = (id, updatedTitle, updatedTaskDesc)  => {
    const updatedTasks = tasks.map((tasks) => {
      if (tasks.id === id) {
        return {id,title:updatedTitle, taskDesc:updatedTaskDesc }   
      }
      return tasks;
    })
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className='appwrapper'>
        <TaskCreate onCreate={ createTask } />
        <h1>Tasks</h1>
        <Tasklist tasks={ tasks } onDelete={deleteTaskById} onUpdate={editTaskById}/>
      </div>
    </>
  )
}

export default App
