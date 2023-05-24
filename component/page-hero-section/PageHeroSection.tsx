import { IMainHeadingProps } from '@/inteface/component-interface';
import { Heading, Text, VStack } from '@chakra-ui/react';

const MainHeading = (props: IMainHeadingProps) => {
  const {
    title,
    subTitle,
    align = 'center',
    headColor = 'brand.black',
    paraColor = 'brand.darkgray',
    fontsize = { base: '26px', md: '28px' },
    ...rest
  } = props;
  return (
    <VStack alignItems={align} w={'full'} {...rest}>
      <Heading
        color={headColor}
        fontSize={fontsize}
        fontWeight={'600'}
        textAlign={align}
      >
        {title}
      </Heading>
      <Text
        as={'span'}
        textAlign={align}
        color={paraColor}
        fontSize={{ base: '14px', md: '14px' }}
      >
        {subTitle}
      </Text>
    </VStack>
  );
};

export default MainHeading;