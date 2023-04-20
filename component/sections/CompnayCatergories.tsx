import { Badge, Center, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import MyButton from '../button/MyButton';
import MyImage from '../image/MyImage';
import MainHeading from '../main-heading/MainHeading';

const CompnayCatergories = () => {
  return (
    <Center flexDirection={'column'} gap={8} w={'full'} minH={'35vw'} px={10}>
      <MainHeading
        title={'Featured Companies'}
        subTitle={'companies hiring now'}
      />
      <Flex
        overflow={'auto'}
        w={'full'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Flex
          w={'full'}
          justifyContent={'center'}
          flexDirection={{ base: 'column', lg: 'row' }}
          gap={14}
          flexShrink={0}
          py={10}
          px={{ sm: 5, lg: 0 }}
        >
          <FeaturedCompanyCard
            logoSrc="/assets/images/company-logo/google.png"
            companytitle="Google"
            position={20}
          />
          <FeaturedCompanyCard
            logoSrc="/assets/images/company-logo/google.png"
            companytitle="Google"
            position={20}
          />
          <FeaturedCompanyCard
            logoSrc="/assets/images/company-logo/google.png"
            companytitle="Google"
            position={20}
          />
          <FeaturedCompanyCard
            logoSrc="/assets/images/company-logo/google.png"
            companytitle="Google"
            position={20}
          />
        </Flex>
        <Flex
          w={'full'}
          justifyContent={'center'}
          flexDirection={{ base: 'column', lg: 'row' }}
          gap={14}
          flexShrink={0}
          py={10}
          px={{ sm: 5, lg: 0 }}
        >
          <FeaturedCompanyCard
            logoSrc="/assets/images/company-logo/google.png"
            companytitle="Google"
            position={20}
          />
          <FeaturedCompanyCard
            logoSrc="/assets/images/company-logo/google.png"
            companytitle="Google"
            position={20}
          />
          <FeaturedCompanyCard
            logoSrc="/assets/images/company-logo/google.png"
            companytitle="Google"
            position={20}
          />
          <FeaturedCompanyCard
            logoSrc="/assets/images/company-logo/google.png"
            companytitle="Google"
            position={20}
          />
        </Flex>
      </Flex>
    </Center>
  );
};

export default CompnayCatergories;

interface IFeaturedCompanyCardProps {
  logoSrc: string;
  companytitle: string;
  position: number;
}

const FeaturedCompanyCard: React.FC<IFeaturedCompanyCardProps> = (props) => {
  const { logoSrc, companytitle, position } = props;
  return (
    <VStack
      minH={'3xs'}
      w={'3xs'}
      bg={'white'}
      boxShadow={' 0 4px 30px rgba(0, 0, 0, 0.1)'}
      borderRadius={10}
      border={'2px solid'}
      borderColor={'brand.lightgray'}
      justifyContent={'center'}
      gap={'2px'}
      py={4}
    >
      <Center>
        <MyImage src={logoSrc} alt="company logo" width={45} height={45} />
      </Center>
      <Heading fontSize={'sm'}>{companytitle}</Heading>

      <Center
        w={'80%'}
        borderRadius={10}
        justifyContent={'center'}
        p={2}
        gap={2}
        flexWrap={'wrap'}
      >
        <Badge colorScheme="purple" fontSize={'2xs'}>
          MNC
        </Badge>
        <Badge colorScheme="pink" fontSize={'2xs'}>
          IT
        </Badge>
        <Badge colorScheme="teal" fontSize={'2xs'}>
          Product Based
        </Badge>
      </Center>

      <Center
        w={'80%'}
        bg={'brand.lightgray'}
        borderRadius={10}
        justifyContent={'center'}
        p={2}
      >
        <Text as={'span'} fontSize={'2xs'} textAlign={'center'}>
          Google LLC is an American multinational technology company that
          focuses on a range of products and services.
        </Text>
      </Center>
      <Badge
        w={'60%'}
        //   colorScheme="red"
        border={'1px solid'}
        borderColor={'brand.primary'}
        borderRadius={6}
        textAlign={'center'}
        py={1}
        color={'brand.primary'}
      >
        {` ${position} position`}
      </Badge>

      <Link href={'#'}>
        <MyButton title="View Jobs" borderRadius={50} fontSize="xs" />
      </Link>
    </VStack>
  );
};
