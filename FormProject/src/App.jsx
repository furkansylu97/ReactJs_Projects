import { useEffect, useState } from 'react'
import './App.css'
import { TaskCreate } from './components/TaskCreate'
import { Tasklist } from './components/Tasklist'
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([])

  const createTask = async (title, taskDesc) => {
    const response = await axios.post('http://localhost:3000/tasks',{
      title,
      taskDesc,
    })
    console.log(response);

    const createdTasks = [
      ...tasks, 
      response.data
    ];
    setTasks(createdTasks);
  }

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3000/tasks');
    console.log(response.data);
    setTasks(response.data);
  }

  useEffect(() => {
    fetchTasks();
  },[])

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
