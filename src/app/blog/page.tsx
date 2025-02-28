import dayjs from "dayjs"
import { Metadata } from "next"
import Link from "next/link"
import { posts } from "./posts.json"

export const metadata: Metadata = { title: "Blog" }

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>

      <div className="space-y-2">
        {posts.map(({ slug, title, body, date }) => {
          return (
            <div className="border-primary rounded border-2 p-2" key={slug}>
              <Link href={"/blog/" + slug} className="text-2xl font-semibold">
                {title}
              </Link>

              <p>{dayjs(date).format("MMMM D, YYYY")}</p>
              <p>{body}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
