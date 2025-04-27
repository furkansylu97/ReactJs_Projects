import React from 'react'
import { useState } from 'react'

export const Counter = () => {

    const [num, setNum] = useState(0)

  return (
    <div>
        <h2>Number = {num}</h2>
    </div>
  )
}
