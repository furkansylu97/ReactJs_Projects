import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from '../schemas/index'
import { Link } from 'react-router-dom'

const onSubmit = async (values , actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  });
  actions.resetForm();
}

export const GeneralForm = () => {

        const { values, errors, isSubmitting, handleChange, handleSubmit} = useFormik({
          initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
          },
          validationSchema: basicSchema,
          onSubmit,
        });

  return (
    <form onSubmit={ handleSubmit }>
        <div className='inputDiv'>
            <label>E-mail</label>
            <input 
            type="email" 
            value={values.email}
            onChange={handleChange} 
            id='email' 
            placeholder='Please enter your email adress...'
            className={errors.email ? 'input-error' : ''} />
            {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div className='inputDiv'>
            <label>Age</label>
            <input 
            type="number" 
            value={values.age}
            onChange={handleChange} 
            id='age' 
            placeholder='Please enter your age...'
            className={errors.age ? 'input-error' : ''} />
            {errors.age && <p className='error'>{errors.age}</p>}
        </div>
        <div className='inputDiv'>
            <label>Password</label>
            <input 
            type="password" 
            value={values.password}
            onChange={handleChange} 
            id='password' 
            placeholder='Please enter your password...'
            className={errors.password ? 'input-error' : ''} />
            {errors.password && <p className='error'>{errors.password}</p>}
        </div>
        <div className='inputDiv'>
            <label>Confirm Password</label>
            <input 
            type="password" 
            value={values.confirmPassword}
            onChange={handleChange} 
            id='confirmPassword' 
            placeholder='Please confirm your password...'
            className={errors.confirmPassword ? 'input-error' : ''} />
            {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
        </div> 
        <button disabled={isSubmitting} type='submit'>SAVE</button>
        <Link className='formLink' to='/portal'>Go to Portal</Link>
    </form>
  )
}
