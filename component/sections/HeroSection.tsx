import {
  Box,
  Center,
  Divider,
  Flex,
  FormControl,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <Box minH={'100vh'} p={12} pb={0}>
      <Flex minH={'md'}>
        <VStack w={'50%'} alignItems={'flex-start'}></VStack>

        <Center w={'50%'}>
          <Image
            src={require('../../public/hero-section.png')}
            alt="hero-section"
          />
        </Center>
      </Flex>
      <HStack
        h={20}
        borderRadius={10}
        bg={'brand.primary'}
        justifyContent={'center'}
        color={'brand.white'}
      >
        <VStack w={36} h={'full'} justifyContent={'center'}>
          <Divider />
        </VStack>
        <HStack>
          <Text fontSize={'sm'} fontWeight={'medium'}>
            Say Goodbye to Job Search Stress: Streamline Your Hunt with the
            Ultimate Jobseeker Platform!
          </Text>
        </HStack>
        <VStack w={36} h={'full'} justifyContent={'center'}>
          <Divider color={'red'} colorScheme={'red'} bg={'red'} />
        </VStack>
      </HStack>
    </Box>
  );
};

export default HeroSection;
