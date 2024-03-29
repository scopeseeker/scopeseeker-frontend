'use client';
import { Layout, MyIcon, MyText } from '@/component';
import { IconNameType } from '@/constant/IconLibrary';
import { PlacementPreparationResources } from '@/constant/helpfulResources';
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
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';

export default function MoreResources() {
  return (
    <>
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
                px={'3px'}
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
                      px={{ base: '6px', md: '32px' }}
                      overflow={'hidden'}
                    >
                      <AccordionButton p={0} _hover={{ bg: 'transparent' }}>
                        <Center
                          h={'100px'}
                          w={'100%'}
                          justifyContent={'flex-start'}
                          py={'6px'}
                          px={'10px'}
                          textAlign={'start'}
                          gap={'18px'}
                        >
                          <Center
                            w={{ base: '50px', md: '70px' }}
                            h={{ base: '50px', md: '70px' }}
                            borderRadius={'50%'}
                            bg={'brand.aliceblue'}
                            flexShrink={0}
                            border={'1px solid'}
                            borderColor={'brand.primary'}
                          >
                            <MyIcon name="target" width="35px" height="35px" />
                          </Center>
                          <VStack
                            w={'full'}
                            alignItems={'flex-start'}
                            justifyContent={'flex-start'}
                          >
                            <MyText
                              as="title"
                              align={'start'}
                              title={item.title}
                            />
                          </VStack>
                        </Center>
                        <AccordionIcon w={'18px'} h={'18px'} />
                      </AccordionButton>
                      <AccordionPanel pb={'32px'} px={'4px'}>
                        <Tabs variant="unstyled" w={'full'}>
                          <TabList
                            gap={{ base: '6px', md: '32px' }}
                            marginBottom={'32px'}
                            w={'full'}
                            justifyContent={{
                              base: 'space-between',
                              sm: 'initial',
                            }}
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
                                  minW={{ base: '48%', sm: '40%', md: '200px' }}
                                  minH={'55px'}
                                  borderRadius={'10px'}
                                >
                                  {item}
                                </Tab>
                              );
                            })}
                          </TabList>
                          <TabPanels alignItems={'flex-start'} w={'full'}>
                            <TabPanel px={0}>
                              <Accordion allowToggle w={'100%'}>
                                {item.topics.map((topic, index) => {
                                  return (
                                    <>
                                      <AccordionItem w={'100%'} key={index}>
                                        <AccordionBtn
                                          buttonTitle={topic.title}
                                        />
                                        <AccordionPanel pb={'52px'} pt={'32px'}>
                                          <Flex
                                            w={'full'}
                                            flexWrap={'wrap'}
                                            gap={'12px'}
                                          >
                                            {topic.subItem.map(
                                              (list, index) => {
                                                return (
                                                  <Center
                                                    key={index}
                                                    px={'16px'}
                                                    py={'6px'}
                                                    bg={'brand.offwhite'}
                                                    border={'1px solid'}
                                                    borderColor={
                                                      'brand.lightgray'
                                                    }
                                                    borderRadius={'50px'}
                                                  >
                                                    <MyText
                                                      as="span"
                                                      title={list}
                                                    />
                                                  </Center>
                                                );
                                              },
                                            )}
                                          </Flex>
                                        </AccordionPanel>
                                      </AccordionItem>
                                    </>
                                  );
                                })}
                              </Accordion>
                            </TabPanel>

                            <TabPanel px={0}>
                              <Accordion allowToggle w={'100%'}>
                                {item.resources.map((resource, index) => {
                                  return (
                                    <>
                                      <AccordionItem w={'100%'} key={index}>
                                        <AccordionBtn
                                          buttonTitle={resource.title}
                                        />
                                        <AccordionPanel pb={'52px'} pt={'32px'}>
                                          <Flex
                                            w={'full'}
                                            flexWrap={'wrap'}
                                            gap={'12px'}
                                          >
                                            {resource.source.map(
                                              (item, index) => {
                                                return (
                                                  <CourseCard
                                                    key={index}
                                                    courseName={item.courseName}
                                                    description={
                                                      item.description
                                                    }
                                                    language={item.language}
                                                    icon={item.icon}
                                                  />
                                                );
                                              },
                                            )}
                                          </Flex>
                                        </AccordionPanel>
                                      </AccordionItem>
                                    </>
                                  );
                                })}
                              </Accordion>
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

interface ICourseCard {
  key?: string | number;
  courseName: string;
  description: string;
  language: string;
  icon?: IconNameType;
}
const CourseCard = ({
  courseName,
  description,
  language,
  icon = 'default',
}: ICourseCard) => {
  return (
    <Center
      w={{ base: '100%', sm: '450px' }}
      minH={'130px'}
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
      flexDirection={{ base: 'column', sm: 'row' }}
      alignItems={{ base: 'start', sm: 'center' }}
    >
      <Center
        width={{ base: '50px', sm: '80px' }}
        h={{ base: '50px', sm: '80px' }}
        flexShrink={0}
        bg={'brand.aliceblue'}
        borderRadius={{ base: '10px', sm: '20px' }}
        border={'1px solid'}
        borderColor={'brand.darkgray'}
      >
        <MyIcon name={icon} width="42px" height="42px" color="brand.black" />
      </Center>

      <Box>
        <MyText as="p" fontWeight={500} title={courseName} />
        <MyText as="span" title={description} />
        <Center my={'4px'} w={'fit-content'} gap={'4px'}>
          <MyText as="small" title="Language:" />
          <MyText as="small" title={language} />
        </Center>
      </Box>
    </Center>
  );
};
interface IAccordionBtn {
  buttonTitle: string;
}

const AccordionBtn = ({ buttonTitle }: IAccordionBtn) => {
  return (
    <AccordionButton
      p={0}
      px={'12px'}
      _hover={{ bg: 'brand.aliceblue' }}
      borderRadius={'10px'}
      my={'10px'}
    >
      <Center
        h={'60px'}
        w={'100%'}
        justifyContent={'space-between'}
        gap={'18px'}
      >
        <MyText as="title" title={buttonTitle} textAlign={'start'} />
      </Center>
      <AccordionIcon w={'22px'} h={'22px'} />
    </AccordionButton>
  );
};
