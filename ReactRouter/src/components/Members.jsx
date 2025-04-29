import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const Members = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div>Members</div>
      <button onClick={() => setSearchParams({filter : 'active'})}>Active Memebers</button>
      <button onClick={() => setSearchParams()}>Active Memebers</button>
    </>
  )
}
