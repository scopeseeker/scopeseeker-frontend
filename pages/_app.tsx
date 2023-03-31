import Footer from '@/component/footer';
import Navbar from '@/component/navbar/Navbar';
import theme from '@/styles/theme';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import NewsUpdate from '@/component/sections/NewsUpdate';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showNavbar =
    router.asPath !== '/login' &&
    router.asPath !== '/signup' &&
    router.asPath !== '/steps';

  return (
    <ChakraProvider theme={theme}>
      {showNavbar && <Navbar />}
      <Flex flexDirection={'column'} gap={24}>
        <Component {...pageProps} />
        {showNavbar && <NewsUpdate />}
        {showNavbar && <Footer />}
      </Flex>
    </ChakraProvider>
  );
}
