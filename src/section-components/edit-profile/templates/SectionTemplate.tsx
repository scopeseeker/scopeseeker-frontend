import { VStack } from '@chakra-ui/react';
import React from 'react';

interface ISectionTempalate {
  children?: React.ReactNode;
  id?: string;
}

const SectionTempalate = ({ children, id }: ISectionTempalate) => {
  return (
    <VStack
      alignItems={'start'}
      p={'18px'}
      bg={'brand.white'}
      border={'1px solid'}
      borderColor={'brand.lightgray'}
      w={'full'}
      borderRadius={'8px'}
      flexShrink={0}
      id={id}
    >
      {children}
    </VStack>
  );
};

export default SectionTempalate;
