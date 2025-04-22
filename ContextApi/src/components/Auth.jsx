import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/authContext'

export const Auth = () => {
    const{ status } = useContext( AuthContext );
    console.log(status);

  return (
    <div>Auth</div>
  )
}
