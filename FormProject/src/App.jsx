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
    setTasks(createTask);
  }

  return (
    <>
      <div className='appwrapper'>
        <TaskCreate onCreate={ createTask } />
        <h1>Tasks</h1>
        <Tasklist tasks={ tasks } />
      </div>
    </>
  )
}

export default App
