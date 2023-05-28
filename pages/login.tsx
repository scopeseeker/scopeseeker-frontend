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

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Scope Seeker</title>
      </Head>

      <HStack
        h={'100%'}
        flexDirection={{ base: 'column', md: 'row' }}
        w={'full'}
        bg={'white'}
      >
        {/* Left Part */}
        <VStack
          h={'full'}
          w={{ base: '100%', md: '50%', lg: '30%' }}
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
            <Center flexDirection={'column'} w={'full'} h={'100%'} gap={'32px'}>
              <MainHeading
                title="Experience the Future of Job with Scope Seeker"
                headColor="white"
                subTitle="Simplify, Streamline, and Succeed with Our Next-Generation Platform"
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
        <Layout w={{ base: '100%', md: 'full', lg: '70%' }}>
          <Center
            w={'100%'}
            h={'full'}
          >
            <VStack
              w={{ base: '100%', md: '60%' }}
              alignItems={'flex-start'}
              gap={'10px'}
            >
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
                <MyButton title="Login" />
                <MyButton title="Forget Password" />
              </HStack>
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
                      <MyText as="span" title="Login with Google" />
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
                      <MyText as="span" title="Login with GitHub" />
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
