import { Metadata } from 'next';
import MyProfile from './my-profile';
import metaData from '@/constant/metaData';

export const metadata: Metadata = {
  title: metaData.myProfile.title,
  description: metaData.myProfile.description,
};

export default function Page() {
  return <MyProfile />;
}
