import { useState } from 'react'
import './App.css'
import AuthContext from './context/authContext'
import { Auth } from './components/Auth'


function App() {
  const [count, setCount] = useState(0)

  const loginAuth = () => {

  }

  return (
    <>
      <AuthContext.Provider value={{status: false, login: loginAuth}}>
        <Auth/>
      </AuthContext.Provider>

    </>
  )
}

export default App
