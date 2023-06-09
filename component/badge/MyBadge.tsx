import { IMyBadge } from '@/inteface/component-interface';
import { Badge, Center, Text } from '@chakra-ui/react';
import { MyText } from '../text';

const MyBadge = ({ labelArray, key }: IMyBadge) => {
  // const badgeColor = [
  //   'teal',
  //   'pink',
  //   'yellow',
  //   'purple',
  //   'green',
  //   'cyan',
  //   'orange',
  //   'blue',
  //   'red',
  // ];
  return (
    <>
      {labelArray.map((item, key) => (
        <Center
          border={'1px solid'}
          borderColor={'brand.darkgray'}
          px={'10px'}
          py={'3px'}
          borderRadius={'4px'}
          key={key}
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