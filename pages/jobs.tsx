import MyJobCard from '@/component/cards/MyJobCard';
import Filter from '@/component/filter/Filter';
import MyHeading from '@/component/heading/MyHeading';
import { Box, Center, Flex, HStack, Text } from '@chakra-ui/react';

const Jobs = () => {
  return (
    <Box h={'100vw'} w={'full'}>
      <Center
        h={'18vw'}
        w={'full'}
        bg={'brand.primary'}
        flexDirection={'column'}
      >
        <Box maxW={'70%'}>
          <MyHeading
            title="Current Opening Jobs"
            subTitle="Take a look at our current job openings and find roles that match your skills and interests"
            paraColor="brand.lightgrey"
            headColor="brand.white"
            align="center"
          />
        </Box>
        <HStack
          w={'90%'}
          h={12}
          bg={'brand.white'}
          mt={8}
          borderRadius={4}
          px={4}
        >
          <Text>fgafgadsf</Text>
        </HStack>
      </Center>
      <HStack w={'full'} h={'100vh'} bg={'blue.50'} p={4} pt={20}>
        <Filter />
        <Flex gap={6} flexWrap={'wrap'} h={'full'} w={'full'} bg={'skyblue'}>
          {/* <MyJobCard
            companyIconLogo={'/assets/images/company-logo/bookmyshow.png'}
            role={'Frontend Developer'}
            companyName={'Tata Consultancy Service'}
            location={'Bhopal, Madhaya Pradesh'}
            jobType={[
              { label: 'Full Time', value: 'full' },
              { label: 'Part Time', value: 'part' },
              { label: 'Internship', value: 'intern' },
            ]}
            companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
            isNamedLogo={true}
          />
          <MyJobCard
            companyIconLogo={'/assets/images/company-logo/bookmyshow.png'}
            role={'Frontend Developer'}
            companyName={'Tata Consultancy Service'}
            location={'Bhopal, Madhaya Pradesh'}
            jobType={[
              { label: 'Full Time', value: 'full' },
              { label: 'Part Time', value: 'part' },
              { label: 'Internship', value: 'intern' },
            ]}
            companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
            isNamedLogo={true}
          /> */}

          <Box w={'3xs'} h={'2xs'} bg={'blue.900'}></Box>
          <Box w={'3xs'} h={'2xs'} bg={'blue.900'}></Box>
          <Box w={'3xs'} h={'2xs'} bg={'blue.900'}></Box>
          <Box w={'3xs'} h={'2xs'} bg={'blue.900'}></Box>
        </Flex>
      </HStack>
    </Box>
  );
};

export default Jobs;
