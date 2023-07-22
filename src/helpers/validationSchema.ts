import * as Yup from 'yup';
const emailSchema = Yup.string()
  .email('Invalid email address')
  .required('Email is required')
  .max(50, 'Email must not exceed 50 characters');

const passwordSchema = Yup.string()
  .required('Password is required')
  .min(6, 'Password must be at least 6 characters')
  .max(20, 'Password must not exceed 20 characters')
  .matches(/^[A-Za-z0-9]+$/, 'Password must contain only letters and numbers');

const confirmPasswordSchema = Yup.string()
  .required('Confirm Password is required')
  .oneOf([Yup.ref('password')], 'Passwords must match');

const fullNameSchema = Yup.string()
  .matches(/^[A-Za-z\s]+$/, 'Invalid fullname')
  .required('Full Name is required')
  .max(50, 'Full Name must not exceed 50 characters');

const numberSchema = Yup.string()
  .min(10, 'Phone number must be at least 10 characters')
  .max(10, 'Phone number must not exceed 10 characters')
  .matches(/^[0-9]+$/, 'Invalid phone number');

const stringSchema = (fieldName: string, maxChars: number) =>
  Yup.string()
    .required(`${fieldName} is required`)
    .max(maxChars, `${fieldName} must not exceed ${maxChars} characters`);

export const loginSchema = Yup.object({
  email: emailSchema,
  password: passwordSchema,
});

export const singupSchema = Yup.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema,
  fullName: fullNameSchema,
  number: numberSchema.required('Phone number is required'),
});

export const requestCompanySchema = Yup.object({
  fullName: fullNameSchema,
  email: emailSchema,
  number: numberSchema,
  companyName: stringSchema('Company name', 50),
  message: stringSchema('Message', 500),
});

export const editProfileSchema = Yup.object({
  fullName: fullNameSchema,
  email: emailSchema,
  phone: numberSchema.required('Phone number is required'),
  country: stringSchema('Country', 50),
  organisation: stringSchema('Organization', 50),
  city: stringSchema('City', 50),
  gender: Yup.string().required('Please select a gender'),
  userType: Yup.string().required('Please select a user type'),
  domain: Yup.string().required('Please select a domain'),
  course: Yup.string().required('Please select a course'),
  courseSpecialization: Yup.string().required(
    'Please select a course specialization',
  ),
  yearOfGraduation: Yup.string().required(
    'Please enter the year of graduation',
  ),
  summary: Yup.string().max(500, 'Summary must not exceed 500 characters'),
});

export const socialLinksSchema = Yup.object({
  facebookUrl: Yup.string().url('Invalid URL'),
  linkedin: Yup.string().url('Invalid URL'),
  instagram: Yup.string().url('Invalid URL'),
  github: Yup.string().url('Invalid URL'),
});

export const workexpericenceSchema = Yup.object({
  designation: stringSchema('Designation', 50),
  sector: stringSchema('Sector', 50),
  fromYear: Yup.string().required('Please select a year'),
  toYear: Yup.string().required('Please select a year'),
  organisation: stringSchema('Organisation', 50),
  country: stringSchema('Country', 50),
  state: stringSchema('State', 50),
  city: stringSchema('City', 50),
});

export const educationSchema = Yup.object({
  qualification: stringSchema('Qualification', 50),
  institute: stringSchema('Institute', 50),
  degree: stringSchema('Degree', 50),
  percentage: Yup.number().required('Percentage/CGPA is required'),
  fromYear: Yup.string().required('Please select a year'),
  toYear: Yup.string().required('Please select a year'),
  specialization: stringSchema('Specialization', 50),
  country: stringSchema('Country', 50),
  state: stringSchema('State', 50),
  city: stringSchema('City', 50),
  other: stringSchema('Other', 50),

  // percentage: Yup.number()
  //   .required('Percentage is required')
  //   .min(0, 'Percentage must be greater than or equal to 0')
  //   .max(100, 'Percentage must be less than or equal to 100'),
  // cgpa: Yup.number()
  //   .required('CGPA is required')
  //   .min(0, 'CGPA must be greater than or equal to 0')
  //   .max(10, 'CGPA must be less than or equal to 10')
  //   .test('is-decimal', 'CGPA must be a decimal value', (value) => {
  //     if (value) {
  //       return (
  //         Number.isInteger(value) || value.toString().split('.')[1]?.length > 0
  //       );
  //     }
  //     return true;
  //   }),

  //   fromYear: Yup.number()
  //   .typeError('From (Year) must be a valid number')
  //   .required('From (Year) is required'),
  // toYear: Yup.number()
  //   .typeError('To (Year) must be a valid number')
  //   .required('To (Year) is required')
  //   .min(Yup.ref('fromYear'), 'To (Year) must be greater than From (Year)'),
});
