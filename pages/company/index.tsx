import {
  Filter,
  Layout,
  MyButton,
  MyDivider,
  MyIcon,
  MyText,
} from '@/component';
import { companyCardFields, companyFilter } from '@/constant/constantFields';
import { MyCompanyCard } from '@/section-components';
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
              <MyIcon name="arrowLeft" />
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
                <MyText
                  as={'span'}
                  color="brand.white"
                  title={'Space'}
                  fontWeight={500}
                />
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
              <MyIcon name="arrowRight" />
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
                  lg: 'repeat(2, 1fr)',
                }}
                gap={{ base: 6, lg: 4, xl: 6 }}
                mx={'auto'}
                pt={'25px'}
                width={'100%'}
              >
                <>
                  {companyCardFields.map((item, key) => {
                    return (
                      <GridItem key={key}>
                        <MyCompanyCard
                          companyDesc={item.companyDescription}
                          companyName={item.companyName}
                          tags={item.tags}
                          rating={item.rating}
                          companyLogo={item.companyLogo}
                          fullDetailLink={item.fullDetailsLink}
                          viewJobs={item.viewJobsLink}
                          key={key}
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
