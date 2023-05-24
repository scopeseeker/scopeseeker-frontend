import { Box, Center, HStack, VStack, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import MyImage from '../image/MyImage';
import MyText from '../text/MyText';

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
                  as="span"
                  fontSize={{ base: 'none', md: '8px' }}
                  display={{ base: 'none', md: 'initial' }}
                />
              </VStack>
            </Center>
          </Link>
          {/* Links Sections */}
          <HStack gap={'12px'}>
            <Center _hover={{ color: 'brand.primary' }} gap={'4px'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
                width={'16px'}
                height={'16px'}
              >
                <path
                  d="M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="28"
                />
              </svg>
              <MyText
                title="Jobs"
                as="link"
                href="/jobs"
                color="currentColor"
              />
            </Center>
            <Center _hover={{ color: 'brand.primary' }} gap={'4px'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
                width={'16px'}
                height={'16px'}
              >
                <path
                  d="M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="28"
                />
              </svg>
              <MyText
                title="Company"
                as="link"
                href="/company"
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
