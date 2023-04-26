import { IMyBadge } from '@/inteface/component-interface';
import { Badge } from '@chakra-ui/react';


const MyBadge = ({ color, label, key }: IMyBadge) => {
  return (
    <Badge
      fontSize={{ base: '10px', md: '8px' }}
      fontWeight={500}
      colorScheme={color}
      key={key}
      px={'6px'}
      py={'3px'}
      borderRadius={3}
    >
      {label}
    </Badge>
  );
};

export default MyBadge;
