import { Layout, MainHeading, MyIcon, MyImage, MyText } from '@/component';
import truncatedParagraph from '@/lib/validator';
import { Center, Flex, Grid, Text, VStack } from '@chakra-ui/react';
const Testimonials = () => {
  return (
    <VStack bg={'brand.aliceblue'} py={'42px'}>
      <Layout>
        <MainHeading
          title={'Join Our Thriving Community'}
          subTitle={'See How Our Job Website Has Changed Lives'}
        />
        <Flex
          py={'10px'}
          overflow={'auto'}
          w={'full'}
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <Flex
            w={'full'}
            justifyContent={'center'}
            alignItems={'center'}
            flexShrink={0}
            pt={'100px'}
            gap={'24px'}
            // px={'20px'}
          >
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
                w="100%"
                h={{ base: 'fit-content', md: '248px' }}
                bg={'brand.white'}
                boxShadow={'0 0px 30px rgba(0, 0, 0, 0.1)'}
                flexShrink={0}
                borderRadius={8}
                justifyContent={'flex-start'}
                alignItems={'center'}
                px={'28px'}
                pb={'20px'}
                display={{
                  base: 'flex',
                  sm: 'none',
                  lg: 'flex',
                }}
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
                <Flex direction={'column'} align={'center'}>
                  <MyText as={'heading'} title="Lokesh Dhakar" />
                  <MyText as={'span'} title="Full Stack Developer" />
                  <Text as={'span'} fontSize={'sm'} textAlign={'center'}>
                    <Center w={8} h={8} opacity={'0.7'} py={'10px'}>
                      <MyIcon name={'quotesLeft'} width={'full'} />
                    </Center>
                    <MyText
                      as={'span'}
                      title={truncatedParagraph(
                        `I’ve got your back. These sixty review request text templates
                    are designed to get you up and running fast. Of course, you
                    may want to come up doing so mch imaportant thhisngs.`,
                        70
                      )}
                      color="brand.darkgray"
                    />
                  </Text>
                </Flex>
              </VStack>
              <VStack
                w="100%"
                h={{ base: 'fit-content', md: '248px' }}
                bg={'brand.white'}
                boxShadow={'0 0px 30px rgba(0, 0, 0, 0.1)'}
                flexShrink={0}
                borderRadius={8}
                justifyContent={'flex-start'}
                alignItems={'center'}
                px={'28px'}
                pb={'20px'}
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
                <Flex direction={'column'} align={'center'}>
                  <MyText as={'heading'} title="Lokesh Dhakar" />
                  <MyText as={'span'} title="Full Stack Developer" />
                  <Text as={'span'} fontSize={'sm'} textAlign={'center'}>
                    <Center w={8} h={8} opacity={'0.7'} py={'10px'}>
                      <MyIcon name={'quotesLeft'} width={'full'} />
                    </Center>
                    <MyText
                      as={'span'}
                      title={truncatedParagraph(
                        `I’ve got your back. These sixty review request text templates
                    are designed to get you up and running fast. Of course, you
                    may want to come up doing so mch imaportant thhisngs.`,
                        70
                      )}
                      color="brand.darkgray"
                    />
                  </Text>
                </Flex>
              </VStack>
              <VStack
                w="100%"
                h={{ base: 'fit-content', md: '248px' }}
                bg={'brand.white'}
                boxShadow={'0 0px 30px rgba(0, 0, 0, 0.1)'}
                flexShrink={0}
                borderRadius={8}
                justifyContent={'flex-start'}
                alignItems={'center'}
                px={'28px'}
                pb={'20px'}
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
                <Flex direction={'column'} align={'center'}>
                  <MyText as={'heading'} title="Lokesh Dhakar" />
                  <MyText as={'span'} title="Full Stack Developer" />
                  <Text as={'span'} fontSize={'sm'} textAlign={'center'}>
                    <Center w={8} h={8} opacity={'0.7'} py={'10px'}>
                      <MyIcon name={'quotesLeft'} width={'full'} />
                    </Center>
                    <MyText
                      as={'span'}
                      title={truncatedParagraph(
                        `I’ve got your back. These sixty review request text templates
                    are designed to get you up and running fast. Of course, you
                    may want to come up doing so mch imaportant thhisngs.`,
                        70
                      )}
                      color="brand.darkgray"
                    />
                  </Text>
                </Flex>
              </VStack>
            </Grid>
          </Flex>
        </Flex>
      </Layout>
    </VStack>
  );
};

export default Testimonials;
