import { FaHeartPulse } from "react-icons/fa6";
import { TbSeedling } from "react-icons/tb";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-28 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">
          About
        </h1>

        <p className="mt-4 max-w-2xl text-gray-400">
          I'm a BS and MS Computer Science Graduate with a strong interest
          in both the theoretical and practical sides of computing. I enjoy
          understanding the ideas behind how things work just as much as I
          enjoy applying those ideas to build applications and solve real-world
          problems.
        </p>

        <p className="mt-4 max-w-2xl text-gray-400">
          I am especially interested in research and application
          development. I enjoy exploring new topics, asking questions, and
          working through challenging problems until the pieces begin to
          connect. I am also someone who genuinely enjoys organizing what
          I learn. Taking and refining notes helps me connect concepts, revisit
          ideas, and develop a deeper understanding of the subjects I
          study.
        </p>

        <p className="mt-4 max-w-2xl text-gray-400">
          My interest in problem-solving extends beyond computer science. In my
          free time, I enjoy solving puzzles, traveling, and reading. I love
          the process of taking something complex, finding patterns, and
          gradually putting the pieces together—whether it is a puzzle, a
          technical problem, or a new concept that I am trying to understand.
          Traveling gives me the opportunity to experience different places,
          cultures, histories, and perspectives, while reading offers another
          way to explore new ideas and experiences. My favorite book currently
          is The Alchemist by Paulo Coelho, whose themes of exploration,
          discovery, and pursuing one's path resonate with my own
          curiosity.
        </p>

        <p className="mt-4 max-w-2xl text-gray-400">
          I hope to keep learning, researching, and building!
        </p>

        {/* Interests */}
        <div className="mt-16">
          <h2 className="text-center text-3xl font-semibold text-white">
            Interests
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* AI / ML in Healthcare */}
            <div className="rounded-xl border border-white/10 p-8 text-center">
              <FaHeartPulse className="mx-auto text-3xl text-white" />

              <h3 className="mt-4 text-xl font-semibold text-white">
                AI / ML in Sciences & Healthcare
              </h3>

              <p className="mt-4 text-gray-400">
                I'm interested in how artificial intelligence and machine
                learning can support healthcare professionals and improve the
                way healthcare is delivered. I am particularly interested
                in tools that assist rather than replace clinical expertise.
              </p>

              <p className="mt-3 text-gray-400">
                Areas that interest me include biologics discovery, earlier disease detection,
                medical data analysis, clinical NLP and large language models,
                medical imaging, and intelligent tools that can reduce
                repetitive administrative work.
              </p>
            </div>

            {/* Full-Stack Development */}
            <div className="rounded-xl border border-white/10 p-8 text-center">
              <TbSeedling className="mx-auto text-3xl text-white" />

              <h3 className="mt-4 text-xl font-semibold text-white">
                Full-Stack Development for Social Impact
              </h3>

              <p className="mt-4 text-gray-400">
                I enjoy developing full-stack applications that address
                meaningful real-world problems. I am particularly
                interested in using software to support causes such as
                sustainability, waste management, and other challenges that
                affect communities and the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}