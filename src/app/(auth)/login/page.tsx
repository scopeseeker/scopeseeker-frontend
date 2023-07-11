import { Metadata } from 'next';
import Login from './login';

export const metadata: Metadata = {
  title: 'Login | Scope Seeker',
  description: 'Login Page',
};

export default function Page() {
  return <Login />;
}
