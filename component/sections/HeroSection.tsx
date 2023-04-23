import {
  Badge,
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import MyButton from '../button/MyButton';
import MyImage from '../image/MyImage';
import MyText from '../text/MyText';

const HeroSection = () => {
  return (
    <Box minH={'100vh'} px={12}>
      <Flex w={'full'} minH={'90vh'}>
        <VStack
          minH={'90vh'}
          w={'50%'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          px={'55px'}
        >
          <Heading color={'brand.primary'}>No More Wasted Time</Heading>
          <MyText
            title="Let Us Help You Find Your Next Tech Job Opportunity"
            as="heading"
          />
          <MyText
            title="Our platform is dedicated to helping job seekers save time and find the right tech job opportunities that suit their skills and career aspirations."
            as="p"
          />
          <HStack>
            <MyButton title="Explore Jobs" size="md" fontSize="14px" />
            <MyButton
              title="Sign Up Today"
              size="md"
              fontSize="14px"
              variant="outline"
              border={'1.5px solid'}
              borderColor={'brand.primary'}
              color="brand.primary"
            />
          </HStack>
          <HStack py={'20px'} >
            <Badge
              colorScheme="green"
              fontSize={'10px'}
              py={'4px'}
              px={'10px'}
              variant={'outline'}
              borderRadius={'full'}
              cursor={'pointer'}
            >
              Full Stack
            </Badge>
            <Badge
              colorScheme="pink"
              fontSize={'10px'}
              py={'4px'}
              px={'10px'}
              variant={'outline'}
              borderRadius={'full'}
              cursor={'pointer'}
            >
              Frontend Dev.
            </Badge>
            <Badge
              colorScheme="yellow"
              fontSize={'10px'}
              py={'4px'}
              px={'10px'}
              variant={'outline'}
              borderRadius={'full'}
              cursor={'pointer'}
            >
              Backend Dev.
            </Badge>
          </HStack>
        </VStack>
        <Center minH={'90vh'} w={'50%'}>
          <MyImage
            src="/assets/svgs/hero-section-2.svg"
            alt={'hero-setion-image'}
            width={450}
            height={500}
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
