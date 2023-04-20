import MyButton from '@/component/button/MyButton';
import MyJobCard from '@/component/cards/MyJobCard';
import Filter from '@/component/filter/Filter';
import { Box, Divider, Grid, HStack, Heading, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const Jobs = () => {
  const [isSortClicked, setIsSortClicked] = useState(true);
  return (
    <VStack w={'full'} minH={'100vh'} px={28} spacing={0}>
      <HStack
        w={'full'}
        h={12}
        m={6}
        bg={'brand.white'}
        boxShadow={'0px 0px 6px rgb(0, 0, 0, 0.2)'}
        borderRadius={6}
      ></HStack>
      <Divider />
      <HStack
        alignItems={'flex-start'}
        w={'full'}
        minH={'100vh'}
        // p={2}
        pt={12}
        gap={12}
      >
        <Box w={'20%'} pr={2}>
          <Filter />
        </Box>
        <VStack w={'80%'} h={'100%'}>
          <HStack justifyContent={'space-between'} w={'full'}>
            <Heading as={'span'} fontSize={'sm'}>
              Showing 69 Jobs
            </Heading>
            <HStack
              h={7}
              gap={0}
              spacing={0}
              bg={'brand.aliceblue'}
              borderRadius={20}
              overflow={'hidden'}
              border={'1px solid'}
              borderColor={'brand.primary'}
            >
              <MyButton
                borderRadius={0}
                variant={!isSortClicked ? 'link' : 'solid'}
                h={'100%'}
                w="50%"
                title="Newest"
                px={2}
                fontSize="xs"
                py={1}
                onClick={() => setIsSortClicked(!isSortClicked)}
              />
              <MyButton
                borderRadius={0}
                variant={isSortClicked ? 'link' : 'solid'}
                h={'100%'}
                w="50%"
                title="Oldest"
                px={2}
                py={1}
                fontSize="xs"
                onClick={() => setIsSortClicked(!isSortClicked)}
              />
            </HStack>
          </HStack>
          <Box pt={6} w={'full'}>
            <Grid templateColumns="repeat(1, 1fr)" gap={4}>
              <MyJobCard
                companyIconLogo={'/assets/images/company-logo/bookmyshow.png'}
                role={'Frontend Developer'}
                companyName={'Tata Consultancy Service'}
                location={'Bhopal, Madhaya Pradesh'}
                jobType={[
                  { label: 'Full Time', value: 'full', color: 'green' },
                  { label: 'Part Time', value: 'part', color: 'yellow' },
                  { label: 'Internship', value: 'intern', color: 'blue' },
                  { label: 'Startup', value: 'intern', color: 'purple' },
                  { label: 'Indian MNC', value: 'intern', color: 'cyan' },
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
                  { label: 'Full Time', value: 'full', color: 'green' },
                  { label: 'Part Time', value: 'part', color: 'yellow' },
                  { label: 'Internship', value: 'intern', color: 'blue' },
                  { label: 'Startup', value: 'intern', color: 'purple' },
                  { label: 'Indian MNC', value: 'intern', color: 'cyan' },
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
                  { label: 'Full Time', value: 'full', color: 'green' },
                  { label: 'Part Time', value: 'part', color: 'yellow' },
                  { label: 'Internship', value: 'intern', color: 'blue' },
                  { label: 'Startup', value: 'intern', color: 'purple' },
                  { label: 'Indian MNC', value: 'intern', color: 'cyan' },
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
                  { label: 'Full Time', value: 'full', color: 'green' },
                  { label: 'Part Time', value: 'part', color: 'yellow' },
                  { label: 'Internship', value: 'intern', color: 'blue' },
                  { label: 'Startup', value: 'intern', color: 'purple' },
                  { label: 'Indian MNC', value: 'intern', color: 'cyan' },
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
                  { label: 'Full Time', value: 'full', color: 'green' },
                  { label: 'Part Time', value: 'part', color: 'yellow' },
                  { label: 'Internship', value: 'intern', color: 'blue' },
                  { label: 'Startup', value: 'intern', color: 'purple' },
                  { label: 'Indian MNC', value: 'intern', color: 'cyan' },
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
                  { label: 'Full Time', value: 'full', color: 'green' },
                  { label: 'Part Time', value: 'part', color: 'yellow' },
                  { label: 'Internship', value: 'intern', color: 'blue' },
                  { label: 'Startup', value: 'intern', color: 'purple' },
                  { label: 'Indian MNC', value: 'intern', color: 'cyan' },
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
                  { label: 'Full Time', value: 'full', color: 'green' },
                  { label: 'Part Time', value: 'part', color: 'yellow' },
                  { label: 'Internship', value: 'intern', color: 'blue' },
                  { label: 'Startup', value: 'intern', color: 'purple' },
                  { label: 'Indian MNC', value: 'intern', color: 'cyan' },
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
                  { label: 'Full Time', value: 'full', color: 'green' },
                  { label: 'Part Time', value: 'part', color: 'yellow' },
                  { label: 'Internship', value: 'intern', color: 'blue' },
                  { label: 'Startup', value: 'intern', color: 'purple' },
                  { label: 'Indian MNC', value: 'intern', color: 'cyan' },
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
                  { label: 'Full Time', value: 'full', color: 'green' },
                  { label: 'Part Time', value: 'part', color: 'yellow' },
                  { label: 'Internship', value: 'intern', color: 'blue' },
                  { label: 'Startup', value: 'intern', color: 'purple' },
                  { label: 'Indian MNC', value: 'intern', color: 'cyan' },
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
                  { label: 'Full Time', value: 'full', color: 'green' },
                  { label: 'Part Time', value: 'part', color: 'yellow' },
                  { label: 'Internship', value: 'intern', color: 'blue' },
                  { label: 'Startup', value: 'intern', color: 'purple' },
                  { label: 'Indian MNC', value: 'intern', color: 'cyan' },
                ]}
                companyDesc="UX designers measure and optimize applications to improve ease of use
        (usability), and create the best user experience by exploring many
       diffrent approaches to solve end's-user problems"
                isNamedLogo={true}
              />
            </Grid>
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Jobs;
