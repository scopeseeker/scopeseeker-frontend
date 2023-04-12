import { Box, Center, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import MyButton from '../button/MyButton';
import Icon from '../icon/Icon';
import MyImage from '../image/MyImage';

const MyJobCard = () => {
  return (
    <VStack>
      <JobCardBox
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
      <JobCardBox
        companyIconLogo={'/assets/images/company-logo/google.png'}
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
      />
    </VStack>
  );
};

export default MyJobCard;

interface IJobCardBox {
  companyIconLogo: string;
  role: string;
  companyName: string;
  location: string;
  jobType: { label: string; value: string }[];
  companyDesc: string;
  applyLink?: string;
  fullDetailedLink?: string;
  isNamedLogo?: boolean;
}

const JobCardBox: React.FC<IJobCardBox> = ({
  companyIconLogo,
  role,
  companyName,
  location,
  jobType,
  companyDesc,
  applyLink = '#',
  fullDetailedLink = '#',
  isNamedLogo = false,
}: IJobCardBox) => {
  return (
    <VStack
      m={2}
      w={'2xs'}
      borderRadius={10}
      marginInline={'auto'}
      alignItems={'flex-start'}
      py={3}
      px={3}
      bg={'brand.cardColor'}
    >
      <HStack justifyContent={'space-between'} w={'full'}>
        <Center
          w={isNamedLogo ? 'fit-content' : '45px'}
          h={'45px'}
          borderRadius={'full'}
        >
          <MyImage
            src={companyIconLogo}
            alt="logo"
            width={isNamedLogo ? 80 : 30}
            height={30}
          />
        </Center>
        <HStack>
          <Center
            w={'35px'}
            h={'35px'}
            border={'1px'}
            borderColor={'gray.400'}
            borderRadius={'lg'}
            cursor={'pointer'}
          >
            <Icon name="save" height="16" width="16" />
          </Center>

          <Center
            w={'35px'}
            h={'35px'}
            border={'1px'}
            borderColor={'gray.400'}
            borderRadius={'lg'}
            cursor={'pointer'}
          >
            <Icon name="share" height="16" width="16" />
          </Center>
        </HStack>
      </HStack>

      <VStack alignItems={'flex-start'} gap={1}>
        <Box>
          <Heading fontSize={'sm'}>{role}</Heading>
          <Text fontSize={'2xs'}>{companyName}</Text>
        </Box>
        <HStack>
          {jobType.map((item) => (
            <Center
              px={2}
              py={1}
              bg={'purple.100'}
              borderRadius={'full'}
              cursor={'pointer'}
              // colorScheme="blue"
            >
              <Text
                as={'span'}
                fontSize={'2xs'}
                fontWeight={'medium'}
                color={'purple.900'}
              >
                {item.label}
              </Text>
            </Center>
          ))}
        </HStack>
        <Text fontSize={'2xs'}>{location}</Text>
        <Text fontSize={'2xs'} color={'gray.500'}>
          {companyDesc}
        </Text>

        <HStack>
          <Link href={applyLink}>
            <MyButton title="Apply Now" fontSize="xs" px={6} />
          </Link>
          <Link href={fullDetailedLink}>
            <MyButton
              title="Full Details"
              fontSize="xs"
              variant="outline"
              px={6}
            />
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};
