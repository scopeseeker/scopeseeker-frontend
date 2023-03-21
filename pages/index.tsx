import Head from 'next/head';
import { Text, useColorMode } from '@chakra-ui/react';
import MyButton from '@/component/MyButton/MyButton';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  // <Button onClick={toggleColorMode}>
  //       Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
  //     </Button>
  return (
    <>
      <Head>
        <title>Scope Seeker | Home</title>
        <meta
          name="description"
          content="Scope Seeker is a cutting-edge web application designed to help job seekers find their dream job with ease."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text>I am Home Page</Text>
      {/* <Text>My Button Component</Text>
    <MyButton a={'brand.100'}/> */}
    </>
  );
}
