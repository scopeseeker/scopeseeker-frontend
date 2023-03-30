import { Center, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Company = () => {
  return (
    <Center gap={20} w={'full'} px={24} py={28}>
      <Center w={36} h={30}>
        <Image src={require('../../public/amazon.png')} alt={'company-logo'} />
      </Center>
      <Center w={36} h={30}>
        <Image
          src={require('../../public/bookmyshow.png')}
          alt={'company-logo'}
        />
      </Center>
      <Center w={36} h={30}>
        <Image src={require('../../public/amazon.png')} alt={'company-logo'} />
      </Center>
      <Center w={36} h={30}>
        <Image
          src={require('../../public/bookmyshow.png')}
          alt={'company-logo'}
        />
      </Center>
      <Center w={36} h={30}>
        <Image src={require('../../public/amazon.png')} alt={'company-logo'} />
      </Center>
      <Center w={36} h={30}>
        <Image
          src={require('../../public/bookmyshow.png')}
          alt={'company-logo'}
        />
      </Center>
      <Center w={36} h={30}>
        <Image src={require('../../public/amazon.png')} alt={'company-logo'} />
      </Center>
    </Center>
  );
};

export default Company;
