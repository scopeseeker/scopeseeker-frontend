import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface MainHeadingProps {
  title: string;
  subTitle?: string;
  align?: string;
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
      >
        {title}
      </Heading>
      <Text as={'span'} color={paraColor} fontSize={{ base: '12px', md: '14px' }}>
        {subTitle}
      </Text>
    </VStack>
  );
};

export default MainHeading;
