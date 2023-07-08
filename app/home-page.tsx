'use client';
import {
  CompanyList,
  FAQ,
  FeaturedCompany,
  HeroSection,
  HowWorks,
  MoreIntroSection,
  PopularCategories,
  SignupSection,
  Subscribe,
  Testimonials,
} from '@/section-components';
import { Flex } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <>
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
