import { Layout, MainHeading, MyIcon, MyText } from '@/component';
import {
  PlacementPreparationResources,
  helpfulResources,
} from '@/constant/helpfulResources';
import PageHeroSection from '@/section-components/page-header/PageHeader';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
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
  const pageTitle = slug ? `${slug} | Scope Seeker` : 'Scope Seeker';
  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>
      <VStack gap={'52px'}>
        <PageHeroSection
          title="Resources for Placement Preparation"
          alt="resource"
          src="/assets/images/dashboard.png"
          subtitle="Discover a comprehensive collection of study and practice materials specifically tailored to the syllabus and requirements of job placements. "
        />
        <Layout>
          <VStack gap={'52px'}>
            <Box>
              <MyText
                as="p"
                title={`Welcome to our comprehensive Placement Preparation section. Here, you'll find all the important resources you need to excel in job placements. From interview questions and sample tests to tutorials and expert guidance, we have curated a collection of essential materials to help you stand out from the competition. Prepare comprehensively, enhance your skills, and boost your confidence with our comprehensive placement preparation resources. Get ready to seize lucrative job opportunities and embark on a successful career journey.`}
              />
            </Box>
            <VStack
              w={'full'}
              flexWrap={'wrap'}
              spacing={0}
              alignItems={'flex-start'}
              gap={'18px'}
            >
              <Accordion
                allowToggle
                w={'100%'}
                flexWrap={'wrap'}
                gap={'12px'}
                justifyContent={'space-between'}
                display={'flex'}
              >
                {PlacementPreparationResources.map((item, index) => {
                  return (
                    <AccordionItem
                      w={'100%'}
                      key={index}
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
                          <MyText as="title" title={item.title} />
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
                              <InsideAccordion data={item.topics} />
                            </TabPanel>

                            <TabPanel px={0}>
                              <InsideAccordion
                                data={item.resources}
                                isResources={true}
                              />
                            </TabPanel>
                          </TabPanels>
                        </Tabs>
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </VStack>
          </VStack>
        </Layout>
      </VStack>
    </>
  );
}

export default HelpfulResourcesCateegory;

interface IInsideAccordion {
  data: {
    title: string;
    subItem: string[];
  }[];
  isResources?: boolean;
}
const InsideAccordion = ({ data, isResources = false }: IInsideAccordion) => {
  return (
    <>
      <Box></Box>
      <Accordion allowToggle w={'100%'}>
        {data.map((item, index) => {
          return (
            <AccordionItem w={'100%'} key={index}>
              <AccordionButton
                p={0}
                px={'12px'}
                _hover={{ bg: 'brand.aliceblue' }}
              >
                <Center
                  h={'60px'}
                  w={'100%'}
                  justifyContent={'space-between'}
                  gap={'18px'}
                >
                  <MyText as="title" title={item.title} />
                </Center>
                <AccordionIcon w={'22px'} h={'22px'} />
              </AccordionButton>
              <AccordionPanel pb={'52px'} pt={'32px'}>
                <Flex w={'full'} flexWrap={'wrap'} gap={'12px'}>
                  {item.subItem.map((subItem, subIndex) => {
                    return (
                      <>
                        {!isResources && (
                          <Center
                            px={'16px'}
                            py={'6px'}
                            bg={'brand.offwhite'}
                            border={'1px solid'}
                            borderColor={'brand.lightgray'}
                            key={subIndex}
                            borderRadius={'50px'}
                          >
                            <MyText as="span" title={subItem} />
                          </Center>
                        )}

                        {isResources && (
                          <Center
                            w={'400px'}
                            h={'130px'}
                            border={'1px solid'}
                            borderColor={'brand.lightgray'}
                            borderRadius={'12px'}
                            cursor={'pointer'}
                            justifyContent={'flex-start'}
                            padding={'16px'}
                            gap={'18px'}
                            _hover={{
                              borderColor: 'brand.primary',
                              boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                            }}
                          >
                            <Center
                              width={'100px'}
                              h={'100px'}
                              bg={'red.400'}
                              borderRadius={'20px'}
                            >
                              <MyIcon
                                name="youtube"
                                width="72px"
                                height="72px"
                                color="brand.white"
                              />
                            </Center>
                            <MyText as="title" title={subItem} />
                          </Center>
                        )}
                      </>
                    );
                  })}
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};
