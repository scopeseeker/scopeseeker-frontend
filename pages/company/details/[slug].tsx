import { Layout, MyIcon, MyImage, MyText } from '@/component';
import {
  Benifits,
  HiringProcess,
  JobTab,
  Overview,
} from '@/section-components';

import {
  Center,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <title>Company Details | Scope Seeker</title>
      </Head>

      <VStack w={'full'}>
        <Center
          w={'full'}
          h={'200px'}
          backgroundImage={
            'radial-gradient(circle at center center, transparent, #EBECFF), repeating-radial-gradient(circle at center center, brand.aliceblue, brand.aliceblue, 10px, transparent 28px, transparent 10px)'
          }
          position="relative"
          borderRadius={'10px'}
          px={'12px'}
          zIndex={'9'}
        >
          <Layout
            h={'100%'}
            justifyContent={'center'}
            display={'flex'}
            flexDirection={'column'}
            textAlign={'center'}
          >
            <MyText
              fontWeight={500}
              as="heading"
              title={`Full Stack Web Developer`}
            />
            <MyText as="span" title="Tata Consultancy Service" />
          </Layout>
        </Center>
        {/* After header Part */}
        <Layout>
          <VStack
            w={'full'}
            px={{ base: '0px', md: '30px' }}
            alignItems={'flex-start'}
          >
            {/* Company Logo */}
            <HStack
              w={'full'}
              pb={{ base: '10px', md: '0px' }}
              justifyContent={'space-between'}
              flexDir={{ base: 'column', sm: 'row', md: 'row' }}
              alignItems={{ base: 'flex-start', sm: 'center', md: 'center' }}
              gap={'15px'}
              spacing={0}
            >
              <HStack>
                <Center
                  w={{ base: '70px', md: '75px' }}
                  h={{ base: '70px', md: '75px' }}
                  bg={'brand.white'}
                  border={'1.3px solid'}
                  borderColor={'brand.lightgray'}
                  borderRadius={'10px'}
                >
                  <MyImage
                    src={'/assets/images/company-logo/amazon.png'}
                    alt={'company logo'}
                    width={50}
                    height={50}
                  />
                </Center>

                <VStack spacing={0} alignItems={'flex-start'}>
                  <HStack justifyContent={'flex-start'}>
                    <MyText as="title" title="Campgemini" />
                    <MyIcon
                      name="verifyFill"
                      width="15px"
                      color="brand.primary"
                    />
                  </HStack>
                  <MyText as="small" title="4.2 Ratings/ 160 Reviews" />
                </VStack>
              </HStack>

              <Center
                px={'8px'}
                py={'2px'}
                cursor={'pointer'}
                borderRadius={'5px'}
                gap={'5px'}
                borderWidth={'1.5px'}
                borderColor={'brand.darkgray'}
                color={'brand.primary'}
              >
                <MyText
                  as="small"
                  title="Add to favourite"
                  color="currentColor"
                  fontWeight={500}
                />
                <MyIcon
                  name="heart"
                  width="15px"
                  color="currentColor"
                  strokeWidth="2"
                />
              </Center>
            </HStack>

            {/* Company Type  */}
            <HStack
              flexWrap={'wrap'}
              gap={'6px'}
              spacing={0}
              pt={'10px'}
              maxW={{ base: '100%', md: '80%' }}
            >
              {['small', 'B2B', 'MNC', 'Product'].map((item, key) => {
                return (
                  <Center
                    key={key}
                    borderWidth={'1px'}
                    borderColor={'brand.darkgray'}
                    px={'10px'}
                    py={'3px'}
                    borderRadius={'4px'}
                    bg={'brand.offwhite'}
                  >
                    <MyText as="small" title={item} color={'brand.darkgray'} />
                  </Center>
                );
              })}
            </HStack>

            {/* Tabs */}
            <HStack paddingTop={'30px'} w={'full'}>
              <Tabs position="relative" variant="unstyled" w={'full'}>
                <TabList gap={'18px'}  flexWrap={'wrap'} >
                  <Tab
                    _selected={{ color: 'white', bg: 'brand.primary' }}
                    border={'1px solid'}
                    borderColor={'brand.lightgray'}
                    w={{ base: '100%',sm:'40%', md: '150px' }}
                    h={'50px'}
                    borderRadius={'10px'}
                  >
                    Overview
                  </Tab>

                  <Tab
                    _selected={{ color: 'white', bg: 'brand.primary' }}
                    border={'1px solid'}
                    borderColor={'brand.lightgray'}
                    w={{ base: '100%',sm:'40%', md: '150px' }}
                    h={'50px'}
                    borderRadius={'10px'}
                  >
                    Benifits
                  </Tab>
                  <Tab
                    _selected={{ color: 'white', bg: 'brand.primary' }}
                    border={'1px solid'}
                    borderColor={'brand.lightgray'}
                    w={{ base: '100%',sm:'40%', md: '150px' }}
                    h={'50px'}
                    borderRadius={'10px'}
                  >
                    Jobs
                  </Tab>
                  <Tab
                    _selected={{ color: 'white', bg: 'brand.primary' }}
                    border={'1px solid'}
                    borderColor={'brand.lightgray'}
                    w={{ base: '100%',sm:'40%', md: '150px' }}
                    h={'50px'}
                    borderRadius={'10px'}
                  >
                    Hiring Process
                  </Tab>
                 
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Overview />
                  </TabPanel>
                  <TabPanel>
                    <Benifits />
                  </TabPanel>
                  <TabPanel>
                    <JobTab />
                  </TabPanel>
                  <TabPanel>
                    <HiringProcess />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </HStack>
          </VStack>
        </Layout>
      </VStack>
    </>
  );
}
