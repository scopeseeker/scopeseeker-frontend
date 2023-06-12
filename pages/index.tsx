import {
  CompanyList,
  FAQ,
  FeaturedCompany,
  HeroSection,
  HowWorks,
  Layout,
  MoreIntroSection,
  MyButton,
  MyDivider,
  MyImage,
  MyText,
  PopularCategories,
  SignupSection,
  Subscribe,
  Testimonials,
} from '@/component';
import { Center, Flex, HStack, Heading, VStack } from '@chakra-ui/react';
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
      <Flex flexDirection={'column'} gap={'72px'}>
        <HeroSection />
        <CompanyList />
        <HowWorks />
        <PopularCategories />
        <FeaturedCompany />
        <MoreIntroSection />
        <Testimonials />
        <FAQ />
        <SignupSection />
        <Subscribe />
      </Flex>
    </>
  );
}
