import metaData from '@/constant/metaData';
import TermsOfUse from './terms-of-use';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: metaData.jobs.title,
  description: metaData.jobs.description,
};
export default function Page() {
  return <TermsOfUse />;
}
