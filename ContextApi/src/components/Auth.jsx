import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/authContext'

export const Auth = () => {
    const{ status } = useContext( AuthContext );

  return (
    <div>
        <h1>Did you log in ?</h1>
        {
            status ? <p>Yes, I have already logged in </p> : <p>No, I didn't log in !!</p>
        }
    </div>
  )
}
