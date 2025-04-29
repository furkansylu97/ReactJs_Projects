import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const Members = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get('filter') === 'active';

  return (
    <>
      <div>Members</div>
      <button onClick={() => setSearchParams({filter : 'active'})}>Active Memebers</button>
      <button onClick={() => setSearchParams()}>Active Memebers</button>
      {isActive ? <h2>Active Memebers</h2> : <h2>All Members</h2>}
    </>
  )
}
