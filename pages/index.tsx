import Ads from '@/component/sections/Motive';
import Categories from '@/component/sections/Categories';
import Company from '@/component/sections/Company';
import CompnayCatergories from '@/component/sections/CompnayCatergories';
import FAQ from '@/component/sections/FAQ';
import HeroSection from '@/component/sections/HeroSection';
import Testimonials from '@/component/sections/Testimonials';
import Works from '@/component/sections/Works';
import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Motive from '@/component/sections/Motive';

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
        <HeroSection />
        <Company />
        <Works />
        <Categories />
        <CompnayCatergories/>
        <Motive/>
        <Testimonials />
        <FAQ />
      </Flex>
    </>
  );
}
