import { Center, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import Icon from '../icon/Icon';
import MyImage from '../image/MyImage';

const Motive = () => {
  return (
    <Center w={{ base: '90vw', md: '90vw', lg: '100vw', xl: '100%' }} px={16}>
      <Flex minH={'60vh'} w={'full'} px={14} gap={36}>
        <MyImage
          src={'/assets/images/bb.png'}
          alt="svg-image"
          width={450}
          height={500}
        />

        <Stack w={'50%'} gap={5} py={14}>
          <Text
            as={'span'}
            fontSize={{ base: '24px', md: '40px', lg: '3xl' }}
            color={'brand.primary'}
          >
            Millions of Jobs.
            <Text color={'black'}>Find the one that suits you</Text>
          </Text>
          <Stack w={'55%'}>
            <Text
              as={'p'}
              fontSize={'2xs'}
              color={'gray.400'}
              fontWeight={500}
              textAlign={'left'}
            >
              Search all the open positions on the web. Get your own
              personalized salary estimate.
            </Text>
          </Stack>
          <Stack>
            <HStack>
              <Icon name={'check'} width={'20'} color={'green'} />
              <Text fontSize={'xs'} fontWeight={'normal'}>
                Do not wait for opportunities, create them.
              </Text>
            </HStack>
            <HStack>
              <Icon name={'check'} width={'20'} color={'green'} />
              <Text fontSize={'xs'} fontWeight={'normal'}>
                Get salary according to your qualifications
              </Text>
            </HStack>
            <HStack>
              <Icon name={'check'} width={'20'} color={'green'} />
              <Text fontSize={'xs'} fontWeight={'normal'}>
                Make money through your skills
              </Text>
            </HStack>
          </Stack>
        </Stack>
      </Flex>
    </Center>
  );
};

export default Motive;
