export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold">Nate Davis</h1>
      <p className="mb-4">
        Hello. I work primarily with TypeScript, Python, and Rust. I'm
        experimenting as much as I can with AI.
      </p>

      <h2 className="mb-1 text-2xl font-semibold">Projects</h2>
      <div className="mb-4 grid gap-4 lg:grid-cols-2">
        {[
          {
            name: "Oderum",
            tech: "Next.js, PostgreSQL, AWS",
            body: "A fragrance website that hosts information about notes, longevity, projection, and more. Users can create lists and submit reviews. The site implements an AI that recommends fragrances based on user input.",
          },
          {
            name: "Jazzio",
            tech: "Next.js, Firebase, GCP",
            body: "A membership, verification, tracking, and auditing platform for the US Embassy Addis Ababa. Leverages QR codes to streamline admissions for members and implements analytics to track the members. Supports members that speak English or Amharic.",
          },
          {
            name: "Shrine",
            tech: "Rust",
            body: "A chess engine using bitboards for state representation, minimax for decision-making, and alpha-beta pruning. Gained experience in algorithmic design and optimization, foundational skills for AI and ML development.",
          },
          {
            name: "Tonsil",
            tech: "JavaScript, WebSockets",
            body: "A UCI compatable chess GUI made for testing engines and players. Uses WebSockets to send moves from server to client and vice versa.",
          },
          {
            name: "Conside",
            tech: "Python, JavaScript",
            body: "An AI moderator that uses open source models to listen and fact check conversations in real time.",
          },
        ].map(({ name, tech, body }) => (
          <div className="rounded border p-4" key={name}>
            <p className="text-xl font-semibold">{name}</p>
            <p className="mb-2 italic">{tech}</p>

            <p>{body}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-1 text-2xl font-semibold">Experience</h2>
      <div className="mb-4 grid gap-4 lg:grid-cols-2">
        {[
          {
            name: "Information Technology Assistant",
            info: "US Embassy Addis Ababa, June 2024",
            body: "Responsibilities included imaging computers, remote machine maintenance, networking, technical support, etc. Built web applications for various offices using HTML and React.",
          },
          {
            name: "Freelance Web Developer",
            info: "Various Locations, April 2022",
            body: "Built websites for non profit organizations using current web technologies. Implemented charitable donation systems and membership management.",
          },
        ].map(({ name, info, body }) => (
          <div className="rounded border p-4" key={name}>
            <p className="text-xl font-semibold">{name}</p>
            <p className="mb-2 italic">{info}</p>

            <p>{body}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-1 text-2xl font-semibold">Skills</h2>
      <div className="flex flex-wrap justify-around gap-6 text-lg">
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
        <p>FastAPI</p>
      </div>
    </>
  )
}
