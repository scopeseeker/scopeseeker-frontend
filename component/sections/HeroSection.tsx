import { Layout, MyButton, MyDivider, MyImage, MyText } from '@/component';
import { Center, HStack, Heading, VStack } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Layout>
      <VStack w={'full'} h={'full'} position={'relative'} gap={'32px'}>
        <Center position={'absolute'} top={'35%'} left={'10%'}>
          <MyImage
            alt="ico"
            src={'/assets/images/bag.png'}
            width={55}
            height={55}
          />
        </Center>
        <Center position={'absolute'} bottom={'20%'} left={'0%'}>
          <MyImage
            alt="ico"
            src={'/assets/images/calender.png'}
            width={45}
            height={45}
          />
        </Center>
        <Center position={'absolute'} top={'35%'} right={'10%'}>
          <MyImage
            alt="ico"
            src={'/assets/images/bell.png'}
            width={45}
            height={45}
          />
        </Center>
        <Center position={'absolute'} bottom={'20%'} right={'0%'} transform={'rotate(25deg)'}>
          <MyImage
            alt="ico"
            src={'/assets/images/outfit.png'}
            width={45}
            height={45}
          />
        </Center>

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
              <MyButton title="Signup Now" variant="outline" href="/signup" />
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
  );
};

export default HeroSection;
