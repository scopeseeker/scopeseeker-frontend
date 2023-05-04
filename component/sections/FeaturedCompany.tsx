import { Card, Center, Flex } from '@chakra-ui/react';
import { Layout } from '../layout';
import MainHeading from '../main-heading/MainHeading';
import { MyText } from '../text';

const CompnayCatergories = () => {
  return (
    <Layout>
      <Center flexDirection={'column'} gap={8} w={'full'} minH={'35vw'}>
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
            <Card bg={'lightgray'} w={'100%'} h={'20vh'}>
              <MyText title="Featured Company Card..." as={'span'} />
            </Card>
          </Flex>
        </Flex>
      </Center>
    </Layout>
  );
};

export default CompnayCatergories;
