import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/authContext'

export const Auth = () => {
    const{ status, login } = useContext( AuthContext );

  return (
    <div>
        <h1>Did you log in ?</h1>
        {
            status ? <p>Yes, I have already logged in </p> : <p>No, I didn't log in !!</p>
        }
        <button onClick={ login }>Sign in</button>
    </div>
  )
}
