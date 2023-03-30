import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import MyButton from '../button/MyButton';

const NewsUpdate = () => {
  return (
    <Center w={'full'}>
      <Flex
        w={'65vw'}
        bg={'white'}
        h={28}
        borderRadius={16}
        overflow={'hidden'}
        boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
      >
        <Center w={'50%'} p={10}>
          <Heading as={'span'} fontWeight={'semibold'} fontSize={'xl'}>
            Never Want To Miss Any
            <Text color={'brand.100'} fontWeight={'bold'}>
              Job News
            </Text>
          </Heading>
        </Center>
        <Center w={'50%'}>
          <HStack
            w={72}
            h={10}
            borderRadius={50}
            overflow={'hidden'}
            boxShadow={'0 4px 30px rgba(0, 0, 0, 0.2)'}
            p={1}
          >
            <Input
              type={'email'}
              placeholder={'Enter your email'}
              fontSize={'xs'}
              variant="unstyled"
              px={4}
            />
            {/* <Center bg={'brand.100'}  h={'full'} px={5} borderRadius={'full'}> */}
            <MyButton
              title="Subscribe"
              size="sm"
              borderRadius={50}
              fontSize={'xs'}
              px={8}
              color="white"
            />
            {/* </Center> */}
          </HStack>
        </Center>
      </Flex>
    </Center>
    // <>
    // <Box w={'mid'} h={'mid'} bg={'red.500'}>
    //     <HStack h={'xs'} w={'xs'}>
    //         <Text>"Stay informed with our</Text>
    //         <Text> job news alerts"</Text>

    //         <Box>5
    //             <Input type={'email'}/>
    //         </Box>
    //     </HStack>

    // </Box>
    //     </>
  );
};

export default NewsUpdate;
