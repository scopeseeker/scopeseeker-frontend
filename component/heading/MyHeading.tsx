import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface MyHeadingProps {
  title: string;
  subTitle?: string;
}

const MyHeading: React.FC<MyHeadingProps> = (props) => {
  const { title, subTitle } = props;
  return (
    <VStack>
      <Heading textAlign={'center'} color={'brand.semiblack'}>{title}</Heading>
      <Text color={'brand.darkgrey'}>{subTitle}</Text>
    </VStack>
  );
};

export default MyHeading;
