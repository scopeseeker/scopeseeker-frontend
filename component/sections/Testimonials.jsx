import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Testimonials = () => {
  return (
    <Box>
      <VStack bg={'brand.400'} py={28} gap={16} px={5}>
        <VStack>
          <Heading textAlign={'center'}>Join Our Thriving Community</Heading>
          <Text>See How Our Job Website Has Changed Lives </Text>
        </VStack>
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
            flexDirection={{ base: 'column', md: 'row' }}
            gap={14}
            flexShrink={0}
          >
            <VStack
              w={{ base: '100%', md: 'calc(100%/3.5)' }}
              h={'2xs'}
              bg={'white'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              flexShrink={0}
              borderRadius={8}
            ></VStack>
            <VStack
              w={{ base: '100%', md: 'calc(100%/3.5)' }}
              h={'2xs'}
              bg={'brand.100'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              flexShrink={0}
              borderRadius={8}
            ></VStack>
            <VStack
              w={{ base: '100%', md: 'calc(100%/3.5)' }}
              h={'2xs'}
              bg={'white'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              flexShrink={0}
              borderRadius={8}
            ></VStack>
          </Flex>

          <Flex
            w={'full'}
            justifyContent={'center'}
            flexDirection={{ base: 'column', md: 'row' }}
            gap={14}
            flexShrink={0}
            px={5}
          >
            <VStack
              w={{ base: '100%', md: 'calc(100%/3.5)' }}
              h={'2xs'}
              bg={'white'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              flexShrink={0}
              borderRadius={8}
            ></VStack>
            <VStack
              w={{ base: '100%', md: 'calc(100%/3.5)' }}
              h={'2xs'}
              bg={'brand.100'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              flexShrink={0}
              borderRadius={8}
            ></VStack>
            <VStack
              w={{ base: '100%', md: 'calc(100%/3.5)' }}
              h={'2xs'}
              bg={'white'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              flexShrink={0}
              borderRadius={8}
            ></VStack>
          </Flex>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Testimonials;
