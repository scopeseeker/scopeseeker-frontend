import { IMyBadge } from '@/inteface/component-interface';
import { Center, Text } from '@chakra-ui/react';

const MyBadge = ({ labelArray }: IMyBadge) => {
  return (
    <>
      {labelArray.map((item, index) => (
        <Center
          border={'1px solid'}
          borderColor={'brand.darkgray'}
          px={'10px'}
          py={'3px'}
          borderRadius={'20px'}
          key={index}
        >
          <Text
            fontSize={{ base: '12px', md: '10px' }}
            color={'brand.darkgray'}
          >
            {item}
          </Text>
        </Center>
      ))}
    </>
  );
};

export default MyBadge;
