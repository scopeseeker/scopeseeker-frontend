import { Metadata } from 'next';
import RequestPage from './request-company';

export const metadata: Metadata = {
  title: 'Request Company | Scope Seeker',
  description: 'Here you can send a request for company',
};

export default function Page() {
  return <RequestPage />;
}
