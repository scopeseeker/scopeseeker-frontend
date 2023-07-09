'use client';
import { Layout, MainHeading, MyIcon, MyText } from '@/component';
import { articleFields } from '@/constant/constantFields';
import { MyArticleCard, PageHeader } from '@/section-components';
import {
  Center,
  Grid,
  GridItem,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Blogs() {
  const [activeElement, setActiveElement] = useState('All');
  const handleCategoryClick = (id: string) => {
    setActiveElement(id);
  };
  return (
    <>
      <PageHeader
        title="Expanding Our Knowledge & Yours, One Blog at a Time"
        alt="blogs"
        subtitle="All the latest news and events of our creative team."
        src="/assets/images/terms.png"
      />

      <Layout>
        <Center gap={'72px'} w={'full'} flexDirection={'column'}>
          <VStack gap={'52px'} mt={'32px'}>
            <MainHeading
              title="Scope Seeker All Blogs"
              subTitle="Here you will find all the articles that make your knowledge more efficient"
            />
            {/* Qucik links */}
            <Center w={'full'}>
              <Center
                borderRadius={{ base: '10px', md: '50px' }}
                color={'brand.black'}
                justifyContent={'space-between'}
                px={'12px'}
                py={'8px'}
                gap={'12px'}
                border={'1px solid'}
                borderColor={'brand.lightgray'}
                bg={'brand.aliceblue'}
                flexDir={{ base: 'column', md: 'row' }}
              >
                <HStack flexDirection={{ base: 'column', sm: 'row' }}>
                  {[
                    'All',
                    'Development',
                    'Interview Preparation',
                    'Tips&Tricks',
                  ].map((item, index) => {
                    return (
                      <>
                        <MyText
                          key={index}
                          cursor={'pointer'}
                          as="span"
                          title={item}
                          _hover={{ bg: 'brand.primary', color: 'brand.white' }}
                          px={'18px'}
                          py={'4px'}
                          textAlign={'center'}
                          borderRadius={'50px'}
                          transition={'all ease .2s'}
                          bg={
                            activeElement === item
                              ? 'brand.primary'
                              : 'transparent'
                          }
                          color={
                            activeElement === item
                              ? 'brand.white'
                              : 'currentColor'
                          }
                          onClick={() => handleCategoryClick(item)}
                        />
                      </>
                    );
                  })}
                </HStack>

                <VStack
                  h={'20px'}
                  bg={'brand.black'}
                  borderLeft={'1.5px solid'}
                  spacing={0}
                  borderColor={'brand.darkgray'}
                  display={{ base: 'none', xl: 'flex' }}
                ></VStack>

                <HStack
                  overflow={'hidden'}
                  spacing={0}
                  justifyContent={'space-between'}
                  border={'1px solid'}
                  borderColor={'brand.primary'}
                  pl={'12px'}
                  w={{ base: '100%', sm: '70%', md: '30%', lg: '30%' }}
                  borderRadius={'60px'}
                >
                  <Input
                    variant={'unstyled'}
                    h={'full'}
                    placeholder="Search Blogs..."
                    fontSize={'14px'}
                  />
                  <Center
                    cursor={'pointer'}
                    p={'8px'}
                    px={'10px'}
                    borderRadius={'0px'}
                  >
                    <MyIcon
                      name="search"
                      color="brand.primary"
                      width="20px"
                      height="20px"
                      strokeWidth="2"
                    />
                  </Center>
                </HStack>
              </Center>
            </Center>
          </VStack>

          {/* Article section */}
          <VStack
            w={'full'}
            alignItems={'center'}
            gap={{ base: '32px', md: '72px' }}
          >
            <Grid
              templateColumns={'repeat(1, 1fr)'}
              gridGap={'42px'}
              width={{ base: '100%', sm: '80%', xl: '80%', '2xl': '70%' }}
            >
              <>
                {articleFields.map((item) => {
                  return (
                    <GridItem key={item.id}>
                      <MyArticleCard
                        image={item.image}
                        category={item.category}
                        heading={item.heading}
                        paragraph={item.paragraph}
                        readMore={item.readMore}
                        date={item.date}
                      />
                    </GridItem>
                  );
                })}
              </>
            </Grid>
            <Center
              w={'100%'}
              p={{ base: '0px', sm: '12px' }}
              gap={{ base: '12px', sm: '32px' }}
            >
              <Center
                cursor={'pointer'}
                width={'30px'}
                height={'30px'}
                bg={'brand.primary'}
                borderRadius={'50%'}
              >
                <MyIcon
                  name="chevronLeft"
                  strokeWidth="2"
                  color="brand.white"
                />
              </Center>

              <Center px={'12px'} h={'20px'}>
                <MyText as="title" title="Page 1 of 20" />
              </Center>

              <Center
                cursor={'pointer'}
                width={'30px'}
                height={'30px'}
                bg={'brand.primary'}
                borderRadius={'50%'}
              >
                <MyIcon
                  name="chevronRight"
                  strokeWidth="2"
                  color="brand.white"
                />
              </Center>
            </Center>
          </VStack>
        </Center>
      </Layout>
    </>
  );
}
