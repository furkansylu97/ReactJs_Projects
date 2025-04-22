import { useState } from 'react'
import './App.css'
import AuthContext from './context/authContext'
import { Auth } from './components/Auth'


function App() {
  const [authStatus, setAuthStatus] = useState(false)

  const loginAuth = () => {
    setAuthStatus(true);
  }

  return (
    <>
      <AuthContext.Provider value={{status: authStatus, login: loginAuth}}>
        <Auth/>
      </AuthContext.Provider>

    </>
  )
}

export default App
