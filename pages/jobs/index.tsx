import {
  Filter,
  Layout,
  MyIcon,
  MyJobCard,
  MyText,
  PageHeroSection,
} from '@/component';
import { jobCardFields, jobsFilter } from '@/constant/constantFields';
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

export default function Jobs() {
  const [isSortClicked, setIsSortClicked] = useState(true);

  return (
    <>
      <Head>
        <title>Jobs | Scope Seeker</title>
      </Head>
      <PageHeroSection
        title="Explore The Oppournities"
        alt="jobs"
        subtitle="Here you will find the job according to your skills."
        src="/assets/images/terms.png"
      />
      <Layout>
        <VStack
          gap={{ base: '30px', lg: '40px' }}
          w={{ base: '100%', lg: '100%' }}
          minH={'100vh'}
          mx={'auto'}
          spacing={0}
          mt={'32px'}
        >
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
              <HStack w="full" justifyContent="space-between" gap={'62px'}>
                <HStack
                  overflow={'hidden'}
                  spacing={0}
                  justifyContent={'space-between'}
                  border={'1px solid'}
                  borderColor={'brand.lightgray'}
                  pl={'12px'}
                  w={{ base: '100%', sm: '70%', md: '60%', lg: '50%' }}
                  borderRadius={'60px'}
                  boxShadow={'0px 0px 20px rgba(0,0,0,0.1)'}
                >
                  <Input
                    variant={'unstyled'}
                    h={'full'}
                    placeholder="Search by Role, Location, Type..."
                    fontSize={'14px'}
                  />
                  <Center
                    cursor={'pointer'}
                    p={'8px'}
                    px={'10px'}
                    bg={'brand.primary'}
                    borderRadius={'0px'}
                  >
                    <MyIcon
                      name="search"
                      color="brand.white"
                      width="20px"
                      height="20px"
                      strokeWidth="2"
                    />
                  </Center>
                </HStack>
                {/* Sort Button */}
                <HStack
                  w="140px"
                  h="32px"
                  borderRadius={'50px'}
                  overflow={'hidden'}
                  border={'1.5px solid'}
                  borderColor={'brand.primary'}
                  spacing={0}
                  flexShrink={0}
                  display={{ base: 'none', sm: 'flex' }}
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
                  lg: 'repeat(2, 1fr)',
                }}
                gap={{ base: 6, lg: 4, xl: 6 }}
                mx={'auto'}
                pt={'42px'}
                width={'100%'}
              >
                <>
                  {jobCardFields.map((item, key) => {
                    return (
                      <GridItem key={key}>
                        <MyJobCard
                          companyIconLogo={item.companyIconLogo}
                          role={item.role}
                          companyName={item.companyName}
                          location={item.location}
                          jobType={item.jobType}
                          companyDesc={item.companyDesc}
                        />
                      </GridItem>
                    );
                  })}
                </>
              </Grid>
            </VStack>
          </Center>
        </VStack>
      </Layout>
    </>
  );
}
