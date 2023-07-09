'use client';
import { MyButton, MyIcon, MyInput, MyText } from '@/component';
import { Box, HStack } from '@chakra-ui/react';
import AuthLayout from '../AuthLayout';

export default function Login() {
  return (
    <AuthLayout>
      <Box>
        <MyText as="heading" title="Log Into Scope Seeker" />
        <MyText as="p" title="Do not have an account ?" />
      </Box>
      <MyInput
        type="email"
        labelTitle="Email Address"
        placeholder="example@gmail.com"
        leftElement={<MyIcon name="email" />}
      />
      <HStack w={'full'}>
        <MyInput
          type="password"
          labelTitle="Password"
          placeholder="✶✶✶✶✶✶✶✶"
          leftElement={<MyIcon name="password" />}
        />
      </HStack>
      <HStack>
        <MyButton title="Login" px={'42px'} />
        <MyButton title="Forget Password" />
      </HStack>
    </AuthLayout>
  );
}
