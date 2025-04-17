import "@/styles/base.css"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = { title: "Nate Davis" }

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={
          "mx-auto max-w-[80rem] bg-background p-6 text-foreground " +
          inter.className
        }
      >
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Nate Davis
          </Link>

          <div className="space-x-8">
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  )
}
