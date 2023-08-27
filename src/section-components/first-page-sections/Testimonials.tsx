import { Layout, MainHeading, MyIcon, MyImage, MyText } from '@/component';
import truncatedParagraph from '@/helpers/validator';
import { Center, Flex, Grid, HStack, Text, VStack } from '@chakra-ui/react';
const Testimonials = () => {
  return (
    <VStack bg={'brand.aliceblue'} py={'42px'}>
      <Layout>
        <MainHeading
          title={'Join Our Thriving Community'}
          subTitle={'See How Our Job Website Has Changed Lives'}
        />
        <HStack w={'full'} mt={'100px'} gap={{ base: '70px', sm: '20px' }}>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            rowGap={'60px'}
            columnGap={'20px'}
            w={'full'}
          >
            <VStack
              bg={'brand.white'}
              boxShadow={'0 0px 30px rgba(0, 0, 0, 0.1)'}
              borderRadius={'10px'}
            >
              <Center
                border={'3px solid white'}
                h={'78px'}
                w={'78px'}
                mt={'-34px'}
                borderRadius={'full'}
                overflow={'hidden'}
              >
                <MyImage
                  src={'/assets/images/p12.jpg'}
                  alt={'secope seeker logo'}
                  width={100}
                  height={100}
                  style={{ borderRadius: '50%' }}
                />
              </Center>

              <VStack px={'25px'} pt={'10px'} pb={'30px'} textAlign={'center'}>
                <VStack lineHeight={1}>
                  <MyText as="heading" title="Lokesh Dhakar" />
                  <MyText as="span" title="Full Stack Developer" />
                </VStack>
                <Center
                  opacity={'0.7'}
                  justifyContent={'flex-start'}
                  width={'full'}
                >
                  <MyIcon name={'quotesLeft'} width={'full'} />
                </Center>
                <MyText
                  as="span"
                  title={truncatedParagraph(
                    `I’ve got your back. These sixty review request text templates
                    are designed to get you up and running fast. Of course, you
                    may want to come up doing so mch imaportant things.`,
                    70,
                  )}
                  color="brand.darkgray"
                />
              </VStack>
            </VStack>

            {/* 2nd box */}
            <VStack
              bg={'brand.white'}
              boxShadow={'0 0px 30px rgba(0, 0, 0, 0.1)'}
              borderRadius={'10px'}
            >
              <Center
                border={'3px solid white'}
                h={'78px'}
                w={'78px'}
                mt={'-34px'}
                borderRadius={'full'}
                overflow={'hidden'}
              >
                <MyImage
                  src={'/assets/images/p12.jpg'}
                  alt={'secope seeker logo'}
                  width={100}
                  height={100}
                  style={{ borderRadius: '50%' }}
                />
              </Center>

              <VStack px={'25px'} pt={'10px'} pb={'30px'} textAlign={'center'}>
                <VStack lineHeight={1}>
                  <MyText as="heading" title="Lokesh Dhakar" />
                  <MyText as="span" title="Full Stack Developer" />
                </VStack>
                <Center
                  opacity={'0.7'}
                  justifyContent={'flex-start'}
                  width={'full'}
                >
                  <MyIcon name={'quotesLeft'} width={'full'} />
                </Center>
                <MyText
                  as="span"
                  title={truncatedParagraph(
                    `I’ve got your back. These sixty review request text templates
                    are designed to get you up and running fast. Of course, you
                    may want to come up doing so mch imaportant things.`,
                    70,
                  )}
                  color="brand.darkgray"
                />
              </VStack>
            </VStack>

            {/* 3rd Box */}
            <VStack
              bg={'brand.white'}
              boxShadow={'0 0px 30px rgba(0, 0, 0, 0.1)'}
              borderRadius={'10px'}
            >
              <Center
                border={'3px solid white'}
                h={'78px'}
                w={'78px'}
                mt={'-34px'}
                borderRadius={'full'}
                overflow={'hidden'}
              >
                <MyImage
                  src={'/assets/images/p12.jpg'}
                  alt={'secope seeker logo'}
                  width={100}
                  height={100}
                  style={{ borderRadius: '50%' }}
                />
              </Center>

              <VStack px={'25px'} pt={'10px'} pb={'30px'} textAlign={'center'}>
                <VStack lineHeight={1}>
                  <MyText as="heading" title="Lokesh Dhakar" />
                  <MyText as="span" title="Full Stack Developer" />
                </VStack>
                <Center
                  opacity={'0.7'}
                  justifyContent={'flex-start'}
                  width={'full'}
                >
                  <MyIcon name={'quotesLeft'} width={'full'} />
                </Center>
                <MyText
                  as="span"
                  title={truncatedParagraph(
                    `I’ve got your back. These sixty review request text templates
                    are designed to get you up and running fast. Of course, you
                    may want to come up doing so mch imaportant things.`,
                    70,
                  )}
                  color="brand.darkgray"
                />
              </VStack>
            </VStack>
          </Grid>
        </HStack>
      </Layout>
    </VStack>
  );
};

export default Testimonials;
