'use client';
import { MainHeading, MyDivider, MyImage, MyText } from '@/component';
import { authPageContent } from '@/constant/constantFields';
import { useCustomToast } from '@/helpers/toast';
import { ScopeSeekerLogo } from '@/section-components';
import { Button, Center, HStack, VStack } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toast = useCustomToast();

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      await signIn('google', {
        callbackUrl: 'http://localhost:3000/dashboard',
      });
    } catch (error: any) {
      console.log(error);
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <HStack
      minH={{ base: '100%', md: '100vh' }}
      flexDirection={{ base: 'column', md: 'row' }}
      w={'full'}
      bg={'brand.white'}
      spacing={0}
    >
      {/* Left Part */}
      <VStack
        w={{ base: '100%', md: '40%', lg: '30%' }}
        h={{ base: 'fit-content', md: '100vh' }}
        p={'10px'}
      >
        <VStack
          w={'full'}
          h={'full'}
          bg={'brand.primary'}
          borderRadius={'8px'}
          gap={'24px'}
          p={'24px'}
          alignItems={'start'}
        >
          <ScopeSeekerLogo color="brand.white" />

          <Center flexDirection={'column'} w={'full'} pt={'52px'} h={'100%'} gap={'12px'} justifyContent={'space-between'}>
            <MainHeading
              title={authPageContent.login.title}
              headColor="brand.white"
              subTitle={authPageContent.login.description}
              paraColor="brand.lightgray"
              align={'start'}
            />
            <Center display={{ base: 'none', md: 'flex' }}>
              <MyImage
                alt="signup"
                src={'/assets/images/signup-image.png'}
                width={250}
                height={250}
              />
            </Center>
          </Center>
        </VStack>
      </VStack>

      {/* Right part */}
      <Center w={{ base: '100%', md: '60%', lg: '70%' }} h={'full'}>
        <VStack
          gap={'22px'}
          alignItems={'flex-start'}
          w={{ base: 'full', lg: '80%' }}
          py="32px"
          px={{ base: '26px', md: '28px', lg: '92px', '2xl': '212px' }}
        >
          {children}
          <MyDivider />
          <VStack w={'full'}>
            <MyText as="heading" fontWeight={400} title="Or" />
            <HStack
              gap={{ base: '6px', sm: '8px', md: '6px' }}
              flexDirection={{ base: 'column', sm: 'row', md: 'row' }}
              spacing={0}
              justifyContent={'center'}
              w={'full'}
            >
              <Center
                px={{ base: '52px', sm: '24px' }}
                py={{ base: '12px', sm: '8px' }}
                borderRadius={'80px'}
                border={'1.5px solid'}
                borderColor={'brand.darkgray'}
                bg={'brand.aliceblue'}
                gap={'10px'}
                cursor={'pointer'}
                onClick={handleGoogleLogin}
                as={Button}
                isLoading={isLoading}
              >
                <MyImage
                  alt="google"
                  src={'/assets/images/company-logo/google.png'}
                  width={20}
                  height={20}
                />
                <MyText
                  as="span"
                  title="Login with Google"
                  whitespace="nowrap"
                />
              </Center>
              <Center
                px={{ base: '52px', sm: '24px' }}
                py={{ base: '12px', sm: '8px' }}
                borderRadius={'80px'}
                border={'1.5px solid'}
                borderColor={'brand.darkgray'}
                bg={'brand.aliceblue'}
                gap={'10px'}
                cursor={'pointer'}
              >
                <MyImage
                  alt="github"
                  src={'/assets/images/company-logo/github.png'}
                  width={20}
                  height={20}
                />
                <MyText as="span" title="Login with GitHub" />
              </Center>
            </HStack>
          </VStack>
        </VStack>
      </Center>
    </HStack>
  );
}
