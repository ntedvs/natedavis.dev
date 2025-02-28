import dayjs from "dayjs"
import { Metadata } from "next"
import { posts } from "../posts.json"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export const generateStaticParams = (): Awaited<Props["params"]>[] => {
  return posts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { title } = posts.find((post) => post.slug === slug)!

  return { title }
}

export default async function Slug({ params }: Props) {
  const { slug } = await params
  const { title, body, date } = posts.find((post) => post.slug === slug)!

  return (
    <>
      <h1>{title}</h1>
      <p>{dayjs(date).format("MMMM D, YYYY")}</p>
      <p>{body}</p>
    </>
  )
}
