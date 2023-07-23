'use client';
import { Filter, Layout, MyIcon, MyText } from '@/component';
import { companyCardFields } from '@/constant/constantFields';
import { companyFilter } from '@/constant/filterConstant';
import { MyCompanyCard, PageHeader } from '@/section-components';
import { Box, Center, Grid, GridItem, HStack, VStack } from '@chakra-ui/react';
import { useRef, useState } from 'react';

export default function CompaniesPage() {
  const [isSortClicked, setIsSortClicked] = useState(true);
  const companyBoxRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <PageHeader
        title="Companies"
        subtitle="Here you can find all comapnies"
        src="/assets/images/about-us.png"
        alt="company"
      />
      <Layout>
        <VStack
          gap={{ base: '30px', lg: '40px' }}
          w={{ base: '100%', lg: '100%' }}
          minH={'100vh'}
          mx={'auto'}
          spacing={0}
        >
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
                  title={'Indian MNCs'}
                  fontWeight={500}
                />
              </Center>
              <>
                {[
                  'Fortune 500',
                  'FinTech',
                  'IT',
                  'Unicron',
                  'Startups',
                  'Product Based',
                  'Service Based',
                  'Consulting',
                ].map((item, index) => {
                  return (
                    <Center
                      key={index}
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
                  {companyCardFields.map((item, index) => {
                    return (
                      <GridItem key={index}>
                        <MyCompanyCard
                          companyDesc={item.companyDescription}
                          companyName={item.companyName}
                          tags={item.tags}
                          rating={item.rating}
                          companyLogo={item.companyLogo}
                          fullDetailLink={item.fullDetailsLink}
                          viewJobs={item.viewJobsLink}
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
