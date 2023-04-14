import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Text,
  useColorMode
} from '@chakra-ui/react';
import Link from 'next/link';
import MyButton from '../button/MyButton';
import Icon from '../icon/Icon';
import MyImage from '../image/MyImage';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box minH={14}>
      <HStack
        zIndex={'overlay'}
        justifyContent="space-between"
        top={0}
        left={0}
        position={'fixed'}
        w={'full'}
        px={12}
        bg={'brand.white'}
        py={2}
        h={14}
        boxShadow={'0 4px 10px rgba(0, 0, 0, 0.1)'}
        borderBottom={'1px solid rgba(255, 255, 255, 0.69)'}
      >
        {/* Left Part of Navbar */}
        <HStack gap={12}>
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

          <HStack>
          <Link href={'/jobs'}>
              <MyButton
                title="Job"
                variant="Link"
                fontSize="xs"
                fontWeight='medium'
                rightIcon={<Icon name={'arrow-down'} width={'16px'} />}
              />
            </Link>

            <Link href={'#'}>
              <MyButton
                title="Company"
                variant="Link"
                fontWeight='medium'
                fontSize="xs"
                rightIcon={<Icon name={'arrow-down'} width={'16px'} />}
              />
            </Link>

            <Link href={'#'}>
              <MyButton
                title="Pages"
                variant="Link"
                fontWeight='medium'
                fontSize="xs"
                rightIcon={<Icon name={'arrow-down'} width={'16px'} />}
              />
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
    </Box>
  );
};

export default Navbar;
