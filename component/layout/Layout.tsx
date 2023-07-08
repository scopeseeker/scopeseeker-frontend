import { ILayoutProps } from '@/inteface/component-interface';
import { Box } from '@chakra-ui/react';

const Layout = ({
  children,
  py = { base: '26px', md: '38px' },
  w = '100%',
  ...rest
}: ILayoutProps) => {
  return (
    <Box
      w={w}
      h={'100%'}
      px={{ base: '26px', md: '28px', lg: '92px', '2xl': '212px' }}
      py={py}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Layout;
