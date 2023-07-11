import { Metadata } from 'next';
import Signup from './signup';

export const metadata: Metadata = {
  title: 'Signup | Scope Seeker',
  description: 'Sign up',
};

export default function Page() {
  return <Signup />;
}
