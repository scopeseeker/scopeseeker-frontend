import { Metadata } from 'next';
import CompaniesPage from './company';

export const metadata: Metadata = {
  title: 'Companies',
  description: 'List of companies',
};

export default function Page() {
  return <CompaniesPage />;
}
