import metaData from '@/constant/metaData';
import { Metadata } from 'next';
import AboutUs from './about-us';

export const metadata: Metadata = {
  title: metaData.aboutUs.title,
  description: metaData.aboutUs.description,
};

export default function Page() {
  return <AboutUs />;
}
