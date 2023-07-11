import { Layout, MyButton, MyDivider, MyImage, MyText } from '@/component';
import { Box, Center, HStack, Heading, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <Layout w={'full'}>
      <VStack
        w={'full'}
        h={'full'}
        position={'relative'}
        gap={'32px'}
        pt={'32px'}
      >
        <Center
          display={{ base: 'none', sm: 'flex' }}
          position={'absolute'}
          top={{ base: '40%', sm: '35%', md: '35%' }}
          left={{ base: '0%', md: '10%' }}
        >
          <MyImage
            alt="ico"
            src={'/assets/images/bag.png'}
            width={55}
            height={55}
          />
        </Center>
        <Center
          display={{ base: 'none', sm: 'flex' }}
          position={'absolute'}
          bottom={{ base: '15%', md: '20%' }}
          left={'0%'}
        >
          <MyImage
            alt="ico"
            src={'/assets/images/calender.png'}
            width={45}
            height={45}
          />
        </Center>
        <Center
          display={{ base: 'none', sm: 'flex' }}
          position={'absolute'}
          top={{ base: '40%', sm: '35%', md: '35%' }}
          right={{ base: '0%', md: '10%' }}
        >
          <MyImage
            alt="ico"
            src={'/assets/images/bell.png'}
            width={45}
            height={45}
          />
        </Center>
        <Center
          display={{ base: 'none', sm: 'flex' }}
          position={'absolute'}
          bottom={{ base: '15%', md: '20%' }}
          right={'0%'}
          transform={'rotate(25deg)'}
        >
          <MyImage
            alt="ico"
            src={'/assets/images/outfit.png'}
            width={45}
            height={45}
          />
        </Center>

        <HStack w={'full'} h={'full'} justifyContent={'center'} pb={'58px'}>
          <VStack w={'full'} gap={'12px'}>
            <Center
              bg={'brand.transprimary'}
              border={'1px solid'}
              borderColor={'brand.darkgray'}
              px={'16px'}
              py={'2px'}
              borderRadius={'20px'}
            >
              <MyText as="small" title="Find Tech Jobs Here 💼" />
            </Center>
            <HStack>
              <Heading
                textAlign={'center'}
                fontSize={{ base: '24px', sm: '30px', md: '36px' }}
              >
                Accelerate Your Job
                <br /> Save Time, Embrace All
                <Box as="span" color={'brand.primary'}>
                  {' '}
                  Opportunities
                </Box>
              </Heading>
            </HStack>
            <MyText
              textAlign={'center'}
              maxW={{ base: '100%', sm: '70%', md: '55%' }}
              color="brand.darkgray"
              as="span"
              title="Discover your path to success on our job seeker website. With a vast range of job listings and valuable resources, we provide the platform for you to shine."
            />
            <HStack>
              <Link href={'/jobs'}>
                <MyButton title="Explore Now" />
              </Link>
              <Link href={'/signup'}>
                <MyButton title="Signup Now" variant="outline" />
              </Link>
            </HStack>

            <HStack gap={{ sm: '30px', md: '60px', lg: '112px' }}>
              <Center
                w={{ base: '250px', sm: '180px' }}
                h={{ base: '350px', sm: '250px' }}
                borderRadius={'0px 30px 0px 60px'}
                justifyContent={'end'}
                alignItems={'end'}
                position={'relative'}
                overflow={'hidden'}
              >
                <Center
                  w={{ base: '250px', sm: '180px' }}
                  h={{ base: '260px', sm: '190px', md: '200px' }}
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
                display={{ base: 'none', sm: 'flex' }}
                h={'full'}
                alignSelf={'flex-start'}
                pt={'32px'}
                flexDirection={'column'}
              >
                <MyImage
                  src={'/assets/images/point-arrow.png'}
                  alt="arrow"
                  width={70}
                  height={90}
                />
              </Center>
              <Center
                display={{ base: 'none', sm: 'flex' }}
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
                  h={{ base: '190px', md: '200px' }}
                  borderRadius={'60px 0px 60px 0px'}
                  bg={'brand.primary'}
                >
                  <MyImage
                    src={'/assets/images/womennew.png'}
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
          minH={'72px'}
          borderRadius={10}
          bg={'brand.primary'}
          justifyContent={'center'}
          color={'brand.white'}
          px={'12px'}
          py={'8px'}
          w={'full'}
        >
          <VStack
            w={{ base: '60px', md: '120px' }}
            h={'full'}
            justifyContent={'center'}
          >
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
          <VStack
            w={{ base: '60px', md: '120px' }}
            h={'full'}
            justifyContent={'center'}
          >
            <MyDivider />
          </VStack>
        </HStack>
      </VStack>
    </Layout>
  );
};

export default HeroSection;
