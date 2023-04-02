import MyButton from '@/component/button/MyButton';
import MyInput from '@/component/inputs/MyInput';
import {
  Box,
  Center,
  Checkbox,
  Flex,
  FormControl,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEventHandler, useState } from 'react';

export default function Signup() {
  const [nextStep, setnextStep] = useState(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    setnextStep(true);
  };
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
                SignUp to
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
                  <Image src={require('../public/login.png')} alt={'ss-log'} />
                </Box>
              </Flex>
            </VStack>
          </Center>
        </VStack>

        <Center justifyContent={'flex-start'} w={'40%'} h={'full'}>
          <VStack alignItems={'flex-start'}>
            <VStack gap={7} w={'2xs'}>
              <VStack w={'full'}>
                <VStack w={'full'}>
                  <FormControl>
                    {!nextStep && (
                      <>
                        <MyInput
                          labelTitle="Full Name"
                          type="name"
                          placeholder="Abhishek Kumar"
                        />
                        <MyInput
                          labelTitle="Email Address"
                          type="email"
                          placeholder="example@gmail.com"
                          mt={4}
                        />
                      </>
                    )}
                    {nextStep && (
                      <>
                        <MyInput
                          labelTitle="Create Your Password"
                          type="name"
                          placeholder="⋆⋆⋆⋆⋆⋆⋆⋆"
                        />
                        <MyInput
                          labelTitle="Re-enter your password"
                          type="email"
                          placeholder="⋆⋆⋆⋆⋆⋆⋆⋆"
                          mt={4}
                        />
                      </>
                    )}
                  </FormControl>
                </VStack>
              </VStack>
            </VStack>

            {nextStep && (
              <VStack pt={3}>
                <HStack w={'full'}>
                  <Checkbox size={'sm'} defaultChecked />
                  <Text as={'span'} fontSize={'2xs'} lineHeight={1}>
                    Send me important updates on Email{' '}
                    <Text as={'span'} fontSize={'2xs'}>
                      (once in a week)
                    </Text>{' '}
                    & Whatsapp
                  </Text>
                </HStack>
              </VStack>
            )}

            <VStack gap={7} w={'2xs'}>
              <VStack onClick={handleClick} w={'full'}>
                {nextStep &&
                <Text as={'span'} fontSize={'2xs'}>
                  By signing up, you agree to our{' '}
                  <Link
                    href={'/terms-and-consitions'}
                    style={{ color: '#1A75E8' }}
                    >
                    Terms and Conditions.
                  </Link>
                </Text>
                }
                <MyButton
                  size={'md'}
                  w={'full'}
                  fontSize="sm"
                  title={nextStep ? 'Singup' : 'Next Step'}
                  mt={5}
                />
              </VStack>

              <Center gap={2}>
                <Box w={16} h={'.8px'} bg={'lightgrey'}></Box>
                <Text fontSize={12} color={'grey'}>
                  or continue with
                </Text>
                <Box w={16} h={'.8px'} bg={'lightgrey'}></Box>
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
                  <Image
                    src={require('../public/google.png')}
                    alt={'google'}
                    style={{ width: '40%' }}
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
                  <Image
                    src={require('../public/github.png')}
                    alt={'google'}
                    style={{ width: '40%' }}
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
                  <Image
                    src={require('../public/linkedin.png')}
                    alt={'google'}
                    style={{ width: '40%' }}
                  />
                </Center>
              </HStack>
            </VStack>
          </VStack>
        </Center>
      </Flex>
    </>
  );
}
