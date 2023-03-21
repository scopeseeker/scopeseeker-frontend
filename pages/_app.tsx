import Footer from '@/component/Footer';
import Navbar from '@/component/Navbar/Navbar';
import theme from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
