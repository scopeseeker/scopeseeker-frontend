import Footer from '@/component/footer';
import Navbar from '@/component/navbar/Navbar';
import '@/styles/globals.css';
import theme from '@/styles/theme';
import { Center, ChakraProvider, Flex } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showNavbar =
    router.asPath !== '/login' &&
    router.asPath !== '/signup' &&
    router.asPath !== '/info-steps';

  return (
    <ChakraProvider theme={theme}>
      {showNavbar && <Navbar />}
      <Center>
        <Flex flexDirection={'column'} w={{ base: '100%', '2xl': '85%' }}>
          <Component {...pageProps} />
        </Flex>
      </Center>
      {showNavbar && <Footer />}
    </ChakraProvider>
  );
}
