import DynamicWords from "@/components/dynamicwords";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background glow #1 */}
      <div
        className="
          absolute
          -left-32
          top-20
          h-96
          w-96
          rounded-full
          bg-blue-600/30
          blur-3xl
          animate-float-one
        "
      />

      {/* Background glow #2 */}
      <div
        className="
          absolute
          -right-32
          bottom-20
          h-96
          w-96
          rounded-full
          bg-purple-600/30
          blur-3xl
          animate-float-two
        "
      />

      {/* Main content */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
          
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-1xl">
          Manju Nagesh
        </h1>

        <p className="mt-6 text-2xl text-gray-300 md:text-3xl">
          Always{" "}
          <DynamicWords />
          
        </p>

        <h2 className="mt-6 text-xl text-gray-300 md:text-2xl">
          Cloud Infrastructure & Machine Learning
        </h2>

        <p className="mt-2 text-gray-400">
          BS, MS Computer Science
        </p>

        <p className="mt-1 text-gray-400">
          
        </p>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          I am a computer science graduate student interested in machine
          learning, cloud computing, algorithms, and building technology
          that solves real-world problems.
        </p>

      </section>
    </main>
  );
}
