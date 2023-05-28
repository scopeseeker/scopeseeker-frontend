import { Center, Grid, HStack, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { MyButton } from '../button';
import { MyJobCard } from '../cards';
import { MyIcon } from '../icon';
import { MyInput } from '../inputs';
import { MyText } from '../text';

const JobTab = () => {
  return (
    <VStack w={'full'} px={'100px'} marginTop={'20px'} gap={'50px'}>
      <HStack
        w={'full'}
        py={'20px'}
        px={'20px'}
        borderRadius={'10px'}
        boxShadow="0px 10px 30px rgb(0,0,0,0.1)"
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
      <HStack w={'full'} gap={'10px'}>
        <HStack w={'full'}>
          <MyInput
            type="text"
            placeholder="Job title or keyword"
            leftElement={<MyIcon name="search" width="20" height="20" />}
          />
        </HStack>
        <MyButton title="Search" />
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
          isNamedLogo={true}
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
          isNamedLogo={true}
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
          isNamedLogo={true}
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
          isNamedLogo={true}
        />
      </Grid>

      {/* Button Part */}
      <HStack w={'full'} alignItems={'flex-start'} gap={'10px'}>
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
