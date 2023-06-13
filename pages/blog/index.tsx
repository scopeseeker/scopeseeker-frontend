import {
  Layout,
  MainHeading,
  MyArticleCard,
  MyIcon,
  MyText,
  PageHeroSection,
} from '@/component';
import { articleFields } from '@/constant/constantFields';
import {
  Center,
  Grid,
  GridItem,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Scope Seeker</title>
      </Head>
      <PageHeroSection
        title="Expanding Our Knowledge & Yours, One Blog at a Time"
        alt="blogs"
        subtitle="All the latest news and events of our creative team."
        src="/assets/images/terms.png"
      />

      <Layout>
        <Center gap={'100px'} w={'full'} flexDirection={'column'}>
          {/* Qucik links */}
          <Center w={'full'} mt={'32px'}>
            <Center
              borderRadius={'50px'}
              color={'brand.black'}
              justifyContent={'space-between'}
              px={'12px'}
              py={'8px'}
              gap={'12px'}
              border={'1px solid'}
              borderColor={'brand.lightgray'}
              bg={'brand.aliceblue'}
            >
              <MyText
                cursor={'pointer'}
                as="span"
                title="All"
                color="currentColor"
                _hover={{ bg: 'brand.primary', color: 'brand.white' }}
                px={'18px'}
                py={'4px'}
                borderRadius={'50px'}
                transition={'all ease .2s'}
              />

              <MyText
                cursor={'pointer'}
                as="span"
                title="Development"
                color="currentColor"
                _hover={{ bg: 'brand.primary', color: 'brand.white' }}
                px={'18px'}
                py={'4px'}
                borderRadius={'50px'}
                transition={'all ease .2s'}
              />

              <MyText
                cursor={'pointer'}
                as="span"
                title="Tips & Tricks"
                color="currentColor"
                _hover={{ bg: 'brand.primary', color: 'brand.white' }}
                px={'18px'}
                py={'4px'}
                borderRadius={'50px'}
                transition={'all ease .2s'}
              />

              <MyText
                cursor={'pointer'}
                as="span"
                title="Technology"
                color="currentColor"
                _hover={{ bg: 'brand.primary', color: 'brand.white' }}
                px={'18px'}
                py={'4px'}
                borderRadius={'50px'}
                transition={'all ease .2s'}
              />

              <MyText
                cursor={'pointer'}
                as="span"
                title="Business"
                color="currentColor"
                _hover={{ bg: 'brand.primary', color: 'brand.white' }}
                px={'18px'}
                py={'4px'}
                borderRadius={'50px'}
                transition={'all ease .2s'}
              />
              <VStack
                h={'20px'}
                // w={'0px'}
                bg={'brand.black'}
                borderLeft={'1.5px solid'}
                spacing={0}
                borderColor={'brand.darkgray'}
                display={{base:'none',md:'flex'}}
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
                display={{base:'none',md:'flex'}}
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

          {/* Article section */}
          {/* <VStack w={'full'} bg={'red.200'} alignItems={'center'} gap={{base:'32px',md:'72px'}}>
            <MainHeading
              title="Scope Seeker All Blogs"
              subTitle="Here you will find all the articles that make your knowledge more efficient"
            />
            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(1, 1fr)',
                lg: 'repeat(1, 1fr)',
              }}
              gridGap={'42px'}
              width={{base:'100%',md:'80%'}}
            >
              <>
                {articleFields.map((item, key) => {
                  return (
                    <GridItem key={key}>
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
            <Center w={{base:'80%',md:'60%'}} p={'12px'} gap={'32px'}>
              <Center cursor={'pointer'}
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

              <Center cursor={'pointer'}
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
          </VStack> */}
        </Center>
      </Layout>
    </>
  );
}
