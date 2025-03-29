import "@/styles/base.css"
import { Metadata } from "next"
import Link from "next/link"
import { ReactNode } from "react"

export const metadata: Metadata = { title: "Nate Davis" }

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex justify-between p-4 text-2xl">
          <Link href="/">Nate Davis</Link>

          <div className="space-x-4">
            <Link href="https://www.linkedin.com/in/ntedvs" target="_blank">
              LinkedIn
            </Link>

            <Link href="https://github.com/ntedvs" target="_blank">
              GitHub
            </Link>
          </div>
        </nav>

        <main className="mx-auto mb-8 w-4/5 lg:w-3/5">{children}</main>
      </body>
    </html>
  )
}
