import MyIcon, { IconNameType } from '@/component/icon/MyIcon';
import MyImage from '@/component/image/MyImage';
import Layout from '@/component/layout/Layout';
import MainHeading from '@/component/main-heading/MainHeading';
import PageHeroSection from '@/component/page-hero-section/PageHeroSection';
import MyText from '@/component/text/MyText';
import {
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  ListItem,
  OrderedList,
  Text,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Scope Seeker</title>
      </Head>
      <PageHeroSection
        title="About Us"
        subtitle="Break all boundaries and be unstoppable with the largest community engagement platform built on gamification"
        src="/assets/images/about-us.png"
        alt="terms-of-use"
      />
      <Layout>
        <VStack w={'full'} minH={'100vh'} gap={10}>
          <VStack w={'full'} gap={12}>
            <VStack w={'full'} alignItems={'flex-start'}>
              <MyText as="heading" title="What is Scope Seeker?" />
              <AText
                title={
                  'Scope Seeker is a job seeker website that focuses on simplifying the tech job search process. It offers a centralized platform for job seekers to access curated job listings from selected tech companies. The website presents a curated list of job openings from top tech companies in an easy-to-use format, saving job seekers time in their job search.'
                }
              />
              <AText
                title={`The platform aims to solve the problem of finding and applying for tech jobs, which can be time-consuming and overwhelming. It focuses on presenting high-quality job listings from top tech companies that match the job seeker's skills and experience. This helps job seekers to save time, reduce the chance of missing out on job opportunities, and increase their chances of finding their dream job in the tech industry.`}
              />
            </VStack>

            {/* What we are solving part  */}
            <Flex w="full" pt={8} flexWrap={'wrap'}>
              <MyText as="heading" title="What we are solving?" />

              <HStack w={'full'} flexDirection={{base: 'column', md: 'row'}} alignItems={'flex-start'} mt={6} gap={5} bg={'blue'}>
                <WhyBox
                  bg={'red'}
                  color={'white'}
                  cardNumber={1}
                  cardText="The overwhelming number of job listings online makes it
                difficult for job seekers to find opportunities that match
                their skills and preferences."
                iconName='search'
                />

                <WhyBox
                  bg={'green'}
                  color={'white'}
                  cardNumber={2}
                  cardText="Visiting multiple job listing websites and career pages of various companies is time-consuming and inefficient."
                  iconName="global"
                />

                <WhyBox
                  bg={'yellow'}
                  color={'white'}
                  cardNumber={3}
                  cardText="Job seekers may miss out on relevant job opportunities if they do not have the time to keep checking for new listings."
                  iconName="time"
                />

                <WhyBox
                  bg={'blue'}
                  color={'white'}
                  cardNumber={4}
                  cardText="Not all job listings are of high quality or relevant to the job seeker's skills, which can lead to frustration and wasted time."
                  iconName="pages"
                />

                <WhyBox
                  bg={'gray'}
                  color={'white'}
                  cardNumber={5}
                  cardText="There is a need for a centralized platform that makes it easier for job seekers to find relevant job opportunities and trust the quality of the listings."
                  iconName="job"
                />
              </HStack>
            </Flex>

            {/* How we work part */}
            <VStack w={'full'} alignItems={'flex-start'}>
              <MyText as="heading" title="How we work?" />
              <Box>
                <OrderedList ml={{base: 5, md: 10}} spacing={1}>
                  <ListItem>
                    <AText title="We carefully select tech companies based on their reputation, size, and growth potential." />
                  </ListItem>

                  <ListItem>
                    <AText title="We evaluate each company's history, turnover, and authenticity to ensure that they are trustworthy and have a good reputation in the tech industry." />
                  </ListItem>

                  <ListItem>
                    <AText title="We focus specifically on the career pages of selected tech companies for tech job listings, continuously monitoring them to ensure that we present the latest and most accurate job opportunities to our users." />
                  </ListItem>

                  <ListItem>
                    <AText title="Job seekers can search and apply for these jobs directly on the Scope Seeker website, potentially saving them time in their job search." />
                  </ListItem>

                  <ListItem>
                    <AText title="By presenting relevant and trustworthy job opportunities in an easy-to-use format, we aim to save job seekers time and increase their chances of finding their dream job in the tech industry." />
                  </ListItem>
                </OrderedList>
              </Box>
            </VStack>

            {/* Example part */}
            <VStack w={'full'} px={20} minH={'50vw'} gap={10} bg={'yellow.300'}>
              <VStack>
                <MainHeading
                  title="See ScopeSeeker in Action with This Example"
                  subTitle="Here's a quick example to demonstrate how ScopeSeeker can help simplify the job search process."
                />
              </VStack>

              <VStack w={'full'} gap={4}>
                <HStack
                  w={'full'}
                  justifyContent={'space-between'}
                  borderWidth="2px"
                  borderColor={'red.300'}
                  borderRadius="full"
                  pr={12}
                >
                  <Center
                    h={'3xs'}
                    w={'3xs'}
                    borderRadius={'full'}
                    bg={'red.50'}
                    p={8}
                  >
                    <MyImage
                      alt="example-aboutus"
                      src={'/assets/images/privacy-policy.webp'}
                      width={200}
                      height={200}
                    />
                  </Center>
                  <Box w={'70%'}>
                    <MyText
                      as="p"
                      title=" Meet Lokesh, a B.Tech student with a strong skill set who
                  often misses out on job opportunities because he doesn't
                  have the time to search multiple job boards or visit verified
                  career pages. He feels overwhelmed by the sheer number of job
                  listings online and struggles to find job opportunities that
                  are a good fit for him."
                    />
                  </Box>
                </HStack>
                <HStack
                  w={'full'}
                  justifyContent={'space-between'}
                  flexDirection={'row-reverse'}
                  borderWidth="2px"
                  borderColor={'green.400'}
                  borderRadius="full"
                  pl={12}
                >
                  <Center
                    h={'3xs'}
                    w={'3xs'}
                    borderRadius={'full'}
                    bg={'green.50'}
                    p={8}
                  >
                    <MyImage
                      alt="example-aboutus"
                      src={'/assets/images/privacy-policy.webp'}
                      width={200}
                      height={200}
                    />
                  </Center>
                  <Box w={'70%'}>
                    <MyText
                      as="p"
                      title="This is where Scope Seeker comes in. With Scope Seeker, Lokesh
                  can easily search for job opportunities that match his skills
                  and preferences in one place, saving him time and effort. Our
                  platform continuously monitors the career pages of selected
                  tech companies to ensure that we present the latest and most
                  accurate job opportunities to our users, so Lokesh never has
                  to worry about missing out on a relevant job opportunity."
                    />
                  </Box>
                </HStack>
                <HStack
                  w={'full'}
                  justifyContent={'space-between'}
                  borderWidth="2px"
                  borderColor={'yellow.300'}
                  borderRadius="full"
                  pr={12}
                >
                  <Center
                    h={'3xs'}
                    w={'3xs'}
                    borderRadius={'full'}
                    bg={'yellow.50'}
                    p={8}
                  >
                    <MyImage
                      alt="example-aboutus"
                      src={'/assets/images/privacy-policy.webp'}
                      width={200}
                      height={200}
                    />
                  </Center>
                  <Box w={'70%'}>
                    <MyText
                      as="p"
                      title="In addition, Scope Seeker verifies each job listing to ensure
                    that it is high-quality and relevant to its users, giving
                    Lokesh the confidence to apply to jobs that are the best fit
                    for him. Overall, by using Scope Seeker, Lokesh can increase
                    his chances of finding his dream job in the tech industry
                    while trusting that the job listings on our platform are
                    high-quality and relevant to his skills."
                    />
                  </Box>
                </HStack>
                <HStack
                  w={'full'}
                  justifyContent={'space-between'}
                  flexDirection={'row-reverse'}
                  borderWidth="2px"
                  borderColor={'blue.300'}
                  borderRadius="full"
                  pl={12}
                >
                  <Center
                    h={'3xs'}
                    w={'3xs'}
                    borderRadius={'full'}
                    bg={'blue.50'}
                    p={8}
                  >
                    <MyImage
                      alt="example-aboutus"
                      src={'/assets/images/privacy-policy.webp'}
                      width={200}
                      height={200}
                    />
                  </Center>
                  <Box w={'70%'}>
                    <MyText
                      as="p"
                      title="Overall, by using Scope Seeker, Lokesh can increase his
                    chances of finding his dream job in the tech industry while
                    trusting that the job listings on our platform are
                    high-quality and relevant to his skills."
                    />
                  </Box>
                </HStack>
              </VStack>
            </VStack>

              {/* <VStack>
                <MainHeading
                  title="The People Who Make It Happen"
                  align="flex-start"
                  subTitle="Meet the talented and dedicated individuals who make our business thrive. Our amazing team is the driving force behind our success, and we're proud to introduce them to you."
                />
              </VStack> */}

            {/* Happen part */}
              <VStack alignItems={'flex-start'} w={'full'}>
                <MyText as="heading" title="The People Who Make It Happen" />
                <MyText
                  as={'p'}
                  title={`Meet the Scope Seeker team, the people behind the innovative
                    tech job seeker platform.`}
                />
                <MyText
                  as={'p'}
                  title={`Lokesh Dhakar, our founder, is a seasoned full-stack developer
                    with a passion for helping job seekers find their dream job
                    and creating a more inclusive job market.`}
                />
                <MyText
                  as={'p'}
                  title={`Abhijeet Raj and Abhishek Kumar, our co-founders, are both
                    front-end web developers. Their dedication and hard work have
                    been instrumental in making Scope Seeker a success.`}
                />
                <MyText
                  as={'p'}
                  title={`Together, our team is committed to building a platform that
                    empowers job seekers and makes the hiring process more
                    efficient and transparent. We are always striving to improve
                    our services and provide the best possible experience for our
                    users.`}
                />
              </VStack>

            {/* Team memberPhoto part  */}
            <HStack w={'full'} flexDirection={{base: 'column', md: 'row', lg: 'row'}} gap={{base: 8, md: 0, lg: 0}}>
                <VStack w={'full'} gap={1}>
                  <Center
                    h={{base: 250, md: 200}}
                    w={{base: 250, md: 200}}
                    borderRadius={'full'}
                    bg={'blue.400'}
                    overflow={'hidden'}
                  >
                    <MyImage src={'/assets/images/p12.jpg'} width={200} height={200} alt='picture'/>
                  </Center>

                  <VStack spacing={0}>
                    <MyText as="heading" title={'Lokesh Dhakar'} />
                    <MyText as={'span'} title={`Founder`} />
                  </VStack>

                  <HStack cursor={'pointer'}>
                    <IconButton
                      aria-label="social-meida"
                      p={2}
                      color={'green.600'}
                      icon={<MyIcon name={'whatsapp'} height="20" width="20" />}
                      size={'sm'}
                    />
                    <IconButton
                      aria-label="social-meida"
                      p={2}
                      color={'blue.700'}
                      icon={<MyIcon name={'linkedin'} height="20" width="20" />}
                      size={'sm'}
                    />
                    <IconButton
                      aria-label="social-meida"
                      p={2}
                      color={'pink.500'}
                      icon={
                        <MyIcon name={'instagram'} height="20" width="20" />
                      }
                      size={'sm'}
                    />
                  </HStack>
                </VStack>

                <VStack w={'full'} gap={1}>
                  <Center
                    h={{base: 250, md: 200}}
                    w={{base: 250, md: 200}}
                    borderRadius={'full'}
                    bg={'yellow.400'}
                    overflow={'hidden'}
                  >
                    <MyImage src={'/assets/images/p12.jpg'} width={200} height={200} alt='picture'/>
                  </Center>

                  <VStack spacing={0}>
                    <MyText as="heading" title={'Abhijeet Raj'} />
                    <MyText as={'span'} title={`Co-Founder`} />
                  </VStack>

                  <HStack cursor={'pointer'}>
                    <IconButton
                      aria-label="social-meida"
                      p={2}
                      color={'green.600'}
                      icon={<MyIcon name={'whatsapp'} height="20" width="20" />}
                      size={'sm'}
                    />
                    <IconButton
                      aria-label="social-meida"
                      p={2}
                      color={'blue.700'}
                      icon={<MyIcon name={'linkedin'} height="20" width="20" />}
                      size={'sm'}
                    />
                    <IconButton
                      aria-label="social-meida"
                      p={2}
                      color={'pink.500'}
                      icon={
                        <MyIcon name={'instagram'} height="20" width="20" />
                      }
                      size={'sm'}
                    />
                  </HStack>
                </VStack>

                <VStack w={'full'} gap={1}>
                  <Center
                    h={{base: 250, md: 200}}
                    w={{base: 250, md: 200}}
                    borderRadius={'full'}
                    bg={'green.400'}
                    overflow={'hidden'}
                  >
                    <MyImage src={'/assets/images/p12.jpg'} width={200} height={200} alt='picture'/>
                  </Center>

                  <VStack spacing={0}>
                    <MyText as="heading" title={'Abhishek Kumar'} />
                    <MyText as={'span'} title={`Co-Founder`} />
                  </VStack>

                  <HStack cursor={'pointer'}>
                    <IconButton
                      aria-label="social-meida"
                      p={2}
                      color={'green.600'}
                      icon={<MyIcon name={'whatsapp'} height="20" width="20" />}
                      size={'sm'}
                    />
                    <IconButton
                      aria-label="social-meida"
                      p={2}
                      color={'blue.700'}
                      icon={<MyIcon name={'linkedin'} height="20" width="20" />}
                      size={'sm'}
                    />
                    <IconButton
                      aria-label="social-meida"
                      p={2}
                      color={'pink.500'}
                      icon={
                        <MyIcon name={'instagram'} height="20" width="20" />
                      }
                      size={'sm'}
                    />
                  </HStack>
                </VStack>
            </HStack>
          </VStack>
        </VStack>
      </Layout>
    </>
  );
}

interface IText {
  title: string;
}

const AText = (props: IText) => {
  const { title } = props;
  return <MyText as={'p'} title={title} />;
};

interface IWhyBox {
  bg: string;
  color: string;
  cardNumber: number;
  cardText: string;
  iconName?: IconNameType;
}

const WhyBox: React.FC<IWhyBox> = ({
  bg,
  color,
  cardNumber,
  cardText,
  iconName = 'search',
}: IWhyBox) => {
  return (
    <VStack w={{base: '350px', md: 56}} bg={`${bg}.100`} borderRadius={10} overflow={'hidden'}>
      <Flex
        w={'full'}
        pt={4}
        minH={{base: '140px', md: '210px'}}
        px={4}
        alignItems={'flex-start'}
        flexDir={'column'}
      >
        <Text
          fontSize={'6xl'}
          fontWeight={900}
          lineHeight={'1'}
          textShadow={'2px 3px 4px rgb(0,0,0, 0.4)'}
          color={'brand.white'}
        >
          {cardNumber}
        </Text>
        <MyText as="span" title={cardText} />
      </Flex>

      <VStack
        w={'full'}
        h={28}
        alignItems={'flex-end'}
        justifyContent={'flex-end'}
      >
        <Center
          h={100}
          w={120}
          bg={`${bg}.300`}
          borderTopLeftRadius={'full'}
          pt={3}
          pl={10}
        >
          <MyIcon color={color} name={iconName} width={'70%'} />
        </Center>
      </VStack>
    </VStack>
  );
};
