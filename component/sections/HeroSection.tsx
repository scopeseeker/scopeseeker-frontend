import {
  Box,
  Center,
  Divider,
  Flex, HStack,
  Text,
  VStack
} from '@chakra-ui/react';
import MyImage from '../image/MyImage';

const HeroSection = () => {
  return (
    <Box minH={'100vh'} px={12}>
      <Flex w={'full'} minH={'90vh'}>
        <VStack minH={'90vh'} w={'50%'}>
          <Text>Helo</Text>
        </VStack>
        <Center minH={'90vh'} w={'50%'}>
          <MyImage src='/assets/svgs/hero-section-2.svg' alt={'hero-setion-image'} width={450} height={500} />
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
