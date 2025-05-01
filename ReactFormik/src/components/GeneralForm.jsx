import React from 'react'
import { useFormik } from 'formik';

export const GeneralForm = () => {

        const { values, errors, handleChange, handleSubmit} = useFormik({
          initialValues: {
            email: '',
          }
        });


  return (
    <form>
        <div>
            <label>E-mail</label>
            <input type="email" value={values.email} id='email' placeholder='Please enter your email adress...' />
        </div>
        
    </form>
  )
}
