import {
  Badge,
  Box,
  Center,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import MyButton from '../button/MyButton';
import Icon from '../icon/Icon';
import MyImage from '../image/MyImage';
interface IMyJobCard {
  companyIconLogo: string;
  role: string;
  companyName: string;
  location: string;
  jobType: { label: string; value: string; color: string }[];
  companyDesc: string;
  applyLink?: string;
  fullDetailedLink?: string;
  isNamedLogo?: boolean;
}

const MyJobCard: React.FC<IMyJobCard> = ({
  companyIconLogo,
  role,
  companyName,
  location,
  jobType,
  companyDesc,
  applyLink = '#',
  fullDetailedLink = '#',
  isNamedLogo = false,
}: IMyJobCard) => {
  return (
    <VStack
      w={'sm'}
      borderRadius={10}
      marginInline={'auto'}
      alignItems={'flex-start'}
      cursor={'pointer'}
      py={1}
      pb={3}
      px={4}
      h={'fit-content'}
      bg={'brand.white'}
      // boxShadow={'0px 0px 20px rgb(0,0,0,0.2)'}
      border={'1px solid'}
      borderColor={'brand.darkgrey'}
      _hover={{
        borderColor: 'brand.primary',
        borderWidth: '2px',
        transform: 'traslateY(10px)',
      }}
    >
      <HStack justifyContent={'space-between'} w={'full'}>
        <Center
          w={isNamedLogo ? 'fit-content' : '45px'}
          h={'40px'}
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
            // border={'1px'}
            // borderColor={'gray.400'}
            // borderRadius={'lg'}
            cursor={'pointer'}
          >
            <Icon name="save" height="16" width="16" />
          </Center>
        </HStack>
      </HStack>

      <VStack alignItems={'flex-start'} gap={1}>
        <Box>
          <Heading fontSize={'sm'}>{role}</Heading>
          <Text fontSize={'2xs'}>{companyName}</Text>
        </Box>
        <HStack>
          {jobType.map((item, key) => (
            <Badge
              as={'span'}
              fontSize={'8px'}
              fontWeight={'medium'}
              colorScheme={item.color}
              key={key}
              px={2}
              py={1}
              borderRadius={3}
              variant={'outline'}
            >
              {item.label}
            </Badge>
          ))}
        </HStack>

        {/* <Text fontSize={'2xs'} color={'gray.500'}>
          {companyDesc}
        </Text> */}

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

export default MyJobCard;
