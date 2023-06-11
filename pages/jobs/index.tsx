import {
  Filter,
  Layout,
  MyButton,
  MyDivider,
  MyIcon,
  MyJobCard,
  MyText,
} from '@/component';
import { jobCardFields, jobsFilter } from '@/constant/constantFields';
import {
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  Input,
  Select,
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


            <HStack>
            <Select borderRadius={'12px'} size='sm' placeholder="Location" >
              <option value="option1">Bhopal</option>
              <option value="option2">New Delhi</option>
              <option value="option3">NewYork</option>
            </Select>
            <Select borderRadius={'8px'} size='sm'  placeholder="Job Type">
              <option value="option1">IT</option>
              <option value="option2">Software Development</option>
              <option value="option3">Web Development</option>
            </Select>
            <Select borderRadius={'8px'} size='sm' placeholder="Experience">
              <option value="option1">0-2years</option>
              <option value="option2">2-5 years</option>
              <option value="option3">5-9 years</option>
            </Select>

            </HStack>

            

            {/* <Popover>
              <PopoverTrigger>
                <HStack cursor={'pointer'}>
                  <MyIcon name="location" />
                  <MyText title="Location" as={'title'} />
                  <MyIcon name="chevronDown" />
                </HStack>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverCloseButton />
                  <PopoverBody></PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover> */}

            <MyButton title="Find Jobs" h={'100%'} px={'20px'} />
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
                  lg: 'repeat(2, 1fr)',
                }}
                gap={{ base: 6, lg: 4, xl: 6 }}
                mx={'auto'}
                pt={'25px'}
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
