import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

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
    Courses Project
    </>
  )
}

export default App
