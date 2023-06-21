import { Layout, MainHeading, MyButton, MyImage, MyText } from '@/component';
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
          </VStack>
        </HStack>

        <VStack w={'full'}>
          <VStack w={'full'} alignItems={'flex-start'} gap={'32px'}>
            <Box maxW={'70%'}>
              <MainHeading
                title="Coding Questions and Problem-Solving"
                subTitle="Explore a wide range of coding questions categorized by data structures, algorithms, and programming languages. Each question is carefully curated to test your abilities and provide valuable learning experiences."
                align={'stat'}
              />
            </Box>

            <HStack flexWrap={'wrap'} gap={'12px'} spacing={0}>
              {[1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <Center
                    w={'350px'}
                    h={'120px'}
                    key={index}
                    borderRadius={'6px'}
                    boxShadow={'0px 0px 4px rgba(0,0,0,0.1)'}
                    border={'1px solid'}
                    borderColor={'brand.darkgray'}
                    _hover={{
                      borderColor: 'brand.primary',
                      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                    }}
                    cursor={'pointer'}
                  ></Center>
                );
              })}
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </Layout>
  );
};

export default HelpfulResources;
