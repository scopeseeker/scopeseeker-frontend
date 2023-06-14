import { VStack } from '@chakra-ui/react';

interface ISectionTempalate {
  children?: React.ReactNode;
}

const SectionTempalate = ({ children }: ISectionTempalate) => {
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
    >
      {children}
    </VStack>
  );
};

export default SectionTempalate;
