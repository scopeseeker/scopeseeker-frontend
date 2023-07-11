import { Metadata } from 'next';
import Dashboard from './dashboard';
import metaData from '@/constant/metaData';

export const metadata: Metadata = {
  title: metaData.dashboard.title,
  description: metaData.dashboard.description,
};

export default function Page() {
  return <Dashboard />;
}
