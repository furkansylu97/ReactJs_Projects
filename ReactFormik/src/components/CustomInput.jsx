import React from 'react'

function CustomInput({label, ...props}) {
  return (
    <>
     <label>{label}</label>
     <input type="text" />
    </>
  )
}

export default CustomInput