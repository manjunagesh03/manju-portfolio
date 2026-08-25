export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-28 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">
          Resume
        </h1>

        <p className="mt-4 max-w-2xl text-gray-400">
          A summary of my education, experience, projects, and technical
          background.
        </p>
        <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
        >
        View Resume
        </a>
        <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
            <iframe
                src="/resume/resume.pdf"
                title="Resume"
                className="h-[800px] w-full"
            />
        </div>
      </div>
    </main>
  );
}