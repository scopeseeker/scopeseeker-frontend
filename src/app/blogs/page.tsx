import { Metadata } from 'next';
import metaData from '@/constant/metaData';
import Blogs from './blogs';

export const metadata: Metadata = {
  title: metaData.blogs.title,
  description: metaData.blogs.description,
};

export default function Page() {
  return <Blogs />;
}
