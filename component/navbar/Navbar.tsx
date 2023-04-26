import { Box, Center, HStack, useColorMode } from '@chakra-ui/react';
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
        // bg={'brand.white'}
        bg={'red.100'}
        boxShadow={'0 4px 40px rgba(0, 0, 0, 0.1)'}
        zIndex={'overlay'}
        px={{ base: '24px', md: '48px' }}
      >
        <HStack>
          <Center gap={'8px'}>
            <MyImage
              src={'/assets/images/scopeseeker-logo.png'}
              alt={'secope seeker logo'}
              width={30}
              height={30}
            />

            <MyText lineHeight={'shorter'} title="Scope Seeker" as="title" />

            {/* <MyText lineHeight={'shorter'} title="Seek the scope of your potential" as="st" /> */}
          </Center>
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
              href="/jobs"
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
