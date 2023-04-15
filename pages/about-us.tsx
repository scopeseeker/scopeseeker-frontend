import Icon from '@/component/icon/Icon';
import PageHeroSection from '@/component/page-hero-section/PageHeroSection';
import {
  Box,
  Center,
  HStack,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Scope Seeker</title>
      </Head>
      <VStack w={'full'} minH={'100vh'} px={20} gap={10}>
        <PageHeroSection
          title="About Us"
          subtitle="Break all boundaries and be unstoppable with the largest community engagement platform built on gamification"
          headColor="brand.primary"
          paraColor="brand.semiblack"
          src="/assets/images/about-us.webp"
          alt="terms-of-use"
        />

        <VStack w={'full'} gap={6}>
          <VStack w={'full'} alignItems={'flex-start'}>
            <Heading fontSize={'2xl'}>What is Scope Seeker?</Heading>
            <AText
              title={
                'Scope Seeker is a job seeker website that focuses on simplifying the tech job search process. It offers a centralized platform for job seekers to access curated job listings from selected tech companies. The website presents a curated list of job openings from top tech companies in an easy-to-use format, saving job seekers time in their job search.'
              }
            />
            <AText
              title={`The platform aims to solve the problem of finding and applying for tech jobs, which can be time-consuming and overwhelming. It focuses on presenting high-quality job listings from top tech companies that match the job seeker's skills and experience. This helps job seekers to save time, reduce the chance of missing out on job opportunities, and increase their chances of finding their dream job in the tech industry.`}
            />
          </VStack>

          <VStack w={'full'} alignItems={'flex-start'}>
            <Heading fontSize={'2xl'}>Why Scope Seeker?</Heading>
            <Box>
              <UnorderedList ml={10} spacing={1}>
                <ListItem>
                  <AText title="Scope Seeker aims to solve the problem of finding and applying for tech jobs, which can be time-consuming and overwhelming." />
                </ListItem>

                <ListItem>
                  <AText title="It provides a centralized platform for job seekers to access curated job listings from multiple tech companies." />
                </ListItem>

                <ListItem>
                  <AText title="It potentially saves time and reduces the chance of missing out on job opportunities." />
                </ListItem>

                <ListItem>
                  <AText title="It may provide job seekers with higher-quality job opportunities." />
                </ListItem>
              </UnorderedList>
            </Box>
          </VStack>

          <Center w="full" flexDirection={'column'}>
            <Heading fontSize={'xl'}>What we are solving?</Heading>
            <Text>See why Scope Seeker should be your first choice</Text>

            <HStack w={'full'} mt={12}>
              <VStack w={56} h={'xs'} bg={`green.100`} borderRadius={10} pt={4}>
                <VStack w={'full'} h={'70%'} px={4} alignItems={'flex-start'}>
                  <Text
                    fontSize={'6xl'}
                    fontWeight={900}
                    lineHeight={'1'}
                    textShadow={'0px 4px 4px rgb(0,0,0, 0.6)'}
                    color={'brand.white'}
                  >
                    1
                  </Text>
                  <Text fontSize={'sm'}>
                    The overwhelming number of job listings online makes it
                    difficult for job seekers to find opportunities that match
                    their skills and preferences.
                  </Text>
                </VStack>

                <VStack
                  w={'full'}
                  h={'60%'}
                  alignItems={'flex-end'}
                  justifyContent={'flex-end'}
                >
                  <Center
                    h={'full'}
                    w={120}
                    bg={'grren.300'}
                    borderTopLeftRadius={'full'}
                    pt={2}
                    pl={2}
                  >
                    <Icon color="white" name="search" width={'50%'} />
                  </Center>
                </VStack>
              </VStack>
            </HStack>
          </Center>
        </VStack>
      </VStack>
    </>
  );
}

interface IText {
  title: string;
}

const AText = (props: IText) => {
  const { title } = props;
  return (
    <Text as={'p'} color={'brand.semiblack'}>
      {title}
    </Text>
  );
};

interface ISolveBox {
  textNumber: number;
}
