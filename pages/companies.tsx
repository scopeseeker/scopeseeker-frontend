import { Layout, MyInput, MyText } from '@/component';
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import Head from 'next/head';

export default function Companies() {
  return (
    <>
    <Head>
      <title>Company | Scope Seeker</title>
    </Head>
    <Layout>
      <MyInput type="text" labelTitle="Full Name" />

    </Layout>
    </>

  );
}
