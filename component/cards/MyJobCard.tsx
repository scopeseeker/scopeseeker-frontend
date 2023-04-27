import { IMyJobCard } from '@/inteface/component-interface';
import { Box, Center, Flex, HStack, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import truncatedParagraph from '../../lib/validator';
import MyButton from '../button/MyButton';
import MyIcon from '../icon/MyIcon';
import MyImage from '../image/MyImage';
import MyText from '../text/MyText';
import {MyBadge} from '@/component'

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
      <VStack w={'full'}>
        <HStack justifyContent={'space-between'} w={'full'}>
          <Center
            w={isNamedLogo ? 'fit-content' : '45px'}
            h={'45px'}
            borderRadius={'full'}
            bg={'brand.aliceblue'}
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
              <MyIcon name="save" height="16" width="16" />
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
            {jobType.map((item) => (
              <MyBadge label={item.label} color={item.color} key={item.value} />
            ))}
          </Flex>

          <MyText
            title={location}
            as="span"
            fontSize={{ base: '10px', md: '10px' }}
          />
          <MyText as="st" title={truncatedParagraph(companyDesc)} />
          <HStack>
            <Link href={'#'}>
              <MyButton
                title="Apply Now"
                px={'20px'}
                fontSize={{ base: '14px', md: '12px' }}
              />
            </Link>
            <Link href={'#'}>
              <MyButton
                title="See Details"
                px={'20px'}
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
