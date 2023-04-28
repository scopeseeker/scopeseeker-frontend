import { IMyBadge } from '@/inteface/component-interface';
import { Badge } from '@chakra-ui/react';

const MyBadge = ({ labelArray, key }: IMyBadge) => {
  const badgeColor = [
    'teal',
    'pink',
    'yellow',
    'purple',
    'green',
    'cyan',
    'orange',
    'blue',
    'red',
  ];
  return (
    <>
      {labelArray.map((item, key) => (
        <Badge
          fontSize={{ base: '10px', md: '8px' }}
          fontWeight={500}
          colorScheme={badgeColor[key]}
          key={key}
          px={'6px'}
          py={'3px'}
          borderRadius={3}
          variant={'subtle'}
        >
          {item}
        </Badge>
      ))}
    </>
  );
};

export default MyBadge;
