import { Metadata } from 'next';
import Resources from './resources';
import metaData from '@/constant/metaData';

export const metadata: Metadata = {
  title: metaData.resources.title,
  description: metaData.resources.description,
};

export default function Page() {
  return <Resources />;
}
