import { Box, Center, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import Icon from '../icon/Icon';
import MyButton from '../button/MyButton';

const JobCard = () => {
  return (
    // <VStack
    //   w={'60%'}
    //   marginInline={'auto'}
    //   alignItems={'flex-start'}
    //   py={3}
    //   px={6}
    //   gap={3}
    // >
    //   <HStack justifyContent={'space-between'} w={'full'}>
    //     <HStack>
    //       <Center
    //         w={'45px'}
    //         h={'45px'}
    //         bg={'brand.black'}
    //         borderRadius={'full'}
    //       >
    //         <Icon name="instagram" height="22" width="22" color="white" />
    //       </Center>
    //       <Box>
    //         <Heading fontSize={'sm'}>Frontend Developer</Heading>

    //         <Text fontSize={'2xs'}>Tata Consultancy Service</Text>
    //         <Text fontSize={'3xs'}>Bhopal, Madhya Pradesh</Text>
    //       </Box>
    //     </HStack>
    //     <HStack gap={1}>
    //       <Center
    //         w={'35px'}
    //         h={'35px'}
    //         border={'1px'}
    //         borderColor={'gray.400'}
    //         borderRadius={'lg'}
    //         cursor={'pointer'}
    //       >
    //         <Icon name="save" height="16" width="16" />
    //       </Center>

    //       <Center
    //         w={'35px'}
    //         h={'35px'}
    //         border={'1px'}
    //         borderColor={'gray.400'}
    //         borderRadius={'lg'}
    //         cursor={'pointer'}
    //       >
    //         <Icon name="share" height="16" width="16" />
    //       </Center>
    //     </HStack>
    //   </HStack>

    //   <VStack alignItems={'flex-start'} gap={1}>
    //     <HStack>
    //       <Center
    //         px={2}
    //         py={1}
    //         bg={'purple.100'}
    //         borderRadius={'full'}
    //         cursor={'pointer'}
    //       >
    //         <Text fontSize={'2xs'} fontWeight={'medium'} color={'purple.900'}>
    //           Full Time
    //         </Text>
    //       </Center>

    //       <Center
    //         px={2}
    //         py={1}
    //         bg={'green.100'}
    //         borderRadius={'full'}
    //         cursor={'pointer'}
    //       >
    //         <Text fontSize={'2xs'} fontWeight={'medium'} color={'green.900'}>
    //           Part Time
    //         </Text>
    //       </Center>

    //       <Center
    //         px={2}
    //         py={1}
    //         bg={'cyan.100'}
    //         borderRadius={'full'}
    //         cursor={'pointer'}
    //       >
    //         <Text fontSize={'2xs'} fontWeight={'medium'} color={'cyan.900'}>
    //           Internship
    //         </Text>
    //       </Center>
    //     </HStack>

    //     <Text fontSize={'2xs'} color={'gray.500'}>
    //       UX designers measure and optimize applications to improve ease of use
    //       (usability), and create the best user experience by exploring many
    //       diffrent approaches to solve end's-user problems.
    //     </Text>

    //     <HStack>
    //       <MyButton title="Apply Now" fontSize="xs" px={8} />
    //       <MyButton
    //         title="Full Details"
    //         fontSize="xs"
    //         px={8}
    //         bg="transparent"
    //         color="brand.black"
    //         border={'1px'}
    //         borderColor={'gray.300'}
    //       />
    //     </HStack>
    //   </VStack>
    // </VStack>
    <VStack>
      <JobCardBox
        roles="frontend"
        companyName="tata"
        location="bhopal"
        jobType={[
          { label: 'full Time', value: 'full' },
          { label: 'part Time', value: 'part' },
          { label: 'Internship', value: 'intern' },
        ]}
        companyDesc="UX designers measure and optimize applications to improve ease of use
            (usability), and create the best user experience by exploring many
           diffrent approaches to solve end's-user problems"
        cardBtns={[
          { label: 'Apply Now', value: 'apply' },
          { label: 'Details', value: 'dets' },
        ]}
      />
    </VStack>
  );
};

export default JobCard;

interface IJobCardBox {
  roles: string;
  companyName: string;
  location: string;
  jobType: { label: string; value: string }[];
  companyDesc: string;
  cardBtns: { label: string; value: string }[];
}

const JobCardBox: React.FC<IJobCardBox> = ({
  roles,
  companyName,
  location,
  jobType,
  companyDesc,
  cardBtns,
}: IJobCardBox) => {
  return (
    <VStack
      w={'60%'}
      marginInline={'auto'}
      alignItems={'flex-start'}
      py={3}
      px={6}
      gap={3}
      bg={'red.100'}
    >
      <HStack justifyContent={'space-between'} w={'full'}>
        <HStack>
          <Center
            w={'45px'}
            h={'45px'}
            bg={'brand.black'}
            borderRadius={'full'}
          >
            <Icon name="instagram" height="22" width="22" color="white" />
          </Center>
          <Box>
            <Heading fontSize={'sm'}>{roles}</Heading>
            <Text fontSize={'2xs'}>{companyName}</Text>
            <Text fontSize={'3xs'}>{location}</Text>
          </Box>
        </HStack>
        <HStack gap={1}>
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
        <HStack>
          {jobType.map((item) => (
            <Center
              px={2}
              py={1}
              bg={'purple.100'}
              borderRadius={'full'}
              cursor={'pointer'}
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

        <Text fontSize={'2xs'} color={'gray.500'}>
          {companyDesc}
        </Text>

        <HStack>
          {cardBtns.map((item) => (
            <HStack>
              {/* <MyButton title={item.label} fontSize="xs" px={8} /> */}
              {/* <MyButton
                title={item.label}
                fontSize="xs"
                px={8}
                bg="transparent"
                color="brand.black"
                border={'1px'}
                borderColor={'gray.300'}
              /> */}
              <MyButton
                key={item.value}
                title={item.label}
                fontSize="xs"
                px={8}
                bg={item.value === 'dets' ? 'transparent' : undefined}
                color={item.value === 'dets' ? 'brand.black' : undefined}
                border={item.value === 'dets' ? '1px' : undefined}
                borderColor={item.value === 'dets' ? 'gray.300' : undefined}
              />
            </HStack>
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
};
