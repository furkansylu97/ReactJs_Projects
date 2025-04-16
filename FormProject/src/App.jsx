import { useState } from 'react'
import './App.css'
import { TaskCreate } from './components/TaskCreate'
import { Tasklist } from './components/Tasklist'

function App() {
  const [count, setCount] = useState(0)

  const createTask = (title, taskDesc) => {
    console.log(title, taskDesc);
  }

  return (
    <>
      <div className='appwrapper'>
        <TaskCreate onCreate={ createTask } />
        <h1>Tasks</h1>
        <Tasklist />
      </div>
    </>
  )
}

export default App
