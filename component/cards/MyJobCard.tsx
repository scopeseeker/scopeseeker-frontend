import { Badge, Box, Center, Flex, HStack, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import truncatedParagraph from '../../lib/validator';
import MyButton from '../button/MyButton';
import Icon from '../icon/Icon';
import MyImage from '../image/MyImage';
import MyText from '../text/MyText';
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
      w={'3xs'}
      borderRadius={10}
      marginInline={'auto'}
      alignItems={'flex-start'}
      cursor={'pointer'}
      px={'16px'}
      py={'12px'}
      h={'2xs'}
      bg={'brand.white'}
      border={'1px solid'}
      borderColor={'brand.darkgray'}
      _hover={{
        borderColor: 'brand.primary',
        boxShadow: '0px 0px 30px rgb(0,0,0,0.1)',
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
          <Center w={'35px'} h={'35px'} cursor={'pointer'}>
            <Icon name="save" height="16" width="16" />
          </Center>
        </HStack>
      </HStack>

      <VStack alignItems={'flex-start'} gap={1} w={'full'}>
        <Box>
          <MyText title={role} as="title" />
          <MyText
            title={companyName}
            as="span"
            fontSize={{ base: '10px', md: '10px' }}
          />
        </Box>
        <Flex gap={'8px'} flexWrap={'wrap'} w={'full'}>
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
        </Flex>

        <MyText as="st" title={truncatedParagraph(companyDesc)} />

        <HStack>
          <Link href={'#'}>
            <MyButton title="Apply Now" size="sm" fontSize="14px" />
          </Link>
          <Link href={'#'}>
            <MyButton
              title="See Details"
              size="sm"
              fontSize="14px"
              variant="outline"
            />
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default MyJobCard;
