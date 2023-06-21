import { Layout, MyButton, MyImage, MyText } from '@/component';
import { Box, Center, HStack, Heading, VStack } from '@chakra-ui/react';

const HelpfulResources = () => {
  return (
    <Layout w={'full'}>
      <VStack
        w={'full'}
        h={'full'}
        position={'relative'}
        gap={'32px'}
        py={'32px'}
      >
        {/* Hero Section */}
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
              <MyText as="small" title="Find Helpful Resources Here 💼" />
            </Center>
            <HStack>
              <Heading
                textAlign={'center'}
                fontSize={{ base: '24px', sm: '30px', md: '36px' }}
              >
                Welcome to the Interactive
                <br />
                <Box as="span" color={'brand.primary'}>
                  {' '}
                  Helpful Resource
                </Box>{' '}
                Hub
              </Heading>
            </HStack>
            <MyText
              textAlign={'center'}
              maxW={{ base: '100%', sm: '70%', md: '65%' }}
              color="brand.darkgray"
              as="p"
              title="Prepare yourself to ace your tech job interviews with our comprehensive collection of interactive resources. Whether you're a seasoned professional or just starting your journey, this hub is designed to equip you with the knowledge and skills you need to excel. Let's dive in!"
            />
            <HStack>
              <MyButton title="Explore All Sections" />
            </HStack>

            <Center>
              <MyImage
                src={'/assets/images/d.png'}
                alt="helpful resources"
                width={400}
                height={300}
              />
            </Center>
            <Center
              maxW={'70%'}
              px={'12px'}
              py={'6px'}
              bg={'green.50'}
              border={'1.4px solid'}
              borderColor={'green.400'}
              borderRadius={'50px'}
            >
              <MyText
                as="span"
                title=' Say goodbye to information overload and access the best resources handpicked to boost your success in the tech industry. Start exploring now and unlock your full potential."'
                textAlign={'center'}
                color="green.900"
              />
            </Center>
          </VStack>
        </HStack>

        {/* Introduction */}
      </VStack>
    </Layout>
  );
};

export default HelpfulResources;
