import { Layout } from '@/component';
import PageHeroSection from '@/section-components/page-header/PageHeader';
import { VStack } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

function HelpfulResourcesCateegory() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <title>{slug} | Scope Seeker</title>
      </Head>
      <PageHeroSection
        title="Hello"
        alt="resource"
        src="/assets/images/blog.jpg"
        subtitle="how"
      />
      <Layout>
        <VStack></VStack>
      </Layout>
    </>
  );
}

export default HelpfulResourcesCateegory;
