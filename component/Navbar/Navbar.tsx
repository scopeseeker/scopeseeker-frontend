import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../icon/Icon';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box h={12}>
      <HStack
        justifyContent="space-between"
        top={0}
        left={0}
        position={'fixed'}
        w={'full'}
        px={12}
        bg={'white'}
        py={2}
        h={12}
        boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
        borderBottom={'1px solid rgba(255, 255, 255, 0.69)'}
      >
        {/* Left Part of Navbar */}
        <HStack gap={12}>
          <HStack cursor={'pointer'}>
            <Image
              src={require('../../public/scopeseeker-logo.png')}
              alt={'ss-log'}
              height={32}
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

          <HStack gap={6}>
            <Link href={'#'}>
              <Button
                iconSpacing={'1'}
                rightIcon={<Icon name={'arrow-down'} width={'14px'} />}
                variant="link"
                _hover={{ textDecoration: 'none', color: 'brand.100' }}
                fontSize={'xs'}
                fontWeight={'normal'}
              >
                Job
              </Button>
            </Link>

            <Link href={'#'}>
              <Button
                iconSpacing={'1'}
                rightIcon={<Icon name={'arrow-down'} width={'14px'} />}
                variant="link"
                _hover={{ textDecoration: 'none', color: 'brand.100' }}
                fontSize={'xs'}
                fontWeight={'normal'}
              >
                Company
              </Button>
            </Link>

            <Link href={'#'}>
              <Button
                iconSpacing={'1'}
                rightIcon={<Icon name={'arrow-down'} width={'14px'} />}
                variant="link"
                _hover={{ textDecoration: 'none', color: 'brand.100' }}
                fontSize={'xs'}
                fontWeight={'normal'}
              >
                Pages
              </Button>
            </Link>
          </HStack>
        </HStack>

        {/* Right Part of Navbar */}
        <HStack gap={3}>
          <Link href={'/login'}>
            <Button
              size={'sm'}
              fontWeight={'normal'}
              fontSize={'xs'}
              _hover={{ color: 'brand.200', textDecoration: 'none' }}
              borderRadius={20}
              variant={'link'}
            >
              Login
            </Button>
          </Link>
          <Link href={'/signup'}>
            <Button
              size={'sm'}
              color={'white'}
              bg={'brand.100'}
              fontWeight={'normal'}
              fontSize={'xs'}
              _hover={{ backgroundColor: 'brand.200' }}
              _active={{ backgroundColor: 'brand.300' }}
              borderRadius={20}
            >
              Sign up
            </Button>
          </Link>
          <Center
            onClick={toggleColorMode}
            bg={'orange.100'}
            borderRadius={'full'}
            p={2}
            cursor={'pointer'}
          >
            <Icon name={'darkMode'} width={'16'} color={'orange'} />
          </Center>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
