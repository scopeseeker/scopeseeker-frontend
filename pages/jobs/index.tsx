import {
  Filter,
  Layout,
  MyButton,
  MyDivider,
  MyJobCard,
  MyText,
} from '@/component';
import {
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import { jobsFilter } from '../../constant/filterFields';

export default function Jobs() {
  const [isSortClicked, setIsSortClicked] = useState(true);
  return (
    <>
      <Head>
        <title>Jobs | Scope Seeker</title>
      </Head>
      <Layout>
        <VStack
          gap={{ base: '30px', lg: '40px' }}
          w={{ base: '100%', lg: '100%' }}
          minH={'100vh'}
          mx={'auto'}
          spacing={0}
        >
          {/* Search Box for Job and Company */}
          <HStack
            w={'full'}
            height={{ base: '40px', sm: '52px' }}
            boxShadow={'0px 0px 120px rgb(0, 0, 0, 0.2)'}
            borderRadius={6}
            overflow={'hidden'}
            spacing={0}
          >
            <HStack
              w={'full'}
              h={'full'}
              bg={'brand.white'}
              borderLeftRadius={6}
              border={'1px solid'}
              borderColor={'brand.lightgray'}
              px={'6px'}
            >
              <Input
                fontSize={{ base: '12px', md: '14px' }}
                placeholder={'Search by Roles, Company, Technologies...'}
                type="text"
                variant={'unstyled'}
                px={'4px'}
              />
            </HStack>
            <MyButton title="Find Jobs" size="lg" h={'full'} borderRadius={0} />
          </HStack>
          <MyDivider />

          <Center
            alignItems={'flex-start'}
            w={'full'}
            minH={'100vh'}
            gap={'30px'}
          >
            <Box display={{ base: 'none', md: 'initial' }}>
              <Filter FilterObject={jobsFilter} />
            </Box>
            <VStack minH="100vh" w="full">
              <HStack w="full" justifyContent="space-between">
                <MyText title="Showing 120 jobs" as="heading" />
                {/* Sort Button */}
                <HStack
                  w="140px"
                  h="32px"
                  borderRadius={'50px'}
                  overflow={'hidden'}
                  border={'1.5px solid'}
                  borderColor={'brand.primary'}
                  spacing={0}
                >
                  <Center
                    h={'full'}
                    w={'50%'}
                    bg={isSortClicked ? 'brand.primary' : 'transparent'}
                    cursor={'pointer'}
                    onClick={() => setIsSortClicked(!isSortClicked)}
                  >
                    <MyText
                      title="Newest"
                      as="span"
                      color={isSortClicked ? 'brand.white' : 'brand.primary'}
                    />
                  </Center>

                  <Center
                    h={'full'}
                    w={'50%'}
                    bg={!isSortClicked ? 'brand.primary' : 'transparent'}
                    cursor={'pointer'}
                    onClick={() => setIsSortClicked(!isSortClicked)}
                  >
                    <MyText
                      title="Oldest"
                      as="span"
                      color={!isSortClicked ? 'brand.white' : 'brand.primary'}
                    />
                  </Center>
                </HStack>
              </HStack>
              {/* Cards */}
              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                  lg: 'repeat(3, 1fr)',
                }}
                gap={{ base: 6, lg: 4, xl: 6 }}
                mx={'auto'}
                pt={'25px'}
              >
                <GridItem>
                  <MyJobCard
                    companyIconLogo={
                      '/assets/images/company-logo/bookmyshow.png'
                    }
                    role={'Frontend Developer'}
                    companyName={'Tata Consultancy Service'}
                    location={'Bhopal, Madhaya Pradesh'}
                    jobType={[
                      'Full Time',
                      'Part Time',
                      'Internship',
                      'Startup',
                      'Indian MNC',
                    ]}
                    companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
                    isNamedLogo={true}
                  />
                </GridItem>
                <GridItem>
                  <MyJobCard
                    companyIconLogo={
                      '/assets/images/company-logo/bookmyshow.png'
                    }
                    role={'Frontend Developer'}
                    companyName={'Tata Consultancy Service'}
                    location={'Bhopal, Madhaya Pradesh'}
                    jobType={[
                      'Full Time',
                      'Part Time',
                      'Internship',
                      'Startup',
                      'Indian MNC',
                    ]}
                    companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
                    isNamedLogo={true}
                  />
                </GridItem>
                <GridItem>
                  <MyJobCard
                    companyIconLogo={
                      '/assets/images/company-logo/bookmyshow.png'
                    }
                    role={'Frontend Developer'}
                    companyName={'Tata Consultancy Service'}
                    location={'Bhopal, Madhaya Pradesh'}
                    jobType={[
                      'Full Time',
                      'Part Time',
                      'Internship',
                      'Startup',
                      'Indian MNC',
                    ]}
                    companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
                    isNamedLogo={true}
                  />
                </GridItem>
                <GridItem>
                  <MyJobCard
                    companyIconLogo={
                      '/assets/images/company-logo/bookmyshow.png'
                    }
                    role={'Frontend Developer'}
                    companyName={'Tata Consultancy Service'}
                    location={'Bhopal, Madhaya Pradesh'}
                    jobType={[
                      'Full Time',
                      'Part Time',
                      'Internship',
                      'Startup',
                      'Indian MNC',
                    ]}
                    companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
                    isNamedLogo={true}
                  />
                </GridItem>
                <GridItem>
                  <MyJobCard
                    companyIconLogo={
                      '/assets/images/company-logo/bookmyshow.png'
                    }
                    role={'Frontend Developer'}
                    companyName={'Tata Consultancy Service'}
                    location={'Bhopal, Madhaya Pradesh'}
                    jobType={[
                      'Full Time',
                      'Part Time',
                      'Internship',
                      'Startup',
                      'Indian MNC',
                    ]}
                    companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
                    isNamedLogo={true}
                  />
                </GridItem>
                <GridItem>
                  <MyJobCard
                    companyIconLogo={
                      '/assets/images/company-logo/bookmyshow.png'
                    }
                    role={'Frontend Developer'}
                    companyName={'Tata Consultancy Service'}
                    location={'Bhopal, Madhaya Pradesh'}
                    jobType={[
                      'Full Time',
                      'Part Time',
                      'Internship',
                      'Startup',
                      'Indian MNC',
                    ]}
                    companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
                    isNamedLogo={true}
                  />
                </GridItem>
                <GridItem>
                  <MyJobCard
                    companyIconLogo={
                      '/assets/images/company-logo/bookmyshow.png'
                    }
                    role={'Frontend Developer'}
                    companyName={'Tata Consultancy Service'}
                    location={'Bhopal, Madhaya Pradesh'}
                    jobType={[
                      'Full Time',
                      'Part Time',
                      'Internship',
                      'Startup',
                      'Indian MNC',
                    ]}
                    companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
                    isNamedLogo={true}
                  />
                </GridItem>
                <GridItem>
                  <MyJobCard
                    companyIconLogo={
                      '/assets/images/company-logo/bookmyshow.png'
                    }
                    role={'Frontend Developer'}
                    companyName={'Tata Consultancy Service'}
                    location={'Bhopal, Madhaya Pradesh'}
                    jobType={[
                      'Full Time',
                      'Part Time',
                      'Internship',
                      'Startup',
                      'Indian MNC',
                    ]}
                    companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
                    isNamedLogo={true}
                  />
                </GridItem>
                <GridItem>
                  <MyJobCard
                    companyIconLogo={
                      '/assets/images/company-logo/bookmyshow.png'
                    }
                    role={'Frontend Developer'}
                    companyName={'Tata Consultancy Service'}
                    location={'Bhopal, Madhaya Pradesh'}
                    jobType={[
                      'Full Time',
                      'Part Time',
                      'Internship',
                      'Startup',
                      'Indian MNC',
                    ]}
                    companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
                    isNamedLogo={true}
                  />
                </GridItem>
              </Grid>
            </VStack>
          </Center>
        </VStack>
      </Layout>
    </>
  );
}