import {
  Categories,
  Company,
  FAQ,
  Layout,
  Motive,
  MyButton,
  MyDivider,
  MyImage,
  MyText,
  NewsUpdate,
  SignupSection,
  Testimonials,
  Works,
} from '@/component';
import CompnayCatergories from '@/component/sections/FeaturedCompany';
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
      <Flex flexDirection={'column'} gap={'70px'}>
        {/* <HeroSection /> */}
        <Layout>
          <VStack w={'full'} h={'full'}>
            <HStack w={'full'} h={'full'} justifyContent={'center'}>
              <VStack>
                <Center
                  bg={'brand.transprimary'}
                  border={'1px solid'}
                  borderColor={'brand.darkgray'}
                  px={'16px'}
                  py={'2px'}
                  borderRadius={'20px'}
                >
                  <MyText as="small" title="Get All Oppournity Here 💼" />
                </Center>
                <Heading>Accelerate Your Job Hunt</Heading>
                <HStack>
                  <Heading>Save Time, Embrace All</Heading>
                  <Heading color={'brand.primary'}>Opportunities</Heading>
                  {/* <Heading>Here</Heading> */}
                </HStack>
                <MyText
                  textAlign={'center'}
                  maxW={'55%'}
                  color="brand.darkgray"
                  as="span"
                  title="Discover your path to success on our job seeker website. With a vast range of job listings and valuable resources, we provide the platform for you to shine."
                />
                <HStack>
                  <MyButton title="Explore Now" href="/jobs" />
                  <MyButton
                    title="Signup Now"
                    variant="outline"
                    href="/signup"
                  />
                </HStack>
                <HStack gap={'280px'}>
                  <Center
                    w={'180px'}
                    h={'250px'}
                    borderRadius={'0px 30px 0px 60px'}
                    justifyContent={'end'}
                    alignItems={'end'}
                    position={'relative'}
                    overflow={'hidden'}
                  >
                    <Center
                      w={'180px'}
                      h={'200px'}
                      borderRadius={'0px 60px 0px 60px'}
                      bg={'brand.primary'}
                    >
                      <MyImage
                        src={'/assets/images/main.png'}
                        alt="hero-section"
                        width={500}
                        height={500}
                        style={{ position: 'absolute', bottom: 0 }}
                      />
                    </Center>
                  </Center>

                  <Center
                    w={'180px'}
                    h={'250px'}
                    borderRadius={'30px 0px 60px 0px'}
                    justifyContent={'end'}
                    alignItems={'end'}
                    position={'relative'}
                    overflow={'hidden'}
                  >
                    <Center
                      w={'180px'}
                      h={'200px'}
                      borderRadius={'60px 0px 60px 0px'}
                      bg={'brand.primary'}
                    >
                      <MyImage
                        src={'/assets/images/women.png'}
                        alt="hero-section"
                        width={500}
                        height={500}
                        style={{ position: 'absolute', bottom: 0 }}
                      />
                    </Center>
                  </Center>
                </HStack>
              </VStack>
            </HStack>

            <HStack
              h={'72px'}
              borderRadius={10}
              bg={'brand.primary'}
              justifyContent={'center'}
              color={'brand.white'}
              px={'12px'}
              mt={'72px'}
              w={'full'}
            >
              <VStack w={'120px'} h={'full'} justifyContent={'center'}>
                <MyDivider />
              </VStack>
              <HStack>
                <MyText
                  title={`Say Goodbye to Job Search Stress: Streamline Your Hunt with the Ultimate Jobseeker Platform!`}
                  as={'span'}
                  color="brand.white"
                  textAlign={'center'}
                />
              </HStack>
              <VStack w={'120px'} h={'full'} justifyContent={'center'}>
                <MyDivider />
              </VStack>
            </HStack>
          </VStack>
        </Layout>

        <Company />
        <Works />
        <Categories />
        <CompnayCatergories />
        <Motive />
        <Testimonials />
        <FAQ />
        <SignupSection />
        <NewsUpdate />
      </Flex>
    </>
  );
}
