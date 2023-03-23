import Head from 'next/head';
import { Button, HStack } from '@chakra-ui/react';
import Company from '@/component/sections/Company';

export default function Home() {
  return (
    <>
      <Head>
        <title>Scope Seeker | Home</title>
        <meta
          name="description"
          content="Scope Seeker is a cutting-edge web application designed to help job seekers find their dream job with ease."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HStack w={'full'} h={'100vh'}>
      </HStack>
      <Button
              size={'sm'}
              color={'white'}
              bg={'brand.100'}
              fontWeight={'normal'}
              fontSize={'xs'}
              _hover={{ backgroundColor: 'brand.200' }}
              _active={{ backgroundColor: 'brand.300' }}
              borderRadius={20}
            >
              Sign up
            </Button>
      <Company />
    </>
  );
}
