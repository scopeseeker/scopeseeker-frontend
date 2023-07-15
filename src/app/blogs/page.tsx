import { Metadata } from 'next';
import Blogs from './blogs';
import metaData from '@/constant/metaData';

export const metadata: Metadata = {
  title: metaData.blogs.title,
  description: metaData.blogs.description,
};

export default function Page() {
  return <Blogs />;
}
