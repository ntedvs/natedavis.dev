import Link from "next/link"

export default function Home() {
  return (
    <div className="m-20">
      <h1 className="text-5xl font-bold">Nate Davis</h1>
      <p className="text-xl">I&apos;m Nate. This is some background.</p>

      <h2 className="mb-2 mt-8 text-4xl font-semibold">Projects</h2>
      <div className="space-y-2">
        <Project title="Malosi" body="Malosi is an event scheduling website." />
        <Project title="Oderum" body="About malosi" />
        <Project title="Mbongo" body="About malosi" />
        <Project title="Ghoul" body="About malosi" />
        <Project title="Style Sorter" body="About malosi" />
      </div>

      <h2 className="mb-2 mt-8 text-4xl font-semibold">Proficiencies</h2>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-2xl">
        <p>JavaScript</p>
        <p>TypeScript</p>
        <p>Rust</p>
        <p>Python</p>
        <p>Netlify</p>
        <p>Vercel</p>
        <p>GCP</p>
        <p>AWS</p>
        <p>PostgreSQL</p>
        <p>SQLite</p>
        <p>MongoDB</p>
      </div>

      <h2 className="mb-2 mt-8 text-4xl font-semibold">Connect</h2>
      <div className="flex justify-center gap-4 text-2xl">
        <Link href="https://github.com/naenate" target="_blank">
          GitHub
        </Link>

        <Link href="https://www.linkedin.com/in/nath-davis" target="_blank">
          LinkedIn
        </Link>
      </div>
    </div>
  )
}

const Project = ({ title, body }: { title: string; body: string }) => {
  return (
    <div>
      <Link
        href={`https://github.com/naenate/${title.toLowerCase().replace(/ /g, "-")}`}
        target="_blank"
        className="text-3xl"
      >
        {title}
      </Link>

      <p className="text-xl">{body}</p>
    </div>
  )
}
