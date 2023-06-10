import {
  Layout,
  MyBadge,
  MyButton,
  MyDivider,
  MyImage,
  MyText,
} from '@/component';
import {
  Center,
  Flex,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Layout>
      <Center
        flexDirection={{ base: 'column', md: 'row' }}
        w={'full'}
        gap={'50px'}
      >
        <Center
          w={{ base: '100%', md: '60%' }}
          h={'full'}
          justifyContent={{ base: 'center', md: 'flex-start' }}
        >
          <VStack
            w={{ base: '100%', sm: '90%', md: '95%', lg: '80%' }}
            justifyContent={'center'}
            alignItems={{ base: 'center', md: 'flex-start' }}
            gap={'5px'}
            py={{ base: '28px', md: '0px' }}
            h={'fit-content'}
          >
            <Heading
              fontWeight={600}
              color={'brand.primary'}
              fontSize={{ base: '28px', md: '24px', lg: '28px' }}
              textAlign={{ base: 'center', md: 'left' }}
            >
              No More Wasted Time
              <Text
                color={'brand.semiblack'}
                fontSize={{ base: '24px', md: '22px', lg: '24px' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                Find job that suits you
              </Text>
            </Heading>
            <MyText
              title="Our platform is dedicated to helping job seekers save time and find the right tech job opportunities that suit their skills and career aspirations."
              as="span"
              textAlign={{ base: 'center', md: 'left' }}
            />
            {/* Search Box */}
            <HStack
              w={{ base: '100%', lg: '80%' }}
              height={{ base: '42px', md: '48px', lg: '42px' }}
              boxShadow={'0px 0px 120px rgb(0, 0, 0, 0.2)'}
              borderRadius={'20px'}
              overflow={'hidden'}
              spacing={0}
              justifyContent={'space-between'}
            >
              <HStack
                w={'70%'}
                h={'full'}
                bg={'brand.white'}
                borderLeftRadius={6}
                // border={'1px solid'}
                borderColor={'brand.lightgray'}
                px={'12px'}
              >
                <Input
                  fontSize={{ base: '12px', md: '12px' }}
                  placeholder={'Search by Roles, Company, Technologies...'}
                  type="text"
                  variant={'unstyled'}
                  px={'4px'}
                />
              </HStack>
              <MyButton title="Find Jobs" />
            </HStack>
            <Flex
              gap={'5px'}
              py={'10px'}
              maxW={{ base: '100%', lg: '70%' }}
              flexWrap={'wrap'}
              justifyContent={{ base: 'center', md: 'flex-start' }}
            >
              <MyBadge
                labelArray={[
                  'Full Stack Developer',
                  'Devops Engineer',
                  'Frontend Developer',
                  'Software Engineer',
                  'Java Developer',
                ]}
              />
            </Flex>
          </VStack>
        </Center>
        <Center justifyContent={'flex-end'} h={'full'}>
          <MyImage
            src={'/assets/svgs/office.svg'}
            alt="svg"
            width={500}
            height={500}
          />
        </Center>
      </Center>
      <HStack
        h={'72px'}
        borderRadius={10}
        bg={'brand.primary'}
        justifyContent={'center'}
        color={'brand.white'}
        px={'12px'}
        mt={'72px'}
      >
        <VStack w={'120px'} h={'full'} justifyContent={'center'}>
          <MyDivider />
        </VStack>
        <HStack>
          <MyText
            title={`Say Goodbye to Job Search Stress: Streamline Your Hunt with the Ultimate Jobseeker Platform!`}
            as={'span'}
            color="brand.white"
            textAlign={'center'}
          />
        </HStack>
        <VStack w={'120px'} h={'full'} justifyContent={'center'}>
          <MyDivider />
        </VStack>
      </HStack>
    </Layout>
  );
};

export default HeroSection;
