import React from 'react'
import { useFormik } from 'formik';

export const GeneralForm = () => {

        const { values, errors, handleChange, handleSubmit} = useFormik({
          initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
          }
        });


  return (
    <form>
        <div>
            <label>E-mail</label>
            <input 
            type="email" 
            value={values.email}
            onChange={handleChange} 
            id='email' 
            placeholder='Please enter your email adress...' />
        </div>
        <div>
            <label>Age</label>
            <input 
            type="number" 
            value={values.age}
            onChange={handleChange} 
            id='age' 
            placeholder='Please enter your age...' />
        </div>
        <div>
            <label>Password</label>
            <input 
            type="password" 
            value={values.password}
            onChange={handleChange} 
            id='password' 
            placeholder='Please enter your password...' />
        </div>
        <div>
            <label>Confirm Password</label>
            <input 
            type="password" 
            value={values.confirmPassword}
            onChange={handleChange} 
            id='confirmPassword' 
            placeholder='Please confirm your password...' />
        </div> 
        <button type='submit'>SAVE</button>     
    </form>
  )
}
