import metaData from '@/constant/metaData';
import ContactUs from './contact-us';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: metaData.contactUs.title,
  description: metaData.contactUs.description,
};

export default function Page() {
  return <ContactUs />;
}
