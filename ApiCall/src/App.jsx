import { useState } from 'react'
import './App.css'
import { SearchHeader } from './components/SearchHeader'
import searchImages from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  const handleSubmit = (term) => {
    searchImages(term);
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
