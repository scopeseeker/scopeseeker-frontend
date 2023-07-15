import { Metadata } from 'next';
import Settings from './settings';
import metaData from '@/constant/metaData';

export const metadata: Metadata = {
  title: metaData.settings.title,
  description: metaData.settings.description,
};

export default function Page() {
  return <Settings />;
}
