'use client';
import { Layout, MyButton, MyIcon, MyImage, MyText } from '@/component';
import { Benifits, JobTab, Overview } from '@/section-components';
import HiringProcess from '@/section-components/comapany-details/HiringProcess';

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

export default function CompanyDetails() {
  return (
    <>
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
            <MyText fontWeight={500} as="heading" title={`Campgemini`} />
            <MyText as="span" title="Software Company" />
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
              spacing={0}
            >
              <HStack gap={'20px'}>
                <Center
                  w={{ base: '70px', md: '112px' }}
                  h={{ base: '70px', md: '112px' }}
                  bg={'brand.white'}
                  border={'1.5px solid'}
                  borderColor={'brand.lightgray'}
                  borderRadius={'10px'}
                  position={'relative'}
                >
                  <MyImage
                    src={'/assets/images/company-logo/amazon.png'}
                    alt={'company logo'}
                    fill
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      borderRadius: '10px',
                    }}
                  />
                </Center>

                <VStack spacing={0} alignItems={'flex-start'} minW={'50%'}>
                  <HStack justifyContent={'flex-start'}>
                    <MyText as="title" title="Amazon Private Limitted" />
                    <MyIcon
                      name="verifyFill"
                      width="15px"
                      color="brand.primary"
                    />
                  </HStack>
                  <MyText
                    as="small"
                    title="4.2 Ratings Out 160 Reviews on Naukri.com"
                  />
                  {/* Company Type  */}
                  <HStack flexWrap={'wrap'} gap={'6px'} spacing={0} pt={'10px'}>
                    {[
                      'Small',
                      'B2B',
                      'MNC',
                      'Product',
                      'Software',
                      'Development',
                    ].map((item, index) => {
                      return (
                        <Center
                          key={index}
                          borderWidth={'1px'}
                          borderColor={'brand.lightgray'}
                          px={'15px'}
                          py={'4px'}
                          borderRadius={'40px'}
                          // bg={'brand.offwhite'}
                        >
                          <MyText
                            as="small"
                            title={item}
                            color={'brand.darkgray'}
                          />
                        </Center>
                      );
                    })}
                  </HStack>
                </VStack>
              </HStack>

              <MyButton
                title="Add to Faviourate"
                variant="outline"
                leftIcon={<MyIcon name="save" color="brand.primary" />}
              />
            </HStack>

            {/* Tabs */}
            <HStack paddingTop={'50px'} w={'full'}>
              <Tabs position="relative" variant="unstyled" w={'full'}>
                <TabList gap={'18px'} flexWrap={'wrap'}>
                  <Tab
                    _selected={{ color: 'white', bg: 'brand.primary' }}
                    border={'1px solid'}
                    borderColor={'brand.lightgray'}
                    w={{ base: '100%', sm: '40%', md: '150px' }}
                    h={'50px'}
                    borderRadius={'10px'}
                  >
                    Overview
                  </Tab>

                  <Tab
                    _selected={{ color: 'white', bg: 'brand.primary' }}
                    border={'1px solid'}
                    borderColor={'brand.lightgray'}
                    w={{ base: '100%', sm: '40%', md: '150px' }}
                    h={'50px'}
                    borderRadius={'10px'}
                  >
                    Benifits
                  </Tab>
                  <Tab
                    _selected={{ color: 'white', bg: 'brand.primary' }}
                    border={'1px solid'}
                    borderColor={'brand.lightgray'}
                    w={{ base: '100%', sm: '40%', md: '150px' }}
                    h={'50px'}
                    borderRadius={'10px'}
                  >
                    Jobs
                  </Tab>
                  <Tab
                    _selected={{ color: 'white', bg: 'brand.primary' }}
                    border={'1px solid'}
                    borderColor={'brand.lightgray'}
                    w={{ base: '100%', sm: '40%', md: '150px' }}
                    h={'50px'}
                    borderRadius={'10px'}
                  >
                    Hiring Process
                  </Tab>
                </TabList>
                <TabPanels paddingTop={'50px'}>
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
