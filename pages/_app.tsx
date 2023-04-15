import Footer from '@/component/footer';
import Navbar from '@/component/navbar/Navbar';
import '@/styles/globals.css';
import theme from '@/styles/theme';
import { ChakraProvider, Flex } from '@chakra-ui/react';
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
      <Flex flexDirection={'column'}>
        <Component {...pageProps} />
        {showNavbar && <Footer />}
      </Flex>
    </ChakraProvider>
  );
}
