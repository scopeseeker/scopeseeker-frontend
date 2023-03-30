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
import MyButton from '../button/MyButton';
import Icon from '../icon/Icon';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box minH={14}>
      <HStack
        justifyContent="space-between"
        top={0}
        left={0}
        position={'fixed'}
        w={'full'}
        px={12}
        bg={'white'}
        py={2}
        h={14}
        boxShadow={'0 4px 10px rgba(0, 0, 0, 0.1)'}
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
            <Icon name={'darkMode'} width={'16'} color={'orange'} />
          </Center>
        </HStack>
      </HStack>
      {/* Dummy */}
    </Box>
  );
};

export default Navbar;
