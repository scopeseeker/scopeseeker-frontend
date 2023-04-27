import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface MainHeadingProps {
  title: string;
  subTitle?: string;
  align?: any;
  headColor?: string;
  paraColor?: string;
}

const MainHeading: React.FC<MainHeadingProps> = (props) => {
  const {
    title,
    subTitle,
    align = 'center',
    headColor = 'brand.black',
    paraColor = 'brand.darkgray',
  } = props;
  return (
    <VStack alignItems={align} w={'full'}>
      <Heading
        color={headColor}
        fontSize={{ base: '20px', md: '28px' }}
        fontWeight={'600'}
        textAlign={'center'}
      >
        {title}
      </Heading>
      <Text
        as={'span'}
        textAlign={align}
        color={paraColor}
        fontSize={{ base: '12px', md: '14px' }}
      >
        {subTitle}
      </Text>
    </VStack>
  );
};

export default MainHeading;
