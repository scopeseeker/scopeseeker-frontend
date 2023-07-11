'use client';
import { MyButton, MyIcon, MyInput, MyText } from '@/component';
import { Box, HStack, VStack } from '@chakra-ui/react';
import AuthUperLayout from '../AuthLayout';

export default function Login() {
  return (
    <AuthUperLayout>
      <Box>
        <MyText as="heading" title={'Login to Scope Seeker'} />
        <HStack>
          <MyText as="span" title="Do not have an account ?" />
          <MyText as="link" title="Signup" color="brand.primary" fontWeight={500}/>
        </HStack>
      </Box>
      <VStack width={'100%'} alignItems={'flex-start'} gap={'18px'}>
        <MyInput
          type="email"
          labelTitle="Email Address"
          placeholder="example@gmail.com"
          leftElement={<MyIcon name="email" />}
          name='email'
        />
        <MyInput
          type="password"
          labelTitle="Password"
          placeholder="✶✶✶✶✶✶✶✶"
          leftElement={<MyIcon name="password" />}
          name='password'
        />
        <HStack>
          <MyButton title="Login" px={'42px'} />
          <MyButton title="Forget Password" variant="outline" />
        </HStack>
      </VStack>
    </AuthUperLayout>
  );
}
