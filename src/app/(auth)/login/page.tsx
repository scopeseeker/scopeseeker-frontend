import metaData from '@/constant/metaData';
import { Metadata } from 'next';
import Login from './login';

export const metadata: Metadata = {
  title: metaData.login.title,
  description: metaData.login.description,
};

export default function Page() {
  return <Login />;
}
