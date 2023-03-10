import '@/styles/globals.css'
import { ChakraProvider, Text } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
     <Text>I am Navbar</Text> 
    <Component {...pageProps} />
    </ChakraProvider>
  )
}
