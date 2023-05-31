import {
  Layout,
  MainHeading,
  MyButton,
  MyDivider,
  MyIcon,
  MyImage,
  MyInput,
  MyText,
} from '@/component';
import { Box, Center, HStack, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

export default function Signup() {
  return (
    <>
      <Head>
        <title>SignUp | Scope Seeker</title>
      </Head>

      <HStack
        h={{ base: '100%', md: '100vh' }}
        flexDirection={{ base: 'column', md: 'row' }}
        w={'full'}
        bg={'brand.white'}
        spacing={0}
      >
        {/* Left Part */}
        <VStack
            w={{ base: '100%', md: '40%', lg: '30%' }}
            h={{ base: 'fit-content', md: 'full' }}
            p={'10px'} 
        >
          <VStack
            w={'full'}
            h={'full'}
            bg={'brand.primary'}
            borderRadius={'8px'}
            gap={'24px'}
            p={'24px'}
          >
            {/*Scope Seeker Logo*/}
            <HStack w={'full'}>
              <Link href={'/'}>
                <Center gap={'8px'} mr={'10px'}>
                  <MyImage
                    src={'/assets/images/scopeseeker-logo.png'}
                    alt={'secope seeker logo'}
                    width={30}
                    height={30}
                  />
                  <VStack alignItems={'flex-start'} spacing={0}>
                    <MyText
                      lineHeight={'shorter'}
                      title="Scope Seeker"
                      as="title"
                      color="brand.white"
                    />

                    <MyText
                      lineHeight={'shorter'}
                      title="Seek the scope of your potential"
                      as="small"
                      color="brand.white"
                    />
                  </VStack>
                </Center>
              </Link>
            </HStack>
            <Center flexDirection={'column'} w={'full'} h={'100%'} gap={'32px'}>
              <MainHeading
                title="Start your journey with Scope Seeker."
                headColor="white"
                subTitle="Take the first step towards your dream job with us where your future starts to unfold."
                paraColor="lightgray"
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
        <Layout
        w={{ base: '100%', md: '60%', lg: '70%' }} h={'full'}
        >

        <Center
          w={'100%'} h={'full'} pb={{ base: '24px', md: '0px' }}
        >
          <VStack
            w={{ base: '100%', md: '90%', lg: '65%' }}
            alignItems={'flex-start'}
            gap={'10px'}
          >
            <Box>
              <MyText as="heading" title="Sign Up Into Scope Seeker" />
              <MyText as="p" title="Already have an account" />
            </Box>
            <MyInput
              type="text"
              labelTitle="Full Name"
              placeholder="Lokesh Dhakar"
              leftElement={<MyIcon name="personCircle" />}
            />
            <HStack
              w={'full'}
              flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
              gap={'4px'}
            >
              <MyInput
                type="email"
                labelTitle="Email Address"
                placeholder="example@gmail.com"
                leftElement={<MyIcon name="email" />}
              />
              <MyInput
                type="number"
                labelTitle="Phone Number"
                placeholder="XXXXXX8879"
                leftElement={<MyIcon name="phone" />}
              />
            </HStack>
            <HStack
              w={'full'}
              flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
              gap={'4px'}
            >
              <MyInput
                type="password"
                labelTitle="Password"
                placeholder="✶✶✶✶✶✶✶✶"
                leftElement={<MyIcon name="password" />}
              />
              <MyInput
                type="password"
                labelTitle="Confirm Password"
                placeholder="✶✶✶✶✶✶✶✶"
                leftElement={<MyIcon name="confirmation" />}
              />
            </HStack>
            <MyButton title="Signup" px={'42px'}/>
            <MyDivider />
            <VStack w={'full'}>
              <MyText as="heading" fontWeight={400} title="Or" />
              <HStack  gap={{ base: '6px', sm: '8px', md: '6px' }}
                  flexDirection={{ base: 'column', sm: 'row', md: 'row' }}
                  spacing={0}
                  justifyContent={'center'}
                  w={'full'} >
                <Link href={'#'}>
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
                      alt="google"
                      src={'/assets/images/company-logo/google.png'}
                      width={20}
                      height={20}
                    />
                    <MyText as="span" title="Signup with Google" />
                  </Center>
                </Link>
                <Link href={'#'}>
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
                    <MyText as="span" title="Signup with GitHub" />
                  </Center>
                </Link>
              </HStack>
            </VStack>
          </VStack>
        </Center>
        </Layout>

      </HStack>
    </>
  );
}
