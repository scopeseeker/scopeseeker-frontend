'use client';
import { MyButton, MyIcon, MyInput, MyText } from '@/component';
import { Box, HStack, VStack } from '@chakra-ui/react';
import AuthLayout from '../AuthLayout';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Login() {
  const initialValues = {
    email: '',
    password: '',
  };

  const validate = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be atleast 6 Character')
      .required('Password is required'),
  });

  const handleSubmit = (Values: any) => {
    console.log(Values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={handleSubmit}
    >
      <Form>
        <AuthLayout>
          <Box>
            <MyText as="heading" title="Log Into Scope Seeker" />
            <MyText as="p" title="Do not have an account ?" />
          </Box>
          <Field name="email">
            {({ field }: any) => (
              <VStack w={'full'} alignItems={'flex-start'}>
                <MyInput
                  type="email"
                  labelTitle="Email Address"
                  placeholder="example@gmail.com"
                  leftElement={<MyIcon name="email" />}
                  {...field}
                />
                <ErrorMessage name="email" />
              </VStack>
            )}
          </Field>

          <HStack w={'full'}>
            <Field name="password">
              {({ field }: any) => (
                <VStack w={'full'} alignItems={'flex-start'}>
                  <MyInput
                    type="password"
                    labelTitle="Password"
                    placeholder="✶✶✶✶✶✶✶✶"
                    leftElement={<MyIcon name="password" />}
                    {...field}
                  />
                  <ErrorMessage name="password" />
                </VStack>
              )}
            </Field>
          </HStack>
          <HStack>
            <MyButton title="Login" px={'42px'} />
            <MyButton title="Forget Password" />
          </HStack>
        </AuthLayout>
      </Form>
    </Formik>
  );
}
