import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Courses } from './components/Courses'

function App() {
  const [courses, setCourses] = useState([])

  const fetchCourses = async () => {
    const response = await axios.get('http://localhost:3000/courses');
    setCourses(response.data);
  }

  useEffect(() => {

    fetchCourses();

  },[])

  return (
    <>
      <Courses courses={ courses } />
    </>
  )
}

export default App
