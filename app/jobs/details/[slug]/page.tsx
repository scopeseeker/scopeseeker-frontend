import { Metadata } from 'next';
import MoreJobs from './MoreJobs';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: params.slug,
    description: 'Generated by create next app',
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <MoreJobs />
    </>
  );
}
