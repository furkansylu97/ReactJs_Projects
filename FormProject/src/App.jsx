import { useEffect } from 'react'
import './App.css'
import { TaskCreate } from './components/TaskCreate'
import { Tasklist } from './components/Tasklist'


function App() {

  useEffect(() => {
    fetchTasks();
  },[])

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
