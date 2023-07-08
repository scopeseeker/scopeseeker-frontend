import { Metadata } from 'next';
import PrivacyPolicy from './privacy-policy';

export const metadata: Metadata = {
  title: 'Privacy Policy | Scope Seeker',
  description: 'Privacy policy',
};

export default function Pages() {
  return <PrivacyPolicy />;
}
