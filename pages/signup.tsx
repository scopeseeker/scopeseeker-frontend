import {
  MainHeading,
  MyButton,
  MyDivider,
  MyIcon,
  MyImage,
  MyInput,
  MyText,
} from '@/component';
import { Box, Center, HStack, Stack, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Scope Seeker</title>
      </Head>

      <HStack h={'100vh'} w={'full'} bg={'white'}>
        {/* Left Part */}
        <VStack h={'full'} w={'30%'} p={'10px'}>
          <VStack
            w={'full'}
            h={'full'}
            bg={'brand.primary'}
            borderRadius={'8px'}
            gap={'50px'}
            p={'32px'}
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
                      color="white"
                    />
                    <MyText
                      lineHeight={'shorter'}
                      title="Seek the scope of your potential"
                      as="span"
                      fontSize={{ base: 'none', md: '10px' }}
                      display={{ base: 'none', md: 'initial' }}
                      color="white"
                    />
                  </VStack>
                </Center>
              </Link>
            </HStack>
            <Center flexDirection={'column'} w={'full'} h={'100%'} gap={'42px'}>
            <MainHeading
              title="Start your journey with Scope Seeker."
              headColor="white"
              subTitle="Take the first step towards your dream job with us where your future starts to unfold."
              paraColor="lightgray"
              align={'start'}
            />
            <MyImage alt='signup' src={'/assets/images/signup-image.png'} width={350} height={350}/>
            </Center>
          </VStack>
        </VStack>
        {/* Right part */}
        <Center w={'70%'} h={'full'} p={'20px'} gap={'28px'}>
          <VStack w={'60%'} alignItems={'flex-start'} gap={'8px'}>
            <Box>
              <MyText as="heading" title="Sign Up Into Scope Seeker" />
              <MyText as="p" title="Already have an account" />
            </Box>
            <MyInput
              type="text"
              labelTitle="Full Name"
              placeholder="Lokesh Dhakar"
              leftElement={<MyIcon name="person-circle" />}
            />
            <HStack w={'full'}>
              <MyInput
                type="email"
                labelTitle="Email Address"
                placeholder="example@gmail.com"
                leftElement={<MyIcon name="job" />}
              />
              <MyInput
                type="email"
                labelTitle="Phone Number"
                placeholder="example@gmail.com"
                leftElement={<MyIcon name="job" />}
              />
            </HStack>
            <HStack w={'full'}>
              <MyInput
                type="password"
                labelTitle="Password"
                placeholder="✶✶✶✶✶✶✶✶"
                leftElement={<MyIcon name="job" />}
              />
              <MyInput
                type="password"
                labelTitle="Confirm Password"
                placeholder="✶✶✶✶✶✶✶✶"
                leftElement={<MyIcon name="job" />}
              />
            </HStack>
            <MyButton title="Signup" w={'160px'} />
            <MyDivider />
            <VStack w={'full'}>
              <MyText as="heading" fontWeight={400} title="Or" />
              <HStack gap={'6px'}>
                <Link href={'#'}>
                  <Center
                    px={'24px'}
                    py={'6px'}
                    borderRadius={'80px'}
                    border={'1.5px solid'}
                    borderColor={'red'}
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
                    px={'24px'}
                    py={'6px'}
                    borderRadius={'80px'}
                    border={'1.5px solid'}
                    borderColor={'brand.black'}
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
      </HStack>
    </>
  );
}
