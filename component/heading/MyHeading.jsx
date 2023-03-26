import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const MyHeading = (props) => {
  const { title, subTitle } = props;
  return (
    <VStack>
      <Heading textAlign={'center'}>{title}</Heading>
      <Text>{subTitle}</Text>
    </VStack>
  );
};

export default MyHeading;
