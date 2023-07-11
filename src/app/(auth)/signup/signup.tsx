'use client';
import { MyButton, MyIcon, MyInput, MyText } from '@/component';
import { OtpVerifyBox } from '@/section-components';
import { Box, Fade, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import AuthLayout from '../AuthLayout';

export default function Signup() {
  const [isOtpBoxOpen, setIsOtpBoxOpen] = useState(false);
  const { isOpen, onToggle, onClose } = useDisclosure();

  const handleClickOnBtn = () => {
    setIsOtpBoxOpen(!isOtpBoxOpen);
    onToggle();
  };

  return (
    <>
      <AuthLayout>
        <Box>
          <MyText as="heading" title="Signup Into Scope Seeker" />
          <HStack>
            <MyText as="span" title="Already have an account ?" />
            <MyText as="link" title="Login" color="brand.primary" fontWeight={500}/>
          </HStack>
        </Box>
        <VStack
          w={'full'}
          alignItems={'flex-start'}
          gap={'16px'}
          display={isOtpBoxOpen ? 'none' : 'flex'}
        >
          <MyInput
            type="text"
            labelTitle="Full Name"
            placeholder="Lokesh Dhakar"
            leftElement={<MyIcon name="personCircle" />}
            name='fullName'
          />
          <HStack
            w={'full'}
            flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
            gap={'12px'}
          >
            <MyInput
              type="email"
              labelTitle="Email Address"
              placeholder="example@gmail.com"
              leftElement={<MyIcon name="email" />}
              name='email'
            />
            <MyInput
              type="number"
              labelTitle="Phone Number"
              placeholder="XXXXXX8879"
              leftElement={<MyIcon name="phone" />}
              name='number'
            />
          </HStack>
          <HStack
            w={'full'}
            flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
            gap={'12px'}
          >
            <MyInput
              type="password"
              labelTitle="Password"
              placeholder="✶✶✶✶✶✶✶✶"
              leftElement={<MyIcon name="password" />}
              name='password'
            />
            <MyInput
              type="password"
              labelTitle="Confirm Password"
              placeholder="✶✶✶✶✶✶✶✶"
              leftElement={<MyIcon name="confirmation" />}
              name='confirmPassword'
            />
          </HStack>

          <MyButton title="Signup" px={'42px'} onClick={handleClickOnBtn} />
        </VStack>
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
