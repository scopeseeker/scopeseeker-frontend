import { Layout, MainHeading, MyIcon, MyText } from '@/component';
import PageHeroSection from '@/section-components/page-header/PageHeader';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Center,
  Flex,
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

function HelpfulResourcesCateegory() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <title>{slug} | Scope Seeker</title>
      </Head>
      <VStack gap={'52px'}>


      <PageHeroSection
        title="Hello"
        alt="resource"
        src="/assets/images/blog.jpg"
        subtitle="how"
      />
      <Layout>
        <MainHeading title='Effective Resources for Placement Preparation' subTitle='' align={'flex-start'}/>

        <HStack
          w={'full'}
          flexWrap={'wrap'}
          spacing={0}
          alignItems={'flex-start'}
          justifyContent={'space-between'}
          gap={'18px'}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
            return (
              <Accordion
              key={index}
                allowToggle
                w={'100%'}
                flexWrap={'wrap'}
                gap={'12px'}
                justifyContent={'space-between'}
                display={'flex'}
              >
                <AccordionItem
                  w={'100%'}
                  _hover={{ borderColor: 'brand.primary' }}
                  borderRadius={'20px'}
                  border={'1px solid'}
                  borderColor={'brand.lightgray'}
                  px={'32px'}
                >
                  <AccordionButton p={0} _hover={{ bg: 'transparent' }}>
                    <Center
                      h={'100px'}
                      w={'100%'}
                      justifyContent={'flex-start'}
                      py={'6px'}
                      gap={'18px'}
                    >
                      <Center
                        w={'70px'}
                        h={'70px'}
                        borderRadius={'50%'}
                        bg={'brand.aliceblue'}
                        flexShrink={0}
                        border={'1px solid'}
                        borderColor={'brand.primary'}
                      >
                        <MyIcon name="target" width="40px" height="40px" />
                      </Center>
                      <MyText as="title" title="General Aptitude" />
                    </Center>
                    <AccordionIcon w={'18px'} h={'18px'} />
                  </AccordionButton>
                  <AccordionPanel pb={'32px'}>
                    <Tabs variant="unstyled" w={'full'}>
                      <TabList
                        gap={{ base: '12px', md: '32px' }}
                        marginBottom={'32px'}
                        w={'full'}
                      >
                        {['Topics', 'Resources'].map((item, index) => {
                          return (
                            <Tab
                              key={index}
                              _selected={{
                                color: 'white',
                                bg: 'brand.primary',
                              }}
                              border={'1px solid'}
                              borderColor={'brand.lightgray'}
                              minW={{ base: '50%', md: '220px' }}
                              h={'60px'}
                              borderRadius={'10px'}
                            >
                              {item}
                            </Tab>
                          );
                        })}
                      </TabList>
                      <TabPanels alignItems={'flex-start'}>
                        <TabPanel px={0}>
                          <Abc />
                        </TabPanel>

                        <TabPanel px={0}>
                          <Center w={'full'} h={'60vh'} bg={'red.100'}></Center>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            );
          })}
        </HStack>
      </Layout>
      </VStack>

    </>
  );
}

export default HelpfulResourcesCateegory;

const Abc = () => {
  return (
    <>
      <Accordion
        allowToggle
        w={'100%'}
        flexWrap={'wrap'}
        gap={'12px'}
        justifyContent={'space-between'}
        display={'flex'}
      >
        <AccordionItem w={'100%'} _hover={{ borderColor: 'brand.primary' }}>
          <AccordionButton p={0} px={'12px'} _hover={{ bg: 'transparent' }}>
            <Center
              h={'60px'}
              w={'100%'}
              justifyContent={'space-between'}
              py={'6px'}
              gap={'18px'}
            >
              <MyText as="title" title="Arithmetic Aptitude" />
            </Center>
            <AccordionIcon w={'18px'} h={'18px'} />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Flex w={'full'} flexWrap={'wrap'} gap={'12px'}>
              {[
                'Numbers',
                'LCM and HCF',
                'Work and Wages',
                'Pipes and Cisterns',
                'Time Speed Distance',
                'Trains, Boats and Streams',
                'Percentages',
                'Ratio Proportion and Partnership',
                'Mixtures and Alligation',
                'Algebra',
                'Average',
                'Age',
                'Profit and Loss',
                'Simple Interest',
                'Compound Interest',
                'Mensuration 2D',
                'Mensuration 3D',
                'Trigonometry & Height and Distances',
                'Progressions',
                'Logarithms',
                'Permutation and Combination',
                'Probability',
                'Geometry',
                'Clocks',
                'Calendars',
                'Coding-Decoding',
                'Race',
              ].map((item, index) => {
                return (
                  <Center
                    px={'12px'}
                    py={'2px'}
                    bg={'brand.offwhite'}
                    border={'1px solid'}
                    borderColor={'brand.darkgray'}
                    key={index}
                    borderRadius={'50px'}
                  >
                    <MyText as="span" title={item} />
                  </Center>
                );
              })}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem w={'100%'} _hover={{ borderColor: 'brand.primary' }}>
          <AccordionButton p={0} px={'12px'} _hover={{ bg: 'transparent' }}>
            <Center
              h={'60px'}
              w={'100%'}
              justifyContent={'space-between'}
              py={'6px'}
              gap={'18px'}
            >
              <MyText as="title" title="Arithmetic Aptitude" />
            </Center>
            <AccordionIcon w={'18px'} h={'18px'} />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Flex w={'full'} flexWrap={'wrap'} gap={'12px'}>
              {[
                'Numbers',
                'LCM and HCF',
                'Work and Wages',
                'Pipes and Cisterns',
                'Time Speed Distance',
                'Trains, Boats and Streams',
                'Percentages',
                'Ratio Proportion and Partnership',
                'Mixtures and Alligation',
                'Algebra',
                'Average',
                'Age',
                'Profit and Loss',
                'Simple Interest',
                'Compound Interest',
                'Mensuration 2D',
                'Mensuration 3D',
                'Trigonometry & Height and Distances',
                'Progressions',
                'Logarithms',
                'Permutation and Combination',
                'Probability',
                'Geometry',
                'Clocks',
                'Calendars',
                'Coding-Decoding',
                'Race',
              ].map((item, index) => {
                return (
                  <Center
                    px={'12px'}
                    py={'2px'}
                    bg={'brand.offwhite'}
                    border={'1px solid'}
                    borderColor={'brand.darkgray'}
                    key={index}
                    borderRadius={'50px'}
                  >
                    <MyText as="span" title={item} />
                  </Center>
                );
              })}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem w={'100%'} _hover={{ borderColor: 'brand.primary' }}>
          <AccordionButton p={0} px={'12px'} _hover={{ bg: 'transparent' }}>
            <Center
              h={'60px'}
              w={'100%'}
              justifyContent={'space-between'}
              py={'6px'}
              gap={'18px'}
            >
              <MyText as="title" title="Arithmetic Aptitude" />
            </Center>
            <AccordionIcon w={'18px'} h={'18px'} />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Flex w={'full'} flexWrap={'wrap'} gap={'12px'}>
              {[
                'Numbers',
                'LCM and HCF',
                'Work and Wages',
                'Pipes and Cisterns',
                'Time Speed Distance',
                'Trains, Boats and Streams',
                'Percentages',
                'Ratio Proportion and Partnership',
                'Mixtures and Alligation',
                'Algebra',
                'Average',
                'Age',
                'Profit and Loss',
                'Simple Interest',
                'Compound Interest',
                'Mensuration 2D',
                'Mensuration 3D',
                'Trigonometry & Height and Distances',
                'Progressions',
                'Logarithms',
                'Permutation and Combination',
                'Probability',
                'Geometry',
                'Clocks',
                'Calendars',
                'Coding-Decoding',
                'Race',
              ].map((item, index) => {
                return (
                  <Center
                    px={'12px'}
                    py={'2px'}
                    bg={'brand.offwhite'}
                    border={'1px solid'}
                    borderColor={'brand.darkgray'}
                    key={index}
                    borderRadius={'50px'}
                  >
                    <MyText as="span" title={item} />
                  </Center>
                );
              })}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
