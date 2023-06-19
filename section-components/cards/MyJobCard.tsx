import { MyBadge, MyButton, MyIcon, MyImage, MyText } from '@/component';
import { IMyJobCard } from '@/inteface/component-interface';
import { Center, Flex, HStack, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import truncatedParagraph from '../../lib/validator';

const MyJobCard = ({
  companyIconLogo,
  role,
  companyName,
  location,
  jobType,
  companyDesc,
  w,
  ...rest
}: IMyJobCard) => {
  return (
    <Center
      w={w || '100%'}
      // h={{ base: '342px', sm: '280px', md: '315px' }}
      borderRadius={'8px'}
      cursor={'pointer'}
      px={'20px'}
      py={'16px'}
      bg={'brand.white'}
      border={'1px solid'}
      borderColor={'brand.lightgray'}
      _hover={{
        borderColor: 'brand.primary',
        boxShadow: '0px 0px 30px rgb(0,0,0,0.1)',
      }}
      {...rest}
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
          <MyIcon name="save" />
        </HStack>

        <VStack
          alignItems={'flex-start'}
          gap={{ base: '2px', '2xl': '8px' }}
          w={'full'}
        >
          <VStack spacing={0} gap={0} alignItems={'flex-start'}>
            <MyText title={role} as="title" />
            <MyText title={`${companyName} - ${location}`} as="small" />
          </VStack>
          <Flex gap={'8px'} flexWrap={'wrap'} w={'full'}>
            <MyBadge labelArray={jobType} />
          </Flex>
          {/* <Flex
            h={{ base: '64px', md: '36px', '2xl': '44px' }}
            overflow={'hidden'}
            gap={0}
          >
            <MyText
              as="small"
              title={truncatedParagraph(companyDesc, 18)}
              overflowWrap={'break-word'}
            />
          </Flex> */}
          <HStack w={'full'}>
            <Link href={'#'}>
              <MyButton title="Apply Now" />
            </Link>
            <Link href={'#'}>
              <MyButton title="See Details" variant="outline" />
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
};

export default MyJobCard;
