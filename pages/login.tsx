import { MyButton, MyImage, MyInput } from '@/component';
import {
  Box,
  Center,
  Flex,
  FormControl,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Scope Seeker</title>
      </Head>
      <Flex w={'full'} h={'100vh'}>
        <VStack w={'60%'} h={'full'}>
          <Center w={'full'} h={'full'} flexDirection={'column'}>
            <VStack maxW={'60%'}>
              <Heading w={'full'} fontWeight={'bold'}>
                SignIn to
              </Heading>
              <Heading as={'span'} w={'full'} color={'brand.primary'}>
                Scope Seeker
              </Heading>
              <Flex
                w={'full'}
                minH={36}
                gap={12}
                alignItems={'flex-start'}
                pt={5}
              >
                <Flex flexDirection={'column'}>
                  <Text>
                    Don&apos;t have an account?
                    <Link href={'/signup'}>
                      <Text
                        as={'span'}
                        color={'brand.primary'}
                        fontWeight={'semibold'}
                      >
                        &nbsp;SignUp
                      </Text>
                    </Link>
                  </Text>
                </Flex>
                <Box w={'30%'}>
                  <MyImage
                    src={'/assets/svgs/hero-section.svg'}
                    alt={'login'}
                    width={600}
                    height={400}
                  />
                </Box>
              </Flex>
            </VStack>
          </Center>
        </VStack>

        <VStack w={'40%'} h={'full'}>
          <HStack w={'full'} h={'full'}>
            <VStack gap={7} w={'2xs'}>
              <VStack w={'full'}>
                <VStack w={'full'} gap={1}>
                  <FormControl>
                    <MyInput
                      labelTitle="Email Address"
                      type="email"
                      placeholder="example@gmail.com"
                    />
                    <MyInput
                      labelTitle="Password"
                      type="password"
                      placeholder="⋆⋆⋆⋆⋆⋆⋆⋆"
                      mt={4}
                    />
                  </FormControl>
                </VStack>

                <Text
                  w={'full'}
                  fontSize={10}
                  textAlign={'end'}
                  pr={3}
                  cursor={'pointer'}
                >
                  Forgot Password?
                </Text>
                <VStack w={'full'}>
                  <MyButton
                    size={'md'}
                    w={'full'}
                    fontSize="sm"
                    title="Sign In"
                    mt={5}
                  />
                </VStack>
              </VStack>

              <Center gap={2}>
                <Box w={16} h={'.8px'} bg={'lightgray'}></Box>
                <Text fontSize={12} color={'gray'}>
                  or continue with
                </Text>
                <Box w={16} h={'.8px'} bg={'lightgray'}></Box>
              </Center>

              <HStack gap={2}>
                <Center
                  w={16}
                  h={12}
                  borderRadius={'md'}
                  border="1px"
                  borderColor="gray.300"
                  cursor={'pointer'}
                >
                  <MyImage
                    src={'/assets/images/company-logo/google.png'}
                    alt={'google logo'}
                    width={24}
                    height={24}
                  />
                </Center>
                <Center
                  w={16}
                  h={12}
                  borderRadius={'md'}
                  border="1px"
                  borderColor="gray.300"
                  cursor={'pointer'}
                >
                  <MyImage
                    src={'/assets/images/company-logo/github.png'}
                    alt={'github logo'}
                    width={24}
                    height={24}
                  />
                </Center>
                <Center
                  w={16}
                  h={12}
                  borderRadius={'md'}
                  border="1px"
                  borderColor="gray.300"
                  cursor={'pointer'}
                >
                  <MyImage
                    src={'/assets/images/company-logo/linkedin.png'}
                    alt={'linkedin logo'}
                    width={24}
                    height={24}
                  />
                </Center>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </Flex>
    </>
  );
}
