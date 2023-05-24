import { IMyJobCard } from '@/inteface/component-interface';
import { Box, Center, Flex, HStack, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import truncatedParagraph from '../../lib/validator';
import MyButton from '../button/MyButton';
import MyIcon from '../icon/MyIcon';
import MyImage from '../image/MyImage';
import MyText from '../text/MyText';
import { MyBadge } from '@/component';

const MyJobCard = ({
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
      w={'100%'}
      // h={{ base: '342px', sm: '280px', md: '315px' }}
      borderRadius={10}
      cursor={'pointer'}
      px={'20px'}
      py={'18px'}
      bg={'brand.white'}
      border={'1px solid'}
      borderColor={'brand.darkgray'}
      _hover={{
        borderColor: 'brand.primary',
        boxShadow: '0px 0px 30px rgb(0,0,0,0.1)',
      }}
    >
      <VStack w={'full'}>
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
          <HStack>
            <Center w={'35px'} h={'35px'} cursor={'pointer'}>
              <MyIcon name="save" height="16" width="16" />
            </Center>
          </HStack>
        </HStack>

        <VStack alignItems={'flex-start'} gap={'2px'} w={'full'}>
          <VStack spacing={0} gap={0} alignItems={'flex-start'}>
            <MyText title={role} as="title" />
            <MyText
              title={companyName}
              as="small"
            />
          </VStack>
          <Flex gap={'8px'} flexWrap={'wrap'} w={'full'}>
            <MyBadge labelArray={jobType} />
          </Flex>
          <MyText
            title={location}
            as="small"
          />
          <Flex h={'54px'} overflow={'hidden'} gap={0}>
            <MyText
              as="small"
              title={truncatedParagraph(companyDesc)}
              overflowWrap={'break-word'}
            />
          </Flex>
          <HStack w={'full'} bg={'red.200'}>
            <Link href={'#'}>
              <MyButton
                title="Apply Now"
                fontSize={{ base: '14px', md: '12px' }}
              />
            </Link>
            <Link href={'#'}>
              <MyButton
                title="See Details"
                fontSize={{ base: '14px', md: '12px' }}
                variant="outline"
              />
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
};

export default MyJobCard;