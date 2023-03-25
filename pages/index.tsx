import Head from 'next/head';
import { Button, HStack } from '@chakra-ui/react';
import FAQ from '@/component/sections/FAQ';

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
      <HStack w={'full'} h={'100vh'}></HStack>
      <FAQ />
    </>
  );
}
