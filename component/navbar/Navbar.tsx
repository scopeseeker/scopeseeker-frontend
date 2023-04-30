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
        boxShadow={'0 0px 40px rgba(0, 0, 0, 0.2)'}
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
            <Center
              _hover={{
                color: 'brand.primary',
                // borderBottom: '2px solid',
                // borderColor: 'brand.primary',
                // paddingBottom: '15px',
              }}
            >
              <Box>
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
              </Box>
              <MyText
                title="Jobs"
                as="link"
                href="/jobs-portal"
                px="4px"
                _hover={{
                  color: 'brand.primary',
                  // borderBottom: '2px solid',
                  // borderColor: 'brand.primary',
                  // paddingBottom: '15px',
                }}
              />
            </Center>

            <Center _groupHover={{ color: 'brand.primary' }}>
              <Box _groupHover={{ color: 'brand.primary' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                  width={'16px'}
                  height={'16px'}
                >
                  <path
                    d="M176 416v64M80 32h192a32 32 0 0132 32v412a4 4 0 01-4 4H48h0V64a32 32 0 0132-32zM320 192h112a32 32 0 0132 32v256h0-160 0V208a16 16 0 0116-16z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="28"
                  />
                </svg>
              </Box>

              <MyText
                title="Companies"
                as="link"
                href="/jobs-portal"
                px="4px"
              />
            </Center>

            {/* <MyText
              title="Companies"
              as="link"
              href="/jobs-portal"
              px="10px"
              _hover={{
                color: 'brand.primary',
                borderBottom: '2px solid',
                borderColor: 'brand.primary',
                paddingBottom: '15px',
              }}
            /> */}
          </HStack>
        </HStack>
        <HStack></HStack>

        {/* <HStack gap={12}>
            <Link href={'/'}>
          <HStack cursor={'pointer'}>
            <MyImage
              src={'/assets/images/scopeseeker-logo.png'}
              alt={'secope seeker logo'}
              width={30}
              height={30}
            />
            <Flex direction={'column'}>
              <Text
                as={'span'}
                lineHeight={'1'}
                fontSize={'sm'}
                fontWeight={'medium'}
              >
                Scope Seeker
              </Text>
              <Text as={'span'} fontSize={'8px'}>
                Seek the scope of your potential
              </Text>
            </Flex>
          </HStack>
            </Link>

          <HStack gap={6}>
            <MyText
              as="link"
              title="Jobs"
              href="/jobs-portal"
              hoverColor={'brand.primary'}
            />
            <MyText
              as="link"
              title="Company"
              href="/company"
              hoverColor={'brand.primary'}
            />
            <MyText
              as="link"
              title="About Us"
              href="/about-us"
              hoverColor={'brand.primary'}
            />
            <MyText
              as="link"
              title="Contact Us"
              href="/contact-us"
              hoverColor={'brand.primary'}
            />
          </HStack>
        </HStack>
        <HStack gap={3}>
          <HStack gap={1}>
            <Link href={'/login'}>
              <MyButton
                title="Login"
                variant="outline"
                fontSize="xs"
                borderRadius={20}
              />
            </Link>
            <Link href={'/signup'}>
              <MyButton title="Sign Up" fontSize="xs" borderRadius={20} />
            </Link>
          </HStack>

          <Center
            onClick={toggleColorMode}
            bg={'orange.100'}
            borderRadius={'full'}
            p={2}
            cursor={'pointer'}
          >
            <MyIcon name={'darkMode'} width={'16'} color={'orange'} />
          </Center>
        </HStack> */}
      </HStack>
    </Box>
  );
};

export default Navbar;
