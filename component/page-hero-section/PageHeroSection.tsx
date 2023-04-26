import { Center, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import MyImage from '../image/MyImage';
import Layout from '../layout/Layout';
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
    h = 250,
    w = 250,
    src,
  } = props;
  return (
    <HStack
      w={'full'}
      h={{base: '20vh', md: '50vh'}}
      bg={'brand.primary'}
      justifyContent={'space-between'}
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Layout>
        <HStack h={'full'} justifyContent={'space-between'}>
        <VStack alignItems={align} maxW={{ base: '100%', md: '50%' }} gap={2}>
          <MainHeading
            title={title}
            subTitle={subtitle}
            align={align}
            headColor={headColor}
            paraColor={paraColor}
          />
        </VStack>
        <Center maxW={{ base: '100%', md: '50%' }} p={'10px'} h={'full'}>
          <MyImage src={src} alt={alt} width={w} height={h} />
        </Center>
        </HStack>
      </Layout>
    </HStack>
  );
};

export default PageHeroSection;
