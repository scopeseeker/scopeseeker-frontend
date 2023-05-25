import { Filter, Layout, MyButton, MyDivider, MyText } from '@/component';
import MyCompanyCard from '@/component/cards/MyCompanyCard';
import { companyFilter } from '@/constant/constantFields';
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
import { useRef, useState } from 'react';

export default function CompaniesPage() {
  const [isSortClicked, setIsSortClicked] = useState(true);
  const companyBoxRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Companies | Scope Seeker</title>
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
            borderRadius={'50px'}
            overflow={'hidden'}
            spacing={0}
            justifyContent={'space-between'}
          >
            <Input
              variant={'unstyled'}
              mx={'20px'}
              h={'full'}
              placeholder="Search by role, companies, technologies..."
              fontSize={'14px'}
              width={'30%'}
            />

            <MyButton title="Find Jobs" h={'100%'} px={'20px'} />
          </HStack>
          
          <MyDivider />

          <HStack
            maxW={'90%'}
            bg={'brand.aliceblue'}
            py={'12px'}
            borderRadius={'12px'}
            px={'24px'}
          >
            <Center
              px={'12px'}
              cursor={'pointer'}
              onClick={() => {
                if (companyBoxRef && companyBoxRef.current) {
                  companyBoxRef.current.scrollLeft -= 168;
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
                width="24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M249.38 336L170 256l79.38-80M181.03 256H342"
                />
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  strokeWidth="32"
                />
              </svg>
            </Center>
            <Center
              px={'5px'}
              justifyContent={'flex-start'}
              gap={'8px'}
              width={'840px'}
              py={'12px'}
              overflowX={'scroll'}
              css={{
                '&::-webkit-scrollbar': {
                  // display: 'none',
                  height: '5px',
                },
              }}
              cursor={'pointer'}
              ref={companyBoxRef}
              scrollBehavior={'smooth'}
            >
               <Center
                      w={'160px'}
                      flexShrink={0}
                      border={'1px solid'}
                      borderColor={'brand.lightgray'}
                      h={'60px'}
                      borderTopEndRadius={'12px'}
                      backgroundColor={'brand.white'}
                      borderBottomLeftRadius={'12px'}
                      bgColor={'brand.primary'}
                    >
                      <MyText as={'span'} color='brand.white' title={'Space'} fontWeight={500} />
                    </Center>
              <>

                {[
                  'Indian MNCs',
                  'Fortune 500',
                  'FinTech',
                  'Unicron',
                  'Healthcare',
                  'Information',
                  'Unicron',
                  'Healthcare',
                  'Information',
                ].map((item, key) => {
                  return (
                    <Center
                      key={key}
                      w={'160px'}
                      flexShrink={0}
                      // boxShadow={'0px 0px 5px rgb(0, 0, 0, 0.1)'}
                      border={'1px solid'}
                      borderColor={'brand.lightgray'}
                      color={'brand.black'}
                      h={'60px'}
                      borderTopEndRadius={'12px'}
                      backgroundColor={'brand.white'}
                      borderBottomLeftRadius={'12px'}
                    >
                      <MyText as={'span'} title={item} fontWeight={500} />
                    </Center>
                  );
                })}
              </>
            </Center>
            <Center
              px={'12px'}
              cursor={'pointer'}
              onClick={() => {
                if (companyBoxRef && companyBoxRef.current) {
                  companyBoxRef.current.scrollLeft += 168;
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
                width="24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M262.62 336L342 256l-79.38-80M330.97 256H170"
                />
                <path
                  d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  strokeWidth="32"
                />
              </svg>
            </Center>
          </HStack>

          <Center
            alignItems={'flex-start'}
            w={'full'}
            minH={'100vh'}
            gap={'30px'}
          >
            {/* Filter */}
            <Box display={{ base: 'none', md: 'initial' }}>
              <Filter FilterObject={companyFilter} />
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
                  <MyCompanyCard
                    companyIconLogo={'/assets/images/company-logo/github.png'}
                    role={'Frontend Developer'}
                    companyName={'Tata Consultancy Service'}
                    location={'Bhopal, Madhya Pradesh'}
                    jobType={[
                      'Full Time',
                      'Part Time',
                      'Internship',
                      'Startup',
                      'Indian MNC',
                    ]}
                    companyDesc="UX designers measure and optimize applications to improve ease of use (usability), and create the best user experience by exploring many different approaches to solve end-users' problems"
                  />
                </GridItem>

                <GridItem>
                  <MyCompanyCard
                    companyIconLogo={'/assets/images/company-logo/github.png'}
                    role={'Software Engineer'}
                    companyName={'Apple Inc.'}
                    location={'Cupertino, California'}
                    jobType={[
                      'Full Time',
                      'Remote',
                      'Contract',
                      'Fortune 500',
                      'Tech Giant',
                    ]}
                    companyDesc="Apple Inc. is a multinational technology company known for its consumer electronics, software, and online services. They are known for innovative products such as the iPhone, iPad, and Mac."
                  />
                </GridItem>

                <GridItem>
                  <MyCompanyCard
                    companyIconLogo={'/assets/images/company-logo/google.png'}
                    role={'Backend Developer'}
                    companyName={'Google LLC'}
                    location={'Mountain View, California'}
                    jobType={[
                      'Full Time',
                      'Remote',
                      'Flexible Hours',
                      'Tech Giant',
                      'Silicon Valley',
                    ]}
                    companyDesc="Google LLC is an American multinational technology company that specializes in Internet-related services and products. They provide search engine services, online advertising technologies, cloud computing, software, and more."
                  />
                </GridItem>

                <GridItem>
                  <MyCompanyCard
                    companyIconLogo={'/assets/images/company-logo/google.png'}
                    role={'Software Engineer'}
                    companyName={'Microsoft Corporation'}
                    location={'Redmond, Washington'}
                    jobType={[
                      'Full Time',
                      'Remote',
                      'Contract',
                      'Fortune 500',
                      'Tech Giant',
                    ]}
                    companyDesc="Microsoft Corporation is an American multinational technology corporation that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services."
                  />
                </GridItem>

                <GridItem>
                  <MyCompanyCard
                    companyIconLogo={
                      '/assets/images/company-logo/bookmyshow.png'
                    }
                    role={'DevOps Engineer'}
                    companyName={'Amazon.com, Inc.'}
                    location={'Seattle, Washington'}
                    jobType={[
                      'Full Time',
                      'Remote',
                      'E-commerce',
                      'Fortune 500',
                      'Tech Giant',
                    ]}
                    companyDesc="Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington. It focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence."
                  />
                </GridItem>

                <GridItem>
                  <MyCompanyCard
                    companyIconLogo={'/assets/images/company-logo/linkedin.png'}
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
                  />
                </GridItem>
                <GridItem>
                  <MyCompanyCard
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
                  <MyCompanyCard
                    companyIconLogo={'/assets/images/company-logo/github.png'}
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
                  />
                </GridItem>
                <GridItem>
                  <MyCompanyCard
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
                  <MyCompanyCard
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
                  <MyCompanyCard
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
