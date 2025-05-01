import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup
    .string()
    .email('Please enter a valid email address')
    .required('This field is required'),

    age: yup
    .number()
    .positive('Please enter a valid age')
    .integer('Please enter a valid integer value')
    .required('This field is required'),

    password: yup
    .string()
    .min(5, 'Please enter at least 5 characters')
    .matches(passwordRules, {message:'Please enter at least 1 Uppercase character, 1 lowercase character and a number'})
    .required('This field is required'),

    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('This field is required')
})