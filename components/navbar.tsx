import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <p className="text-lg font-semibold text-white">
          Portfolio
        </p>

        <div className="flex gap-6 text-sm text-gray-300">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <Link href="/about" className="transition hover:text-white">
            About
          </Link>

          <Link href="/projects" className="transition hover:text-white">
            Projects
          </Link>

          <Link href="/skills" className="transition hover:text-white">
            Skills
          </Link>

          <Link href="/resume" className="transition hover:text-white">
            Resume
          </Link>

          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}