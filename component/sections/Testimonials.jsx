import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import MyHeading from '../heading/MyHeading';
import Icon from '../icon/Icon';

const Testimonials = () => {
  return (
    <Box>
      <VStack bg={'brand.400'} py={28} gap={16} px={5}>
        <MyHeading
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
              bg={'white'}
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
                <Image src={require('../../public/p1.jpg')} alt={'ss-log'} />
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
                    <Icon name={'quotes-left'} width={'full'} />
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
              bg={'brand.100'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              flexShrink={0}
              borderRadius={8}
              justifyContent={'flex-start'}
              color={'white'}
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
                <Image src={require('../../public/p1.jpg')} alt={'ss-log'} />
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
                    <Icon name={'quotes-left'} width={'full'} />
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
              bg={'white'}
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
                <Image src={require('../../public/p1.jpg')} alt={'ss-log'} />
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
                    <Icon name={'quotes-left'} width={'full'} />
                  </Center>
                  I’ve got your back. These sixty review request text templates
                  are designed to get you up and running fast. Of course, you
                  may want to come up doing so mch imaportant thhisngs.
                </Text>
              </Flex>
            </VStack>
          </Flex>

          {/* <Flex
            w={'full'}
            justifyContent={'center'}
            flexDirection={{ base: 'column', md: 'row' }}
            gap={14}
            flexShrink={0}
            py={10}
          >
            <VStack
              w={{ base: '100%', md: 'calc(100%/3.5)' }}
              h={'2xs'}
              bg={'brand.500'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              flexShrink={0}
              borderRadius={8}
              justifyContent={'flex-start'}
              alignItems={'center'}
            >
              <Center
                h={14}
                w={14}
                mt={-6}
                borderRadius={'full'}
                overflow={'hidden'}
              >
                <Image src={require('../../public/p1.jpg')} alt={'ss-log'} />
              </Center>

              <Text color={'brand.300'} pt={1} fontSize={'sm'}>
                Gabriol Nelon
              </Text>
              <Text
                as={'span'}
                pb={4}
                opacity={0.4}
                fontWeight={600}
                fontSize={'2xs'}
              >
                Consultant
              </Text>
              <Text
                as={'span'}
                color={'brand.300'}
                pb={4}
                fontWeight={700}
                fontSize={'2xs'}
                letterSpacing={2}
              >
                Great quality!
              </Text>
              <Text as={'span'} px={6}  fontSize={'2xs'} letterSpacing={2}    fontWeight={'600'}>
                I’ve got your back. These sixty review request text templates
                are designed to get you up and running fast. Of course, you may
                want to come up doing so mch imaportant thhisngs.
              </Text>
            </VStack>
            <VStack
              w={{ base: '100%', md: 'calc(100%/3.5)' }}
              h={'2xs'}
              bg={'brand.100'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              flexShrink={0}
              borderRadius={8}
              justifyContent={'flex-start'}
              alignItems={'center'}
            >
              <Center
                h={14}
                w={14}
                mt={-6}
                borderRadius={'full'}
                overflow={'hidden'}
              >
                <Image src={require('../../public/p1.jpg')} alt={'ss-log'} />
              </Center>

              <Text color={'brand.300'} pt={1} fontSize={'sm'}>
                Gabriol Nelon
              </Text>
              <Text
                as={'span'}
                pb={4}
                opacity={0.4}
                fontWeight={600}
                fontSize={'2xs'}
              >
                Consultant
              </Text>
              <Text
                as={'span'}
                color={'brand.300'}
                pb={4}
                fontWeight={700}
                fontSize={'2xs'}
                letterSpacing={2}
              >
                Great quality!
              </Text>
              <Text as={'span'} px={6} fontSize={'2xs'} letterSpacing={2}    fontWeight={'600'}>
                I’ve got your back. These sixty review request text templates
                are designed to get you up and running fast. Of course, you may
                want to come up doing so mch imaportant thhisngs.
              </Text>
            </VStack>
            <VStack
              w={{ base: '100%', md: 'calc(100%/3.5)' }}
              h={'2xs'}
              bg={'white'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              flexShrink={0}
              borderRadius={8}
              justifyContent={'flex-start'}
              alignItems={'center'}
            >
              <Center
                h={14}
                w={14}
                mt={-6}
                borderRadius={'full'}
                overflow={'hidden'}
              >
                <Image src={require('../../public/p1.jpg')} alt={'ss-log'} />
              </Center>

              <Text color={'brand.300'} pt={1} fontSize={'sm'}>
                Gabriol Nelon
              </Text>
              <Text
                as={'span'}
                pb={4}
                opacity={0.4}
                fontWeight={600}
                fontSize={'2xs'}
              >
                Consultant
              </Text>
              <Text
                as={'span'}
                color={'brand.300'}
                pb={4}
                fontWeight={700}
                fontSize={'2xs'}
                letterSpacing={2}
              >
                Great quality!
              </Text>
              <Text as={'span'} px={6} fontSize={'2xs'} letterSpacing={2}    fontWeight={'600'}>
                I’ve got your back. These sixty review request text templates
                are designed to get you up and running fast. Of course, you may
                want to come up doing so mch imaportant thhisngs.
              </Text>
            </VStack>
          </Flex> */}
        </Flex>
      </VStack>
    </Box>
  );
};

export default Testimonials;
