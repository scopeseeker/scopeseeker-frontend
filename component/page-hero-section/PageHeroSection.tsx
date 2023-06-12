import { IPageHeroSection } from '@/inteface/component-interface';
import { Center, HStack, VStack } from '@chakra-ui/react';
import MyImage from '../image/MyImage';
import Layout from '../layout/Layout';
import MainHeading from '../main-heading/MainHeading';

const PageHeroSection = (props: IPageHeroSection) => {
  const {
    title,
    subtitle,
    align = 'flex-start',
    headColor = 'brand.white',
    paraColor = 'brand.offwhite',
    alt,
    h = 250,
    w = 250,
    src,
  } = props;
  return (
    <HStack
      w={'full'}
      h={{ base: '20vh', md: '300px' }}
      maxH={'50vh'}
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
          <Center
            display={{ base: 'none', md: 'flex' }}
            maxW={'50%'}
            p={'10px'}
            h={'full'}
          >
            <MyImage src={src} alt={alt} width={w} height={h} />
          </Center>
        </HStack>
      </Layout>
    </HStack>
  );
};

export default PageHeroSection;
