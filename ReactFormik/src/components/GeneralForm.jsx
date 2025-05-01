import React from 'react'
import { useFormik } from 'formik';

export const GeneralForm = () => {

        const formik = useFormik({
          initialValues: {
            email: '',
          }
        });


  return (
    <form>
        <div>
            <label>E-mail</label>
            <input type="email" value={formik.values.email} id='email' placeholder='Please enter your email adress...' />
        </div>
        
    </form>
  )
}
