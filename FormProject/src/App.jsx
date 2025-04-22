import { useEffect, useContext } from 'react'
import './App.css'
import { TaskCreate } from './components/TaskCreate'
import { Tasklist } from './components/Tasklist'
import TaskContext from './context/Task'


function App() {

  const {fetchTasks} = useContext( TaskContext )

  useEffect(() => {
    fetchTasks();
  },[])

  return (
    <>
      <div className='appwrapper'>
        <TaskCreate />
        <h1>Tasks</h1>
        <Tasklist />
      </div>
    </>
  )
}

export default App
