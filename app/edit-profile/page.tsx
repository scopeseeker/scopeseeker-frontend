import { Metadata } from 'next';
import EditProfile from './edit-profile';
import metaData from '@/constant/metaData';

export const metadata: Metadata = {
  title: metaData.editProfile.title,
  description: metaData.editProfile.description,
};

export default function Page() {
  return <EditProfile />;
}
