import { ILayoutProps } from '@/inteface/component-interface';
import { Box } from '@chakra-ui/react';

const Layout = ({
  children,
  py = { base: '26px', md: '38px' },
}: ILayoutProps) => {
  return (
    <Box w={'100%'} h={'100%'} px={{ base: '26px', md: '92px', "2xl": '212px'}} py={py}>
      {children}
    </Box>
  );
};

export default Layout;