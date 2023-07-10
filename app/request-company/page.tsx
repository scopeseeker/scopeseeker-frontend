import { Metadata } from 'next';
import RequestPage from './request-company';
import metaData from '@/constant/metaData';

export const metadata: Metadata = {
  title: metaData.requestCompany.title,
  description: metaData.requestCompany.description,
};

export default function Page() {
  return <RequestPage />;
}
