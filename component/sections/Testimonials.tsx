import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react';
import MyIcon from '../icon/MyIcon';
import MyImage from '../image/MyImage';
import MainHeading from '../main-heading/MainHeading';

const Testimonials = () => {
  return (
    <Box>
      <VStack bg={'brand.aliceblue'} py={28} gap={16} px={5}>
        <MainHeading
          title={'Join Our Thriving Community'}
          subTitle={'See How Our Job Website Has Changed Lives'}
        />
        <Flex
          py={4}
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
            flexDirection={{ base: 'column', lg: 'row' }}
            gap={14}
            flexShrink={0}
            py={10}
            px={{ sm: 5, lg: 0 }}
          >
            <VStack
              w={{ base: '100%', lg: 'calc(100%/3.5)' }}
              h={'2xs'}
              bg={'brand.white'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              flexShrink={0}
              borderRadius={8}
              justifyContent={'flex-start'}
              alignItems={'center'}
            >
              <Center
                border={'3px solid white'}
                h={20}
                w={20}
                mt={-10}
                borderRadius={'full'}
                overflow={'hidden'}
              >
                <MyImage
                  src={'/assets/images/p12.jpg'}
                  alt={'secope seeker logo'}
                  width={80}
                  height={80}
                />
              </Center>
              <Flex direction={'column'} align={'center'}>
                <Text as={'span'} fontWeight={'medium'} fontSize={'md'}>
                  Lokesh Dhakar
                </Text>
                <Text
                  as={'span'}
                  fontWeight={600}
                  fontSize={'2xs'}
                  color={'secondary.100'}
                >
                  Full Stack Developer
                </Text>
                <Text
                  as={'span'}
                  px={6}
                  fontSize={'sm'}
                  textAlign={'center'}
                  mt={2}
                >
                  <Center w={8} h={8} opacity={'0.7'}>
                    <MyIcon name={'quotes-left'} width={'full'} />
                  </Center>
                  I’ve got your back. These sixty review request text templates
                  are designed to get you up and running fast. Of course, you
                  may want to come up doing so mch imaportant thhisngs.
                </Text>
              </Flex>
            </VStack>

            <VStack
              w={{ base: '100%', lg: 'calc(100%/3.5)' }}
              h={'2xs'}
              bg={'brand.primary'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              flexShrink={0}
              borderRadius={8}
              justifyContent={'flex-start'}
              color={'brand.white'}
              alignItems={'center'}
            >
              <Center
                border={'3px solid white'}
                h={20}
                w={20}
                mt={-10}
                borderRadius={'full'}
                overflow={'hidden'}
              >
                <MyImage
                  src={'/assets/images/p12.jpg'}
                  alt={'secope seeker logo'}
                  width={80}
                  height={80}
                />
              </Center>
              <Flex direction={'column'} align={'center'}>
                <Text as={'span'} fontWeight={'medium'} fontSize={'md'}>
                  Lokesh Dhakar
                </Text>
                <Text
                  as={'span'}
                  fontWeight={600}
                  fontSize={'2xs'}
                  color={'secondary.200'}
                >
                  Full Stack Developer
                </Text>
                <Text
                  as={'span'}
                  px={6}
                  fontSize={'sm'}
                  textAlign={'center'}
                  mt={2}
                >
                  <Center w={8} h={8} opacity={'0.7'}>
                    <MyIcon name={'quotes-left'} width={'full'} />
                  </Center>
                  I’ve got your back. These sixty review request text templates
                  are designed to get you up and running fast. Of course, you
                  may want to come up doing so mch imaportant thhisngs.
                </Text>
              </Flex>
            </VStack>

            <VStack
              w={{ base: '100%', lg: 'calc(100%/3.5)' }}
              h={'2xs'}
              bg={'brand.white'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              flexShrink={0}
              borderRadius={8}
              justifyContent={'flex-start'}
              alignItems={'center'}
            >
              <Center
                border={'3px solid white'}
                h={20}
                w={20}
                mt={-10}
                borderRadius={'full'}
                overflow={'hidden'}
              >
                <MyImage
                  src={'/assets/images/p12.jpg'}
                  alt={'secope seeker logo'}
                  width={80}
                  height={80}
                />
              </Center>
              <Flex direction={'column'} align={'center'}>
                <Text as={'span'} fontWeight={'medium'} fontSize={'md'}>
                  Lokesh Dhakar
                </Text>
                <Text
                  as={'span'}
                  fontWeight={600}
                  fontSize={'2xs'}
                  color={'secondary.100'}
                >
                  Full Stack Developer
                </Text>
                <Text
                  as={'span'}
                  px={6}
                  fontSize={'sm'}
                  textAlign={'center'}
                  mt={2}
                >
                  <Center w={8} h={8} opacity={'0.7'}>
                    <MyIcon name={'quotes-left'} width={'full'} />
                  </Center>
                  I’ve got your back. These sixty review request text templates
                  are designed to get you up and running fast. Of course, you
                  may want to come up doing so mch imaportant thhisngs.
                </Text>
              </Flex>
            </VStack>
          </Flex>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Testimonials;
