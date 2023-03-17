import Head from 'next/head';
import {Text, useColorMode } from '@chakra-ui/react';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  // <Button onClick={toggleColorMode}>
  //       Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
  //     </Button>
  return (
    <>
      <Head>
        <title>Scope Seeker | Home</title>
      </Head>
    <Text>I am Home Page</Text>
    </>
  );
}
