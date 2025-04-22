import { useState } from 'react'
import './App.css'
import AuthContext from './context/authContext'
import { Auth } from './components/Auth'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthContext.Provider>
        <Auth/>
      </AuthContext.Provider>

    </>
  )
}

export default App
