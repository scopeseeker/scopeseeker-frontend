import {
  Layout,
  MainHeading,
  MyBadge,
  MyButton,
  MyImage,
  MyText,
} from '@/component';
import { Box, Center, Grid, GridItem, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const FeaturedCompany = () => {
  return (
    <Layout w={'full'}>
      <Center flexDirection={'column'} w={'full'} gap={'72px'}>
        <MainHeading
          title={'Featured Companies'}
          subTitle={
            'Discover these exceptional companies actively searching for top talent to join their dynamic teams. '
          }
        />
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
          gap={'12px'}
        >
          {[1, 2, 3, 4].map((items, index) => {
            return (
              <GridItem key={index}>
                <VStack
                  bg={'brand.white'}
                  border={'1px solid'}
                  borderColor={'brand.darkgray'}
                  borderRadius={'8px'}
                  p={'12px'}
                  my={'6px'}
                  gap={'4px'}
                  flexShrink={0}
                  cursor={'pointer'}
                  _hover={{
                    borderColor: 'brand.primary',
                    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
                  }}
                >
                  <Center
                    w={'60px'}
                    h={'60px'}
                    borderRadius={'50%'}
                    p={'8px'}
                    bg={'brand.aliceblue'}
                  >
                    <MyImage
                      src={'/assets/images/company-logo/google.png'}
                      alt="company"
                      width={50}
                      height={50}
                    />
                  </Center>
                  <MyText as="title" title="Microsoft Inc." />
                  <Center
                    flexWrap={'wrap'}
                    gap={'8px'}
                    w={'full'}
                    h={{ base: '65px', md: '60px' }}
                    p={'3px'}
                    overflow={'hidden'}
                  >
                    <MyBadge
                      labelArray={[
                        'MNC',
                        'Product Base',
                        'IT',
                        'Fortune 500',
                        'Product Base',
                        'Fortune 500',
                      ]}
                    />
                  </Center>
                  <MyText
                    as="span"
                    fontSize={{ base: '10px', md: '10px' }}
                    title={`⭐ 4.4 Rating | 430 Reviews`}
                  />
                  <Box
                    h={{ base: '48px', sm: '45px' }}
                    p={'2px'}
                    overflow={'hidden'}
                  >
                    <MyText
                      as="span"
                      title="THis is a product serivec cpmapy where tou can wind a best job."
                      textAlign={'center'}
                    />
                  </Box>

                  <Center w={'full'}>
                    {/* <MyButton w={'50%'} title="Full Details" /> */}
                    <MyButton
                      w={{ base: '70%', sm: '50%', md: '60%' }}
                      title="View Jobs"
                      variant="outline"
                      borderWidth={'1.5px'}
                      fontWeight={500}
                      color={'brand.primary'}
                      borderColor={'brand.primary'}
                    />
                  </Center>
                </VStack>
              </GridItem>
            );
          })}
        </Grid>
        <Center w={'full'}>
          <Link href={'/company'}>
            <MyButton title="See All Company" px={'28px'} />
          </Link>
        </Center>
      </Center>
    </Layout>
  );
};

export default FeaturedCompany;
