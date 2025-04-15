import React from 'react'
import { useState } from 'react'

export const SearchHeader = ({ search }) => {

    const [valueInput, setValue] = useState('')
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        search( valueInput );
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

  return (
    <div className='searchwrapper'>
        <form onSubmit={ handleFormSubmit }>
            <label>What are you looking for?</label>
            <input type="text" value={ valueInput } onChange={ handleChange } />
        </form>
    </div>
  )
}
