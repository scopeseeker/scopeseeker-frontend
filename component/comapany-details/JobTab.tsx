import { Center, HStack, VStack } from '@chakra-ui/react';
import { MyIcon } from '../icon';
import { MyInput } from '../inputs';
import { MyText } from '../text';

const JobTab = () => {
  return (
    <VStack w={'full'} px={'100px'} marginTop={'20px'}>
      <HStack
        w={'full'}
        py={'20px'}
        px={'20px'}
        borderRadius={'10px'}
        boxShadow="0px 10px 30px rgb(0,0,0,0.1)"
      >
        <Center
          w={'100px'}
          h={'60px'}
          flexDir={'column'}
          borderRadius={'10px'}
          bg={'brand.aliceblue'}
        >
          <MyText as="small" title="72 Jobs" />
          <MyText as="small" title="(open)" />
        </Center>

        <Center
          w={'100px'}
          h={'60px'}
          flexDir={'column'}
          borderRadius={'10px'}
          bg={'brand.aliceblue'}
        >
          <MyText as="small" title="30 Match" />
          <MyText as="small" title="your profile" />
        </Center>
      </HStack>

      {/* Search part */}
      <HStack w={'full'} pt={'30px'}>
        <MyText as="title" title="Capgemini Jobs" />
        <HStack w={'full'}>
          <MyInput
            type="text"
            placeholder="search jobs here.."
            leftElement={<MyIcon name="search" />}
          />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default JobTab;
