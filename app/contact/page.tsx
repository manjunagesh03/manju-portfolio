import { FaEnvelope, FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-28 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">
          Contact
        </h1>

        <p className="mt-4 max-w-2xl text-gray-400">
          Feel free to reach out if you would like to connect, discuss a project,
          or talk about opportunities.
        </p>
        <div className="mt-10 space-y-6">

            {/* Email */}
            <a
                href="mailto:manjunagesh2003@gmail.com"
                className="flex items-center gap-4 text-gray-300 transition hover:text-white"
            >
                <FaEnvelope className="text-2xl text-white" />

                <span>
                    manjunagesh2003@gmail.com
                </span>
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/manju-nagesh-1321431b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 transition hover:text-white"
            >
                <FaLinkedin className="text-2xl text-white" />

                <span>
                    LinkedIn
                </span>
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/manjunagesh03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 transition hover:text-white"
            >
                <FaGithub className="text-2xl text-white" />

                <span>
                    GitHub
                </span>
            </a>

            {/* Medium */}
            <a
                href="https://medium.com/@manjunagesh2003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 transition hover:text-white"
            >
                <FaMedium className="text-2xl text-white" />

                <span>
                    Medium
                    </span>
            </a>

        </div>
      </div>
    </main>
  );
}