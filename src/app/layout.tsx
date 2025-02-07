import "@/styles/base.css"
import { Metadata } from "next"
import Link from "next/link"
import { ReactNode } from "react"

export const metadata: Metadata = { title: "Nate Davis" }

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <nav className="flex gap-6 p-4 text-xl">
          <p>Nate Davis</p>
          <Link href="#projects">Projects</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#skills">Skills</Link>

          <div className="ml-auto space-x-6">
            <Link href="https://www.linkedin.com/in/nath-davis" target="_blank">
              LinkedIn
            </Link>

            <Link href="https://github.com/NaeNate" target="_blank">
              GitHub
            </Link>
          </div>
        </nav>

        <main className="mx-auto mt-4 mb-8 w-3/5">{children}</main>
      </body>
    </html>
  )
}
