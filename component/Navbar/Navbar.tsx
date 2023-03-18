import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <VStack justifyContent={'center'} h={14}>
      <HStack
        justifyContent="space-between"
        w={'6xl'}
        bg={'blue.200'}
        py={2}
        px={16}
        borderBottomEndRadius={'2xl'}
        borderTopLeftRadius={'2xl'}
      >
        <Text as={'span'} fontWeight={'hairline'} fontSize={'sm'}>
          Scope Seeker
        </Text>

        <HStack fontSize={'xs'} gap={2.5}>
          <Link href={'#'}>Jobs</Link>
          <Link href={'#'}>Company</Link>
          <Link href={'#'}>About Us</Link>
        </HStack>

        <HStack fontSize={'xs'} gap={2.5}>
          {/* <Link href={'#'}>Login</Link> */}
          <Button
            colorScheme={'none'}
            size={'sm'}
            fontSize={'xs'}
            fontWeight={'thin'}
            color={'blackAlpha.900'}
          >
            Login
          </Button>
          <Button
            bg={'brand.100'}
            size={'sm'}
            fontSize={'xs'}
            fontWeight={'thin'}
          >
            Sign Up
          </Button>
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Navbar;
