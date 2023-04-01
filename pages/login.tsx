import MyButton from '@/component/button/MyButton';
import MyInput from '@/component/inputs/MyInput';
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
import Image from 'next/image';

export default function Home() {
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
                Sign In to{' '}
                <Heading w={'full'} color={'brand.100'}>
                  Scope Seeker
                </Heading>
              </Heading>
              <Flex
                w={'full'}
                minH={36}
                gap={12}
                alignItems={'flex-start'}
                pt={5}
              >
                <Text>
                  If you don&apos;t have an account{' '}
                  <Text>
                    you can{' '}
                    <Text
                      as={'span'}
                      color={'brand.primary'}
                      fontWeight={'semibold'}
                      cursor={'pointer'}
                    >
                      Register here!
                    </Text>
                  </Text>
                </Text>
                <Box w={'30%'}>
                  <Image src={require('../public/login.png')} alt={'ss-log'} />
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
          </HStack>
        </VStack>
      </Flex>
    </>
  );
}
