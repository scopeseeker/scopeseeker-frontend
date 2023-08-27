'use client';
import { MyButton, MyIcon, MyInput, MyText } from '@/component';
import { useCustomToast } from '@/helpers/toast';
import { loginSchema } from '@/helpers/validationSchema';
import {
  Box,
  FormControl,
  FormErrorMessage,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import AuthUperLayout from '../AuthLayout';

export default function Login() {
  const toast = useCustomToast();
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  useEffect(() => {
    if (error) {
      toast({
        status: 'error',
        title: 'Something went wrong.',
        description: error,
      });
    }
  }, []);

  return (
    <AuthUperLayout>
      <Box>
        <MyText as="heading" title={'Login to Scope Seeker'} />
        <HStack>
          <MyText as="span" title="Do not have an account ?" />
          <MyText
            as="link"
            title="Signup"
            color="brand.primary"
            href="/signup"
            fontWeight={500}
          />
        </HStack>
      </Box>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <VStack width={'100%'} alignItems={'flex-start'} gap={'18px'}>
              <FormControl isInvalid={!!errors.email && touched.email}>
                <Field
                  as={MyInput}
                  name="email"
                  type="email"
                  labelTitle="Email"
                  leftElement={<MyIcon name={'email'} />}
                  border={errors.email ? '1.5px solid red' : 'gray.200'}
                  placeholder={'example@gmail.com'}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password && touched.password}>
                <Field
                  as={MyInput}
                  name="password"
                  type="password"
                  labelTitle="Password"
                  leftElement={<MyIcon name={'password'} />}
                  border={errors.password ? '1.5px solid red' : 'gray.200'}
                  placeholder={'✶✶✶✶✶✶✶✶'}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <HStack>
                <MyButton title="Login" />
                <MyButton title="Forget Password" variant="outline" />
              </HStack>
            </VStack>
          </form>
        )}
      </Formik>
    </AuthUperLayout>
  );
}
