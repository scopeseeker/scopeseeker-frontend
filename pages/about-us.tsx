import { Layout, MyIcon, MyImage, MyText, PageHeroSection } from '@/component';
import { IWhyBox } from '@/inteface/component-interface';
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
              <MyText
                as={'p'}
                title={
                  'Scope Seeker is a job seeker website that focuses on simplifying the tech job search process. It offers a centralized platform for job seekers to access curated job listings from selected tech companies. The website presents a curated list of job openings from top tech companies in an easy-to-use format, saving job seekers time in their job search.'
                }
              />
              <MyText
                as={'p'}
                title={`The platform aims to solve the problem of finding and applying for tech jobs, which can be time-consuming and overwhelming. It focuses on presenting high-quality job listings from top tech companies that match the job seeker's skills and experience. This helps job seekers to save time, reduce the chance of missing out on job opportunities, and increase their chances of finding their dream job in the tech industry.`}
              />
            </VStack>

            {/* What we are solving section  */}
            <Flex w="full" flexWrap={'wrap'}>
              <MyText as="heading" title="What we are solving?" />

              <HStack
                w={'full'}
                flexDirection={{ base: 'column', sm: 'row' }}
                alignItems={'center'}
                justifyContent={'center'}
                mt={'36px'}
                gap={5}
                spacing={0}
                flexWrap={{ base: 'wrap', lg: 'nowrap' }}
              >
                <WhyBox
                  bg={'red'}
                  color={'white'}
                  cardNumber={1}
                  cardText="The overwhelming number of job listings online makes it
                difficult for job seekers to find opportunities that match
                their skills and preferences."
                  iconName="search"
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

            {/* How we work sections*/}
            <VStack w={'full'} alignItems={'flex-start'}>
              <MyText as="heading" title="How we work?" />
              <Box>
                <OrderedList ml={{ base: 5, md: 10 }} spacing={1}>
                  <ListItem>
                    <MyText
                      as={'p'}
                      title="We carefully select tech companies based on their reputation, size, and growth potential."
                    />
                  </ListItem>

                  <ListItem>
                    <MyText
                      as={'p'}
                      title="We evaluate each company's history, turnover, and authenticity to ensure that they are trustworthy and have a good reputation in the tech industry."
                    />
                  </ListItem>

                  <ListItem>
                    <MyText
                      as={'p'}
                      title="We focus specifically on the career pages of selected tech companies for tech job listings, continuously monitoring them to ensure that we present the latest and most accurate job opportunities to our users."
                    />
                  </ListItem>

                  <ListItem>
                    <MyText
                      as={'p'}
                      title="Job seekers can search and apply for these jobs directly on the Scope Seeker website, potentially saving them time in their job search."
                    />
                  </ListItem>

                  <ListItem>
                    <MyText
                      as={'p'}
                      title="By presenting relevant and trustworthy job opportunities in an easy-to-use format, we aim to save job seekers time and increase their chances of finding their dream job in the tech industry."
                    />
                  </ListItem>
                </OrderedList>
              </Box>
            </VStack>

            {/* Example Sections */}
            <VStack w={'full'} minH={'50vw'} gap={10}>
              <MyText
                as="heading"
                title="See ScopeSeeker in Action with This Example"
              />

              <VStack w={'full'} gap={4}>
                <HStack
                  w={{ base: '100%', sm: '80%', md: 'full', lg: '80%' }}
                  justifyContent={'space-between'}
                  borderWidth="2px"
                  borderColor={'red.300'}
                  borderRadius={{ base: '0px', md: 'full' }}
                  flexDirection={{ base: 'column', md: 'row' }}
                  gap={'10px'}
                  p={{ base: 0, md: '16px' }}
                  overflow={'hidden'}
                  borderTopRadius={{ base: '40px', md: 'full' }}
                  spacing={0}
                >
                  <Center
                    borderRadius={{ md: 'full' }}
                    bg={'red.50'}
                    p={{ base: '12px', md: '28px' }}
                    w={{ base: '100%', md: 'fit-content' }}
                  >
                    <MyImage
                      alt="example-aboutus"
                      src={'/assets/images/privacy-policy.png'}
                      width={120}
                      height={120}
                    />
                  </Center>
                  <Box
                    w={{ base: '100%', md: '80%' }}
                    p={'10px'}
                    textAlign={{ base: 'center', md: 'left' }}
                  >
                    <MyText
                      as="p"
                      title=" Meet Aarav, a B.Tech student with a strong skill set who
                  often misses out on job opportunities because he doesn't
                  have the time to search multiple job boards or visit verified
                  career pages. He feels overwhelmed by the sheer number of job
                  listings online and struggles to find job opportunities that
                  are a good fit for him."
                    />
                  </Box>
                </HStack>
                <HStack
                  w={{ base: '100%', sm: '80%', md: 'full', lg: '80%' }}
                  justifyContent={'space-between'}
                  borderWidth="2px"
                  borderColor={'green.300'}
                  borderRadius={{ base: '0px', md: 'full' }}
                  flexDirection={{ base: 'column', md: 'row-reverse' }}
                  gap={'10px'}
                  p={{ base: 0, md: '16px' }}
                  overflow={'hidden'}
                  borderTopRadius={{ base: '40px', md: 'full' }}
                  spacing={0}
                >
                  <Center
                    borderRadius={{ md: 'full' }}
                    bg={'green.50'}
                    p={{ base: '12px', md: '28px' }}
                    w={{ base: '100%', md: 'fit-content' }}
                  >
                    <MyImage
                      alt="example-aboutus"
                      src={'/assets/images/privacy-policy.png'}
                      width={120}
                      height={120}
                    />
                  </Center>
                  <Box
                    w={{ base: '100%', md: '80%' }}
                    p={'18px'}
                    textAlign={{ base: 'center', md: 'left' }}
                  >
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
                  w={{ base: '100%', sm: '80%', md: 'full', lg: '80%' }}
                  justifyContent={'space-between'}
                  borderWidth="2px"
                  borderColor={'red.300'}
                  borderRadius={{ base: '0px', md: 'full' }}
                  flexDirection={{ base: 'column', md: 'row' }}
                  gap={'10px'}
                  p={{ base: 0, md: '16px' }}
                  overflow={'hidden'}
                  borderTopRadius={{ base: '40px', md: 'full' }}
                  spacing={0}
                >
                  <Center
                    borderRadius={{ md: 'full' }}
                    bg={'red.50'}
                    p={{ base: '12px', md: '28px' }}
                    w={{ base: '100%', md: 'fit-content' }}
                  >
                    <MyImage
                      alt="example-aboutus"
                      src={'/assets/images/privacy-policy.png'}
                      width={120}
                      height={120}
                    />
                  </Center>
                  <Box
                    w={{ base: '100%', md: '80%' }}
                    p={'10px'}
                    textAlign={{ base: 'center', md: 'left' }}
                  >
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
                  w={{ base: '100%', sm: '80%', md: 'full', lg: '80%' }}
                  justifyContent={'space-between'}
                  borderWidth="2px"
                  borderColor={'green.300'}
                  borderRadius={{ base: '0px', md: 'full' }}
                  flexDirection={{ base: 'column', md: 'row-reverse' }}
                  gap={'10px'}
                  p={{ base: 0, md: '16px' }}
                  overflow={'hidden'}
                  borderTopRadius={{ base: '40px', md: 'full' }}
                  spacing={0}
                >
                  <Center
                    borderRadius={{ md: 'full' }}
                    bg={'green.50'}
                    p={{ base: '12px', md: '28px' }}
                    w={{ base: '100%', md: 'fit-content' }}
                  >
                    <MyImage
                      alt="example-aboutus"
                      src={'/assets/images/privacy-policy.png'}
                      width={120}
                      height={120}
                    />
                  </Center>
                  <Box
                    w={{ base: '100%', md: '80%' }}
                    p={'18px'}
                    textAlign={{ base: 'center', md: 'left' }}
                  >
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

            {/* Team Member Sections  */}
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
            <HStack
              w={'full'}
              flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
              gap={{ base: '68px', md: 0 }}
            >
              <VStack w={'full'} gap={1}>
                <Center
                  h={{ base: 250, md: 200 }}
                  w={{ base: 250, md: 200 }}
                  borderRadius={'full'}
                  bg={'blue.400'}
                  overflow={'hidden'}
                >
                  <MyImage
                    src={'/assets/images/p12.jpg'}
                    width={300}
                    height={300}
                    alt="picture"
                  />
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
                    icon={<MyIcon name={'instagram'} height="20" width="20" />}
                    size={'sm'}
                  />
                </HStack>
              </VStack>

              <VStack w={'full'} gap={1}>
                <Center
                  h={{ base: 250, md: 200 }}
                  w={{ base: 250, md: 200 }}
                  borderRadius={'full'}
                  bg={'yellow.400'}
                  overflow={'hidden'}
                >
                  <MyImage
                    src={'/assets/images/p12.jpg'}
                    width={300}
                    height={300}
                    alt="picture"
                  />
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
                    icon={<MyIcon name={'instagram'} height="20" width="20" />}
                    size={'sm'}
                  />
                </HStack>
              </VStack>

              <VStack w={'full'} gap={1}>
                <Center
                  h={{ base: 250, md: 200 }}
                  w={{ base: 250, md: 200 }}
                  borderRadius={'full'}
                  bg={'green.400'}
                  overflow={'hidden'}
                >
                  <MyImage
                    src={'/assets/images/p12.jpg'}
                    width={300}
                    height={300}
                    alt="picture"
                  />
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
                    icon={<MyIcon name={'instagram'} height="20" width="20" />}
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
const WhyBox = ({
  bg,
  color,
  cardNumber,
  cardText,
  iconName = 'search',
}: IWhyBox) => {
  return (
    <VStack
      w={{ base: '100%', sm: '224px' }}
      bg={`${bg}.100`}
      borderRadius={10}
      overflow={'hidden'}
    >
      <Flex
        w={'full'}
        pt={4}
        minH={{ base: '140px', md: '210px' }}
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

      <VStack w={'full'} alignItems={'flex-end'} justifyContent={'flex-end'}>
        <Center
          h={'100px'}
          w={'100px'}
          bg={`${bg}.300`}
          borderRadius={'full'}
          borderEndEndRadius={'0px'}
        >
          <MyIcon color={color} name={iconName} width={'36px'} />
        </Center>
      </VStack>
    </VStack>
  );
};
