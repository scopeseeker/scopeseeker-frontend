import { Metadata } from 'next';
import PrivacyPolicy from './privacy-policy';
import metaData from '@/constant/metaData';

export const metadata: Metadata = {
  title: metaData.privacyPolicy.title,
  description: metaData.privacyPolicy.description,
};

export default function Pages() {
  return <PrivacyPolicy />;
}
