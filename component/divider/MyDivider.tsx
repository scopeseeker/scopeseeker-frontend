import { Box } from '@chakra-ui/react';

function MyDivider({...rest}: any) {
  return (
    <Box
      w={'full'}
      borderTop={'1px solid'}
      borderColor={'brand.lightgray'}
      {...rest}
    ></Box>
  );
}

export default MyDivider;
