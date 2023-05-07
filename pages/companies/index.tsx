import { Layout, MyInput } from '@/component';
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
