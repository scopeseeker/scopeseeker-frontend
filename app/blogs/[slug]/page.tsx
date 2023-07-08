import { Metadata } from 'next';
import Blog from './blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'List of blogs',
};

export default function Page() {
  return <Blog />;
}
