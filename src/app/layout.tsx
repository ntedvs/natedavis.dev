import "@/styles/base.css"
import { Metadata } from "next"
import Link from "next/link"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: { default: "Nate Davis", template: "%s | Nate Davis" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <nav className="flex gap-4 p-4 text-xl">
          <Link href="/">Nate Davis</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/portfolio">Portfolio</Link>

          <div className="ml-auto flex gap-4">
            <Link href="https://www.linkedin.com/in/nate-d" target="_blank">
              LinkedIn
            </Link>

            <Link href="https://github.com/NaeNate" target="_blank">
              GitHub
            </Link>
          </div>
        </nav>

        <main className="mx-auto w-4/5 lg:w-3/5">{children}</main>
      </body>
    </html>
  )
}
