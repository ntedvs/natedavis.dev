import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1>Nate Davis</h1>

        <div className="flex gap-4">
          <Link href="https://github.com/NaeNate" target="_blank">
            GitHub
          </Link>

          <Link href="https://www.linkedin.com/in/nath-davis" target="_blank">
            LinkedIn
          </Link>
        </div>
      </div>

      <h2>Projects</h2>

      <div className="flex items-center justify-between">
        <h3>Oderum</h3>
        <p className="italic">Next.js, PostgreSQL</p>
      </div>
      <p className="mb-2">
        Oderum is a fragrance website. It allows users to find information like
        notes, longevity, designers, etc. Users can submit reviews and create
        lists. The main feature of the site however is an AI tool where users
        provide what type of fragrance they&apos;re looking for and they get
        back the three best recommendations.
      </p>

      <div className="flex items-center justify-between">
        <h3>Shrine</h3>
        <p className="italic">Rust</p>
      </div>
      <p>
        Shrine is a chess engine. It&apos;s built around the UCI protocol and
        implements techniques such as bitboards for state representation,
        minimax for decision-making, and alpha-beta pruning for optimizations.
      </p>

      <h2 className="mt-8">Skills</h2>
      <div className="mx-12 flex flex-wrap justify-between gap-4">
        <p>JavaScript</p>
        <p>TypeScript</p>
        <p>Python</p>
        <p>Rust</p>
        <p>Java</p>
        <p>WebAssembly</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>PostgreSQL</p>
        <p>SQLite</p>
        <p>MongoDB</p>
        <p>Redis</p>
        <p>AWS</p>
        <p>GCP</p>
        <p>Firebase</p>
        <p>Vercel</p>
        <p>React</p>
        <p>React Native</p>
        <p>Next.js</p>
        <p>PyTorch</p>
        <p>Tailwind</p>
        <p>Git</p>
        <p>Linux</p>
      </div>
    </>
  )
}
