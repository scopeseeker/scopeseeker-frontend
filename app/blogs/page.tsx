import { Metadata } from 'next';
import Blogs from './blogs';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'List of blogs',
};

export default function Page() {
  return <Blogs />;
}
