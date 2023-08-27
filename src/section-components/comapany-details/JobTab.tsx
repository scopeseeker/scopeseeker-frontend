import { MyButton, MyIcon, MyInput, MyText } from '@/component';
import { Box, Center, Grid, HStack, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import MyJobCard from '../cards/MyJobCard';

const JobTab = () => {
  return (
    <VStack w={'full'} marginTop={'20px'} gap={'50px'}>
      <HStack
        w={'full'}
        p={'10px'}
        borderRadius={'10px'}
        border={'1px'}
        borderColor={'brand.lightgray'}
      >
        <Center
          w={'100px'}
          h={'60px'}
          flexDir={'column'}
          borderRadius={'10px'}
          bg={'brand.aliceblue'}
        >
          <MyText as="small" title="72 Jobs" />
          <MyText as="small" title="(open)" />
        </Center>

        <Center
          w={'100px'}
          h={'60px'}
          flexDir={'column'}
          borderRadius={'10px'}
          bg={'brand.aliceblue'}
        >
          <MyText as="small" title="30 Match" />
          <MyText as="small" title="your profile" />
        </Center>
      </HStack>

      {/* Search part */}
      <HStack
        w={'full'}
        gap={'10px'}
        flexDir={{ base: 'column', sm: 'row', md: 'row' }}
      >
        <MyInput
          type="text"
          placeholder="Job title or keyword"
          leftElement={<MyIcon name="search" width="20" height="20" />}
          name="jobTitle"
        />
        <Box w={{ base: 'full', sm: 'initial', md: 'initial' }}>
          <MyButton title="Search" />
        </Box>
      </HStack>

      {/* Job card part */}
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={'22px'}
      >
        <MyJobCard
          companyIconLogo={'/assets/images/company-logo/bookmyshow.png'}
          role={'Frontend Developer'}
          companyName={'Tata Consultancy Service'}
          location={'Bhopal, Madhaya Pradesh'}
          jobType={[
            'Full Time',
            'Part Time',
            'Internship',
            'Startup',
            'Indian MNC',
          ]}
          companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
        />

        <MyJobCard
          companyIconLogo={'/assets/images/company-logo/bookmyshow.png'}
          role={'Frontend Developer'}
          companyName={'Tata Consultancy Service'}
          location={'Bhopal, Madhaya Pradesh'}
          jobType={[
            'Full Time',
            'Part Time',
            'Internship',
            'Startup',
            'Indian MNC',
          ]}
          companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
        />

        <MyJobCard
          companyIconLogo={'/assets/images/company-logo/bookmyshow.png'}
          role={'Frontend Developer'}
          companyName={'Tata Consultancy Service'}
          location={'Bhopal, Madhaya Pradesh'}
          jobType={[
            'Full Time',
            'Part Time',
            'Internship',
            'Startup',
            'Indian MNC',
          ]}
          companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
        />

        <MyJobCard
          companyIconLogo={'/assets/images/company-logo/bookmyshow.png'}
          role={'Frontend Developer'}
          companyName={'Tata Consultancy Service'}
          location={'Bhopal, Madhaya Pradesh'}
          jobType={[
            'Full Time',
            'Part Time',
            'Internship',
            'Startup',
            'Indian MNC',
          ]}
          companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
        />
      </Grid>

      {/* Button Part */}
      <HStack
        w={'full'}
        alignItems={'flex-start'}
        gap={'10px'}
        flexDir={{ base: 'column', sm: 'row', md: 'row' }}
        spacing={0}
      >
        <Link href={'#'}>
          <Center
            px={'20px'}
            py={'6px'}
            borderRadius={'80px'}
            border={'1.5px solid'}
            borderColor={'brand.darkgray'}
            gap={'10px'}
            cursor={'pointer'}
          >
            <MyIcon name="job" width="15px" />
            <MyText as="span" title="See all jobs" />
          </Center>
        </Link>

        <Link href={'#'}>
          <Center
            px={'20px'}
            py={'6px'}
            borderRadius={'80px'}
            border={'1.5px solid'}
            borderColor={'brand.darkgray'}
            gap={'10px'}
            cursor={'pointer'}
          >
            <MyIcon name="job" width="15px" />
            <MyText as="span" title="Recommended job" />
          </Center>
        </Link>
      </HStack>
    </VStack>
  );
};

export default JobTab;
