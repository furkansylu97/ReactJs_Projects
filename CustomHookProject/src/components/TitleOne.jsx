import React from 'react'
import { useState } from 'react'

export const TitleOne = () => {

    const [num, setNum] = useState(0)

  return (
    <div>
        <button onClick={() => {
            setNum(num + 1 );
        }}>Sayı - {num}</button>
    </div>
  )
}
