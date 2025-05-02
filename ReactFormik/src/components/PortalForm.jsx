import React from 'react'
import { Form, Formik } from 'formik'
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';

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
           <CustomSelect 
           label='Your University'
           name='university'
           placeholder='Please select your universtiy'
           >
            <option value="">Please Select Your University</option>
            <option value="Atatürk University">Atatürk University</option>
            <option value="Izmir Katip Celebi University">Izmir Katip Celebi University</option>
            <option value="Inönü University">Inönü University</option>
            <option value="Ege University">Ege University</option>
           </CustomSelect>
           <CustomCheckbox
           type='checkbox'
           name='isAccepted'
           />
         </Form>
       )}
     </Formik>
    </>
  )
}
