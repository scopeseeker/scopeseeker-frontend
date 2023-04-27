import {
  Categories,
  Company,
  FAQ,
  HeroSection,
  Layout,
  Motive,
  NewsUpdate,
  Testimonials,
  Works,
} from '@/component';
import CompnayCatergories from '@/component/sections/CompanyCategory';
import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

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
        <Layout>
          <Flex flexDirection={'column'} gap={24}>
            <HeroSection />
            <Company />
            <Works />
          </Flex>
        </Layout>
        <Categories />
        <Layout>
          <Flex flexDirection={'column'} gap={24}>
            <CompnayCatergories />
            <Motive />
          </Flex>
        </Layout>
        <Testimonials />
        <Layout>
          <Flex flexDirection={'column'} gap={24}>
            <FAQ />
            <NewsUpdate />
          </Flex>
        </Layout>
      </Flex>
    </>
  );
}
