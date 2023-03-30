import Footer from '@/component/footer';
import Navbar from '@/component/navbar/Navbar';
import theme from '@/styles/theme';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import NewsUpdate from '@/component/sections/NewsUpdate';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
        <Flex flexDirection={'column'} gap={24}>
      <Component {...pageProps} />
        <NewsUpdate />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}
