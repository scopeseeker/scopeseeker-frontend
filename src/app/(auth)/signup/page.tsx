import { Metadata } from 'next';
import Signup from './signup';
import metaData from '@/constant/metaData';

export const metadata: Metadata = {
  title: metaData.signup.title,
  description: metaData.signup.description,
};

export default function Page() {
  return <Signup />;
}
