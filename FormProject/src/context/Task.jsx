import { createContext, useState } from "react";
import axios from 'axios'

const TaskContext = createContext();

function Provider ({ children }) {

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
    setTasks(response.data);
  }
  
  const deleteTaskById = async (id)  => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((tasks) => {
      return tasks.id !== id;
    })
    setTasks(afterDeletingTasks);
  }

  const editTaskById = async (id, updatedTitle, updatedTaskDesc)  => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title:updatedTitle, taskDesc:updatedTaskDesc
    });
    const updatedTasks = tasks.map((tasks) => {
      if (tasks.id === id) {
        return {id,title:updatedTitle, taskDesc:updatedTaskDesc }   
      }
      return tasks;
    })
    setTasks(updatedTasks);
  }

  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    deleteTaskById,
    editTaskById
  }

    return (
        <TaskContext.Provider value={ sharedValuesAndMethods }>
            { children }
        </TaskContext.Provider>
    )
}

export { Provider };
export default TaskContext;