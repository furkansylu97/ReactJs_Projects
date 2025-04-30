import React from 'react'

function MenuItem({image, name, content, price}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1 style={{marginTop:'20px'}}>{name}</h1>
        <h6 style={{margin:'20px'}}>{content}</h6>
        <i style={{color:'red'}}>
            <p>{price}</p>
        </i>
    </div>
  )
}

export default MenuItem