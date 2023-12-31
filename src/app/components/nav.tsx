"use client"

import { UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link"

export default function Nav() {
  const { user, isLoaded } = useUser()
  return (
    <header>
      <nav
        className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-r-0 border-b-gray-600"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            Home
          </a>
        </div>
        {/*verifica se está logado*/}
        {isLoaded && user && (
          <div className="flex items-center gap-3">
            <Link href="/dashboard">Dashboard</Link>
            {/* deslogar */}
            <UserButton afterSignOutUrl="/" />
          </div>
        )}
      </nav>
    </header>
  )
}
