import { Box, Center, HStack, VStack, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import MyImage from '../image/MyImage';
import MyText from '../text/MyText';
import { MyIcon } from '../icon';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navHeight = { base: '60px', md: '53px' };
  return (
    <Box h={navHeight}>
      <HStack
        position={'fixed'}
        top={0}
        left={0}
        w={'full'}
        h={navHeight}
        justifyContent="space-between"
        bg={'brand.white'}
        boxShadow={'0 0px 10px rgba(0, 0, 0, 0.2)'}
        zIndex={'overlay'}
        px={{ base: '24px', md: '48px' }}
      >
        <HStack gap={'16px'}>
          {/*Scope Seeker Logo*/}
          <Link href={'/'}>
            <Center gap={'8px'} mr={'10px'}>
              <MyImage
                src={'/assets/images/scopeseeker-logo.png'}
                alt={'secope seeker logo'}
                width={30}
                height={30}
              />
              <VStack alignItems={'flex-start'} spacing={0}>
                <MyText
                  lineHeight={'shorter'}
                  title="Scope Seeker"
                  as="title"
                />
                <MyText
                  lineHeight={'shorter'}
                  title="Seek the scope of your potential"
                  as="small"
                  fontSize={{ base: 'none', md: '10px'}}
                  display={{ base: 'none', md: 'initial' }}
                />
              </VStack>
            </Center>
          </Link>
          {/* Links Sections */}
          <HStack gap={'12px'}>
            <Center
              _hover={{ color: 'brand.primary' }}
              gap={'4px'}
              cursor={'pointer'}
            >
              <MyIcon
                name="job"
                width="18px"
                height="18px"
                strokeWidth="1.2"
                color="currentColor"
              />
              <MyText
                title="Jobs"
                as="link"
                href="/jobs"
                color="currentColor"
              />
            </Center>
            <Center
              _hover={{ color: 'brand.primary' }}
              gap={'4px'}
              cursor={'pointer'}
            >
              <MyIcon
                name="job"
                width="18px"
                height="18px"
                strokeWidth="1.2"
                color="currentColor"
              />
              <MyText
                title="Jobs Details"
                as="link"
                href="/jobs/details/dfasdfasf"
                color="currentColor"
              />
            </Center>
            <Center _hover={{ color: 'brand.primary' }} gap={'4px'}>
              <MyIcon
                name="company"
                width="18px"
                height="18px"
                strokeWidth="1.2"
                color="currentColor"
              />
              <MyText
                title="Company"
                as="link"
                href="/company"
                color="currentColor"
              />
            </Center>

            <Center _hover={{ color: 'brand.primary' }} gap={'4px'}>
              <MyIcon
                name="company"
                width="18px"
                height="18px"
                strokeWidth="1.2"
                color="currentColor"
              />
              <MyText
                title="Company Details"
                as="link"
                href="/company/details/asddfasdf"
                color="currentColor"
              />
            </Center>
          </HStack>
        </HStack>
        <HStack></HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
