'use client';

import { Footer, Navbar } from '@/section-components';
import theme from '@/styles/theme';
import {
  Center,
  ChakraProvider,
  ColorModeScript,
  Flex,
} from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNavbar = pathname !== '/login' && pathname !== '/signup';

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        {showNavbar && <Navbar />}
        <Center>
          <Flex flexDirection={'column'} w={'100%'}>
            {children}
          </Flex>
        </Center>
        {showNavbar && <Footer />}
      </ChakraProvider>
    </>
  );
}
