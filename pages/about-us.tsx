import Icon, { IconNameType } from '@/component/icon/Icon';
import MyImage from '@/component/image/MyImage';
import MainHeading from '@/component/main-heading/MainHeading';
import PageHeroSection from '@/component/page-hero-section/PageHeroSection';
import {
  Box,
  Center,
  HStack,
  Heading,
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
      <VStack w={'full'} minH={'100vh'} px={20} gap={10}>
        <PageHeroSection
          title="About Us"
          subtitle="Break all boundaries and be unstoppable with the largest community engagement platform built on gamification"
          headColor="brand.primary"
          paraColor="brand.semiblack"
          src="/assets/images/about-us.webp"
          alt="terms-of-use"
        />

        <VStack w={'full'} gap={12}>
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

          {/* <VStack w={'full'} alignItems={'flex-start'}>
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
          </VStack> */}

          <Center
            w="full"
            flexDirection={'column'}
            pt={8}
            flexWrap={'wrap'}
            bg={'red'}
          >
            <Heading fontSize={'2xl'}>What we are solving?</Heading>
            <Text>See why Scope Seeker should be your first choice</Text>

            <HStack w={'full'} mt={12} gap={5}>
              <WhyBox
                bg={'red'}
                color={'white'}
                cardNumber={1}
                cardText="The overwhelming number of job listings online makes it
                difficult for job seekers to find opportunities that match
                their skills and preferences."
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
          </Center>

          <VStack w={'full'} alignItems={'flex-start'} bg={'green'}>
            <Heading fontSize={'2xl'}>How we work?</Heading>
            <Box>
              <OrderedList ml={10} spacing={1}>
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

          <VStack w={'full'} px={20} minH={'50vw'} gap={10} bg={'pink'}>
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
                <Text as={'p'} w={'70%'}>
                  Meet Lokesh, a B.Tech student with a strong skill set who
                  often misses out on job opportunities because he doesn&apos;t
                  have the time to search multiple job boards or visit verified
                  career pages. He feels overwhelmed by the sheer number of job
                  listings online and struggles to find job opportunities that
                  are a good fit for him.
                </Text>
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
                <Text as={'p'} w={'70%'}>
                  This is where Scope Seeker comes in. With Scope Seeker, Lokesh
                  can easily search for job opportunities that match his skills
                  and preferences in one place, saving him time and effort. Our
                  platform continuously monitors the career pages of selected
                  tech companies to ensure that we present the latest and most
                  accurate job opportunities to our users, so Lokesh never has
                  to worry about missing out on a relevant job opportunity.
                </Text>
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
                <Text as={'p'} w={'70%'}>
                  In addition, Scope Seeker verifies each job listing to ensure
                  that it is high-quality and relevant to its users, giving
                  Lokesh the confidence to apply to jobs that are the best fit
                  for him. Overall, by using Scope Seeker, Lokesh can increase
                  his chances of finding his dream job in the tech industry
                  while trusting that the job listings on our platform are
                  high-quality and relevant to his skills.
                </Text>
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
                <Text as={'p'} w={'70%'}>
                  Overall, by using Scope Seeker, Lokesh can increase his
                  chances of finding his dream job in the tech industry while
                  trusting that the job listings on our platform are
                  high-quality and relevant to his skills.
                </Text>
              </HStack>
            </VStack>
          </VStack>

          <VStack w={'full'}>
            <VStack w={'full'} gap={5} alignItems={'flex-start'}>
              <VStack w={'2xl'}>
                <MainHeading
                  title="The People Who Make It Happen"
                  align="flex-start"
                  subTitle="Meet the talented and dedicated individuals who make our business thrive. Our amazing team is the driving force behind our success, and we're proud to introduce them to you."
                />
              </VStack>

              <VStack alignItems={'flex-start'} w={'full'}>
                <Text>
                  Meet the Scope Seeker team, the people behind the innovative
                  tech job seeker platform.
                </Text>

                <Text>
                  Lokesh Dhakar, our founder, is a seasoned full-stack developer
                  with a passion for helping job seekers find their dream job
                  and creating a more inclusive job market.
                </Text>

                <Text>
                  Abhijeet Raj and Abhishek Kumar, our co-founders, are both
                  front-end web developers. Their dedication and hard work have
                  been instrumental in making Scope Seeker a success.
                </Text>

                <Text>
                  Together, our team is committed to building a platform that
                  empowers job seekers and makes the hiring process more
                  efficient and transparent. We are always striving to improve
                  our services and provide the best possible experience for our
                  users.
                </Text>
              </VStack>
            </VStack>

            <HStack w={'full'} p={20}>
              <VStack w={'full'} gap={1}>
                <Center
                  h={200}
                  w={200}
                  borderRadius={'full'}
                  bg={'blue.400'}
                  overflow={'hidden'}
                >
                  {/* <MyImage src={'/assets/images/p12.jpg'} width={200} height={200} alt='picture'/> */}
                </Center>

                <VStack spacing={0}>
                  <Heading as={'span'} fontSize={'lg'}>
                    Lokesh Dhakar
                  </Heading>
                  <Text as={'h6'} fontSize={'xs'}>
                    Founder
                  </Text>
                </VStack>

                <HStack cursor={'pointer'}>
                  <IconButton
                    aria-label="social-meida"
                    p={2}
                    color={'green.600'}
                    icon={<Icon name={'whatsapp'} />}
                    size={'sm'}
                  />
                  <IconButton
                    aria-label="social-meida"
                    p={2}
                    color={'blue.700'}
                    icon={<Icon name={'linkedin'} />}
                    size={'sm'}
                  />
                  <IconButton
                    aria-label="social-meida"
                    p={2}
                    color={'pink.500'}
                    icon={<Icon name={'instagram'} />}
                    size={'sm'}
                  />
                </HStack>
              </VStack>

              <VStack w={'full'} gap={1}>
                <Center
                  h={200}
                  w={200}
                  borderRadius={'full'}
                  bg={'yellow.400'}
                  overflow={'hidden'}
                >
                  {/* <MyImage src={'/assets/images/p12.jpg'} width={200} height={200} alt='picture'/> */}
                </Center>

                <VStack spacing={0}>
                  <Heading as={'span'} fontSize={'lg'}>
                    Abhijeet Raj
                  </Heading>
                  <Text as={'h6'} fontSize={'xs'}>
                    Co-Founder
                  </Text>
                </VStack>

                <HStack cursor={'pointer'}>
                  <IconButton
                    aria-label="social-meida"
                    p={2}
                    color={'green.600'}
                    icon={<Icon name={'whatsapp'} />}
                    size={'sm'}
                  />
                  <IconButton
                    aria-label="social-meida"
                    p={2}
                    color={'blue.700'}
                    icon={<Icon name={'linkedin'} />}
                    size={'sm'}
                  />
                  <IconButton
                    aria-label="social-meida"
                    p={2}
                    color={'pink.500'}
                    icon={<Icon name={'instagram'} />}
                    size={'sm'}
                  />
                </HStack>
              </VStack>

              <VStack w={'full'} gap={1}>
                <Center
                  h={200}
                  w={200}
                  borderRadius={'full'}
                  bg={'green.400'}
                  overflow={'hidden'}
                >
                  {/* <MyImage src={'/assets/images/p12.jpg'} width={200} height={200} alt='picture'/> */}
                </Center>

                <VStack spacing={0}>
                  <Heading as={'span'} fontSize={'lg'}>
                    Abhishek Kumar
                  </Heading>
                  <Text as={'h6'} fontSize={'xs'}>
                    Co-Founder
                  </Text>
                </VStack>

                <HStack cursor={'pointer'}>
                  <IconButton
                    aria-label="social-meida"
                    p={2}
                    color={'green.600'}
                    icon={<Icon name={'whatsapp'} />}
                    size={'sm'}
                  />
                  <IconButton
                    aria-label="social-meida"
                    p={2}
                    color={'blue.700'}
                    icon={<Icon name={'linkedin'} />}
                    size={'sm'}
                  />
                  <IconButton
                    aria-label="social-meida"
                    p={2}
                    color={'pink.500'}
                    icon={<Icon name={'instagram'} />}
                    size={'sm'}
                  />
                </HStack>
              </VStack>
            </HStack>
          </VStack>
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
    <VStack w={56} bg={`${bg}.100`} borderRadius={10} overflow={'hidden'}>
      <VStack
        w={'full'}
        pt={4}
        minH={'3xs'}
        maxH={'2xs'}
        px={4}
        alignItems={'flex-start'}
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
        <Text fontSize={'sm'}>{cardText}</Text>
      </VStack>

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
          pl={3}
        >
          <Icon color={color} name={iconName} width={'50%'} />
        </Center>
      </VStack>
    </VStack>
  );
};
