import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Courses } from './components/Courses'
import { Loading } from './components/Loading';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/courses');
      setCourses(response.data);
      setLoading(false);
      
    } catch (error) {
      setLoading(false);
    }  
  }

  useEffect(() => {

    fetchCourses();

  },[])

  return (
    <>
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
          <Courses courses={ courses } />
      )}
    </div>
    </>
  )
}

export default App
