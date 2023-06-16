import { Layout, MyIcon, MyImage, MyText } from '@/component';
import { Center, Flex, HStack, Heading, Stack, Text } from '@chakra-ui/react';

const MoreIntroSection = () => {
  return (
    <Layout>
      <Flex w={'full'} flexDirection={{ base: 'column', md: 'row' }}>
        <Center w={{ base: '100%', md: '50%' }}>
          <MyImage
            src={'/assets/svgs/teamup.svg'}
            alt="svg"
            width={500}
            height={500}
          />
        </Center>
        <Center w={{ base: '100%', md: '50%' }}>
          <Stack gap={1}>
            <Heading
              fontWeight={600}
              color={'brand.primary'}
              fontSize={{ base: '26px', sm: '36px' }}
              textAlign={{ base: 'center', sm: 'left' }}
            >
              Millions of Jobs
              <Text color={'brand.semiblack'}>Find the one that suits you</Text>
            </Heading>
            <MyText
              title=" Search all the open positions on the web. Get your own
              personalized salary estimate."
              as={'span'}
              color={'brand.darkgray'}
              textAlign={{ base: 'center', md: 'left' }}
            />
            <Stack alignItems={{ base: 'center', md: 'flex-start' }}>
              <HStack>
                <MyIcon name={'check'} width={'20px'} color={'green'} />
                <MyText
                  as={'span'}
                  title="Do not wait for opportunities, create them."
                />
              </HStack>
              <HStack>
                <MyIcon name={'check'} width={'20px'} color={'green'} />
                <MyText
                  as={'span'}
                  title="Do not wait for opportunities, create them."
                />
              </HStack>
              <HStack>
                <MyIcon name={'check'} width={'20px'} color={'green'} />
                <MyText
                  as={'span'}
                  title="Do not wait for opportunities, create them."
                />
              </HStack>
            </Stack>
          </Stack>
        </Center>
      </Flex>
    </Layout>
  );
};

export default MoreIntroSection;
