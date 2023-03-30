import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import MyButton from '../button/MyButton';

const NewsUpdate = () => {
  return (
    <Center w={'full'}>
      <Flex
        w={{ base: '90vw', md: '90vw', lg: '70vw', xl: '65vw' }}
        bg={'white'}
        minH={28}
        flexDirection={{ base: 'column', sm: 'row' }}
        borderRadius={16}
        overflow={'hidden'}
        boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
        p={{ base: 8, sm: 10 }}
        gap={5}
      >
        <Center w={{ base: '100%', sm: '50%' }}>
          <Heading
            as={'span'}
            textAlign={'center'}
            fontWeight={'semibold'}
            fontSize={{ base: 'xl', sm: 'sm', md: 'md', lg: 'md', xl: 'xl' }}
          >
            Never Want To Miss Any{' '}
            <Text as={'span'} color={'brand.100'} fontWeight={'bold'}>
              Job News
            </Text>
          </Heading>
        </Center>
        <Center w={{ base: '100%', sm: '50%' }}>
          <HStack
            w={72}
            h={10}
            borderRadius={50}
            overflow={'hidden'}
            boxShadow={'0 4px 30px rgba(0, 0, 0, 0.2)'}
            p={1}
          >
            <Input
              type={'email'}
              placeholder={'Enter your email'}
              fontSize={'xs'}
              variant="unstyled"
              px={4}
            />
            {/* <Center bg={'brand.100'}  h={'full'} px={5} borderRadius={'full'}> */}
            <MyButton
              title="Subscribe"
              size="sm"
              borderRadius={50}
              fontSize={'xs'}
              px={8}
              color="white"
            />
            {/* </Center> */}
          </HStack>
        </Center>
      </Flex>
    </Center>
    // <>
  );
};

export default NewsUpdate;
