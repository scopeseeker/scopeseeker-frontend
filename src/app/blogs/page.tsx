import { Metadata } from 'next';
import Blogs from './blogs';
import metaData from '@/constant/metaData';

export const metadata: Metadata = {
  title: metaData.blog.title,
  description: metaData.blog.description,
};

export default function Page() {
  return <Blogs />;
}
