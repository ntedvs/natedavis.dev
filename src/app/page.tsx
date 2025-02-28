import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <div className="flex gap-4 text-center text-2xl">
        <Link
          href="/blog"
          className="border-primary flex-1 rounded border-2 p-4"
        >
          Blog
        </Link>

        <Link
          href="/portfolio"
          className="border-primary flex-1 rounded border-2 p-4"
        >
          Portfolio
        </Link>
      </div>
    </>
  )
}
