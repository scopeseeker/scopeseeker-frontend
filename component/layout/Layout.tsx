import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  py?: { base: string; md: string };
}

const Layout = ({ children, py = { base: '26px', md: '38px' } }: IProps) => {
  return (
    <Box w={'100%'} h={'100%'} px={{ base: '26px', md: '48px' }} py={py}>
      {children}
    </Box>
  );
};

export default Layout;
