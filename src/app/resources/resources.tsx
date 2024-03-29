'use client';
import {
  Layout,
  MainHeading,
  MyButton,
  MyIcon,
  MyImage,
  MyText,
} from '@/component';
import { IconNameType } from '@/constant/IconLibrary';
import { helpfulResources } from '@/constant/helpfulResources';
import { Box, Center, HStack, Heading, VStack } from '@chakra-ui/react';

export default function Resources() {
  return (
    <>
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
                maxW={{ base: 'full', md: '70%' }}
                px={'20px'}
                py={{ base: '16px', sm: '20px', md: '6px' }}
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

          <VStack w={'full'}>
            <VStack
              w={'full'}
              alignItems={'flex-start'}
              gap={'72px'}
              mt={'32px'}
            >
              <Box>
                <MainHeading
                  title="Explore All Helpful Resource For Tech Enthusiasts"
                  align={'start'}
                  subTitle={`Our treasure trove of resource categories designed to empower tech job seekers like you. We've curated a diverse range of resources to cover every aspect of your journey, from frontend development to interview preparation and coding questions. Let's dive into the wealth of knowledge that awaits you!`}
                />
              </Box>
              <HStack
                w={'full'}
                flexWrap={'wrap'}
                spacing={0}
                gap={'32px'}
                justifyContent={'space-between'}
              >
                {helpfulResources.map((item, index) => {
                  return (
                    <CategoryBox
                      key={index}
                      title={item.title}
                      description={item.description}
                      iconName={item.iconName}
                    />
                  );
                })}
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </Layout>
    </>
  );
}

interface ICategoryBox {
  title: string;
  description: string;
  iconName: IconNameType;
}
const CategoryBox = ({ title, description, iconName }: ICategoryBox) => {
  return (
    <>
      <Center
        w={{ base: 'full', sm: 'full', md: '47%' }}
        minH={{ base: '100px', sm: '110px', md: '130px' }}
        border={'1px solid'}
        borderColor={'brand.lightgray'}
        _hover={{
          borderColor: 'brand.primary',
          boxShadow: '0px 0px  10px rgba(0,0,0,0.1)',
        }}
        borderRadius={'18px'}
        justifyContent={'flex-start'}
        px={'18px'}
        py={'18px'}
        cursor={'pointer'}
        gap={'22px'}
        flexDirection={{ base: 'column', sm: 'row' }}
        alignItems={{ base: 'self-start', sm: 'center' }}
      >
        <Center
          w={{ base: '50px', md: '80px' }}
          height={{ base: '50px', md: '80px' }}
          flexShrink={0}
          bg={'brand.aliceblue'}
          border={'1px solid'}
          borderColor={'brand.primary'}
          borderRadius={'50%'}
        >
          <MyIcon name={iconName} width="35px" height="35px" />
        </Center>
        <Box>
          <MyText as="title" title={title} />
          <MyText as="span" title={description} />
        </Box>
      </Center>
    </>
  );
};
