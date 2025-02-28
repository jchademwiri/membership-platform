import Link from 'next/link'

export default async function HomePage() {
  return (
    <div>
      <p>Home Page</p>
      <Link href="/admin" target='_blank' >Go to Admin</Link>
    </div>
  )
}
