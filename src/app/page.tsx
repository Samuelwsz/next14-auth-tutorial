import { auth } from "@clerk/nextjs"
import Link from "next/link"
import { redirect } from "next/navigation"

export default function Home() {
  const { userId } = auth()

  if (userId) {
    redirect("/dashboard")
  }
  return (
    <main className="">
      <h1>Next.js Auth Tutorial</h1>
      <Link href="/dashboard">Login</Link>
    </main>
  )
}
