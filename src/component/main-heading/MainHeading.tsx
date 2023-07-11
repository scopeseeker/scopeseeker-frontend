import { IMainHeadingProps } from '@/inteface/component-interface';
import { Heading, VStack } from '@chakra-ui/react';
import MyText from '../text/MyText';

const MainHeading = (props: IMainHeadingProps) => {
  const {
    title,
    subTitle,
    align = 'center',
    headColor = 'brand.black',
    paraColor = 'brand.semiblack',
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
      {subTitle && (
        <MyText as="p" title={subTitle} textAlign={align} color={paraColor} />
      )}
    </VStack>
  );
};

export default MainHeading;
