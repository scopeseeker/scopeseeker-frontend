import { useRouter } from 'next/router';

export default function CompanyDetail() {
  const router = useRouter();
  return <p>Post: {router.query.slug}</p>;
}
