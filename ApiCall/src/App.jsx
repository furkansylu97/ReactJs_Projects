import { useState } from 'react'
import './App.css'
import { SearchHeader } from './components/SearchHeader'

function App() {
  const [count, setCount] = useState(0)

  const handleSubmit = (term) => {
    console.log(term);
  }

  return (
    <>
      <div className="App">
        <SearchHeader search={ handleSubmit }/>  
      </div>
    </>
  )
}

export default App
