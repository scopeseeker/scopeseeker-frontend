import metaData from '@/constant/metaData';
import HomePage from './home-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: metaData.home.title,
  description: metaData.home.description,
};
export default function Page() {
  return <HomePage />;
}
