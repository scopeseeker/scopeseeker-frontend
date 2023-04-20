import { HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import MyImage from '../image/MyImage';
import MainHeading from '../main-heading/MainHeading';

interface IPageHeroSection {
  title: string;
  subtitle: string;
  align?: string;
  headColor?: string;
  paraColor?: string;
  alt: string;
  w?: number;
  h?: number;
  src: string;
}

const PageHeroSection: React.FC<IPageHeroSection> = (props) => {
  const {
    title,
    subtitle,
    align = 'flex-start',
    headColor = 'brand.white',
    paraColor = 'brand.lightgray',
    alt,
    h = 400,
    w = 400,
    src,
  } = props;
  return (
    <HStack
      w={'full'}
      minH={'50vh'}
      bg={'brand.primary'}
      px={20}
      justifyContent={'space-between'}
      py={6}
    >
      <VStack alignItems={align} maxW={'50%'} gap={2}>
        <MainHeading
          title={title}
          subTitle={subtitle}
          align={align}
          headColor={headColor}
          paraColor={paraColor}
        />
      </VStack>

      <MyImage src={src} alt={alt} width={w} height={h} />
    </HStack>
  );
};

export default PageHeroSection;
