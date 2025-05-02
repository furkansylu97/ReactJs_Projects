import React from 'react'
import { Form, Formik } from 'formik'
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';

const onSubmit = async (values , actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  });
  actions.resetForm();
}

export const PortalForm = () => {
  return (
    <>
    {' '}
    <Formik
       initialValues={{ username: '', university: '', isAccepted: false }}
       onSubmit={ onSubmit }
       validationSchema={ advancedSchema }
     >
       {() => (
         <Form>
           <CustomInput
           type='text' 
           label='Username'
           name='username'
           placeholder='Please enter your Username'
           />
         </Form>
       )}
     </Formik>
    </>
  )
}
