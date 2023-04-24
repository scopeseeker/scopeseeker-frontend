import MyButton from '@/component/button/MyButton';
import MyJobCard from '@/component/cards/MyJobCard';
import MyDivider from '@/component/divider/MyDivider';
import Filter from '@/component/filter/Filter';
import MyText from '@/component/text/MyText';
import { jobsFilter } from '@/constant/filterFeilds';
import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';

export default function Jobs() {
  const [isSortClicked, setIsSortClicked] = useState(true);
  return (
    <>
      <Head>
        <title>Jobs | Scope Seeker</title>
      </Head>
      <VStack gap={'40px'} w={'80%'} minH={'100vh'} mx={'auto'} spacing={0}>
        <HStack
          w={'full'}
          mt={'30px'}
          h={'52px'}
          bg={'brand.white'}
          boxShadow={'0px 0px 120px rgb(0, 0, 0, 0.2)'}
          borderRadius={6}
          border={'1px solid'}
          borderColor={'brand.border'}
          overflow={'hidden'}
          justifyContent={'space-between'}
          pl={'5px'}
        >
          <Input
            type="text"
            variant={'unstyled'}
            placeholder="Search by Roles, Company, Tech..."
            fontSize={'12px'}
            h={'full'}
            w={'25%'}
            px={'10px'}
          />
          <Divider orientation="vertical" colorScheme="black" />

          <MyButton title="Find Jobs" h={'full'} borderRadius={0} px={4} />
        </HStack>
        <MyDivider />
        <HStack alignItems={'flex-start'} w={'full'} minH={'100vh'}>
          <Box w={'20%'}>
            <Filter FilterObject={jobsFilter} />
          </Box>
          <VStack px={'50px'} w={'80%'} h={'100%'}>

            <HStack  justifyContent={'space-between'} w={'full'}>
              <Heading as={'span'} fontSize={'sm'}>
                Showing 69 Jobs
              </Heading>
              <HStack
                h={7}
                gap={0}
                spacing={0}
                bg={'brand.aliceblue'}
                borderRadius={20}
                overflow={'hidden'}
                border={'1px solid'}
                borderColor={'brand.primary'}
              >
                <MyButton
                  borderRadius={0}
                  variant={!isSortClicked ? 'link' : 'solid'}
                  h={'100%'}
                  w="50%"
                  title="Newest"
                  px={2}
                  fontSize="xs"
                  py={1}
                  onClick={() => setIsSortClicked(!isSortClicked)}
                />
                <MyButton
                  borderRadius={0}
                  variant={isSortClicked ? 'link' : 'solid'}
                  h={'100%'}
                  w="50%"
                  title="Oldest"
                  px={2}
                  py={1}
                  fontSize="xs"
                  onClick={() => setIsSortClicked(!isSortClicked)}
                />
              </HStack>
            </HStack>
            <Box pt={6} w={'full'} >
              <Grid templateColumns="repeat(3, 1fr)" gap={'16px'}>
                <GridItem>
                  <MyJobCard
                    companyIconLogo={
                      '/assets/images/company-logo/bookmyshow.png'
                    }
                    role={'Frontend Developer'}
                    companyName={'Tata Consultancy Service'}
                    location={'Bhopal, Madhaya Pradesh'}
                    jobType={[
                      { label: 'Full Time', value: 'full', color: 'green' },
                      { label: 'Part Time', value: 'part', color: 'yellow' },
                      { label: 'Internship', value: 'intern', color: 'blue' },
                      { label: 'Startup', value: 'intern', color: 'purple' },
                      { label: 'Indian MNC', value: 'intern', color: 'cyan' },
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
                      { label: 'Full Time', value: 'full', color: 'green' },
                      { label: 'Part Time', value: 'part', color: 'yellow' },
                      { label: 'Internship', value: 'intern', color: 'blue' },
                      { label: 'Startup', value: 'intern', color: 'purple' },
                      { label: 'Indian MNC', value: 'intern', color: 'cyan' },
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
                      { label: 'Full Time', value: 'full', color: 'green' },
                      { label: 'Part Time', value: 'part', color: 'yellow' },
                      { label: 'Internship', value: 'intern', color: 'blue' },
                      { label: 'Startup', value: 'intern', color: 'purple' },
                      { label: 'Indian MNC', value: 'intern', color: 'cyan' },
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
                      { label: 'Full Time', value: 'full', color: 'green' },
                      { label: 'Part Time', value: 'part', color: 'yellow' },
                      { label: 'Internship', value: 'intern', color: 'blue' },
                      { label: 'Startup', value: 'intern', color: 'purple' },
                      { label: 'Indian MNC', value: 'intern', color: 'cyan' },
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
                      { label: 'Full Time', value: 'full', color: 'green' },
                      { label: 'Part Time', value: 'part', color: 'yellow' },
                      { label: 'Internship', value: 'intern', color: 'blue' },
                      { label: 'Startup', value: 'intern', color: 'purple' },
                      { label: 'Indian MNC', value: 'intern', color: 'cyan' },
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
                      { label: 'Full Time', value: 'full', color: 'green' },
                      { label: 'Part Time', value: 'part', color: 'yellow' },
                      { label: 'Internship', value: 'intern', color: 'blue' },
                      { label: 'Startup', value: 'intern', color: 'purple' },
                      { label: 'Indian MNC', value: 'intern', color: 'cyan' },
                    ]}
                    companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
                    isNamedLogo={true}
                  />
                </GridItem>
              </Grid>
            </Box>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
}
