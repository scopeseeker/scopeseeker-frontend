import { MyBadge } from '@/component';
import { IMyCompanyCard } from '@/inteface/component-interface';
import { Center, Flex, HStack, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import truncatedParagraph from '../../lib/validator';
import MyButton from '../button/MyButton';
import MyIcon from '../icon/MyIcon';
import MyImage from '../image/MyImage';
import MyText from '../text/MyText';

const MyCompanyCard = ({
  companyLogo,
  rating = '4.3 Raating | 459 Review',
  companyName,
  tags,
  companyDesc,
  fullDetailLink = '#',
  viewJobs = '#',
}: IMyCompanyCard) => {
  return (
    <Center
      w={'100%'}
      // h={{ base: '342px', sm: '280px', md: '315px' }}
      borderRadius={'8px'}
      cursor={'pointer'}
      px={'20px'}
      py={'16px'}
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
            <MyImage src={companyLogo} alt="logo" width={80} height={80} />
          </Center>
          <MyIcon name="save" />
        </HStack>

        <VStack
          alignItems={'flex-start'}
          gap={{ base: '2px', '2xl': '8px' }}
          w={'full'}
        >
          <VStack spacing={0} gap={0} alignItems={'flex-start'}>
            <MyText title={companyName} as="title" />
            <MyText
              as="span"
              fontSize={{ base: '10px', md: '10px' }}
              title={`⭐ ${rating}`}
            />
          </VStack>
          <Flex gap={'8px'} flexWrap={'wrap'} w={'full'}>
            <MyBadge labelArray={tags} />
          </Flex>
          {/* <MyText title={location} as="small" /> */}
          <Flex
            h={{ base: '64px', md: '36px', '2xl': '44px' }}
            overflow={'hidden'}
            gap={0}
          >
            <MyText
              as="small"
              title={truncatedParagraph(companyDesc, 18)}
              overflowWrap={'break-word'}
            />
          </Flex>
          <HStack w={'full'}>
            <Link href={fullDetailLink}>
              <MyButton title="Full Details" />
            </Link>
            <Link href={viewJobs}>
              <MyButton title="View Jobs" variant="outline" />
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
};

export default MyCompanyCard;
