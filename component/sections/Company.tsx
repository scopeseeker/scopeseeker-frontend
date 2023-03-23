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
      <HStack
      my={12}
        width={'90%'}
        justifyContent={'space-between'}
        borderRadius={10}
        bg={'rgba(255, 255, 255, 0)'}
        boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
        border={'1px solid rgba(255, 255, 255, 0.3);'}
        h={40}
        // bg={'whiteAlpha.50'}
        mx={'auto'}
        px={16}
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
  );
};

export default Company;
