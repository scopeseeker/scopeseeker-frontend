import {
  Layout,
  MainHeading,
  MyButton,
  MyIcon,
  MyImage,
  MyText,
} from '@/component';
import { jobCardFields } from '@/constant/constantFields';
import { MyJobCard } from '@/section-components';
import { Box, Center, HStack, Heading, VStack } from '@chakra-ui/react';
import { useRef, useState } from 'react';

export default function Dashboard() {
  const companyBoxRef = useRef<HTMLDivElement>(null);
  const [isSortClicked, setIsSortClicked] = useState(true);

  return (
    <Layout w={'full'}>
      <VStack alignItems={'flex-start'} gap={'32px'}>
        <MainHeading
          title="Dashboard"
          subTitle="Stay organized by monitoring saved jobs, applied jobs, and favorite companies all in one place."
          align={'start'}
        />
        <HStack w={'full'} alignItems={'start'}>
          <VStack
            w={'20%'}
            px={'12px'}
            gap={'32px'}
            position={'sticky'}
            top={90}
          >
            <Center
              cursor={'pointer'}
              w={'full'}
              h={'60px'}
              borderRadius={'6px'}
              bg={'brand.primary'}
            >
              <MyText as="title" title="My Profile" color="brand.white" />
            </Center>
            <VStack w={'full'} gap={'8px'}>
              {[
                { name: 'Dashboard', icon: 'chartPie' },
                { name: 'Helpful Resources', icon: 'case' },
                { name: 'Preferred Companies', icon: 'case' },
                { name: 'Saved Jobs', icon: 'save' },
                { name: 'Recommanded Jobs', icon: 'case' },
              ].map((items, index) => {
                return (
                  <>
                    <Center
                      w={'full'}
                      key={index}
                      justifyContent={'flex-start'}
                      borderRadius={'8px'}
                      bg={'brand.transprimary'}
                      border={'1px solid'}
                      borderColor={'brand.lightgray'}
                      px={'12px'}
                      py={'6px'}
                      gap={'4px'}
                      cursor={'pointer'}
                      _hover={{ bg: 'brand.aliceblue' }}
                    >
                      <MyIcon name={items.icon} width="22px" height="22px" />
                      <MyText as="span" title={items.name} />
                    </Center>
                  </>
                );
              })}
            </VStack>

            <Center overflow={'hidden'} p={'10px'} pb={'0'} w={'full'}>
              <MyImage
                src={'/assets/images/plant.png'}
                alt="section"
                width={180}
                height={180}
              />
            </Center>
          </VStack>
          <VStack width={'80%'}>
            <VStack w={'90%'} gap={'52px'}>
              <HStack
                w={'full'}
                h={'160px'}
                borderRadius={'12px'}
                justifyContent={'space-between'}
                bgGradient="linear(to-r, brand.aliceblue,brand.aliceblue, transparent, transparent)"
                p={'12px'}
                px={'32px'}
                position={'relative'}
              >
                <Box w={'50%'}>
                  <Heading color={'brand.primary'}>Hello, Lokesh</Heading>
                  <MyText
                    as="span"
                    title={`Choose a job you love, and you'll never work.`}
                  />
                </Box>
                <Center position={'absolute'} right={0} bottom={0}>
                  <MyImage
                    src={'/assets/images/d.png'}
                    alt="homepage"
                    width={300}
                    height={200}
                  />
                </Center>
              </HStack>
              {/* Overview */}
              <VStack w={'full'} alignItems={'flex-start'} gap={'22px'}>
                <MyText as="heading" title="Overview" />
                <HStack gap={'12px'}>
                  {[
                    { count: '34', tag: 'Visited Jobs' },
                    { count: '04', tag: 'Saved Jobs' },
                    { count: '14', tag: 'Applied Jobs' },
                  ].map((item, index) => {
                    return (
                      <>
                        <Center
                          key={index}
                          w={'230px'}
                          borderRadius={'8px'}
                          h={'80px'}
                          boxShadow={'0px 4px 6px rgba(0,0,0,0.1)'}
                          border={'1px solid'}
                          borderColor={'brand.darkgray'}
                          bg={'brand.aliceblue'}
                          borderRight={'8px solid'}
                          borderRightColor={'brand.primary'}
                          px={'12px'}
                          gap={'12px'}
                          justifyContent={'flex-start'}
                        >
                          <Center
                            w={'52px'}
                            h={'52px'}
                            borderRadius={'50%'}
                            bg={'brand.primary'}
                          >
                            <MyIcon
                              name="user"
                              width="30px"
                              height="30px"
                              color="brand.white"
                            />
                          </Center>
                          <VStack spacing={0} alignItems={'flex-start'}>
                            <MyText as="heading" title={item.count} />
                            <MyText as="span" title={item.tag} />
                          </VStack>
                        </Center>
                      </>
                    );
                  })}
                </HStack>
              </VStack>
              {/* Recommanded Jobs */}
              <VStack w={'full'} alignItems={'flex-start'} gap={'18px'}>
                <HStack w={'full'} justifyContent={'space-between'}>
                  <MyText as="heading" title="Recommanded Jobs" />
                  <MyButton title="View All" />
                </HStack>
                <HStack
                  w={'full'}
                  overflow={'scroll'}
                  gap={'14px'}
                  py={'18px'}
                  __css={{
                    '&::-webkit-scrollbar': {
                      height: '8px',
                    },
                  }}
                >
                  {jobCardFields.map((item, key) => {
                    return (
                      <MyJobCard
                        key={key}
                        companyIconLogo={item.companyIconLogo}
                        role={item.role}
                        companyName={item.companyName}
                        location={item.location}
                        jobType={item.jobType}
                        companyDesc={item.companyDesc}
                        flexShrink={0}
                        w={'49%'}
                      />
                    );
                  })}
                </HStack>
              </VStack>

              {/* Blog Suggestion */}
              <VStack w={'full'} alignItems={'flex-start'} gap={'32px'}>
                <HStack w={'full'} justifyContent={'space-between'}>
                  <MyText as="heading" title="Must Read Blog" />
                  <MyButton title="See More" />
                </HStack>
                <HStack
                  w={'full'}
                  overflow={'scroll'}
                  gap={'20px'}
                  __css={{
                    '&::-webkit-scrollbar': {
                      height: '8px',
                    },
                  }}
                  pb={'18px'}
                >
                  {[1, 2, 3, 4].map((key) => {
                    return (
                      <>
                        <Center
                          key={key}
                          w={'48%'}
                          borderRadius={'20px'}
                          h={'100px'}
                          bg={'brand.white'}
                          border={'1px solid'}
                          borderColor={'brand.lightgray'}
                          justifyContent={'flex-start'}
                          p={'8px'}
                          gap={'18px'}
                          flexShrink={0}
                          boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.1)'}
                          cursor={'pointer'}
                          _hover={{ borderColor: 'brand.primary' }}
                        >
                          <Center
                            w={'140px'}
                            height={'100%'}
                            bg={'green.200'}
                            borderRadius={'20px'}
                            overflow={'hidden'}
                          >
                            <MyImage
                              alt="blog"
                              width={500}
                              height={500}
                              src={'/assets/images/blog.jpg'}
                            />
                          </Center>
                          <Box>
                            <MyText
                              as="title"
                              title="Frontend Development Guide"
                            />
                            <HStack>
                              <MyText
                                as="span"
                                title="Development"
                                color="brand.primary"
                                fontWeight={500}
                              />
                            </HStack>
                          </Box>
                        </Center>
                      </>
                    );
                  })}
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </Layout>
  );
}
