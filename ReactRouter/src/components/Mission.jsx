import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Mission = () => {
    
    const navigate = useNavigate()
    
  return (
    <>
    <div>Mission</div>
    <button onClick={() => navigate('/') }>Come Back</button>
    </>
  )
}
