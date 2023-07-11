import { Metadata } from 'next';
import CompaniesPage from './company';
import metaData from '@/constant/metaData';

export const metadata: Metadata = {
  title: metaData.company.title,
  description: metaData.company.description,
};

export default function Page() {
  return <CompaniesPage />;
}
