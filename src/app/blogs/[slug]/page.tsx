import { Metadata } from 'next';
import ArticlePage from './ArticlePage';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'List of blogs',
};

export default function Page() {
  return <ArticlePage />;
}
