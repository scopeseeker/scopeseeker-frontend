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
import {SessionProvider} from 'next-auth/react';

export function Providers({ children, session }: { children: React.ReactNode, session?: any }) {
  const pathname = usePathname();
  const showNavbar = pathname !== '/login' && pathname !== '/signup';

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <SessionProvider session={session}>

        {showNavbar && <Navbar />}
        <Center>
          <Flex flexDirection={'column'} w={'100%'} minH={'65px'}>
            {children}
          </Flex>
        </Center>
        {showNavbar && <Footer />}
        </SessionProvider>
      </ChakraProvider>
    </>
  );
}
