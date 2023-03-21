import { Center, Heading, HStack, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

{
  /* "Job Spotlights"
          "Work Wonders"
          "Opportunity Knocks"
          "Open Doors"*/
}

const Company = () => {
  return (
    <VStack w={'full'} my={20} gap={5}>
      <Heading fontSize={'xl'} fontWeight={'semibold'}>
        Discover Opportunities with Reputable Companies
      </Heading>
      <HStack
        width={'95%'}
        justifyContent={'space-between'}
        borderRadius={10}
        h={40}
        // bg={'whiteAlpha.50'}
        mx={'auto'}
        px={10}
      >
        <Center w={12} h={12}>
          <Image src={require('../../public/google.png')} alt={'amazon'} />
        </Center>
        <Center w={12} h={12}>
          <Image
            src={require('../../public/atlassian.png')}
            alt={'atlassian'}
          />
        </Center>
        <Center w={12} h={12}>
          <Image
            src={require('../../public/microsoft.png')}
            alt={'microsoft'}
          />
        </Center>
        <Center w={12} h={12}>
          <Image src={require('../../public/airbnb.png')} alt={'airbnb'} />
        </Center>

        <Center w={12} h={12}>
          <Image src={require('../../public/tcs.png')} alt={'tcs'} />
        </Center>
      </HStack>
    </VStack>
  );
};

export default Company;
