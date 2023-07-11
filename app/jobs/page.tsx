import { Metadata } from 'next';
import Jobs from './jobs';
import metaData from '@/constant/metaData';

export const metadata: Metadata = {
  title: metaData.jobs.title,
  description: metaData.jobs.description,
};

export default function Page() {
  return <Jobs />;
}
