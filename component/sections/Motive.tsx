import { Center, Flex, HStack, Heading, Stack, Text } from '@chakra-ui/react';
import MyIcon from '../icon/MyIcon';
import MyImage from '../image/MyImage';
import MyText from '../text/MyText';

const Motive = () => {
  return (
    <Flex w={'full'} flexDirection={{ base: 'column', md: 'row' }}>
      <Center w={{ base: '100%', md: '50%' }}>
        <MyImage
          src={'/assets/images/bb.png'}
          alt="svg-image"
          width={450}
          height={500}
        />
      </Center>
      <Center w={{ base: '100%', md: '50%' }}>
        <Stack gap={1}>
          <Heading
            fontWeight={600}
            color={'brand.primary'}
            fontSize={{ base: '28px', sm: '42px' }}
            textAlign={{ base: 'center', sm: 'left' }}
          >
            Millions of Jobs{' '}
            <Text color={'brand.semiblack'}>Find the one that suits you</Text>
          </Heading>
          <MyText
            title=" Search all the open positions on the web. Get your own
              personalized salary estimate."
            as={'span'}
            color={'brand.darkgray'}
          />
          <Stack>
            <HStack>
              <MyIcon name={'check'} width={'20'} color={'green'} />
              <MyText
                as={'span'}
                title="Do not wait for opportunities, create them."
              />
            </HStack>
            <HStack>
              <MyIcon name={'check'} width={'20'} color={'green'} />
              <MyText
                as={'span'}
                title="Do not wait for opportunities, create them."
              />
            </HStack>
            <HStack>
              <MyIcon name={'check'} width={'20'} color={'green'} />
              <MyText
                as={'span'}
                title="Do not wait for opportunities, create them."
              />
            </HStack>
          </Stack>
        </Stack>
      </Center>
    </Flex>
  );
};

export default Motive;
