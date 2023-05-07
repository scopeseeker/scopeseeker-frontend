import { useRouter } from 'next/router';
 
export default function JobDetailsPage() {
  const router = useRouter();
  return <p>Post: {router.query.slug}</p>;
}