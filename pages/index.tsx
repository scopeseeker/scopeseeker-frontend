import Head from 'next/head';
import { Flex, HStack } from '@chakra-ui/react';
import Testimonials from '@/component/sections/Testimonials';
import FAQ from '@/component/sections/FAQ';
import Company from '@/component/sections/Company';
import Works from '@/component/sections/Works';
import Categories from '@/component/sections/Categories';
import NewsUpdate from '@/component/sections/NewsUpdate';

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
      <Flex flexDirection={'column'} gap={24}>

      <HStack w={'full'} h={'100vh'} bg={'green'}></HStack>
      <Company />
      <Works />
      <Categories />
      <Testimonials />
      <FAQ />
      </Flex>
    </>
  );
}
