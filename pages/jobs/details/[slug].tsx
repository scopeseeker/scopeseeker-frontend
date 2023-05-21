import { useRouter } from "next/router"

export default function DynamicPage() {
  const router = useRouter()
  const {
    query: { slug },
  } = router
  return <div>The dynamic route is {slug}</div>
}