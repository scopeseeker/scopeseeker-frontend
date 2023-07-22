'use client';
import { MyButton, MyIcon, MyInput, MyText } from '@/component';
import { singupSchema } from '@/helpers/validationSchema';
import { OtpVerifyBox } from '@/section-components';
import {
  Box,
  Fade,
  FormControl,
  FormErrorMessage,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useState } from 'react';
import AuthLayout from '../AuthLayout';

export default function Signup() {
  const [isOtpBoxOpen, setIsOtpBoxOpen] = useState(false);
  const { isOpen, onToggle, onClose } = useDisclosure();

  const handleClickOnBtn = () => {
    setIsOtpBoxOpen(!isOtpBoxOpen);
    onToggle();
  };

  const handleFormSubmit = (values: any) => {
    console.log(values);
  };
  
  return (
    <>
      <AuthLayout>
        <Box>
          <MyText as="heading" title="Signup Into Scope Seeker" />
          <HStack>
            <MyText as="span" title="Already have an account ?" />
            <MyText
              as="link"
              title="Login"
              color="brand.primary"
              href="/login"
              fontWeight={500}
            />
          </HStack>
        </Box>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            number: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={singupSchema}
          onSubmit={(values) => {
            handleFormSubmit(values);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <VStack
                w={'full'}
                alignItems={'flex-start'}
                gap={'16px'}
                display={isOtpBoxOpen ? 'none' : 'flex'}
              >
                <FormControl isInvalid={!!errors.fullName && touched.fullName}>
                  <Field
                    as={MyInput}
                    name="fullName"
                    type="text"
                    labelTitle="Full Name"
                    leftElement={<MyIcon name={'personCircle'} />}
                    border={errors.fullName ? '1.5px solid red' : 'gray.200'}
                    placeholder={'Lokesh Dhar'}
                  />
                  <FormErrorMessage>{errors.fullName}</FormErrorMessage>
                </FormControl>

                <HStack
                  w={'full'}
                  flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
                  gap={'12px'}
                  alignItems={'flex-start'}
                >
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <Field
                      as={MyInput}
                      name="email"
                      type="email"
                      labelTitle="Email Address"
                      leftElement={<MyIcon name={'email'} />}
                      border={errors.email ? '1.5px solid red' : 'gray.200'}
                      placeholder={'abhije@example.com'}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.number && touched.number}>
                    <Field
                      as={MyInput}
                      name="number"
                      type="number"
                      labelTitle="Phone Number"
                      leftElement={<MyIcon name={'phone'} />}
                      border={errors.number ? '1.5px solid red' : 'gray.200'}
                      placeholder={'XXXXXX8879'}
                    />
                    <FormErrorMessage>{errors.number}</FormErrorMessage>
                  </FormControl>
                </HStack>
                <HStack
                  w={'full'}
                  flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
                  gap={'12px'}
                  alignItems={'flex-start'}
                >
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
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
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <Field
                      as={MyInput}
                      name="confirmPassword"
                      type="password"
                      labelTitle="Confirm Password"
                      leftElement={<MyIcon name={'confirmation'} />}
                      border={
                        errors.confirmPassword ? '1.5px solid red' : 'gray.200'
                      }
                      placeholder={'✶✶✶✶✶✶✶✶'}
                    />
                    <FormErrorMessage>
                      {errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>
                </HStack>

                <MyButton
                  title="Signup"
                  px={'42px'}
                  onClick={handleClickOnBtn}
                  type={'submit'}
                />
              </VStack>
            </form>
          )}
        </Formik>

        {/* OTP Div */}
        {isOtpBoxOpen && (
          <Fade in={isOpen}>
            <OtpVerifyBox
              value="abhijeetraj900@gmail.com"
              setCloseOtpBox={setIsOtpBoxOpen}
              onClose={onClose}
            />
          </Fade>
        )}
      </AuthLayout>
    </>
  );
}
