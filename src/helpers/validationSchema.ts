import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const singupSchema = Yup.object({
  ...loginSchema.fields,
  confirmPassword: Yup.string()
  .matches(/^[A-Za-z0-9]+$/, 'Password must contain only letters and numbers')
  .required('Confirm Password is required')
  .oneOf([Yup.ref('password')], 'Passwords must match'),
    fullName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'Invalid fullname')
    .required('Fullname is required'),
    number: Yup.string()
    .min(10, 'Phone number must be at least 10 characters')
    .matches(/^[0-9]+$/, 'Invalid phone number')  
    .required('Phone number is required'),
});

export const requestSchema = Yup.object({
  
  
    fullName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'Invalid fullname')
    .required('Fullname is required'),
    email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
    number: Yup.string()
    .min(10, 'Phone number must be at least 10 characters')
    .matches(/^[0-9]+$/, 'Invalid phone number') , 
    country: Yup.string() 
    .required('Country is required'),
    companyName: Yup.string()
    .required('Company name is required'),
    companyField: Yup.string()
    .required('Company field is required'),
    message: Yup.string()
    .required('Message is required'),
});
