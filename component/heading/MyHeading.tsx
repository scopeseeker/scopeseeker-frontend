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
      <Heading textAlign={'center'}>{title}</Heading>
      <Text>{subTitle}</Text>
    </VStack>
  );
};

export default MyHeading;
