import {
  Layout,
  MainHeading,
  MyButton,
  MyIcon,
  MyImage,
  MyText,
  PageHeroSection,
} from '@/component';
import { Box, Center, Grid, GridItem, HStack, Input, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import MyArticleCard from './MyArticleCard';
import { articleFields } from '@/constant/constantFields';

export default function blog() {
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
        <Center gap={'32px'} w={'full'} flexDirection={'column'} mt={'32px'}>
          {/* Qucik links */}
          <Center w={'full'}>
            <Center
              w={'80%'}
              borderRadius={'50px'}
              color={'brand.black'}
              justifyContent={'space-between'}
              px={'32px'}
              py={'8px'}
              gap={'12px'}
              border={'1px solid'}
              borderColor={'brand.lightgray'}
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
                w={'0px'}
                bg={'brand.black'}
                borderLeft={'1px solid'}
                spacing={0}
                borderColor={'brand.black'}
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
                  placeholder="Search by Role, Location, Type..."
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

          {/* Post section */}

          <VStack w={'80%'} gap={'32px'} pt={'40px'}>
            <VStack alignItems={'flex-start'}>
              <MyText title="Recent Post" as={'heading'} />
              <HStack w={'full'} gap={'68px'}>
                <Box w={'40%'} borderRadius={'8px'} overflow={'hidden'} bg={'red.200'}>
                  <MyImage
                    src={'/assets/images/blog.jpg'}
                    alt="post"
                    width={450}
                    height={300}
                  />
                </Box>
                <VStack w={'60%'} alignItems={'flex-start'} gap={'12px'}>
                  <HStack>
                    <MyText
                      title="Development"
                      as={'title'}
                      color="brand.primary"
                    />
                    <MyIcon name="time" />
                    <MyText title="2hr ago" as={'span'} />
                  </HStack>
                  <Box alignItems={'flex-start'} w={'90%'}>
                    <MainHeading
                      title="Virtual reality advancements redefine entertainment, education, and training experiences"
                      align={'flex-start'}
                    />
                  </Box>
                  <MyButton title="Read more" />
                </VStack>
              </HStack>
            </VStack>
            {/* Article section */}
            <VStack w={'full'} pt={'32px'}  alignItems={'flex-start'}>
              <MyText title="Must Read Articles" as="heading" />
              <Grid templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                  lg: 'repeat(3, 1fr)',
                }}
                gap={{ base: 6, lg: 4, xl: 4 }}
                mx={'auto'}
                gridGap={'50px'}
                
                width={'100%'}
              >
                <>
                {articleFields.map((item, key) => {
                  return(
                    <GridItem key={key}>
                      <MyArticleCard 
                      articleImage={item.articleImage}
                      articleHeading={item.articleHeading}
                      articleHighlight={item.articleHighlight}
                      articlePara={item.articlePara}
                      articleButton={item.articleButton}
                      dateIcon={item.dateIcon}
                      articledate={item.articledate}/>
                    </GridItem>
                 );
                })}
              </>

              </Grid>
            </VStack>
          </VStack>
        </Center>
      </Layout>
    </>
  );
}
