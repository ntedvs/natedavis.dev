export default function Portfolio() {
  return (
    <>
      <h1>Nate Davis</h1>
      <p>
        Hello. I work primarily with TypeScript, Python, and Rust. I&apos;m
        experimenting as much as I can with AI.
      </p>

      <h2 id="projects" className="mt-4 mb-2 text-2xl font-semibold">
        Projects
      </h2>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded border p-4">
          <h3 className="text-lg font-medium">Oderum</h3>
          <p className="mb-2 italic">Next.js, PostgreSQL, AWS</p>
          <p>
            A fragrance website that hosts information about notes, longevity,
            projection, and more. Users can create lists and submit reviews. The
            site implements an AI that recommends fragrances based on user
            input.
          </p>
        </div>

        <div className="rounded border p-4">
          <h3 className="text-lg font-medium">Jazzio</h3>
          <p className="mb-2 italic">Next.js, Firebase, GCP</p>
          <p>
            A membership, verification, tracking, and auditing platform for the
            US Embassy Addis Ababa. Leverages QR codes to streamline admissions
            for members and implements analytics to track the members. Supports
            members that speak English or Amharic.
          </p>
        </div>

        <div className="rounded border p-4">
          <h3 className="text-lg font-medium">Shrine</h3>
          <p className="mb-2 italic">Rust</p>
          <p>
            A chess engine using bitboards for state representation, minimax for
            decision-making, and alpha-beta pruning. Gained experience in
            algorithmic design and optimization, foundational skills for AI and
            ML development.
          </p>
        </div>

        <div className="rounded border p-4">
          <h3 className="text-lg font-medium">Tonsil</h3>
          <p className="mb-2 italic">JavaScript, WebSockets</p>
          <p>
            A UCI compatable chess GUI made for testing engines and players.
            Uses WebSockets to send moves from server to client and vice versa.
          </p>
        </div>
      </div>

      <h2 id="experience" className="mt-4 mb-2 text-2xl font-semibold">
        Experience
      </h2>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded border p-4">
          <h3 className="text-lg font-medium">
            Information Technology Assistant
          </h3>
          <p className="mb-2 italic">US Embassy Addis Ababa, June 2024</p>
          <p>
            Responsibilities included imaging computers, remote machine
            maintenance, networking, technical support, etc. Built web
            applications for various offices using HTML and React.
          </p>
        </div>

        <div className="rounded border p-4">
          <h3 className="text-lg font-medium">Freelance Web Developer</h3>
          <p className="mb-2 italic">Various Locations, April 2022</p>
          <p>
            Built websites for non profit organizations using current web
            technologies. Implemented charitable donation systems and membership
            management.
          </p>
        </div>
      </div>

      <h2 id="skills" className="mt-4 mb-2 text-2xl font-semibold">
        Skills
      </h2>
      <div className="flex flex-wrap justify-around gap-x-6 gap-y-2 text-lg">
        <p>JavaScript</p>
        <p>TypeScript</p>
        <p>Python</p>
        <p>Rust</p>
        <p>Java</p>
        <p>WebAssembly</p>
        <p>AWS</p>
        <p>GCP</p>
        <p>Vercel</p>
        <p>Firebase</p>
        <p>React.js</p>
        <p>Next.js</p>
        <p>PyTorch</p>
        <p>Stripe</p>
        <p>PostgreSQL</p>
        <p>SQLite</p>
        <p>MongoDB</p>
        <p>Redis</p>
        <p>Pinecone</p>
        <p>Tailwind</p>
        <p>WebSockets</p>
        <p>Jest</p>
        <p>Playwright</p>
        <p>Unity</p>
        <p>Unreal</p>
        <p>Git</p>
        <p>Linux</p>
      </div>
    </>
  )
}
