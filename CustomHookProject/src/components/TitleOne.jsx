import React from 'react'
import { useState, useEffect } from 'react'

export const TitleOne = () => {

    const [num, setNum] = useState(0)
    useEffect(() => {
      document.title = `Sayı ${num}`
    }, [num]);
    

  return (
    <div>
        <button onClick={() => {
            setNum(num + 1 );
        }}>Sayı - {num}</button>
    </div>
  )
}
