import { MyButton, MyDivider, MyText } from '@/component';
import { Center, VStack } from '@chakra-ui/react';

import React from 'react';

const LeftEditProfilePart = () => {
  return (
    <VStack w={'212px'} gap={'18px'} display={{ base: 'none', lg: 'initial' }}>
      <VStack
        border={'1px solid'}
        borderColor={'brand.lightgray'}
        borderRadius={'8px'}
        bg={'brand.aliceblue'}
        p="12px"
      >
        <LeftScrollDivText title={'Basic Information'} />
        <LeftScrollDivText title={'Resume'} />
        <LeftScrollDivText title={'Skills'} />
        <LeftScrollDivText title={'Work Experience'} />
        <LeftScrollDivText title={'Education'} />
        <LeftScrollDivText title={'Social Links'} />
      </VStack>
      <MyButton title="Skip For Now" w={'full'} />
    </VStack>
  );
};

export default LeftEditProfilePart;

interface ILeftScrollDivText {
  title: string;
}
const LeftScrollDivText = ({ title }: ILeftScrollDivText) => {
  return (
    <>
      <Center
        cursor={'pointer'}
        w={'full'}
        py={'6px'}
        borderRadius={'8px'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        px={'16px'}
        transition={'all ease-in-out .2s'}
      >
        <MyText title={title} as="span" _hover={{ color: 'brand.primary' }} />
      </Center>
      <MyDivider />
    </>
  );
};
