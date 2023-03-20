import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import Icon from '../Icon/Icon';

const Navbar = () => {
  return (
    <VStack justifyContent={'center'} h={14}>
      <HStack
        justifyContent="space-between"
        w={'6xl'}
        py={2}
        px={16}
        borderBottomEndRadius={'2xl'}
        borderTopLeftRadius={'2xl'}
      >
        <HStack>
          <Image
            src={require('../../public/scopeseeker-logo.png')}
            alt={'navbar'}
            height={28}
          />
          <Text as={'span'} fontWeight={'hairline'} fontSize={'sm'}>
            Scope Seeker
          </Text>
        </HStack>

        <HStack spacing={4}>
          <Button
            variant={'link'}
            color={'blackAlpha.800'}
            fontSize={'xs'}
            fontWeight={'medium'} 
            leftIcon={<Icon name="job" width="14px" height="14px" />}
          >
            Job
          </Button>
          <Button
            variant={'link'}
            color={'blackAlpha.800'}
            fontSize={'xs'}
            fontWeight={'medium'} 
            leftIcon={<Icon name="company" width="14px" height="14px"/>}
          >
            Company
          </Button>
          <Button
            variant={'link'}
            color={'blackAlpha.800'}
            fontSize={'xs'}
            fontWeight={'medium'} 
            leftIcon={<Icon name="pages" width="14px" height="14px" />}
          >
            Page
          </Button>
        </HStack>

        <HStack fontSize={'xs'}>
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
            color={'white'}
          >
            Sign Up
          </Button>
          <Icon
            name="darkMode"
            width="18px"
            height="18px"
            style={{ cursor: 'pointer', marginLeft: '15px' }}
          />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Navbar;
