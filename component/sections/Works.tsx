import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react';
import MyHeading from '../heading/MyHeading';
import Icon from '../icon/Icon';

const Works = () => {
  return (
    <Box>
      <VStack>
        <MyHeading
          title={'Easy way to get your job'}
          subTitle={'Just do simple things and get placed'}
        />
      </VStack>
      <Flex
        w={'full'}
        justifyContent={'center'}
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={14}
        flexShrink={0}
        px={{ sm: 5, lg: 0 }}
        mt={10}
      >
        <VStack
          w={{ base: '100%', lg: 'calc(100%/4)' }}
          h={'4xs'}
          boxShadow={'0 4px 20px rgba(0, 0, 0, 0.1)'}
          flexShrink={0}
          borderRadius={8}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
        >
          <Flex direction={'column'}>
            <Center
              p={3}
              w={12}
              h={12}
              bg={'#01DAFE'}
              ml={6}
              mt={6}
              borderRadius={8}
            >
              <Icon name={'user'} width={'100%'} color={'white'} />
            </Center>

            <Flex direction={'column'} m={6} gap={2}>
              <Text as={'span'} fontWeight={'semibold'} fontSize={'md'}>
                Register An Account
              </Text>

              <Text as={'span'} fontWeight={'normal'} color={'secondary.100'}>
                First you have to create an account here.
              </Text>
            </Flex>
          </Flex>
        </VStack>
        <VStack
          w={{ base: '100%', lg: 'calc(100%/4)' }}
          h={'min'}
          boxShadow={'0 4px 20px rgba(0, 0, 0, 0.1)'}
          flexShrink={0}
          borderRadius={8}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
        >
          <Flex direction={'column'}>
            <Center
              p={3}
              w={12}
              h={12}
              bg={'#ff4e0f'}
              ml={6}
              mt={6}
              borderRadius={8}
            >
              <Icon name={'case'} width={'100%'} color={'white'} />
            </Center>

            <Flex direction={'column'} m={6} gap={2}>
              <Text as={'span'} fontWeight={'semibold'} fontSize={'md'}>
                Search your job
              </Text>

              <Text as={'span'} fontWeight={'normal'} color={'secondary.100'}>
                You select which positions you wish to apply.
              </Text>
            </Flex>
          </Flex>
        </VStack>
        <VStack
          w={{ base: '100%', lg: 'calc(100%/4)' }}
          h={'min'}
          boxShadow={'0 4px 20px rgba(0, 0, 0, 0.1)'}
          flexShrink={0}
          borderRadius={8}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
        >
          <Flex direction={'column'}>
            <Center
              p={3}
              w={12}
              h={12}
              bg={'#795CF1'}
              ml={6}
              mt={6}
              borderRadius={8}
            >
              <Icon name={'form'} width={'100%'} color={'white'} />
            </Center>

            <Flex direction={'column'} m={6} gap={2}>
              <Text as={'span'} fontWeight={'semibold'} fontSize={'md'}>
                Apply for job
              </Text>

              <Text as={'span'} fontWeight={'normal'} color={'secondary.100'}>
                Finally you apply your job and enjoy your work.
              </Text>
            </Flex>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Works;
