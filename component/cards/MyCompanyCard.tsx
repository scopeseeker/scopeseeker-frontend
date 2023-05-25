import { MyBadge } from '@/component';
import { IMyJobCard } from '@/inteface/component-interface';
import { Box, Center, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import truncatedParagraph from '../../lib/validator';
import MyButton from '../button/MyButton';
import MyIcon from '../icon/MyIcon';
import MyImage from '../image/MyImage';
import MyText from '../text/MyText';

const MyCompanyCard = ({
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
    <Center
      w={{ base: '90vw', md: '100%', lg: '250px', '2xl': '350px' }}
      h={{ base: '315px', sm: '280px', md: '315px' }}
      borderRadius={10}
      cursor={'pointer'}
      px={'20px'}
      py={'12px'}
      bg={'brand.white'}
      border={'1px solid'}
      borderColor={'brand.darkgray'}
      _hover={{
        borderColor: 'brand.primary',
        boxShadow: '0px 0px 30px rgb(0,0,0,0.1)',
      }}
    >
      <VStack w={'full'} justifyContent={'center'}>
        <HStack justifyContent={'space-between'} w={'full'}>
          <Center
            w={'56px'}
            h={'56px'}
            borderRadius={'full'}
            p={'6px'}
            overflow={'hidden'}
            bg={'brand.aliceblue'}
          >
            <MyImage src={companyIconLogo} alt="logo" width={80} height={80} />
          </Center>
          <Center w={'35px'} h={'35px'} cursor={'pointer'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
              width='18'
              height='18'
            >
              <path
                d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
          </Center>
        </HStack>

        <VStack alignItems={'flex-start'} gap={1} w={'full'}>
          <Box>
            <MyText title={companyName} as="title" />
          </Box>
          <HStack>
            <MyText
              as="span"
              fontSize={{ base: '10px', md: '10px' }}
              title="⭐ 4.3 Raating | 459 Review"
            />
          </HStack>

          <Flex gap={'8px'} flexWrap={'wrap'} w={'full'}>
            <MyBadge labelArray={jobType} />
          </Flex>
          <Flex h={'58px'} overflow={'hidden'} gap={0}>
            <MyText
              as="small"
              title={truncatedParagraph(companyDesc)}
              overflowWrap={'break-word'}
            />
          </Flex>
          <HStack>
            <Link href={'#'}>
              <MyButton
                title="Full Details"
              />
            </Link>
            <Link href={'#'}>
              <MyButton
                title="View Jobs"
                variant="outline"
              />
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
};

export default MyCompanyCard;
