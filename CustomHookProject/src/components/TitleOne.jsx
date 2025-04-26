import React from 'react'
import { useState } from 'react'
import usetitle from './useTitle'

export const TitleOne = () => {

    const [num, setNum] = useState(0)
    usetitle(num);
    

  return (
    <div>
        <button onClick={() => {
            setNum(num + 1 );
        }}>Sayı - {num}</button>
    </div>
  )
}
